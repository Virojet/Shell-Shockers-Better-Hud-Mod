<div align="center">

# Shell Shockers — Better HUD

**A cleaner HUD, a full crosshair editor, match stats and a server picker, built right into the [Shell Shockers](https://shellshock.io) settings menu.**

<br>

[![Install Better HUD](https://img.shields.io/badge/Install_Better_HUD-one_click-2ea44f?style=for-the-badge&logo=tampermonkey&logoColor=white)](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Better-Hud-Mod/main/Shell-Shockers-Better-Hud.user.js)

[![Version](https://img.shields.io/badge/version-6.1.29-0E7697?style=flat-square)](#changelog)
[![License: MIT](https://img.shields.io/badge/license-MIT-lightgrey?style=flat-square)](./LICENSE)
[![Auto-updates](https://img.shields.io/badge/updates-automatic-f79520?style=flat-square)](#updating)
[![Installs](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fabacus.jasoncameron.dev%2Fget%2Fvirojet-better-hud%2Finstalls&query=%24.value&label=installs&color=2ea44f&style=flat-square)](#privacy)
[![Repo views](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/Virojet/Shell-Shockers-Better-Hud-Mod/main/traffic/views-badge.json&style=flat-square)](./traffic/history.json)
[![YouTube](https://img.shields.io/badge/YouTube-Better_HUD-FF0000?style=flat-square&logo=youtube&logoColor=white)](https://www.youtube.com/channel/UC0tvOmAiozrBas9b6ZnCUyw)
[![Discord](https://img.shields.io/badge/Discord-join-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.com/invite/yWnDAYKA9n)

[**Install**](#install) &nbsp;·&nbsp; [**What's new**](#whats-new-in-v61) &nbsp;·&nbsp; [**Features**](#features) &nbsp;·&nbsp; [**Help**](#troubleshooting) &nbsp;·&nbsp; [**Changelog**](#changelog) &nbsp;·&nbsp; [**Discord**](https://discord.com/invite/yWnDAYKA9n) &nbsp;·&nbsp; [**YouTube**](https://www.youtube.com/channel/UC0tvOmAiozrBas9b6ZnCUyw)

</div>

---

## Install

**About a minute, and free.** Updates install on their own afterwards.

1. **Get Tampermonkey** for your browser: [Chrome](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) · [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd) · [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/) · [Opera GX & others](https://www.tampermonkey.net/) (or use [Violentmonkey](https://violentmonkey.github.io/))
2. **[Click here to install Better HUD](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Better-Hud-Mod/main/Shell-Shockers-Better-Hud.user.js)**, then press **Install** on the page that opens
3. **Open [shellshock.io](https://shellshock.io)** → **Settings** → the new **MODS** and **CROSSHAIR** tabs

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

Want it right now? Press **Update** (or the **Check for updates** arrows button) at the bottom of the MODS tab, or install again from the button above. Your settings and crosshairs are kept. After Tampermonkey installs it, **reload the game (F5)** to start using the new version; Better HUD reminds you.

---

## What's new in v6.1

- **Tab Out keeps your view:** tabbing out and back in no longer turns you toward the spawn direction. The mouse locks again with the game's own **Fix Mouse Glitch** setting, and the key can't drop you into the pause menu by mistake anymore
- **Render Scale is back** in **MODS ▸ FPS & Ping**: raise it to draw the game at a lower resolution for more FPS. Smart Auto Detail still works on top of it
- **Install count:** the installs badge above now counts players (see [Privacy](#privacy))
- From v6.0: the **Welcome Guide** for first installs, and **Disable All Particles** leaves smoke visible

[Full changelog ↓](#changelog)

---

## Features

| Feature | What it does |
|---|---|
| **Crosshair editor** | Build any crosshair with a live preview, save it as a profile, share it as a code, and switch in one click |
| **HUD controls** | FPS / ping display, hide any HUD element, infinite chat history, volume slider, tab-out key |
| **Effects & FPS** | Uncap FPS, Smart Auto Detail, Render Scale, FPS Check, disable anti-aliasing, hide bullets / explosions / splats / particles, wider FOV with black bars |
| **Server picker** | Choose your region from the home screen, with live ping |
| **Stats tracker** | Live scoreboards, session K / D / KDR, an end-of-match overlay, and match history you can filter and export |
| **Inventory favorites** | Star inventory items, list them first and share them with a code |
| **Legacy skins & sounds** | Classic gun models and sound effects |

<details>
<summary><b>Full feature list</b></summary>

#### HUD & widgets
- **FPS / Ping display** with frametime mode, session timer, an optional see-through box, and customizable values
- **Server-region picker** integrated into the home screen with live ping
- **GUI Scale**: a slider for the size of the HUD, menus and chat, weighted toward making them smaller. The crosshair keeps its size
- **Hide individual HUD elements**: chat, kill feed, egg count, player list, ammo, grenade count, HP bar, scope lines, best-streak counters, challenges, the Chick'n Winner button
- **Infinite Chat History**: keeps the whole match's chat; pause or open chat and scroll back to read it all
- **Join From Chat**: click a game code said in chat to leave the match and join that game
- **Match History button**: a round clock button on the home screen, beside Game Mode
- **Instant Chick'n Winner**: one click cracks the egg in the Chick'n Winner egg game instead of six. Off by default (**MODS ▸ Menus**)
- **Volume slider** added directly to the pause menu
- **Auto Fullscreen**: clicking into a match goes fullscreen, and in Chrome and Edge Esc only pauses, like F11
- **Tab-out key**: release pointer lock without snapping the camera

#### Crosshair editor
- **Profiles**: save / load / duplicate / export / import, with a visual **gallery** you can reorder by dragging
- **Valorant codes**: Import also takes a crosshair code copied from Valorant and turns the shape and color of your main crosshair into a profile
- **Starter crosshairs** to try, and a **quick picker** of small previews under GALLERY
- Color, length, width, gap, opacity, rotation, scale, outline (with an on / off switch for the arms and the dot), dot shape, dot outline color and width
- Static (outer) lines, plus-shape dot, rounded dot, and more
- Live preview with Sky, Grey, Dark and White backgrounds
- **Undo / Redo / Revert**, with Ctrl+Z and Ctrl+Y

#### Effects & FPS
- **Uncap FPS** to match high-refresh-rate monitors
- **Effects FPS:** Off or 30–240 FPS in **MODS ▸ Effects**, controlling particles and world-object animation updates independently of rendering. Try 60 FPS with Uncap FPS; off by default
- **Smart Auto Detail** (on by default): when FPS drops under 40, lowers the resolution a step at a time and raises it again when FPS recovers, instead of halving it like the game's Auto Detail. It needs the game's own **Auto Detail** setting on
- **Render Scale**: draws the game at a lower resolution for more FPS. 1 is the normal resolution, up to 4 for the most FPS. Smart Auto Detail can still step down from it
- **FPS Check**: measures your frame rate, finds common causes of low FPS (the graphics card not in use, a battery saver, the game stuck at half resolution) and says how to fix each one. **Copy** puts a picture of the report on your clipboard
- **Disable Anti-Aliasing**: turns off edge smoothing, which can raise FPS on a weak graphics card (press **F5** after changing it)
- Hide bullet projectile meshes, explosion fire, yolk burst, damage splats or shell-casing burst, or all of them at once with **Disable All Particles** (smoke stays visible)
- Audio thread optimization (reduces GC sweeps and audio-thread stutter)
- **FOV (Black Bars)**: wider horizontal field of view via in-game letterboxing, no distortion. The HUD and menus keep their normal size; **Resize Everything** fits them between the bars too, like in a shorter browser window

#### Stats tracker
- Local K / D / KDR session tracking with an end-of-match overlay
- **Match History** saves recent matches so you can revisit scoreboards, maps, modes, servers and durations, filter them by mode and map, and export JSON / CSV. The match you're playing is the first row
- Pinned compact stats above the pause weapon select
- Configurable hotkey

#### Visual & audio
- **Legacy Skins**: classic gun models for the default weapons (visual only)
- **Legacy Sounds**: classic weapon and game sound effects

#### Other
- **Block Ads**: optional, off by default; hides in-game video and banner ads after a page reload (F5)
- Export / import settings and inventory favorites as shareable codes
- **Backup File**: save settings, crosshairs, favorites and match history to one file and load it in another browser
- **Remove All Mod Data**: delete everything Better HUD saved in this browser and start fresh (**MODS ▸ Manage**)
- **Export / Import Favorites**: copy your starred inventory items as a code and paste one back in (**MODS ▸ Manage**)
- **Favorites First**: the inventory items you've starred come first, ahead of the rest. Off by default (**MODS ▸ Menus**)
- Searchable settings, with a sidebar of sections (HUD, Chat, Effects, FPS & Ping, Menus, Stats, Gameplay, Manage, Changed)
- **Changed** page: only the settings you've changed, each with its own Reset
- **Copy Support Info**: a short report for bug reports (version, browser, graphics card, what failed to load). Nothing is sent anywhere
- **Welcome Guide**: the three-step setup a new install opens with; open it again from **MODS ▸ Manage**
- In-game pop-ups for codes and confirmations instead of browser popups
- **Check for updates** (the arrows button at the bottom of the MODS tab), with an **Up to date** / **Update** status beside it
- Settings persist via `localStorage`

</details>

---

## Using it

- **Find everything** under the game's **Settings** menu, in the **MODS** and **CROSSHAIR** tabs.
- **Search**, or pick a section in the sidebar. Each setting's description is under its name.
- **See what changed** by clicking the **Better HUD** version at the bottom of the MODS tab.

---

## More mods by Virojet

Each one is its own userscript. Install any of them next to Better HUD; they update themselves the same way.

| Mod | What it does | |
|---|---|---|
| **[Mod Menu](https://github.com/Virojet/Shell-Shockers-Mod-Menu)** | One menu to switch your mods and themes on or off, with game sounds on every control | [Install](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Mod-Menu/main/Shell-Shockers-Mod-Menu.user.js) |
| **[Gun Sounds](https://github.com/Virojet/Shell-Shockers-Gun-Sounds)** | Pick weapon, meme or your own sounds for shots, melee swings, reloads and the empty click | [Install](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Gun-Sounds/main/Shell-Shockers-Gun-Sounds.user.js) |
| **[Valorant Kill Sounds](https://github.com/Virojet/Shell-Shockers-Valorant-Kill-Sounds)** | Valorant-style kill sounds and banners that climb with your streak, from fifteen packs or your own files | [Install](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Valorant-Kill-Sounds/main/Shell-Shockers-Valorant-Kill-Sounds.user.js) |
| **[Valorant Sensitivity](https://github.com/Virojet/Shell-Shockers-Valorant-Sensitivity)** | Use your Valorant sensitivity, typed in or read from Valorant's settings, from the hip and scoped | [Install](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Valorant-Sensitivity/main/Shell-Shockers-Valorant-Sensitivity.user.js) |
| **[Stats Mod](https://github.com/Virojet/Shell-Shockers-Stats-Mod)** | Better HUD's Match History on its own, for players who don't want the rest. Skip it if you use Better HUD | [Install](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Stats-Mod/main/Shell-Shockers-Stats-Mod.user.js) |
| **[Blossom V4 Theme](https://github.com/Virojet/Shell-Shockers-Blossom-V4-Theme)** | Black and pink menus over cherry blossom art, a pink HUD and "You blossomed" kill messages | [Install](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Blossom-V4-Theme/main/Shell-Shockers-Blossom-V4.user.js) |
| **[Cherry Blossom Theme](https://github.com/Virojet/Shell-Shockers-Cherry-Blossom-Theme)** | Pink menus, a plum background and falling petals | [Install](https://raw.githubusercontent.com/Virojet/Shell-Shockers-Cherry-Blossom-Theme/main/Shell-Shockers-Cherry-Blossom.user.js) |

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

Press the **Check for updates** arrows button at the bottom of the MODS tab, or click the Tampermonkey icon → **Check for userscript updates**, or install again from the [button at the top](#install). Your settings are kept.

</details>

<details>
<summary><b>Block Ads didn't change anything</b></summary>

<br>

It takes effect after a full page reload (**F5**). Leaving and rejoining a match isn't enough.

</details>

<details>
<summary><b>The game runs at a low FPS</b></summary>

<br>

Open **MODS ▸ FPS & Ping** and press **Run Check** at the bottom. It looks for common causes, like the browser not using your graphics card or a battery saver holding the game to 30 FPS, and tells you how to fix each one. Press **Copy** to share a picture of the report when you ask for help.

</details>

<details>
<summary><b>Something broke after a Shell Shockers update</b></summary>

<br>

Open **MODS ▸ Manage** and press **Copy Support Info**, then [open an issue](https://github.com/Virojet/Shell-Shockers-Better-Hud-Mod/issues) or post in the [Discord](https://discord.com/invite/yWnDAYKA9n) and paste it. It lists which game patches didn't apply and anything else that failed to load. You can also press **F12**, open **Console**, and look for the `[Better HUD] Game patches:` line: if it ends with `NOT applied: …`, the game changed something the mod relies on. If part of Better HUD can't attach to the updated game, it also shows a short message once per game update, naming the feature.

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

## Privacy

Better HUD makes three kinds of request, and sends nothing about you or your settings in any of them:

- **Install count:** the first time it runs, one anonymous hit goes to a public counter ([Abacus](https://abacus.jasoncameron.dev)) so the installs badge above stays current. No settings, stats, names or IDs. It's sent once per browser; the `ssb-install-counted` key in site storage remembers it
- **Update check:** it reads the small version file from this repo on GitHub, at most every 30 minutes, to tell you when a new version is out
- **Pictures:** the first time you take a stats screenshot or an FPS Check picture, it loads the html-to-image library from cdnjs

Your settings, crosshairs and match history stay in your browser. **MODS ▸ Manage ▸ Remove All Mod Data** deletes all of it (everything saved under the `tp-`, `ch2-` and `ssb-` names, and the server list) and reloads the page. It keeps the `ssb-install-counted` key, so starting fresh isn't counted as a new install.

## Changelog

#### v6.1.29 — current

- **Effects FPS:** a slider in **MODS ▸ Effects** sets particle and world-object animation updates to **30–240 FPS**, or **Off**. Try **60 FPS** with Uncap FPS. Camera and gameplay timing retain their normal rate; performance gains depend on the scene. Off by default

#### v6.1.28

- **Favorites First:** a new switch under **MODS ▸ Menus**, under **Only Show Favorites**. The inventory items you've starred come first, ahead of the rest; the other items keep the game's order. Off by default

#### v6.1.26

- **Hide Chick'n Winner:** a new switch under **MODS ▸ HUD** hides the Chick'n Winner button in the bottom-left corner of the main menu and of the respawn screen during a match. Off by default

#### v6.1.25

- **Crosshair tab:** the **Gallery** button and its **Back to Settings** button are orange, so they are easier to find. The profile bar (the profile picker, its icon buttons and Undo / Redo / Revert) has a frosted glass look.
- **Outline switches:** the **Arms** and the **Center Dot** each have an **Outline** switch. Turn it off to hide the outline without losing its color or width; the crosshair keeps its exact size and place. A profile code only carries the new switch when it is off, so every older code works as before.
- **Match Stats:** the Kills, Deaths and KDR numbers on the respawn box are less bold.

#### v6.1.24

- **Match Stats polish:** removed shadows from the numbers and the pale inner outline around the box.

#### v6.1.23

- **Challenges box:** the respawn panel now fits its challenge rows without the empty space underneath.
- **Match Stats:** larger heading, labels and values use the game's fonts, with a lighter blue gradient.

#### v6.1.22

- **Hide Center Dot With Shotgun:** a new switch in the Crosshair tab, under Hide Center Dot. The dot goes away while the Scrambler's shotgun is out and comes back for the pistol. Off by default

#### v6.1.21

- **Two copies warning:** if Better HUD is installed twice (an older test build beside the release, say), one short message names the versions and says to turn one off in your script manager. It shows once per browser session, and **MODS ▸ Manage ▸ Copy Support Info** lists the copies. Nothing is switched off for you

#### v6.1.20

- **Favorites Import / Export moved:** Export Favorites and Import Favorites are now two tiles under **MODS ▸ Manage**, next to the backup file tiles. The two icon buttons beside the egg colors in the inventory are gone. Your favorites and the `FAV-` codes are unchanged

#### v6.1.19

- **Instant Chick'n Winner:** a new switch under **MODS ▸ Menus**. In the Chick'n Winner egg game, one click cracks the egg instead of six. You get the same prize, because the game settles it before the eggs show. It's off by default

#### v6.1.18

- **Remove All Mod Data:** a new tile under **MODS ▸ Manage** deletes everything Better HUD saved in this browser (settings, crosshairs, favorites, match history, hotkeys) and reloads the page, for a fresh start. Save a backup file first if you want to keep any of it

#### v6.1.17

- **Join From Chat:** clicking a game code in chat no longer also opens the game's own Mute / Report / Boot menu for the player who said it

#### v6.1.16

- **Valorant crosshair codes:** **Import** in the **Crosshair** tab now also takes a crosshair code copied from Valorant (it starts with `0;`). It brings in the shape and color of your main crosshair as a new profile you can keep editing: the lines, their outline, the center dot and the outer lines. Anything that changes while you run or shoot is left out, and so are the aim-down-sights and sniper crosshairs. Valorant measures in pixels of a 1080p screen, so sizes follow the game's own crosshair size, and the gap follows your window height
- **Game updates:** when a Shell Shockers update changes something Better HUD hooks into, you now see one short message naming the feature that stopped (like Match History or the FPS display), once per game update, with how to report it. Before, it only showed in **Copy Support Info** and the console
- **Crosshair:** a thin line with an outline in its own color is no longer drawn a pixel wider than its width setting

#### v6.1.15

- **Hide Scope Lines:** if you still had it switched on from before 6.1.14, it's switched off once, so the lines inside a scope show as in the game. It's still a switch under **MODS ▸ HUD**, and a choice you make from here on stays

#### v6.1.14

- **Spectate Right Away:** removed. The Spectate button shows when the game shows it, after the respawn countdown, and spectating works the way the game has it. **Early Respawn Guard** stays
- **Hide Scope Lines:** off by default now, so the lines inside a scope show as in the game. It's still a switch under **MODS ▸ HUD**, and if you already have it saved, your choice stays
- **GUI Scale:** the crosshair's centre dot keeps its size with the slider now, like the arms do. It used to shrink and grow with it

#### v6.1.13

- **Join From Chat:** a game code said in chat (like `cask-zips-vent`) is now underlined. Pause, click it and confirm, and you leave the match and join that game, the same as typing the code into Join Game on the home screen. The game does the joining, so it still checks your name and tells you if the game is full or gone. Chat can only be clicked while the mouse is free, so pause first. It's a switch under **MODS ▸ Chat**, on by default

#### v6.1.12

- **Crosshair:** a crosshair with a gap between its arms and the center (it comes in with a crosshair code; the editor has no slider for it) was drawn below the middle of the screen, with its four arms starting at one point and no gap at all. The arms now open up around the center dot, which stays in the middle, and the preview in the editor shows the gap too

#### v6.1.11

- **GUI Scale:** a new slider under **MODS ▸ HUD** makes the HUD, the menus and the chat smaller (down to 0.4) or a little larger (up to 1.2). 1 is the normal size, and nothing changes until you move it. It applies when you let go of the slider. The crosshair keeps its size, and the crosshair preview in the editor still matches it. On a big monitor, around 0.55 gives the size the game has at 1080p
- **Leaving a match:** pressing Leave twice quickly no longer leaves your egg on the home screen blank, with no hat or guns. The game's own Leave button stops its drawing loop each time you press it, so a second press froze the egg. Better HUD now ignores the second press and, if the egg did freeze, starts it again. 6.1.10 tried this but its fix cancelled itself

#### v6.1.10

- **Early Respawn Guard:** clicking Play while the respawn countdown runs no longer locks the mouse and starts the countdown over at 5. That mostly happened after you spectated or switched teams, and 6.1.9 only caught clicks in the first 3 seconds. Now every early click just shakes the button
- **Leaving a match:** leaving right after a match opens no longer lets Play drop you into the next match before it's ready. Your egg on the home screen also no longer comes back blank, without its gun or with broken gun models
- **Spectate Right Away:** clicking Spectate during the respawn countdown now really spectates. Before, it hid the menu and left you on the death camera with no menu. The countdown keeps going while you watch, and the camera no longer jumps to the map view when it ends
- **Tooltips:** the tips on MODS rows now grow with the rest of the menus on big screens instead of staying at their 1080p size, and they stay next to the row you point at. Pop-ups also check their size again once the page has finished loading
- **Other Mods:** the Gun Sounds, Valorant Kill Sounds, Valorant Sensitivity and Mod Menu cards now show the version you have installed

#### v6.1.9

- **Spectate Right Away:** the Spectate button shows as soon as you die, instead of after the respawn countdown. It's a switch under **MODS ▸ Menus**, on by default.
- **Hide FPS + Hide Ping:** with both on, the small box where the readouts sat is hidden too, instead of staying on screen empty.
- **Early Respawn Guard:** clicking Play too soon after you die used to restart the respawn countdown, so you waited the full 5 seconds again. The click now just shakes the button and the countdown keeps going. It's a switch under **MODS ▸ Menus**, on by default.
- **Other Mods:** a new page in **MODS** lists the other mods by Virojet. Each card says whether it's installed, with a button to install it and a link to its page. Mod Menu opens from here too.

#### v6.1.8

- **Chick'n Winner Fix:** if clicking Chick'n Winner leaves it blank, or hides the menus until you reload, Better HUD now puts it back after a few seconds (right away once its pop-up is closed). It's a switch under **MODS ▸ Menus**, on by default.

#### v6.1.7

- **Auto Fullscreen:** asks for fullscreen in the same click that starts the match, the way video sites do, so the browser lets it through. Switching tabs or leaving fullscreen some other way no longer keeps it off for the rest of the match: only holding Esc does

#### v6.1.6

- **Uncap FPS:** on a PC whose graphics can't keep up, the mouse no longer stalls and then turns the view all at once. The extra frames now wait for the graphics card, so mouse moves arrive on time

#### v6.1.5

- **Tooltips:** closing Settings with **Esc** while the mouse is on a MODS row no longer leaves that row's tip on the screen until the next click

#### v6.1.4

- **Hide Challenges:** a new switch under **MODS ▸ HUD** hides the Challenges list on the respawn screen and the Challenge Complete pop-up (and its sound) during matches. The respawn screen closes the gap, and the home screen keeps its Challenges tab, so you can still claim rewards there

#### v6.1.3

- **GitHub button:** the MODS footer has a GitHub button next to Discord and YouTube, linking to the source code and releases

#### v6.1.2

- **Smart Auto Detail:** it no longer stutters while you play. Changing the resolution rebuilds the game view, which holds up a frame, so it now waits until the mouse is free (you die, pause or open a menu). It decides from the FPS over the whole stretch since the slow moment, so a single dip doesn't trigger it. Only after a full minute under 25 FPS does it step down mid-match. The next match starts at the step the last one kept, and it remembers what it learned
- **Infinite Chat History:** turning it off now trims the chat back to the game's own small box right away. Before, the messages you had kept stayed in it for the whole match
- **Update now:** after you press it (the toast or the MODS footer), Better HUD tells you to reload the game with F5 to start using the new version, and the footer says **Reload to update** until you do
- **README:** removed a line about blocking tracking scripts, which Better HUD doesn't do, and rewrote Privacy to list everything that's requested

#### v6.1.1

- **Legacy Skins:** turning it on could leave the game stuck on the loading screen, mostly when playing as a guest. Better HUD swapped in the classic gun models before the game had loaded them. Now it waits until the game is ready, loads them, then swaps, and the classic guns show on the home screen egg too

#### v6.1.0

- **Tab Out keeps your view:** tabbing out used to call the game's respawn step, so your aim snapped toward the spawn direction when you came back. Now you face the same way as before, and moving the free cursor while you're out doesn't turn you
- **Tab Out locks like the game:** tabbing back in uses the game's own **Fix Mouse Glitch** setting. Before, that fix stayed off until your next respawn. If the browser refuses the lock, you stay out and the key tries again
- **Tab Out key:** it now reaches Tab Out before the game, so it can't open the pause menu by mistake (this happened more often after using chat). Holding the key down no longer flips you out and back in
- **Render Scale:** back in **MODS ▸ FPS & Ping**, above FPS Check. A slider from 1 to 4 that lowers the resolution for more FPS. Smart Auto Detail works on top of it, and FPS Check lists it and suggests it when FPS is low. Old settings codes with it still import
- **Install count:** Better HUD now adds one to a public install counter the first time it runs (see [Privacy](#privacy)). Players who update count once too, so the total includes everyone already using it

<details>
<summary><b>v6.0 and older</b></summary>

#### v6.0.0

- **Welcome Guide:** a first install now opens a short setup in place of the "what's new" window. Step 1 has four popular switches (Smart Auto Detail, Server Picker, Infinite Chat History, Auto Fullscreen), step 2 the five starter crosshairs (or keep your own), step 3 shows where the MODS and CROSSHAIR tabs, the Stats Hotkey, Discord and YouTube are. Open it again from **MODS ▸ Manage ▸ Welcome Guide**
- **Disable All Particles:** smoke now stays visible while it's on. It still hides explosion fire, yolk bursts, damage splats, shell-casing bursts and bullets
- **Name:** messages in the browser console are now tagged `[Better HUD]` instead of `[Better UI]`. The script keeps its name in Tampermonkey, so it updates in place as usual

#### v5.9.0

- **YouTube:** a new button at the bottom of the MODS tab and a link in the changelog window open the official [Better HUD YouTube channel](https://www.youtube.com/channel/UC0tvOmAiozrBas9b6ZnCUyw)
- **Footer buttons:** **Check for updates** is now a square button with update arrows, and **Join Discord** a square button with the Discord logo. Both keep their tooltips. The arrows turn on hover and spin while a check runs

#### v5.8.2

- **Trade kills:** match stats count every kill in the kill feed. When two players kill each other at the same moment, or a grenade lands after its thrower died, the game leaves that kill off its own scoreboard; Better HUD now counts it
- **Last second:** kills and deaths in the last second are no longer lost when a player leaves, when you leave a match or close the tab, or when you press **Reset Live Stats**. A player who leaves during your first minute in a match keeps their row if they got a kill or died while you were there

#### v5.8.1

- **Match History saving:** a match where nothing changed after its first 20 seconds is saved too. It used to be left out of the history
- **Leaving a match:** leaving ends the match right away. The **Stats Hotkey** opens Match History again instead of the scoreboards, the match no longer shows as "Playing now", and it keeps its real length if you close the tab later
- **Rename / Delete:** the buttons on a saved match can be clicked when you hover the row. The hidden Played column was taking the clicks
- **Esc:** closes a stats window you opened during a match, once the game lets go of the mouse

#### v5.8

- **Tab Out fix:** with Tab Out on, the game still thought the mouse was locked, so after a death it waited for an unlock that never came and the screen froze on the death camera with no respawn menu. Now when the game releases the mouse (a death, Esc, leaving a match) Tab Out ends and the game is told, so the respawn menu shows and the mouse works again. Tab Out also only starts while the mouse is really locked, so pressing it on the death screen does nothing
- **Hide Scoreboard / Hide Kill Feed:** **Hide Scoreboard & Kill Feed** is split into two switches under **MODS ▸ HUD**, so you can hide one and keep the other. Your old setting carries over to both, and settings codes keep working
- **Join Discord:** a button at the bottom of the MODS tab and a link in the changelog window open the Better HUD Discord server, with help, news and all the links

#### v5.7

- **Match Stats redesign:** the stats window uses the game's popup look with MODS-style cards, smaller and in the middle of the screen. The match you're playing is the first row of **Match History**, marked "Playing now" with a running time and your live K / D; click it for the scoreboards. Saved matches sit in columns (Match / Played / K / D) with **Game Mode** and **Map** filters, and **Rename** / **Delete** show when you hover a row. A match shows its code, time, map, server, mode and length as chips, with the two teams side by side and your own row highlighted. The **Stats Hotkey** opens the live scoreboards in a match and Match History on the home screen
- **Lifetime totals removed:** Match History shows the totals of your saved matches instead, and backup files no longer include lifetime totals
- **Changed page:** the last page in the MODS sidebar lists only the settings that differ from their defaults, with a **Reset** link for each
- **Hide Damage Splats:** new under **MODS ▸ Effects**, off by default. Hides the yolk splats when an egg is hit or cracked. **Hide Yolk Burst** still hides only the burst
- **Disable All Particles** now turns off everything on the Effects page: explosion fire, yolk bursts, damage splats, shell bursts and bullets too. While it's on, those switches show on and dimmed; turn it off and they're back the way you set them
- **Copy Support Info:** new under **MODS ▸ Manage**. Copies a few lines for a bug report: the Better HUD version, browser, graphics card, screen size, which game patches applied, the names of the settings you've changed, and anything that failed to load. Nothing is sent anywhere
- **FPS Check picture:** **Copy** in the FPS Check puts a picture of the results on your clipboard, ready to paste into Discord. Browsers that can't copy pictures get the text, as before
- **Auto-pick Best Server:** waits until every region shows a ping, then switches only if another region is faster by at least 15 ms or 20 %. A region you pick yourself is kept
- **Auto Fullscreen:** works like F11. In Chrome and Edge, Esc only pauses, and holding Esc leaves fullscreen until the next match. Turning the setting off leaves the fullscreen it started
- **Menu sounds:** MODS and Crosshair toggles, sliders and key fields, the Server selector and the stats window make the same sounds as the game's own menus
- **Esc fix:** an Esc that cancels a key field, clears the MODS search or closes a MODS dialog no longer closes Settings too
- **Clear on a hotkey sticks:** clearing the **Stats Hotkey** or **Tab Out Key** stays cleared after a reload, and Space as the Tab Out Key is kept too
- **Match History button** shows up together with the play row instead of popping in after it
- **Old settings codes:** codes that start with `SSB-MODS-` (from much older versions) can't be imported anymore. `M-` and `M2-` codes still work

#### v5.6

- **Lifetime Stats:** a row above Match History shows your lifetime games, kills, deaths and KDR, with the date they started. It includes matches that are no longer in the last 40 kept: a match is added once when it drops off the list or when you use Clear History. **Breakdown** lists the totals by mode and by map, and **Reset** starts them over
- **Crosshair Undo / Redo / Revert:** the second row of the profile toolbar in the **Crosshair** tab. **Ctrl+Z** and **Ctrl+Y** (or Ctrl+Shift+Z) work too, and a slider drag counts as one step. Undo keeps up to 40 steps until the page reloads. **Revert** puts the selected profile back the way you last saved it, and Undo can take a Revert back. Text and color fields keep their own Ctrl+Z
- **Match History button:** now a round clock button, the height of the play row, beside Game Mode on the home screen. Hover it to see it rewind
- **Save / Load Backup File:** new tiles under **MODS ▸ Manage**. Save writes your MODS settings, crosshairs, favorites, match history and lifetime stats to one file. Load shows what will change first, then merges crosshair profiles, favorites and history and reloads the page
- **Volume slider:** the pause-menu slider now sets the game's sound directly, so it works in every game language and stays in step with Settings. The value is saved when you let go of the slider
- **Shorter changelog:** the in-game changelog lists the last two versions, with a link to the full history here

#### v5.5

- **Smart Auto Detail:** new under **MODS ▸ FPS & Ping**, on by default. When your FPS dips under 40, the game's own Auto Detail turns shadows off, then halves the resolution and keeps it that way. Smart Auto Detail takes over from it: it lowers the resolution a step at a time (85%, 70%, then 50%), keeps a step only if your FPS goes up, and raises it again once your FPS recovers. It leaves shadows alone and saves nothing, so every match starts sharp. The game's Auto Detail setting needs to stay on
- **FPS Check:** a **Run Check** button at the bottom of **MODS ▸ FPS & Ping**. It measures your frame rate and looks for common causes of low FPS: the browser not using your graphics card, a faster graphics card left unused, a battery saver holding you to 30 FPS, or the game stuck at half resolution. It tells you how to fix each one, and **Copy** puts the report on your clipboard
- **FOV (Black Bars):** the HUD and menus keep their normal size again, like in v5.3. Only the game view goes between the bars, and the scope lines up with it. The bars also wait for the match itself, so the loading screen and the inventory stay full-size
- **Resize Everything:** a new switch under **MODS ▸ Gameplay**, below FOV (Black Bars). Turn it on to fit the HUD and menus between the bars too, like a shorter browser window (the v5.4 look)

#### v5.4

- **FOV (Black Bars):** now works like dragging your browser window shorter. In a match, the game view, the HUD and the pause menu all fit between the black bars, sized as they would be in a window that short. The HUD used to stay full-screen, on top of the bars
- **Scope lines:** the scope now lines up with the black bars, so FOV no longer turns on **Hide Scope Lines**. If it turned that on for you, switch it off under **MODS ▸ HUD**
- **Disable Anti-Aliasing is back** under **MODS ▸ FPS & Ping**. It turns off the game's edge smoothing, which can raise your FPS on a weak graphics card. Press **F5** after changing it
- **Disable Chat Cooldown removed:** the game's servers now enforce the chat limit themselves, so the switch no longer helped

#### v5.3.1

- **Disable Chat Cooldown:** a new switch under **MODS ▸ Chat** lets you send chat messages back to back. Normally the game hides the chat box after 3 quick messages, then lets you send one more every 4 seconds. It's off by default and works as soon as you turn it on
- **No Chat Cooldown script:** the same fix as a tiny separate script, for players who don't use Better HUD. That script is no longer available

#### v5.3

**MODS**
- **Sidebar:** the search box and a button for each section (HUD, Chat, Effects, FPS & Ping, Menus, Stats, Gameplay, Manage) sit in a panel on the left. The tab shows one section at a time and remembers the last one you opened
- **Cards:** each setting is a card with its name, its description underneath and a switch. Cards that are on get an orange edge
- **Search:** finds settings in every section. Section buttons with no matches are greyed out, and clearing the search takes you back to the section you were on
- **Manage:** Copy, Import and Reset are tiles that say what they do

**Crosshair**
- **New layout:** the preview and your profiles share one panel on the left, and the preview grows to fill it. Arms and Center Dot are laid out like a MODS page, with switches, color fields and one-line sliders
- **Background:** one field under the preview holds the four preset backgrounds and your own color
- **Center Dot:** Dot, Plus and Still are one control with an icon each
- **Gallery:** a page of its own with a **Back** button. Drag cards to reorder them, as before
- **Reset Crosshair:** a quiet row at the end of the list. It still asks before resetting
- **Fixes:** rows that appear after you open a group or change the dot shape are no longer cut off, and the highlight around the box or switch you're using shows in full

**Both tabs**
- **Footer bar:** the version, update status, **Check for updates** and the credit sit on one bar along the bottom. It stays put while you scroll
- **Scrolling:** a slim scrollbar, and long lists fade out at the edge while there's more to scroll

**Pause menu**
- **Reset Volume:** a glass button with a reset icon, like Reset Crosshair
- **Team scores:** on tall screens the pause menu no longer covers the team scores at the top

#### v5.2.3

- **Dot outline saves:** the center dot's **Outline Color** is kept when you reload the page. It used to go back to black on every refresh

#### v5.2.2

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
[![Join the Discord](https://img.shields.io/badge/Join_the-Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/invite/yWnDAYKA9n)

</div>

---

## License & disclaimer

[MIT](./LICENSE) © ViroGear.

A client-side cosmetic and quality-of-life mod. It does **not** modify game logic, give unfair advantages, or interact with the server beyond what the official client does. Use at your own discretion; moderators may still act against use of any third-party scripts.
