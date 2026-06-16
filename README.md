# Shell Shockers — Better HUD

> A customizable HUD, crosshair editor, performance controls, server picker, and stats tracker — built cleanly into the [Shell Shockers](https://shellshock.io) UI.

[![INSTALL](https://img.shields.io/badge/INSTALL-one--click-brightgreen?style=for-the-badge)](https://github.com/ViroGear/Shell-Shockers-Better-Hud-Mod/raw/main/Shell-Shockers-Better-Hud.user.js)
&nbsp;
[![Version](https://img.shields.io/badge/version-4.8.2-blue?style=for-the-badge)](./Shell-Shockers-Better-Hud.user.js)
[![License](https://img.shields.io/badge/license-MIT-lightgrey?style=for-the-badge)](./LICENSE)
[![YouTube](https://img.shields.io/badge/YouTube-%40subtovirojet-red?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@subtovirojet)

---

## Install in 30 seconds

| Step | Action |
|:---:|---|
| **1** | Add a userscript manager — **[Tampermonkey](https://www.tampermonkey.net/)** (recommended) or [Violentmonkey](https://violentmonkey.github.io/) |
| **2** | **[Click here to install Better HUD](https://github.com/ViroGear/Shell-Shockers-Better-Hud-Mod/raw/main/Shell-Shockers-Better-Hud.user.js)** — the install dialog opens automatically |
| **3** | Open **[shellshock.io](https://shellshock.io)** → find the new **MODS** & **CROSSHAIR** tabs in Settings |

That's it. Updates install automatically from then on.

> [!IMPORTANT]
> Already installed an older copy? Reinstall once from the button above. That installs the new auto-update headers, so future releases update automatically.

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
| **Stats Tracker** | Session K/D/KDR with an end-of-match overlay |
| **Legacy Skins & Sounds** | Classic gun models and SFX, toggled live |

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
- Pinned compact stats above the pause weapon select
- Configurable hotkey

#### Visual & Audio
- **Legacy Skins** — classic gun models for the default weapons (visual only)
- **Legacy Sounds** — classic weapon and game sound effects

#### Other
- Telemetry blocking (Mixpanel, Google Analytics, Tag Manager, GameAnalytics)
- Export / import settings as a shareable code
- Basic / Advanced UI modes with searchable settings
- Settings persist via `localStorage`

</details>

---

## Usage

All settings live under the game's **Settings** menu in the new **MODS** and **CROSSHAIR** tabs. Use the **Search** box to jump to an option, switch between **Basic** and **Advanced** modes, and **hover any option name** for a description tooltip.

---

## Compatibility

Works on **all Shell Shockers mirror domains** — `shellshock.io` and 40+ others.

<details>
<summary>Show all domains</summary>

`shellshock.io`, `algebra.best`, `algebra.vip`, `biologyclass.club`, `deadlyegg.com`, `deathegg.world`, `eggboy.club`, `eggboy.xyz`, `eggcombat.com`, `egg.dance`, `eggfacts.fun`, `egghead.institute`, `eggisthenewblack.com`, `eggsarecool.com`, `geometry.best`, `geometry.monster`, `geometry.pw`, `geometry.report`, `hardboiled.life`, `hardshell.life`, `humanorganising.org`, `mathactivity.xyz`, `mathactivity.club`, `mathdrills.info`, `mathdrills.life`, and more.

</details>

---

## Changelog

#### v4.8 — current
- **Auto-update enabled:** Tampermonkey/Violentmonkey can now detect future releases from GitHub instead of requiring manual copy/paste installs
- **In-game changelog popup:** new versions show a one-time "what changed" panel when Shell Shockers opens
- **Crosshair Profiles redesigned** into a compact CS2-style icon bar (save / duplicate / export / import / delete) with custom SVG icons, plus a reworked profile **Gallery** (light cards, per-tile preview, active badge, "Create new" tile)
- **Legacy Skins & Legacy Sounds** toggles (classic gun models and SFX), togglable live without reload
- **FOV (Black Bars)** option: widens horizontal field of view via in-game letterboxing — no image distortion, no FOV-value change
- **Skin Unlocker** reworked and streamlined
- **Performance pass:** restored frustum culling, gated the nametag render hook and uncap rAF override behind their settings, paused non-essential timers/observers during matches, removed Ultra Performance, and removed duplicate legacy code that double-loaded audio
- **Bug fixes:** match-stats no longer stuck at 0, can't-move-on-spawn after tab-out, and unequal crosshair arms on window resize

<details>
<summary>Older versions</summary>

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
