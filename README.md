# Shell Shockers — Better HUD

> A customizable HUD, crosshair editor, performance controls, server picker, and stats tracker — built cleanly into the [Shell Shockers](https://shellshock.io) UI.

[![INSTALL](https://img.shields.io/badge/INSTALL-one--click-brightgreen?style=for-the-badge)](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Better-Hud-Mod/main/Shell-Shockers-Better-Hud.user.js)
&nbsp;
[![Version](https://img.shields.io/badge/version-4.9.11-black?style=for-the-badge)](./Shell-Shockers-Better-Hud.user.js)
[![License](https://img.shields.io/badge/license-MIT-lightgrey?style=for-the-badge)](./LICENSE)
[![YouTube](https://img.shields.io/badge/YouTube-%40subtovirojet-red?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@subtovirojet)

---

## Install in 30 seconds

| Step | Action |
|:---:|---|
| **1** | Add a userscript manager — **[Tampermonkey](https://www.tampermonkey.net/)** (recommended) or [Violentmonkey](https://violentmonkey.github.io/) |
| **2** | **[Click here to install Better HUD](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Better-Hud-Mod/main/Shell-Shockers-Better-Hud.user.js)** — the install dialog opens automatically |
| **3** | Open **[shellshock.io](https://shellshock.io)** → find the new **MODS** & **CROSSHAIR** tabs in Settings |

That's it. Updates install automatically from then on.

Direct install URL:
`https://raw.githubusercontent.com/Virojet/Shell-Shockers-Better-Hud-Mod/main/Shell-Shockers-Better-Hud.user.js`

Auto-update metadata URL:
`https://raw.githubusercontent.com/Virojet/Shell-Shockers-Better-Hud-Mod/main/Shell-Shockers-Better-Hud.meta.js`

> [!IMPORTANT]
> Already on an older version? Reload Shell Shockers and your userscript manager should detect v4.9.11 automatically. If it does not update, install once from the button above to refresh the update headers.

> [!NOTE]
> Some userscript managers require **Developer Mode** (or an "Allow User Scripts" toggle) to be enabled before custom scripts will run. If the install doesn't take, follow the steps below.

<details>
<summary><b>Enabling Developer Mode &amp; allowing userscripts</b></summary>

**1. Open your browser's Extensions page**

- **Google Chrome** — menu (three dots, top-right) → **Extensions** → **Manage Extensions**, or type `chrome://extensions` in the address bar
- **Microsoft Edge** — menu (three dots, top-right) → **Extensions**, or type `edge://extensions`
- **Brave** — menu (three lines, top-right) → **Extensions**, or type `brave://extensions`
- **Opera GX** — **Extensions** button (cube icon) on the left sidebar, or type `opera://extensions`

**2. Enable Developer Mode**

- Click the **Developer Mode** toggle (usually top-right of the Extensions page).
- This lets you install unreviewed or custom scripts if your manager requires it.

> [!NOTE]
> On Opera GX you may need to close the window and open a new one for the change to take effect.

**3. Allow userscripts to run**

- Find your userscript manager (e.g. **Tampermonkey**, **Violentmonkey**) and click **Details**.
- Find the option **Allow User Scripts** / **Allow Unreviewed Scripts** and toggle it **On**.

</details>

---

## What you get

| Feature | Description |
|---|---|
| **Crosshair Editor** | Full customization with save / load / share profiles and a live gallery |
| **HUD Controls** | FPS / ping display, hide any HUD element, volume slider, tab-out key |
| **Performance** | Render scale, disable post-FX / shadows / particles, frustum & raycast skips |
| **Server Picker** | Pick your region from the frontpage with live ping |
| **Stats Tracker** | Session K/D/KDR, match history, and an end-of-match overlay |
| **Inventory Favorites** | Star inventory items and export / import favorites with a shareable code |
| **Legacy Skins & Sounds** | Classic gun models and SFX available from settings |

<details>
<summary><b>Full feature list</b></summary>

#### HUD & Widgets
- **FPS / Ping display** with frametime mode, session timer, opacity control, and customizable values
- **Server-region picker** integrated into the frontpage with live ping
- **Hide individual HUD elements**: chat, kill feed, egg count, player list, ammo, grenade count, HP bar, nametags, scope lines, best-streak counters
- **Volume slider** added directly to the pause menu
- **Auto-fullscreen** on pointer lock
- **Tab-out key** — release pointer lock without snapping the camera

#### Crosshair Editor
- Full customization with a **profile system** (save / load / duplicate / export / import) and a visual **gallery**
- Color, length, width, gap, opacity, rotation, scale, outline, dot shape
- Static (outer) lines, plus-shape dot, rounded dot, and more
- Live preview in the settings panel

#### Performance
- **Render scale** slider — trade resolution for FPS (1× native up to 4× downscale)
- Disable post-processing (bloom / FXAA / DoF / motion blur), shadows, anti-aliasing, particles
- Skip pointer-pick raycasts for higher FPS
- Audio thread optimization (reduces GC sweeps and audio-thread stutter)
- Hide bullet projectile meshes, explosion smoke / fire, yolk burst, shell-casing burst
- **FOV (Black Bars)** — wider horizontal field of view via in-game letterboxing, no distortion

#### Stats Tracker
- Local K / D / KDR session tracking with an end-of-match overlay
- **Stats History** saves recent matches so you can revisit scoreboards, maps, modes, servers, and durations
- Pinned compact stats above the pause weapon select
- Configurable hotkey

#### Visual & Audio
- **Legacy Skins** — classic gun models for the default weapons (visual only)
- **Legacy Sounds** — classic weapon and game sound effects

#### Other
- Telemetry blocking (Mixpanel, Google Analytics, Tag Manager, GameAnalytics)
- Export / import settings as a shareable code
- Export / import inventory favorites as a shareable code
- Searchable settings
- Settings persist via `localStorage`

</details>

---

## Usage

All settings live under the game's **Settings** menu in the new **MODS** and **CROSSHAIR** tabs. Use the **Search** box to jump to an option, and **hover any option name** for a description tooltip.

To check what's new later, click the **Shell Shockers Better HUD** version text at the bottom of the mod settings panel to reopen the changelog and browse older releases.

---

## Compatibility

Works on **all Shell Shockers mirror domains** — `shellshock.io` and 40+ others.

<details>
<summary>Show all domains</summary>

`shellshock.io`, `algebra.best`, `algebra.vip`, `biologyclass.club`, `deadlyegg.com`, `deathegg.world`, `eggboy.club`, `eggboy.xyz`, `eggcombat.com`, `egg.dance`, `eggfacts.fun`, `egghead.institute`, `eggisthenewblack.com`, `eggsarecool.com`, `geometry.best`, `geometry.monster`, `geometry.pw`, `geometry.report`, `hardboiled.life`, `hardshell.life`, `humanorganising.org`, `mathactivity.xyz`, `mathactivity.club`, `mathdrills.info`, `mathdrills.life`, and more.

</details>

---

## Changelog

#### v4.9.9 — current
- **No more random mid-match resets:** the live scoreboard no longer resets to 0 during a match. A one-frame stat glitch could look like a match ending; the tracker now requires the signal to persist before resetting, so normal play — including tabbing out and back in — never wipes your stats

<details>
<summary>Older versions</summary>

#### v4.9.8
- **Match-end stats hardened:** longer matches no longer drop players from the scoreboard or write a junk 2-second duplicate match to Stats History — a second end-of-match rollover can no longer fire right after the first, and trivially short matches are never saved
- **Hide Scope Frame disabled by default:** now off for everyone on update, and no longer available as a settings option, since it can give an unfair edge (per the developers)

#### v4.9.7
- **Match-end scoreboard:** when a match ends, the live scoreboard now holds the final K / D instead of flashing to 0 — it resets only when the next match actually starts, and no longer writes a blank duplicate match to Stats History
- **Hide Scope Frame:** removed from the settings menu at the developers' request since it can give an unfair edge

#### v4.9.6
- **Loading freeze fixed:** the game no longer hangs on the loading screen when **Uncap FPS** is on — it now engages only in-match, so the game always loads and reloads cleanly
- **Accurate live stats:** kills (including **melee and grenade** kills) count reliably, a new game or round restarts at **0**, and leave-and-rejoin still carries your totals over
- **Stats History:** every match/round gets its own entry (no overwrites), games save even when the server code can't be read, and you can now **Download** a match scoreboard (not just Copy). A renamed match hides its game code — hover the name to reveal it — and the code is kept out of copied/saved images
- **Live server regions:** the picker mirrors the game's real region list — retired regions (US Central) disappear, new ones appear automatically with live ping, and region names no longer pick up a stray "ms"
- **UI polish:** the respawn-screen volume slider and Match Stats box are sized to match the native panel, and the selected-region checkmark no longer appears upside down
- **Performance:** less idle and in-match overhead from observers, timers, and stats saves

#### v4.9
- **Update prompt fix:** the "update available" toast no longer appears when you're already on the latest version, and won't re-nag once dismissed
- **More accurate stats:** duplicate-named players now get their own scoreboard rows instead of merging into one, and your kills / deaths are preserved if you leave and rejoin the same match
- **Stats copy fix:** the **Copy / Download as image** button now captures the entire stats panel — no more clipped columns or stretched layout
- **Absurd stats fix:** players no longer show impossible totals (e.g. 1000+ kills) when several share a name or a player slot is recycled mid-match
- **Changelog access:** click the version text at the bottom of the mod settings panel to reopen the changelog any time, with older versions available from a dropdown
- **Stats History:** recent matches are now saved so you can revisit the scoreboard, map, mode, server, and match duration later
- **Hide Scope Frame:** hides the scope overlay while scoped for a clean full-screen scoped view, with scope state preserved and no frozen edges
- **Low Textures:** optional lower texture filtering for cheaper GPU sampling and extra FPS
- **Adaptive UI:** mod menus and panels now scale better across resolutions instead of relying on fixed pixel sizing
- **Favorites controls:** export / import favorites buttons stay aligned beside the egg-color picker and scale with the player's resolution
- **Stats fixes:** stat screenshots use the game font, long stats panels scroll correctly, duplicated empty stat rows are gone, and the match timer ticks again
- **Settings fixes:** imported/reset settings save correctly, and the server-picker arrow no longer sticks

- **v4.8.5** — update-on-reload prompt, scope cleanup, auto-update headers, and the first in-game changelog popup
- **v4.8.2** — redesigned crosshair profiles, profile gallery, FOV black bars, classic models and SFX settings, performance cleanup, and match-stats fixes
- **v4.7** — see [`archive/Better-UI-V4.7.txt`](./archive/Better-UI-V4.7.txt)
- **v4.6** — see [`archive/Better-UI-V4.6.txt`](./archive/Better-UI-V4.6.txt)

</details>

---

## Development

The userscript is a single self-contained file:

1. Edit `Shell-Shockers-Better-Hud.user.js` directly
2. Reload the Shell Shockers tab — Tampermonkey picks up the change
3. Bump `@version` in the header for a release

---

## Creator

<div align="center">

**Made by Virojet** — Shell Shockers gameplay, montages, and mod content.

[![Subscribe on YouTube](https://img.shields.io/badge/Subscribe-%40subtovirojet-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@subtovirojet)

</div>

---

## License & Disclaimer

[MIT](./LICENSE) © ViroGear.

A client-side cosmetic and quality-of-life mod. It does **not** modify game logic, give unfair advantages, or interact with the server beyond what the official client does. Use at your own discretion — moderators may still act against use of any third-party scripts.
