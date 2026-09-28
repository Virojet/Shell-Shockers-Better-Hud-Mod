# Shell Shockers — Better HUD

> A customizable HUD, crosshair editor, server picker, and stats tracker — built cleanly into the [Shell Shockers](https://shellshock.io) UI.

[![INSTALL](https://img.shields.io/badge/INSTALL-one--click-brightgreen?style=for-the-badge)](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Better-Hud-Mod/main/Shell-Shockers-Better-Hud.user.js)
&nbsp;
[![Version](https://img.shields.io/badge/version-5.1.0-black?style=for-the-badge)](./Shell-Shockers-Better-Hud.user.js)
[![License](https://img.shields.io/badge/license-MIT-lightgrey?style=for-the-badge)](./LICENSE)
[![YouTube](https://img.shields.io/badge/YouTube-%40subtovirojet-red?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@subtovirojet)

**New in v5.1:** a cleaner MODS tab with section shortcuts, in-game pop-ups instead of browser popups, and a Check for updates button. [See the changelog](#changelog).

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
> Already on an older version? Your userscript manager picks up v5.1.0 on its next update check, and Better HUD shows an **Update now** prompt in-game. To update right away, click the Tampermonkey icon → **Check for userscript updates**, or install once from the button above. Your settings are kept.

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
| **HUD Controls** | FPS / ping display, hide any HUD element, infinite chat history, volume slider, tab-out key |
| **Effects & FPS** | Uncap FPS, hide bullets / explosions / particles, FOV black bars |
| **Server Picker** | Pick your region from the frontpage with live ping |
| **Stats Tracker** | Session K/D/KDR, match history one click from the home screen, and an end-of-match overlay |
| **Inventory Favorites** | Star inventory items and export / import favorites with a shareable code |
| **Legacy Skins & Sounds** | Classic gun models and SFX available from settings |

<details>
<summary><b>Full feature list</b></summary>

#### HUD & Widgets
- **FPS / Ping display** with frametime mode, session timer, an optional see-through box, and customizable values
- **Server-region picker** integrated into the frontpage with live ping
- **Hide individual HUD elements**: chat, kill feed, egg count, player list, ammo, grenade count, HP bar, scope lines, best-streak counters
- **Infinite Chat History** — keeps the whole match's chat; pause or open chat and scroll back to read it all
- **Match History button** on the home screen, beside the Server selector
- **Volume slider** added directly to the pause menu
- **Auto-fullscreen** on pointer lock
- **Tab-out key** — release pointer lock without snapping the camera

#### Crosshair Editor
- Full customization with a **profile system** (save / load / duplicate / export / import) and a visual **gallery**
- Color, length, width, gap, opacity, rotation, scale, outline, dot shape
- Static (outer) lines, plus-shape dot, rounded dot, and more
- Live preview in the settings panel

#### Effects & FPS
- **Uncap FPS** — match high-refresh-rate monitors
- Hide bullet projectile meshes, explosion smoke / fire, yolk burst, shell-casing burst, or all particles
- Audio thread optimization (reduces GC sweeps and audio-thread stutter)
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
- **Block Ads** — optional, off by default; hides in-game video and banner ads after a page reload (F5)
- Telemetry blocking (Mixpanel, Google Analytics, Tag Manager, GameAnalytics)
- Export / import settings as a shareable code
- Export / import inventory favorites as a shareable code
- Searchable settings, with section shortcuts (HUD, Chat, Effects, FPS & Ping, Menus, Stats, Gameplay, Manage)
- In-game pop-ups for codes and confirmations instead of browser popups
- **Check for updates** button at the bottom of the MODS tab
- Settings persist via `localStorage`

</details>

---

## Usage

All settings live under the game's **Settings** menu in the new **MODS** and **CROSSHAIR** tabs. Use the **Search** box or the section buttons beside it to jump to an option, and **hover any option name** for a description tooltip.

To check what's new later, click the **Shell Shockers Better HUD** version text at the bottom of the mod settings panel to reopen the changelog and browse older releases. **Check for updates**, next to it, looks for a newer version right away.

---

## Troubleshooting

- **Update not showing up?** Press **Check for updates** at the bottom of the MODS tab, or click the Tampermonkey icon → **Check for userscript updates**, or install again from the button at the top. Your settings are kept.
- **Block Ads didn't change anything?** It takes effect after a full page reload (**F5**); leaving and rejoining a match isn't enough.
- **Something broke after a Shell Shockers update?** Press **F12**, open **Console**, and find the `[Better UI] Game patches:` line. If it ends with `NOT applied: …`, the game changed something the mod relies on. [Open an issue](https://github.com/Virojet/Shell-Shockers-Better-Hud-Mod/issues) and paste that line.

---

## Compatibility

Works on **all Shell Shockers mirror domains** — `shellshock.io` and 40+ others.

<details>
<summary>Show all domains</summary>

`shellshock.io`, `algebra.best`, `algebra.vip`, `biologyclass.club`, `deadlyegg.com`, `deathegg.world`, `eggboy.club`, `eggboy.xyz`, `eggcombat.com`, `egg.dance`, `eggfacts.fun`, `egghead.institute`, `eggisthenewblack.com`, `eggsarecool.com`, `geometry.best`, `geometry.monster`, `geometry.pw`, `geometry.report`, `hardboiled.life`, `hardshell.life`, `humanorganising.org`, `mathactivity.xyz`, `mathactivity.club`, `mathdrills.info`, `mathdrills.life`, and more.

</details>

---

## Changelog

#### v5.1 — current

- **In-game pop-ups:** copying, importing and resetting settings, crosshair profiles, match history and favorites now use Better HUD's own pop-ups instead of the browser's. The confirmation shows the code you copied, and if your browser blocks the clipboard you get the code to copy by hand
- **New MODS layout:** settings are regrouped into HUD, Chat, Effects, FPS & Ping, Menus, Stats, Gameplay and Manage, with shortcut buttons beside the search box that stay pinned while you scroll. New controls are marked **NEW**
- **Clearer names:** for example **Hide Scoreboard & Kill Feed** (was Hide Player Readouts), **Server Picker**, **Match History Button** and **Hide Box Background**. Searching for the old names still finds them
- **Better search:** also searches each setting's description, has a clear button, and tells you when nothing matches. **Esc** clears it
- **Complete settings codes:** codes now include Block Ads, Infinite Chat History, the Match History button and the favorites options, and **Reset All Mod Settings** resets them too
- **Check for updates:** a new button at the bottom of the MODS tab checks GitHub right away
- **Preview backgrounds:** one-click Sky, Grey, Dark and White backgrounds for the crosshair preview
- **Update prompt:** the update-available card has a clearer layout, a close button and a **What's new** link
- **Consistent tooltips:** every Better HUD button shows the same styled tooltip, including the stats panel and crosshair profile buttons

#### v5.0.1

- **Pause menu position:** with Block Ads on, the pause menu no longer sits higher than normal; it stays where the game usually puts it
- **Hide Chat hides the whole chat:** the chat box in the bottom-left corner is hidden too, not just the messages
- **No more Server button blink:** the Server selector on the home screen no longer flickers off and on right after the page loads
- **New crosshair profiles start enabled:** creating a profile turns the Crosshair Customizer on, so you can start editing right away
- **Performance Settings removed:** Render Scale, Disable Shadows, Disable Anti-Aliasing and Low Texture Filtering are gone from the MODS tab. If you had any of them on, the game goes back to its normal graphics

#### v5.0

- **Smoother menus:** no more stutter when opening panels or switching tabs. A background check that re-measured the whole page after every change no longer runs, and the mod's own background work on the menus is about halved
- **Faster loading:** the mod prepares the game's code in one pass instead of three, so there's about 80 ms less work before the game starts
- **Infinite Chat stays small:** while you play, the chat stays a small box in the corner instead of growing to cover the screen after you pause and resume
- **Stuck chat box fixed:** the blue paused-chat box no longer stays on screen after you spawn
- **Chat fixes:** with Infinite Chat History on, the "share game link" line shows once when you join, messages from your last match no longer carry over, and messages that arrive together stay in order
- **Block Ads:** new toggle under **MODS ▸ Game HUD** that hides in-game video and banner ads and the leftover promo boxes. Off by default; press **F5** after changing it
- **Tighter settings panel:** the MODS list now reaches down to Cancel / Confirm, so the big empty gap at the bottom is gone
- **Positional audio:** with Audio Optimization on (the default), sounds above or below you now adjust as you climb or drop
- **Lighter matches:** Stats History saves at most every 15 seconds mid-match, and always right away when the match ends or you pause
- **Reliable startup:** fixed an error that could stop some features from loading when the userscript manager starts the mod very early
- **Easier bug reports:** the browser console now lists which game tweaks loaded (see [Troubleshooting](#troubleshooting))

#### v4.10

- **Better defaults:** new installs start with the recommended `M-Fb1Ul0Gb1Gl1Sp1` settings preset
- **Cleaner first launch:** the HUD box and front-page server list are hidden, shell-burst particles and scope lines are disabled, and match stats stay pinned
- **Consistent reset:** **Reset All Mod Settings** restores the same recommended v4.10 defaults
- **Saved preferences preserved:** updating does not overwrite settings a user has already chosen

<details>
<summary>Older versions</summary>

#### v4.9.14
- **Infinite Chat History:** the game deletes older chat messages as the log grows, so scrolling back showed nothing. Chat is now kept for the whole match — pause or open chat and scroll up to read it all. New toggle under **MODS ▸ Game HUD**
- **Match History button:** a button on the home screen, beside the Server selector, that opens your saved match history in one click. New toggle under **MODS ▸ Mod HUD Widgets**
- **"Hide Game HUD" is now just "Game HUD"**, since the section holds more than hide toggles

#### v4.9.13
- **Team swaps no longer wipe the scoreboard:** switching teams mid-game reshuffles player slots, which could make the tracker think the match had restarted and reset **everyone** to 0. Stat resets are now driven only by actually joining a new lobby
- **Stats continue across rounds:** while you stay in the same lobby, your K / D keeps accumulating and stays a single Match History entry instead of splitting into a new one every round
- **No more random mid-match resets:** a one-frame stat glitch or a background game connection can no longer look like a match ending — normal play, including tabbing out and back in, never wipes your stats

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
3. Bump `@version` in the header for a release. On push to `main`, the **Sync meta.js** workflow copies the header into `Shell-Shockers-Better-Hud.meta.js`, the file userscript managers check for updates

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
