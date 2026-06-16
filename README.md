# Shell Shockers — Better HUD

A feature-rich userscript for [Shell Shockers](https://shellshock.io) that adds a customizable HUD, performance controls, a crosshair editor, server-region picker, stats tracker, and more — all integrated cleanly into the game's native UI.

[![Version](https://img.shields.io/badge/version-4.8-blue.svg)](./Shell-Shockers-Better-Hud.user.js)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)
[![Tampermonkey](https://img.shields.io/badge/userscript-Tampermonkey-red.svg)](https://www.tampermonkey.net/)

---

## Install

1. Install a userscript manager:
   - [Tampermonkey](https://www.tampermonkey.net/) (Chrome / Edge / Firefox / Safari) — **recommended**
   - [Violentmonkey](https://violentmonkey.github.io/)
   - [Greasemonkey](https://www.greasespot.net/) (Firefox)
2. **[Click here to install Better HUD](https://github.com/ViroGear/Shell-Shockers-Better-Hud-Mod/raw/main/Shell-Shockers-Better-Hud.user.js)** — your userscript manager will open the install dialog automatically.
3. Open [shellshock.io](https://shellshock.io) and look for the new **MODS** and **CROSSHAIR** tabs in the settings menu.

> Updates are pulled automatically by your userscript manager once installed.

---

## Features

### HUD & Widgets
- **FPS / Ping display** with frametime mode, session timer, opacity control, and customizable fake values
- **Auto-pick best ping server** based on live latency readouts
- **Server-region picker** integrated into the frontpage with live ping
- **Hide individual HUD elements**: chat, kill feed, egg count, player list, ammo, grenade count, HP bar, nametags, scope lines, best-streak counters
- **Volume slider** added directly to the pause menu
- **Auto-fullscreen** on pointer lock
- **Tab-out key** — release pointer lock without snapping the camera

### Crosshair Editor
- Full crosshair customization with **profile system** (save / load / share)
- Color, length, width, gap, opacity, rotation, scale, outline, dot shape
- Static (outer) lines, plus-shape dot, rounded dot, and more
- Live preview in the settings panel

### Performance
- **Render scale** slider — trade resolution for FPS (1x native, up to 4x downscale)
- Disable post-processing (bloom / FXAA / DoF / motion blur), shadows, anti-aliasing, particles
- Skip frustum & pointer-pick raycasts for higher FPS
- Audio thread optimization (reduces GC sweeps and audio-thread stutter)
- Hide bullet projectile meshes, explosion smoke/fire, yolk burst, shell-casing burst

### Stats Tracker
- Local K/D/KDR session tracking with end-of-match overlay
- Pinned compact stats above the pause weapon select
- Configurable hotkey

### Valorant Sens Overlay
- Toggle **Use Valorant Sens** in the Mod HUD Widgets section to show Valorant-style sensitivity (e.g. `0.400`) next to the in-game Mouse Speed slider
- Two-way sync: drag the slider and the Valorant number updates; type a Valorant value and the slider follows
- Conversion factor tunable in the source (default: `shell_sens = valorant_sens x 75`)

### Other
- Telemetry blocking (Mixpanel, Google Analytics, Tag Manager, GameAnalytics)
- Export / import settings as JSON
- Basic / Advanced UI modes with searchable settings
- Settings persist via `localStorage`

---

## Usage

After install, all settings live under the game's **Settings** menu, in the new **MODS** and **CROSSHAIR** tabs added at the top of the panel. Use the **Search** box to jump to a specific option, or switch between **Basic** and **Advanced** modes to control how much is exposed.

Hover over any option name to see a description tooltip.

---

## Compatibility

Works on all Shell Shockers mirror domains, including:

`shellshock.io`, `algebra.best`, `algebra.vip`, `biologyclass.club`, `deadlyegg.com`, `deathegg.world`, `eggboy.club`, `eggboy.xyz`, `eggcombat.com`, `egg.dance`, `eggfacts.fun`, `egghead.institute`, `eggisthenewblack.com`, `eggsarecool.com`, `geometry.best`, `geometry.monster`, `geometry.pw`, `geometry.report`, `hardboiled.life`, `hardshell.life`, `humanorganising.org`, `mathactivity.xyz`, `mathactivity.club`, `mathdrills.info`, `mathdrills.life`, and more.

---

## Changelog

### v4.8 (current)
- **Crosshair Profiles redesigned** into a compact CS2-style icon bar (save / duplicate / export / import / delete) with custom SVG icons, plus a reworked profile **Gallery** (light cards, per-tile preview, active badge, "Create new" tile)
- **Legacy Skins & Legacy Sounds** toggles (classic gun models and SFX), togglable live without reload
- **FOV (Black Bars)** option: widens horizontal field of view via in-game letterboxing — no image distortion, no FOV-value change
- **Skin Unlocker** is now command-only (`toggle skins` in the Import Settings Code prompt); `setfps` / `setping` commands accept a single value too
- **Performance pass:** restored frustum culling (was rendering off-screen geometry), gated the nametag render hook and uncap rAF override behind their settings, pause non-essential timers/observers during matches, and removed duplicate legacy code that double-loaded audio
- **Bug fixes:** match-stats no longer stuck at 0 (collision-proof per-slot keying), can't-move-on-spawn after tab-out, and unequal crosshair arms on window resize

### v4.7
See [`archive/Better-UI-V4.7.txt`](./archive/Better-UI-V4.7.txt).

### v4.6
See [`archive/Better-UI-V4.6.txt`](./archive/Better-UI-V4.6.txt).

---

## Development

The userscript is a single self-contained file. To work on it:

1. Edit `Shell-Shockers-Better-Hud.user.js` directly.
2. In Tampermonkey, the script will be reloaded on the next page refresh.
3. Bump `@version` in the userscript header for release.

---

## License

[MIT](./LICENSE) (c) ViroGear

---

## Disclaimer

This is a client-side cosmetic and quality-of-life mod. It does not modify game logic, give unfair advantages, or interact with the game server beyond what the official client does. Use at your own discretion — moderators may still take action against use of any third-party scripts.
