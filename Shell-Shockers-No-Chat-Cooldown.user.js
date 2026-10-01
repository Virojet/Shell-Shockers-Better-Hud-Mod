// ==UserScript==
// @name         Shell Shockers No Chat Cooldown
// @version      1.0.0
// @description  Removes the chat cooldown, so you can send chat messages back to back.
// @namespace    https://github.com/Virojet
// @author       Virojet
// @license      MIT
// @homepageURL  https://github.com/Virojet/Shell-Shockers-Better-Hud-Mod
// @supportURL   https://github.com/Virojet/Shell-Shockers-Better-Hud-Mod/issues
// @downloadURL  https://raw.githubusercontent.com/Virojet/Shell-Shockers-Better-Hud-Mod/main/Shell-Shockers-No-Chat-Cooldown.user.js
// @updateURL    https://raw.githubusercontent.com/Virojet/Shell-Shockers-Better-Hud-Mod/main/Shell-Shockers-No-Chat-Cooldown.user.js
// @match        *://*.shellshock.io/*
// @match        *://*.algebra.best/*
// @match        *://*.algebra.vip/*
// @match        *://*.biologyclass.club/*
// @match        *://*.deadlyegg.com/*
// @match        *://*.deathegg.world/*
// @match        *://*.eggboy.club/*
// @match        *://*.eggboy.xyz/*
// @match        *://*.eggcombat.com/*
// @match        *://*.egg.dance/*
// @match        *://*.eggfacts.fun/*
// @match        *://*.egghead.institute/*
// @match        *://*.eggisthenewblack.com/*
// @match        *://*.eggsarecool.com/*
// @match        *://*.geometry.best/*
// @match        *://*.geometry.monster/*
// @match        *://*.geometry.pw/*
// @match        *://*.geometry.report/*
// @match        *://*.hardboiled.life/*
// @match        *://*.hardshell.life/*
// @match        *://*.humanorganising.org/*
// @match        *://*.mathactivity.xyz/*
// @match        *://*.mathactivity.club/*
// @match        *://*.mathdrills.info/*
// @match        *://*.mathdrills.life/*
// @match        *://*.mathfun.rocks/*
// @match        *://*.mathgames.world/*
// @match        *://*.math.international/*
// @match        *://*.mathlete.fun/*
// @match        *://*.mathlete.pro/*
// @match        *://*.overeasy.club/*
// @match        *://*.risenegg.com/*
// @match        *://*.scrambled.tech/*
// @match        *://*.scrambled.today/*
// @match        *://*.scrambled.us/*
// @match        *://*.scrambled.world/*
// @match        *://*.shellshockers.club/*
// @match        *://*.shellshockers.life/*
// @match        *://*.shellshockers.site/*
// @match        *://*.shellshockers.us/*
// @match        *://*.shellshockers.world/*
// @match        *://*.shellshockers.xyz/*
// @match        *://*.shellsocks.com/*
// @match        *://*.softboiled.club/*
// @match        *://*.urbanegger.com/*
// @match        *://*.violentegg.club/*
// @match        *://*.violentegg.fun/*
// @match        *://*.yolk.best/*
// @match        *://*.yolk.life/*
// @match        *://*.yolk.rocks/*
// @match        *://*.yolk.tech/*
// @match        *://*.yolk.quest/*
// @match        *://*.yolk.today/*
// @match        *://*.zygote.cafe/*
// @match        *://*.shellshockers.best/*
// @match        *://*.eggboy.me/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

/* The game counts the chat messages you send in your player's chatLines: each
   one adds 1, and the count drops by 1 every 4 s. Above 2 it hides the chat box
   and won't open chat, so you get 3 quick messages, then one every 4 s.

   This pins chatLines at 0. The game makes players with a constructor that
   assigns this.chatLines=0, and assigning a name that the prototype chain
   defines as an accessor runs the accessor's setter instead of adding the
   property. So with this accessor on Object.prototype, players never get a
   chatLines of their own: every read gives 0 and every write is dropped.

   It doesn't touch the game's code, so it runs beside Better HUD, and it keeps
   working as long as the game keeps the name chatLines. Only the limit in your
   browser goes: the server may still have its own. */
Object.defineProperty(Object.prototype, "chatLines", {
    get: function () { return 0; },
    set: function () { },
    configurable: true
});
