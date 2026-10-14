"""Pull GitHub traffic stats and merge them into a lasting history.

GitHub only keeps the last 14 days, so this runs daily and keeps every
day it has ever seen in traffic/history.json.
"""
import json
import os
import urllib.request
from pathlib import Path

REPO = os.environ["GITHUB_REPOSITORY"]
TOKEN = os.environ["TRAFFIC_TOKEN"]
OUT = Path("traffic")
HISTORY = OUT / "history.json"


def api(path):
    req = urllib.request.Request(
        f"https://api.github.com/repos/{REPO}/traffic/{path}",
        headers={
            "Authorization": f"Bearer {TOKEN}",
            "Accept": "application/vnd.github+json",
        },
    )
    with urllib.request.urlopen(req) as r:
        return json.load(r)


def merge(store, entries):
    # Newer numbers for the same day replace older ones (today fills in over time).
    for e in entries:
        store[e["timestamp"][:10]] = {"count": e["count"], "uniques": e["uniques"]}


OUT.mkdir(exist_ok=True)
data = json.loads(HISTORY.read_text()) if HISTORY.exists() else {"views": {}, "clones": {}}

merge(data["views"], api("views")["views"])
merge(data["clones"], api("clones")["clones"])
data["popular_paths"] = api("popular/paths")
data["referrers"] = api("popular/referrers")

totals = {
    kind: {
        "count": sum(d["count"] for d in data[kind].values()),
        "uniques": sum(d["uniques"] for d in data[kind].values()),
    }
    for kind in ("views", "clones")
}
data["totals"] = totals
HISTORY.write_text(json.dumps(data, indent=2, sort_keys=True) + "\n")

# shields.io endpoint badges
for kind in ("views", "clones"):
    (OUT / f"{kind}-badge.json").write_text(json.dumps({
        "schemaVersion": 1,
        "label": kind,
        "message": f"{totals[kind]['count']:,}",
        "color": "blue",
    }) + "\n")

print(json.dumps(totals))
