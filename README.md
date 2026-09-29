<div align="center">

# Shell Shockers — Better HUD

**A cleaner HUD, a full crosshair editor, match stats and a server picker, built right into the [Shell Shockers](https://shellshock.io) settings menu.**

<br>

[![Install Better HUD](https://img.shields.io/badge/Install_Better_HUD-one_click-2ea44f?style=for-the-badge&logo=tampermonkey&logoColor=white)](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Better-Hud-Mod/main/Shell-Shockers-Better-Hud.user.js)

[![Version](https://img.shields.io/badge/version-5.2.2-0E7697?style=flat-square)](#changelog)
[![License: MIT](https://img.shields.io/badge/license-MIT-lightgrey?style=flat-square)](./LICENSE)
[![Auto-updates](https://img.shields.io/badge/updates-automatic-f79520?style=flat-square)](#updating)
[![YouTube](https://img.shields.io/badge/YouTube-%40subtovirojet-FF0000?style=flat-square&logo=youtube&logoColor=white)](https://www.youtube.com/@subtovirojet)

[**Install**](#install) &nbsp;·&nbsp; [**What's new**](#whats-new-in-v52) &nbsp;·&nbsp; [**Features**](#features) &nbsp;·&nbsp; [**Help**](#troubleshooting) &nbsp;·&nbsp; [**Changelog**](#changelog)

</div>

---

## Install

**About a minute, and free.** Updates install on their own afterwards.

1. **Get Tampermonkey** for your browser: [Chrome](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) · [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd) · [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/) · [Opera GX & others](https://www.tampermonkey.net/) (or use [Violentmonkey](https://violentmonkey.github.io/))
2. **[Click here to install Better HUD](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Better-Hud-Mod/main/Shell-Shockers-Better-Hud.user.js)**, then press **Install** on the page that opens
3. **Open [shellshock.io](https://shellshock.io)** → ⚙️ **Settings** → the new **MODS** and **CROSSHAIR** tabs

> [!TIP]
> **Nothing happens in step 3?** Chrome, Edge, Brave and Opera need one extra switch: open your browser's **Extensions** page → **Tampermonkey** → **Details** → turn on **Allow User Scripts** (on some browsers it's **Developer Mode**, top-right of the Extensions page). Then reload the game. [Step-by-step for each browser ↓](#allow-user-scripts)

<a name="allow-user-scripts"></a>
<details>
<summary><b>Allow user scripts, step by step</b></summary>

<br>

**1. Open the Extensions page**

| Browser | How |
|---|---|
| **Chrome** | ⋮ menu → **Extensions** → **Manage Extensions**, or go to `chrome://extensions` |
| **Edge** | ⋯ menu → **Extensions**, or go to `edge://extensions` |
| **Brave** | ≡ menu → **Extensions**, or go to `brave://extensions` |
| **Opera GX** | Cube icon in the left sidebar, or go to `opera://extensions` |

**2. Turn on Developer Mode** with the toggle near the top-right of the page.

**3. Allow user scripts:** find **Tampermonkey** (or Violentmonkey), click **Details**, and switch **Allow User Scripts** / **Allow Unreviewed Scripts** on.

> [!NOTE]
> On Opera GX, close the window and open a new one for the change to take effect.

</details>

### Updating

You don't need to do anything. Tampermonkey picks up new versions by itself, and Better HUD reminds you once when a new version comes out. The bottom of the **MODS** tab always shows whether you're **Up to date**.

Want it right now? Press **Update** (or **Check for updates**) at the bottom of the MODS tab, or install again from the button above. Your settings and crosshairs are kept.

---

## What's new in v5.2

- 🎯 **Starter crosshairs:** Default, Techno, Green Dot, No Hair and No Center Dot are ready to try in your gallery
- ⚡ **Quick picker:** switch crosshairs in one click from the previews under **GALLERY**, and drag gallery cards into any order
- ⚪ **Dot outline:** give the center dot its own outline color and width
- 🔍 **Sharper everywhere:** the Still crosshair is pixel-crisp on high-res screens, and previews look the same at any resolution
- 🔔 **Update reminder:** one friendly heads-up per new version, plus an up-to-date status in the MODS tab

[Full changelog ↓](#changelog)

---

## Features

| | Feature | What it does |
|:---:|---|---|
| 🎯 | **Crosshair editor** | Build any crosshair with a live preview, save it as a profile, share it as a code, and switch in one click |
| 🖥️ | **HUD controls** | FPS / ping display, hide any HUD element, infinite chat history, volume slider, tab-out key |
| 🚀 | **Effects & FPS** | Uncap FPS, hide bullets / explosions / particles, wider FOV with black bars |
| 🌍 | **Server picker** | Choose your region from the home screen, with live ping |
| 📊 | **Stats tracker** | Session K / D / KDR, an end-of-match overlay, and match history you can filter and export |
| ⭐ | **Inventory favorites** | Star inventory items and share them with a code |
| 🔊 | **Legacy skins & sounds** | Classic gun models and sound effects |

<details>
<summary><b>Full feature list</b></summary>

#### HUD & widgets
- **FPS / Ping display** with frametime mode, session timer, an optional see-through box, and customizable values
- **Server-region picker** integrated into the home screen with live ping
- **Hide individual HUD elements**: chat, kill feed, egg count, player list, ammo, grenade count, HP bar, scope lines, best-streak counters
- **Infinite Chat History**: keeps the whole match's chat; pause or open chat and scroll back to read it all
- **Match History button** on the home screen, beside the Server selector
- **Volume slider** added directly to the pause menu
- **Auto-fullscreen** on pointer lock
- **Tab-out key**: release pointer lock without snapping the camera

#### Crosshair editor
- **Profiles**: save / load / duplicate / export / import, with a visual **gallery** you can reorder by dragging
- **Starter crosshairs** to try, and a **quick picker** of small previews under GALLERY
- Color, length, width, gap, opacity, rotation, scale, outline, dot shape, dot outline color and width
- Static (outer) lines, plus-shape dot, rounded dot, and more
- Live preview with Sky, Grey, Dark and White backgrounds

#### Effects & FPS
- **Uncap FPS** to match high-refresh-rate monitors
- Hide bullet projectile meshes, explosion smoke / fire, yolk burst, shell-casing burst, or all particles
- Audio thread optimization (reduces GC sweeps and audio-thread stutter)
- **FOV (Black Bars)**: wider horizontal field of view via in-game letterboxing, no distortion

#### Stats tracker
- Local K / D / KDR session tracking with an end-of-match overlay
- **Match History** saves recent matches so you can revisit scoreboards, maps, modes, servers and durations, filter them, and export JSON / CSV
- Pinned compact stats above the pause weapon select
- Configurable hotkey

#### Visual & audio
- **Legacy Skins**: classic gun models for the default weapons (visual only)
- **Legacy Sounds**: classic weapon and game sound effects

#### Other
- **Block Ads**: optional, off by default; hides in-game video and banner ads after a page reload (F5)
- Telemetry blocking (Mixpanel, Google Analytics, Tag Manager, GameAnalytics)
- Export / import settings and inventory favorites as shareable codes
- Searchable settings, with section shortcuts (HUD, Chat, Effects, FPS & Ping, Menus, Stats, Gameplay, Manage)
- In-game pop-ups for codes and confirmations instead of browser popups
- **Check for updates** at the bottom of the MODS tab, with an **Up to date** / **Update** status beside it
- Settings persist via `localStorage`

</details>

---

## Using it

- **Find everything** under the game's ⚙️ **Settings** menu, in the **MODS** and **CROSSHAIR** tabs.
- **Search** or use the section buttons beside the search box to jump to an option. **Hover** any option for a description.
- **See what changed** by clicking the **Shell Shockers Better HUD** version text at the bottom of the MODS tab.

---

## Troubleshooting

<details>
<summary><b>The MODS and CROSSHAIR tabs don't appear</b></summary>

<br>

Make sure Tampermonkey is on and **Allow User Scripts** is enabled ([how](#allow-user-scripts)), then reload the game with **F5**. Check that Better HUD is switched on in the Tampermonkey dashboard.

</details>

<details>
<summary><b>An update isn't showing up</b></summary>

<br>

Press **Check for updates** at the bottom of the MODS tab, or click the Tampermonkey icon → **Check for userscript updates**, or install again from the [button at the top](#install). Your settings are kept.

</details>

<details>
<summary><b>Block Ads didn't change anything</b></summary>

<br>

It takes effect after a full page reload (**F5**). Leaving and rejoining a match isn't enough.

</details>

<details>
<summary><b>Something broke after a Shell Shockers update</b></summary>

<br>

Press **F12**, open **Console**, and find the `[Better UI] Game patches:` line. If it ends with `NOT applied: …`, the game changed something the mod relies on. [Open an issue](https://github.com/Virojet/Shell-Shockers-Better-Hud-Mod/issues) and paste that line.

</details>

---

## Compatibility

Works on **shellshock.io and 40+ mirror domains**, in any browser that runs Tampermonkey or Violentmonkey.

<details>
<summary>Show all domains</summary>

<br>

`shellshock.io`, `algebra.best`, `algebra.vip`, `biologyclass.club`, `deadlyegg.com`, `deathegg.world`, `eggboy.club`, `eggboy.xyz`, `eggcombat.com`, `egg.dance`, `eggfacts.fun`, `egghead.institute`, `eggisthenewblack.com`, `eggsarecool.com`, `geometry.best`, `geometry.monster`, `geometry.pw`, `geometry.report`, `hardboiled.life`, `hardshell.life`, `humanorganising.org`, `mathactivity.xyz`, `mathactivity.club`, `mathdrills.info`, `mathdrills.life`, and more.

</details>

---

## Changelog

#### v5.2.2 — current

- **Update reminder:** when a new Better HUD comes out, you get one friendly reminder the next time you load the game. It shows once per version, so it never nags
- **Update status:** the bottom of the MODS tab shows whether you're **Up to date**. When an update is waiting, an **Update** button installs it in one click
- **Faster update checks:** the automatic check now runs at most every 30 minutes (was 6 hours), so you hear about a new version soon after it comes out
- **Wider Crosshair tab:** the Crosshair tab uses the same wide Settings window as MODS, so the profile buttons are never cut off

#### v5.2.1

- **Settings tabs:** the **CROSSHAIR** tab no longer sticks out past the right edge of the Settings window on some screens. All five tabs now share the row equally at any screen size

#### v5.2

**Crosshair**
- **Starter crosshairs:** five profiles to try now lead your gallery: **Default**, **Techno**, **Green Dot**, **No Hair** and **No Center Dot**. Profiles you made are kept right after them
- **Quick picker:** a row of small previews under **GALLERY** switches profiles in one click. When they don't all fit, a **+N** card opens the gallery
- **Reorder the gallery:** drag cards to change their order (or focus a card and press **Alt + arrow keys**). The quick picker and the profile list follow the same order
- **Dot outline:** the center dot has its own **Outline Color** and **Outline Width** (**Crosshair ▸ Center Dot ▸ Dot**). A wider outline grows around the dot so the fill keeps its size, for example a pink outline around a white dot. Width 0 removes the outline
- **Profiles always on:** picking, saving, importing or creating a profile turns the Crosshair Customizer on
- **Sharp Still crosshair:** the Still center crosshair is drawn on exact screen pixels, so it stays crisp on high-resolution screens and at any Windows scaling
- **Consistent previews:** crosshair previews look the same at every resolution and scaling (arms used to grow with screen height while the dot didn't)
- **Easier to use:** gallery cards work with the keyboard and show their buttons on touch screens, and the "customizer is off" message has a **Turn it on** button

**Settings**
- **Safer settings codes:** codes now end in a check, so a code that was cut off or mistyped is refused instead of half-applied. Importing lists what will change before you confirm, and hotkeys like `/` or `[` are saved correctly. Older codes still work
- **Key pickers:** **Stats Hotkey** and **Tab Out Key** wait for the next key you press. **Esc** or a click elsewhere cancels, and **Clear** removes the key
- **Search shows descriptions:** search results show each setting's description under its name
- **Auto-pick Best Server:** now a setting under **MODS ▸ Menus**
- **Keyboard controls:** MODS and Crosshair checkboxes work with **Tab** and **Space**, with a visible focus outline. Dialog fields are labeled and show clear validation messages
- **Tidier tabs:** the MODS and CROSSHAIR tab labels are smaller and always fit their tabs at any resolution or zoom
- **Clearer feedback:** section shortcuts with no search matches are disabled, Block Ads shows a notice until you reload, and narrow settings panels wrap their controls

**Match History**
- **Filters and export:** filter by mode or map, see your KDR, and export the matches you see as JSON or CSV
- **Reliable edits:** renaming or deleting a match changes the right one, even when two matches share a game code
- **Keyboard support:** open matches with **Enter**, and **Esc** closes the stats panel

**Game screen**
- **Pause menu:** with Block Ads on, the pause menu moves up into the space the banner ad used to take
- **Chat history:** paused chat keeps your reading position and offers a jump-to-latest button when new messages arrive

**Performance and reliability**
- **Lighter background work:** menu tasks share one timer that sleeps while the tab is hidden or you're in a match. Match history is saved at most every 2 seconds, and mode, map and spectate detection read the game's own state instead of scanning the page
- **Fewer update checks:** the automatic update check runs at most every 6 hours; **Check for updates** still checks right away
- **Safer loading:** the screenshot library behind stat images is verified before it runs, and the classic sound files come from a fixed version
- **Cleanup:** removed leftovers from retired settings and an unused server panel

<details>
<summary><b>v5.1 and older</b></summary>

#### v5.1

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

The userscript is a single self-contained file.

1. Edit `Shell-Shockers-Better-Hud.user.js` directly
2. Reload the Shell Shockers tab; Tampermonkey picks up the change
3. Bump `@version` in the header for a release. On push to `main`, the **Sync meta.js** workflow copies the header into `Shell-Shockers-Better-Hud.meta.js`, the file userscript managers check for updates

---

<div align="center">

### Made by Virojet

Shell Shockers gameplay, montages and mod content.

[![Subscribe on YouTube](https://img.shields.io/badge/Subscribe-%40subtovirojet-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@subtovirojet)

</div>

---

## License & disclaimer

[MIT](./LICENSE) © ViroGear.

A client-side cosmetic and quality-of-life mod. It does **not** modify game logic, give unfair advantages, or interact with the server beyond what the official client does. Use at your own discretion; moderators may still act against use of any third-party scripts.
