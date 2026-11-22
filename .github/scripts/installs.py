"""Save each mod's install count as a shields.io endpoint badge.

The counters live on Abacus (abacus.jasoncameron.dev). It is often too slow
for shields.io, which gives up after about 4 seconds and shows "inaccessible".
This reads every counter with a long timeout and retries, and writes
traffic/installs/<name>.json. The README badges read those files, so they
always show the last count that was read. A counter that can't be read, or
that answers lower than before (Abacus counts never go down), keeps its file.
"""
import json
import time
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

COUNTERS = [
    "better-hud",
    "blossom-v4",
    "cherry-blossom",
    "crosshair-mod",
    "gun-sounds",
    "kill-sounds",
    "mod-menu",
    "shellstrike",
    "smoke-logo",
    "stats-mod",
    "valorant-sensitivity",
]
URL = "https://abacus.jasoncameron.dev/get/virojet-{}/installs"
OUT = Path("traffic/installs")
TRIES = 4
TIMEOUT = 30  # seconds per try


def fetch(name):
    """Return the counter's value, or raise with the last error."""
    error = None
    for attempt in range(1, TRIES + 1):
        try:
            req = urllib.request.Request(URL.format(name), headers={"User-Agent": "install-badges"})
            with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
                value = json.load(r).get("value")
            if type(value) is int and value >= 0:
                return value
            error = f"unexpected answer {value!r}"
        except Exception as e:  # timeouts, HTTP errors, bad JSON
            error = f"{type(e).__name__}: {e}"
        if attempt < TRIES:
            time.sleep(15 * attempt)
    raise RuntimeError(error)


def saved(path):
    """The count already in a badge file, or None."""
    try:
        return int(json.loads(path.read_text())["message"].replace(",", ""))
    except (OSError, ValueError, KeyError):
        return None


def update(name):
    path = OUT / f"{name}.json"
    old = saved(path)
    try:
        value = fetch(name)
    except RuntimeError as e:
        return f"::warning::{name}: not read ({e}); keeping {old}"
    if old is not None and value < old:
        return f"::warning::{name}: Abacus says {value}, lower than {old}; keeping {old}"
    path.write_text(json.dumps({
        "schemaVersion": 1,
        "label": "installs",
        "message": f"{value:,}",
        "color": "2ea44f",
    }) + "\n")
    return f"{name}: {value}" + ("" if old == value else f" (was {old})")


OUT.mkdir(parents=True, exist_ok=True)
with ThreadPoolExecutor(max_workers=len(COUNTERS)) as pool:
    for line in pool.map(update, COUNTERS):
        print(line)
