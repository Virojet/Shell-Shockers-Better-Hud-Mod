// ==UserScript==
// @name         Shell Shockers Better UI
// @version      6.5.0
// @description  FPS, Ping, HUD controls, match stats history, crosshair, performance tweaks, and styled Server Selector integrated into the native UI.
// @namespace    https://github.com/ViroGear/Shell-Shockers-Better-Hud-Mod
// @author       Virojet
// @license      MIT
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABgFBMVEX///8ulL40mMHY8/o5nMNCocbS7/hru9nV8flPqs09nsVVrtBmuNeHz+dFpMlwv9yN0+lktdT9/PxKp8t1wt6AyeNZsNJdtdVestJ9x+H///J5xd+DzOSk4fP//Ov8797P7fb/9uX+8uFXKA1zSi+f3O+q5PVVIwZ5UjpcMBWFYEdhOSGO2vVeNRuW1+xPHAFlQSqNbVqdiH336tn6+fhgW1Oqk4TVwq9Lr9eVd2TCqZT7oURpPiRtweLv4dFyyOn8qU1vOBGYfGppeXlyW0madVyhhHCr3/Dq2sjx7uxFqNC45/W+rqTG6/bLsZvb089ggYpmlqag5vy3m4fSxb3k08FWaGpZRTVaUERnTDp+qbZ/w9upjXjey7hkjJhrrsaFucmiVhS0lXu8oYvCbB7Ouab4mj7+s1lEgphtn7B4iYisim9NW1xwZ1yLaFLtjTRHm7xppLl4mKCVyNZEj6xId4dOb3iCs8Davqbq4t7+57vF2dz9w3l2kpS5xsj/2p9l529QAAAG+klEQVR42rWWh1MiWxaHzz6ftI4EBRVpoJsODh2IIiBIUBHEhChmxTjmMMHJM++9f31PB6Abdau2tvZXFnDhfN89914aG/71Pwb+f4I/TPnvBB3uT/XvP1ngj5fz57O8UgivwW+68poEXqJVoteUVx3wDH8OK7Hbe5eWlt48V0DXSlu43e5yufr7p7Qs2Xs/fLj+ct1r1/voBLrw3t4llVCRz5+vr7983b6/Tybn5+fLd+Xdz/Y3XQrownuXPn+9377eVpHHeKZ818henDULVHWLJJ3fd5fU/TAKDButtL50LTRqNUkoFBiKoShgALk0zVwcVikp7ZSul1pbqgeMuN1un7rPAkWyhxSbPa8mmFqlUaAyAk1vCWmqUqX4L1NYZFSAcaPtLhScQSPNVBSEa5JSlNsiBZmmL/g0RZGN6NGUy6Up9ICJd7mm7u/ILXpLYhM1nkuTj7uxNCnJCfriPE1W6MLeh36X2QAmvL/fvV2GbJZsFhIX2eAFSPXkd5DCNAlbNUpIpYUvU/1mBdhbUXAUfC0DzTrTCUSC5wWhniw3YuG5jMTnciIXjG67lSrVoAXauMIPDLjrfLqZPoxl4hLPiWJwvRSNcmI0GhTD4Z29ZL1/dGCgv9WEQdDiB9zrwSBOxCEWTu7Fdo7qydLNx/rR+sePx2NDVusYCkwGcGnR8NHRsbF6cjdZOjq6ualv78T2eH5vJ3mUL+YJq3VoaAwz2lEogW5+jCCsRLF4XNqJlVd+LDqdPzYrvJy8yeeJoSFVYTZAF68U5R3ru2FpZRHa2YzLO/VjVdFtgH4t+vRYYc0f7eQqPxBzOichlYJJJ75ebAhhbMOg0EFo8QM6Txzvyo1JhVYUMDeHD9pgLRPePc7rhoGWAdr8qM6H4y0cYBIyGXwA1YVtZMR1zTDaNoCZtxI7c1qxDq2stIeKNCseE2YDDKhp7996ztnmseuJeHxirT1ERTyZH+oYMNDm3Tj/UPHro4GfmD199+50dqJjgE1Z/UK42wYw8lZrcTvT7hj5y39+Xs28R0Nbuhj76DAZYFRJi0dBWS1WTnBt9vLnz98zM9PvZ9fwLPVt5dfz1rYBA0aeIIqlzhImTq9+Xl1dzUxPnxoWgQJCN3QEbrdb44liXVLLUnOZlfi7379nrrCD6XfxlcxcyqkvIU+oBoRUgVuNzhPFI8EgwOlnTAInrMlDDqJtwHQEhCpY5ztncDo9rfCXl+0lOOFwt6gWdgn0BhxE8YafhPYmvp/GXF4aNnEyt14kTC2AkXc4ho9ji9A5xvca3zpGvDR2i1hlNIBVi8Y7hr2xzc6hd32R8GvE7XscHYMSaOEa77BtS51rwfxVdsKkXLINDw/rBk0BhBYVx3gOxFTn8jFfTBDf8Xm9wwYFBky813tg+xSNL7Ygw+WMT1nuxHfgVRUdAzj0DKu814MGTkzpCvUHBQ9ACWwG/xo88Hi8nSaUQBfvQcNJMhpWFdpPWut3USyFDkY83QYYbkXDRzw+Wyj07YHLpbTzXPyxtrm5WZHmRa50YPOMGBRqoIsf8Z3s7998K8lcNDeRmqikBF6Qcnyl1txKl+X9wWcG8Lai4iO2bzFBEHK5dLpazlUqZ2Ee/1OeXQCJtxvOmnxiwxpdoQU8nSifhW4FiibvYiQFhxNAOqUYzZLZLEWzFJOAu2RoxKcZWoERQ3y+kVBJEZyFEyzZOCRpmpcLDFk7J1n2rMow1diBzefzGRkw4pjQLc+gQEQsmyLZBB/WX7HyPMWy/KeQWmYQ+IyxqQKWPOeqDPW9LTjHXlghlmBYvhTy2UwI2Ezxhf7K4aLPo02Kah7ivLgElryrkDSTm8ddmFUEpnQJbKFPcoJhCukEQ1XnKJqSZPRJcyRLPzZxM6K3oS4ABk2xhfZRwDIMyzIJCXfyLI5sOIPbSTMUzXP7IZteiVGeoTXUDaF9XDRVE9MUzQgXyCVoMhvN4Igiq1JwrzXRYCQSGbS1BeMLC+MRTfBN3GKpbDRLJShJoCiGIQt8ENtINO9ynLgfUqsiC6uBQGB1GRlAEY4sFksAh5FI6ESskvA9mgWGLEfjVZZOC5wYkwRe5Djxk8JHBsdXLQEllsCCIli26MPV8Uhk/CncqJ2XucfDuIT3dTKCwdhDEIM3XScb2OpCZDygAQqzAJHlvoDSAFosqwvLll9hjgtyeEuIicUUEC+h+b35h9sTv9qpRZnZYtERCyxYDOnr6wsIeEso78kyMidPtw8Pt08b4xvj/o2N5YDlhcBqn/mNnl8rf//9a/npKeLf8CO2seEfVxJZ6Ot7UaDMakqPmmW/xilRX/n7Xg48f0tdisXfldWe1wQ9L6VPacGYty/X9fSA5ZUPVv1vDfEv97wmWH3lA8tbU14V/BuvXadOtAzr/AAAAABJRU5ErkJggg==
// @homepageURL  https://github.com/Virojet/Shell-Shockers-Better-Hud-Mod
// @supportURL   https://github.com/Virojet/Shell-Shockers-Better-Hud-Mod/issues
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
// @match        *://*.algebra.monster/*
// @match        *://*.combateggs.com/*
// @match        *://*.deathegg.life/*
// @match        *://*.eggbattle.com/*
// @match        *://*.egggames.best/*
// @match        *://*.eggshock.com/*
// @match        *://*.eggshock.me/*
// @match        *://*.eggshock.net/*
// @match        *://*.eggshooter.best/*
// @match        *://*.eggshooter.com/*
// @match        *://*.eggwarfare.com/*
// @match        *://*.eggwars.io/*
// @match        *://*.scrambled.best/*
// @match        *://*.shellgame.me/*
// @match        *://*.shellplay.live/*
// @match        *://*.shellshock.guru/*
// @match        *://*.shellshockers.ca/*
// @match        *://*.shellshockers.today/*
// @match        *://*.shellshockers.website/*
// @match        *://*.shellshockers.wiki/*
// @match        *://*.yolk.monster/*
// (html-to-image is lazy-loaded from cdnjs, with an SRI hash, on the first stats screenshot or FPS Check picture)
// @grant        none
// @run-at       document-start
// @downloadURL  https://raw.githubusercontent.com/Virojet/Shell-Shockers-Better-Hud-Mod/main/Shell-Shockers-Better-Hud.user.js
// @updateURL    https://raw.githubusercontent.com/Virojet/Shell-Shockers-Better-Hud-Mod/main/Shell-Shockers-Better-Hud.meta.js
// ==/UserScript==
(function() {
"use strict";
function install() {
if (document.getElementById("ssb-respawn-challenges-size")) return true;
var parent = document.head || document.documentElement;
if (!parent) return false;
var style = document.createElement("style");
style.id = "ssb-respawn-challenges-size";
style.textContent = "#respawn-menu > .display-grid > .player-challenges-aside{align-self:start}" +
"#ssb-pinned-stats{background:var(--ss-blue3,#0e91b4)!important;background-clip:padding-box!important;outline:none!important;box-shadow:none!important}" +
"#ssb-pinned-stats > .title{font-family:'Sigmar One',cursive!important;font-size:24px!important;font-weight:400!important;line-height:1.2!important;letter-spacing:0!important}" +
"#ssb-pinned-stats-content{background:linear-gradient(rgb(75,166,197),rgb(110,190,215),rgb(171,227,246),rgb(171,227,246))}" +
"#ssb-pinned-stats-content > div > span:first-child{font-family:'Nunito',sans-serif!important;font-size:16px!important;font-weight:900!important;line-height:1.2!important}" +
"#ssb-pinned-stats-content > div > span:last-child{font-family:'Nunito',sans-serif!important;font-size:28px!important;font-weight:600!important;line-height:1.2!important;text-shadow:none!important}";
parent.appendChild(style);
return true;
}
if (!install()) document.addEventListener("DOMContentLoaded", install, {
once: true
});
})();
(function() {
var mine = (typeof GM_info !== "undefined" && GM_info.script && GM_info.script.version) || "6.5.0";
var list = window.__ssbCopies;
if (!list) {
list = window.__ssbCopies = [];
if (window.SSB_VERSION) list.push({
version: String(window.SSB_VERSION)
});
}
list.push({
version: mine
});
})();
window.SSB_VERSION = window.SSB_VERSION || ((typeof GM_info !== "undefined" && GM_info.script && GM_info.script
.version) || "6.5.0");
window.SSB_DISCORD = "https://discord.com/invite/yWnDAYKA9n";
window.SSB_YOUTUBE = "https://www.youtube.com/channel/UC0tvOmAiozrBas9b6ZnCUyw";
(function() {
var mine = (typeof GM_info !== "undefined" && GM_info.script && GM_info.script.version) || "6.5.0",
K = "ssb-last-version";
function newer(a, b) {
var x = String(a).split("."),
y = String(b).split(".");
for (var i = 0; i < Math.max(x.length, y.length); i++) {
var p = parseInt(x[i], 10) || 0,
q = parseInt(y[i], 10) || 0;
if (p !== q) return p > q;
}
return false;
}
try {
var seen = localStorage.getItem(K);
if (seen !== null && !newer(mine, seen)) return;
["tp-randomFPS", "tp-minFPS", "tp-maxFPS", "tp-randomPing", "tp-minPing", "tp-maxPing", "tp-noExplosionSmoke",
"tp-skinUnlocker", "tp-chatBypass", "tp-hideScopeFrame", "tp-chwAuto", "tp-chwAutoMax"
].forEach(function(k) {
localStorage.removeItem(k);
});
localStorage.setItem(K, mine);
} catch (e) {}
})();
window.__ssbFirstRun = (function() {
try {
return localStorage.getItem("tp-schema") === null && localStorage.getItem(
"ssb-better-ui-changelog-seen") === null;
} catch (e) {
return false;
}
})();
if (window.__ssbFirstRun) try {
[
["tp-hideBox", "false"],
["tp-autoPickBest", "true"],
["tp-showVolumeSlider", "false"],
["tp-noShellBurst", "false"],
["tp-statsPinned", "false"],
["tp-infiniteChat", "true"],
["tp-showMatchHistory", "false"]
].forEach(function(p) {
if (localStorage.getItem(p[0]) === null) localStorage.setItem(p[0], p[1]);
});
} catch (e) {}
window.__ssbErr = window.__ssbErr || (function() {
var on = false,
seen = new Set(),
log = window.__ssbErrLog = window.__ssbErrLog || [],
skip = /^(patches|view)#|^core#[45]$/;
try {
on = localStorage.getItem("ssb-debug") === "1";
} catch (e) {}
return function(tag, err) {
if (seen.has(tag)) return;
seen.add(tag);
if (log.length < 50 && !skip.test(tag)) log.push({
tag: String(tag),
msg: String(err && err.message || err).slice(0, 160),
at: Date.now()
});
if (on) console.warn("[Better HUD] " + tag + ":", err);
};
})();
window.__ssbSafe = window.__ssbSafe || function(tag, fn) {
try {
return fn();
} catch (e) {
window.__ssbErr(tag, e);
}
};
! function() {
if (document.getElementById("ssb-tokens")) return;
var s = document.createElement("style");
s.id = "ssb-tokens";
s.textContent = ":root{" +
"--ssb-ink:#0C576F;--ssb-blue:#0E7697;--ssb-blue-hi:#2db8d4;--ssb-blue-shadow:#1b7385;--ssb-panel:#8ED9E8;" +
"--ssb-orange:#FF981F;--ssb-yolk:#ff9800;--ssb-yolk-hi:#e68a00;--ssb-yolk-shadow:#d35400;" +
"--ssb-red:#d82727;--ssb-red-hi:#ec4343;--ssb-red-shadow:#901414;--ssb-red-shadow-hi:#ab1b1b;" +
"--ssb-muted:#216a80;--ssb-deep:#0d3d4f;--ssb-line:#b0d8e8;" +
"--ssb-card:#b5e8f7;--ssb-card-hi:#cbf2fc;--ssb-card-shadow:#80b8c8;--ssb-card-shadow-hi:#99cddc;" +
"--ssb-accent:#0E7697;--ssb-focus:#a34d00;--ssb-radius:8px;--ssb-gap:12px;}";
(document.head || document.documentElement).appendChild(s);
}();
! function() {
try {
["ch2-enabled", "ch2-hideCrosshair", "ch2-hideDot", "ch2-hideDotShotgun", "ch2-dotRound",
"ch2-staticOutlineEnabled", "ch2-armOutlineEnabled", "ch2-dotOutlineEnabled"
].forEach(function(k) {
var v = localStorage.getItem(k);
if (v !== null && v !== "true" && v !== "false") localStorage.removeItem(k);
});
} catch (e) {
window.__ssbErr("boot#1", e)
}
}();
window.__ssbPatches = window.__ssbPatches || (function() {
var patches = [];
var originals = new WeakMap();
var nodeText = Object.getOwnPropertyDescriptor(Node.prototype, "textContent");
var nativeAppend = HTMLElement.prototype.appendChild;
HTMLElement.prototype.appendChild = function(node) {
if (patches.length && node && node.tagName === "SCRIPT" && !node.src && !originals.has(node)) {
var src = nodeText.get.call(node);
if (src && src.length > 100000 && src.startsWith("(()=>{")) {
var orig = src,
applied = [],
missed = [],
t0 = performance.now();
for (var i = 0; i < patches.length; i++) {
try {
var out = patches[i].fn(src);
if (typeof out === "string" && out !== src) {
src = out;
applied.push(patches[i].name);
} else missed.push(patches[i].name);
} catch (e) {
missed.push(patches[i].name + " (error)");
console.warn("[Better HUD] Patch '" + patches[i].name + "' failed:", e);
}
}
originals.set(node, orig);
if (src !== orig) nodeText.set.call(node, src);
var ms = +(performance.now() - t0).toFixed(1);
window.__ssbPatchReport = {
applied: applied,
missed: missed,
ms: ms,
len: orig.length
};
console.log("[Better HUD] Game patches: " + applied.length + " applied" + (applied.length ?
" (" + applied.join(", ") + ")" : "") +
(missed.length ? "; NOT applied: " + missed.join(", ") + " (game updated?)" : "") +
" in " + ms + " ms");
}
}
return nativeAppend.call(this, node);
};
var scriptText = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, "textContent") || nodeText;
Object.defineProperty(HTMLScriptElement.prototype, "textContent", {
get: function() {
var o = originals.get(this);
return o !== undefined ? o : scriptText.get.call(this);
},
set: scriptText.set,
configurable: true,
enumerable: true
});
return {
add: function(name, fn) {
patches.push({
name: name,
fn: fn
});
}
};
})();
window.__ssbNativeFrame = window.__ssbNativeFrame || {
request: window.requestAnimationFrame.bind(window),
cancel: window.cancelAnimationFrame.bind(window)
};
window.__ssbMenuPoll = window.__ssbMenuPoll || (function() {
var jobs = new Map(),
timer = null;
function gate() {
return document.hidden ? 0 : document.pointerLockElement ? 1 : 2;
}
function runnable(job, g) {
return g === 2 || (g === 1 && job.inMatch);
}
function stop() {
if (timer !== null) clearTimeout(timer);
timer = null;
}
function run() {
timer = null;
var now = performance.now(),
g = gate();
jobs.forEach(function(job, fn) {
if (job.due > now + 1 || !runnable(job, g)) return;
job.due = (Math.round(now / job.period) + 1) * job.period;
try {
fn();
} catch (e) {
console.warn("[Better HUD] Scheduled task failed", e);
}
});
schedule();
}
function schedule() {
stop();
var due = Infinity,
g = gate();
jobs.forEach(function(job) {
if (job.due < due && runnable(job, g)) due = job.due;
});
if (due !== Infinity) timer = setTimeout(run, Math.max(0, Math.ceil(due - performance.now())));
}
function reconcile() {
jobs.forEach(function(job) {
job.due = 0;
});
schedule();
}
document.addEventListener("visibilitychange", reconcile);
document.addEventListener("pointerlockchange", reconcile);
document.addEventListener("ssb:settings-change", reconcile);
window.addEventListener("pageshow", reconcile);
window.addEventListener("pagehide", stop);
function register(fn, period, opts) {
if (!jobs.has(fn)) jobs.set(fn, {
period: Math.max(100, period || 1400),
due: 0,
inMatch: !!(opts && opts.inMatch)
});
schedule();
return function() {
jobs.delete(fn);
schedule();
};
}
register.reconcile = reconcile;
return register;
})();
window.__ssbUI = window.__ssbUI || (function() {
var CSS = `#ssb-dialog-overlay { position:fixed; inset:0; z-index:2147483647; display:flex; align-items:center; justify-content:center; padding:18px; box-sizing:border-box; background:rgba(7,39,52,0.55); backdrop-filter:blur(2px); font-family:"Nunito",system-ui,sans-serif; }
#ssb-dialog-panel { width:min(470px,100%); box-sizing:border-box; padding:16px 22px 20px; border:4px solid var(--ssb-ink); border-radius:10.5px; background:linear-gradient(#1192bc,#3ea2c7 30%,#5bb2d2 55%,#75c3de 78%,#8dd3ea); box-shadow:0 18px 42px rgba(0,0,0,0.36); text-align:center; animation:ssb-pop-in 0.14s ease; }
#ssb-dialog-panel * { box-sizing:border-box; font-size:inherit; letter-spacing:normal; }
#ssb-dialog-panel .ssb-dlg-title { margin:0 0 12px; font-family:"Sigmar One",sans-serif; font-weight:normal; font-size:26px; line-height:1.15; color:#fff; text-transform:uppercase; text-shadow:rgba(11,147,189,0.9) 3px 3px 0; }
#ssb-dialog-panel .ssb-dlg-text { margin:0 0 14px; font-size:16px; font-weight:800; line-height:1.35; color:#fff; text-shadow:rgba(0,0,0,0.3) 1px 1px 0; white-space:pre-line; overflow-wrap:anywhere; }
#ssb-dialog-panel .ssb-dlg-input { display:block; width:100%; height:42px; margin:0; padding:0 12px; border:3px solid var(--ssb-ink); border-radius:8px; background:#fff; color:var(--ssb-ink); font-family:"Nunito",system-ui,sans-serif; font-size:17px; font-weight:800; text-align:left; outline:none; }
#ssb-dialog-panel .ssb-dlg-input:focus { border-color:var(--ssb-orange); }
#ssb-dialog-panel .ssb-dlg-input[readonly] { font-family:Consolas,"Courier New",monospace; font-size:15px; font-weight:700; }
#ssb-dialog-panel .ssb-dlg-err:not(:empty) { display:inline-block; margin-top:8px; padding:4px 10px; border-radius:6px; background:#e81616; color:#fff; font-size:14px; font-weight:800; box-shadow:inset 0 -2px 0 rgba(0,0,0,0.18); }
#ssb-dialog-panel .ssb-dlg-foot { display:flex; flex-wrap:wrap; justify-content:center; gap:12px; margin-top:18px; }
#ssb-dialog-panel .ssb-dlg-btn { min-width:120px; height:44px; margin:0; padding:0 20px; border:4px solid var(--b); border-radius:8.4px; background:var(--c); color:#fff; font-family:"Nunito",system-ui,sans-serif; font-size:18px; font-weight:800; cursor:pointer; text-shadow:rgba(0,0,0,0.3) 2px 2px 0; box-shadow:rgba(11,147,189,0.5) 3.4px 3.4px 0 0, var(--i1) -2.1px -3.2px 2.1px 0 inset, var(--i2) 0 3.2px 4.2px 0 inset; transition:filter 0.1s, transform 0.1s; }
#ssb-dialog-panel .ssb-dlg-btn:hover { filter:brightness(1.08); }
#ssb-dialog-panel .ssb-dlg-btn:active { transform:translateY(2px); }
#ssb-dialog-panel .ssb-dlg-btn:focus-visible { outline:3px solid #fff; outline-offset:2px; }
#ssb-dialog-panel .ssb-dlg-btn:disabled { opacity:0.7; cursor:default; filter:none; transform:none; }
#ssb-dialog-panel .ssb-dlg-green { --c:#13ba65; --b:#046306; --i1:#0e8c4c; --i2:#87ddbb; }
#ssb-dialog-panel .ssb-dlg-red { --c:#e81616; --b:#881a1a; --i1:#d11414; --i2:#e29092; }
#ssb-dialog-panel .ssb-dlg-yolk { --c:#f79520; --b:#924e0c; --i1:#d97611; --i2:#f1c59a; }
#ssb-dialog-panel .ssb-dlg-blue { --c:#0b93bd; --b:var(--ssb-ink); --i1:#086e8d; --i2:#00ade6; }
#ssb-dialog-panel.ssb-dlg-wide { width:min(560px,100%); }
#ssb-dialog-panel .ssb-dlg-report { max-height:min(58vh,560px); overflow-y:auto; margin:0 -4px; padding:0 4px; text-align:left; }
#ssb-dialog-panel .ssb-dlg-sub { margin:14px 0 6px; font-size:13px; font-weight:900; letter-spacing:0.6px; text-transform:uppercase; color:#fff; text-shadow:rgba(0,0,0,0.3) 1px 1px 0; }
#ssb-dialog-panel .ssb-dlg-sub:first-child { margin-top:0; }
#ssb-dialog-panel .ssb-dlg-list { list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:6px; }
#ssb-dialog-panel .ssb-dlg-list li { margin:0; padding:9px 12px; border-radius:8px; background:rgba(255,255,255,0.9); color:var(--ssb-ink); }
#ssb-dialog-panel .ssb-dlg-list b { display:block; font-size:15px; font-weight:900; line-height:1.25; }
#ssb-dialog-panel .ssb-dlg-list span { display:block; margin-top:3px; font-size:14px; font-weight:700; line-height:1.35; color:var(--ssb-muted); }
#ssb-dialog-panel .ssb-dlg-list .ssb-dlg-act { min-width:0; height:34px; margin:8px 0 2px; padding:0 14px; border-width:3px; font-size:15px; }
#ssb-dialog-panel .ssb-dlg-acts { display:flex; flex-wrap:wrap; gap:8px; }
#ssb-dialog-panel .ssb-dlg-facts li { display:flex; align-items:baseline; justify-content:space-between; gap:14px; padding:6px 12px; }
#ssb-dialog-panel .ssb-dlg-facts b { flex:none; font-size:14px; }
#ssb-dialog-panel .ssb-dlg-facts span { margin:0; text-align:right; }
#ssb-toast-stack { position:fixed; top:14px; left:0; right:0; z-index:2147483647; display:flex; flex-direction:column; align-items:center; gap:8px; pointer-events:none; font-family:"Nunito",system-ui,sans-serif; }
#ssb-toast-stack * { font-size:inherit; letter-spacing:normal; }
#ssb-toast-stack .ssb-toast { pointer-events:auto; cursor:pointer; max-width:min(540px,92vw); box-sizing:border-box; padding:10px 16px; border:3px solid var(--ssb-blue); border-radius:10px; background:var(--ssb-panel); color:var(--ssb-ink); font-size:15px; font-weight:800; line-height:1.3; text-align:center; white-space:pre-line; box-shadow:0 8px 22px rgba(0,0,0,0.3); animation:ssb-toast-in 0.16s ease; transition:opacity 0.2s; }
#ssb-toast-stack .ssb-toast-success .ssb-toast-text::before { content:"\\2713"; display:inline-block; width:20px; height:20px; margin-right:8px; border-radius:50%; background:#13ba65; color:#fff; font-size:13px; line-height:20px; text-align:center; vertical-align:1px; }
#ssb-toast-stack .ssb-toast-error { background:#ffe1e1; border-color:var(--ssb-red); color:#8a1414; }
#ssb-toast-stack .ssb-toast-code { margin-top:6px; padding:5px 8px; border-radius:6px; background:rgba(255,255,255,0.75); font-family:Consolas,"Courier New",monospace; font-size:13px; font-weight:700; white-space:normal; overflow-wrap:anywhere; user-select:text; cursor:text; }
#ssb-toast-stack .ssb-toast-out { opacity:0; }
@keyframes ssb-pop-in { from { opacity:0; transform:scale(0.96); } to { opacity:1; transform:none; } }
@keyframes ssb-toast-in { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:none; } }
`;
function ensureCss() {
if (document.getElementById("ssb-ui-style")) return;
var s = document.createElement("style");
s.id = "ssb-ui-style";
s.textContent = CSS;
(document.head || document.documentElement).appendChild(s);
}
function sound(name) {
try {
if (window.BAWK && window.BAWK.play) window.BAWK.play(name);
} catch (e) {
window.__ssbErr("ui#1", e)
}
}
function node(tag, cls, text) {
var e = document.createElement(tag);
if (cls) e.className = cls;
if (text != null) e.textContent = text;
return e;
}
var stack = null;
function toast(text, o) {
o = o || {};
if (!document.body) return null;
ensureCss();
if (!stack) {
stack = node("div");
stack.id = "ssb-toast-stack";
stack.setAttribute("role", "status");
stack.setAttribute("aria-live", "polite");
stack.setAttribute("aria-relevant", "additions text");
}
document.body.appendChild(stack);
var t = node("div", "ssb-toast" + (o.type ? " ssb-toast-" + o.type : ""));
t.appendChild(node("div", "ssb-toast-text", text));
if (o.code) t.appendChild(node("div", "ssb-toast-code", o.code));
var gone = false;
function close() {
if (gone) return;
gone = true;
t.classList.add("ssb-toast-out");
setTimeout(function() {
t.remove();
}, 220);
}
t.addEventListener("click", function(e) {
if (!e.target.closest(".ssb-toast-code")) close();
});
stack.appendChild(t);
while (stack.children.length > 4) stack.firstElementChild.remove();
setTimeout(close, o.ms || (o.type === "error" ? 6500 : o.code ? 6000 : 3200));
return t;
}
window.__ssbEatKeyUp = function(key) {
var k = String(key).toLowerCase(),
tm = setTimeout(done, 1500);
function f(e) {
if (String(e.key).toLowerCase() === k) {
e.preventDefault();
e.stopImmediatePropagation();
done();
}
}
function done() {
window.removeEventListener("keyup", f, true);
clearTimeout(tm);
}
window.addEventListener("keyup", f, true);
};
var current = null;
function dialog(o) {
return new Promise(function(resolve) {
if (!document.body || document.pointerLockElement) {
resolve(o.cancel);
return;
}
if (current) current(current.cancelValue);
ensureCss();
var prevFocus = document.activeElement;
var ov = node("div");
ov.id = "ssb-dialog-overlay";
var panel = node("div");
panel.id = "ssb-dialog-panel";
if (o.wide) panel.className = "ssb-dlg-wide";
panel.setAttribute("role", "dialog");
panel.setAttribute("aria-modal", "true");
panel.setAttribute("aria-label", o.title || "Better HUD");
panel.appendChild(node("h2", "ssb-dlg-title", o.title || "Better HUD"));
if (o.text) panel.appendChild(node("p", "ssb-dlg-text", o.text));
if (o.body) panel.appendChild(o.body);
var input = null,
err = null;
if (o.input) {
input = node("input", "ssb-dlg-input");
input.type = "text";
input.setAttribute("aria-label", o.input.label || o.title || "Code");
input.setAttribute("aria-describedby", "ssb-dialog-error");
input.spellcheck = false;
input.autocomplete = "off";
input.value = o.input.value == null ? "" : String(o.input.value);
if (o.input.placeholder) input.placeholder = o.input.placeholder;
if (o.input.readOnly) input.readOnly = true;
if (o.input.maxLength) input.maxLength = o.input.maxLength;
panel.appendChild(input);
err = node("div", "ssb-dlg-err");
err.id = "ssb-dialog-error";
err.setAttribute("role", "alert");
panel.appendChild(err);
input.addEventListener("input", function() {
err.textContent = "";
input.removeAttribute("aria-invalid");
});
}
var foot = node("div", "ssb-dlg-foot"),
primary = null;
(o.buttons || []).forEach(function(b) {
var btn = node("button", "ssb-dlg-btn ssb-dlg-" + (b.kind || "blue"), b.label);
btn.type = "button";
btn.addEventListener("click", function() {
sound("ui_click");
press(b, btn);
});
if (b.primary) primary = btn;
foot.appendChild(btn);
});
panel.appendChild(foot);
ov.appendChild(panel);
var done = false;
function finish(v) {
if (done) return;
done = true;
window.removeEventListener("keydown", onKey, true);
window.removeEventListener("keyup", swallow, true);
window.removeEventListener("keypress", swallow, true);
ov.remove();
if (current === finish) current = null;
try {
if (prevFocus && prevFocus.isConnected && prevFocus.focus) prevFocus.focus({
preventScroll: true
});
} catch (e) {
window.__ssbErr("ui#2", e)
}
resolve(v);
}
finish.cancelValue = o.cancel;
current = finish;
function press(b, btn) {
if (b.run) {
b.run(input, btn, panel);
return;
}
if (b.input) {
var v = input.value,
msg = o.input.validate ? o.input.validate(v) : "";
if (msg) {
err.textContent = msg;
input.setAttribute("aria-invalid", "true");
input.focus();
return;
}
finish(v);
return;
}
finish(b.value);
}
function swallow(e) {
e.stopPropagation();
}
function onKey(e) {
e.stopPropagation();
if (e.key === "Escape") {
e.preventDefault();
window.__ssbEatKeyUp("Escape");
finish(o.cancel);
} else if (e.key === "Enter" && !e.isComposing) {
e.preventDefault();
window.__ssbEatKeyUp("Enter");
var f = document.activeElement;
if (f && f.tagName === "BUTTON" && panel.contains(f)) f.click();
else if (primary) primary.click();
} else if (e.key === "Tab") {
e.preventDefault();
var list = [].slice.call(panel.querySelectorAll(
"input:not(:disabled), button:not(:disabled)")),
i = list.indexOf(document.activeElement);
var next = list[i < 0 ? (e.shiftKey ? list.length - 1 : 0) : (i + (e.shiftKey ? -1 :
1) + list.length) % list.length];
if (next) next.focus();
}
}
window.addEventListener("keydown", onKey, true);
window.addEventListener("keyup", swallow, true);
window.addEventListener("keypress", swallow, true);
var downOnBackdrop = false;
ov.addEventListener("mousedown", function(e) {
downOnBackdrop = e.target === ov;
});
ov.addEventListener("click", function(e) {
if (e.target === ov && downOnBackdrop) finish(o.cancel);
});
document.body.appendChild(ov);
sound("ui_popupopen");
if (input) {
input.focus();
input.select();
} else if (primary) primary.focus();
});
}
function copy(text, field) {
var ok = function() {
toast("Copied to clipboard.", {
type: "success"
});
};
var legacy = function() {
try {
if (field) {
field.focus();
field.select();
}
if (field && document.execCommand("copy")) {
ok();
return;
}
} catch (e) {
window.__ssbErr("ui#3", e)
}
toast("Your browser blocked copying. Select the code and press Ctrl+C.", {
type: "error"
});
};
if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(ok,
legacy);
else legacy();
}
function copyText(text, note) {
var ok = function() {
toast(note || "Copied to clipboard.", {
type: "success"
});
};
var legacy = function() {
var back = document.activeElement,
ta = node("textarea"),
done = false;
ta.value = text;
ta.readOnly = true;
ta.style.cssText = "position:fixed;left:-9999px;top:0;opacity:0;";
document.body.appendChild(ta);
try {
ta.select();
done = document.execCommand("copy");
} catch (e) {
window.__ssbErr("ui#4", e)
}
ta.remove();
try {
if (back && back.focus) back.focus({
preventScroll: true
});
} catch (e) {
window.__ssbErr("ui#5", e)
}
if (done) ok();
else toast("Your browser blocked copying.", {
type: "error"
});
};
if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(ok,
legacy);
else legacy();
}
var snapLib = null,
snapFonts = null;
function snapLoad() {
if (window.htmlToImage && typeof window.htmlToImage === "object") return Promise.resolve(window
.htmlToImage);
return snapLib || (snapLib = new Promise(function(resolve, reject) {
var sc = document.createElement("script");
sc.src =
"https://cdnjs.cloudflare.com/ajax/libs/html-to-image/1.11.11/html-to-image.min.js";
sc.integrity =
"sha512-7tWCgq9tTYS/QkGVyKrtLpqAoMV9XIUxoou+sPUypsaZx56cYR/qio84fPK9EvJJtKvJEwt7vkn6je5UVzGevw==";
sc.crossOrigin = "anonymous";
sc.referrerPolicy = "no-referrer";
sc.onload = function() {
if (window.htmlToImage && typeof window.htmlToImage === "object") resolve(window
.htmlToImage);
else {
snapLib = null;
reject(new Error("html-to-image didn't load"));
}
};
sc.onerror = function() {
snapLib = null;
reject(new Error("html-to-image failed to load"));
};
(document.head || document.documentElement).appendChild(sc);
}));
}
function snapFontCSS() {
return snapFonts || (snapFonts = fetch(
"https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Sigmar+One&display=swap"
).then(function(r) {
if (!r.ok) throw new Error("fonts: HTTP " + r.status);
return r.text();
}).then(function(css) {
var latin = css.split(/(?=\/\* )/).filter(function(b) {
return /^\/\* latin \*\//.test(b);
}).join("");
if (latin) css = latin;
var urls = [],
re = /url\((https:[^)]+)\)/g,
m;
while ((m = re.exec(css)))
if (urls.indexOf(m[1]) < 0) urls.push(m[1]);
return Promise.all(urls.map(function(u) {
return fetch(u).then(function(r) {
if (!r.ok) throw new Error("font: HTTP " + r.status);
return r.blob();
}).then(function(b) {
return new Promise(function(res, rej) {
var fr = new FileReader();
fr.onload = function() {
res([u, fr.result]);
};
fr.onerror = function() {
rej(fr.error);
};
fr.readAsDataURL(b);
});
});
})).then(function(pairs) {
pairs.forEach(function(p) {
css = css.split(p[0]).join(p[1]);
});
return css;
});
}).catch(function(e) {
window.__ssbErr("ui#6", e);
snapFonts = null;
return "";
}));
}
function copyImage(panel, btn, text) {
if (!navigator.clipboard || !navigator.clipboard.write || typeof window.ClipboardItem !== "function") {
copyText(text, "Your browser can't copy pictures, so the report was copied as text.");
return;
}
var label = btn ? btn.textContent : "";
if (btn) {
btn.disabled = true;
btn.textContent = "Copying…";
}
var done = function() {
if (!btn) return;
var lost = !document.activeElement || document.activeElement === document.body;
btn.disabled = false;
btn.textContent = label;
if (lost && btn.isConnected) btn.focus({
preventScroll: true
});
};
var png = Promise.all([snapLoad(), snapFontCSS()]).then(function(r) {
var lib = r[0],
host = node("div"),
c = panel.cloneNode(true),
foot, rep;
host.setAttribute("aria-hidden", "true");
host.style.cssText =
"position:fixed;left:-100000px;top:0;width:560px;font-family:\"Nunito\",system-ui,sans-serif;pointer-events:none;";
c.removeAttribute("role");
c.removeAttribute("aria-modal");
c.style.cssText =
"zoom:1 !important;animation:none !important;box-shadow:none !important;margin:0 !important;";
foot = c.querySelector(".ssb-dlg-foot");
if (foot) foot.remove();
rep = c.querySelector(".ssb-dlg-report");
if (rep) {
rep.style.maxHeight = "none";
rep.style.overflow = "visible";
}
host.appendChild(c);
document.body.appendChild(host);
return lib.toBlob(c, {
pixelRatio: 2,
width: c.offsetWidth,
height: c.offsetHeight,
fontEmbedCSS: r[1] || "",
backgroundColor: null
}).then(function(blob) {
host.remove();
if (!blob) throw new Error("no picture");
return blob;
}, function(e) {
host.remove();
throw e;
});
});
png.catch(function(e) {
window.__ssbErr("ui#8", e);
});
try {
navigator.clipboard.write([new window.ClipboardItem({
"image/png": png
})]).then(function() {
done();
toast("Picture copied to clipboard.", {
type: "success"
});
}, function(e) {
done();
window.__ssbErr("ui#7", e);
copyText(text, "Couldn't copy the picture, so the report was copied as text.");
});
} catch (e) {
done();
window.__ssbErr("ui#7", e);
copyText(text, "Couldn't copy the picture, so the report was copied as text.");
}
}
var api = {
toast: toast,
dialog: dialog,
confirm: function(o) {
o = o || {};
return dialog({
title: o.title,
text: o.text,
cancel: false,
buttons: [{
label: o.cancelLabel || "Cancel",
kind: "blue",
value: false
}, {
label: o.ok || "OK",
kind: o.danger ? "red" : "green",
value: true,
primary: true
}]
});
},
prompt: function(o) {
o = o || {};
return dialog({
title: o.title,
text: o.text,
cancel: null,
input: {
value: o.value,
placeholder: o.placeholder,
validate: o.validate,
maxLength: o.maxLength
},
buttons: [{
label: "Cancel",
kind: "blue",
value: null
}, {
label: o.ok || "OK",
kind: "green",
input: true,
primary: true
}]
});
},
showCode: function(o) {
o = o || {};
return dialog({
title: o.title || "Your Code",
text: o.text,
cancel: undefined,
input: {
value: o.code,
readOnly: true
},
buttons: [{
label: "Copy",
kind: "yolk",
run: function(field) {
copy(field.value, field);
}
}, {
label: "Close",
kind: "blue",
value: undefined,
primary: true
}]
});
},
copyCode: function(code, what) {
var done = function() {
toast(what + " copied to clipboard.", {
type: "success",
code: code
});
};
var fallback = function() {
api.showCode({
title: what,
text: "Your browser blocked the clipboard. Copy the code below.",
code: code
});
};
if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard
.writeText(code).then(done, fallback);
fallback();
return Promise.resolve();
},
report: function(o) {
o = o || {};
var body = node("div", "ssb-dlg-report");
(o.sections || []).forEach(function(sec) {
if (!sec.items || !sec.items.length) return;
if (sec.title) body.appendChild(node("div", "ssb-dlg-sub", sec.title));
var list = node("ul", "ssb-dlg-list" + (sec.facts ? " ssb-dlg-facts" : ""));
sec.items.forEach(function(it) {
var li = node("li");
li.appendChild(node("b", null, it.label));
if (it.text) li.appendChild(node("span", null, it.text));
if (it.act && typeof it.act.run === "function") {
var ab = node("button", "ssb-dlg-btn ssb-dlg-blue ssb-dlg-act", it.act.label || "Fix it");
ab.type = "button";
ab.addEventListener("click", function() {
var ok = false;
try {
ok = it.act.run() !== false;
} catch (e) {
window.__ssbErr("ui#act", e)
}
sound("ui_click");
if (ok) {
ab.textContent = it.act.done || "Done";
ab.disabled = true;
} else toast("That didn't work. You can change it in MODS instead.", {
type: "error"
});
});
li.appendChild(ab);
}
list.appendChild(li);
});
body.appendChild(list);
});
var buttons = [{
label: "Close",
kind: "blue",
value: undefined,
primary: true
}];
if (o.copy) buttons.unshift({
label: "Copy",
kind: "yolk",
run: o.image ? function(input, btn, panel) {
copyImage(panel, btn, o.copy);
} : function() {
copyText(o.copy);
}
});
return dialog({
title: o.title,
text: o.text,
body: body,
wide: true,
cancel: undefined,
buttons: buttons
});
},
copyText: copyText,
ensureCss: ensureCss
};
return api;
})();
(function ssbPatchNotice() {
var KEY = "ssb-patch-notice",
tries = 0,
stop = null;
var FEATURE = {
"ping-display": "Ping display",
"fps-display": "FPS display",
"players": "Match History",
"my-player-idx": "Match History",
"trade-kills": "Match History",
"scope-lines": "Hide Scope Lines",
"ssb:bullet-splats": "Hide Bullet Splats",
"auto-detail": "Smart Auto Detail",
"effects60:decorative": "Effects FPS"
};
function said() {
try {
return localStorage.getItem(KEY) || "";
} catch (e) {
return "";
}
}
function task() {
var r = window.__ssbPatchReport;
if (!r) {
if (++tries > 15 && stop) stop();
return;
}
var applied = r.applied || [],
seen = {},
names = [];
(r.missed || []).forEach(function(n) {
var base = String(n).replace(/ \(error\)$/, ""),
f = FEATURE[base];
if (f && applied.indexOf(base) < 0 && !seen[f]) {
seen[f] = 1;
names.push(f);
}
});
var sig = (r.len || 0) + ":" + names.join(",");
if (!names.length || said() === sig) {
if (stop) stop();
return;
}
if (!document.body || document.getElementById("ssb-dialog-overlay") || document.getElementById(
"ssb-changelog-overlay") ||
(window.__ssbIntro && window.__ssbIntro.busy && window.__ssbIntro.busy())) return;
if (stop) stop();
try {
localStorage.setItem(KEY, sig);
} catch (e) {
window.__ssbErr("patchnotice#1", e);
}
window.__ssbUI.toast("Better HUD couldn't attach to part of the game: " + names.join(", ") + ".\n" +
"The game may have been updated, so these might not work until Better HUD is updated too. " +
"To report it, open MODS ▸ Manage ▸ Copy Support Info and post it in the Discord.", {
ms: 16000
});
}
stop = window.__ssbMenuPoll(task, 4000);
})();
(function ssbCopiesNotice() {
var KEY = "ssb-copies-notice",
tries = 0,
stop = null;
function twice() {
return ["mod-vol-slider", "ssb-global-tooltip"].some(function(id) {
return document.querySelectorAll('[id="' + id + '"]').length > 1;
});
}
function copies() {
var v = (window.__ssbCopies || []).map(function(c) {
return "v" + c.version;
});
if (v.length < 2 && twice()) v.push("another copy");
return v.length > 1 ? v : null;
}
window.__ssbCopiesList = window.__ssbCopiesList || copies;
function said() {
if (window.__ssbCopiesSaid) return true;
try {
return sessionStorage.getItem(KEY) === "1";
} catch (e) {
return false;
}
}
function task() {
if (said()) {
if (stop) stop();
return;
}
var names = copies();
if (!names) {
if (++tries > 15 && stop) stop();
return;
}
if (!document.body || document.getElementById("ssb-dialog-overlay") || document.getElementById(
"ssb-changelog-overlay") ||
(window.__ssbIntro && window.__ssbIntro.busy && window.__ssbIntro.busy())) return;
if (stop) stop();
window.__ssbCopiesSaid = 1;
try {
sessionStorage.setItem(KEY, "1");
} catch (e) {
window.__ssbErr("copies#1", e);
}
var list = names.length > 2 ? names.slice(0, -1).join(", ") + " and " + names[names.length - 1] : names
.join(" and ");
window.__ssbUI.toast("More than one copy of Better HUD is running (" + list + ").\n" +
"Open your script manager (Tampermonkey), turn all but one off and reload the game. Until then some parts show up twice, " +
"and the version at the bottom of MODS can be the wrong one.", {
ms: 20000
});
}
stop = window.__ssbMenuPoll(task, 4000);
})();
window.__ssbSettings = window.__ssbSettings || (function() {
var items = [];
var initial = new Map();
function changed() {
if (window.__ssbSettingsFeedback) window.__ssbSettingsFeedback();
document.dispatchEvent(new Event("ssb:settings-change"));
}
function sound() {
try {
if (window.BAWK && window.BAWK.play) window.BAWK.play("ui_onchange");
} catch (e) {
window.__ssbErr("registry#1", e)
}
}
function mount(root, def) {
if (root.querySelector('[data-setting="' + def.key + '"]')) return;
var grid = root.querySelector('.mod-grid[data-section="' + def.section + '"]');
if (!grid) return;
var row = api.row({
key: def.key,
label: def.label,
tip: def.tip,
keywords: def.keywords,
cls: def.cls,
get: def.get,
onChange: function(v) {
sound();
def.set(v);
if (def.onToggle) def.onToggle(v);
}
});
var after = def.after && grid.querySelector('[data-setting="' + def.after + '"]');
grid.insertBefore(row, after ? after.nextSibling : null);
if (def.onMount) {
try {
def.onMount(row, grid);
} catch (e) {
window.__ssbErr("registry#3", e);
}
}
}
var api = {
items: items,
row: function(o) {
var row = document.createElement("label");
row.className = "mod-item" + (o.cls ? " " + o.cls : "");
if (o.key) row.setAttribute("data-setting", o.key);
if (o.tip) row.setAttribute("data-tooltip", o.tip);
if (o.keywords) row.setAttribute("data-keywords", o.keywords);
var cb = document.createElement("input");
cb.type = "checkbox";
cb.checked = !!(o.get ? o.get() : o.checked);
var box = document.createElement("span");
box.className = "mod-box";
var lab = document.createElement("span");
lab.className = "mod-label";
lab.textContent = o.label;
cb.addEventListener("change", function(e) {
if (o.onChange) o.onChange(cb.checked, e);
changed();
});
row.appendChild(cb);
row.appendChild(box);
row.appendChild(lab);
return row;
},
add: function(def) {
if (items.some(function(item) {
return item.key === def.key;
})) return;
if (def.requiresReload) initial.set(def.key, !!def.get());
var set = def.set;
def.set = function(v) {
set(v);
changed();
};
items.push(def);
var root = document.getElementById("mod-settings-section");
if (root) mount(root, def);
},
mount: function(root) {
items.forEach(function(def) {
mount(root, def);
});
},
reloadPending: function() {
return items.filter(function(def) {
return def.requiresReload && initial.get(def.key) !== !!def.get();
});
},
codeParts: function() {
var out = "";
items.forEach(function(s) {
if (!s.code) return;
var v = !!s.get();
if (v !== !!s.def) out += s.code + (v ? "1" : "0");
});
return out;
},
encodeValue: function(s) {
return String(s).split("").map(function(ch) {
if (/[0-9a-z]/.test(ch)) return ch;
var c = ch.charCodeAt(0);
return c < 1296 ? "_" + ("0" + c.toString(36)).slice(-2) : "__" + ("000" + c
.toString(36)).slice(-4);
}).join("");
},
check: function(body) {
var h = 7;
for (var i = 0; i < body.length; i++) h = (h * 31 + body.charCodeAt(i)) % 1296;
return ("0" + h.toString(36)).slice(-2);
},
packCode: function(body) {
return "M2-" + body + "." + api.check(body);
},
parseCode: function(code) {
code = String(code || "").trim();
var vals = {},
m;
if (/^M-/.test(code)) {
var re = /([A-Z][a-z])([0-9a-z]*)/g,
b1 = code.slice(2);
while ((m = re.exec(b1)) !== null) vals[m[1]] = m[2];
return {
version: 1,
vals: vals
};
}
if (!/^M2-/.test(code)) throw new Error("Invalid code format");
var dot = code.lastIndexOf("."),
body = code.slice(3, dot);
if (dot < 3 || code.slice(dot + 1) !== api.check(body)) throw new Error(
"The code is incomplete or mistyped");
var i = 0;
while (i < body.length) {
if (!/[A-Z][a-z]/.test(body.substr(i, 2))) throw new Error("Invalid code format");
var key = body.substr(i, 2),
val = "";
i += 2;
while (i < body.length && !/[A-Z]/.test(body[i])) {
if (body[i] === "_") {
var wide = body[i + 1] === "_",
len = wide ? 4 : 2,
digits = body.substr(i + (wide ? 2 : 1), len);
if (!/^[0-9a-z]+$/.test(digits) || digits.length !== len) throw new Error(
"Invalid code format");
val += String.fromCharCode(parseInt(digits, 36));
i += (wide ? 2 : 1) + len;
} else val += body[i++];
}
vals[key] = val;
}
return {
version: 2,
vals: vals
};
},
applyCode: function(code) {
var vals = {},
changed = [];
try {
vals = api.parseCode(code).vals;
} catch (e) {
window.__ssbErr("registry.applyCode", e);
}
items.forEach(function(s) {
if (!s.code) return;
var v = Object.prototype.hasOwnProperty.call(vals, s.code) ? vals[s.code] ===
"1" : !!s.def;
if (!!s.get() !== v) {
s.set(v);
changed.push(s.key);
}
});
return changed;
},
reset: function() {
var changed = [];
items.forEach(function(s) {
if (s.code && !!s.get() !== !!s.def) {
s.set(!!s.def);
changed.push(s.key);
}
});
return changed;
}
};
return api;
})();
! function() {
var chatOn = false,
adOn = false;
try {
chatOn = JSON.parse(localStorage.getItem("tp-chatBypass") || "false") === true;
} catch (e) {
window.__ssbErr("patches#1", e)
}
try {
adOn = JSON.parse(localStorage.getItem("tp-adBypass") || "false") === true;
} catch (e) {
window.__ssbErr("patches#2", e)
}
if (!chatOn && !adOn) return;
var nativeReplaceAll = String.prototype.replaceAll;
var esc = function(v) {
return v.replace("$", "\\$");
};
var TAG = "[SSB-Bypass]";
if (adOn) {
window.__ssbAdBlock = function(input) {
try {
if (typeof input === "boolean") return true;
if (input === 10) return 5;
if (input === "adsBlocked") return false;
return input;
} catch (e) {
return true;
}
};
try {
var hideHouseAdCSS = document.createElement("style");
hideHouseAdCSS.id = "ssb-hide-house-ad";
hideHouseAdCSS.textContent =
".house-ad-wrapper,#chickenBadge{display:none!important}#respawn-group>.display-ad-header{display:none}#app:not(.is-vip):not(.playing-crazy-games) .pause-container{top:max(1em,calc(5.5em - 60px))}";
(document.head || document.documentElement).appendChild(hideHouseAdCSS);
} catch (e) {
window.__ssbErr("patches#3", e)
}
}
function modifier(js) {
return {
js: js,
mod: function(find, replace) {
var before = this.js;
this.js = nativeReplaceAll.call(this.js, find, replace);
if (before === this.js) console.log(TAG + " no-op: " + find);
}
};
}
if (chatOn) window.__ssbPatches.add("chat", function(js) {
var m = modifier(js);
var fn = js.match(/this\.lastControlTeam=255\,.*?function ([A-z]+)\((.)\)/);
if (!fn) {
console.warn(TAG + " chat: filter function not found (game updated?)");
return js;
}
var isBad = fn[1],
arg = fn[2];
m.mod("!" + esc(isBad) + "(" + esc(arg) + ")", "((!" + esc(isBad) + "(" + esc(arg) + "))||true)");
var render = m.js.match(/\)\),([a-zA-Z$_]+)\.innerHTML=([a-zA-Z$_]+),/);
if (render) m.mod(render[0], render[0] + esc(isBad) + "(" + render[2] + ')&&true&&!arguments[3]&&(' +
render[1] + '.style.color="red"),');
return m.js;
});
if (adOn) window.__ssbPatches.add("block-ads", function(js) {
var m = modifier(js);
var ads = js.match(/adsBlocked=([a-zA-Z$_][a-zA-Z0-9$_]*)/);
if (ads) m.mod("adsBlocked=" + ads[1], 'adsBlocked=window.__ssbAdBlock("adsBlocked")');
m.mod('"user-has-adblock"', 'window.__ssbAdBlock("user-has-adblock")');
m.mod("layed=!1", "layed=window.__ssbAdBlock(!1)");
m.mod("showAdBlockerVideo", "hideAdBlockerVideo");
var ud = m.js.match(/return ([A-Za-z0-9_$]+)\.productBlockAds\}/);
if (ud) m.mod(ud[1] + ".playerAccount.isUpgraded()", "window.__ssbAdBlock(" + esc(ud[1]) +
".playerAccount.isUpgraded())");
return m.js;
});
}();
! function() {
var KEY = "tp-adBypass";
function isOn() {
try {
return JSON.parse(localStorage.getItem(KEY) || "false") === true;
} catch (e) {
return false;
}
}
function setOn(v) {
try {
localStorage.setItem(KEY, JSON.stringify(!!v));
} catch (e) {
window.__ssbErr("patches#4", e)
}
}
window.__ssbSettings.add({
key: KEY,
section: "menus",
label: "Block Ads",
code: "Ab",
def: false,
requiresReload: true,
tip: "Blocks in-game video/banner ads. Off by default. Requires a full page reload (F5) to take effect, not just leaving and rejoining a match, since it changes how the game's own script loads the moment the page opens.",
keywords: "adblock advertisements video banner",
get: isOn,
set: setOn,
onToggle: function(v) {
window.__ssbUI.toast("Block Ads is " + (v ? "on" : "off") + ". Press F5 to apply it.");
}
});
}();
! function() {
var KEY = "tp-noAA";
function isOn() {
try {
return JSON.parse(localStorage.getItem(KEY) || "false") === true;
} catch (e) {
return false;
}
}
if (isOn()) {
var getContext = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function(type, attrs) {
if (typeof type === "string" && type.indexOf("webgl") >= 0) attrs = Object.assign({}, attrs, {
antialias: false
});
return getContext.call(this, type, attrs);
};
}
window.__ssbSettings.add({
key: KEY,
section: "fps",
after: "tp-uncapTarget",
label: "Disable Anti-Aliasing",
code: "Ea",
def: false,
requiresReload: true,
tip: "Turns off the game's edge smoothing. Edges look more jagged, but your graphics card does less work, which can raise your FPS. Requires a page reload (F5) to take effect.",
keywords: "aa msaa antialiasing smoothing jagged edges graphics gpu performance boost",
get: isOn,
set: function(v) {
try {
localStorage.setItem(KEY, JSON.stringify(!!v));
} catch (e) {
window.__ssbErr("aa#1", e)
}
},
onToggle: function(v) {
window.__ssbUI.toast("Disable Anti-Aliasing is " + (v ? "on" : "off") +
". Press F5 to apply it.");
}
});
}();
(function() {
"use strict";
if (window.__ssbEffects60) return;
const KEY = "tp-effects60FPS";
let rate = 0,
ownerSettings = null,
running = false,
memoryOnly = false,
compatible = false,
reason = "Game bundle not inspected yet";
let scene = null,
carry = 0,
steps = 0,
scoped = false,
primed = false;
let rockets = new WeakMap();
const counts = {
renderFrames: 0,
effectSteps: 0,
particlePasses: 0,
rocketBursts: 0
};
function clean(value) {
if (value === true) return 60;
if (typeof value !== "number" || !Number.isFinite(value) || value <= 0) return 0;
return Math.max(1, Math.min(540, Math.round(value)));
}
function read() {
try {
return clean(JSON.parse(localStorage.getItem(KEY) || "0"));
} catch (_) {
return 0;
}
}
function reset() {
carry = steps = 0;
scoped = primed = false;
rockets = new WeakMap();
}
function paint() {
if (ownerSettings) ownerSettings.effectsFPS = rate;
document.querySelectorAll('[data-setting="' + KEY + '"]').forEach(row => {
const input = row.querySelector('input[type="range"]'),
value = row.querySelector(".ssb-fx-rate-value");
if (input) {
input.value = String(rate ? Math.max(30, Math.min(240, rate)) : 29);
input.setAttribute("aria-valuetext", rate ? rate + " frames per second" : "Off");
}
if (value && value !== document.activeElement) value.value = rate ? String(rate) : "";
});
}
function unavailable() {
if (rate && !compatible && window.__ssbUI) window.__ssbUI.toast(
"Effects FPS is unavailable for this game build. Effects are unchanged.");
}
function click() {
try {
if (window.BAWK && window.BAWK.play) window.BAWK.play("ui_onchange");
} catch (e) {
window.__ssbErr("effects60.sound", e);
}
}
function refresh() {
if (memoryOnly) return;
const next = read();
if (next !== rate) {
rate = next;
reset();
}
paint();
}
function storage(e) {
if (e.key === KEY || e.key === null) {
memoryOnly = false;
refresh();
}
}
function visibility() {
reset();
}
const api = window.__ssbEffects60 = {
version: "6.5.0",
clean,
settings: () => ({
enabled: rate > 0,
targetHz: rate || 60
}),
set(value) {
rate = clean(value);
try {
localStorage.setItem(KEY, JSON.stringify(rate));
memoryOnly = false;
} catch (e) {
memoryOnly = true;
window.__ssbErr("effects60.storage", e);
}
reset();
paint();
document.dispatchEvent(new Event("ssb:settings-change"));
},
connect(settings) {
ownerSettings = settings;
paint();
},
row(settings) {
api.connect(settings);
const row = document.createElement("div");
row.className = "mod-slider-container";
row.setAttribute("data-setting", KEY);
row.setAttribute("data-keywords", "animation particles smoke grenade spin pickup effects fps rate custom");
const label = document.createElement("div");
label.className = "mod-slider-label";
label.textContent = "Effects FPS";
label.setAttribute("data-tooltip",
"Controls particles, shell fragments, pickup spin, projectile visuals, and the loose spatula. Camera/view and shared player/weapon animation routines keep their normal rate. Gameplay timing is unchanged. The slider goes from Off (far left) to 240. Type any rate from 1 to 540 in the box, or clear it for Off. Rates above your rendered FPS add work without looking smoother."
);
const wrap = document.createElement("div");
wrap.className = "mod-slider-inner-wrap";
wrap.style.cssText = "display:flex;align-items:center;flex:1;gap:8px";
const input = document.createElement("input");
Object.assign(input, {
type: "range",
className: "mod-slider",
min: "29",
max: "240",
step: "1",
value: String(rate ? Math.max(30, Math.min(240, rate)) : 29)
});
input.setAttribute("aria-label", "Effects FPS");
input.setAttribute("aria-valuetext", rate ? rate + " frames per second" : "Off");
input.addEventListener("input", () => api.set(+input.value === 29 ? 0 : +input.value));
input.addEventListener("change", () => {
click();
unavailable();
});
const keys = e => {
if (/^(Arrow|Home$|End$|PageUp$|PageDown$)/.test(e.key)) e.stopPropagation();
};
for (const event of ["keydown", "keyup"]) input.addEventListener(event, keys);
for (const text of ["Off", "240"]) {
const limit = document.createElement("span");
limit.className = "mod-slider-limit";
limit.textContent = text;
limit.style.cssText =
"font-size:11px;font-weight:700;color:var(--ssb-muted,#216a80);opacity:.75;min-width:20px;text-align:" +
(text === "Off" ? "right" : "left");
if (text === "Off") wrap.appendChild(limit);
else {
wrap.appendChild(input);
wrap.appendChild(limit);
}
}
const value = document.createElement("input");
Object.assign(value, {
type: "number",
className: "mod-num-input ssb-fx-rate-value",
min: "1",
max: "540",
step: "1",
placeholder: "Off",
value: rate ? String(rate) : ""
});
value.setAttribute("aria-label", "Effects FPS, 1 to 540, empty for Off");
const commit = () => {
if (value.validity && value.validity.badInput) {
value.value = rate ? String(rate) : "";
return;
}
const text = value.value.trim(),
n = text === "" ? 0 : Number(text);
if (Number.isFinite(n) && clean(n) !== rate) {
api.set(n);
click();
unavailable();
}
value.value = rate ? String(rate) : "";
};
value.addEventListener("change", commit);
value.addEventListener("keydown", e => {
if (e.key !== "Escape") e.stopPropagation();
if (e.key === "Enter") {
e.preventDefault();
window.__ssbEatKeyUp(e.key);
commit();
value.blur();
}
});
value.addEventListener("keyup", e => {
if (e.key !== "Escape") e.stopPropagation();
});
row.__ssbSet = api.set;
row.append(label, wrap, value);
return row;
},
start() {
if (running) return;
running = true;
if (!memoryOnly) rate = read();
reset();
paint();
document.addEventListener("visibilitychange", visibility);
document.addEventListener("pointerlockchange", visibility);
document.addEventListener("ssb:settings-change", refresh);
window.addEventListener("storage", storage);
window.addEventListener("focus", refresh);
},
stop() {
running = false;
reset();
scene = null;
document.removeEventListener("visibilitychange", visibility);
document.removeEventListener("pointerlockchange", visibility);
document.removeEventListener("ssb:settings-change", refresh);
window.removeEventListener("storage", storage);
window.removeEventListener("focus", refresh);
},
status: () => ({
version: api.version,
enabled: rate > 0,
running,
compatible,
reason,
targetHz: rate || 60,
active: scoped,
steps,
...counts
}),
begin(delta, owner) {
counts.renderFrames++;
if (owner !== scene) {
reset();
scene = owner;
}
scoped = running && rate > 0 && compatible && !document.hidden;
steps = 0;
if (!scoped) {
carry = 0;
primed = false;
return;
}
if (!primed) {
primed = true;
return;
}
if (!Number.isFinite(delta) || delta < 0) {
carry = 0;
return;
}
carry += Math.min(delta, 8) * rate / 60;
steps = Math.min(Math.ceil(8 * rate / 60), Math.floor(carry + 1e-9));
carry = Math.max(0, carry - steps);
counts.effectSteps += steps;
},
end() {
scoped = false;
},
spin: () => scoped ? steps * 60 / rate : 1,
delta: value => scoped ? steps * 60 / rate : value,
floatScale: value => scoped ? value : 1,
follow: () => scoped ? 1 - Math.pow(.5, steps * 60 / rate) : .5,
resetRocket(actor) {
rockets.delete(actor);
},
emits(actor, original) {
if (!scoped) return original ? 1 : 0;
const phase = (rockets.get(actor) || 0) + steps * 60 / rate;
const n = Math.floor(phase / 2 + 1e-9);
rockets.set(actor, Math.max(0, phase - n * 2));
counts.rocketBursts += actor.armed ? n : 0;
return n;
},
particles(update, delta, a, b, c, d, e, f) {
const parts = scoped ? Math.ceil(7.5 / rate - 1e-9) : 1,
n = scoped ? steps * parts : 1,
tick = scoped ? 60 / rate / parts : delta;
for (let i = 0; i < n; i++) {
update(a, tick);
update(b, tick);
update(c, tick);
update(d, tick);
update(e, tick);
update(f, tick);
}
counts.particlePasses += n;
}
};
function patchGame(src) {
const mark = "/*ssb-effects60*/";
if (src.includes(mark)) {
compatible = true;
reason = "Decorative timing hooks already installed";
return src;
}
const edits = [];
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const unique = (re, text, name) => {
const all = Array.from(text.matchAll(re));
if (all.length !== 1) throw new Error(name + ": expected 1 anchor, found " + all.length);
return all[0];
};
function edit(old, replacement) {
if (src.split(old).length !== 2) throw new Error("Ambiguous source segment");
edits.push([old, replacement]);
}
try {
const frame = unique(
/([\w$]+)\.updateActors\(([\w$]+)\),([\w$]+)\.update\(\2\),([\w$]+)\(([\w$]+),\2\),\4\(([\w$]+),\2\),\4\(([\w$]+),\2\),\4\(([\w$]+),\2\),\4\(([\w$]+),\2\),\4\(([\w$]+),\2\)/g,
src, "visual pass");
const [all, actors, dt, pickups, update, ...pools] = frame;
if (new Set(pools).size !== 6) throw new Error("Particle pools changed");
const draws = unique(/([\w$]+)\.render\(\),([\w$]+)\.render\(\)/g,
src.slice(frame.index + all.length, frame.index + all.length + 1200), "scene draws");
const early = unique(/if\(([\w$]+)\)([\w$]+)\.[\w$]+\.update\(([\w$]+)\);else\{for/g, src,
"actor pass boundary");
if (early[3] !== dt || early.index >= frame.index || frame.index - early.index > 1400) throw new Error(
"Actor pass changed");
edit(early[0], mark + "!" + early[1] + "&&window.__ssbEffects60&&window.__ssbEffects60.begin(" + dt +
"," + draws[1] + ");" + early[0]);
const def = unique(new RegExp("function " + esc(update) + "\\(([\\w$]+),([\\w$]+)\\)\\{", "g"), src,
"particle updater");
const body = src.slice(def.index, def.index + 1400);
if (!body.includes(".sprites") || !body.includes(".float") ||
!new RegExp("\\.anim\\+=" + esc(def[2]) + "/").test(body)) throw new Error(
"Particle timing changed");
const drift = unique(new RegExp("([\\w$]+)\\.position\\.y\\+=\\1\\.dy\\*" + esc(def[2]) +
"\\+\\1\\.float", "g"), body, "particle drift");
edit(drift[0], drift[0] + "*(window.__ssbEffects60?window.__ssbEffects60.floatScale(" + def[2] +
"):1)");
const originalParticles = all.slice(all.indexOf(update + "("));
edit(all, actors + ".updateActors(" + dt + ")," + pickups + ".update(" + dt + ")," +
"(window.__ssbEffects60?window.__ssbEffects60.particles(" + [update, dt, ...pools].join(",") +
"):(" + originalParticles + ")),window.__ssbEffects60&&window.__ssbEffects60.end()");
unique(/"grenade_beep"/g, src, "grenade visual identity");
const grenade = unique(
/([\w$]+)\.prototype\.update=function\(([\w$]+)\)\{this\.grenade\.resting\|\|\(/g, src,
"grenade visual");
const end = src.indexOf("," + grenade[1] + ".prototype.remove=", grenade.index);
if (end < 0 || end - grenade.index > 2000) throw new Error("Grenade visual boundary changed");
const grenadeBody = src.slice(grenade.index, end);
if (!grenadeBody.includes('"grenade_beep"')) throw new Error("Grenade visual identity changed");
for (const axis of ["x", "y", "z"]) {
const expr = "this.mesh.rotation." + axis + "+=this.r" + axis;
if (grenadeBody.split(expr).length !== 2) throw new Error("Grenade rotation changed");
edit(expr, expr + "*(window.__ssbEffects60?window.__ssbEffects60.spin():1)");
}
const pickup = unique(
/([\w$]+)\.prototype\.update=function\(([\w$]+)\)\{this\.mesh\.rotation\.y\+=\.03\*\2\}/g, src,
"pickup spin");
const context = src.slice(Math.max(0, pickup.index - 1600), pickup.index);
if (!context.includes('getMeshByName("grenadeItem")') ||
!new RegExp(esc(pickup[1]) + "\\.call\\(this,").test(context)) throw new Error(
"Pickup identity changed");
edit(pickup[0], pickup[0].replace(".03*" + pickup[2],
".03*(window.__ssbEffects60?window.__ssbEffects60.delta(" + pickup[2] + "):" + pickup[2] +
")"));
const sound = unique(/"gun_rpegg_rocket_fly"/g, src, "rocket emitter identity");
const headers = Array.from(src.slice(Math.max(0, sound.index - 700), sound.index)
.matchAll(/([\w$]+)\.prototype\.update=function\(\)\{/g));
if (headers.length !== 1) throw new Error("Rocket visual boundary changed");
const rocket = headers[0][1];
const rocketStart = src.indexOf(rocket + ".prototype.update=function(){");
const rocketEnd = src.indexOf("," + rocket + ".prototype.remove=", rocketStart);
const rocketBody = src.slice(rocketStart, rocketEnd);
const emit = unique(/if\(([^{}]+),this\.delayFrames%2==0\)\{/g, rocketBody,
"rocket emission condition");
if (rocketStart < 0 || rocketEnd < 0 || rocketBody.length > 2000 ||
!rocketBody.includes("this.armed&&(")) {
throw new Error("Rocket emitter changed");
}
edit(rocketBody, rocketBody.replace(emit[0],
"for(var __ssbFxEmit=(" + emit[1] +
",window.__ssbEffects60?window.__ssbEffects60.emits(this,this.delayFrames%2==0):(this.delayFrames%2==0?1:0));__ssbFxEmit>0;__ssbFxEmit--){"
));
const fire = rocket + ".prototype.fire=function(){";
edit(fire, fire + "window.__ssbEffects60&&window.__ssbEffects60.resetRocket(this);");
const follows = Array.from(src.matchAll(
/this\.mesh\.position\.([xyz])\+=\.5\*\((this\.(bullet|rocket|grenade|spatula)\.\1(?:\+\.1)?)-this\.mesh\.position\.\1\)/g
));
if (follows.length !== 12 || ["bullet", "rocket", "grenade", "spatula"].some(k => follows.filter(m => m[
3] === k).length !== 3)) throw new Error("Visual interpolation anchors changed");
for (const m of follows) edit(m[0], m[0].replace("+=.5*",
"+=(window.__ssbEffects60?window.__ssbEffects60.follow():.5)*"));
const tracer = "this.mesh.scaling.z=Math.min(this.mesh.scaling.z+.03,3)";
edit(tracer, tracer.replace("+.03", "+.03*(window.__ssbEffects60?window.__ssbEffects60.delta(1):1)"));
const spatula = unique(/this\.mesh\.rotation\.y\+=\.1\*([\w$]+)/g, src, "spatula rotation");
edit(spatula[0], "this.mesh.rotation.y+=.1*(window.__ssbEffects60?window.__ssbEffects60.delta(" +
spatula[1] + "):" + spatula[1] + ")");
let out = src;
for (const [old, replacement] of edits) out = out.replace(old, () => replacement);
compatible = true;
reason = "All decorative timing anchors verified";
return out;
} catch (e) {
compatible = false;
reason = String(e && e.message || e);
reset();
window.__ssbErr("effects60.patch", e);
return src;
}
}
window.__ssbPatches.add("effects60:decorative", patchGame);
api.start();
})();
window.__ssbPatches.add("ssb:bullet-splats", function(src) {
const mark = "/*ssb-bullet-splats*/";
if (src.includes(mark)) return src;
const anchor = "if(this.hitsMap){";
const at = src.indexOf(anchor);
if (at < 0 || src.indexOf(anchor, at + anchor.length) >= 0) return src;
const block = src.slice(at, at + 850);
const matches = Array.from(block.matchAll(/;!function\([\w$,]+\)\{var ([\w$]+)=([\w$]+)\.getSprite\(0\);\1\.animLength=20\*Math\.random\(\)\+30,/g));
if (matches.length !== 1 || !block.includes("this.remove()")) return src;
const point = at + matches[0].index + 1;
return src.slice(0, point) + mark + "!window.__ssbHideBulletSplats&&function" + src.slice(point + "!function".length);
});
! function() {
var KEY = "tp-smartDetail",
STEPS = [1, 0.85, 0.7, 0.5],
WINDOW = 4000,
UP_FPS = 55,
TARGET = 45,
URGENT = 25;
var low = 40,
patched = false;
var engine = null,
setLevel = null,
base = 1;
var step = 0,
why = null,
whyFps = 0,
shown = 0,
kept = 0;
var frames = 0,
time = 0,
last = 0,
quietUntil = 0,
played = 0,
renders = 0;
var hitch = 0,
freeze = 0,
worst = 0,
refDt = 1000 / 30;
function fresh() {
frames = time = hitch = freeze = worst = 0;
}
var match = null,
lastMatch = null,
probe = null,
plan = null;
var downWait = 60000,
downAfter = 0,
upHold = 20000,
good = 0,
upAt = -Infinity,
toasted = false;
function isOn() {
try {
return JSON.parse(localStorage.getItem(KEY) || "true") !== false;
} catch (e) {
return true;
}
}
function gameAutoDetail() {
try {
return localStorage.getItem("autoDetail") !== "false";
} catch (e) {
return true;
}
}
function inGame() {
try {
return !!(window.extern && window.extern.inGame);
} catch (e) {
return false;
}
}
function onScreen() {
try {
var v = window.vueData;
return inGame() && !!(v && v.screens && v.showScreen === v.screens.game);
} catch (e) {
return false;
}
}
function sceneEngine() {
try {
var sc = window.P && window.P.scene;
return sc && sc.getEngine ? sc.getEngine() : null;
} catch (e) {
return null;
}
}
function active() {
return patched && isOn() && gameAutoDetail() && inGame() && !!engine;
}
function scale() {
try {
var v = window.__ssbRenderScale ? +window.__ssbRenderScale() : 1;
return v >= 1 && v <= 4 ? v : 1;
} catch (e) {
return 1;
}
}
function level(s) {
return (active() ? 1 / STEPS[s] : base) * scale();
}
function held() {
return !!document.pointerLockElement;
}
function apply(force) {
if (!engine) return;
var want = level(step);
if (Math.abs((+engine.getHardwareScalingLevel() || 1) - want) < 1e-6) {
took();
return;
}
if (held() && !force) return;
setLevel.call(engine, want);
took();
try {
window.dispatchEvent(new Event("resize"));
} catch (e) {
window.__ssbErr("detail#1", e)
}
}
function hook(e) {
if (!e || e === engine || typeof e.setHardwareScalingLevel !== "function") return;
engine = e;
setLevel = e.setHardwareScalingLevel;
base = +e.getHardwareScalingLevel() || 1;
shown = 0;
e.setHardwareScalingLevel = function(l) {
base = +l || 1;
if (held()) return setLevel.call(this, level(shown));
var r = setLevel.call(this, level(step));
if (this === engine) took();
return r;
};
try {
e.onEndFrameObservable.add(function() {
var now = performance.now(),
dt = now - last;
last = now;
renders++;
if (dt > 0 && dt < 1000 && now >= quietUntil && held()) {
frames++;
time += dt;
if (dt > 50 && dt > 3 * (frames >= 20 ? time / frames : refDt)) {
hitch++;
if (dt > 150) freeze++;
}
if (dt > worst) worst = dt;
}
});
} catch (err) {
window.__ssbErr("detail#2", err)
}
}
function want(n, w, fps) {
step = n;
why = n === shown ? null : w;
whyFps = fps;
}
function took() {
var n = active() ? step : 0,
from = shown,
w = why,
fps = plan && plan.time ? plan.frames * 1000 / plan.time : whyFps;
if (n === shown) return;
shown = n;
why = null;
plan = null;
fresh();
quietUntil = Math.max(quietUntil, performance.now() + 500);
if (!match || !w) return;
if (w === "low" || w === "recovered") probe = {
down: n > from,
from: from,
to: n,
fps: fps
};
match.steps.push({
at: performance.now() - match.start,
pct: Math.round(STEPS[n] * 100),
why: w,
fps: Math.round(fps)
});
if (match.steps.length > 12) match.steps.shift();
if (w === "low" && !toasted) {
toasted = true;
window.__ssbUI.toast("Smart Auto Detail lowered the resolution to " + Math.round(STEPS[n] * 100) +
"% (FPS was " + Math.round(fps) + ").");
}
}
function pick(fps) {
var n = shown + 1;
while (n < STEPS.length - 1 && fps * Math.pow(STEPS[shown] / STEPS[n], 2) < TARGET) n++;
return n;
}
function decide(n, t, now) {
var fps = n * 1000 / t,
p = probe;
probe = null;
if (step !== shown && why !== "low" && why !== "recovered") return;
if (p && p.down && fps < p.fps * (1 + (p.to - p.from) /
10)) {
want(p.from, "no help", fps);
downAfter = now + downWait;
downWait = Math.min(downWait * 2, 240000);
return;
}
if (p && !p.down) {
if (fps < low) {
want(p.from, "too low", fps);
upHold = Math.min(upHold * 2, 320000);
return;
}
upAt = now;
}
if (fps < low) {
good = 0;
if (why === "recovered") want(shown);
if (!plan && shown < STEPS.length - 1 && now >= downAfter) {
if (now - upAt < 60000) upHold = Math.min(upHold * 2, 320000);
plan = {
frames: 0,
time: 0
};
}
}
if (plan) {
plan.frames += n;
plan.time += t;
var avg = plan.frames * 1000 / plan.time;
want(avg < low ? pick(avg) : shown, "low", avg);
if (step > shown && plan.time >= 60000 && avg < URGENT) apply(
true);
return;
}
if (shown > 0 && fps >= UP_FPS) {
if (++good * WINDOW >= upHold) {
good = 0;
want(shown - 1, "recovered", fps);
}
} else good = 0;
}
function tick() {
hook(sceneEngine());
if (!engine) return;
var now = performance.now();
if (!inGame()) {
if (match) {
if (match.time > 0) lastMatch = {
fps: match.frames * 1000 / match.time,
lowest: match.lowest,
steps: match.steps,
time: match.time,
hitches: match.hitches,
freezes: match.freezes,
worst: match.worst
};
kept = why === "no help" || why === "too low" ? step : probe ? probe.from :
shown;
match = null;
}
step = 0;
why = null;
probe = null;
plan = null;
fresh();
apply();
return;
}
if (!match) {
match = {
start: now,
frames: 0,
time: 0,
lowest: Infinity,
steps: [],
hitches: 0,
freezes: 0,
worst: 0
};
probe = null;
plan = null;
played = 0;
good = 0;
downAfter = 0;
upAt = -Infinity;
want(kept, "kept", 0);
quietUntil = Math.max(quietUntil, now + 5000);
}
if (!active()) {
step = 0;
why = null;
probe = null;
plan = null;
}
apply();
if (!held()) plan = null;
if (!onScreen()) quietUntil = Math.max(quietUntil, now + 5000);
if (now < quietUntil) {
fresh();
return;
}
if (time < WINDOW) return;
var n = frames,
t = time,
fps = n * 1000 / t;
match.hitches += hitch;
match.freezes += freeze;
if (worst > match.worst) match.worst = worst;
refDt = t / n;
fresh();
played += t;
match.frames += n;
match.time += t;
if (fps < match.lowest) match.lowest = fps;
if (active()) decide(n, t, played);
}
window.__ssbAutoDetailOwns = function() {
return patched && isOn() && !!engine;
};
window.__ssbPatches.add("auto-detail", function(src) {
var i = src.indexOf(".getFps()<");
if (i < 0 || src.indexOf(".getFps()<", i + 1) >= 0) return src;
var from = Math.max(0, i - 120),
m = /[\w$]+\/[\w$]+<\d+&&[\w$.]+\.getFps\(\)<(\d+)&&/.exec(src.slice(from, i + 20));
if (!m) return src;
var at = from + m.index;
low = +m[1] || 40;
patched = true;
return src.slice(0, at) + "!(window.__ssbAutoDetailOwns&&window.__ssbAutoDetailOwns())&&" + src.slice(
at);
});
window.__ssbSettings.add({
key: KEY,
section: "fps",
after: "tp-noAA",
label: "Smart Auto Detail",
code: "Fd",
def: true,
tip: "Takes over from the game's Auto Detail, which needs to stay on. When your FPS drops under 40, it lowers the resolution, keeps it lower only if that helps, and raises it again when your FPS recovers. Changes wait until you die or pause, so the game doesn't stall mid-fight (unless you've been under 25 FPS for a whole minute). Nothing is saved: the next match starts where this one ended, and a reload starts sharp.",
keywords: "auto detail resolution quality lag low fps performance blurry high res render scale adaptive dynamic",
get: isOn,
set: function(v) {
try {
localStorage.setItem(KEY, JSON.stringify(!!v));
} catch (e) {
window.__ssbErr("detail#3", e)
}
step = 0;
why = null;
probe = null;
plan = null;
kept = 0;
apply();
}
});
window.__ssbMenuPoll(tick, 1000, {
inMatch: true
});
window.__ssbSmartDetail = {
tick: tick,
refresh: function() {
hook(sceneEngine());
apply();
},
state: function() {
return {
on: isOn(),
patched: patched,
low: low,
gameAutoDetail: gameAutoDetail(),
active: active(),
step: step,
why: why,
shown: shown,
kept: kept,
pct: Math.round(100 / level(shown)),
base: base,
scale: scale(),
probe: probe,
plan: plan,
played: played,
downAfter: downAfter,
downWait: downWait,
upHold: upHold,
match: match && {
fps: match.time ? match.frames * 1000 / match.time : 0,
lowest: match.lowest,
steps: match.steps.slice(),
time: match.time,
hitches: match.hitches,
freezes: match.freezes,
worst: match.worst
},
lastMatch: lastMatch
};
}
};
var SOFTWARE = /swiftshader|llvmpipe|softpipe|software|basic render/i;
function rendererOf(gl) {
var ext = gl.getExtension("WEBGL_debug_renderer_info");
return String(gl.getParameter(ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER) || "");
}
function glInfo() {
var out = {
renderer: "",
aa: null
};
try {
var e = engine || sceneEngine(),
gl = e && e._gl;
if (gl) {
out.renderer = rendererOf(gl);
var attrs = gl.getContextAttributes();
out.aa = attrs ? !!attrs.antialias : null;
}
} catch (err) {
window.__ssbErr("fpscheck#1", err)
}
if (!out.renderer) {
try {
var c = document.createElement("canvas"),
g = c.getContext("webgl2") || c.getContext("webgl");
if (g) {
out.renderer = rendererOf(g);
var lose = g.getExtension("WEBGL_lose_context");
if (lose) lose.loseContext();
}
} catch (err) {
window.__ssbErr("fpscheck#2", err)
}
}
return out;
}
function gpuName(r) {
var m = /^ANGLE \((.*)\)$/.exec(r),
parts = m ? m[1].split(", ") : [r],
n = parts.length > 1 ? parts[1] : parts[0];
return n.replace(/^ANGLE Metal Renderer:\s*/i, "").replace(/\s*\(0x[0-9a-f]+\)/ig, "").replace(
/\s+(Direct3D|D3D1|OpenGL|Vulkan|Metal|vs_\d).*$/i, "").trim() || r;
}
function gpuVendor(r) {
var m = /^ANGLE \(([^,]+),/.exec(r),
v = (m ? m[1] : r).toLowerCase();
return /nvidia/.test(v) ? "nvidia" : /\bamd\b|\bati\b|radeon/.test(v) ? "amd" : /intel/.test(v) ? "intel" : "";
}
function builtIn(r) {
return /intel/i.test(r) && !/\barc\b/i.test(r) ||
/radeon\(tm\) graphics|radeon graphics|vega \d+ graphics|radeon\(tm\) \d{3}m|radeon \d{3}m/i.test(r);
}
function within(ms, p, fallback) {
return Promise.race([p, new Promise(function(r) {
setTimeout(function() {
r(fallback);
}, ms);
})]).catch(function() {
return fallback;
});
}
function fastGpu() {
var gpu = navigator.gpu;
if (!gpu || !gpu.requestAdapter) return Promise.resolve(null);
return within(2000, gpu.requestAdapter({
powerPreference: "high-performance"
}).then(function(a) {
if (!a) return null;
if (a.info) return a.info;
return a.requestAdapterInfo ? a.requestAdapterInfo() : null;
}), null);
}
function battery() {
if (!navigator.getBattery) return Promise.resolve(null);
return within(1500, navigator.getBattery().then(function(b) {
return {
charging: !!b.charging,
level: b.level
};
}), null);
}
function sampleFrames(ms) {
var req = (window.__ssbNativeFrame && window.__ssbNativeFrame.request) || window.requestAnimationFrame.bind(
window);
return new Promise(function(done) {
var times = [],
t0 = performance.now(),
over = false,
stop = setTimeout(finish, ms + 500);
function frame() {
if (over) return;
var now = performance.now();
times.push(now);
if (now - t0 < ms) req(frame);
else finish();
}
function finish() {
if (over) return;
over = true;
clearTimeout(stop);
if (times.length < 5) {
done(null);
return;
}
var gaps = [];
for (var i = 1; i < times.length; i++) gaps.push(times[i] - times[i - 1]);
var sorted = gaps.slice().sort(function(a, b) {
return a - b;
}),
median = sorted[sorted.length >> 1];
var near30 = gaps.filter(function(g) {
return g > 28 && g < 39;
}).length / gaps.length;
done({
fps: (times.length - 1) * 1000 / (times[times.length - 1] - times[0]),
steady30: median > 30 && median < 37 && near30 >= 0.8
});
}
req(frame);
});
}
function mmss(ms) {
var t = Math.max(0, Math.round(ms / 1000));
return Math.floor(t / 60) + ":" + ("0" + t % 60).slice(-2);
}
var WHY = {
"low": "low FPS",
"no help": "lower didn't help",
"recovered": "FPS recovered",
"too low": "too slow higher up",
"kept": "from the last match"
};
function stutters(m) {
if (!m.hitches) return "None noticed";
var s = m.hitches - m.freezes,
parts = [];
if (s) parts.push(s + (s === 1 ? " short stutter" : " short stutters"));
if (m.freezes) parts.push(m.freezes + (m.freezes === 1 ? " freeze" : " freezes"));
return parts.join(", ") + ", the longest " + Math.round(m.worst) + " ms";
}
function turnOn(key) {
var S = window.__ssbSettings,
it = S && S.items.find(function(x) {
return x.key === key;
});
if (!it) return false;
if (!it.get()) {
it.set(true);
if (it.onToggle) it.onToggle(true);
}
var cb = document.querySelector('#mod-settings-section [data-setting="' + key + '"] input[type=checkbox]');
if (cb) cb.checked = !!it.get();
return !!it.get();
}
function check() {
var gl = glInfo();
var r0 = renders,
t0 = performance.now();
return Promise.all([sampleFrames(1500), fastGpu(), battery()]).then(function(r) {
var frame = r[0],
fast = r[1],
bat = r[2],
fixes = [],
tips = [],
facts = [];
var drawn = renders - r0,
fps = drawn >= 5 ? drawn * 1000 / (performance.now() - t0) : frame ? frame.fps : 0;
var soft = SOFTWARE.test(gl.renderer),
name = soft ? "Software, no graphics card" : gl.renderer ? gpuName(gl.renderer) : "Unknown";
var fastVendor = fast ? String(fast.vendor || "").toLowerCase() : "";
var e = engine || sceneEngine(),
lvl = e ? +e.getHardwareScalingLevel() || 1 : 1;
var onBattery = !!(bat && !bat.charging),
ad = gameAutoDetail(),
on = isOn();
var cur = match && match.time > 0 ? match : null,
prev = cur || lastMatch;
var avg = prev ? (prev === cur ? cur.frames * 1000 / cur.time : prev.fps) : 0,
slow = prev ? avg < 50 : fps > 0 && fps < 50;
if (soft) fixes.push({
label: "Your graphics card isn't being used",
text: "The browser is drawing the game in software, which is very slow. Turn on \"Use graphics acceleration when available\" in your browser's settings (in Chrome: Settings ▸ System), then restart the browser. If it's already on, update your graphics driver."
});
if (!soft && builtIn(gl.renderer) && /nvidia|amd/.test(fastVendor) && fastVendor !== gpuVendor(gl
.renderer)) fixes.push({
label: "Your faster graphics card isn't being used",
text: "The game runs on " + name + ", but this PC also has " + (fastVendor ===
"nvidia" ? "an NVIDIA" : "an AMD") + " graphics card. " +
(/Windows/.test(navigator.userAgent) ?
"In Windows Settings ▸ System ▸ Display ▸ Graphics, set your browser to High performance, then restart the browser." :
"Set your browser to use it in your system's graphics settings, then restart the browser."
)
});
if (frame && frame.steady30 && onBattery) fixes.push({
label: "Battery saver is holding you to 30 FPS",
text: "Your laptop is on battery and the browser is drawing 30 frames a second. Battery savers like Chrome's Energy Saver do this. Plug in, or turn Energy Saver off in Chrome Settings ▸ Performance."
});
if (lvl / scale() > 1.99 && !(active() && shown === STEPS.length - 1)) {
if (!ad) fixes.push({
label: "The game is drawing at half resolution",
text: "High Res is off, so the game draws a quarter of the pixels and looks blurry. If your FPS allows it, turn High Res on in the game's Settings, on the monitor tab."
});
else if (!on) fixes.push({
label: "The game is drawing at half resolution",
text: "The game's Auto Detail halved it after a slow moment, and it stays that way. Turn on Smart Auto Detail above: it lowers the resolution in smaller steps, and only while that helps."
});
else if (!patched) fixes.push({
label: "The game is drawing at half resolution",
text: "The game's Auto Detail halved it after a slow moment. Smart Auto Detail can't take over in this version of the game, so check for a Better HUD update."
});
}
if (slow && !on) tips.push({
label: "Turn on Smart Auto Detail",
text: "When your FPS drops, it lowers the resolution the next time you die or pause, and raises it again when your FPS recovers.",
act: {
label: "Turn it on",
done: "Turned on",
run: function() {
return turnOn(KEY);
}
}
});
if (slow && on && !ad) tips.push({
label: "Turn on the game's Auto Detail",
text: "Smart Auto Detail only steps in while the game's Auto Detail is on (Settings, monitor tab)."
});
if (slow && scale() === 1) tips.push({
label: "Raise Render Scale",
text: "It's above, in FPS & Ping. At 1.5 the game draws two-thirds of the width and height: a softer picture, but far fewer pixels to draw."
});
if (gl.aa && !soft && (slow || builtIn(gl.renderer))) tips.push({
label: "Turn on Disable Anti-Aliasing",
text: "It's above, in FPS & Ping. Edges look a little more jagged, but weaker graphics can gain a lot of FPS. Press F5 after turning it on.",
act: {
label: "Turn it on",
done: "On: press F5 to apply",
run: function() {
return turnOn("tp-noAA");
}
}
});
if (onBattery && !(frame && frame.steady30)) tips.push({
label: "Plug in",
text: "Laptops slow their graphics down on battery."
});
var hz = prev && prev.time > 0 ? prev.freezes / (prev.time / 60000) : 0;
if (prev && prev.time >= 30000 && (prev.freezes >= 5 || hz >= 2)) tips.push({
label: "Close what runs in the background",
text: "The game froze for more than 150 ms " + prev.freezes + (prev.freezes === 1 ? " time" : " times") +
". Short freezes usually come from other programs, browser tabs or extensions busy at the same time, or from Windows updates and downloads, rather than from the game's settings."
});
facts.push({
label: "Graphics",
text: name
});
if (fps) facts.push({
label: inGame() ? "Frame rate right now" : "Frame rate in the menu",
text: Math.round(fps) + " FPS"
});
if (prev) facts.push({
label: prev === cur ? "This match" : "Last match",
text: Math.round(avg) + " FPS on average, " + Math.round(prev.lowest) + " at the lowest"
});
if (prev && prev.time > 0 && prev.hitches != null) facts.push({
label: "Stutters",
text: stutters(prev)
});
if (e) facts.push({
label: "Game view",
text: e.getRenderWidth() + " × " + e.getRenderHeight() + " pixels, " + Math.round(100 /
lvl) + "% resolution"
});
if (scale() !== 1) facts.push({
label: "Render Scale",
text: String(scale())
});
facts.push({
label: "Smart Auto Detail",
text: !on ? "Off" : !patched ? "Not available in this game version" : !ad ?
"Off until you turn on the game's Auto Detail" : active() ? "On, at " + Math.round(
STEPS[shown] * 100) + "% now" : "On"
});
var steps = prev ? prev.steps : [];
if (steps.length) facts.push({
label: "Resolution changes",
text: steps.slice(-4).map(function(x) {
return mmss(x.at) + " " + x.pct + "% (" + (WHY[x.why] || x.why) + ")";
}).join(", ")
});
if (gl.aa !== null) facts.push({
label: "Anti-aliasing",
text: gl.aa ? "On" : "Off"
});
if (bat) facts.push({
label: "Power",
text: bat.charging ? "Plugged in" : "On battery (" + Math.round(bat.level * 100) + "%)"
});
var text = fixes.length ? "Found " + (fixes.length === 1 ? "one thing" : fixes.length + " things") +
" holding your FPS back." :
tips.length ? "No big problems found. These might still help." :
"No common FPS problems found.";
var lines = ["Better HUD " + window.SSB_VERSION + " FPS Check", text];
[
["Worth fixing", fixes],
["Might help", tips],
["Details", facts]
].forEach(function(g) {
if (!g[1].length) return;
lines.push("", g[0] + ":");
g[1].forEach(function(it) {
lines.push("- " + it.label + ": " + it.text);
});
});
return {
title: "FPS Check",
text: text,
copy: lines.join("\n"),
image: true,
sections: [{
title: "Worth fixing",
items: fixes
}, {
title: "Might help",
items: tips
}, {
title: "Details",
items: facts,
facts: true
}]
};
});
}
var busy = false;
function run(b) {
if (busy) return;
busy = true;
try {
if (window.BAWK && window.BAWK.play) window.BAWK.play("ui_click");
} catch (e) {
window.__ssbErr("fpscheck#3", e)
}
var label = b.textContent;
b.disabled = true;
b.textContent = "Checking…";
function done() {
busy = false;
b.disabled = false;
b.textContent = label;
}
check().then(function(rep) {
done();
window.__ssbUI.report(rep);
}, function(e) {
done();
window.__ssbErr("fpscheck#4", e);
window.__ssbUI.toast("The FPS Check couldn't finish. Try again.", {
type: "error"
});
});
}
function row() {
var c = document.createElement("div");
c.className = "mod-slider-container";
c.setAttribute("data-setting", "ssb-fpsCheck");
c.setAttribute("data-keywords",
"fps check test diagnose lag slow low frame rate graphics card gpu driver acceleration battery energy saver resolution"
);
var l = document.createElement("div");
l.className = "mod-slider-label";
l.textContent = "FPS Check";
l.setAttribute("data-tooltip",
"Measures your frame rate and looks for common causes of low FPS, like the browser not using your graphics card or a battery saver holding it to 30 FPS. It tells you how to fix each one."
);
l.style.cursor = "default";
var b = document.createElement("button");
b.type = "button";
b.className = "mod-num-input mod-key-btn";
b.style.cssText = "width: 120px; padding: 6px 10px; cursor: pointer; font-weight: 700;";
b.textContent = "Run Check";
b.addEventListener("click", function() {
run(b);
});
c.appendChild(l);
c.appendChild(b);
return c;
}
window.__ssbFpsCheck = {
row: row,
check: check,
gpu: function() {
var g = glInfo();
return {
name: SOFTWARE.test(g.renderer) ? "Software, no graphics card" : g.renderer ? gpuName(g
.renderer) : "Unknown",
aa: g.aa
};
}
};
}();
! function() {
var STYLE_ID = "ssb-fov-style",
KEY = "tp-fovResizeAll",
VH = /(^|[^\w.-])(-?(?:\d+\.?\d*|\.\d+))vh(?![\w-])/g;
var box = null,
all = false,
want = 1,
seen = new WeakSet(),
watch = null,
timer = 0,
firing = false;
function resizeAll() {
try {
return JSON.parse(localStorage.getItem(KEY) || "false") === true;
} catch (e) {
return false;
}
}
function fixStyle(st) {
var props = [];
for (var i = 0; i < st.length; i++) props.push(st[i]);
props.forEach(function(p) {
var v = st.getPropertyValue(p);
if (!/\dvh/.test(v) || /url\(|["']|--ssb-vh/.test(v)) return;
st.setProperty(p, v.replace(VH, "$1calc($2 * var(--ssb-vh, 1vh))"), st.getPropertyPriority(p));
});
}
function fixRules(rules) {
for (var i = 0; i < rules.length; i++) {
var r = rules[i];
try {
if (r.style) fixStyle(r.style);
if (r.cssRules) fixRules(r.cssRules);
if (r.styleSheet) fixSheet(r.styleSheet);
} catch (e) {
window.__ssbErr("fov#1", e)
}
}
}
function fixSheet(sh) {
if (!sh || seen.has(sh)) return;
var rules;
try {
rules = sh.cssRules;
} catch (e) {
if (e && e.name === "SecurityError") seen.add(
sh);
return;
}
seen.add(sh);
fixRules(rules);
}
function fixAll() {
var list = document.styleSheets;
for (var i = 0; i < list.length; i++) fixSheet(list[i]);
}
function inMatch() {
try {
var v = window.vueData;
return !!(window.extern && window.extern.inGame && v && v.screens && v.showScreen === v.screens.game);
} catch (e) {
return false;
}
}
function measure(f) {
var dpr = window.devicePixelRatio || 1,
H = window.innerHeight,
h = Math.round(H * dpr / f) / dpr;
return {
left: 0,
top: Math.round((H - h) / 2 * dpr) / dpr,
width: window.innerWidth,
height: h
};
}
function resize() {
firing = true;
try {
window.dispatchEvent(new Event("resize"));
} catch (e) {
window.__ssbErr("fov#2", e)
}
firing = false;
}
function apply(f) {
want = f;
var mode = resizeAll(),
st = document.getElementById(STYLE_ID),
next = f > 1.001 && document.body && inMatch() ? measure(f) : null;
if (next && box && mode === all && next.top === box.top && next.width === box.width && next.height === box
.height) {
if (all) fixAll();
return;
}
if (!next && !box) return;
box = next;
all = mode;
if (box && !st) {
st = document.createElement("style");
st.id = STYLE_ID;
(document.head || document.documentElement).appendChild(st);
}
if (box && all) {
fixAll();
if (!watch) {
watch = new MutationObserver(fixAll);
if (document.head) watch.observe(document.head, {
childList: true,
subtree: true,
characterData: true
});
watch.observe(document.documentElement, {
childList: true
});
}
st.textContent = "html{background:#000!important;overflow:hidden!important}" +
"body{position:fixed!important;left:0!important;top:" + box.top +
"px!important;width:100%!important;height:" + box.height +
"px!important;margin:0!important;overflow:hidden!important;contain:layout!important}#canvas{will-change:transform}" +
":root{--ssb-vh:" + box.height / 100 + "px}" +
"#egg-floatie-layer:not(.egg-floatie-layer--corner){translate:0 " + -box.top + "px}";
} else {
if (watch) {
watch.disconnect();
watch = null;
}
if (box) st.textContent = "html{background:#000!important}" +
"#canvas{position:fixed!important;left:0!important;top:" + box.top +
"px!important;right:auto!important;bottom:auto!important;width:100%!important;height:" + box.height +
"px!important}" +
"#scopeBorder{top:" + box.top + "px!important;height:" + box.height + "px!important}" +
"#maskmiddle{width:" + box.height + "px!important;height:" + box.height + "px!important}";
else if (st) st.textContent = "";
}
resize();
clearTimeout(timer);
timer = setTimeout(resize, 300);
}
window.addEventListener("resize", function() {
if (!firing && box) apply(want);
});
window.__ssbFov = {
apply: apply
};
window.__ssbViewBox = function() {
return box && all ? {
left: box.left,
top: box.top,
width: box.width,
height: box.height
} : {
left: 0,
top: 0,
width: window.innerWidth,
height: window.innerHeight
};
};
window.__ssbSettings.add({
key: KEY,
section: "gameplay",
after: "tp-fovStretch",
label: "Resize Everything",
code: "Gr",
def: false,
tip: "With FOV (Black Bars) above 1, fits the HUD and menus between the bars too, like a shorter browser window. Off, they keep their normal size and only the game view goes between the bars.",
keywords: "fov black bars hud menus ui size shrink fit scale shorter window letterbox",
get: resizeAll,
set: function(v) {
try {
localStorage.setItem(KEY, JSON.stringify(!!v));
} catch (e) {
window.__ssbErr("fov#3", e)
}
apply(want);
}
});
}();
! function() {
let _ssbBawk = undefined;
Object.defineProperty(window, 'BAWK', {
get() {
return _ssbBawk;
},
set(val) {
_ssbBawk = val;
if (val) {
try {
let originalAddChild = val.addChild;
if (originalAddChild && !originalAddChild._ssbHooked) {
val.addChild = function(child) {
if (child && child.constructor && !child.constructor._ssbHooked) {
let Tc = child.constructor;
Tc._ssbHooked = true;
let originalSetNodePosition = Tc.setNodePosition;
if (originalSetNodePosition) {
Tc.setNodePosition = function(node, t) {
if (d?.perf?.audioOptimized && node && t) {
let ly = _ssbBawk && _ssbBawk.position ? _ssbBawk
.position.y : 0;
let py = ly + 4 * (t.y - ly);
if (typeof node._ssbLastX === 'number') {
let dx = t.x - node._ssbLastX;
let dy = py - node._ssbLastY;
let dz = t.z - node._ssbLastZ;
if (dx * dx + dy * dy + dz * dz < 0.0025) return;
}
node._ssbLastX = t.x;
node._ssbLastY = py;
node._ssbLastZ = t.z;
}
return originalSetNodePosition.apply(this, arguments);
};
}
let originalUpdate = Tc.prototype.update;
if (originalUpdate) {
Tc.prototype.update = function() {
if (d?.perf?.audioOptimized) {
let listenerPos = _ssbBawk && _ssbBawk.position;
if (!this._ssbFrameCount) this._ssbFrameCount = 0;
this._ssbFrameCount = (this._ssbFrameCount + 1) % 4;
for (let channel of this.channels) {
if (channel.source && channel.follow) {
let node = channel.node;
let pos = channel.position;
let isDistant = false;
if (listenerPos && pos) {
let dx = pos.x - listenerPos.x;
let dy = pos.y - listenerPos.y;
let dz = pos.z - listenerPos.z;
if (dx * dx + dy * dy + dz * dz > 225)
isDistant = true;
}
if (isDistant && this._ssbFrameCount !== 0)
continue;
Tc.setNodePosition(node, pos);
}
}
} else {
return originalUpdate.apply(this, arguments);
}
};
}
}
return originalAddChild.apply(this, arguments);
};
val.addChild._ssbHooked = true;
}
let originalSetPosition = val.setPosition;
if (originalSetPosition && !originalSetPosition._ssbHooked) {
let lastPos = {
x: 0,
y: 0,
z: 0
};
val.setPosition = function(t) {
if (d?.perf?.audioOptimized && t) {
let dx = t.x - lastPos.x;
let dy = t.y - lastPos.y;
let dz = t.z - lastPos.z;
if (dx * dx + dy * dy + dz * dz < 0.0004) return;
lastPos.x = t.x;
lastPos.y = t.y;
lastPos.z = t.z;
}
return originalSetPosition.apply(this, arguments);
};
val.setPosition._ssbHooked = true;
}
let originalSetOrientation = val.setOrientation;
if (originalSetOrientation && !originalSetOrientation._ssbHooked) {
let lastOrient = {
x: 0,
y: 0,
z: 0
};
val.setOrientation = function(t) {
if (d?.perf?.audioOptimized && t) {
let dx = t.x - lastOrient.x;
let dy = t.y - lastOrient.y;
let dz = t.z - lastOrient.z;
if (dx * dx + dy * dy + dz * dz < 0.0004) return;
lastOrient.x = t.x;
lastOrient.y = t.y;
lastOrient.z = t.z;
}
return originalSetOrientation.apply(this, arguments);
};
val.setOrientation._ssbHooked = true;
}
} catch (err) {
console.warn("[Better HUD] Audio optimization hook failed:", err);
}
}
},
configurable: true,
enumerable: true
});
let _ssbGetYawPitch = undefined;
Object.defineProperty(window, "get_yaw_pitch", {
get() {
return _ssbGetYawPitch
},
set(val) {
_ssbGetYawPitch = val
},
configurable: true,
enumerable: true
});
const _ssbCore = [
["hideFPS", "hideBox", "tp-hideBox", "Fb", true, "b", "Hide Box Background"],
["hideFPS", "showMs", "tp-showMs", "Fm", false, "b", "Show Frametime (ms)"],
["hideFPS", "showSessionTime", "tp-showSessionTime", "Ft", false, "b", "Show Session Time"],
["hideFPS", "sessionFrom", "tp-sessionTimeFrom", "Fs", 0, "n1", "Session Time Counts From"],
["hideFPS", "hide", "tp-hideFPS", "Fh", false, "b", "Hide FPS"],
["hideFPS", "min", "tp-minFPS", "Fi", 60, "n1"],
["hideFPS", "max", "tp-maxFPS", "Fa", 60, "n1"],
["hideFPS", "random", "tp-randomFPS", "Fr", false, "b"],
["hideFPS", "uncap", "tp-uncapFPS", "Fu", false, "b", "Uncap FPS"],
["hideFPS", "uncapCtl", "tp-uncapControlled", "Fc", false, "b", "Controlled Uncap"],
["hideFPS", "uncapTarget", "tp-uncapTarget", "Fg", 0, "n1", "Target FPS"],
["perf", "effectsFPS", "tp-effects60FPS", "Fv", 0, "n1", "Effects FPS"],
["ping", "hide", "tp-hidePing", "Ph", false, "b", "Hide Ping"],
["ping", "min", "tp-minPing", "Pi", 1, "n1"],
["ping", "max", "tp-maxPing", "Pa", 1, "n1"],
["ping", "random", "tp-randomPing", "Pr", false, "b"],
["ping", "autoPickBest", "tp-autoPickBest", "Pb", false, "b", "Auto-pick Best Server"],
["ui", "hideEggCount", "tp-hideEggCount", "Ue", false, "b", "Hide Egg Count"],
["ui", "hideChat", "tp-hideChat", "Uc", false, "b", "Hide Chat"],
["ui", "hideKillFeed", "tp-hideKillFeed", "Uk", false, "b", "Hide Kill Feed"],
["ui", "hideChallenges", "tp-hideChallenges", "Ux", false, "b", "Hide Challenges"],
["ui", "hideChickenWinner", "tp-hideChickenWinner", "Uw", false, "b", "Hide Chick'n Winner"],
["ui", "autoFullscreen", "tp-autoFullscreen", "Uf", false, "b", "Auto Fullscreen"],
["ui", "hidePlayerList", "tp-hidePlayerList", "Up", false, "b", "Hide Scoreboard"],
["ui", "hideBestStreak", "tp-hideBestStreak", "Us", false, "b", "Hide Best Streak"],
["ui", "hideGameStats", "tp-hideGameStats", "Ug", false, "b", "Hide Game Stats"],
["ui", "hideAmmo", "tp-hideAmmo", "Ua", false, "b", "Hide Ammo & Grenades"],
["ui", "hideGrenade", "tp-hideGrenade", "Un", false, "b", "Hide Ammo & Grenades"],
["ui", "hideHP", "tp-hideHP", "Uh", false, "b", "Hide HP"],
["ui", "showVolumeSlider", "tp-showVolumeSlider", "Uv", true, "b", "Pause-Menu Volume Slider"],
["ui", "showServerList", "tp-showServerList", "Ul", false, "b", "Server Picker"],
["ui", "showChangedTab", "tp-showChangedTab", "Uz", false, "b", "Show Changed Tab"],
["ui", "advancedSettings", "tp-advancedSettings", "Uy", false, "b", "Advanced Settings"],
["ui", "guiScale", "tp-guiScale", "Ui", 1, "n", "GUI Scale"],
["gameplay", "tabOutKey", "tp-tabOutKey", "Gt", "Tab", "key", "Tab Out Key"],
["gameplay", "noExplosionSmoke", "tp-noExplosionSmoke", "Gs", false, "b"],
["gameplay", "noExplosionFire", "tp-noExplosionFire", "Gf", false, "b", "Hide Explosion Fire"],
["gameplay", "noYolk", "tp-noYolk", "Gy", false, "b", "Hide Yolk Burst"],
["gameplay", "noSplats", "tp-noSplats", "Gd", false, "b", "Hide Damage Splats"],
["gameplay", "noBulletSplats", "tp-noBulletSplats", "Gp", false, "b", "Hide Bullet Splats"],
["gameplay", "noShellBurst", "tp-noShellBurst", "Gb", true, "b", "Hide Shell Burst"],
["gameplay", "hideScopeLines", "tp-hideScopeLines", "Gl", false, "b", "Hide Scope Lines"],
["gameplay", "skinUnlocker", "tp-skinUnlocker", "Gu", false, "b"],
["gameplay", "fovStretch", "tp-fovStretch", "Gv", 1, "n", "FOV (Black Bars)"],
["gameplay", "legacySkins", "tp-legacySkins", "Gk", false, "b", "Legacy Skins"],
["gameplay", "legacySounds", "tp-legacySounds", "Go", false, "b", "Legacy Sounds"],
["perf", "noBulletProjectiles", "tp-noBulletProjectiles", "Eb", false, "b", "Hide Bullets"],
["perf", "noParticles", "tp-noParticles", "Et", false, "b", "Disable All Particles"],
["perf", "renderScale", "tp-renderScale", "Er", 1, "n", "Render Scale"],
["stats", "enabled", "tp-statsEnabled", "Se", true, "b", "Stats Tracker"],
["stats", "kotc", "tp-statsKotc", "Sk", false, "b", "King of the Coop Stats"],
["stats", "killBars", "tp-statsKillBars", "Sb", false, "b", "Kill Bars"],
["stats", "highlightMe", "tp-statsHighlightMe", "Sn", true, "b", "Highlight Your Name"],
["stats", "kotcEnd", "tp-statsKotcEnd", "Sm", 0, "n1", "When King of the Coop Ends"],
["stats", "hotkey", "tp-statsHotkey", "Sh", "\\", "key", "Stats Hotkey"],
["stats", "pinned", "tp-statsPinned", "Sp", true, "b", "Pin Stats on Pause Menu"]
];
try {
let sc = +localStorage.getItem("tp-schema") || 0;
if (sc < 6) {
["tp-ultraPerf", "tp-hideNametags", "tp-renderScale", "tp-noShadows", "tpx-lowTex", "tp-boxOpacity",
"tp-mode", "tp-perfPriority", "tp-noPostProcess", "tp-audioOptimized", "tp-preconnect",
"tp-statsAutoShow", "tp-noChatCooldown"
].forEach(k => localStorage.removeItem(k));
if (!localStorage.getItem("ch2-dotBorderV2")) {
localStorage
.removeItem("ch2-dotBorder");
localStorage.setItem("ch2-dotBorderV2", "1");
}
}
if (sc < 7) {
localStorage.removeItem("tp-hideScopeLines");
localStorage.setItem("tp-schema", "7");
}
} catch (x) {
window.__ssbErr("core#1", x)
}
let e = {},
t = new Map;
function o(e) {
let o = t.get(e);
if (o && o.isConnected) return o;
let n = document.getElementById(e);
if (n) t.set(e, n);
else t.delete(e);
return n;
}
let n = new Map;
function i(e) {
let t = n.get(e);
if (t && t.isConnected) return t;
let o = document.querySelector(e);
if (o) n.set(e, o);
else n.delete(e);
return o;
}
function a(e, n, i) {
let a = o(e);
if (!a) {
(a = document.createElement("style")).id = e;
(i || document.head || document.documentElement)
.appendChild(a);
t.set(e, a);
}
if (undefined !== n && a.textContent !== n) a.textContent = n;
return a;
}
function r(e, n, i, r) {
if (i) a(e, n, r);
else {
let s = o(e);
if (s) {
s.remove();
t.delete(e);
}
}
}
function s(e, t) {
let o = localStorage.getItem(e);
if (o === null) return t;
try {
return JSON.parse(o) === true
} catch (n) {
return t
}
}
function l(e, t) {
let o = localStorage.getItem(e);
if (o === null) return t;
let n = parseFloat(o);
return Number.isFinite(n) ? n : t
}
let d = {
hideFPS: {},
ping: {
preconnect: true
},
ui: {},
gameplay: {},
perf: {
audioOptimized: true
},
stats: {}
};
_ssbCore.forEach(([sec, prop, key, , def, type]) => {
let v;
if (type === "key") {
v = localStorage.getItem(key);
v = v === null ? def : v === " " ? v : v.trim()
} else v = type === "b" ? s(key, def) : l(key, def);
d[sec][prop] = v
});
window.__ssbEffects60.connect(d.perf);
window.__ssbHideBulletSplats = !!d.gameplay.noBulletSplats || !!d.perf.noParticles;
window.__ssbSkinUnlocker = !!d.gameplay
.skinUnlocker;
! function() {
let last = window.__ssbSkinUnlocker,
hook = () => {
let e = window.extern;
if (!e || typeof e.isItemOwned != "function") return false;
if (!e.__ssbSkinUnlockerRuntime) {
let t = e.isItemOwned;
e.isItemOwned = function() {
return window.__ssbSkinUnlocker === true || t.apply(this, arguments)
};
e.__ssbSkinUnlockerRuntime = true;
}
return true
};
document.addEventListener("ssb:settings-change", () => {
window.__ssbSkinUnlocker = !!d.gameplay.skinUnlocker;
if (window.__ssbSkinUnlocker === last) return;
last = window.__ssbSkinUnlocker;
try {
let o = window.vueApp && window.vueApp.$refs && window.vueApp.$refs.equipScreen;
if (o && o.equip) {
if (typeof o.setupItemGridMain == "function") o.setupItemGridMain();
else {
if (undefined !== o
.equip.selectedItemType) o.populateItemGridWithType(o.equip.selectedItemType);
}
if (o.equip
.itemSearchTerm && typeof o.itemSearch == "function") o.itemSearch();
}
} catch (a) {
window.__ssbErr("core#4", a)
}
});
if (!hook()) {
let stop = window.__ssbMenuPoll(function() {
try {
if (hook()) stop();
} catch (r) {
window.__ssbErr("core#5", r)
}
}, 500)
}
}();
! function e() {
let t = String.prototype.replaceAll,
o = "__ssbHideScopeLines";
window[o] = function() {
return d.gameplay.hideScopeLines ? 0 : 536870912
};
let n = /,this\.(..)\.position\.z=2/;
window.__ssbPatches.add("scope-lines", function(e) {
let a = n.exec(e);
if (!a || !a[1]) return e;
let r = a[1],
s = `this.${r}.applyFog=!1,this.${r}.layerMask=536870912,`,
l = `this.${r}.applyFog=!1,this.${r}.layerMask=window.${o}(),this.${r}._ssbScopeMesh=1,`;
return t.call(e, s, l)
});
window.__ssbApplyScopeLines = function() {
try {
let e = window.P && window.P.scene;
if (!e || !e.meshes) return;
let t = d.gameplay.hideScopeLines ? 0 : 536870912;
for (let o = 0; o < e.meshes.length; o++) {
let n = e.meshes[o];
if (n && n._ssbScopeMesh) n.layerMask = t;
}
} catch (i) {
window.__ssbErr("core#6", i)
}
};
}();
let c = new Set;
function p(e) {
if (!d.ping.preconnect || c.has(e)) return;
c.add(e);
let t = document.head || document.documentElement;
[
["dns-prefetch", "//" + e],
["preconnect", "https://" + e]
].forEach(([e, o]) => {
let n = document.createElement("link");
n.rel = e;
n.href = o;
if (e === "preconnect") n.crossOrigin = "anonymous";
t.appendChild(n);
})
}
function m(e) {
let t = e.sprites.length,
o = e.blendMode === 1;
return t === 300 && o ? "fire" : t === 300 ? "smoke" : t === 400 ? "shell" : t === 100 ? "yolk" : t === 20 ?
"splat" : "other"
}
function h(e) {
switch (e._ch2Kind) {
case "fire":
e._ch2Suppress = !!d.gameplay.noExplosionFire || !!d.perf.noParticles;
break;
case "smoke":
e._ch2Suppress = !!d.gameplay.noExplosionSmoke;
break;
case "shell":
e._ch2Suppress = !!d.gameplay.noShellBurst || !!d.perf.noParticles;
break;
case "yolk":
e._ch2Suppress = !!d.gameplay.noYolk || !!d.perf.noParticles;
break;
case "splat":
e._ch2Suppress = !!d.gameplay.noSplats || !!d.perf.noParticles;
break;
default:
e._ch2Suppress = false
}
}
function u() {
if (!window.P || !window.P.scene) return;
let e = window.P.scene,
t = e.spriteManagers;
if (e === window._ssbUSc && t.length === window._ssbUCt && window._ssbUOk) return;
let _p = 0;
for (let o = 0, n = t.length; o < n; o++) {
let i = t[o];
if (i.sprites && !i._ch2OrigRender) {
if (typeof i.oldRender == "function") {
i._ch2OrigRender = i.oldRender;
i
.oldRender = function() {
if (!i._ch2Suppress) i._ch2OrigRender.apply(this, arguments);
};
i._ch2Kind = m(i);
h(i);
} else _p++;
}
}
window._ssbUSc = e;
window._ssbUCt = t.length;
window._ssbUOk = _p === 0;
}! function e() {
if (!d.ping.preconnect) return;
p("shellshock.io");
let t;
try {
t = JSON.parse(localStorage.getItem("mod-server-hosts") || "{}") || {}
} catch (o) {
t = {}
}
Object.values(t).forEach(e => {
if (e && e.host) p(e.host);
})
}();
let f = null;
window.__ssbApplyParticles = () => g();
function g() {
window.__ssbHideBulletSplats = !!d.gameplay.noBulletSplats || !!d.perf.noParticles;
u();
(function e() {
if (!window.P || !window.P.scene) return;
let t = window.P.scene.spriteManagers;
for (let o = 0, n = t.length; o < n; o++) {
if (t[o]._ch2OrigRender) h(t[o]);
}
}());
}
function $() {
return window.P && window.P.scene ? window.P.scene : null
}
function b() {
let e = $();
return e ? e.getEngine() : null
}
function y() {
let e = $(),
t = b();
applyFovStretch(t);
if (e && t) {
e.skipPointerMovePicking = true;
e.skipFrustumClipping = false;
(function e(t) {
try {
t.particlesEnabled = !d.perf.noParticles
} catch (o) {
window.__ssbErr("core.particles", o)
}
}(e));
}
}
function applyFovStretch() {
window.__ssbFov.apply(d.gameplay.fovStretch || 1)
}
let _LSFX = ["ammo", "grenade", "grenade_beep", "grenade_pin", "gun_cluck9mm_fire", "gun_cluck9mm_insert_mag",
"gun_cluck9mm_remove_mag", "gun_csg1_fire", "gun_csg1_pull_action", "gun_csg1_release_action",
"gun_dozenGauge_close", "gun_dozenGauge_fire", "gun_dozenGauge_load", "gun_dozenGauge_open",
"gun_eggk47_dry_fire", "gun_eggk47_fire", "gun_eggk47_full_cycle", "gun_eggk47_insert_mag",
"gun_eggk47_remove_mag", "gun_m24_bolt_close", "gun_m24_bolt_open", "gun_m24_fire", "gun_rpegg_load",
"gun_rpegg_rocket_fly", "gun_rpegg_rocket_hit", "gun_smg_cycle", "gun_smg_fire", "pickup", "weapon_swap"
],
_LSFXBASE =
"https://raw.githubusercontent.com/InfiniteSmasher/The-MegaMod/3e0a59fb6fec64f1a91e8a23adff38ccea7eac41/sfx/legacy/",
_lsfxLoad = null,
_LSKIN = [3000, 3100, 3400, 3600, 3800, 4000, 4200];
function _sfxReady() {
let B = window.BAWK;
if (!B || !B.sounds) return false;
let v = Object.values(B.sounds);
return !!(v.length && v[0] && v[0].buffer)
}
function loadLegacySounds() {
if (_lsfxLoad) return _lsfxLoad;
let B = window.BAWK;
if (!B || !B.loadSound || !B.sounds) return Promise.reject(Error("BAWK not ready"));
_lsfxLoad = Promise.all(_LSFX.map(s => {
if (B.sounds[s] && !B.sounds[s + "_Default"]) B.sounds[s + "_Default"] = B.sounds[s];
return Promise.resolve(B.loadSound(_LSFXBASE + s + ".mp3", s + "_Legacy")).catch(() => {})
}));
return _lsfxLoad
}
function applyLegacySounds(on) {
let B = window.BAWK;
if (!B || !B.sounds) return;
_LSFX.forEach(s => {
let t = on ? B.sounds[s + "_Legacy"] : B.sounds[s + "_Default"];
if (t) B.sounds[s] = t
})
}
function setLegacySounds(on) {
if (!on) {
applyLegacySounds(false);
return
}
let go = () => loadLegacySounds().then(() => applyLegacySounds(true)).catch(() => {});
if (_sfxReady()) go();
else {
let stop = window.__ssbMenuPoll(() => {
if (_sfxReady()) {
stop();
go();
}
}, 300, {
inMatch: true
})
}
}
let _lskinWant = false,
_lskinBusy = false,
_lskinStop = null;
function _lskinItems() {
let ex = window.extern;
return ex && ex.catalog && ex.catalog.findItemsByIds && ex.catalog.findItemsByIds(_LSKIN) || []
}
function _lskinReady() {
let ex = window.extern,
L = window.Loader;
if (!ex || !ex.loadAllMeshesOnDemand) return false;
if (ex.inGame) return true;
return !!L && (L.isShowing === false || !!(L.container && L.container.style.opacity === "0"))
}
function _lskinRename(on) {
let items = _lskinItems();
if (!items.length) return false;
items.forEach(it => {
if (!it || !it.item_data) return;
let mn = it.item_data.meshName || "";
if (on) {
if (!mn.includes("_Legacy")) it.item_data.meshName = mn + "_Legacy";
} else it.item_data.meshName = mn.replace("_Legacy", "")
});
try {
let ex = window.extern,
v = window.vueApp;
if (ex && !ex.inGame && ex.resetPaperDoll) ex.resetPaperDoll();
if (v && v.$refs && v.$refs.equipScreen && v.$refs.equipScreen.poseEquippedItems) v.$refs.equipScreen
.poseEquippedItems();
} catch (e) {
window.__ssbErr("core#10", e)
}
return true
}
function applyLegacySkins(on) {
if (_lskinWant = on, !on) return _lskinRename(false);
if (_lskinBusy) return true;
if (!_lskinItems().length || !_lskinReady()) return false;
_lskinBusy = true;
Promise.resolve().then(() => window.extern.loadAllMeshesOnDemand()).then(ok => {
_lskinBusy = false;
if (ok && _lskinWant) _lskinRename(true);
}, e => {
_lskinBusy = false;
window.__ssbErr("core#9", e);
});
return true
}
function setLegacySkins(on) {
if (_lskinStop && (_lskinStop(), _lskinStop = null), applyLegacySkins(on)) return;
_lskinStop = window.__ssbMenuPoll(() => {
if (applyLegacySkins(on) && _lskinStop) {
_lskinStop();
_lskinStop = null;
}
}, 250, {
inMatch: true
})
}(function() {
if (d.gameplay.legacySkins && setLegacySkins(true), !d.gameplay.legacySounds) return;
let stop = window.__ssbMenuPoll(() => {
if (_sfxReady()) {
stop();
setLegacySounds(true);
}
}, 600, {
inMatch: true
})
})();
window.__ssbMenuPoll(function _ssbEffectsTick() {
if (document.hidden || !window.P || !window.P.scene) return;
if (!(d.gameplay.noExplosionSmoke || d.gameplay.noExplosionFire || d.gameplay.noYolk || d.gameplay
.noSplats || d.gameplay.noShellBurst || d.perf.noParticles)) return;
let e = window.P.scene;
if (e !== f) {
f = e;
setTimeout(u, 500);
} else u();
}, 1e3, {
inMatch: true
});
let _ = false;
function w(e) {
if (!e) return;
let t = !!d.perf.noBulletProjectiles || !!d.perf.noParticles;
if (!t && !_) return;
_ = t;
let o = e.meshes;
if (e._ch2PML !== o.length) {
let c = [];
for (let n = 0, i = o.length; n < i; n++) {
let a = o[n];
if (undefined !== a._sourceMesh && a.name === "") c.push(a);
}
e._ch2PM = c;
e._ch2PML = o.length;
}
let s = e._ch2PM;
for (let n = 0, i = s.length; n < i; n++) s[n].isVisible = !t
}
let E = null,
C = null;
document.addEventListener("pointerlockchange", applyFovStretch);
window.__ssbMenuPoll(applyFovStretch, 500, {
inMatch: true
});
window.__ssbRenderScale = () => {
let v = +d.perf.renderScale;
return v >= 1 && v <= 4 ? v : 1
};
window.__ssbGuiScale =
() => {
let v = +d.ui.guiScale;
return v >= .4 && v <= 1.2 ? v : v > 1.2 ? 1.2 : v > 0 ? .4 : 1
};
document.addEventListener("ssb:settings-change", () => {
window.__ssbHideBulletSplats = !!d.gameplay.noBulletSplats || !!d.perf.noParticles;
window.__ssbSmartDetail?.refresh?.()
});
window.__ssbMenuPoll(function _ssbSceneWatch() {
if (document.hidden) return;
let e = $();
if (e && e !== E) {
E = e;
if (C) clearTimeout(C);
C = setTimeout(() => {
C = null;
y();
}, 2e3);
}
}, 2e3, {
inMatch: true
});
let P = String.prototype.replaceAll,
L = () => Array.from({
length: 10
}, () => String.fromCharCode(97 + Math.floor(26 * Math.random()))).join("");
function I(t, o) {
let n = L();
window[n] = function() {
try {
return o.apply(this, arguments)
} catch (e) {
return arguments[0]
}
};
e[t] = n;
}
I("FakePing", function(e) {
return d.ping.random ? Math.floor(Math.random() * (d.ping.max - d.ping.min + 1)) + d.ping.min : Date
.now() - e
});
I("FakeFps", function(e) {
let t = d.hideFPS;
if (!t.hide && !t.showMs && !t.random) return e;
if (t.hide) return "";
if (t.showMs) {
let o = parseFloat(e);
if (o > 0) return (1e3 / o).toFixed(1)
}
return t.random ? Math.floor(Math.random() * (t.max - t.min + 1)) + t.min : e
});
(function() {
let W = window.__ssbPatches;
W.add("ping-display", i => {
let a = /(case [A-Za-z$_]+\.[A-Za-z$_]+\:[A-Za-z$_]+\=)Date\.now\(\)-([A-Za-z$_]+),/.exec(i);
return a ? P.call(i, a[0], `${a[1]}window.${e.FakePing}(${a[2]}),`) : i
});
W.add("fps-display", i => {
let r = /(document\.getElementById\("FPS"\)\.innerText=)(.*?)}/.exec(i);
return r ? P.call(i, r[0], `${r[1]}window.${e.FakeFps}(${r[2]})}`) : i
});
W.add("players", i => {
let k = i.indexOf("[this.playerIdx]"),
j = k;
for (; j > 0 && /[\w$]/.test(i[j - 1]);) j--;
if (k < 1 || j === k) return i;
let l = i.slice(j, k);
return P.call(i, `${l}=[]`, `${l}=[],window.players=${l}`)
});
W.add("my-player-idx", i => {
let s = /gameJoined_ received"\),(\w+)=\w+\.unPackInt8U\(\)/.exec(i) ||
/([A-Z]{2})=[A-Za-z$_]+\.unPackInt8U\(\)/.exec(i);
return s ? P.call(i, s[0], `${s[0]},window.myPlayerIdx=${s[1]}`) : i
});
W.add("trade-kills", i => {
if (i.includes("__ssbSkippedKills")) return i;
let a = i.indexOf(".isDead()||(");
if (a < 0 || i.indexOf(".isDead()||(", a + 1) >= 0) return i;
let j = a;
for (; j > 0 && /[\w$]/.test(i[j - 1]);) j--;
let k = i.slice(j, a);
if (!k || i[j - 1] === "." || !i.startsWith(k + ".scoreKill()", a + 12)) return i;
let x = n => n.replace(/\$/g, "\\$"),
v = RegExp("[^\\w$]" + x(k) + "&&([\\w$]+)&&[\\w$]+\\(" + x(k) + ",\\1\\)").exec(i.slice(a,
a + 4e3));
return v && RegExp("[^\\w$]" + x(v[1]) + "\\.die\\(\\)").test(i.slice(Math.max(0, j - 2e3),
j)) ? i.slice(0, j) + "(" + k + ".isDead()&&" + v[1] + "&&" + k + "!==" + v[1] + "&&(" +
k +
".__ssbSkippedKills=(" + k + ".__ssbSkippedKills|0)+1)," + i.slice(j, a + 9) + ")" + i
.slice(a + 9) : i
});
W.add("inventory", i => P.call(i, "if(this.inventory[t]&&this.inventory[t].id===e.id)return!0;return!1",
"if(this.inventory[t]&&this.inventory[t].id===e.id)return!0;if(window.__ssbSkinUnlocker)return!0;return!1"
));
W.add("loadout", i => {
let m = /applyLoadoutObject\(([\w$]+)\)\{/.exec(i);
if (!m || i.indexOf(m[0], m.index + 1) >= 0) return i;
let c = /[^\w$.]([\w$]+)\.catalog\.forClass\[/.exec(i.slice(m.index, m.index + 400)),
v = m[1],
at = m.index + m[0].length;
return i.slice(0, at) +
`${v}=window.__ssbLoadout?window.__ssbLoadout(this,${v}${c ? "," + c[1] + ".catalog" : ""}):${v};` +
i.slice(at)
});
W.add("meshes", i => {
let m = /console\.log\("Object meshes loaded"\),([\w$]+)=([\w$]+),([\w$]+)\(\)\}\),\2\)/.exec(
i);
if (!m) return i;
let f = `(${m[2]}||!!window.__ssbSkinUnlocker)`;
return i.slice(0, m.index) +
`console.log("Object meshes loaded"),${m[1]}=${f},${m[3]}()}),${f})` + i.slice(m.index + m[
0].length)
});
W.add("menu-stutter", i => i.replace(
/new\(window\[([\w$]+)\("0x0"\)\]\)\(\(?[\w$]+\)?=>\{[^{}]*\{[^{}]*>3e6[^{}]*\}\}\)\)\[\1\("0x5"\)\]\(document,\{childList:!0,subtree:!0\}\)/,
"void 0"))
}());
let A = {
enabled: JSON.parse(localStorage.getItem("ch2-enabled") ?? "true"),
hideCrosshair: JSON.parse(localStorage.getItem("ch2-hideCrosshair") ?? "false"),
armColor: (localStorage.getItem("ch2-armColor") ?? "#ffffff").replace(/^"|"$/g, ""),
armBorder: (localStorage.getItem("ch2-armBorder") ?? "#000000").replace(/^"|"$/g, ""),
armLength: parseFloat(localStorage.getItem("ch2-armLength") ?? "0.75"),
armWidth: parseFloat(localStorage.getItem("ch2-armWidth") ?? "0.3"),
armOpacity: parseFloat(localStorage.getItem("ch2-armOpacity") ?? "1"),
armRotation: parseInt(localStorage.getItem("ch2-armRotation") ?? "0"),
armGap: parseInt(localStorage.getItem("ch2-armGap") ?? "0"),
armScale: parseFloat(localStorage.getItem("ch2-armScale") ?? "1"),
hideDot: JSON.parse(localStorage.getItem("ch2-hideDot") ?? "false"),
hideDotShotgun: JSON.parse(localStorage.getItem("ch2-hideDotShotgun") ?? "false"),
dotShape: (localStorage.getItem("ch2-dotShape") ?? "dot").replace(/^"|"$/g, ""),
dotColor: (localStorage.getItem("ch2-dotColor") ?? "#ffffff").replace(/^"|"$/g, ""),
dotBorder: (localStorage.getItem("ch2-dotBorder") ?? localStorage.getItem("ch2-armBorder") ?? "#000000")
.replace(/^"|"$/g, ""),
dotBorderWidth: parseFloat(localStorage.getItem("ch2-dotBorderWidth") ?? "0.05"),
dotRound: JSON.parse(localStorage.getItem("ch2-dotRound") ?? "false"),
dotOpacity: parseFloat(localStorage.getItem("ch2-dotOpacity") ?? "1"),
dotPlusLen: parseInt(localStorage.getItem("ch2-dotPlusLen") ?? "8"),
dotPlusWidth: parseInt(localStorage.getItem("ch2-dotPlusWidth") ?? "2"),
dotScale: parseFloat(localStorage.getItem("ch2-dotScale") ?? "1"),
plusScale: parseFloat(localStorage.getItem("ch2-plusScale") ?? "1"),
staticColor: (localStorage.getItem("ch2-staticColor") ?? "#ffffff").replace(/^"|"$/g, ""),
staticBorder: (localStorage.getItem("ch2-staticBorder") ?? "#000000").replace(/^"|"$/g, ""),
staticOpacity: parseFloat(localStorage.getItem("ch2-staticOpacity") ?? "1"),
staticLength: parseFloat(localStorage.getItem("ch2-staticLength") ?? "0.75"),
staticWidth: parseFloat(localStorage.getItem("ch2-staticWidth") ?? "0.3"),
staticGap: parseFloat(localStorage.getItem("ch2-staticGap") ?? "3"),
staticOutlineEnabled: JSON.parse(localStorage.getItem("ch2-staticOutlineEnabled") ?? "true"),
armOutlineEnabled: JSON.parse(localStorage.getItem("ch2-armOutlineEnabled") ?? "true"),
dotOutlineEnabled: JSON.parse(localStorage.getItem("ch2-dotOutlineEnabled") ?? "true"),
stillScale: parseFloat(localStorage.getItem("ch2-stillScale") ?? "1")
},
B = {
enabled: false,
hideCrosshair: false,
armColor: "#ffffff",
armBorder: "#000000",
dotBorder: "#000000",
dotBorderWidth: .05,
armLength: .75,
armWidth: .3,
armOpacity: 1,
armRotation: 0,
armGap: 0,
armScale: 1,
hideDot: false,
hideDotShotgun: false,
dotShape: "dot",
dotColor: "#ffffff",
dotRound: false,
dotOpacity: 1,
dotPlusLen: 8,
dotPlusWidth: 2,
dotScale: 1,
plusScale: 1,
staticColor: "#ffffff",
staticBorder: "#000000",
staticOpacity: 1,
staticLength: .75,
staticWidth: .3,
staticGap: 3,
staticOutlineEnabled: true,
armOutlineEnabled: true,
dotOutlineEnabled: true,
stillScale: 1
};
function F(e, t) {
localStorage.setItem("ch2-" + e, typeof t == "string" ? t : JSON.stringify(t));
_chDirty = true;
_chTrack();
}
let _chDirty = false,
_updP = null,
_updT = 0,
_chHalf = 0,
_chIO = null,
_updPend = {};
let _chUndo = [],
_chRedo = [],
_chT = 0,
_chApplying = 0,
_chLastJ = JSON.stringify(A);
function _chTrack() {
if (!_chApplying) {
clearTimeout(_chT);
_chT = setTimeout(_chCommit, 350);
}
}
function _chCommit() {
clearTimeout(_chT);
_chT = 0;
let j = JSON.stringify(A);
if (j !== _chLastJ) {
_chUndo.push(_chLastJ);
if (_chUndo.length > 40) _chUndo.shift();
_chRedo = [];
_chLastJ = j;
if (window.__ssbChPaint) window.__ssbChPaint();
}
}
function _chFlush() {
if (_updT) {
clearTimeout(_updT);
_updT = 0;
let o = _updPend;
_updPend = {};
Object.keys(o).forEach(k => F(k, o[k]));
}
if (_chT) _chCommit();
}
function _chApply(j) {
let snap;
try {
snap = JSON.parse(j)
} catch (e) {
return
}
_chApplying = 1;
try {
let prev = Object.assign({}, A);
Object.assign(A, snap);
Object.keys(A).forEach(k => {
if (prev[k] !== A[k]) F(k, A[k]);
});
} finally {
_chApplying = 0
}
_chLastJ = JSON.stringify(A);
if (window.__ssbChRebuild) window.__ssbChRebuild();
else {
G();
Y();
}
if (window
.__ssbChPaint) window.__ssbChPaint();
}
function _chSaved() {
let n = z(),
p = n && N()[n];
return p ? Object.assign({}, A, _withDot(p), {
enabled: true
}) : null
}
window.__ssbChHist = {
undo() {
_chFlush();
if (!_chUndo.length) return false;
_chRedo.push(JSON.stringify(A));
_chApply(_chUndo.pop());
return true
},
redo() {
_chFlush();
if (!_chRedo.length) return false;
_chUndo.push(JSON.stringify(A));
_chApply(_chRedo.pop());
return true
},
revert() {
_chFlush();
let p = _chSaved();
if (!p || !window.__ssbChHist.dirty()) return false;
_chUndo.push(JSON.stringify(A));
if (_chUndo.length > 40) _chUndo.shift();
_chRedo = [];
_chApply(JSON
.stringify(p));
return true
},
canUndo: () => _chUndo.length > 0 || !!_chT,
canRedo: () => _chRedo.length > 0,
dirty() {
let p = _chSaved();
return !!p && Object.keys(B).some(k => k !== "enabled" && JSON.stringify(p[k]) !== JSON.stringify(A[k]))
}
};
document.addEventListener("keydown", ev => {
if (!(ev.ctrlKey || ev.metaKey) || ev.altKey || document.pointerLockElement) return;
let k = (ev.key || "").toLowerCase();
if (k !== "z" && k !== "y") return;
let sec = document.getElementById("mod-crosshair-section");
if (!sec || !sec.offsetParent || document.getElementById("ssb-dialog-overlay")) return;
let ae = document.activeElement;
if (ae && (/^(TEXTAREA|SELECT)$/.test(ae.tagName) || ae.isContentEditable || ae.tagName === "INPUT" &&
/^(text|number|search)$/i.test(ae.type))) return;
ev.preventDefault();
ev.stopPropagation();
let done = k === "y" || ev.shiftKey ? window.__ssbChHist.redo() : window.__ssbChHist.undo();
if (done) try {
if (window.BAWK && window.BAWK.play) window.BAWK.play("ui_click");
} catch (e) {
window.__ssbErr("crosshair.undo", e)
}
}, true);
function schedUpd(e, t) {
_updPend[e] = t;
if (!_updP) _updP = requestAnimationFrame(() => {
_updP = null;
G();
Y();
});
clearTimeout(_updT);
_updT = setTimeout(() => {
let o = _updPend;
_updPend = {};
Object.keys(o).forEach(e => F(e, o[e]));
}, 150);
}
function _sd(e, t) {
if (e && e.style.display !== t) e.style.display = t;
}
window.__ssbPerf = {
tick: 0,
mods: 0,
harm: 0
};
let T = "ch2-profiles",
H = "ch2-currentProfile";
function N() {
try {
return JSON.parse(localStorage.getItem(T)) || {}
} catch (e) {
return {}
}
}
function M(e) {
localStorage.setItem(T, JSON.stringify(e))
}
function z() {
return localStorage.getItem(H) || ""
}
function O(e) {
localStorage.setItem(H, e || "")
}
function PO(e) {
e = e || N();
let o;
try {
o = JSON.parse(localStorage.getItem("ch2-profileOrder"))
} catch (x) {
o = null
}
if (!Array.isArray(o)) o = [];
let k = Object.keys(e),
r = o.filter((n, i) => k.includes(n) && o.indexOf(n) === i);
k.forEach(n => r.includes(n) || r.push(n));
return r;
}
function PS(r) {
localStorage.setItem("ch2-profileOrder", JSON.stringify(r))
}
function _dbw(o) {
let w = parseFloat(o.dotBorderWidth);
return isFinite(w) ? Math.max(0, w) : .05
}
function _dsz(o) {
return +(Math.max(0, o.armWidth - .1) + 2 * _dbw(o)).toFixed(4)
}
function _dbc(o) {
return o.dotBorder || o.armBorder || "#000000"
}
function _withDot(o) {
return Object.assign({}, B, {
dotBorder: o && o.armBorder || B.dotBorder
}, o)
}
function D(e) {
if (!e) return false;
let t = N();
t[e] = Object.assign({}, A, {
enabled: true
});
M(t);
O(e);
setTimeout(() => window.__ssbChPaint && window.__ssbChPaint());
return true;
}
function R() {
let e = a("ch2-arm-style", undefined);
if (!A.enabled) {
if (e.textContent) e.textContent = "";
return
}
let t = document.getElementById("crosshairContainer");
if (t) t.style.transform = `rotate(${A.armRotation % 90 ? A.armRotation : 0}deg)`;
let o = A.armLength * A.armScale,
n = A.armWidth * A.armScale,
i = Math.min(.05 * A.armScale, .3 * n);
let fs = 40;
if (t) {
let _f = parseFloat(getComputedStyle(t).fontSize);
if (_f > 0) fs = _f;
}
let dpr = window.devicePixelRatio || 1,
us = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--ssb-ch-scale")) ||
parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--ssb-ui-scale")) || 1,
px = v => +(v / dpr).toFixed(5) + "px",
sz = v => px(v + .004),
Hd = Math.max(1, Math.round(o * fs * dpr)),
Wd = Math.max(1, Math.round(n * fs * dpr)),
Bd = i * fs > .25 ? Math.max(1, Math.round(i * fs * dpr)) :
0;
if (Bd && 2 * Bd > Math.min(Wd, Hd) && (A.armOutlineEnabled === false || String(A.armBorder)
.toLowerCase() ===
String(A.armColor).toLowerCase())) Bd = 0;
_chHalf = Wd % 2 / 2;
let g = A.armGap * us * dpr,
gap = `${A.armGap}px * var(--ssb-ch-scale, var(--ssb-ui-scale, 1)) + ${px(Math.round(g - _chHalf) + _chHalf - g)}`;
e.innerHTML = `
			.crosshair {
				position: absolute !important;
				transform-origin: 50% calc(-1 * (${gap})) !important;
				top: calc(50% + ${gap} + var(--ssb-ch-dy, 0px)) !important;
				box-sizing: border-box !important;
				border: solid ${Bd ? sz(Bd) : "0px"} ${A.armOutlineEnabled === false ? "transparent" : A.armBorder} !important;
				height: ${sz(Hd)} !important;
				opacity: ${A.armOpacity} !important;
			}
			.crosshair.normal {
				left: calc(50% - ${px(Wd / 2)} + var(--ssb-ch-dx, 0px)) !important;
				background: ${A.armColor} !important;
				background-clip: ${A.armOutlineEnabled === false ? "padding-box" : "border-box"} !important;
				width: ${sz(Wd)} !important;
			}
			.crosshair.powerful {
				left: calc(50% - ${px(Wd / 2)} + var(--ssb-ch-dx, 0px)) !important;
				background: red !important;
				background-clip: ${A.armOutlineEnabled === false ? "padding-box" : "border-box"} !important;
				width: ${sz(Wd)} !important;
			}
			.shotReticle.fill.normal {
				border-color: ${A.armColor} !important;
				border-left: solid transparent !important;
				border-right: solid transparent !important;
				border-width: 0.18em !important;
				padding: 0.18em !important;
			}
		`;
_chAlign(t)
}
function _chAlign(t) {
if (!t) return;
if (window.IntersectionObserver && (!_chIO || _chIO.t !== t)) {
if (_chIO) _chIO.disconnect();
_chIO = new IntersectionObserver(es => es.forEach(en => en.isIntersecting && _chAt(en.target, en
.boundingClientRect)));
_chIO.t = t;
_chIO.observe(t);
}
if (t.getClientRects().length) _chAt(t, t.getBoundingClientRect());
}
function _chAt(t, r) {
let dpr = window.devicePixelRatio || 1,
on = A.enabled && !(A.armRotation % 90),
d = v => {
v = Math.round(v * dpr * 64) / 64;
return on ? +((Math.round(v - _chHalf) + _chHalf - v) / dpr).toFixed(5) + "px" : "0px"
};
t.style.setProperty("--ssb-ch-dx", d(r.left + r.width / 2));
t.style.setProperty("--ssb-ch-dy", d(r.top + r.height / 2));
}
function q() {
let e = a("ch2-dot-style", undefined),
t = o("reticleDot");
if (!A.enabled) {
a("ch2-dot-style", "");
if (t) {
t.innerHTML = "";
t.removeAttribute("style");
}
return
}
if (!document.pointerLockElement) {
a("ch2-dot-style", "");
if (t) {
t.innerHTML = "";
t.removeAttribute("style");
}
return
}
if (A.hideDot || A.dotShape === "still") {
a("ch2-dot-style",
"#reticleDot { display: none !important; visibility: hidden !important; } #reticleDot .ch2-bar { display: none !important; }"
);
if (t) t.innerHTML = "";
return
}
if (A.dotShape === "plus") {
a("ch2-dot-style", `
				#reticleDot {
					display: block !important; visibility: visible !important;
					position: absolute !important; top: 50% !important; left: 50% !important;
					transform: translate(-50%, -50%) scale(${A.plusScale}) !important;
					width: 0 !important; height: 0 !important;
					background: none !important; border: none !important;
					opacity: ${A.dotOpacity} !important;
				}
				#reticleDot .ch2-bar {
					position: absolute !important; background-color: ${A.dotColor} !important;
				}
				#reticleDot .ch2-bar.h {
					top: 50% !important; left: 50% !important;
					width: calc(${A.dotPlusWidth}px * var(--ssb-ch-scale, var(--ssb-ui-scale, 1))) !important; height: calc(${A.dotPlusLen}px * var(--ssb-ch-scale, var(--ssb-ui-scale, 1))) !important;
					transform: translate(-50%, -50%) rotate(90deg) !important;
				}
				#reticleDot .ch2-bar.v {
					left: 50% !important; top: 50% !important;
					width: calc(${A.dotPlusWidth}px * var(--ssb-ch-scale, var(--ssb-ui-scale, 1))) !important; height: calc(${A.dotPlusLen}px * var(--ssb-ch-scale, var(--ssb-ui-scale, 1))) !important;
					transform: translate(-50%, -50%) !important;
				}
			`);
if (t && !t.querySelector(".ch2-bar")) t.innerHTML =
'<div class="ch2-bar h"></div><div class="ch2-bar v"></div>';
} else {
a("ch2-dot-style", `
				#reticleDot {
					display: block !important; visibility: visible !important;
					position: absolute !important;
					top: 50% !important; left: 50% !important;
					transform: translate(-50%, -50%) scale(${A.dotScale}) !important;
					background-color: ${A.dotColor} !important;
					box-sizing: border-box !important;
					border: solid ${_dbw(A)}em ${A.dotOutlineEnabled === false ? "transparent" : _dbc(A)} !important;
					background-clip: ${A.dotOutlineEnabled === false ? "padding-box" : "border-box"} !important;
					width: ${_dsz(A)}em !important; height: ${_dsz(A)}em !important;
					opacity: ${A.dotOpacity} !important;
					border-radius: ${A.dotRound ? "100%" : "0"} !important;
				}
			`);
if (t) t.innerHTML = "";
}
}
function j() {
let e = a("ch2-static-style", undefined),
t = document.getElementById("ch2-static-cont");
if (!A.enabled || A.dotShape !== "still" || A.hideDot) {
a("ch2-static-style", "");
if (t) t.remove();
return
}
if (!t) {
(t = document.createElement("div")).id = "ch2-static-cont";
t.innerHTML =
'<div class="ch2-sa"></div><div class="ch2-sa"></div><div class="ch2-sa"></div><div class="ch2-sa"></div>';
document.body.appendChild(t);
}
t.style.display = document.pointerLockElement ? "" : "none";
let o = document.getElementById("crosshairContainer"),
fs = o && parseFloat(getComputedStyle(o).fontSize) || 40,
dpr = window.devicePixelRatio || 1,
k = A.stillScale || 1,
us = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--ssb-ch-scale")) ||
parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--ssb-ui-scale")) || 1,
Wd = Math.max(1, Math.round(A.staticWidth * fs * k * dpr)),
Hd = Math.max(0, Math.round(A.staticLength * fs * k * dpr)),
Gd = Math.max(0, Math.round(A.staticGap * us * k * dpr)),
Bf = A.staticOutlineEnabled ? .05 * fs * k * dpr : 0,
Bd = Bf > .5 ? Math.max(1, Math.round(Bf)) : 0;
if (Bd * 2 >= Wd) Bd = Math.max(0, Math.floor((Wd - 1) / 2));
let vb = window.__ssbViewBox(),
x0 = Math.round(vb.width * dpr / 2 - Wd / 2),
y0 = Math.round(vb.height * dpr / 2 - Wd / 2),
cx = x0 + Wd / 2,
cy = y0 + Wd / 2,
px = v => +(v / dpr).toFixed(4) + "px",
box = (l, tp, w, h) =>
`left:${px(l)} !important; top:${px(tp)} !important; width:${px(w)} !important; height:${px(h)} !important;`,
arms = [box(x0, Math.floor(cy + Gd), Wd, Hd), box(Math.ceil(cx - Gd) - Hd, y0, Hd, Wd), box(x0, Math.ceil(
cy - Gd) - Hd, Wd, Hd), box(Math.floor(cx + Gd), y0, Hd, Wd)];
t.querySelectorAll(".ch2-sa").forEach(e => e.style.removeProperty("transform"));
a("ch2-static-style", `
			#ch2-static-cont {
				position: fixed !important; top: 0 !important; left: 0 !important;
				width: 0 !important; height: 0 !important; pointer-events: none !important;
				z-index: 99999 !important; transform: none !important;
			}
			#ch2-static-cont .ch2-sa {
				position: absolute !important; margin: 0 !important; transform: none !important;
				background: ${A.staticColor} !important;
				border: ${Bd ? `solid ${px(Bd)} ${A.staticBorder}` : "none"} !important;
				opacity: ${A.staticOpacity} !important; box-sizing: border-box !important;
			}
			${arms.map((st, idx) => `#ch2-static-cont .ch2-sa:nth-child(${idx + 1}) { ${st} }`).join("\n\t\t\t")}
		`);
}
function W() {
a("ch2-hide-style", A.hideCrosshair ? "#crosshairContainer{display:none!important}" : "")
}
function G() {
R();
q();
j();
W();
}! function _dprWatch() {
try {
let m = matchMedia("(resolution: " + (window.devicePixelRatio || 1) + "dppx)");
m.addEventListener("change", () => {
if (A.enabled) {
R();
j();
}
_dprWatch();
}, {
once: true
})
} catch (e) {
window.__ssbErr("crosshair.dpr", e)
}
}();
window.addEventListener("resize", () => {
clearTimeout(window._ssbRszT);
window._ssbRszT = setTimeout(() => {
if (A.enabled) G();
}, 150);
});
let K = null,
U = null,
_lastReticleDot = null;
function Y() {
if (!window._ssbYP) {
window._ssbYP = 1;
requestAnimationFrame(() => {
window._ssbYP = 0;
_Yimpl();
});
}
}
function _Yimpl() {
let e = document.getElementById("ch2-preview-wrap");
if (!e) return;
let t = localStorage.getItem("ch2-previewBg") || "#ffffff",
o = A.enabled ? A : {
hideCrosshair: false,
armColor: "#ffffff",
armBorder: "#000000",
armLength: .75,
armWidth: .3,
armOpacity: 1,
armRotation: 0,
armScale: 1,
hideDot: false,
hideDotShotgun: false,
dotShape: "dot",
dotColor: "#ffffff",
dotRound: false,
dotOpacity: 1,
dotPlusLen: 8,
dotPlusWidth: 2,
dotScale: 1,
plusScale: 1,
staticColor: "#ffffff",
staticBorder: "#000000",
staticOpacity: 1,
staticLength: .75,
staticWidth: .3,
staticGap: 3,
staticOutlineEnabled: true,
armOutlineEnabled: true,
dotOutlineEnabled: true,
stillScale: 1
},
n = o.armLength * o.armScale,
i = o.armWidth * o.armScale,
a = Math.min(.05 * o.armScale, .3 * i).toFixed(4),
r =
`position:absolute;transform-origin:50% ${-(o.armGap || 0)}px;top:${o.armGap || 0}px;left:calc(-${(i / 2).toFixed(4)}em);width:${i}em;height:${n}em;background:${o.armColor};background-clip:${o.armOutlineEnabled === false ? "padding-box" : "border-box"};border:solid ${a}em ${o.armOutlineEnabled === false ? "transparent" : o.armBorder};opacity:${o.armOpacity};box-sizing:border-box;`,
s = "";
if (!o.hideDot) {
if (o.dotShape === "still") {
let l = o.staticOutlineEnabled ? `solid 0.05em ${o.staticBorder}` : "none",
d =
`position:absolute;transform-origin:50% -${o.staticGap}px;top:${o.staticGap}px;left:calc(-${o.staticWidth / 2}em);width:${o.staticWidth}em;height:${o.staticLength}em;background:${o.staticColor};border:${l};opacity:${o.staticOpacity};box-sizing:border-box;`;
s = `<div style="position:absolute;top:0;left:0;width:0;height:0;transform:scale(${o.stillScale});"><div style="${d}transform:rotate(0deg);"></div><div style="${d}transform:rotate(90deg);"></div><div style="${d}transform:rotate(180deg);"></div><div style="${d}transform:rotate(270deg);"></div></div>`
} else s = o.dotShape === "plus" ?
`<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(${o.plusScale});font-size: 24px;opacity:${o.dotOpacity};width:0;height:0;background:none;border:none;"><div style="position:absolute;background:${o.dotColor};top:50%;left:50%;width:${o.dotPlusWidth}px;height:${o.dotPlusLen}px;transform:translate(-50%,-50%) rotate(90deg);"></div><div style="position:absolute;background:${o.dotColor};top:50%;left:50%;width:${o.dotPlusWidth}px;height:${o.dotPlusLen}px;transform:translate(-50%,-50%);"></div></div>` :
`<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(${o.dotScale});font-size: 24px;opacity:${o.dotOpacity};box-sizing:border-box;width:${_dsz(o)}em;height:${_dsz(o)}em;background:${o.dotColor};border:solid ${_dbw(o)}em ${o.dotOutlineEnabled === false ? "transparent" : _dbc(o)};background-clip:${o.dotOutlineEnabled === false ? "padding-box" : "border-box"};border-radius:${o.dotRound ? "100%" : "0"};"></div>`
}
let c = o.hideCrosshair ? "" : `
				<div style="${r}transform:rotate(0deg);"></div>
				<div style="${r}transform:rotate(90deg);"></div>
				<div style="${r}transform:rotate(180deg);"></div>
				<div style="${r}transform:rotate(270deg);"></div>
		`;
e.style.background = t;
document.querySelectorAll("#mod-crosshair-section .ch2-bg-swatch").forEach(b => b
.classList.toggle("on", b.dataset.hex === String(t).toLowerCase()));
e.style.position = "relative";
e
.innerHTML = `<div style="position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;overflow:hidden;">
			<div style="position:relative;width:0;height:0;font-size: 24px;zoom:calc(1 / var(--ssb-gui, 1));transform:rotate(${o.armRotation}deg);">
				${c}
				${s}
			</div>
		</div>`;
}
function V() {
R();
W();
j();
(function e() {
let t = document.getElementById("reticleDot");
if (t && (t !== _lastReticleDot)) {
_lastReticleDot = t;
if (A.enabled) q();
}
}());
if (!window._ssbVLockHook) {
window._ssbVLockHook = 1;
document.addEventListener("pointerlockchange",
() => {
if (document.pointerLockElement) j();
if (A.enabled) q();
let e = document.getElementById("ch2-static-cont");
if (e) e.style.display = document.pointerLockElement ? "" : "none";
eS();
});
}
}
window.__ssbMenuPoll(function _ssbSpectateCheck() {
if (document.hidden) return;
if (!document.pointerLockElement) {
if (U !== false && K) {
K.textContent = "";
U = false;
}
window._specCount = 0;
return
}
if (!K) K = a("ch2-spec-hide");
let confirmed, vs = function() {
try {
let a = window.vueApp?.$data || window.vueData || window.vueApp,
r = a?.ui?.game;
if (r && typeof r.spectate == "boolean") return r.spectate
} catch (s) {
window.__ssbErr("spectate.vue", s)
}
return null
}();
if (vs !== null) {
window._specCount = 0;
confirmed = vs;
} else {
let t = false;
try {
for (let o of document.querySelectorAll("div.h4.margins_sm")) {
if (!/spectat/i.test(o.textContent || "") || o.checkVisibility && !o.checkVisibility())
continue;
let n = o.getBoundingClientRect();
if (n.width > 0 && n.height > 0) {
t = true;
break
}
}
} catch (i) {
window.__ssbErr("spectate.dom", i)
}
window._specCount = t ? (window._specCount || 0) + 1 : 0;
confirmed = window._specCount >= 2;
}
if (confirmed !== U) {
U = confirmed;
K.textContent = confirmed ?
"#reticleDot, #reticleDot .ch2-bar, #ch2-static-cont { display: none !important; visibility: hidden !important; }" :
"";
}
}, 2e3, {
inMatch: true
});
(function _ssbShotgunDot() {
let on = false,
lbl = null,
obs = null;
const apply = function() {
try {
let w = lbl && lbl.isConnected ? lbl : document.getElementById("weaponName"),
want = !!(A.enabled && A.hideDotShotgun && w && /^\s*Dozen Gauge\s*$/i.test(w
.textContent || ""));
if (want !== on) {
on = want;
a("ch2-sg-hide", want ?
"#reticleDot, #reticleDot .ch2-bar, #ch2-static-cont { display: none !important; visibility: hidden !important; }" :
"");
}
} catch (e) {
window.__ssbErr("shotgundot#1", e)
}
};
window.__ssbShotgunDot = apply;
window.__ssbMenuPoll(function() {
try {
let w = document.getElementById("weaponName");
if (w && w !== lbl) {
if (obs) obs.disconnect();
lbl = w;
obs = new MutationObserver(apply);
obs.observe(w, {
childList: true,
characterData: true,
subtree: true
});
}
apply();
} catch (e) {
window.__ssbErr("shotgundot#2", e)
}
}, 2e3, {
inMatch: true
});
})
();
window.__ssbSetVolume = function(v) {
v = Math.max(0, Math.min(1, +v || 0));
try {
if (window.BAWK && typeof window.BAWK.setVolume == "function") window.BAWK.setVolume(v);
} catch (e) {
window.__ssbErr("volume#1", e)
}
try {
let vd = window.vueApp && (window.vueApp.$data || window.vueApp),
su = vd && vd.settingsUi;
if (vd && "volume" in vd) vd.volume = v;
if (su && su.settings) su.settings.volume = v;
let a = su && su.adjusters && Array.isArray(su.adjusters.misc) && su.adjusters.misc.find(x => x &&
x.id === "volume");
if (a) a.value = v;
} catch (e) {
window.__ssbErr("volume#2", e)
}
};
window.__ssbSaveVolume = function(v) {
try {
localStorage.setItem("volume", Math.max(0, Math.min(1, +v || 0)))
} catch (e) {
window.__ssbErr("volume#3", e)
}
};
window.resetVolume = function() {
if (X) {
X.value = .6;
X.dispatchEvent(new Event("input", {
bubbles: true
}));
window.__ssbSaveVolume(.6);
} else {
if (Z) Z.innerText = "60%";
window.__ssbSetVolume(.6);
window.__ssbSaveVolume(.6);
}
};
let Z, X, J = `
		<style>
			.vol-wrap { padding: 4px 8px 8px !important; }
			.vol-row  { display:flex !important; align-items:center !important; gap:12px !important; margin-bottom:10px !important; }
			#mod-volDisplay { font-family:"Nunito", system-ui, sans-serif !important; font-size: 16px !important; font-weight:bold !important; color:#0C576F !important; min-width:55px !important; }
			.mod-vol-slider { -webkit-appearance:none !important; appearance:none !important; flex:1 !important; height:6px !important; border-radius:5px !important;
			              background:#ffffff !important; border:1px solid rgba(12,87,111,0.15) !important; outline:0 !important; cursor:pointer !important; }
			.mod-vol-slider::-webkit-slider-thumb { -webkit-appearance:none !important; appearance:none !important; width:21px !important; height:21px !important; margin-top:-8px !important;
				border-radius:50% !important; background:#ff9800 !important; border:4.5px solid #fff !important; box-sizing:border-box !important;
				box-shadow:0 1px 4px rgba(0,0,0,.35) !important; cursor:pointer !important; }
			.mod-vol-slider::-moz-range-thumb { width:21px !important; height:21px !important; border-radius:50% !important;
				background:#ff9800 !important; border:4.5px solid #fff !important; box-sizing:border-box !important;
				box-shadow:0 1px 4px rgba(0,0,0,.35) !important; cursor:pointer !important; }
			#resetVolBtn { position:static!important; display:flex; align-items:center; justify-content:center; gap:6px; width:fit-content; margin:8px auto 0;
				height:30px; padding:0 13px 0 11px; box-sizing:border-box; border:1px solid rgba(255,255,255,0.7); border-radius:10px;
				background:rgba(255,255,255,0.42); box-shadow:inset 0 1px 0 rgba(255,255,255,0.7), 0 2px 6px rgba(8,62,84,0.12);
				color:var(--ssb-ink); font-family:"Nunito", system-ui, sans-serif; font-size:13px; font-weight:800; letter-spacing:0.1px; line-height:1;
				cursor:pointer; transition:background .15s, box-shadow .15s, transform .15s; }
			#resetVolBtn::before { content:""; flex:none; width:14px; height:14px; background:var(--ssb-blue); -webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 12a9 9 0 1 0 3-6.7L3 8'/%3E%3Cpath d='M3 3v5h5'/%3E%3C/svg%3E") center / contain no-repeat; mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 12a9 9 0 1 0 3-6.7L3 8'/%3E%3Cpath d='M3 3v5h5'/%3E%3C/svg%3E") center / contain no-repeat; }
			#resetVolBtn:hover  { background:rgba(255,255,255,0.72); box-shadow:inset 0 1px 0 rgba(255,255,255,0.8), 0 6px 14px rgba(8,62,84,0.16); transform:translateY(-1px); }
			#resetVolBtn:active { transform:none; box-shadow:inset 0 1px 0 rgba(255,255,255,0.8), 0 1px 3px rgba(8,62,84,0.12); }
		</style>
		<div class="vol-wrap">
			<div class="vol-row">
				<span id="mod-volDisplay"></span>
				<input type="range" min="0" max="1" step="0.01" class="mod-vol-slider" id="mod-vol-slider">
			</div>
			<button id="resetVolBtn" onclick="window.resetVolume()">Reset Volume</button>
		</div>`,
Q = window.__ssbMenuPoll(function() {
let e = document.getElementsByClassName("pause-game-weapon-select")[0];
if (e) {
Q();
let t = document.createElement("div");
t.innerHTML = J;
e.appendChild(t);
Z = document.getElementById("mod-volDisplay");
X = document
.getElementById("mod-vol-slider");
let o = parseFloat(localStorage.getItem("volume") ?? .6);
X.value = o;
Z.innerText = Math.round(100 * o) + "%";
X.oninput = function() {
let e = parseFloat(this.value);
Z.innerText = Math.round(100 * e) + "%";
window.__ssbSetVolume(e);
};
X.onchange = function() {
window.__ssbSaveVolume(parseFloat(this.value));
if (typeof ef == "function") ef("ui_onchange");
};
}
}, 1e3),
ee = Date.now();
function et(e) {
let t = Math.floor(e / 1e3),
o = Math.floor(t / 3600),
n = Math.floor(t % 3600 / 60),
i = t % 60,
a = e => String(e).padStart(2, "0");
return o > 0 ? `${o}:${a(n)}:${a(i)}` : `${a(n)}:${a(i)}`
}
function _ssbSessMs() {
let now = Date.now();
if (d.hideFPS.sessionFrom === 1) try {
if (eb.matchStartMs && eb.inMatch) return Math.max(0, (eb.matchEndMs || now) - eb.matchStartMs)
} catch (x) {}
return now - ee
}
function eo() {
r("ssb-hide-fps-box", en, d.hideFPS.hideBox);
let t = o("FPS"),
n = o("ping");
if (t) {
let i = d.hideFPS.hide ? "none" : "";
_sd(t, i);
let a = t.previousElementSibling;
if (a) {
_sd(a, i);
if (!("_ssbOrigText" in a)) a._ssbOrigText = a.textContent;
if (a.textContent !== (d.hideFPS
.showMs ? "MS" : a._ssbOrigText)) a.textContent = d.hideFPS.showMs ? "MS" : a._ssbOrigText;
}
}
if (n) {
let s = d.ping.hide ? "none" : "";
_sd(n, s);
if (n.previousElementSibling) _sd(n.previousElementSibling, s);
}
let l = o("readouts");
if (l) _sd(l, d.hideFPS.hide && d.ping.hide && !d.hideFPS.showSessionTime ? "none" :
""
);
let _bx = o("inGameUI");
if (_bx) _sd(_bx, d.hideFPS.hide && d.ping.hide && !d.hideFPS.showSessionTime ? "none" : "");
let c = l || e;
if (c) {
let p = o("ssb-session-time-label"),
m = o("ssb-session-time");
if (d.hideFPS.showSessionTime) {
if (p && p.tagName !== "H5") {
p.remove();
p = null;
}
if (m && m.tagName !== "P") {
m
.remove();
m = null;
}
if (!p) {
(p = document.createElement("h5")).id = "ssb-session-time-label";
p
.className = "nospace title";
c.appendChild(p);
}
if (!m) {
(m = document.createElement("p")).id =
"ssb-session-time";
m.className = "name";
c.appendChild(m);
}
m.style.color = "#ffffff";
p.style
.display = "";
m.style.display = "";
if (p.textContent !== "TIME") p.textContent = "TIME";
let _sm = et(_ssbSessMs());
if (m.textContent !== _sm) m.textContent = _sm;
} else {
if (p) p.style
.display = "none";
if (m) m.style.display = "none";
}
}
}
let en =
".pause-game-container, .ss_box, .challenges, .challenges-container { align-self: flex-start !important; height: auto !important; }\n#inGameUI { background: none !important; background-color: transparent !important; border: none !important; box-shadow: none !important; backdrop-filter: none !important; }";
function _ssbChlg() {
let v = window.vueApp;
if (!v || typeof v.challengeMsg != "function" || v.challengeMsg._ssb) return;
let f = v.challengeMsg,
w = function() {
if (!d.ui.hideChallenges) return f.apply(this, arguments)
};
w._ssb = 1;
try {
v.challengeMsg = w
} catch (x) {
window.__ssbErr("ui.challenges", x)
}
}
function ei() {
let e = d.ui,
t = i(".vol-wrap");
_sd(t, e.showVolumeSlider ? "" : "none");
let n = i(".egg_count"),
a = n?.closest(".account_eggs");
_sd(a, e.hideEggCount ? "none" : "");
let s = i(".chat-container");
_sd(s, e.hideChat ? "none" : "");
r("ssb-hide-chat", ".chat-wrapper, .chat-container { display: none !important; }", e.hideChat);
let l = o("playerList");
_sd(l, e.hidePlayerList ? "none" : "");
let c = o("shellStreakContainer");
_sd(c, e.hideBestStreak ? "none" : "");
r("mod-killfeed-style",
"#killTicker, .killTicker, [id*='killTicker'], #killLog, .kill-log, .kill-feed, #killList, .killList, .player-kill-feed { display: none !important; opacity: 0 !important; pointer-events: none !important; }",
e.hideKillFeed);
r("ssb-hide-game-stats",
"#teamScores, #captureContainer, #captureIconContainer, #spatulaPlayer, .match-vs, .team-vs, .team-score, .gameStats, .game-stats { display: none !important; visibility: hidden !important; }",
e.hideGameStats);
r("ssb-hide-ammo",
"#ammo { display: none !important; visibility: hidden !important; }", e.hideAmmo);
r("ssb-hide-grenade",
"#grenades, #grenade1, #grenade2, #grenade3, #grenadeThrow, #grenadeThrowContainer { display: none !important; visibility: hidden !important; }",
e.hideGrenade);
r("ssb-hide-hp",
"#healthBar, #healthContainer { display: none !important; visibility: hidden !important; }", e.hideHP);
r("ssb-hide-challenges",
"#playerChallengeComplete, #respawn-menu .player-challenges-aside { display: none !important; }\n#respawn-menu > .grid-column-2-eq { grid-template-columns: 1fr !important; }",
e.hideChallenges);
r("ssb-hide-chw", "#chw-home, #chw-game-screen { display: none !important; }", e
.hideChickenWinner);
_ssbChlg();
}
let ea = null,
er = false,
es = null,
el = 0,
ed = Object.getOwnPropertyDescriptor(Document.prototype, "pointerLockElement"),
ec = Object.getOwnPropertyDescriptor(MouseEvent.prototype, "movementX"),
ep = Object.getOwnPropertyDescriptor(MouseEvent.prototype,
"movementY"
);
let _toKill = 0,
_toRaw = false,
_toN = 0,
_toMv = e => {
if (er) return true;
if (el === 0) return false;
if (performance.now() >= el) {
el = 0;
return false;
}
return Math.abs(ec.get.call(e)) > 150 || Math.abs(ep.get.call(e)) > 150
};
if (ec?.get && ep?.get) {
Object.defineProperty(MouseEvent.prototype, "movementX", {
get() {
return _toMv(this) ? 0 : ec.get.call(this)
},
configurable: true
});
Object.defineProperty(MouseEvent.prototype, "movementY", {
get() {
return _toMv(this) ? 0 : ep.get.call(this)
},
configurable: true
});
}
if (ed?.get) Object.defineProperty(Document.prototype, "pointerLockElement", {
configurable: true,
get() {
let e = ed.get.call(this);
return er && !e && es ? es : e
}
});
let _xplO = Document.prototype.exitPointerLock,
_rl = () => ed?.get ? ed.get.call(document) : document.pointerLockElement,
_xpl = function() {
try {
if (_xplO) _xplO.call(document);
} catch (x) {
window.__ssbErr("stats#6", x)
}
};
if (_xplO) {
let _xplW = function() {
if (!er) return _xplO.apply(this, arguments);
er = false;
es = null;
el = 0;
if (em) {
em = 0;
_toKill = performance.now() + 3e3;
}
if (_rl()) return _xplO.apply(this, arguments);
setTimeout(() => {
if (er || _rl()) return;
let v = new Event("pointerlockchange");
v._ssbOwn = 1;
document.dispatchEvent(v);
}, 0)
};
Document.prototype.exitPointerLock = _xplW;
if (Object.prototype.hasOwnProperty.call(document, "exitPointerLock")) document.exitPointerLock = _xplW;
}
let em = 0,
eh =
null;
function _toRelock() {
let c = es || document.getElementById("canvas") || document.querySelector("canvas");
if (!c || !c.requestPointerLock) return;
let raw = false;
try {
raw = localStorage.getItem("fastPollMouse") === "true"
} catch (x) {}
em = performance.now();
_toRaw = raw;
_toKill = 0;
let id = ++_toN,
no = () => {
if (id === _toN) {
if (em && !_rl()) em = 0;
_toKill = 0;
}
},
p;
try {
p = c.requestPointerLock({
unadjustedMovement: raw
})
} catch (x) {
no();
return
}
if (p && typeof p.catch == "function") p.catch(x => {
if (raw && x && x.name === "NotSupportedError") {
_toRaw = false;
try {
let q = c.requestPointerLock();
if (q && typeof q.catch == "function") q.catch(no);
} catch (y) {
no()
}
} else no()
});
}
function ef(e) {
try {
window.BAWK?.play?.(e)
} catch (t) {
window.__ssbErr("stats#2", t)
}
}
function eg() {
let e = $();
if (e) w(e);
}
document.addEventListener("pointerlockchange", function(e) {
let t = !!ed?.get.call(document);
if (_toKill && !e._ssbOwn) {
if (performance.now() < _toKill) {
e.stopImmediatePropagation();
if (t) _xpl();
else _toKill = 0;
return
}
_toKill = 0
}
if (er && !t) {
e.stopImmediatePropagation();
return
}
if (t && er) {
el = em && _toRaw ? 0 : performance.now() + 300;
er = false;
em = 0;
es = null;
}
}, true);
document.addEventListener("pointerlockerror", () => {
if (em && !_rl()) em = 0;
_toKill = 0;
});
if (ea) window.removeEventListener("keydown", ea, true);
ea = function(e) {
let t = document.activeElement;
if (!(t && (/^(INPUT|TEXTAREA)$/i.test(t.tagName) || t.isContentEditable)) && e.key && e.key
.toLowerCase() === d
.gameplay.tabOutKey.toLowerCase())(function() {
let t = document.activeElement?.id === "chatIn",
o = window.vueApp?.game?.isPaused;
if (!t && !o) {
let eat = () => (e.preventDefault(), e.stopImmediatePropagation(), e.repeat || window
.__ssbEatKeyUp?.(e.key));
if (e.repeat) {
if ((er || _rl())) eat();
return
}
if (er) {
eat();
if ((!em || performance.now() - em > 1500)) _toRelock();
} else {
let a = _rl();
if (!a) return;
eat();
es = a;
er = true;
em = 0;
el = 0;
_toKill = 0;
_xpl();
}
}
}());
};
window.addEventListener("keydown", ea, true);
window.__ssbTabOut = {
state: () => ({
out: er,
pending: !!em,
guardMs: el ? Math.max(0, Math.round(el - performance.now())) : 0,
kill: !!_toKill,
raw: _toRaw
})
};
let e$ = 0;
window.__ssbMenuPoll(function _ssbMainTick() {
if (document.hidden) return;
e$++;
if (window.__ssbPerf) window.__ssbPerf.tick++;
let e = !!document.pointerLockElement,
_rd = document.getElementById("reticleDot");
if (_rd && _rd !== _lastReticleDot) {
_lastReticleDot = _rd;
if (A.enabled) q();
}
if (e && e$ % 6 != 0)(function e() {
if (!d.hideFPS.showSessionTime) return;
let t = o("ssb-session-time");
let _sm = et(_ssbSessMs());
if (t && t.textContent !== _sm) t.textContent = _sm;
}());
else {
eo();
ei();
eg();
if (A.enabled && _chDirty) {
_chDirty = false;
q();
}
}
if (el !== 0 && performance
.now() >= el) el = 0;
}, 1000, {
inMatch: true
});
let eb = {
matchStartMs: 0,
matchEndMs: 0,
inMatch: false,
hadLock: false,
userClosed: false,
server: "",
map: "",
mode: "",
snapshot: [],
totalKills: {},
totalDeaths: {},
_lastKills: {},
_lastDeaths: {},
knownPlayers: {},
everSeenTeams: false
};
function ex() {
try {
let e = window.players || [],
_vd = window.vueApp && (window.vueApp.$data || window.vueApp) || {},
_maps = _vd.maps;
for (let t of e) {
let o = t && t.gameData && t.gameData.mapIdx;
if (typeof o == "number" && _maps && _maps[o] && _maps[o].name) return _maps[o].name
}
} catch (n) {
window.__ssbErr("stats#6", n)
}
let i = e => !e || /^(none|photo|menu|lobby|select|loading)/i.test(String(e).trim());
try {
let a = window.vueApp?.$data || window.vueApp || {},
r = [a.game?.mapName, a.gameMap, a.mapName, a.map, a.ui?.game?.map, a.$data?.map];
for (let s of r)
if (typeof s == "string" && !i(s)) return s.trim()
} catch (l) {
window.__ssbErr("stats#7", l)
}
return ""
}
function ev() {
if (window.currentServerRegion) return window.currentServerRegion;
try {
let h = window.__ssbGameHost,
e = JSON.parse(localStorage.getItem("mod-server-hosts") || "{}") || {};
if (h)
for (let r of Object.keys(e))
if (e[r] && e[r].host === h) return r
} catch (o) {}
return ""
}
function e0() {
let vg = function() {
try {
let g = (window.vueApp?.$data || window.vueApp)?.game;
if (g && g.on && typeof g.gameType == "number") return ["ffa", "team", "ctf", "king"][g.gameType] ||
""
} catch (x) {
window.__ssbErr("stats.modeVue", x)
}
return ""
}();
if (vg) return vg;
if (eb && (eb.mode === "king" || eb.mode === "ctf")) return eb.mode;
let now = Date.now(),
_mw = document.pointerLockElement ? 1e4 : 2e3;
if (eb && eb._modeTs && now - eb._modeTs < _mw && eb.mode) return eb.mode;
if (eb) eb._modeTs = now;
let e = e => {
if (!e || e.checkVisibility && !e.checkVisibility()) return false;
let t = e.getBoundingClientRect();
return t.width > 0 && t.height > 0
},
t = document.getElementById("captureContainer"),
o = document.getElementById("teamScores"),
n = document.getElementById("spatulaPlayer");
if (e(t)) return "king";
if (e(o) || e(n)) return "ctf";
let i = window.players;
return i && i.some(e => e && (e.team === 1 || e.team === 2)) || eb && eb.everSeenTeams ? "team" : "ffa"
}
let _histMem = null,
_histT = 0;
function _ssbHist() {
if (!_histMem) {
try {
_histMem = JSON.parse(localStorage.getItem("tp-statsHistory") || "[]")
} catch (he) {
_histMem = []
}
if (!Array.isArray(_histMem)) _histMem = [];
}
return _histMem
}
function _ssbHistWrite(now) {
clearTimeout(_histT);
_histT = 0;
if (!now) {
_histT = setTimeout(() => _ssbHistWrite(1), 2e3);
return
}
try {
if (_histMem && _histMem.length) localStorage.setItem("tp-statsHistory", JSON.stringify(_histMem));
else localStorage.removeItem("tp-statsHistory");
} catch (e) {
window.__ssbErr("stats.histWrite", e)
}
}
function _ssbHistSet(h) {
_histMem = Array.isArray(h) ? h : [];
_ssbHistWrite(1);
}
window.__ssbStatsApi = {
hist: () => _ssbHist(),
setHist: h => _ssbHistSet(h)
};
window.addEventListener("storage", e => {
if (!(e.key !== "tp-statsHistory" && e.key !== null || _histT)) _histMem = null;
});
const _HIST_MAX = 40,
_HIST_KEPT = 20;
function _ssbHistTrim(hist) {
let kept = 0,
plain = 0;
for (let i = 0; i < hist.length; i++) {
let h = hist[i];
if (h && h.kept && kept < _HIST_KEPT) {
kept++;
continue
}
if (h && h.kept) delete h.kept;
if (++plain > _HIST_MAX) {
hist.splice(i, 1);
i--
}
}
}
function _ssbMatchPerf() {
try {
let s = window.__ssbSmartDetail && window.__ssbSmartDetail.state(),
m = s && s.match;
if (!m || !(m.time > 0) || !(m.fps > 0)) return null;
let p = {
avg: Math.round(m.fps)
};
if (Number.isFinite(m.lowest)) p.low = Math.round(m.lowest);
if (m.freezes) p.frz = m.freezes;
let pcts = (m.steps || []).map(x => +x.pct).filter(Number.isFinite);
if (pcts.length) p.res = Math.min(100, ...pcts);
return p
} catch (e) {
return null
}
}
window.__ssbStatsShowFps = () => {
try {
return JSON.parse(localStorage.getItem("tp-statsShowFps") || "false") === true
} catch (e) {
return false
}
};
window.__ssbSettings.add({
key: "tp-statsShowFps",
section: "stats",
after: "tp-statsPinned",
label: "Show Match FPS",
code: "Sf",
def: false,
tip: "Match History shows each match's average and lowest FPS, from what Smart Auto Detail measured while you played, and the CSV export gets those columns. Matches are measured either way, so turning it on shows earlier ones too.",
keywords: "fps frame rate frames per second performance lag history match average lowest",
get: window.__ssbStatsShowFps,
set: v => {
try {
localStorage.setItem("tp-statsShowFps", JSON.stringify(!!v))
} catch (e) {
window.__ssbErr("stats.fps", e)
}
}
});
const _ssbRecOn = () => {
try {
return JSON.parse(localStorage.getItem("tp-personalRecords") || "true") !== false
} catch (e) {
return true
}
};
function _ssbRecGet() {
try {
let r = JSON.parse(localStorage.getItem("tp-statsRecords") || "{}");
return r && typeof r == "object" && !Array.isArray(r) ? r : {}
} catch (e) {
return {}
}
}
window.__ssbRecords = _ssbRecGet;
function _ssbRecords(entry) {
if (!_ssbRecOn() || !entry.mode) return;
let me = (entry.players || []).find(p => p && p.isMe),
k = me ? +me.kills || 0 : 0;
if (!k) return;
let kdr = k >= 10 ? Math.round(k / Math.max(1, +me.deaths || 0) * 100) / 100 : 0,
R = _ssbRecGet(),
changed = false,
own = r => r && r.c === entry.code && r.s === entry.startMs,
bump = (box, key, n) => {
let cur = box[key];
if (own(cur)) {
if (cur.prev && n <= cur.prev.n) box[key] = cur.prev;
else if (n !== cur.n) cur.n = n;
else return;
changed = true;
return
}
if (cur && !(n > cur.n)) return;
box[key] = {
n: n,
c: entry.code,
s: entry.startMs,
m: entry.map || ""
};
if (cur) box[key].prev = {
n: cur.n,
c: cur.c,
s: cur.s,
m: cur.m
};
changed = true
},
slot = (grp, name) => {
let g = R[grp] && typeof R[grp] == "object" ? R[grp] : (R[grp] = {});
return g[name] && typeof g[name] == "object" ? g[name] : (g[name] = {})
};
[slot("modes", entry.mode), entry.map && slot("maps", entry.map)].forEach(box => {
if (!box) return;
bump(box, "k", k);
if (kdr) bump(box, "r", kdr)
});
if (changed) try {
localStorage.setItem("tp-statsRecords", JSON.stringify(R))
} catch (e) {
window.__ssbErr("stats.rec", e)
}
}
function _ssbRecTell(entry) {
if (!_ssbRecOn() || !eb.matchEndMs || eb._recTold === entry.startMs) return;
eb._recTold = entry.startMs;
let m = (_ssbRecGet().modes || {})[entry.mode] || {},
mine = r => r && r.c === entry.code && r.s === entry.startMs && r.prev,
out = [];
if (mine(m.k)) out.push(m.k.n + " kills (was " + m.k.prev.n + ")");
if (mine(m.r)) out.push("KDR " + m.r.n.toFixed(2) + " (was " + m.r.prev.n.toFixed(2) + ")");
if (out.length && window.__ssbUI) window.__ssbUI.toast("New personal best in " + _stMode(entry.mode) + ": " +
out.join(", ") + ".", {
type: "success",
ms: 6500
})
}
window.__ssbSettings.add({
key: "tp-personalRecords",
section: "stats",
after: "tp-statsShowFps",
label: "Personal Records",
code: "Sr",
def: true,
tip: "Keeps your most kills and best KDR (with at least 10 kills) for each mode and map. Match History shows them, and when a match beats one, a message at the end says so. Needs Stats Tracker.",
keywords: "records best personal best pb high score most kills kdr record",
get: _ssbRecOn,
set: v => {
try {
localStorage.setItem("tp-personalRecords", JSON.stringify(!!v))
} catch (e) {
window.__ssbErr("stats.recOn", e)
}
}
});
function _ssbSaveStats(_f) {
try {
if (_f && _histT) _ssbHistWrite(1);
if (!d.stats.enabled || !eb.matchStartMs) return;
let _sk = 0,
_sd = 0,
_sn = 0,
_coopMs = 0,
_coopEvents = 0;
for (let _k in eb.byName) {
let _r = eb.byName[_k];
_sk += _r.kills || 0;
_sd += _r.deaths || 0;
_coopMs += Math.floor(_r.coopMs || 0);
_coopEvents += (_r.coopCaptures || 0) + (_r.coopTakeovers || 0);
_sn++
}
let _now = Date.now(),
_ready = (eb.snapshot || []).length > 0 && _now - eb.matchStartMs >= 2e4;
let _sig = eb.gameCode + "|" + eb.matchStartMs + "|" + eb.map + "|" + eb.server + "|" + eb.mode + "|" + (eb
.kotcScore ? eb.kotcScore[1] + "," + eb.kotcScore[2] : "") + "|" + _sk + "|" + _sd + "|" + _sn +
"|" + _coopMs + "|" + _coopEvents + "|" + _ready;
if (!_f && eb._saveSig === _sig && !eb._histDue && !eb._sessDue) return;
eb._saveSig = _sig;
let _gcS = eb.gameCode || (eb._synth || (eb._synth = "local-" + (eb.matchStartMs || Date
.now()
)));
if (_f || !document.pointerLockElement || _now - (eb._sessTs || 0) >= 1e4) {
eb._sessTs = _now;
eb._sessDue = 0;
localStorage.setItem("tp-statsSession", JSON.stringify({
code: _gcS,
map: eb.map,
server: eb.server,
byName: eb.byName || {},
matchStartMs: eb.matchStartMs,
kotcScore: eb.kotcScore || {
1: 0,
2: 0
},
everSeenTeams: eb.everSeenTeams,
mode: eb.mode,
ts: _now
}))
} else eb._sessDue = 1;
if (!_ready) return;
let players = eb.snapshot.map(p => ({
name: p.name,
team: p.team,
kills: p.kills,
deaths: p.deaths,
isMe: p.isMe,
..._stKotcSaved(p)
}));
if (!_f && document.pointerLockElement && _now - (eb._histTs || 0) < 15e3) {
eb._histDue = 1;
return
}
eb._histDue = 0;
eb._histTs = _now;
let hist =
_ssbHist();
let entry = {
code: _gcS,
map: eb.map,
server: eb.server,
mode: eb.mode,
startMs: eb.matchStartMs,
endMs: eb.matchEndMs || _now,
kotc: eb.kotcScore || {
1: 0,
2: 0
},
players: players
};
let idx = hist.findIndex(h => h && h.code === _gcS && Math.abs((h.startMs || 0) - (eb.matchStartMs || 0)) <
15e3);
let _pf = _ssbMatchPerf();
if (_pf) entry.perf = _pf;
if (idx >= 0) {
entry.label = hist[idx].label;
if (hist[idx].kept) entry.kept = true;
if (!entry.perf && hist[idx].perf) entry.perf = hist[idx].perf;
hist[idx] = entry;
} else hist.unshift(entry);
_ssbHistTrim(hist);
_ssbHistWrite(!!_f);
try {
_ssbRecords(entry);
if (_f) _ssbRecTell(entry)
} catch (re) {
window.__ssbErr("stats.records", re)
}
} catch (e) {
window.__ssbErr("stats.save", e)
}
}
function _ssbRestoreStats(gc, mp) {
try {
if (eb._restoreDone) return false;
let raw = localStorage.getItem("tp-statsSession");
if (!raw) return false;
let s = JSON.parse(raw);
if (!s || s.code !== gc || !(Date.now() - (s.ts || 0) < 3e5)) return false;
if (s.map && mp && s.map !== mp) return false;
eb.byName = Object.assign(Object.create(null), s.byName && typeof s.byName === "object" && !Array.isArray(s
.byName) ? s.byName : {});
for (let _rk of Object.keys(eb.byName)) {
let _rr = eb.byName[_rk];
if (_rr) {
_rr._ret = 1;
_rr._q = 0;
}
}
eb.matchStartMs = s.matchStartMs || Date.now();
eb.kotcScore = s.kotcScore || {
1: 0,
2: 0
};
eb.everSeenTeams = !!s.everSeenTeams;
eb.mode = s.mode || "";
eb._snapMap = Object.create(null);
eb
._seen = [];
eb._restoreDone = true;
return true
} catch (e) {
return false
}
}
/* Coop time inspired by Saad / wish?'s Stats Tracker (MIT).
KotC tracking is opt-in. Occupancy uses the existing native 30 Hz lookup;
captures/takeovers use the native metagame state event, never render frames.
A participant is credited once, while alive in that coop on the scoring team.
Missing old history is left unavailable rather than reconstructed. */
const _stCoop = (() => {
const states = new Map(),
hooks = new WeakMap(),
STEP = 1000 / 30,
GAP = 250;
let running = true,
compatible = false,
checks = 0,
transitions = 0,
gameCode = null,
hook = null;
const now = () => performance.now();
const valid = v => typeof v === "number" && Number.isFinite(v) && v >= 0;
function enabled() {
return running && d.stats.enabled && d.stats.kotc
}
function active() {
return enabled() && window.extern?.inGame === true && window.extern?.gameType === 3
}
function watching() {
return d.stats.enabled && _stEndMode() > 0 && window.extern?.inGame === true && window.extern
?.gameType === 3
}
function timing() {
const m = window.extern?.metaGame;
return active() && m && m.activeZone > 0 && m.state >= 3 && m.state <= 7 ? m.activeZone : 0;
}
function close(s, t) {
if (s.since !== null) {
s.ms += Math.max(0, t - s.since);
s.since = null;
transitions++
}
}
function total(s, t) {
return s.ms + (s.since === null ? 0 : Math.max(0, Math.min(t, s.last + STEP) - s.since))
}
function count(rec, player, t = now()) {
if (!compatible || !rec || eb.mode !== "king") return;
const s = states.get(player);
if (!s && !enabled()) return;
if (!valid(rec.coopMs)) rec.coopMs = 0;
if (hook?.live) {
if (!valid(rec.coopCaptures)) rec.coopCaptures = 0;
if (!valid(rec.coopTakeovers)) rec.coopTakeovers = 0;
}
if (!s) return;
s.rec = rec;
const raw = total(s, t),
delta = Math.max(0, raw - s.counted);
rec.coopMs += delta;
s.counted = raw;
for (const key of ["coopCaptures", "coopTakeovers"]) {
const delta = s[key] - s.countedEvents[key];
if (delta > 0) rec[key] = (valid(rec[key]) ? rec[key] : 0) + delta;
s.countedEvents[key] = s[key];
}
}
function zone(player, cellZone) {
try {
if (!enabled() || !player) return;
checks++;
const code = window.__ssbGameCode;
if (code && code !== gameCode) {
states.clear();
gameCode = code
}
const zoneId = timing(),
on = cellZone > 0 && cellZone === zoneId,
t = now();
let s = states.get(player);
if (!s) {
if (!on) return;
s = {
ms: 0,
since: null,
last: t,
counted: 0,
rec: null,
zone: 0,
coopCaptures: 0,
coopTakeovers: 0,
countedEvents: {
coopCaptures: 0,
coopTakeovers: 0
}
};
states.set(player, s);
}
if (s.since !== null && t - s.last > GAP) close(s, s.last + STEP);
if (on) {
if (s.since === null) {
s.since = t;
transitions++
}
} else close(s, Math.min(t, s.last + STEP));
s.zone = on ? zoneId : 0;
s.last = t;
} catch (e) {
window.__ssbErr("stats.coop", e)
}
}
function credit(key, zoneId, team) {
if (!(zoneId > 0) || team !== 1 && team !== 2) return;
const t = now();
for (const [p, s] of states) {
if (s.zone === zoneId && p.team === team && t - s.last <= GAP) {
s[key]++;
if (s.rec) count(s.rec, p, t);
}
}
}
function snapshot(m) {
return {
zone: m.activeZone,
state: m.state,
team: m.teams,
blue: +m.teamScore?.[1] || 0,
red: +m.teamScore?.[2] || 0,
code: window.__ssbGameCode
};
}
function heldBy(s) {
return (s.state === 3 || s.state === 6) && (s.team === 1 || s.team === 2) ? {
zone: s.zone,
team: s.team
} : null
}
function changed(h) {
const next = snapshot(h.owner),
prev = h.previous;
h.previous = next;
if (!prev || prev.code !== next.code) {
h.takeover = h.holder = null;
h.won = next.state === 2;
return
}
if (active()) {
if (next.state === 5) {
if (h.takeover?.zone !== next.zone) h.takeover = h.holder?.zone === next.zone ? {
zone: next.zone,
from: h.holder.team
} : null;
} else if (next.state === 3) {
if (h.takeover?.zone === next.zone && (next.team === 1 || next.team === 2) && next.team !== h
.takeover.from) credit("coopTakeovers", next.zone, next.team);
h.takeover = null;
} else if (next.state !== 4) h.takeover = null;
if (next.state !== 4 && next.state !== 5) h.holder = heldBy(next);
if ((next.state === 1 || next.state === 2) && prev.zone > 0) {
if (next.blue === prev.blue + 1 && next.red === prev.red) credit("coopCaptures", prev.zone, 1);
else if (next.red === prev.red + 1 && next.blue === prev.blue) credit("coopCaptures", prev
.zone, 2);
}
} else h.takeover = h.holder = null;
if (next.state === 0 || next.blue + next.red < prev.blue + prev.red) h.won = false;
if (next.state === 2 && !h.won) {
h.won = true;
if (watching()) _stKotcEnd(next);
}
}
function unhook() {
if (!hook) return;
hook.live = false;
if (hook.owner.unPackState === hook.wrapper) {
hook.owner.unPackState = hook.original;
hook.restored = true;
}
hook = null;
}
function sync() {
const owner = active() || watching() ? window.extern?.metaGame : null;
if (hook?.owner === owner && hook.live) return;
unhook();
if (!owner || typeof owner.unPackState !== "function") return;
let h = hooks.get(owner);
if (!h || h.restored) {
h = {
owner,
original: owner.unPackState,
live: false,
restored: false
};
h.wrapper = function() {
const result = h.original.apply(this, arguments);
if (h.live && hook === h) {
try {
changed(h)
} catch (e) {
window.__ssbErr("stats.kotcEvents", e)
}
}
return result;
};
Object.defineProperty(h.wrapper, Symbol.for("ssb.kotc.state"), {
value: h
});
hooks.set(owner, h);
owner.unPackState = h.wrapper;
}
h.previous = snapshot(owner);
h.takeover = null;
h.holder = heldBy(h.previous);
h.won = h.previous.state === 2;
h.live = true;
hook = h;
}
function sweep(players, end = false) {
const t = now(),
zoneId = timing();
for (const [p, s] of states) {
const present = !end && players && players.includes(p);
if (!present || !zoneId || t - s.last > GAP) close(s, Math.min(t, s.last + STEP));
if (s.rec) count(s.rec, p, t);
if (!present) states.delete(p);
}
}
function stop() {
if (!running) return;
for (const [rec, p] of eb._seen || []) count(rec, p);
sweep(null, true);
states.clear();
running = false;
unhook();
}
function start() {
running = true;
sync()
}
return {
get active() {
return active()
},
zone,
count,
sweep,
start,
stop,
sync,
reset() {
states.clear();
if (hook) {
hook.previous = snapshot(hook.owner);
hook.takeover = null;
hook.holder = heldBy(hook.previous);
hook.won = hook.previous.state === 2
}
},
compatible(v) {
compatible = !!v
},
status: () => ({
running: !!enabled(),
compatible,
eventsHooked: !!hook?.live,
endWatch: !!watching(),
tracking: states.size,
checks,
transitions,
simulationHz: 30
})
};
})();
function _stEndMode() {
const m = d.stats.kotcEnd;
return m === 1 || m === 2 ? m : 0
}
window.__ssbCoop = _stCoop;
window.__ssbMenuPoll(_stCoop.sync, 1000, {
inMatch: true
});
document.addEventListener("ssb:settings-change", () => {
if (d.stats.enabled && d.stats.kotc) _stCoop.start();
else {
_stCoop.stop();
_stCoop.sync();
if (eb.byName) _stSnap();
}
eS();
});
function _stCoopPatch(src) {
const marker = "/*ssb-coop-native-v1*/";
if (typeof src !== "string" || src.includes(marker)) return src;
const once = text => {
const at = src.indexOf(text);
return at >= 0 && src.indexOf(text, at + text.length) < 0 ? at : -1;
};
const escape = text => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const cellAnchor = ".zone||(this.capturing=!1,this.timers.kotc=0)";
const cellAt = once(cellAnchor);
const tickAt = once("vueApp.player.challengeTimer.played=Math.floor(");
if (cellAt < 0 || tickAt < 0) return src;
const cellBlock = src.slice(Math.max(0, cellAt - 600), cellAt + cellAnchor.length + 1);
const cell =
/\{([\w$]+)=Math\.floor\(this\.([\w$]+)\);var ([\w$]+)=Math\.floor\(this\.([\w$]+)\);([\w$]+)=Math\.floor\(this\.([\w$]+)\);if\(this\.([\w$]+)\)if\(([\w$]+)=([\w$]+)\(\1,\3,\5\)\)\8\.zone\|\|\(this\.capturing=!1,this\.timers\.kotc=0\);/
.exec(cellBlock);
if (!cell) return src;
const tail = /\},([\w$]+)\.prototype\.tryToClimbLadder=function\(/.exec(src.slice(cellAt, cellAt + 1800));
if (!tail) return src;
const owner = tail[1],
playing = cell[7];
if (once("}," + owner + ".prototype.tryToClimbLadder=function(") < 0) return src;
const ownerMove = owner + ".prototype.move=function(";
const moveAt = once(ownerMove);
if (moveAt < 0 || moveAt >= cellAt || cellAt - moveAt > 6000) return src;
const tickText = src.slice(tickAt, tickAt + 700);
if (!/for\([\w$]+\.update\(\);[\w$]+<[\w$]+;\)\{if\([\w$]+\+=33\.333333333333336,/.test(src.slice(Math.max(0,
tickAt - 800), tickAt))) return src;
const tick =
/^vueApp\.player\.challengeTimer\.played=Math\.floor\(([\w$]+)\.timers\.played\/30\)\)\),\1\.([\w$]+)&&\(\1\.([\w$]+)\.([\w$]+)\(\),\1\.([\w$]+)\(\)\)\)\}/
.exec(tickText);
if (!tick || tick[2] !== playing || once(tick[0]) !== tickAt) return src;
const removeHead = owner + ".prototype.removeFromPlay=async function(){";
const removeAt = once(removeHead);
if (removeAt < 0) return src;
const removeBody = new RegExp("^this\\.ksRemoveFromPlay\\(\\),this\\." + escape(playing) + "=!1,");
if (!removeBody.test(src.slice(removeAt + removeHead.length, removeAt + removeHead.length + 180))) return src;
const player = tick[1];
const lookup = cell[9] + "(Math.floor(" + player + "." + cell[2] + "),Math.floor(" + player + "." + cell[4] +
"+.31),Math.floor(" + player + "." + cell[6] + "))";
const observe = ";try{var _ssbCoopApi=window.__ssbCoop;if(" + player + "&&" + player + "." + playing +
"&&_ssbCoopApi&&_ssbCoopApi.active&&typeof _ssbCoopApi.zone===\"function\"){var _ssbCoopCell=" + lookup +
";_ssbCoopApi.zone(" + player + ",_ssbCoopCell?_ssbCoopCell.zone:0)}}catch(_ssbCoopErr){}";
const flush =
"try{if(window.__ssbCoop&&typeof window.__ssbCoop.zone===\"function\")window.__ssbCoop.zone(this,0)}catch(_ssbCoopErr){}";
const edits = [{
at: tickAt,
length: tick[0].length,
text: tick[0].slice(0, -1) + observe + "}"
}, {
at: removeAt,
length: removeHead.length,
text: removeHead + marker + flush
}].sort((a, b) => b.at - a.at);
let out = src;
for (const edit of edits) out = out.slice(0, edit.at) + edit.text + out.slice(edit.at + edit.length);
return out;
}
window.__ssbPatches.add("stats:coop-time", src => {
const out = _stCoopPatch(src);
_stCoop.compatible(out !== src);
return out;
});
function _stCount(rec, c) {
if (!c || !c.stats) return;
_stCoop.count(rec, c);
let u = 0 | c.stats.kills,
f = 0 | c.stats.deaths,
tk = 0 | c.totalKills,
sk = 0 | c.__ssbSkippedKills,
fresh = undefined === c
.__ssbHudSkipsCounted;
let _gd = u - rec._lastK;
if (fresh && _gd > 0) _gd = Math.max(0, _gd - (rec._skL |
0
));
let _ud = rec._lastTK == null ? 0 : tk - rec._lastTK;
if ((_ud < 0 || _ud > 30)) _ud = 0;
let _ka = Math.max(_gd > 0 ? _gd : 0, _ud);
if (_ka > 0) rec.kills += _ka;
else if (u < rec._lastK && rec._q) rec.kills = u;
if (!fresh && (u < rec._lastK || (c.team || 0) !== (rec.team || 0))) rec._skL = 0;
let _died = f > rec._lastD;
if (_died) {
rec.deaths += f - rec._lastD;
rec._skL = 0;
} else if (f < rec._lastD && rec._q) rec.deaths =
f;
let _sd = sk - (0 | c.__ssbHudSkipsCounted);
if (_sd > 0) {
rec.kills += _sd;
rec._skL = (rec._skL | 0) + _sd;
}
c.__ssbHudSkipsCounted =
sk;
if (rec._q && !fresh && (_ka > 0 || _sd > 0 || _died)) rec._q = 0;
rec._lastK = u;
rec._lastD = f;
rec._lastTK = tk;
}
function _stFlush() {
try {
if (!d.stats.enabled || !eb._seen || !eb._seen.length) return;
for (let [rec, c] of eb._seen) _stCount(rec, c);
_stCoop.sweep(window.players, !_stInGame());
_stSnap()
} catch (e) {
window.__ssbErr("stats.flush", e)
}
}
function _stSnap() {
if (!eb._snapMap) eb._snapMap = Object.create(null);
eb.snapshot = Object.keys(eb.byName).map(nm => {
let o = eb.byName[nm],
s = eb._snapMap[nm] || (eb._snapMap[nm] = {
id: eb._coopNextId = (eb._coopNextId || 0) + 1
});
s.name = o.name;
s.team = o.team;
s.isMe = o.isMe;
s.kills = o.kills;
s.deaths = o.deaths;
s
.coopMs = o.coopMs;
s.coopCaptures = o.coopCaptures;
s.coopTakeovers = o.coopTakeovers;
return s;
})
}
function _stLastSave() {
_stFlush();
_ssbSaveStats(1);
}
window.addEventListener("beforeunload", _stLastSave);
window.addEventListener("pagehide", _stLastSave);
document
.addEventListener("visibilitychange", () => {
if (document.visibilityState === "hidden") _stLastSave();
});
function _stInGame() {
try {
let x = window.extern;
if (x && typeof x.inGame == "boolean") return x.inGame;
let g = (window.vueApp?.$data || window.vueApp)?.game;
if (g && typeof g.on == "boolean") return g.on
} catch (x) {
window.__ssbErr("stats.inGame", x)
}
return true
}
function ew() {
if (!d.stats.enabled || document.hidden) return;
(function() {
if (!eb.kotcScore) eb.kotcScore = {
1: 0,
2: 0
};
let rd = t => {
let ids = t === 1 ? ["captureScoreBlue", "teamScoreNum1"] : ["captureScoreRed",
"teamScoreNum2"
];
for (let id of ids) {
let n = document.getElementById(id);
if (n) {
let v = parseInt((n.textContent || "").trim(), 10);
if (Number.isFinite(v)) return v
}
}
return 0
};
let b = rd(1),
r = rd(2);
if (b + r > 0) {
eb.kotcScore[1] = b;
eb.kotcScore[2] = r;
}
})();
let e = window.players,
t = !!document.pointerLockElement,
_pl = _stInGame(),
o = _pl && !!(e && e.some(e => e));
if (o) {
eb._lastEmptyN = eb._emptyN || 0;
eb._emptyN = 0;
} else eb._emptyN = (eb._emptyN || 0) + 1;
if (eb._prevHadPlayers && !o) {
eb._readyForReset =
true;
if (!_pl && eb.matchStartMs) {
eb.matchEndMs = Date.now();
eb.inMatch = false;
eb.hadLock = false;
eb._prevHadPlayers = false;
_stFlush();
_ssbSaveStats(1);
return
}
}
if (o) {
if (!(document.pointerLockElement && eb.matchStartMs && eb.inMatch && !eb._readyForReset)) {
let n = ex(),
i = ev(),
gc = window.__ssbGameCode || "";
if (!eb.matchStartMs || eb.gameCode !== gc || eb._readyForReset) {
let _chg0 = eb.gameCode !== gc,
_chg = _chg0 || (eb._readyForReset && eb.matchEndMs && Date.now() - eb.matchEndMs > 3e5) || (eb
._readyForReset && (eb._lastEmptyN || 0) >= 2 && eb.map && n && eb.map !== n),
_rst = _chg0 && gc && _ssbRestoreStats(gc, n);
if (window.__ssbDlog) window.__ssbDlog("reset-branch chg0=" + _chg0 + " chg=" + _chg + " rst=" + !!
_rst + " gc=" + gc + " map=" + n + " emptyN=" + (eb._lastEmptyN || 0));
eb.matchEndMs = 0;
eb.inMatch = true;
eb.hadLock = false;
eb.userClosed = false;
if (_chg && !_rst) {
eb
.matchStartMs = Date.now();
eb.byName = Object.create(null);
eb._snapMap = Object.create(
null);
eb._seen = [];
eb.everSeenTeams = false;
eb.mode = "";
eb._modeTs = 0;
eb
.kotcScore = {
1: 0,
2: 0
};
eb._seedQ = Date.now();
eb._synth = 0;
} else {
if (!eb.matchStartMs) eb.matchStartMs = Date
.now();
}
eb._readyForReset = false;
eb.gameCode = gc;
eb.map = n;
eb.server = i;
eb.mode = e0();
}
}
if (t) {
eb.inMatch = true;
eb.hadLock = true;
eb.matchEndMs = 0;
} else {
if (eb.hadLock) {
eb.matchEndMs = Date.now();
eb
.inMatch = false;
eb.hadLock = false;
}
}
}
if (eb._prevHadPlayers = o, eb.inMatch) {
let a = e0();
if (a) {
let r = {
king: 3,
ctf: 2,
team: 1,
ffa: 0
};
if ((r[a] || 0) >= (r[eb.mode] || 0)) eb.mode = a;
}
if (!eb.map) eb.map = ex();
if (!eb.server) eb.server = ev();
}
if (e && _pl) {
if (!eb.map) eb.map = ex();
if (!eb.server) eb.server = ev();
if (!eb.byName) eb.byName = Object.create(null);
if (eb._seedQ && (document.pointerLockElement || Date.now() - eb._seedQ > 6e4)) eb._seedQ = 0;
let _dbg = window.__ssbStatsDebug ?? (window.__ssbStatsDebug = (() => {
try {
return localStorage.getItem("tp-statsDebug") === "1" ? 1 : 0
} catch (_e) {
return 0
}
})()),
_dlog = _dbg ? ((...a) => {
let L = window.__ssbStatsLog || (window.__ssbStatsLog = []);
L.push(a.join(" "));
if (L.length > 400) L.splice(0, 200);
console.log("[SSB-STATS]", ...a)
}) : (() => {});
window.__ssbDlog = _dbg ? _dlog :
null;
for (let [_sr, _sc] of eb._seen || []) {
if (!e.includes(_sc)) _stCount(_sr, _sc);
}
let _presentKeys = new Set(),
_rows = [];
for (let l = 0; l < e.length; l++) {
let c = e[l];
if (!c || !c.stats) continue;
let m = c.name || c.safeName || c.lw || "Player " + l,
h = c.team || 0;
if ((h === 1 || h === 2)) eb.everSeenTeams = true;
let u = 0 | c.stats.kills,
f = 0 | c.stats.deaths,
tk = 0 | c.totalKills;
let _fk = m + String.fromCharCode(0) + l,
_bk = eb.byName[m],
_key;
if (_bk && _bk._slot === l) _key = m;
else if (eb.byName[_fk]) _key = _fk;
else if (_bk) {
let _ow = e[_bk._slot];
_key = _ow && _ow.stats && (_ow.name || _ow.safeName || _ow.lw || "Player " + _bk._slot) === m ?
_fk : m
} else _key = m;
_presentKeys.add(_key);
let rec = eb.byName[_key];
_rows.push([_key, rec, l, u, f, h, m, c, _fk, tk])
}
let _used = new Set(),
_seenNow = [];
for (let _ri = 0; _ri < _rows.length; _ri++) {
let [_key, rec, l, u, f, h, m, c, _fk, tk] = _rows[_ri];
if (rec && _used.has(rec)) rec = undefined;
if (!rec) {
let _b2 = eb.byName[m];
if (_b2 && !_used.has(_b2) && _b2._slot === l) {
rec = _b2;
_key = m;
} else if (eb.byName[_fk] && !_used.has(eb.byName[_fk])) {
rec = eb.byName[_fk];
_key = _fk;
} else if (_b2 && (_used.has(_b2) || (() => {
let _o2 = e[_b2._slot];
return _o2 && _o2.stats && (_o2.name || _o2.safeName || _o2.lw || "Player " + _b2
._slot) === m
})())) _key = _fk;
else if (_b2) {
rec = _b2;
_key = m;
}
_presentKeys.add(_key)
}
if (!rec) {
_dlog("new " + m + " slot" + l + " seed " + u + "/" + f + (eb._seedQ ? " Q" : ""));
rec = eb
.byName[_key] = {
name: m,
team: h,
isMe: false,
kills: u,
deaths: f,
_lastK: u,
_lastD: f,
_lastTK: tk,
_slot: l,
_q: eb._seedQ ? 1 : 0
};
}
_used.add(rec);
_seenNow.push([rec, c]);
_stCount(rec, c);
if (rec._ret) rec._ret = 0;
if (rec._q && !eb._seedQ) rec._q = 0;
rec._slot = l;
rec.team = h;
rec.isMe = (typeof window.myPlayerIdx == "number" && l === window
.myPlayerIdx) || (window.vueApp && window.vueApp.game && l === window.vueApp.game
.myPlayerIdx) || c.isLocalPlayer || c.me || c.isMe || (c.name && window.vueApp && window.vueApp
.game && c.name === window.vueApp.game.myName) || rec.isMe;
if (rec.isMe && eb._meRec !== rec) {
if (eb._meRec && eb._meRec.isMe) eb._meRec.isMe = false;
eb._meRec = rec;
_dlog("me-row -> " + rec.name + " slot" + l)
}
let _dv = rec.kills < u ? rec.kills - u : 0;
if (_dv !== rec._dvK) {
rec._dvK = _dv;
if (_dv) _dlog("diverge " + rec.name + " mod=" + rec.kills + " raw=" + u + " slot" + l);
}
}
eb._seen = _seenNow;
_stCoop.sweep(_pl ? e : null);
let _nowTs = Date.now();
for (let _nm of Object.keys(eb.byName)) {
let _r = eb.byName[_nm];
if (_presentKeys.has(_nm)) {
_r._absentTs = 0;
continue
}
if (!_r._absentTs) _r._absentTs = _nowTs;
if ((_r._q && !_r.coopMs && !_r.coopCaptures && !_r.coopTakeovers || !_r.kills && !_r.deaths && !_r
.coopMs && !_r.coopCaptures && !_r.coopTakeovers) && _nowTs - _r._absentTs > 4e3) {
_dlog(
"prune " + _nm);
delete eb.byName[_nm];
if (eb._snapMap) delete eb._snapMap[_nm];
}
}
_stSnap();
eS();
}
}
window.__ssbMenuPoll(ew, 1e3, {
inMatch: true
});
window.__ssbMenuPoll(_ssbSaveStats, 3e3, {
inMatch: true
});
let ek = null;
function eS() {
if (!d.stats.enabled || !d.stats.pinned) {
if (ek) {
ek.remove();
ek = null;
}
return
}
if (document.pointerLockElement) return;
let e = i(".pause-game-weapon-select");
if (!ek) {
ek = document.createElement("div");
ek.id = "ssb-pinned-stats";
ek.style.cssText =
"background:var(--ss-blue1, linear-gradient(180deg, #99def2 0%, #b5e8f7 100%));border:5px solid var(--ss-blue4, #1b6e82);border-radius:12px;margin-bottom:15px;width:100%;box-sizing:border-box;display:flex;flex-direction:column;overflow:hidden;color:#fff;";
let t = document.createElement("div");
t.className = "title";
t.style.cssText =
"font-family:'Lilita One', var(--ss-font-secondary), cursive, sans-serif;background:var(--ss-blue3, #04a2d1);padding:10px;text-align:center;font-size:18px;letter-spacing:1px;text-shadow:0 2px 3px rgba(0,0,0,0.3);text-transform:uppercase;margin:0;";
t.textContent = "MATCH STATS";
ek.appendChild(t);
let cont = document.createElement("div");
cont.id = "ssb-pinned-stats-content";
cont.style.cssText =
"padding:14px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;justify-items:center;align-items:center;";
const _mk = (lab, col) => {
const w = document.createElement("div");
w.style.cssText = "display:flex;min-width:0;max-width:100%;flex-direction:column;align-items:center;";
const ll = document.createElement("span");
ll.style.cssText =
"font-size:12px;color:var(--ss-blue4, #1b6e82);font-family:'Lilita One', var(--ss-font-secondary), cursive, sans-serif;font-weight:900;text-transform:uppercase;";
ll.textContent = lab;
const vv = document.createElement("span");
vv.className = "title";
vv.style.cssText =
"font-family:'Lilita One', var(--ss-font-secondary), cursive, sans-serif;font-size:24px;color:" +
col + ";text-shadow:0 3px 5px rgba(0,0,0,0.3);margin:0;";
vv.textContent = "0";
w.appendChild(ll);
w.appendChild(vv);
return [w, vv]
};
const _kc = _mk("Kills", "#fff"),
_dc = _mk("Deaths", "#ff5a5a"),
_rc = _mk("KDR", "var(--ss-yolk, #ffc900)"),
_cc = _mk("Coop", "#fff"),
_cap = _mk("Captures", "#fff"),
_take = _mk("Takeovers", "#fff");
_cc[0].style.display = "none";
cont.appendChild(_kc[0]);
cont.appendChild(_dc[0]);
cont.appendChild(_rc[0]);
cont.appendChild(_cc[0]);
cont.appendChild(_cap[0]);
cont.appendChild(_take[0]);
ek._kV = _kc[1];
ek._dV = _dc[1];
ek._rV = _rc[1];
ek._cV = _cc[1];
ek._cW = _cc[0];
ek._cap = _cap;
ek._take = _take;
ek.appendChild(cont);
if (e) {
let n = e.closest(".ss_box") || e.closest(".pause-game-container") || e.parentNode;
if (n && n.parentNode) n.parentNode.insertBefore(ek, n);
}
} else if (e) {
let i = e.closest(".ss_box") || e.closest(".pause-game-container") || e.parentNode;
if (i && i.parentNode && ek.parentNode !== i.parentNode) i.parentNode.insertBefore(ek, i);
}
ek.style.display = e ? "flex" : "none";
let snap = eb.snapshot || [],
me = snap.find(e => e.isMe) || {
kills: 0,
deaths: 0
};
let _kS = String(me.kills || 0),
_dS = String(me.deaths || 0),
_rS = ((me.kills || 0) / Math.max(1, me.deaths || 0)).toFixed(2);
if (ek._kV && ek._kV.textContent !== _kS) ek._kV.textContent = _kS;
if (ek._dV && ek._dV.textContent !== _dS) ek._dV.textContent = _dS;
if (ek._rV && ek._rV.textContent !== _rS) ek._rV.textContent = _rS;
if (ek._cW) {
let king = eb.mode === "king" && d.stats.kotc;
ek._cW.style.display = king ? "flex" : "none";
for (const [field, pair] of [
["coopCaptures", ek._cap],
["coopTakeovers", ek._take]
]) {
pair[0].style.display = king ? "flex" : "none";
if (king) {
const text = _stKotcCount(me[field]);
if (pair[1].textContent !== text) pair[1].textContent = text;
}
}
if (king) {
let cs = _stCoopTime(me.coopMs);
if (ek._cV.textContent !== cs) ek._cV.textContent = cs;
}
}
}
function eC(e) {
return String(e).replace(/[&<>"']/g, e => ({
"&": "&amp;",
"<": "&lt;",
">": "&gt;",
'"': "&quot;",
"'": "&#39;"
})[e])
}
function eP(e) {
if (!e || e < 1) return "0s";
let t = Math.floor(e / 60),
o = e % 60;
return t ? `${t}m ${o}s` : `${o}s`
}
function eSN(e) {
if (!e) return "-";
let k = String(e).toLowerCase().trim();
try {
let n = eB.find(x => x.value === k);
if (n && n.text && n.text !== n.value) return n.text
} catch (x) {}
let t = {
singapore: "Singapore",
uswest: "US West",
sydney: "Sydney",
uscentral: "US Central",
useast: "US East",
germany: "Germany",
santiago: "Chile"
} [k];
return t || e
}
function _stKdr(k, dd) {
return ((+k || 0) / Math.max(1, +dd || 0)).toFixed(2)
}
function _stMode(m) {
return {
ctf: "Capture the Spatula",
king: "King of the Coop",
team: "Teams",
ffa: "Free for All"
} [m] || m || ""
}
function _stWhen(ms, timeOnly) {
if (!ms) return "-";
let s = new Date(ms),
p = n => String(n).padStart(2, "0"),
t = p(s.getHours()) + ":" + p(s.getMinutes());
return timeOnly ? t : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][s
.getMonth()
] + " " + s.getDate() + (s.getFullYear() !== new Date().getFullYear() ? ", " + s.getFullYear() : "") +
" · " + t
}
function _stLen(h) {
return h && h.startMs && h.endMs ? eP(Math.floor((h.endMs - h.startMs) / 1e3)) : ""
}
function _stMe() {
return (eb.snapshot || []).find(p => p && p.isMe) || {
kills: 0,
deaths: 0
}
}
function _stDur() {
return eP(Math.floor(((eb.matchEndMs || Date.now()) - eb.matchStartMs) / 1e3))
}
function _stLive() {
let p = window.players;
return !!eb.matchStartMs && !eb._readyForReset && _stInGame() && !!(p && p.some && p.some(x => x))
}
function _stCoopTime(ms) {
if (!Number.isFinite(ms) || ms < 0) return "–";
let sec = Math.floor(Math.min(ms, Number.MAX_SAFE_INTEGER) / 1e3),
h = Math.floor(sec / 3600),
m = Math.floor(sec % 3600 / 60),
ss = String(sec % 60).padStart(2, "0");
return h ? h + ":" + String(m).padStart(2, "0") + ":" + ss : String(m).padStart(2, "0") + ":" + ss;
}
function _stKotcSaved(p) {
const out = {};
for (const key of ["coopMs", "coopCaptures", "coopTakeovers"])
if (Number.isFinite(p[key]) && p[key] >= 0) out[key] = Math.floor(p[key]);
return out;
}
function _stKotcCount(n) {
return Number.isFinite(n) && n >= 0 ? String(Math.floor(n)) : "–"
}
function eL(title, cls, players, mode, team) {
const king = mode === "king",
coop = king && d.stats.kotc;
const top = d.stats.killBars ? players.reduce((n, p) => Math.max(n, Number.isFinite(+p.kills) ? +p.kills : 0), 0) : 0;
const stat = (key, text, cls = "") => `<td data-stat="${key}"${cls ? ' class="' + cls + '"' : ""}>${text}</td>`;
const rows = players.map((p, i) =>
`<tr class="${p.isMe && d.stats.highlightMe !== false ? "ssb-me " : ""}${d.stats.killBars ? "ssb-kill-row" : ""}"${d.stats.killBars ? ' style="--ssb-kill:' + (top && Number.isFinite(+p.kills) ? Math.max(0, Math.min(100, +p.kills / top * 100)).toFixed(2) : 0) + '%"' : ""}${Number.isFinite(p.id) ? ' data-player-id="' + p.id + '"' : ""}><td class="ssb-rank">${i + 1}</td><td class="ssb-name">${eC(p.name || "Player")}</td>${stat("kills", +p.kills || 0)}${stat("deaths", +p.deaths || 0)}${stat("kdr", _stKdr(p.kills, p.deaths))}${coop ? stat("coopMs", _stCoopTime(p.coopMs), "ssb-coop-time") + stat("coopCaptures", _stKotcCount(p.coopCaptures)) + stat("coopTakeovers", _stKotcCount(p.coopTakeovers)) : ""}</tr>`
).join("") || `<tr><td class="ssb-none" colspan="${coop ? 8 : 5}">No players</td></tr>`;
const score = king && (team === 1 || team === 2) ?
`<span class="ssb-team-score">Score ${+(eb.kotcScore && eb.kotcScore[team]) || 0}</span>` : "";
return `<section class="ssb-team ${cls}"><div class="ssb-team-hdr"><span class="ssb-team-name">${title}</span><span class="ssb-team-info">${players.length} ${players.length === 1 ? "player" : "players"}</span>${score}</div><table><colgroup><col class="ssb-c-rank"><col><col class="ssb-c-n"><col class="ssb-c-n"><col class="ssb-c-kdr">${coop ? '<col class="ssb-c-coop"><col class="ssb-c-n"><col class="ssb-c-n">' : ""}</colgroup><thead><tr><th>#</th><th>Player</th><th>K</th><th>D</th><th>KDR</th>${coop ? '<th scope="col" title="Time alive in the active coop">Coop</th><th scope="col" title="Captures: in the coop when your team scores">Cap</th><th scope="col" title="Takeovers: in the coop when your team completes a takeover">Take</th>' : ""}</tr></thead><tbody>${rows}</tbody></table></section>`;
}
function _stTeams(list, mode, empty) {
let t = {
1: [],
2: [],
0: []
};
(list || []).forEach(p => {
if (p && typeof p == "object") t[p.team === 1 || p.team === 2 ? p.team : 0].push(p);
});
Object.values(t).forEach(a => a.sort((x, y) => (+y.kills || 0) - (+x.kills || 0) || (+x.deaths || 0) - (+y
.deaths || 0)));
let teams = t[1].length || t[2].length,
out = teams ? eL("Blue Team", "ssb-team-blue", t[1], mode, 1) + eL("Red Team", "ssb-team-red", t[2], mode,
2) : "";
if (t[0].length) out += eL(teams ? "Other Players" : "Players", "ssb-team-ffa", t[0], mode, 0);
return out ? `<div class="ssb-cols${mode === "king" && d.stats.kotc ? " ssb-coop-cols" : ""}">${out}</div>` :
`<div class="ssb-empty">${empty}</div>`
}
function _stIcoBtn(act, label, cls) {
let ico = {
back: '<path d="M19 12H5M12 19l-7-7 7-7"/>',
copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
reset: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
close: '<path d="M18 6L6 18M6 6l12 12"/>',
clearhist: '<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'
};
return `<button type="button" class="ssb-btn ssb-ico${cls ? " " + cls : ""}" data-act="${act}" data-tooltip="${label}" aria-label="${label}"><svg viewBox="0 0 24 24" aria-hidden="true">${ico[act === "backhist" ? "back" : act]}</svg></button>`
}
function _stChips(strong, rest) {
return strong.filter(Boolean).map(c => `<span class="ssb-chip ssb-chip-strong">${c}</span>`).join("") + rest
.filter(Boolean).map(c => `<span class="ssb-chip">${c}</span>`).join("")
}
function _stDate(ms) {
let s = new Date(ms),
p = n => String(n).padStart(2, "0");
return s.getFullYear() + "-" + p(s.getMonth() + 1) + "-" + p(s.getDate())
}
function _stShell(view, left, tools, body, chips) {
return `<div id="ssb-stats-panel" class="ssb-v-${view}"><div class="ssb-head"><div class="ssb-chips">${chips || ""}</div><div class="ssb-actions ssb-noimg">${tools}</div></div><div class="ssb-body">${body}</div></div>`
}
function _stWire(ov, view, label, focus, match) {
_ssbStatsOpen(ov, label, focus);
let on = (sel, fn) => {
let b = ov.querySelector(sel);
if (b) b.onclick = fn;
};
on('[data-act="close"]', () => {
ef("ui_toggletab");
e1();
});
on('[data-act="backhist"]', () => {
let k = eb._histKey;
ef("ui_toggletab");
eHIST(view === "live" ? ".ssb-hr-live" : k ? '.ssb-hist-row[data-code="' + CSS
.escape(k[0]) + '"][data-start="' + CSS.escape(k[1]) + '"]' : null, eb._histTop);
});
on('[data-act="copy"]', () => eA());
on('[data-act="download"]', () => e4());
_stWireRename(ov, match || (view === "live" ? {code: _stLiveCode(), startMs: eb.matchStartMs} : null));
}
function _stLiveCode() {
return eb.gameCode || eb._synth || (eb.matchStartMs ? "local-" + eb.matchStartMs : "");
}
function _stRoomCode(code) {
return code && !/^local-\d+$/.test(code) ? code : "";
}
function _stSavedMatch(code, startMs) {
return _ssbHist().find(h => h && h.code === code && Math.abs((h.startMs || 0) - (startMs || 0)) < 15e3);
}
function _stNameChip(h) {
return `<button type="button" class="ssb-match-name" data-act="rename-match" aria-label="Rename match" title="Rename match">${eC(h.label || h.code || "Match")}</button>`;
}
function _stWireRename(ov, key) {
const button = ov.querySelector('[data-act="rename-match"]');
if (!button || !key) return;
button.onclick = () => {
if (document.pointerLockElement) return;
let h = _stSavedMatch(key.code, key.startMs);
if (!h && key.code === _stLiveCode() && key.startMs === eb.matchStartMs) {
_ssbSaveStats(1);
h = _stSavedMatch(key.code, key.startMs);
}
if (!h) {
window.__ssbUI.toast("There's no saved match to rename yet.");
return;
}
const input = document.createElement("input");
input.type = "text";
input.className = "ssb-name-input";
input.maxLength = 60;
input.value = h.label || h.code || "";
input.setAttribute("aria-label", "Match name; leave blank to use the code");
let done = false;
const finish = (save, focus) => {
if (done) return;
done = true;
const entry = _stSavedMatch(key.code, key.startMs);
if (save && entry) {
const name = input.value.trim().slice(0, 60);
if (name) entry.label = name;
else delete entry.label;
_ssbHistSet(_ssbHist());
}
button.textContent = entry && entry.label || key.code || "Match";
input.replaceWith(button);
let codeChip = ov.querySelector("[data-match-code]")?.closest(".ssb-chip");
const roomCode = _stRoomCode(key.code);
if (entry?.label && roomCode) {
if (!codeChip) {
codeChip = document.createElement("span");
codeChip.className = "ssb-chip ssb-chip-strong";
const code = document.createElement("span");
code.setAttribute("data-match-code", "");
codeChip.appendChild(code);
button.closest(".ssb-chip")?.after(codeChip);
}
codeChip.firstElementChild.textContent = roomCode;
} else codeChip?.remove();
if (focus && button.isConnected) button.focus({preventScroll: true});
};
input.addEventListener("keydown", e => {
e.stopPropagation();
if (e.isComposing) return;
if (e.key === "Enter" || e.key === "Escape") {
e.preventDefault();
window.__ssbEatKeyUp(e.key);
finish(e.key === "Enter", true);
}
});
input.addEventListener("keyup", e => e.stopPropagation());
input.addEventListener("blur", () => finish(true, false));
button.replaceWith(input);
input.focus({preventScroll: true});
input.select();
};
}
function _stLiveSignature() {
return JSON.stringify([eb.mode, d.stats.kotc, d.stats.killBars, d.stats.highlightMe, (eb.snapshot || []).map(p => [p.id, p.name, p.team, p.isMe, p
.kills, p.deaths
])]);
}
function _stTick() {
if (e8) clearInterval(e8);
e8 = setInterval(() => {
if (document.hidden) return;
const overlay = document.getElementById("ssb-stats-overlay");
if (!overlay?.classList.contains("open")) {
clearInterval(e8);
e8 = null;
return
}
if (!eb.matchStartMs) return;
const live = overlay.querySelector(".ssb-v-live");
if (live) {
_stFlush();
const signature = _stLiveSignature();
if (signature !== eb._liveSig) {
live.querySelector(".ssb-body").innerHTML = _stTeams(eb.snapshot, eb.mode,
"No player data yet.");
eb._liveSig = signature;
}
const rows = new Map((eb.snapshot || []).map(p => [p.id, p]));
live.querySelectorAll("tr[data-player-id]").forEach(row => {
const p = rows.get(+row.dataset.playerId);
if (!p) return;
row.querySelectorAll("[data-stat]").forEach(cell => {
const key = cell.dataset.stat;
const text = key === "coopMs" ? _stCoopTime(p[key]) : key ===
"coopCaptures" || key === "coopTakeovers" ? _stKotcCount(p[key]) :
key === "kdr" ? _stKdr(p.kills, p.deaths) : String(+p[key] || 0);
if (cell.textContent !== text) cell.textContent = text;
});
});
live.querySelectorAll(".ssb-team-score").forEach(cell => {
const team = cell.closest(".ssb-team-blue") ? 1 : 2,
text = "Score " + (+eb.kotcScore?.[team] || 0);
if (cell.textContent !== text) cell.textContent = text;
});
}
overlay.querySelectorAll(".ssb-dur").forEach(cell => {
const text = _stDur();
if (cell.textContent !== text) cell.textContent = text;
});
const kd = overlay.querySelector(".ssb-live-kd");
if (kd?.children.length > 1) {
const me = _stMe(),
values = [(+me.kills || 0) + " / " + (+me.deaths || 0), "KDR " + _stKdr(me.kills, me
.deaths)];
values.forEach((text, i) => {
if (kd.children[i].textContent !== text) kd.children[i].textContent = text;
});
}
}, 1000);
}
function _stOverlay() {
_stCss();
let ov = document.getElementById("ssb-stats-overlay");
if (ov) return ov;
ov = document.createElement("div");
ov.id = "ssb-stats-overlay";
let eat = false,
downOv = false;
ov.addEventListener("pointerdown", ev => {
downOv = ev.target === ov;
let dd = ov.querySelector(".ssb-dd.ssb-open");
eat = !!dd && !dd.contains(ev.target);
if (eat) _stDdClose(dd, true);
}, true);
ov.addEventListener("pointerup", () => {
if (eat) setTimeout(() => {
eat = false
}, 0);
}, true);
ov.addEventListener("click", ev => {
if (eat) {
eat = false;
ev.preventDefault();
ev.stopPropagation();
return
}
if (ev.target === ov && downOv) {
ef("ui_toggletab");
e1();
}
}, true);
ov.addEventListener("keydown", ev => {
if (ev.key !== "Escape") return;
ev.preventDefault();
ev.stopPropagation();
let dd = ov.querySelector(".ssb-dd.ssb-open");
if (dd) _stDdClose(dd, true, true);
else {
ef("ui_toggletab");
e1();
}
});
document.body.appendChild(ov);
return ov;
}
function _stCss() {
if (document.getElementById("ssb-stats-style")) return;
let t = document.createElement("style");
t.id = "ssb-stats-style";
t.textContent = `#ssb-stats-overlay { position:fixed; inset:0; z-index:2147483646; display:none; align-items:center; justify-content:center; padding:12px; box-sizing:border-box; background:rgba(7,39,52,0.55); font-family:"Nunito",system-ui,sans-serif; }
#ssb-stats-overlay.open { display:flex; }
#ssb-stats-panel {
--st-ink:#0C576F; --st-sub:rgba(12,87,111,0.74); --st-glass:rgba(255,255,255,0.26); --st-glass-hi:rgba(255,255,255,0.44); --st-edge:rgba(255,255,255,0.55);
--st-line:rgba(12,87,111,0.12); --st-field:rgba(255,255,255,0.8); --st-orange:linear-gradient(180deg,#ffb23f,#ff961d); --st-orange-edge:#cf700c; --st-red:#c42020;
--st-lift:0 10px 26px rgba(8,62,84,0.16); --st-grid:minmax(0,1fr) 172px 100px;
position:relative; box-sizing:border-box; display:flex; flex-direction:column; width:720px; max-height:min(640px, calc(76vh / var(--ssb-ui-scale, 1))); margin:0; padding:14px 22px 22px;
border:3px solid #0C576F; border-radius:12px; background:linear-gradient(#1192bc 0%, #3ea2c7 20%, #5bb2d2 42%, #75c3de 70%, #8dd3ea 100%);
color:var(--st-ink); box-shadow:0 18px 50px rgba(0,0,0,0.4); font-family:"Nunito",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
font-size:14px; font-weight:700; line-height:1.3; text-align:left; letter-spacing:normal; word-spacing:normal; font-variant-ligatures:none;
}
/* The game gives every element font-size:1.95vh; inside the panel only our own sizes count. */
#ssb-stats-panel * { box-sizing:border-box; font-size:inherit; letter-spacing:normal !important; word-spacing:normal !important; }
#ssb-stats-panel:focus { outline:none; }
#ssb-stats-panel :is(button, [tabindex="0"]):focus-visible { outline:3px solid var(--ssb-focus, #0C576F); outline-offset:2px; }
#ssb-stats-panel :is(.ssb-btn, .ssb-link, .ssb-dd-btn) { margin:0; font-family:inherit; line-height:1.2; text-transform:none; text-shadow:none; cursor:pointer; }
#ssb-stats-panel.ssb-in { animation:ssb-st-in 0.2s ease-out both; }
@keyframes ssb-st-in { from { opacity:0; transform:translateY(8px) scale(0.985); } to { opacity:1; transform:none; } }

/* Tabs and buttons */
#ssb-stats-panel .ssb-actions { display:flex; flex-wrap:wrap; gap:8px; margin-left:auto; }
#ssb-stats-panel .ssb-head { flex:none; display:flex; align-items:center; gap:10px 16px; margin:0 0 14px; padding:0 0 14px; border-bottom:1px solid var(--st-edge); }
#ssb-stats-panel .ssb-head .ssb-actions { flex:none; flex-wrap:nowrap; gap:6px; }
#ssb-stats-panel .ssb-chips { flex:1 1 auto; min-width:0; display:flex; flex-wrap:wrap; align-items:center; gap:5px; }
#ssb-stats-panel .ssb-chip { display:inline-flex; align-items:center; height:28px; padding:0 10px; border:1px solid var(--st-edge); border-radius:999px; background:rgba(255,255,255,0.28); color:var(--st-sub); font-size:12px; font-weight:800; line-height:1; white-space:nowrap; }
#ssb-stats-panel .ssb-chip-strong { background:var(--st-field); color:var(--st-ink); font-weight:900; box-shadow:inset 0 1px 0 #fff; }
/* Individual matches grow to the header's natural width. Keep every chip on one row;
if the screen is narrower, scroll just the chips and leave the actions in view. */
#ssb-stats-panel:is(.ssb-v-match, .ssb-v-live) { width:max-content; min-width:min(720px, calc(96vw / var(--ssb-ui-scale, 1))) !important; max-width:calc(96vw / var(--ssb-ui-scale, 1)) !important; }
#ssb-stats-panel:is(.ssb-v-match, .ssb-v-live):has(.ssb-coop-cols) { width:max-content; min-width:min(1160px, calc(96vw / var(--ssb-ui-scale, 1))) !important; }
#ssb-stats-panel:is(.ssb-v-match, .ssb-v-live) .ssb-chips { flex-wrap:nowrap; overflow-x:auto; overflow-y:hidden; padding:3px; margin:-3px; }
#ssb-stats-panel:is(.ssb-v-match, .ssb-v-live) .ssb-chip { flex:none; }
#ssb-stats-panel .ssb-match-name { all:unset; font:inherit; color:inherit; cursor:text; max-width:300px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
#ssb-stats-panel .ssb-name-input { box-sizing:border-box; width:240px; max-width:100%; height:28px; border:1px solid var(--st-ink); border-radius:8px; padding:0 8px; background:var(--st-field); color:var(--st-ink); font:800 12px "Nunito",sans-serif; }
#ssb-stats-panel .ssb-ico { display:inline-flex; align-items:center; justify-content:center; width:32px; height:32px; padding:0; }
#ssb-stats-panel .ssb-ico svg { flex:none; width:16px !important; height:16px !important; font-size:16px !important; fill:none; stroke:currentColor; stroke-width:2.4; stroke-linecap:round; stroke-linejoin:round; }
#ssb-stats-panel { padding-top:18px; }
#ssb-stats-panel .ssb-head-name { margin-right:4px; font-size:16px !important; font-weight:900; color:var(--st-ink); white-space:nowrap; }
#ssb-stats-panel .ssb-fx { display:flex; gap:6px; margin-left:auto; }
#ssb-stats-panel .ssb-btn.ssb-sm { height:30px; padding:0 11px; font-size:12px; }
#ssb-stats-panel .ssb-btn { height:32px; padding:0 12px; border:1px solid var(--st-edge); border-radius:9px; background:var(--st-field); color:var(--st-ink); font-size:13px; font-weight:800; white-space:nowrap; box-shadow:0 2px 6px rgba(8,62,84,0.08); transition:background 0.15s, box-shadow 0.15s, transform 0.12s; }
#ssb-stats-panel .ssb-btn:hover { background:#fff; box-shadow:0 6px 14px rgba(8,62,84,0.14); }
#ssb-stats-panel .ssb-btn:active { transform:translateY(1px); }
#ssb-stats-panel .ssb-link { padding:2px 4px; border:none; background:none; color:var(--st-ink); font-size:13.5px; font-weight:800; text-decoration:underline; text-underline-offset:3px; text-decoration-color:rgba(12,87,111,0.35); white-space:nowrap; }
#ssb-stats-panel .ssb-link:hover { text-decoration-color:currentColor; }
#ssb-stats-panel .ssb-danger { color:var(--st-red); }
#ssb-stats-panel .ssb-link.ssb-danger { text-decoration-color:rgba(196,32,32,0.35); }
#ssb-stats-panel .ssb-link.ssb-danger:hover { text-decoration-color:currentColor; }

/* Content */
#ssb-stats-panel .ssb-body { flex:1 1 auto; min-height:0; display:flex; flex-direction:column; gap:14px; margin:0 -10px; padding:2px 10px 6px; overflow-y:auto; container-type:inline-size; }
#ssb-stats-panel :is(.ssb-body, .ssb-hist-list, .ssb-dd-list) { scrollbar-width:auto !important; scrollbar-color:auto !important; }
#ssb-stats-panel :is(.ssb-body, .ssb-hist-list, .ssb-dd-list)::-webkit-scrollbar { width:6px; height:6px; }
#ssb-stats-panel :is(.ssb-body, .ssb-hist-list, .ssb-dd-list)::-webkit-scrollbar-track { background:transparent; }
#ssb-stats-panel :is(.ssb-body, .ssb-hist-list, .ssb-dd-list)::-webkit-scrollbar-thumb { border-radius:999px; background:rgba(12,87,111,0.28); }
#ssb-stats-panel :is(.ssb-body, .ssb-hist-list, .ssb-dd-list)::-webkit-scrollbar-thumb:hover { background:rgba(12,87,111,0.5); }

/* Scoreboard */
#ssb-stats-panel .ssb-cols { display:grid; grid-template-columns:repeat(2, minmax(0,1fr)); align-items:start; gap:14px; }
#ssb-stats-panel:has(.ssb-coop-cols) { width:1160px; }
#ssb-stats-panel col.ssb-c-coop { width:68px; }
#ssb-stats-panel td.ssb-coop-time { white-space:nowrap; }
#ssb-stats-panel .ssb-team { --tc:var(--st-ink); --st-bar:rgba(12,87,111,0.18); min-width:0; overflow:hidden; border:1px solid var(--st-edge); border-radius:14px; background:var(--st-glass); box-shadow:inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 6px rgba(8,62,84,0.06); }
#ssb-stats-panel .ssb-team-blue { --tc:#0E7697; --st-bar:rgba(14,118,151,0.22); }
#ssb-stats-panel .ssb-team-red { --tc:#d82727; --st-bar:rgba(216,39,39,0.18); }
#ssb-stats-panel .ssb-team-ffa { grid-column:1 / -1; }
#ssb-stats-panel .ssb-team-hdr { display:flex; align-items:baseline; gap:10px; padding:12px 14px 10px; border-top:4px solid var(--tc); border-bottom:1px solid var(--st-line); background:rgba(255,255,255,0.24); }
#ssb-stats-panel .ssb-team-name { font-family:"Sigmar One",sans-serif; font-weight:normal; font-size:17px; line-height:1.2; text-transform:uppercase; color:var(--tc); }
#ssb-stats-panel .ssb-team-info { font-size:13px; font-weight:700; color:var(--st-sub); }
#ssb-stats-panel .ssb-team-score { margin-left:auto; font-size:15px; font-weight:900; color:var(--st-ink); }
#ssb-stats-panel table { width:100%; margin:0; border-collapse:separate; border-spacing:0; table-layout:fixed; }
#ssb-stats-panel col.ssb-c-rank { width:38px; }
#ssb-stats-panel col.ssb-c-n { width:46px; }
#ssb-stats-panel col.ssb-c-kdr { width:62px; }
#ssb-stats-panel .ssb-team-ffa col.ssb-c-n { width:84px; }
#ssb-stats-panel .ssb-team-ffa col.ssb-c-kdr { width:96px; }
#ssb-stats-panel th { padding:8px 6px 6px; background:none; font-size:11px; font-weight:800; letter-spacing:0.6px !important; text-transform:uppercase; color:var(--st-sub); text-align:center; }
#ssb-stats-panel td { padding:7px 6px; border-top:1px solid var(--st-line); background:none; font-size:14.5px; font-weight:700; color:var(--st-ink); text-align:center; font-variant-numeric:tabular-nums; }
#ssb-stats-panel :is(th, td):nth-child(2) { text-align:left; }
#ssb-stats-panel :is(th, td):first-child { padding-left:14px; text-align:left; }
#ssb-stats-panel :is(th, td):last-child { padding-right:14px; }
#ssb-stats-panel tbody tr:first-child td { border-top:none; }
#ssb-stats-panel td.ssb-rank { font-size:13px; color:var(--st-sub); }
#ssb-stats-panel td.ssb-name { font-weight:800; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
#ssb-stats-panel tr.ssb-kill-row { background:linear-gradient(90deg,var(--st-bar) var(--ssb-kill,0%),transparent var(--ssb-kill,0%)); }
#ssb-stats-panel tr.ssb-me td { box-shadow:inset 0 0 0 999px rgba(255,255,255,0.3); }
#ssb-stats-panel tr.ssb-me td.ssb-name { font-weight:900; }
#ssb-stats-panel td.ssb-none { padding:14px; color:var(--st-sub); text-align:center; }
#ssb-stats-panel .ssb-empty { flex:none; padding:30px 20px; border:1px dashed rgba(12,87,111,0.3); border-radius:14px; background:rgba(255,255,255,0.18); color:var(--st-sub); font-size:15px; font-weight:800; text-align:center; }

/* Match History */
#ssb-stats-panel.ssb-v-hist { height:min(600px, calc(76vh / var(--ssb-ui-scale, 1))); }
#ssb-stats-panel.ssb-v-hist .ssb-body { overflow:hidden; }
#ssb-stats-panel .ssb-filters { flex:none; position:relative; z-index:3; display:flex; flex-wrap:wrap; align-items:center; gap:10px; }
#ssb-stats-panel .ssb-dd { position:relative; }
#ssb-stats-panel .ssb-dd-btn { display:flex; align-items:center; gap:10px; min-width:200px; height:40px; padding:0 12px 0 14px; border:2px solid rgba(14,118,151,0.28); border-radius:12px; background:#fff; color:var(--st-ink); font-size:14.5px; font-weight:800; box-shadow:inset 0 2px 4px rgba(8,62,84,0.08); transition:border-color 0.15s, box-shadow 0.15s; }
#ssb-stats-panel .ssb-dd-btn:hover { border-color:rgba(14,118,151,0.5); }
#ssb-stats-panel .ssb-dd.ssb-open .ssb-dd-btn { border-color:#ff981f; box-shadow:0 0 0 4px rgba(255,152,31,0.22); }
#ssb-stats-panel .ssb-dd-val { flex:1; min-width:0; text-align:left; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
#ssb-stats-panel .ssb-dd-car { flex:none; width:16px; height:16px; fill:none; stroke:currentColor; stroke-width:3; stroke-linecap:round; stroke-linejoin:round; transition:transform 0.15s; }
#ssb-stats-panel .ssb-dd.ssb-open .ssb-dd-car { transform:rotate(180deg); }
#ssb-stats-panel .ssb-dd-list { display:none; position:absolute; top:calc(100% + 6px); left:0; z-index:5; min-width:100%; max-height:280px; overflow-y:auto; padding:5px; border:1px solid var(--st-edge); border-radius:12px; background:#f4fbfe; box-shadow:0 14px 30px rgba(8,62,84,0.28); }
#ssb-stats-panel .ssb-dd.ssb-open .ssb-dd-list { display:block; }
#ssb-stats-panel .ssb-dd-opt { padding:8px 12px; border-radius:8px; color:var(--st-ink); font-size:14.5px; font-weight:800; white-space:nowrap; cursor:pointer; outline:none; }
#ssb-stats-panel .ssb-dd-opt:is(:hover, :focus) { background:rgba(14,118,151,0.12); }
#ssb-stats-panel .ssb-dd-opt[aria-selected="true"] { background:var(--st-orange); color:#fff; text-shadow:0 1px 0 rgba(0,0,0,0.22); }
#ssb-stats-panel .ssb-dd-opt[aria-selected="true"]:focus { box-shadow:inset 0 0 0 2px rgba(255,255,255,0.75); }
#ssb-stats-panel :is(.ssb-colhd, .ssb-hist-row) { display:grid; grid-template-columns:var(--st-grid); align-items:center; column-gap:16px; }
#ssb-stats-panel .ssb-colhd { flex:none; margin-bottom:-8px; padding:0 17px; font-size:11px; font-weight:800; letter-spacing:0.6px !important; text-transform:uppercase; color:var(--st-sub); }
#ssb-stats-panel :is(.ssb-colhd span:last-child, .ssb-hr-kd) { text-align:right; }
#ssb-stats-panel .ssb-hist-list { flex:1 1 auto; min-height:0; display:flex; flex-direction:column; gap:8px; margin:0 -10px; padding:4px 10px 10px; overflow-y:auto; }
#ssb-stats-panel .ssb-hist-row { flex:none; min-height:64px; padding:10px 16px; border:1px solid var(--st-edge); border-radius:14px; background:var(--st-glass); box-shadow:inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 6px rgba(8,62,84,0.06); cursor:pointer; transition:background 0.15s, box-shadow 0.15s, transform 0.15s; }
#ssb-stats-panel .ssb-hist-row:is(:hover, :focus-visible) { background:var(--st-glass-hi); box-shadow:inset 0 1px 0 rgba(255,255,255,0.6), 0 8px 18px rgba(8,62,84,0.12); transform:translateY(-1px); }
#ssb-stats-panel .ssb-hr-main { min-width:0; }
#ssb-stats-panel .ssb-hr-name { font-size:16px; font-weight:900; color:var(--st-ink); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
#ssb-stats-panel .ssb-hr-sub { margin-top:2px; font-size:12.5px; font-weight:700; color:var(--st-sub); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
#ssb-stats-panel .ssb-hr-strong { font-size:14.5px; font-weight:800; color:var(--st-ink); white-space:nowrap; font-variant-numeric:tabular-nums; }
#ssb-stats-panel .ssb-hr-kd .ssb-hr-strong { font-size:16px; font-weight:900; }
/* Rename / Delete take the Played cell's place while the row is hovered or focused; hidden, they can't be clicked.
The hidden Played cell lets clicks through: at opacity 0 it paints on top of the buttons. */
#ssb-stats-panel .ssb-hr-when { display:grid; align-items:center; min-width:0; }
#ssb-stats-panel .ssb-hr-when > * { grid-area:1 / 1; min-width:0; transition:opacity 0.12s; }
#ssb-stats-panel .ssb-hr-acts { display:flex; flex-wrap:wrap; gap:0 4px; margin-left:-4px; opacity:0; pointer-events:none; }
/* Keep: a kept match carries a small Kept mark, and the 40-match trim skips it */
#ssb-stats-panel .ssb-kept-pill { display:inline-block; margin-left:8px; padding:1px 7px; border-radius:999px; background:var(--st-field); color:var(--st-ink); font-size:11px; font-weight:900; letter-spacing:0.4px; vertical-align:2px; box-shadow:inset 0 1px 0 #fff; }
/* Personal Records: one compact card above the list */
#ssb-stats-panel .ssb-records { flex:none; display:flex; flex-wrap:wrap; align-items:center; gap:4px 16px; padding:8px 14px; border:1px solid var(--st-edge); border-radius:12px; background:var(--st-glass); }
#ssb-stats-panel .ssb-rec-h { font-size:11px; font-weight:900; letter-spacing:0.6px; text-transform:uppercase; color:var(--st-sub); }
#ssb-stats-panel .ssb-rec-row { display:flex; align-items:baseline; gap:4px; font-size:13px; font-weight:800; color:var(--st-ink); white-space:nowrap; }
#ssb-stats-panel .ssb-rec-t { margin-right:2px; color:var(--st-sub); }
#ssb-stats-panel .ssb-hist-row:is(:hover, :focus-within) .ssb-hr-acts { opacity:1; pointer-events:auto; }
#ssb-stats-panel .ssb-hist-row:not(.ssb-hr-live):is(:hover, :focus-within) .ssb-hr-info { opacity:0; pointer-events:none; }
#ssb-stats-panel .ssb-hr-live { border-color:#fff; background:var(--st-glass-hi); }
@media (hover: none) { #ssb-stats-panel .ssb-hr-acts { opacity:1; pointer-events:auto; } #ssb-stats-panel .ssb-hist-row:not(.ssb-hr-live) .ssb-hr-info { opacity:0; pointer-events:none; } }

/* Narrow screens: one column, and narrower list columns */
@container (max-width: 980px) { #ssb-stats-panel .ssb-coop-cols { grid-template-columns:minmax(0,1fr); } }
@container (max-width: 520px) {
#ssb-stats-panel .ssb-cols { grid-template-columns:minmax(0,1fr); }
#ssb-stats-panel :is(.ssb-colhd, .ssb-hist-row) { grid-template-columns:minmax(0,1fr) 128px 84px; column-gap:12px; }
}
@media (prefers-reduced-motion: reduce) {
#ssb-stats-panel.ssb-in { animation:none; }
#ssb-stats-panel .ssb-hist-row:is(:hover, :focus-visible) { transform:none; }
}
/* Copy Image / Download: only the title, the match card and the scoreboard. */
#ssb-stats-panel.ssb-shot { height:auto !important; animation:none !important; box-shadow:none; }
#ssb-stats-panel.ssb-shot .ssb-noimg { display:none !important; }
#ssb-stats-panel.ssb-shot .ssb-body { overflow:visible !important; }
#ssb-stats-panel.ssb-shot:is(.ssb-v-match, .ssb-v-live) { max-width:none !important; }
`;
(document.head || document.documentElement).appendChild(t);
}
function _stLiveChips(mode) {
let on = !!eb.matchStartMs,
h = _stSavedMatch(_stLiveCode(), eb.matchStartMs) || {code: eb.gameCode || "Live Match"};
return _stChips([_stNameChip(h), h.label && eb.gameCode && `<span data-match-code>${eC(eb.gameCode)}</span>`, on && _stWhen(eb.matchStartMs, true), on && _stDate(eb
.matchStartMs)], [eC(eb.map || ""), eb.server && eC(eSN(eb.server)), eC(_stMode(mode)), on &&
`<span class="ssb-dur">${_stDur()}</span>`
])
}
function e6(focus) {
let ov = _stOverlay();
ew();
if (!ov.classList.contains("open")) eb._histTop = 0;
let snap = eb.snapshot || [],
mode = eb.mode || e0(),
chips = _stLiveChips(mode);
ov.innerHTML = _stShell("live", "", _stIcoBtn("backhist", "Match History") + _stIcoBtn("copy", "Copy Image") +
_stIcoBtn("download", "Download") + _stIcoBtn("reset", "Reset Live Stats", "ssb-danger") + _stIcoBtn(
"close", "Close", "ssb-danger"), _stTeams(snap, mode,
"No player data yet. Join a match and the scoreboard shows up here."), chips);
_stWire(ov, "live", "Live match", focus);
ov.querySelector('[data-act="reset"]').onclick = eRS;
eb._liveSig = _stLiveSignature();
_stTick()
}
function _stDd(key, allTxt, cur, vals, lab) {
let txt = v => v ? eC(lab ? lab(v) : v) : allTxt,
name = key === "mode" ? "Mode" : "Map";
return `<div class="ssb-dd" data-dd="${key}"><button type="button" class="ssb-dd-btn" aria-haspopup="listbox" aria-expanded="false" aria-label="${name}: ${txt(cur)}"><span class="ssb-dd-val">${txt(cur)}</span><svg class="ssb-dd-car" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button><div class="ssb-dd-list" role="listbox" aria-label="${name}">${["", ...vals].map(v => `<div class="ssb-dd-opt" role="option" tabindex="-1" data-v="${eC(v)}" aria-selected="${v === cur}">${txt(v)}</div>`).join("")}</div></div>`
}
function _stDdOpen(dd) {
let b = dd.querySelector(".ssb-dd-btn"),
l = dd.querySelector(".ssb-dd-list"),
cur = dd.querySelector('.ssb-dd-opt[aria-selected="true"]') || dd.querySelector(".ssb-dd-opt");
dd.classList.add("ssb-open");
if (b) b.setAttribute("aria-expanded", "true");
ef("ui_toggletab");
if (cur) {
if (l) l.scrollTop = Math.max(0, cur.offsetTop - (l.clientHeight - cur.offsetHeight) / 2);
cur.focus({
preventScroll: true
});
}
}
function _stDdClose(dd, snd, focusBtn) {
if (!dd || !dd.classList.contains("ssb-open")) return;
dd.classList.remove("ssb-open");
let b = dd.querySelector(".ssb-dd-btn");
if (b) {
b.setAttribute("aria-expanded", "false");
if (focusBtn) b.focus({
preventScroll: true
});
}
if (snd) ef("ui_toggletab");
}
function _stDdWire(root, onPick) {
root.querySelectorAll(".ssb-dd").forEach(dd => {
let b = dd.querySelector(".ssb-dd-btn"),
opts = () => [...dd.querySelectorAll(".ssb-dd-opt")],
pick = o => {
let v = o.getAttribute("data-v") || "",
same = o.getAttribute("aria-selected") === "true";
ef("ui_onchange");
_stDdClose(dd, true, same);
if (!same) onPick(dd.getAttribute("data-dd"), v);
};
b.onclick = ev => {
ev.preventDefault();
if (dd.classList.contains("ssb-open")) {
_stDdClose(dd, true);
return
}
root.querySelectorAll(".ssb-dd.ssb-open").forEach(o => _stDdClose(o, false));
_stDdOpen(dd);
};
dd.querySelector(".ssb-dd-list").onclick = ev => {
let o = ev.target.closest(".ssb-dd-opt");
if (o) pick(o);
};
dd.onkeydown = ev => {
let list = opts(),
i = list.indexOf(document.activeElement),
go = n => {
let o = list[Math.max(0, Math.min(list.length - 1, n))];
if (o) o.focus();
};
if (!dd.classList.contains("ssb-open")) {
if (ev.target === b && (ev.key === "ArrowDown" || ev.key === "ArrowUp")) {
ev
.preventDefault();
_stDdOpen(dd);
}
return
}
if (ev.key === "Escape") {
ev.preventDefault();
ev.stopPropagation();
_stDdClose(dd, true, true);
return
}
if (ev.key === "Tab") {
_stDdClose(dd, true);
return
}
if (ev.key === "ArrowDown") {
ev.preventDefault();
go(i + 1);
} else {
if (ev.key === "ArrowUp") {
ev
.preventDefault();
go(i < 0 ? list.length - 1 : i - 1);
} else {
if (ev.key === "Home") {
ev
.preventDefault();
go(0);
} else {
if (ev.key === "End") {
ev.preventDefault();
go(list
.length - 1);
} else {
if ((ev.key === "Enter" || ev.key === " ") && i >= 0) {
ev
.preventDefault();
pick(list[i]);
}
}
}
}
}
}
})
}
function _ssbStatsOpen(ov, label, focus) {
let fresh = !ov.classList.contains("open");
if (fresh) eb._retFocus = document.activeElement;
ov.classList.add("open");
let p = ov.querySelector("#ssb-stats-panel");
if (!p) return;
p.setAttribute("role", "dialog");
p.setAttribute("aria-modal", "true");
p.setAttribute("aria-label", label);
p
.tabIndex = -1;
if (fresh) {
p.classList.add("ssb-in");
setTimeout(() => p.classList.remove("ssb-in"), 260);
}
let f = focus && ov.querySelector(focus);
if (f) f.focus({
preventScroll: true
});
else {
if (!p.contains(document.activeElement)) p.focus({
preventScroll: true
});
}
}
function e1() {
eb.userClosed = true;
let e = document.getElementById("ssb-stats-overlay"),
wasOpen = !!e && e.classList.contains("open");
if (e) e.classList.remove("open");
if (e8) {
clearInterval(e8);
e8 = null;
}
let rf = eb._retFocus;
eb._retFocus = null;
if (wasOpen && rf && rf !== document.body && rf.isConnected && rf.focus) rf.focus({
preventScroll: true
});
}
async function eRS() {
if (!(await window.__ssbUI.confirm({
title: "Reset Stats",
text: "Reset the tracked kills / deaths / KDR and any KotC stats for this session?",
ok: "Reset",
danger: true
})))
return;
_stFlush();
_ssbSaveStats(1);
_stCoop.reset();
let pl = window.players || [],
_was = new Map((eb._seen || []).map(([r, c]) => [c, r]));
eb.byName = Object.create(null);
eb._snapMap = Object.create(null);
eb.snapshot = [];
eb._seen = [];
for (let p = 0; p < pl.length; p++) {
let c = pl[p];
if (c && c.stats) {
let m = c.name || c.safeName || c.lw || "Player " + p,
_k = eb.byName[m] ? m + String.fromCharCode(0) + p : m,
_o = _was.get(c);
eb.byName[_k] = {
name: m,
team: c.team || 0,
isMe: false,
kills: 0,
deaths: 0,
_lastK: 0 | c.stats.kills,
_lastD: 0 | c.stats.deaths,
_lastTK: 0 | c.totalKills,
_slot: p,
_skL: _o ? _o._skL | 0 : 0
};
c.__ssbHudSkipsCounted = 0 | c.__ssbSkippedKills;
eb._seen.push([eb.byName[_k], c]);
}
}
eb.matchStartMs = Date.now();
eb.matchEndMs = 0;
eb.kotcScore = {
1: 0,
2: 0
};
try {
ef("ui_click")
} catch (e) {
window.__ssbErr("stats#8", e)
}
let ov = document.getElementById("ssb-stats-overlay");
if (ov && ov.classList.contains("open")) e6();
else {
ew();
eS();
}
}
function _stPerf(h, long) {
let p = h && h.perf;
if (!p || !(p.avg > 0) || !window.__ssbStatsShowFps()) return "";
let s = p.avg + " FPS avg";
if (p.low > 0) s += ", lowest " + p.low;
if (long) {
if (p.frz > 0) s += ", " + p.frz + (p.frz === 1 ? " freeze" : " freezes");
if (p.res > 0 && p.res < 100) s += ", resolution down to " + p.res + "%";
}
return s
}
function _stRecCard(flt) {
if (!d.stats.enabled || !_ssbRecOn()) return "";
let R = _ssbRecGet(),
order = ["ffa", "team", "ctf", "king"],
rows = [],
btn = (r, txt) => `<button type="button" class="ssb-link ssb-rec" data-rec-code="${eC(r.c || "")}" data-rec-start="${eC(String(r.s || ""))}" data-tooltip="${eC([r.m, r.s && _stDate(r.s)].filter(Boolean).join(", "))}">${eC(txt)}</button>`,
add = (title, box) => {
if (!box || typeof box != "object" || !(box.k || box.r)) return;
rows.push(`<div class="ssb-rec-row"><span class="ssb-rec-t">${eC(title)}</span>${box.k ? btn(box.k, box.k.n + " kills") : ""}${box.r ? btn(box.r, "KDR " + (+box.r.n).toFixed(2)) : ""}</div>`)
};
if (flt.map) add(flt.map, (R.maps || {})[flt.map]);
else Object.keys(R.modes || {}).filter(m => !flt.mode || m === flt.mode).sort((a, b) => (order.indexOf(a) + 1 || 9) -
(order.indexOf(b) + 1 || 9)).forEach(m => add(_stMode(m), R.modes[m]));
return rows.length ? `<div class="ssb-records"><span class="ssb-rec-h">Personal records</span>${rows.join("")}</div>` : ""
}
function eHIST(focus, top) {
let ov = _stOverlay();
let all = _ssbHist().filter(h => h && typeof h == "object"),
flt = eb._histFilter || (eb._histFilter = {
mode: "",
map: ""
}),
live = _stLive(),
lCode = eb.gameCode || eb._synth || "",
lMode = eb.mode || e0() || "",
lMap = eb.map || "",
isCur = h => live && h.code === lCode && Math.abs((h.startMs || 0) - eb.matchStartMs) < 15e3,
cur = all.find(isCur);
if (flt.mode && !all.some(h => h.mode === flt.mode) && !(live && lMode === flt.mode)) flt.mode = "";
if (flt.map &&
!all.some(h => h.map === flt.map) && !(live && lMap === flt.map)) flt.map = "";
let fits = (mo, ma) => (!flt.mode || mo === flt.mode) && (!flt.map || ma === flt.map),
hist = all.filter(h => fits(h.mode, h.map)),
showLive = live && fits(lMode, lMap),
me = h => (h.players || []).find(p => p && p.isMe) || {
kills: 0,
deaths: 0
},
keyOf = h => `data-code="${eC(h.code || "")}" data-start="${eC(String(h.startMs || ""))}"`,
rowSel = (c, st) => '.ssb-hist-row[data-code="' + CSS.escape(c) + '"][data-start="' + CSS.escape(st) + '"]',
sk = 0,
sd = 0;
hist.forEach(h => {
let m = me(h);
sk += +m.kills || 0;
sd += +m.deaths || 0;
});
let part = hist.length !== all.length,
keptN = all.filter(h => h.kept).length,
games = n => n + " " + (n === 1 ? "game" : "games"),
chips = `<span class="ssb-head-name">Match History</span>` + (all.length ? _stChips([], [part ? hist
.length + " of " + all.length + " games" : games(all.length) + " &middot; " + (keptN ? "last 40 + " +
keptN + " kept" : "last 40 saved"), sk +
" / " + sd
]) + `<span class="ssb-chip ssb-chip-strong">KDR ${_stKdr(sk, sd)}</span>` : ""),
modes = [...new Set([...all.map(h => h.mode), live && lMode].filter(Boolean).map(String))],
maps = [...new Set([...all.map(h => h.map), live && lMap].filter(Boolean).map(String))].sort(),
lm = _stMe(),
lk = +lm.kills || 0,
ld = +lm.deaths || 0,
liveRow = showLive ?
`<div class="ssb-hist-row ssb-hr-live" tabindex="0" role="button" data-live="1" aria-label="${eC("Current match, " + (lMap || "unknown map") + ", playing now")}"><div class="ssb-hr-main"><div class="ssb-hr-name">${eC(cur && cur.label || eb.gameCode || "Current match")}</div><div class="ssb-hr-sub">${[cur && cur.label && eb.gameCode, lMap, _stMode(lMode), eb.server && eSN(eb.server)].filter(Boolean).map(eC).join(" &middot; ") || "&nbsp;"}</div></div><div class="ssb-hr-when"><div class="ssb-hr-info"><div class="ssb-hr-strong">Playing now</div><div class="ssb-hr-sub ssb-dur">${_stDur()}</div></div></div><div class="ssb-hr-kd ssb-live-kd"><div class="ssb-hr-strong">${lk} / ${ld}</div><div class="ssb-hr-sub">KDR ${_stKdr(lk, ld)}</div></div></div>` :
"",
rows = liveRow + hist.filter(h => !isCur(h)).map(h => {
let m = me(h),
k = +m.kills || 0,
dd = +m.deaths || 0,
len = _stLen(h),
name = h.label || h.code || "-",
meta = [h.label && h.code, h.map, _stMode(h.mode), h.server && eSN(h.server), _stPerf(h)].filter(
Boolean)
.map(eC).join(" &middot; ");
return `<div class="ssb-hist-row${h.kept ? " ssb-hr-kept" : ""}" tabindex="0" role="button" ${keyOf(h)} aria-label="${eC(name + ", " + (h.map || "unknown map") + ", " + k + " kills, " + dd + " deaths" + (h.kept ? ", kept" : ""))}"><div class="ssb-hr-main"><div class="ssb-hr-name">${eC(name)}${h.kept ? '<span class="ssb-kept-pill">Kept</span>' : ""}</div><div class="ssb-hr-sub">${meta || "&nbsp;"}</div></div><div class="ssb-hr-when"><div class="ssb-hr-info"><div class="ssb-hr-strong">${eC(_stWhen(h.startMs))}</div><div class="ssb-hr-sub">${len || "&nbsp;"}</div></div><div class="ssb-hr-acts"><button type="button" class="ssb-hist-abtn ssb-link" data-hact="keep" ${keyOf(h)} data-tooltip="${h.kept ? "Let the 40-match limit remove it again" : "Keep it when older matches are removed (up to 20)"}">${h.kept ? "Unkeep" : "Keep"}</button><button type="button" class="ssb-hist-abtn ssb-link" data-hact="rename" ${keyOf(h)}>Rename</button><button type="button" class="ssb-hist-abtn ssb-link ssb-danger" data-hact="del" ${keyOf(h)}>Delete</button></div></div><div class="ssb-hr-kd"><div class="ssb-hr-strong">${k} / ${dd}</div><div class="ssb-hr-sub">KDR ${_stKdr(k, dd)}</div></div></div>`
}).join("") ||
`<div class="ssb-empty">${all.length ? "No saved matches fit these filters." : "No games recorded yet. Finish a match and it shows up here."}</div>`,
body = (all.length ?
`<div class="ssb-filters">${_stDd("mode", "All modes", flt.mode, modes, _stMode)}${_stDd("map", "All maps", flt.map, maps)}<span class="ssb-fx"><button type="button" class="ssb-btn ssb-sm" data-act="exjson" data-tooltip="Download the matches shown as JSON">JSON</button><button type="button" class="ssb-btn ssb-sm" data-act="excsv" data-tooltip="Download the matches shown as a spreadsheet (CSV)">CSV</button></span></div>` :
"") + _stRecCard(flt) + (all.length || showLive ?
`<div class="ssb-colhd" aria-hidden="true"><span>Match</span><span>Played</span><span>K / D</span></div>` :
"") + `<div class="ssb-hist-list">${rows}</div>`;
ov.innerHTML = _stShell("hist", "", (all.length ? _stIcoBtn("clearhist", "Clear History", "ssb-danger") : "") +
_stIcoBtn("close", "Close", "ssb-danger"), body, chips);
let list = ov.querySelector(".ssb-hist-list"),
keep = () => list && list.isConnected ? list.scrollTop : 0,
on = (sel, fn) => {
let b = ov.querySelector(sel);
if (b) b.onclick = fn;
};
if (top && list) list.scrollTop = top;
_stWire(ov, "hist", "Match history", focus);
on('[data-act="clearhist"]', async () => {
if ((await window.__ssbUI.confirm({
title: "Clear History",
text: keptN ? "Delete every match you haven't kept? The " + (keptN === 1 ? "kept match stays" : keptN +
" kept matches stay") + ": Unkeep one first to delete it." : "Delete every match in your saved history?",
ok: "Clear",
danger: true
}))) {
_ssbHistSet(_ssbHist().filter(h => h && h.kept));
eHIST();
}
});
on('[data-act="exjson"]', () => _ssbHistExport(hist, "json"));
on('[data-act="excsv"]', () => _ssbHistExport(
hist, "csv"));
_stDdWire(ov, (key, v) => {
flt[key] = v;
eHIST('[data-dd="' + key + '"] .ssb-dd-btn');
});
let same = el => x => x && x.code === (el.getAttribute("data-code") || "") && String(x.startMs || "") === (el
.getAttribute("data-start") || ""),
open = row => {
if (row.hasAttribute("data-live")) {
eb._histTop = keep();
ef("ui_toggletab");
e6('[data-act="backhist"]');
return
}
let h = hist.find(same(row));
if (h) {
eb._histTop = keep();
eb._histKey = [row.getAttribute("data-code") || "", row.getAttribute(
"data-start") || ""];
ef("ui_toggletab");
eHISTDetail(h);
}
};
ov.querySelectorAll(".ssb-hist-row").forEach(row => {
row.onclick = () => open(row);
row.onkeydown = ev => {
if (!(ev.target !== row || ev.key !== "Enter" && ev.key !== " ")) {
ev.preventDefault();
open(
row);
}
};
});
ov.querySelectorAll(".ssb-rec").forEach(b => b.onclick = ev => {
ev.stopPropagation();
let h = all.find(x => x.code === (b.getAttribute("data-rec-code") || "") && String(x.startMs || "") === (b
.getAttribute("data-rec-start") || ""));
if (!h) {
window.__ssbUI.toast("That match is no longer in your history. Keep a match to stop it being removed.");
return
}
eb._histTop = keep();
eb._histKey = [h.code || "", String(h.startMs || "")];
ef("ui_toggletab");
eHISTDetail(h);
});
ov.querySelectorAll(".ssb-hist-abtn").forEach(b => b.onclick = async ev => {
ev.stopPropagation();
let act = b.getAttribute("data-hact"),
H = _ssbHist(),
x = H.find(same(b));
if (!x) return;
if (act === "keep") {
let t = keep();
if (!x.kept && H.filter(h => h && h.kept).length >= _HIST_KEPT) {
window.__ssbUI.toast("You can keep up to " + _HIST_KEPT + " matches. Unkeep one first.");
return
}
if (x.kept) delete x.kept;
else x.kept = true;
_ssbHistSet(H);
ef("ui_click");
eHIST(rowSel(b.getAttribute("data-code") || "", b.getAttribute("data-start") || ""), t);
return
}
if (act === "del") {
if (await window.__ssbUI.confirm({
title: "Delete Match",
text: "Delete this match from your history?",
ok: "Delete",
danger: true
})) {
let t = keep();
H = _ssbHist();
let i = H.findIndex(same(b));
if (i >= 0) {
H.splice(i, 1);
_ssbHistSet(H);
}
eHIST(null, t);
}
} else if (act === "rename") {
let nn = await window.__ssbUI.prompt({
title: "Rename Match",
text: "Leave it blank to show the match code again.",
value: x.label || x.code || "",
ok: "Save",
maxLength: 60
});
if (nn != null) {
let t = keep();
H = _ssbHist();
let i = H.findIndex(same(b));
if (i >= 0) {
nn = nn.trim();
if (nn) H[i].label = nn;
else delete H[i].label;
_ssbHistSet(H);
}
eHIST(rowSel(b.getAttribute("data-code") || "", b.getAttribute("data-start") || ""),
t);
}
}
});
if (showLive) _stTick();
}
function _ssbHistExport(list, kind) {
try {
let blob, stamp = new Date().toISOString().slice(0, 10),
mn = {
ctf: "Capture the Spatula",
king: "King of the Coop",
team: "Teams",
ffa: "Free for All"
};
let fps = window.__ssbStatsShowFps();
if (kind === "json") blob = new Blob([JSON.stringify(fps ? list : list.map(h => {
if (!h || !h.perf) return h;
let c = Object.assign({}, h);
delete c.perf;
return c
}), null, 2)], {
type: "application/json"
});
else {
let q = v => {
v = v == null ? "" : String(v);
if (/^[=+\-@\t\r]/.test(v)) v = "'" + v;
return /[",\n\r]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v
},
lines = [
["Name", "Code", "Start", "Duration (s)", "Map", "Mode", "Server", "Kills", "Deaths", "KDR",
"Players", "Coop Time (s)", "Captures", "Takeovers", "Kept"
].concat(fps ? ["Avg FPS", "Lowest FPS", "Freezes", "Lowest Resolution (%)"] : []).join(",")
];
list.forEach(h => {
let m = (h.players || []).find(p => p.isMe) || {
kills: 0,
deaths: 0
},
k = m.kills || 0,
dd = m.deaths || 0;
lines.push([h.label || "", h.code || "", h.startMs ? new Date(h.startMs).toISOString() : "",
h.startMs && h.endMs ? Math.round((h.endMs - h.startMs) / 1e3) : "", h.map ||
"", mn[h.mode] || h.mode || "", eSN(h.server), k, dd, (k / Math.max(1, dd))
.toFixed(2), (h.players || []).length, Number.isFinite(m.coopMs) && m.coopMs >=
0 ? (m.coopMs / 1000).toFixed(3) : "", Number.isFinite(m.coopCaptures) && m
.coopCaptures >= 0 ? Math.floor(m.coopCaptures) : "", Number.isFinite(m
.coopTakeovers) && m.coopTakeovers >= 0 ? Math.floor(m.coopTakeovers) : "", h.kept ? "yes" : ""
].concat(fps ? [h.perf && h.perf.avg || "", h.perf && h.perf.low || "", h.perf ? h.perf.frz || 0 :
"", h.perf && h.perf.res || ""
] : []).map(q).join(","))
});
blob = new Blob(["﻿" + lines.join("\r\n")], {
type: "text/csv"
});
}
let a = document.createElement("a");
a.href = URL.createObjectURL(blob);
a.download = "better-hud-match-history-" + stamp + (kind === "json" ?
".json" : ".csv");
document.body.appendChild(a);
a.click();
a.remove();
setTimeout(() => URL
.revokeObjectURL(a.href), 1e3);
ef("ui_click");
} catch (e) {
window.__ssbUI.toast("Couldn't export the history: " + e.message, {
type: "error"
})
}
}
function eHISTDetail(h) {
if (!h) return;
let ov = _stOverlay(),
mode = h.mode || "ffa",
_sk = eb.kotcScore,
teams;
eb.kotcScore = h.kotc || {
1: 0,
2: 0
};
try {
teams = _stTeams(h.players, mode, "No player data was saved for this match.")
} finally {
eb.kotcScore = _sk
}
let chips = _stChips([_stNameChip(h), h.label && _stRoomCode(h.code) && `<span data-match-code>${eC(h.code)}</span>`, h.startMs && _stWhen(h
.startMs, true), h.startMs && _stDate(h.startMs)], [eC(h.map || ""), h.server && eC(eSN(h.server)),
eC(_stMode(mode)), eC(_stLen(h)), h.kept && "Kept", eC(_stPerf(h, true))
]);
ov.innerHTML = _stShell("match", "", _stIcoBtn("backhist", "Match History") + _stIcoBtn("copy", "Copy Image") +
_stIcoBtn("download", "Download") + _stIcoBtn("close", "Close", "ssb-danger"), teams, chips);
_stWire(ov, "match", "Match details", '[data-act="backhist"]', h)
}
window.__ssbOpenHistory = function() {
try {
eHIST()
} catch (_he) {
window.__ssbErr("stats#9", _he)
}
};
let e8 = null,
eI = null,
_ssbFC = null;
function _ssbFontCSS() {
return _ssbFC || (_ssbFC = fetch(
"https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=Sigmar+One&display=swap"
).then(r => r.text()).then(css => {
let urls = [...new Set([...css.matchAll(/url\((https:[^)]+)\)/g)].map(m => m[1]))];
return Promise.all(urls.map(u => fetch(u).then(r => r.blob()).then(b => new Promise(res => {
let fr = new FileReader();
fr.onload = () => res([u, fr.result]);
fr.readAsDataURL(b)
})))).then(pairs => {
for (let [u, d] of pairs) css = css.split(u).join(d);
return css
})
}).catch(err => {
console.warn("[Better HUD] Font embed failed, screenshot may use fallback font:", err);
_ssbFC = null;
return ""
}))
}
function e9(e, panel) {
let t = panel || document.querySelector("#ssb-stats-overlay #ssb-stats-panel");
if (!t) return Promise.resolve(null);
return (typeof window.htmlToImage == "object" ? Promise.resolve() : eI || (eI = new Promise((e, t) => {
let o = document.createElement(
"script");
o.src = "https://cdnjs.cloudflare.com/ajax/libs/html-to-image/1.11.11/html-to-image.min.js";
o.integrity =
"sha512-7tWCgq9tTYS/QkGVyKrtLpqAoMV9XIUxoou+sPUypsaZx56cYR/qio84fPK9EvJJtKvJEwt7vkn6je5UVzGevw==";
o.crossOrigin = "anonymous";
o.referrerPolicy = "no-referrer";
o.onload = () => e();
o
.onerror = () => {
eI = null;
t(Error("html-to-image failed to load"));
};
document.head.appendChild(o);
}))).then(() => {
if (typeof window.htmlToImage != "object") {
window.__ssbUI.toast("Couldn't load the image tool. Check your connection and try again.", {
type: "error"
});
return null
}
let _css = t.style.cssText;
t.classList.add("ssb-shot");
t.style.setProperty("zoom", "1", "important");
t.style.setProperty(
"max-height", "none", "important");
t.style.setProperty("overflow", "visible", "important");
let _restore = () => {
t.classList.remove("ssb-shot");
t.style.cssText = _css;
};
return _ssbFontCSS().then(fc => window.htmlToImage.toBlob(t, {
backgroundColor: null,
pixelRatio: 2,
width: t.scrollWidth,
height: t.scrollHeight,
...(fc ? {
fontEmbedCSS: fc
} : {})
})).then(blob => {
_restore();
if (!blob) throw Error("the picture came out empty");
return blob
}, err => {
_restore();
throw err
})
}).then(blob => {
if (blob && e) try {
e(blob)
} catch (x) {
window.__ssbErr("stats.shot", x)
}
return blob
}, err => {
console.error("[Better HUD] Stats screenshot failed:", err);
window.__ssbUI.toast("Screenshot failed" + (err && err.message ? ": " + err.message : "."), {
type: "error"
});
return null
});
}
function eA() {
e9(e => {
if (e) try {
navigator.clipboard.write([new ClipboardItem({
"image/png": e
})]).then(() => {
ef("ui_click");
window.__ssbUI.toast("Stats image copied to clipboard.", {
type: "success"
});
}).catch(e => {
console.error(e);
window.__ssbUI.toast("Couldn't copy the image: " + e
.message, {
type: "error"
});
})
} catch (t) {
window.__ssbUI.toast("This browser can't copy images. Use Download instead.", {
type: "error"
})
}
})
}
function _stSavePng(png) {
let t = document.createElement("a");
t.href = URL.createObjectURL(png);
t.download = `shellshockers-stats-${Date.now()}.png`;
document.body.appendChild(t);
t.click();
t.remove();
setTimeout(() => URL.revokeObjectURL(t.href), 1e3);
}
function e4() {
e9(e => {
_stSavePng(e);
ef("ui_click");
})
}
let _stEndWait = null,
_stEndGen = 0;
function _stEndOut() {
return d.stats.enabled ? _stEndMode() : 0
}
function _stKotcEnd(final) {
setTimeout(() => {
if (window.__ssbGameCode !== final.code) return;
let host = null;
try {
ew();
_stFlush();
eb.kotcScore = {
1: final.blue,
2: final.red
};
const snap = eb.snapshot || [];
if (!snap.length) return;
_stCss();
host = document.createElement("div");
host.setAttribute("aria-hidden", "true");
host.style.cssText = "position:fixed;left:-30000px;top:0;pointer-events:none;";
host.innerHTML = _stShell("live", "", "", _stTeams(snap, "king", ""), _stLiveChips("king"));
document.body.appendChild(host);
} catch (x) {
host?.remove();
window.__ssbErr("stats.kotcEnd", x);
return
}
e9(null, host.firstElementChild).then(png => {
const out = _stEndOut();
if (!png || !out) return;
if (out === 2) {
_stSavePng(png);
window.__ssbUI.toast("King of the Coop is over: stats image downloaded.", {
type: "success"
})
} else _stEndCopy(png, false);
}).catch(x => window.__ssbErr("stats.kotcEnd", x)).finally(() => host.remove());
}, 0);
}
function _stEndCancel() {
_stEndGen++;
if (!_stEndWait) return;
_stEndWait = null;
window.removeEventListener("pointerdown", _stEndRetry, true);
window.removeEventListener("keydown", _stEndRetry, true);
}
function _stEndCopy(png, retry) {
if (!retry) _stEndCancel();
const gen = _stEndGen;
let ok = () => window.__ssbUI.toast("King of the Coop is over: stats image copied to clipboard.", {
type: "success"
}),
fail = err => {
if (gen !== _stEndGen || _stEndOut() !== 1) return;
if (retry) {
window.__ssbUI.toast("Couldn't copy the stats image" + (err && err.message ? ": " + err
.message + "." : ".") + " Pick Download under When King of the Coop Ends instead.", {
type: "error"
});
return
}
_stEndWait = {
png,
at: performance.now()
};
window.addEventListener("pointerdown", _stEndRetry, true);
window.addEventListener("keydown", _stEndRetry, true);
window.__ssbUI.toast("King of the Coop is over. Click or press a key to copy the stats image.", {
ms: 8000
});
};
try {
navigator.clipboard.write([new ClipboardItem({
"image/png": png
})]).then(ok, fail)
} catch (x) {
window.__ssbUI.toast("This browser can't copy images. Pick Download under When King of the Coop Ends.", {
type: "error"
})
}
}
function _stEndRetry() {
const w = _stEndWait;
_stEndCancel();
if (w && _stEndOut() === 1 && performance.now() - w.at < 12e4) _stEndCopy(w.png, true);
}
document.addEventListener("ssb:settings-change", () => {
if (_stEndOut() !== 1) _stEndCancel();
});
document.addEventListener("keydown", function(e) {
if (!d.stats.enabled || !e.key || e.key.toLowerCase() !== d.stats.hotkey.toLowerCase()) return;
let t = document.activeElement;
if (t && /^(INPUT|TEXTAREA)$/i.test(t.tagName) || t && t.isContentEditable) return;
e.preventDefault();
let o = document.getElementById("ssb-stats-overlay");
if (o && o.classList.contains("open")) e1();
else {
eb.userClosed = false;
if (_stLive()) e6();
else eHIST();
}
}, true);
window.addEventListener("keydown", function(e) {
if (e.key !== "Escape" || document.pointerLockElement || document.getElementById("ssb-dialog-overlay"))
return;
let o = document.getElementById("ssb-stats-overlay");
if (!o || !o.classList.contains("open") || o.contains(e.target)) return;
e.preventDefault();
e.stopImmediatePropagation();
window.__ssbEatKeyUp("Escape");
let dd = o.querySelector(".ssb-dd.ssb-open");
if (dd) _stDdClose(dd, true, true);
else {
ef("ui_toggletab");
e1();
}
}, true);
document.addEventListener("pointerlockchange", function() {
if (document.pointerLockElement) return;
let p = document.querySelector("#ssb-stats-overlay.open #ssb-stats-panel");
if (p && !p.contains(document.activeElement)) p.focus({
preventScroll: true
});
});
let eB = [{
value: "singapore",
text: "Singapore"
}, {
value: "uswest",
text: "US West"
}, {
value: "sydney",
text: "Sydney"
}, {
value: "uscentral",
text: "US Central"
}, {
value: "useast",
text: "US East"
}, {
value: "germany",
text: "Germany"
}, {
value: "santiago",
text: "Chile"
}, ].map(e => ({
...e,
ping: null
})),
eF = localStorage.getItem("selectedRegionId") || "singapore",
e2 = null;
let eBLive = null;
function eBv() {
return eBLive && eBLive.length ? eB.filter(e => eBLive.includes(e.value)) : eB
}
function eT() {
return (eB.find(e => e.value === eF)?.text || eF).toUpperCase()
}
function eH(e) {
eF = e;
localStorage.setItem("selectedRegionId", eF);
if (e2) e2.textContent = eT();
let t = document.getElementById("regionSelect");
if (t) {
t.value = eF;
t.dispatchEvent(new Event("change", {
bubbles: true
}));
}
return !!t
}
function eN(e) {
return e == null ? ["rgba(60,60,60,0.6)", "#cfcfcf"] : e < 80 ? ["rgba(30,125,58,0.75)", "#8fffa8"] : e < 150 ?
["rgba(140,100,0,0.75)", "#ffd97a"] : ["rgba(140,30,30,0.75)", "#ff9898"]
}
let eM;
try {
eM = JSON.parse(localStorage.getItem("mod-server-hosts") || "{}") || {}
} catch (ez) {
eM = {}
}
function eR(e) {
for (let t = e.childNodes.length - 1; t >= 0; t--) {
let o = e.childNodes[t];
if (o.nodeType === Node.TEXT_NODE && o.textContent.trim()) return o
}
return null
}
function e5(_force) {
! function e() {
if (document.getElementById("mod-server-style")) return;
let t = document.createElement("style");
t.id = "mod-server-style";
t.textContent = `.btn_game_mode:not(.mod-server-clone) { position:relative !important; z-index:2 !important; }
.mod-server-clone { position:relative !important; z-index:1 !important; margin-left:8px !important; }
.mod-server-clone i, .mod-server-clone svg, .mod-server-clone img, .mod-server-clone [class*="caret"], .mod-server-clone [class*="arrow"], .mod-server-clone [class*="chevron"], .mod-server-clone::after, .mod-server-clone::before { transition: transform 0.2s ease !important; }
.mod-server-clone.ssb-open i, .mod-server-clone.ssb-open svg, .mod-server-clone.ssb-open img, .mod-server-clone.ssb-open [class*="caret"], .mod-server-clone.ssb-open [class*="arrow"], .mod-server-clone.ssb-open [class*="chevron"], .mod-server-clone.ssb-open::after, .mod-server-clone.ssb-open::before { transform: rotate(180deg) !important; }
.mod-server-clone:not(.ssb-open) i, .mod-server-clone:not(.ssb-open) svg, .mod-server-clone:not(.ssb-open) img, .mod-server-clone:not(.ssb-open) [class*="caret"], .mod-server-clone:not(.ssb-open) [class*="arrow"], .mod-server-clone:not(.ssb-open) [class*="chevron"], .mod-server-clone:not(.ssb-open)::after, .mod-server-clone:not(.ssb-open)::before { transform: rotate(0deg) !important; }
.mod-server-clone.ssb-open ul i, .mod-server-clone.ssb-open ul svg, .mod-server-clone.ssb-open ul img, .mod-server-clone.ssb-open ul [class*="caret"], .mod-server-clone.ssb-open ul [class*="arrow"], .mod-server-clone.ssb-open ul [class*="chevron"] { transform: none !important; }
`;
(document.head || document.documentElement).appendChild(t);
}
();
let _c0 = document.querySelector(".mod-server-clone"),
_p0 = _c0 && _c0.previousElementSibling;
if (!_force && _p0 && _p0.classList.contains("btn_game_mode") && !_p0.classList.contains("mod-server-clone") &&
!_p0.closest('.photo-booth-map-section, [class*="phb-"]') && (!_p0.checkVisibility || _p0.checkVisibility())
) return;
let e = function e() {
let t = document.querySelectorAll(".btn_game_mode");
for (let o of t) {
if (o.closest('.photo-booth-map-section, [class*="phb-"]')) continue;
if (o.checkVisibility && !o.checkVisibility()) continue;
let n = o.getBoundingClientRect();
if (n.width > 0 && n.height > 0) return {
el: o,
r: n
}
}
return null
}();
if (!e) return;
let t = document.querySelector(".mod-server-clone");
if (!_force && t && t.previousElementSibling === e.el) return;
if (t) t.remove();
let o = e.el,
n = o.cloneNode(true);
n.classList.add("mod-server-clone");
n.removeAttribute("id");
let i = function e(t) {
let o = t.querySelector('i, svg, img, [class*="caret"], [class*="arrow"], [class*="chevron"]');
if (o) return o;
for (let n of t.querySelectorAll("*")) {
let i = n.tagName.toLowerCase();
if (!(i === "h3" || i === "p" || i === "ul" || n.classList.contains("box_absolute") || n
.querySelector("ul"))) return n
}
return null
}(n);
function a(e) {
if (i) {
i.style.setProperty("transition", "transform 0.2s ease", "important");
i.style.setProperty(
"transform", e ? "rotate(180deg)" : "rotate(0deg)", "important");
}
}
n.querySelectorAll("*").forEach(e => {
for (let t of (e.removeAttribute("onclick"), e.removeAttribute("id"), [...e.attributes])) {
if ((t.name
.startsWith("v-") || t.name.startsWith("@") || t.name.startsWith("data-v-"))) e
.removeAttribute(t.name);
}
});
n.removeAttribute("onclick");
let r = n.querySelector("h3");
if (r) r.textContent = "Server";
let s = n.querySelector("p.game-mode-type") || n.querySelector("p[class*='game-mode']");
if (s) {
s.textContent = " " + eT();
e2 = s.firstChild;
}
let d = n.querySelector("ul"),
c = n.querySelector("div.box_absolute, div[class*='box_absolute']"),
p = d && (!c || !c.contains(d));
if (d && d.children.length) {
let m = d.children[0].cloneNode(true);
d.innerHTML = "";
eBv().forEach(e => {
let t = m.cloneNode(true),
o = e.value === eF;
t.classList.toggle("selected", o);
t.style.setProperty("display", "flex", "important");
t.style
.setProperty("align-items", "center", "important");
t.style.setProperty("white-space",
"nowrap", "important");
t.style.setProperty("gap", "12px", "important");
let i = t.querySelector(".f_row");
if (i) {
i.style.display = "";
i.style.visibility = o ? "visible" : "hidden";
}
let r = eR(t);
if (r) r.textContent = " " + e.text;
let s = document.createElement("span");
s.className = "mod-server-ping";
s.textContent = e.ping != null ? e.ping + "ms" : "-";
let l = {
"margin-left": "auto",
"font-size": "12px",
"font-family": "monospace",
"font-weight": "800",
padding: "2px 8px",
"border-radius": "4px",
"min-width": "50px",
"text-align": "center",
"letter-spacing": "0.2px"
};
[l.background, l.color] = eN(e.ping);
Object.entries(l).forEach(([e, t]) => s.style.setProperty(
e, t, "important"));
t.appendChild(s);
t.addEventListener("click", o => {
o.stopPropagation();
o.preventDefault();
if ((e.value === eF ? (eH(e.value), true) : !eH(e
.value))) ef("ui_onchange");
_apHold(e.value);
if (e2) e2.textContent =
" " + eT();
d.querySelectorAll("li").forEach(e => {
let o = e === t;
e.classList.toggle("selected", o);
let n = e.querySelector(".f_row");
if (n) n.style.visibility = o ? "visible" : "hidden";
});
if (c) c.style.setProperty("display", "none", "important");
if (p) d.style
.setProperty("display", "none", "important");
n.classList.remove("ssb-open");
a(
false);
ef("ui_toggletab");
}, true);
d.appendChild(t);
});
}
if (c) {
c.style.setProperty("display", "none", "important");
c.style.setProperty("min-width", "max-content",
"important");
c.style.setProperty("white-space", "nowrap", "important");
}
if (p) d.style.setProperty(
"display", "none", "important");
n.addEventListener("click", e => {
if (c && c.contains(e.target) || p && d.contains(e.target) || (e.stopPropagation(), e
.preventDefault(), !c && !p)) return;
let t = c ? c.style.display !== "none" : d.style.display !== "none";
if (c) c.style.setProperty("display", t ? "none" : "block", "important");
if (p) d.style.setProperty(
"display", t ? "none" : "block", "important");
if (!t && d && c && c.contains(d)) d.style
.removeProperty("display");
n.classList.toggle("ssb-open", !t);
a(!t);
ef("ui_toggletab");
}, true);
if (!window._ssbServerOutsideClick) {
window._ssbServerOutsideClick = e => {
let t = document.querySelector(".mod-server-clone");
if (!t || t.contains(e.target)) return;
let o = t.querySelector("div.box_absolute, div[class*='box_absolute']"),
n = t.querySelector("ul");
if (t.classList.contains("ssb-open")) ef("ui_toggletab");
if ((o || n)) {
if (o) o.style.setProperty("display", "none", "important");
if (!(!n || o && o.contains(n))) n
.style.setProperty("display", "none", "important");
t.classList.remove("ssb-open");
(function() {
let i = t.querySelector(
'i, svg, img, [class*="caret"], [class*="arrow"], [class*="chevron"]');
if (i) i.style.setProperty("transform", "rotate(0deg)", "important");
}());
}
};
document.addEventListener("click", window._ssbServerOutsideClick);
}
o.parentElement.insertBefore(n, o
.nextSibling);
requestAnimationFrame(() => {
a(false)
});
}! function e() {
let t = window.WebSocket;
window.WebSocket = function(e, o) {
try {
let n = new URL(e),
i = n.hostname;
try {
let _gm = /\/game\/([^/?#]+)/.exec(n.pathname || "");
if (_gm) {
if (_gm[1] !== window.__ssbGameCode && !document.pointerLockElement) eb._readyForReset =
true;
window.__ssbGameCode = _gm[1];
window.__ssbGameHost = i;
window.currentServerRegion = "";
}
} catch (_ge) {
window.__ssbErr("net#1", _ge)
}
n.port;
let a = eB.map(r => r.value);
for (let r of a)
if (i.toLowerCase().includes(r)) {
let s = eM[r];
if (!(s && s.host === i)) {
eM[r] = {
host: i,
port: 443
};
localStorage.setItem("mod-server-hosts", JSON.stringify(eM));
console.log(
"[mod] Discovered server:", r, "->", i);
}
window.currentServerRegion = r;
p(i);
break
} let l = a.some(e => i.toLowerCase().includes(e));
if (!l && /\/game\//.test(n.pathname || "")) console.log(
"[mod] Unknown game server WS URL (report this!):", e);
} catch (d) {
window.__ssbErr("net#2", d)
}
return new t(e, o)
};
window.WebSocket.prototype = t.prototype;
Object.assign(window.WebSocket, t);
}();
let eq = null,
ej = false,
_apT0 = 0,
_apHeld = () => localStorage.getItem("tp-autoPickHeld"),
_apHold = v => {
if (d.ping.autoPickBest && v) localStorage.setItem("tp-autoPickHeld", v);
};
window.__ssbMenuPoll(() => {
if (!d.ui.showServerList && !d.ping.autoPickBest) return;
let e = o("regionSelect");
if (e && e.options && e.options.length) {
try {
let _lv = [];
Array.from(e.options).forEach(op => {
if (!op.value) return;
_lv.push(op.value);
let _lb = (op.textContent || "").replace(/[\s ]*[-\d.]*[\s ]*ms[\s ]*$/i, "")
.trim();
let _ok = _lb && !/ms$/i.test(_lb);
let _n = eB.find(x => x.value === op.value);
if (_n) {
if (_ok) _n.text = _lb;
} else eB.push({
value: op.value,
text: _ok ? _lb : op.value,
ping: null
});
});
eBLive = _lv;
if (_lv.length && !_lv.includes(eF) && e.value && _lv.includes(e.value)) {
eF = e.value;
localStorage.setItem("selectedRegionId", eF);
if (e2) e2.textContent = eT();
}
let _pn = document.querySelectorAll(".mod-server-clone .mod-server-ping");
if (_pn.length && _pn.length !== eBv().length) {
try {
e5(true)
} catch (_e5) {
let _cl = i(".mod-server-clone");
if (_cl) _cl.remove();
}
}
} catch (_rse) {
window.__ssbErr("net#3", _rse)
}
}
if (e && (eq !== e && (eq = e, e.value = eF, (() => {
try {
if (e.options.length > 0) e.dispatchEvent(new Event("change", {
bubbles: true
}));
} catch (_re) {
window.__ssbErr("net#4", _re)
}
})(), e.addEventListener("change", e => {
eF = e.target.value;
localStorage.setItem("selectedRegionId", eF);
if (e2) e2
.textContent = eT();
if (e.isTrusted) _apHold(eF);
})), e.options.length > 0)) {
let t = false;
if (Array.from(e.options).forEach(e => {
let o = function e(t) {
let o = t.match(/(\d+)\s*ms/i);
return o ? parseInt(o[1]) : null
}(e.textContent);
if (o != null) t = true;
let n = eB.find(t => t.value === e.value);
if (n) n.ping = o;
}), t && function e() {
document.querySelectorAll(".mod-server-clone .mod-server-ping").forEach((e, t) => {
let _vb = eBv();
if (t >= _vb.length) return;
let o = _vb[t];
e.textContent = o.ping != null ? o.ping + "ms" : "-";
let [n, i] = eN(o.ping);
e.style.setProperty("background", n, "important");
e.style.setProperty("color",
i, "important");
})
}(), t && d.ping.autoPickBest && !ej) {
let _vb = eBv(),
o = _vb.filter(e => e.ping != null);
if (!_apT0) _apT0 = Date.now();
if (o.length && (o.length === _vb.length || Date.now() - _apT0 >= 5e3)) {
ej = true;
let n = o[0];
o.forEach(e => {
if (e.ping < n.ping) n = e;
});
let cur = _vb.find(e => e.value === eF);
if (!(_apHeld() === eF || !n || n.value === eF || cur && cur.ping != null && n.ping > cur
.ping -
Math.max(15, .2 * cur.ping))) {
eH(n.value);
if (window.__ssbUI) window.__ssbUI.toast(
"Switched to " + (n.text || n.value) + " (" + n.ping +
" ms), the region with the lowest ping.");
}
}
}
}
}, 1500);
let eW = () => {
if (!document.hidden && !document.pointerLockElement) {
try {
! function e() {
let t = document.getElementById("settings_misc");
if (!t || document.getElementById("mod-settings-section")) return;
let o = {
"Hide HP": "Hides the green health bar at the bottom center.",
"Hide Ammo & Grenades": "Hides the bullet ammo counter and the grenade inventory.",
"Hide Egg Count": "Hides your current egg count in the main account display.",
"Hide Best Streak": "Hides the shell streak notifications/counters.",
"Hide Game Stats": "Hides match versus headers, team scores, and spatula/capture status widgets.",
"Hide Scoreboard": "Hides the players list (scoreboard) in the top-left corner.",
"Hide Kill Feed": "Hides the kill feed (who cracked who) in the top-right corner.",
"Hide Chick'n Winner": "Hides the Chick'n Winner button in the bottom-left corner of the main menu and of the respawn screen during a match.",
"Hide Challenges": "Hides the Challenges list on the respawn screen, and the Challenge Complete pop-up and its sound during a match. The home screen keeps its Challenges tab, so you can still claim rewards there.",
"Hide Scope Lines": "Hides black overlay crosshair/lines when aiming down sniper scopes.",
"Hide Chat": "Completely hides the in-game chat, including the chat box in the bottom-left corner.",
"Hide Explosion Fire": "Hides red/yellow flame sprite animations from grenade blasts.",
"Hide Yolk Burst": "Hides the yolk that bursts out when an egg is cracked.",
"Hide Damage Splats": "Hides the yolk splats that spray when an egg is hit or cracked.",
"Hide Bullet Splats": "Hides the small puff when a bullet hits a wall. Grenade smoke, rocket trails and player-hit effects stay visible.",
"Hide Shell Burst": "Hides the pieces of shell that fly out when an egg is cracked.",
"Hide Bullets": "Hides the physical bullet tracer meshes to improve focus and frame rate.",
"Disable All Particles": "Hides everything on this page at once. Smoke stays visible.",
"Uncap FPS": "Runs the game's frames back to back while you're spawned in, never on the home screen or in menus. May increase CPU/GPU usage. A higher FPS counter does not guarantee smoother displayed frames. The gear opens Controlled Uncap and Target FPS. If your mouse feels delayed, turn on Controlled Uncap there.",
"Controlled Uncap": "With Uncap FPS on, runs extra frames only while your graphics card keeps up, and holds them back when your mouse would lag. Needs Uncap FPS on.",
"Target FPS": "With Uncap FPS on, caps the frame rate at this many frames per second while you're spawned in. The slider goes from Off (far left) to 1000. Type any rate from 30 to 1000 in the box, or clear it for Off. Off runs frames as fast as the game can go. Needs Uncap FPS on.",
"Hide FPS": "Completely hides the FPS display from the in-game HUD.",
"Hide Ping": "Completely hides the ping display from the in-game HUD.",
"Show Frametime (ms)": "Swaps standard FPS into milliseconds per frame (frametime) readout.",
"Show Session Time": "Displays a real-time count of how long you've been playing in this session.",
"Session Time Counts From": "Where Show Session Time's TIME counts from: when you loaded the page, or when the match you're in started. Outside a match it shows the time since the page loaded.",
"Hide Box Background": "Removes the dark backdrop behind the in-game FPS / ping box.",
"Server Picker": "Adds a server region picker with live ping readouts to the home screen, beside Game Mode.",
"Auto-pick Best Server": "When the region list shows ping times, waits for them all (up to 5 seconds) and switches to the lowest, if it beats your region by at least 15 ms or 20%, whichever is more. A region you pick yourself stays until you turn this off and on again.",
"Pause-Menu Volume Slider": "Adds an extra master volume slider directly under the pause weapon selection.",
"Show Changed Tab": "Shows the Changed tab in the MODS sidebar, listing settings that differ from their defaults with a Reset for each. Off by default.",
"Advanced Settings": "Shows the Effects and Gameplay tabs in the MODS sidebar, and what each Manage button does under it. Off by default. The settings on the hidden tabs keep working, and searching still finds them.",
"King of the Coop Stats": "Adds each player's time on the coop, captures and takeovers to the King of the Coop scoreboard and match history. Needs Stats Tracker on.",
"When King of the Coop Ends": "When a team wins a King of the Coop game, copies the scoreboard picture to your clipboard or downloads it. It's the picture Copy Image and Download make in the stats window. Needs Stats Tracker on.",
"Stats Tracker": "Tracks kills, deaths, KDR and local match history.",
"Kill Bars": "Adds a team-colored bar behind each player in the stats window and its pictures. The team's top kill count fills the row; the other bars are proportional. Off by default.",
"Highlight Your Name": "Highlights your own row in live stats, saved matches and their pictures.",
"Pin Stats on Pause Menu": "Shows a pinned compact kills/deaths/KDR overlay above the in-game pause menu's weapon select.",
"Stats Hotkey": "The keyboard key that toggles the match stats panel. Clear removes the key.",
"Legacy Skins": "Restores the classic/old gun models for the 7 default weapons (visual only). Toggles live without reload; in an active match your held gun updates on next equip/respawn.",
"Legacy Sounds": "Restores the classic/old weapon & game sound effects (fire, reload, pickup, grenade, swap). Loads legacy audio on first enable, then toggles live without reload.",
"Auto Fullscreen": "Goes fullscreen like F11 when you click into a match. In Chrome and Edge, Esc only pauses: hold Esc to leave fullscreen until the next match.",
"Tab Out Key": "The keyboard key that releases pointer lock so you can tab away without snapping the camera. Clear removes the key.",
"Render Scale": "Draws the game at a lower resolution for more FPS. 1 is the normal resolution, 2 is half the width and height. Higher looks blurrier. Smart Auto Detail can still lower it further when your FPS drops.",
"GUI Scale": "Makes the game's HUD, menus, chat and scoreboard smaller or larger. 1 is the normal size and most of the range makes things smaller. The crosshair keeps its size. Applies when you let go of the slider.",
"FOV (Black Bars)": "Widens your view by adding black bars at the top and bottom. The HUD and menus keep their normal size unless Resize Everything is on. Only in matches; 1 turns it off.",
"Reset All Mod Settings": "Restore every MODS setting to its default, including Block Ads, Infinite Chat History, the Match History button and the favorites options. Your crosshairs aren't affected."
};
if (!document.getElementById("mod-settings-style")) {
let n = document.createElement("style");
n.id = "mod-settings-style";
n.textContent =
`#mod-settings-section { font-family: "Nunito", system-ui, sans-serif !important; }
#mod-settings-section .mod-header { font-family:"Sigmar One", sans-serif !important; font-weight:normal; font-size: 24px; text-transform:uppercase; color:var(--ssb-ink); margin: 0 0 12px 0; }
#mod-settings-section .mod-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap: 10px 40px; margin-bottom: 20px; }
#mod-settings-section .mod-item { display:flex; flex-direction:row; align-items:center; gap:20px; cursor:pointer; -webkit-user-select:none; user-select:none; margin-bottom:0; }
#mod-settings-section .mod-item input[type="checkbox"] { position:absolute; opacity:0; width:0; height:0; pointer-events:none; }
#mod-settings-section .mod-box { width: 36px; height: 36px; border-radius: 9px; background:#ffffff !important; opacity: 1 !important; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
#mod-settings-section .mod-box::after { content:''; display:none; width: 9px; height: 18px; border: 5px solid var(--ssb-blue); border-top:none; border-left:none; transform: rotate(45deg); margin-top: -4px; }
#mod-settings-section .mod-item input:checked ~ .mod-box::after { display:block; }
#mod-settings-section .mod-label { font-family:"Nunito", system-ui, sans-serif !important; font-size: 22px; font-weight:700; color:var(--ssb-blue); line-height:1.2; }
#mod-settings-section .mod-slider-container { grid-column:1 / -1; display:flex; flex-direction:row; align-items:center; gap:24px; margin:15px 0 30px 0; }
#mod-settings-section .mod-slider-label { font-family:"Nunito", system-ui, sans-serif !important; font-size: 22px; font-weight:700; color:var(--ssb-blue); min-width:200px; text-align:left; }
#mod-settings-section .mod-slider { -webkit-appearance:none; flex:1; height:10px; border-radius:5px; background:#ffffff !important; border: 1px solid rgba(12,87,111,0.15); outline:none; cursor:pointer; }
#mod-settings-section .mod-slider::-webkit-slider-thumb { -webkit-appearance:none; width:28px; height:28px; border-radius:50%; background:var(--ssb-yolk) !important; border:4px solid #ffffff !important; box-shadow:0 1px 4px rgba(0,0,0,0.35); cursor:pointer; }
#mod-settings-section .mod-slider::-moz-range-thumb { width:28px; height:28px; border-radius:50%; background:var(--ssb-yolk) !important; border:4px solid #ffffff !important; box-shadow:0 1px 4px rgba(0,0,0,0.35); cursor:pointer; }
#mod-settings-section .mod-num-input { width:100px; padding:8px 12px; border:none !important; border-radius:10px; background:#ffffff !important; color:var(--ssb-ink) !important; font-family:"Nunito", system-ui, sans-serif !important; font-size: 18px; font-weight: 700; text-align:center; outline:none; transition:border-color 0.15s,background 0.15s; -moz-appearance:textfield; }
#mod-settings-section .mod-num-input::-webkit-outer-spin-button, #mod-settings-section .mod-num-input::-webkit-inner-spin-button { -webkit-appearance:none; margin:0; }
#mod-settings-section .mod-num-input:focus { border:none !important; }
.mod-tab-active .settings-content { display:none !important; }
.mod-tab-active #settings_keyboard, .mod-tab-active #settings_controller, .mod-tab-active #settings_misc { display:none !important; }

/* Crosshair tab */
#mod-crosshair-section { font-family: "Nunito", system-ui, sans-serif !important; }
#mod-crosshair-section .ch2-top { display: flex; gap: 30px; align-items: flex-start; }
#mod-crosshair-section .ch2-preview-col { flex: 1; min-width: 0; position: sticky; top: 0; z-index: 10; }
#mod-crosshair-section .ch2-preview-wrap { width: 100%; aspect-ratio: 1; border-radius: 16px; border: 2px solid rgba(12,87,111,0.35); overflow: hidden; background: #ffffff; margin-bottom: 16px; position: relative; }
#mod-crosshair-section .ch2-right-col { flex: 1; min-width: 0; }
#mod-crosshair-section .ch2-control-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 12px; }
#mod-crosshair-section .ch2-label { font-family:"Nunito", system-ui, sans-serif !important; font-size: 16px; font-weight: 700; color: var(--ssb-blue); white-space: nowrap; }
#mod-crosshair-section .ch2-control-right { display: flex; align-items: center; gap: 14px; }
#mod-crosshair-section .ch2-color { width: 54px; height: 44px; border:none !important; border-radius: 10px; padding: 0; cursor: pointer; flex-shrink: 0; background: none; }
#mod-crosshair-section .ch2-color::-webkit-color-swatch-wrapper { padding: 0; }
#mod-crosshair-section .ch2-color::-webkit-color-swatch { border: none; border-radius: 10px; }
#mod-crosshair-section .ch2-hex { width: 80px; padding: 4px 8px; border:none !important; border-radius: 10px; background: #ffffff !important; color: var(--ssb-ink) !important; font-family: "Nunito", system-ui, sans-serif !important; font-size: 14px; font-weight: 700; text-align: center; outline: none; }
#mod-crosshair-section .ch2-hex:focus { border:none !important; }
#mod-crosshair-section .ch2-slider-wrap { margin-bottom: 20px; }
#mod-crosshair-section .ch2-slider-lrow { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
#mod-crosshair-section .ch2-slider { -webkit-appearance: none; width: 100%; height: 6px; border-radius: 5px; background: #ffffff !important; border: 1px solid rgba(12,87,111,0.15); outline: none; cursor: pointer; }
#mod-crosshair-section .ch2-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 21px !important; height: 21px !important; border-radius: 50%; background: var(--ssb-yolk) !important; border: 4.5px solid #ffffff !important; box-shadow: 0 1px 4px rgba(0,0,0,0.3); cursor: pointer; }
#mod-crosshair-section .ch2-slider::-moz-range-thumb { width: 21px !important; height: 21px !important; border-radius: 50%; background: var(--ssb-yolk) !important; border: 4.5px solid #ffffff !important; box-shadow: 0 1px 4px rgba(0,0,0,0.3); cursor: pointer; }
#mod-crosshair-section .ch2-num { width: 60px; padding: 4px 8px; border:none !important; border-radius: 10px; background: #ffffff !important; color: var(--ssb-ink) !important; font-family: "Nunito", system-ui, sans-serif !important; font-size: 14px; font-weight: 700; text-align: center; outline: none; -moz-appearance: textfield; }
#mod-crosshair-section .ch2-num::-webkit-outer-spin-button, #mod-crosshair-section .ch2-num::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
#mod-crosshair-section .ch2-num:focus { border:none !important; }
#mod-crosshair-section .ch2-check-label { display: flex; align-items: center; gap: 20px; cursor: pointer; user-select: none; margin-bottom: 10px; }
#mod-crosshair-section .ch2-check-label input[type=checkbox] { position: absolute; opacity: 0; width: 0; height: 0; pointer-events: none; }
#mod-crosshair-section .ch2-check-box { width: 36px; height: 36px; border-radius: 9px; background: #ffffff !important; opacity: 1 !important; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
#mod-crosshair-section .ch2-check-label input:checked ~ .ch2-check-box::after { content: ''; display: block; width: 9px; height: 18px; border: 5px solid var(--ssb-blue); border-top: none; border-left: none; transform: rotate(45deg); margin-top: -4px; }
#mod-crosshair-section .ch2-check-text { font-family:"Nunito", system-ui, sans-serif !important; font-size: 22px; font-weight: 700; color: var(--ssb-blue); line-height: 1.2; }
#mod-crosshair-section .ch2-shape-row { display: flex; gap: 16px; margin-bottom: 24px; }
#mod-crosshair-section .ch2-shape-btn { flex: 1 !important; border: none !important; border-radius: 12px !important; background: var(--ssb-card) !important; color: var(--ssb-ink) !important; font-family: "Nunito", system-ui, sans-serif !important; font-size: 16px !important; font-weight: 900 !important; text-transform: uppercase !important; letter-spacing: 0.5px !important; cursor: pointer !important; transition: all 0.1s ease !important; box-shadow: 0 4px 0 var(--ssb-card-shadow) !important; box-sizing: border-box !important; height: 50px !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; text-shadow: 0 1px 2px rgba(255,255,255,0.4) !important; }
#mod-crosshair-section .ch2-shape-btn:hover { background: var(--ssb-card-hi) !important; box-shadow: 0 4px 0 var(--ssb-card-shadow-hi) !important; transform: translateY(-1px) !important; }
#mod-crosshair-section .ch2-shape-btn:active { transform: translateY(3px) !important; box-shadow: 0 1px 0 var(--ssb-card-shadow-hi) !important; }
#mod-crosshair-section .ch2-shape-btn.active { background: var(--ssb-blue) !important; color: #ffffff !important; box-shadow: 0 4px 0 var(--ssb-ink) !important; text-shadow: 0 1px 2px rgba(0,0,0,0.3) !important; }
#mod-crosshair-section .ch2-shape-btn.active:hover { background: var(--ssb-blue-hi) !important; box-shadow: 0 4px 0 var(--ssb-blue-shadow) !important; transform: translateY(-1px) !important; }
#mod-crosshair-section .ch2-shape-btn.active:active { transform: translateY(3px) !important; box-shadow: 0 1px 0 var(--ssb-blue-shadow) !important; }
#mod-settings-section .ch2-reset-btn, #mod-crosshair-section .ch2-reset-btn { width: 100% !important; padding: 12px 24px !important; background: var(--ssb-red) !important; color: #ffffff !important; border: none !important; cursor: pointer !important; font-weight: 900 !important; font-size: 14px !important; border-radius: 12px !important; margin-top: 10px !important; font-family: "Nunito", system-ui, sans-serif !important; text-transform: uppercase !important; letter-spacing: 0.5px !important; transition: all 0.1s ease !important; box-shadow: 0 4px 0 var(--ssb-red-shadow) !important; box-sizing: border-box !important; height: 40px !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; text-shadow: 0 1px 2px rgba(0,0,0,0.3) !important; }
#mod-settings-section .ch2-reset-btn:hover, #mod-crosshair-section .ch2-reset-btn:hover { background: var(--ssb-red-hi) !important; box-shadow: 0 4px 0 var(--ssb-red-shadow-hi) !important; transform: translateY(-1px) !important; }
#mod-settings-section .ch2-reset-btn:active, #mod-crosshair-section .ch2-reset-btn:active { transform: translateY(3px) !important; box-shadow: 0 1px 0 var(--ssb-red-shadow-hi) !important; }
#mod-crosshair-section .ch2-profile-select { background: transparent !important; border: none !important; color: var(--ssb-ink) !important; font-size: 13px !important; font-weight: 700 !important; font-family: "Nunito", system-ui, sans-serif !important; cursor: pointer !important; padding: 2px 4px !important; outline: none !important; width: 100% !important; min-width: 0 !important; text-overflow: ellipsis !important; white-space: nowrap !important; overflow: hidden !important; }
#mod-crosshair-section .ch2-icon-bar { display: flex !important; align-items: center !important; gap: 5px !important; background: rgba(255,255,255,0.18) !important; border-radius: 10px !important; padding: 5px 10px !important; margin-bottom: 8px !important; box-shadow: 0 2px 8px rgba(0,0,0,0.08) !important; border: 1.5px solid rgba(14,118,151,0.2) !important; flex-wrap: nowrap !important; width: 100% !important; box-sizing: border-box !important; overflow: visible !important; }
#mod-crosshair-section .ch2-icon-divider { width: 1.5px !important; height: 22px !important; background: rgba(14,118,151,0.3) !important; margin: 0 3px !important; flex-shrink: 0 !important; border-radius: 1px !important; }
#mod-crosshair-section .ch2-icon-select-wrap { display: flex !important; align-items: center !important; flex: 1 !important; min-width: 60px !important; overflow: hidden !important; }
#mod-crosshair-section .ch2-icon-btn { width: 30px !important; height: 30px !important; border: none !important; background: var(--ssb-blue) !important; border-radius: 8px !important; cursor: pointer !important; color: #ffffff !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; transition: all 0.1s ease !important; flex-shrink: 0 !important; padding: 0 !important; box-shadow: 0 2.5px 0 var(--ssb-ink) !important; overflow: visible !important; }
#mod-crosshair-section .ch2-icon-btn svg { display: block !important; pointer-events: none !important; filter: drop-shadow(0 1px 1px rgba(0,0,0,0.25)) !important; }
#mod-crosshair-section .ch2-icon-btn:hover { background: var(--ssb-blue-hi) !important; box-shadow: 0 2.5px 0 var(--ssb-blue-shadow) !important; transform: translateY(-1px) !important; }
#mod-crosshair-section .ch2-icon-btn:active { transform: translateY(2px) !important; box-shadow: 0 0.5px 0 var(--ssb-blue-shadow) !important; }
#mod-crosshair-section .ch2-icon-btn.danger { background: var(--ssb-red) !important; box-shadow: 0 2.5px 0 var(--ssb-red-shadow) !important; }
#mod-crosshair-section .ch2-icon-btn.danger:hover { background: var(--ssb-red-hi) !important; box-shadow: 0 2.5px 0 var(--ssb-red-shadow-hi) !important; transform: translateY(-1px) !important; }
#mod-crosshair-section .ch2-icon-btn.danger:active { transform: translateY(2px) !important; box-shadow: 0 0.5px 0 var(--ssb-red-shadow-hi) !important; }
/* Frosted-Glass Card Modules */
#mod-crosshair-section .ch2-group-card {
background: rgba(255, 255, 255, 0.28) !important;
border: 1.5px solid rgba(14, 118, 151, 0.15) !important;
border-radius: 14px !important;
padding: 20px !important;
margin-bottom: 16px !important;
box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06) !important;
box-sizing: border-box !important;
}
#mod-crosshair-section .ch2-group-card .ch2-card-title {
font-family: "Sigmar One", sans-serif !important;
font-size: 16px !important;
color: var(--ssb-ink) !important;
text-transform: uppercase !important;
margin-top: 0 !important;
margin-bottom: 14px !important;
letter-spacing: 0.5px !important;
display: flex !important;
justify-content: space-between !important;
align-items: center !important;
}
#mod-crosshair-section .ch2-collapse-body {
overflow: hidden !important;
transition: max-height 0.35s ease, opacity 0.25s ease !important;
opacity: 1 !important;
}
#mod-crosshair-section .ch2-collapse-body.collapsed {
max-height: 0 !important;
opacity: 0 !important;
pointer-events: none !important;
}

#mod-settings-section .ch2-profile-btn, #mod-crosshair-section .ch2-profile-btn { flex: 1 !important; padding: 0 10px !important; border: none !important; border-radius: 10px !important; background: var(--ssb-blue) !important; color: #ffffff !important; font-family: "Nunito", system-ui, sans-serif !important; font-size: 14px !important; font-weight: 900 !important; text-transform: uppercase !important; letter-spacing: 0.5px !important; cursor: pointer !important; transition: all 0.1s ease !important; box-shadow: 0 3px 0 var(--ssb-ink) !important; box-sizing: border-box !important; height: 40px !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; text-shadow: 0 1px 2px rgba(0,0,0,0.3) !important; }
#mod-settings-section .ch2-profile-btn:hover, #mod-crosshair-section .ch2-profile-btn:hover { background: var(--ssb-blue-hi) !important; box-shadow: 0 4px 0 var(--ssb-blue-shadow) !important; transform: translateY(-1px) !important; }
#mod-settings-section .ch2-profile-btn:active, #mod-crosshair-section .ch2-profile-btn:active { transform: translateY(3px) !important; box-shadow: 0 1px 0 var(--ssb-blue-shadow) !important; }
#mod-settings-section .ch2-profile-btn.danger, #mod-crosshair-section .ch2-profile-btn.danger { background: var(--ssb-red) !important; box-shadow: 0 4px 0 var(--ssb-red-shadow) !important; }
#mod-settings-section .ch2-profile-btn.danger:hover, #mod-crosshair-section .ch2-profile-btn.danger:hover { background: var(--ssb-red-hi) !important; box-shadow: 0 4px 0 var(--ssb-red-shadow-hi) !important; transform: translateY(-1px) !important; }
#mod-settings-section .ch2-profile-btn.danger:active, #mod-crosshair-section .ch2-profile-btn.danger:active { transform: translateY(3px) !important; box-shadow: 0 1px 0 var(--ssb-red-shadow-hi) !important; }
#mod-settings-section input[type="file"], #mod-crosshair-section input[type="file"] { display: none !important; }
/* MODS / CROSSHAIR labels: sized like the native tab text (follows the UI scale), and capped by the tab strip's width
(cqw = 1% of the strip, which holds five tabs) so CROSSHAIR always fits its tab at any resolution or zoom.
The game gives .ss_bigtab a min-width of 8em (em follows screen height), so five tabs overflowed the dialog on
wider-than-tall screens; all five tabs share the strip equally and may shrink below it. */
.mod-tab-strip { container-type: inline-size; }
.mod-tab-strip > * { flex: 1 1 0 !important; min-width: 0 !important; }
.mod-tab-label { font-size: min(calc(16px * var(--ssb-ui-scale, 1)), 2.2cqw) !important; line-height: 1; white-space: nowrap; letter-spacing: 0.02em; }
.mod-tab-label { opacity: 0.4; transition: opacity 0.15s; }
#mod-settings-tab:hover .mod-tab-label, #mod-crosshair-tab:hover .mod-tab-label { opacity: 0.75; }
#mod-settings-tab.mod-tab-is-active .mod-tab-label, #mod-crosshair-tab.mod-tab-is-active .mod-tab-label { opacity: 1; }
.mod-native-dim { opacity: 0.45 !important; transition: opacity 0.15s; }

/* Search box + section shortcuts, placed above the MODS list (outside its scroll area) */
#mod-settings-section { position:relative; }
#mod-top-bar { display:flex; flex:none; flex-wrap:wrap; align-items:center; gap:8px 12px; margin:0; padding:10px 10px 8px; box-sizing:border-box; }
#mod-top-bar:has(+ #mod-settings-section[style*="display: none"]), #mod-top-bar:not(:has(+ #mod-settings-section)) { display:none !important; }
#mod-top-bar .mod-search-wrap { position:relative; flex:1 1 200px; min-width:170px; }
#mod-top-bar .mod-search { display:block; width:100%; height:38px; box-sizing:border-box; margin:0; padding:0 34px 0 36px; border:3px solid var(--ssb-blue) !important; border-radius:8px; background:#fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230E7697' stroke-width='3' stroke-linecap='round'%3E%3Ccircle cx='10.5' cy='10.5' r='6.5'/%3E%3Cpath d='M15.5 15.5 21 21'/%3E%3C/svg%3E") no-repeat 11px 50% / 16px 16px !important; color:var(--ssb-ink) !important; font-family:"Nunito",system-ui,sans-serif !important; font-size:16px; font-weight:700; text-align:left; outline:none; }
#mod-top-bar .mod-search::placeholder { color:#5d98a8; }
#mod-top-bar .mod-search:focus, #mod-top-bar .mod-search:focus-visible { outline:none !important; } /* the shared keyboard focus ring (--ssb-focus) is left off the search box, which is focused on opening */
#mod-top-bar .mod-search-clear { position:absolute; right:7px; top:50%; transform:translateY(-50%); width:22px; height:22px; margin:0; padding:0; border:none; border-radius:50%; background:var(--ssb-blue); color:#fff; font-family:"Nunito",system-ui,sans-serif; font-size:16px; font-weight:900; line-height:22px; text-align:center; cursor:pointer; visibility:hidden; }
#mod-top-bar .mod-search-clear:hover { background:var(--ssb-blue-hi); }
#mod-top-bar .mod-jump-bar { display:flex; flex-wrap:wrap; gap:6px; }
#mod-top-bar .mod-jump-chip { height:30px; margin:0; padding:0 11px; border:2px solid var(--ssb-line); border-radius:999px; background:rgba(255,255,255,0.35); color:var(--ssb-ink); font-family:"Nunito",system-ui,sans-serif; font-size:13px; font-weight:900; white-space:nowrap; cursor:pointer; transition:background 0.12s, border-color 0.12s, color 0.12s, opacity 0.12s; }
#mod-top-bar .mod-jump-chip:hover { border-color:var(--ssb-blue); background:rgba(255,255,255,0.6); }
#mod-top-bar .mod-jump-chip.active { border-color:var(--ssb-blue); background:var(--ssb-blue); color:#fff; }
#mod-top-bar .mod-jump-chip:disabled { opacity:0.45; cursor:default; }

/* ---- MODS sidebar ---- */
#popupInnards.mod-tab-active {
--pm-glass: rgba(255,255,255,0.24); --pm-glass-hi: rgba(255,255,255,0.42); --pm-edge: rgba(255,255,255,0.5);
--pm-sub: rgba(12,87,111,0.72); --pm-lift: 0 10px 26px rgba(8,62,84,0.16);
--pm-orange: linear-gradient(180deg,#ffb23f 0%,#ff961d 100%); --pm-orange-edge: #cf700c;
--pm-line: rgba(12,87,111,0.1); --pm-field: rgba(255,255,255,0.72);
}
#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) {
display:grid !important; grid-template-columns:minmax(150px, 10.5em) minmax(0, 1fr); grid-template-rows:minmax(0, 1fr) auto; gap:12px 18px;
}

/* Sidebar: a frosted panel holding search and the section list */
#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar {
grid-column:1; grid-row:1; flex-direction:column; flex-wrap:nowrap; align-items:stretch; align-self:stretch; gap:14px; min-height:0; overflow-y:auto;
margin:0 0 2px; padding:12px; border:1px solid var(--pm-edge); border-radius:18px;
background:linear-gradient(180deg, rgba(255,255,255,0.32), rgba(255,255,255,0.14));
box-shadow:inset 0 1px 0 rgba(255,255,255,0.65), var(--pm-lift);
}
#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar .mod-search-wrap { flex:none; min-width:0; order:0; }
#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar .ssb-settings-feedback { flex-basis:auto; order:1; margin:-6px 2px 0; font-size:12px; }
#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar .mod-jump-bar { flex-direction:column; flex-wrap:nowrap; gap:4px; width:auto; overflow:visible; padding:0; order:2; }
#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar .mod-search { height:40px; border:2px solid rgba(14,118,151,0.28) !important; border-radius:12px; font-size:15px; box-shadow:inset 0 2px 4px rgba(8,62,84,0.08); }

/* Section buttons: quiet until hovered, the selected one is the game's orange button */
#mod-top-bar .mod-jump-chip[hidden] { display:none !important; }
#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar .mod-jump-chip {
flex:none; display:flex; align-items:center; justify-content:flex-start; gap:11px; width:100%; height:42px; margin:0; padding:0 12px;
border:2px solid transparent; border-radius:12px; background:transparent; color:var(--ssb-ink);
font-size:15px; font-weight:800; letter-spacing:0.1px; text-align:left;
transition:background 0.15s, color 0.15s, box-shadow 0.15s, transform 0.12s;
}
#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar .mod-jump-chip .pm-ico { flex:none; width:20px; height:20px; color:var(--ssb-blue); transition:color 0.15s; }
#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar .mod-jump-chip:hover:not(:disabled):not(.active) { background:var(--pm-glass-hi); border-color:transparent; }
#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar .mod-jump-chip:active:not(:disabled) { transform:translateY(1px); }
#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar .mod-jump-chip.active {
border-color:var(--pm-orange-edge); background:var(--pm-orange); color:#fff; text-shadow:0 1px 0 rgba(0,0,0,0.22);
box-shadow:inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.14), 0 6px 14px rgba(247,147,30,0.35);
}
#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar .mod-jump-chip.active .pm-ico { color:#fff; filter:drop-shadow(0 1px 0 rgba(0,0,0,0.2)); }
#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar .mod-jump-chip:disabled { opacity:0.4; }

/* Content column: one section per page. It reaches 14px past the footer on the right, where its
scrollbar sits, so the cards line up with the footer (the Crosshair settings do the same). */
#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-settings-section.ssb-paged {
grid-column:2; grid-row:1; min-height:0; height:100%; margin-right:-14px; padding:2px 8px 4px 4px !important; scrollbar-gutter:stable;
}

/* Scrollbars: a slim rounded thumb with no arrow buttons */
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar, #popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-settings-section.ssb-paged, #popupInnards > #mod-crosshair-section :is(.ch2-right-col, .ch2-top)) { scrollbar-width:auto !important; scrollbar-color:auto !important; }
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar, #popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-settings-section.ssb-paged, #popupInnards > #mod-crosshair-section :is(.ch2-right-col, .ch2-top))::-webkit-scrollbar { width:6px; height:6px; }
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar, #popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-settings-section.ssb-paged, #popupInnards > #mod-crosshair-section :is(.ch2-right-col, .ch2-top))::-webkit-scrollbar-track { background:transparent; }
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar, #popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-settings-section.ssb-paged, #popupInnards > #mod-crosshair-section :is(.ch2-right-col, .ch2-top))::-webkit-scrollbar-thumb { border-radius:999px; background:rgba(12,87,111,0.28); }
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar, #popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-settings-section.ssb-paged, #popupInnards > #mod-crosshair-section :is(.ch2-right-col, .ch2-top))::-webkit-scrollbar-thumb:hover { background:rgba(12,87,111,0.5); }
@supports not selector(::-webkit-scrollbar) {
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-top-bar, #popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-settings-section.ssb-paged, #popupInnards > #mod-crosshair-section :is(.ch2-right-col, .ch2-top)) { scrollbar-width:thin !important; scrollbar-color:rgba(12,87,111,0.35) transparent !important; }
}

/* Scrolling lists fade out at an edge only while there's more to scroll that way (scroll-driven where supported;
elsewhere they don't fade). The Crosshair settings get the same rule further down. */
@property --pm-fade-t { syntax:"<length>"; inherits:false; initial-value:0px; }
@property --pm-fade-b { syntax:"<length>"; inherits:false; initial-value:0px; }
@keyframes pm-fade { 0% { --pm-fade-t:0px; --pm-fade-b:22px; } 6%, 94% { --pm-fade-t:22px; --pm-fade-b:22px; } 100% { --pm-fade-t:22px; --pm-fade-b:0px; } }
@supports (animation-timeline: scroll()) {
#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])) > #mod-settings-section.ssb-paged {
-webkit-mask-image:linear-gradient(to bottom, transparent, #000 var(--pm-fade-t), #000 calc(100% - var(--pm-fade-b)), transparent);
mask-image:linear-gradient(to bottom, transparent, #000 var(--pm-fade-t), #000 calc(100% - var(--pm-fade-b)), transparent);
animation:pm-fade linear both; animation-timeline:scroll(self);
}
}
#mod-settings-section.ssb-paged .mod-header {
margin:2px 0 14px !important; padding-bottom:12px; border-bottom:1px solid rgba(12,87,111,0.14);
font-size:22px; letter-spacing:0.5px; line-height:1.1;
}
#mod-settings-section.ssb-paged .mod-header::after { display:block; margin-top:5px; font-family:"Nunito",system-ui,sans-serif; font-size:13.5px; font-weight:700; letter-spacing:0; line-height:1.3; text-transform:none; color:var(--pm-sub); }
#mod-settings-section.ssb-paged .mod-header[data-section="hud"]::after { content:"Choose which parts of the in-game HUD you see."; }
#mod-settings-section.ssb-paged .mod-header[data-section="chat"]::after { content:"Hide the chat, keep its whole history, show when each message arrived, or copy it."; }
#mod-settings-section.ssb-paged .mod-header[data-section="effects"]::after { content:"Turn off visual effects for a cleaner, faster game."; }
#mod-settings-section.ssb-paged .mod-header[data-section="fps"]::after { content:"Raise your frame rate, and set up the FPS and ping readout."; }
#mod-settings-section.ssb-paged .mod-header[data-section="menus"]::after { content:"Extras for the home screen, pause menu and inventory."; }
#mod-settings-section.ssb-paged .mod-header[data-section="stats"]::after { content:"Track your kills, deaths and KDR in every match."; }
#mod-settings-section.ssb-paged .mod-header[data-section="gameplay"]::after { content:"Classic skins and sounds, keys, field of view and fixes for bugs in the game."; }
#mod-settings-section.ssb-paged .mod-header[data-section="manage"]::after { content:"Back up, share or reset your MODS settings, or everything at once with a backup file."; }
#mod-settings-section.ssb-paged .mod-header[data-section="changed"]::after { content:"Settings you've changed from their defaults. Reset puts one back."; }
#mod-settings-section.ssb-paged.mod-searching .mod-header::after { display:none; }
#mod-settings-section.ssb-paged.mod-searching .mod-grid + .mod-header { margin-top:22px !important; }
#mod-settings-section.ssb-paged .mod-grid { gap:10px 12px; margin-bottom:18px; }
#mod-settings-section.ssb-paged.pm-enter > .mod-header, #mod-settings-section.ssb-paged.pm-enter > .mod-grid { animation:pm-in 0.22s ease-out both; }
#mod-settings-section.ssb-paged.pm-enter > .mod-grid { animation-delay:0.03s; }
@keyframes pm-in { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:none; } }

/* Settings as cards: name, description underneath, switch on the right */
#mod-settings-section.ssb-paged .mod-item {
display:grid; grid-template-columns:minmax(0,1fr) auto; grid-template-areas:"name box" "desc box"; align-items:center; column-gap:14px; row-gap:3px;
min-height:66px; padding:12px 14px; box-sizing:border-box;
border:1px solid var(--pm-edge); border-radius:14px; background:var(--pm-glass);
box-shadow:inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 6px rgba(8,62,84,0.06);
transition:background 0.15s, border-color 0.15s, box-shadow 0.15s, transform 0.15s;
}
#mod-settings-section.ssb-paged .mod-item:hover { background:var(--pm-glass-hi); box-shadow:inset 0 1px 0 rgba(255,255,255,0.6), 0 8px 18px rgba(8,62,84,0.12); transform:translateY(-1px); }
#mod-settings-section.ssb-paged .mod-item:has(input:checked) { background:rgba(255,255,255,0.4); border-color:rgba(255,152,31,0.6); }
#mod-settings-section.ssb-paged .mod-label { grid-area:name; font-size:16.5px; font-weight:800; line-height:1.25; color:var(--ssb-ink); }
#mod-settings-section.ssb-paged .mod-item::after {
content:attr(data-tooltip); grid-area:desc; min-width:0;
font-size:12.5px; font-weight:600; line-height:1.35; color:var(--pm-sub);
display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;
}
#mod-settings-section.ssb-paged .mod-search-tip { display:none !important; }

/* Toggle switch in place of the checkbox */
#mod-settings-section.ssb-paged .mod-box {
grid-area:box; position:relative; width:46px; height:26px; border-radius:999px;
background:rgba(12,87,111,0.22) !important; box-shadow:inset 0 2px 4px rgba(8,62,84,0.28); transition:background 0.18s, box-shadow 0.18s;
}
#mod-settings-section.ssb-paged .mod-box::after {
content:""; display:block !important; position:absolute; top:3px; left:3px; width:20px; height:20px; margin:0; border:0 !important; border-radius:50%;
background:#fff; box-shadow:0 2px 5px rgba(0,0,0,0.25); transform:none; transition:transform 0.2s cubic-bezier(0.3,1.4,0.6,1);
}
#mod-settings-section.ssb-paged .mod-item input:checked ~ .mod-box { background:var(--pm-orange) !important; box-shadow:inset 0 1px 2px rgba(0,0,0,0.15), 0 0 0 1px var(--pm-orange-edge); }
#mod-settings-section.ssb-paged .mod-item input:checked ~ .mod-box::after { transform:translateX(20px); }

/* Key and slider rows: full-width cards */
#mod-settings-section.ssb-paged .mod-slider-container {
margin:0 !important; padding:12px 14px; gap:14px; box-sizing:border-box;
border:1px solid var(--pm-edge); border-radius:14px; background:var(--pm-glass); box-shadow:inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 6px rgba(8,62,84,0.06);
}
#mod-settings-section.ssb-paged .mod-slider-label { font-size:16.5px; font-weight:800; color:var(--ssb-ink); }
#mod-settings-section.ssb-paged .mod-num-input { height:36px; padding:0 12px; border-radius:10px; font-size:15px; box-shadow:inset 0 1px 3px rgba(8,62,84,0.16); }

/* Uncap FPS: the gear on its card shows Controlled Uncap and Target FPS right after it, and hides them again.
While searching and on Changed they show like any other card, and the gear goes. */
#mod-settings-section:not(.mod-searching):not([data-page="changed"]) .mod-grid:not(.ssb-uc-open) > .ssb-uc-sub { display:none; }
#mod-settings-section:is(.mod-searching, [data-page="changed"]) .ssb-uc-gear { display:none; }
#mod-settings-section.ssb-paged:not(.mod-searching):not([data-page="changed"]) .mod-item.ssb-uc-has-gear { grid-template-columns:minmax(0,1fr) auto auto; grid-template-areas:"name gear box" "desc gear box"; }
#mod-settings-section .ssb-uc-gear {
--ssb-gear:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linejoin='round'%3E%3Cpath d='M9.96 4.89L10.23 1.95L13.77 1.95L14.04 4.89A7.4 7.4 0 0 1 15.59 5.53L17.85 3.64L20.36 6.15L18.47 8.41A7.4 7.4 0 0 1 19.11 9.96L22.05 10.23L22.05 13.77L19.11 14.04A7.4 7.4 0 0 1 18.47 15.59L20.36 17.85L17.85 20.36L15.59 18.47A7.4 7.4 0 0 1 14.04 19.11L13.77 22.05L10.23 22.05L9.96 19.11A7.4 7.4 0 0 1 8.41 18.47L6.15 20.36L3.64 17.85L5.53 15.59A7.4 7.4 0 0 1 4.89 14.04L1.95 13.77L1.95 10.23L4.89 9.96A7.4 7.4 0 0 1 5.53 8.41L3.64 6.15L6.15 3.64L8.41 5.53A7.4 7.4 0 0 1 9.96 4.89Z'/%3E%3Ccircle cx='12' cy='12' r='3.2'/%3E%3C/svg%3E");
grid-area:gear; position:relative; flex:none; width:36px; height:36px; margin:0; padding:0;
border:1px solid rgba(12,87,111,0.16); border-radius:11px; background:rgba(255,255,255,0.5); color:var(--ssb-ink);
box-shadow:inset 0 1px 0 rgba(255,255,255,0.7), 0 1px 3px rgba(8,62,84,0.1); cursor:pointer;
transition:background 0.15s, border-color 0.15s, box-shadow 0.15s, transform 0.15s;
}
#mod-settings-section .ssb-uc-gear::before { content:""; position:absolute; inset:0; margin:auto; width:20px; height:20px; background:currentColor; -webkit-mask:var(--ssb-gear) center / contain no-repeat; mask:var(--ssb-gear) center / contain no-repeat; transition:transform 0.4s cubic-bezier(0.3,1.3,0.6,1); }
#mod-settings-section .ssb-uc-gear:hover { background:#fff; border-color:rgba(12,87,111,0.26); box-shadow:inset 0 1px 0 #fff, 0 4px 10px rgba(8,62,84,0.16); }
#mod-settings-section .ssb-uc-gear:hover::before { transform:rotate(30deg); }
#mod-settings-section .ssb-uc-gear:active { transform:translateY(1px); }
#mod-settings-section .ssb-uc-gear:focus-visible { outline:2px solid var(--ssb-blue); outline-offset:2px; }
#mod-settings-section .ssb-uc-gear[aria-expanded="true"] { background:rgba(12,87,111,0.12); border-color:rgba(12,87,111,0.22); box-shadow:inset 0 1px 3px rgba(8,62,84,0.22); }
#mod-settings-section .ssb-uc-gear[aria-expanded="true"]::before { transform:rotate(90deg); }
#mod-settings-section .ssb-uc-open > .ssb-uc-sub { animation:ssb-uc-in 0.2s ease-out; }
@keyframes ssb-uc-in { from { opacity:0; transform:translateY(-6px); } }
@media (prefers-reduced-motion: reduce) {
#mod-settings-section .ssb-uc-gear::before { transition:none; }
#mod-settings-section .ssb-uc-open > .ssb-uc-sub { animation:none; }
}

/* Footer: version, update status and credit on one bar along the bottom of the window.
It lives in #popupInnards (not the list), so it only shows while MODS or CROSSHAIR is open. */
#popupInnards > #mod-settings-footer { display:none !important; }
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])), #popupInnards.mod-tab-active:has(> #mod-crosshair-section:not([style*="display: none"]))) > #mod-settings-footer {
grid-column:1 / -1; grid-row:2; zoom:var(--ssb-ui-scale, 1);
display:flex !important; flex-wrap:nowrap; align-items:center; justify-content:flex-start !important; gap:12px !important;
margin:0 !important; padding:9px 14px !important; min-width:0;
border:1px solid rgba(255,255,255,0.6) !important; border-radius:16px;
background:linear-gradient(180deg, rgba(232,249,254,0.72), rgba(210,241,251,0.82));
box-shadow:inset 0 1px 0 rgba(255,255,255,0.85), 0 8px 22px rgba(8,62,84,0.12);
}
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])), #popupInnards.mod-tab-active:has(> #mod-crosshair-section:not([style*="display: none"]))) > #mod-settings-footer .mod-footer-version {
display:inline-flex; align-items:center; gap:8px; min-width:0; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;
font-size:14px !important; font-weight:900; color:var(--ssb-ink); text-decoration:none;
}
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])), #popupInnards.mod-tab-active:has(> #mod-crosshair-section:not([style*="display: none"]))) > #mod-settings-footer .mod-footer-version::before {
content:""; flex:none; width:18px; height:18px; border-radius:50%;
background:radial-gradient(circle at 50% 50%, #ffb000 0 36%, #ff9800 37% 40%, #fff 42% 100%);
box-shadow:0 0 0 1.5px rgba(12,87,111,0.22), 0 1px 3px rgba(8,62,84,0.25);
}
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])), #popupInnards.mod-tab-active:has(> #mod-crosshair-section:not([style*="display: none"]))) > #mod-settings-footer .mod-footer-version:hover { color:var(--ssb-blue); text-decoration:underline; }
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])), #popupInnards.mod-tab-active:has(> #mod-crosshair-section:not([style*="display: none"]))) > #mod-settings-footer .mod-footer-mid { margin-left:auto; flex-wrap:nowrap; }
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])), #popupInnards.mod-tab-active:has(> #mod-crosshair-section:not([style*="display: none"]))) > #mod-settings-footer .mod-footer-btn { height:30px; border-width:2px; border-radius:9px; background:rgba(255,255,255,0.7); font-size:13px !important; box-shadow:0 1px 0 rgba(255,255,255,0.8) inset, 0 2px 5px rgba(8,62,84,0.1); }
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])), #popupInnards.mod-tab-active:has(> #mod-crosshair-section:not([style*="display: none"]))) > #mod-settings-footer .mod-footer-btn:hover { background:#fff; }
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])), #popupInnards.mod-tab-active:has(> #mod-crosshair-section:not([style*="display: none"]))) > #mod-settings-footer #ssb-update-status, :is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])), #popupInnards.mod-tab-active:has(> #mod-crosshair-section:not([style*="display: none"]))) > #mod-settings-footer #ssb-update-status .ssb-upd-go { font-size:13px !important; }
:is(#popupInnards.mod-tab-active:has(> #mod-settings-section:not([style*="display: none"])), #popupInnards.mod-tab-active:has(> #mod-crosshair-section:not([style*="display: none"]))) > #mod-settings-footer > a { flex:none; font-size:13px !important; font-weight:900; white-space:nowrap; }

/* Manage: the three actions as tiles with an icon, a title and what they do */
#mod-settings-section.ssb-paged .mod-grid[data-section="manage"] { gap:12px; }
#mod-settings-section.ssb-paged .mod-grid[data-section="manage"] > button {
height:auto !important; min-height:96px; margin:0 !important; padding:14px 16px !important;
display:flex !important; flex-direction:column !important; align-items:flex-start !important; justify-content:center !important; gap:5px;
border-radius:14px !important; text-align:left; text-transform:none !important; letter-spacing:0.1px !important;
font-size:15px !important; font-weight:900 !important; line-height:1.2;
}
#mod-settings-section.ssb-paged .mod-grid[data-section="manage"] > button::before { content:""; flex:none; width:22px; height:22px; margin-bottom:3px; background:currentColor; -webkit-mask:var(--pm-mask) center / contain no-repeat; mask:var(--pm-mask) center / contain no-repeat; }
#mod-settings-section.ssb-paged .mod-grid[data-section="manage"] > button::after { content:attr(data-tooltip); font-size:12.5px; font-weight:700; line-height:1.35; opacity:0.88; text-shadow:none; white-space:normal; }
/* Without Advanced Settings the Manage tiles are an icon and a title; hovering one still shows what it does */
#mod-settings-section.ssb-paged:not(.ssb-adv) .mod-grid[data-section="manage"] > button { min-height:76px; justify-content:center; }
#mod-settings-section.ssb-paged:not(.ssb-adv) .mod-grid[data-section="manage"] > button[data-pm="support"],
#mod-settings-section.ssb-paged:not(.ssb-adv) .mod-grid[data-section="manage"] > button[data-pm="intro"] { min-height:76px; }
#mod-settings-section.ssb-paged:not(.ssb-adv) .mod-grid[data-section="manage"] > button::before { width:30px; height:30px; margin-bottom:4px; }
#mod-settings-section.ssb-paged:not(.ssb-adv) .mod-grid[data-section="manage"] > button::after { display:none; }
/* Game Fixes (MODS > Gameplay): the fixes under the gear look off while the Game Fixes switch is off */
#mod-settings-section .mod-grid.ssb-gf-off > .ssb-gf-sub { opacity:0.55; }
#mod-settings-section.ssb-paged .mod-grid[data-section="manage"] > button:nth-child(1) { --pm-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='9' y='9' width='12' height='12' rx='2'/%3E%3Cpath d='M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1'/%3E%3C/svg%3E"); }
#mod-settings-section.ssb-paged .mod-grid[data-section="manage"] > button:nth-child(2) { --pm-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3v12M7 10l5 5 5-5M4 20h16'/%3E%3C/svg%3E"); }
#mod-settings-section.ssb-paged .mod-grid[data-section="manage"] > button[data-pm="bsave"] { --pm-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='5' rx='1'/%3E%3Cpath d='M5 9v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9M10 13h4'/%3E%3C/svg%3E"); }
#mod-settings-section.ssb-paged .mod-grid[data-section="manage"] > button[data-pm="bload"] { --pm-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20V8M7 13l5-5 5 5M4 4h16'/%3E%3C/svg%3E"); }
#mod-settings-section.ssb-paged .mod-grid[data-section="manage"] > button[data-pm="support"] { min-height:84px; --pm-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='9'/%3E%3Ccircle cx='12' cy='12' r='4'/%3E%3Cpath d='M5.6 5.6l3.6 3.6M14.8 14.8l3.6 3.6M18.4 5.6l-3.6 3.6M9.2 14.8l-3.6 3.6'/%3E%3C/svg%3E"); }
#mod-settings-section.ssb-paged .mod-grid[data-section="manage"] > button[data-pm="intro"] { min-height:84px; --pm-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='9'/%3E%3Cpath d='M15.5 8.5l-2.1 4.9-4.9 2.1 2.1-4.9z'/%3E%3C/svg%3E"); }
#mod-settings-section.ssb-paged .mod-grid[data-section="manage"] > button.ch2-reset-btn { --pm-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 12a9 9 0 1 0 3-6.7L3 8'/%3E%3Cpath d='M3 3v5h5'/%3E%3C/svg%3E"); min-height:84px; }
#mod-settings-section.ssb-paged .mod-grid[data-section="manage"] > button[data-pm="wipe"] { --pm-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M6 6l1 14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-14M10 11v6M14 11v6'/%3E%3C/svg%3E"); }
#mod-settings-section.ssb-paged .mod-grid[data-section="manage"] > button[data-pm="favexp"] { --pm-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 15V3M7 8l5-5 5 5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2'/%3E%3C/svg%3E"); }
#mod-settings-section.ssb-paged .mod-grid[data-section="manage"] > button[data-pm="favimp"] { --pm-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3v12M7 10l5 5 5-5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2'/%3E%3C/svg%3E"); }

#mod-settings-section.ssb-paged .mod-grid[data-section="manage"] > button[data-pm="presets"] { --pm-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m12 3 9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 16l9 5 9-5'/%3E%3C/svg%3E"); }
#mod-settings-section.ssb-paged .mod-grid[data-section="manage"] > button[data-pm="preset-save"] { --pm-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12l4 4v12a2 2 0 0 1-2 2zM7 3v6h9V3M7 21v-8h10v8'/%3E%3C/svg%3E"); }

/* Other Mods: one card per mod, with whether it's installed and a button to get it */
#mod-settings-section.ssb-paged[data-page="others"]:not(.mod-searching) > [data-section]:not([data-section="others"]) { display:none !important; }
#mod-settings-section.ssb-paged .mod-header[data-section="others"]::after { content:"More mods by Virojet. Each one is its own userscript, and they work next to Better HUD."; }
#mod-settings-section.ssb-paged .mod-grid[data-section="others"] { gap:10px; grid-template-columns:minmax(0,1fr) !important; }
#mod-settings-section.ssb-paged .ssb-om-card {
display:grid; grid-template-columns:minmax(0,1fr) auto; grid-template-areas:"name act" "desc act" "meta act"; align-items:center; column-gap:14px; row-gap:3px;
min-height:84px; padding:12px 14px; box-sizing:border-box;
border:1px solid var(--pm-edge); border-radius:14px; background:var(--pm-glass);
box-shadow:inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 6px rgba(8,62,84,0.06);
transition:background 0.15s, border-color 0.15s, box-shadow 0.15s, transform 0.15s;
}
#mod-settings-section.ssb-paged .ssb-om-card:hover { background:var(--pm-glass-hi); box-shadow:inset 0 1px 0 rgba(255,255,255,0.6), 0 8px 18px rgba(8,62,84,0.12); transform:translateY(-1px); }
#mod-settings-section.ssb-paged .ssb-om-card.on { background:rgba(255,255,255,0.4); border-color:rgba(255,152,31,0.6); }
#mod-settings-section.ssb-paged .ssb-om-name { grid-area:name; font-size:16.5px; font-weight:800; line-height:1.25; color:var(--ssb-ink); }
#mod-settings-section.ssb-paged .ssb-om-desc { grid-area:desc; min-width:0; font-size:12.5px; font-weight:600; line-height:1.35; color:var(--pm-sub); display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden; }
#mod-settings-section.ssb-paged .ssb-om-meta { grid-area:meta; display:flex; align-items:center; gap:6px; font-size:12px; font-weight:800; color:var(--pm-sub); white-space:nowrap; min-width:0; }
#mod-settings-section.ssb-paged .ssb-om-meta::before { content:""; flex:none; width:8px; height:8px; border-radius:50%; background:rgba(12,87,111,0.25); }
#mod-settings-section.ssb-paged .ssb-om-card.on .ssb-om-meta { color:var(--ssb-ink); }
#mod-settings-section.ssb-paged .ssb-om-card.on .ssb-om-meta::before { background:var(--pm-orange); box-shadow:0 0 0 1px var(--pm-orange-edge); }
#mod-settings-section.ssb-paged .ssb-om-act { grid-area:act; display:flex; flex-direction:column; gap:6px; align-items:stretch; }
#mod-settings-section.ssb-paged .ssb-om-btn {
display:flex; align-items:center; justify-content:center; height:32px; min-width:84px; margin:0; padding:0 14px; box-sizing:border-box;
border:1px solid var(--pm-edge); border-radius:10px; background:var(--pm-glass-hi); color:var(--ssb-blue);
font-family:"Nunito",system-ui,sans-serif; font-size:13.5px; font-weight:900; line-height:1; text-decoration:none; text-transform:none; letter-spacing:0.1px; cursor:pointer;
box-shadow:inset 0 1px 0 rgba(255,255,255,0.6); transition:background 0.15s, transform 0.12s;
}
#mod-settings-section.ssb-paged .ssb-om-btn:hover { background:#fff; }
#mod-settings-section.ssb-paged .ssb-om-btn:active { transform:translateY(1px); }
#mod-settings-section.ssb-paged .ssb-om-btn.quiet { background:transparent; box-shadow:none; border-color:transparent; font-weight:800; }
#mod-settings-section.ssb-paged .ssb-om-btn.quiet:hover { background:var(--pm-glass-hi); }

#mod-settings-section.ssb-paged[data-page="hud"]:not(.mod-searching) > [data-section]:not([data-section="hud"]),
#mod-settings-section.ssb-paged[data-page="chat"]:not(.mod-searching) > [data-section]:not([data-section="chat"]),
#mod-settings-section.ssb-paged[data-page="effects"]:not(.mod-searching) > [data-section]:not([data-section="effects"]),
#mod-settings-section.ssb-paged[data-page="fps"]:not(.mod-searching) > [data-section]:not([data-section="fps"]),
#mod-settings-section.ssb-paged[data-page="menus"]:not(.mod-searching) > [data-section]:not([data-section="menus"]),
#mod-settings-section.ssb-paged[data-page="stats"]:not(.mod-searching) > [data-section]:not([data-section="stats"]),
#mod-settings-section.ssb-paged[data-page="gameplay"]:not(.mod-searching) > [data-section]:not([data-section="gameplay"]),
#mod-settings-section.ssb-paged[data-page="manage"]:not(.mod-searching) > [data-section]:not([data-section="manage"]) { display:none !important; }
/* Changed: only the cards that differ from their default, under their own section's name */
#mod-settings-section.ssb-paged:not([data-page="changed"]) > [data-section="changed"],
#mod-settings-section.ssb-paged.mod-searching > [data-section="changed"],
#mod-settings-section.ssb-paged[data-page="changed"]:not(.mod-searching) > [data-section]:not([data-section="changed"]):not(.ssb-has-changed),
#mod-settings-section.ssb-paged[data-page="changed"]:not(.mod-searching) > .mod-grid > :not(.ssb-changed),
#mod-settings-section.ssb-paged[data-page="changed"]:not(.ssb-none-changed) > .mod-changed-empty { display:none !important; }
#mod-settings-section.ssb-paged[data-page="changed"]:not(.mod-searching) > .mod-header:not([data-section="changed"]) { margin:6px 0 10px !important; padding-bottom:0; border-bottom:0; font-size:15px; letter-spacing:0.6px; }
#mod-settings-section.ssb-paged[data-page="changed"]:not(.mod-searching) > .mod-header:not([data-section="changed"])::after { display:none; }

/* ---- CROSSHAIR tab: preview + profiles in a frosted panel, settings laid out like a MODS page ---- */
#popupInnards.mod-tab-active:has(> #mod-crosshair-section:not([style*="display: none"])) { display:grid !important; grid-template-columns:minmax(0, 1fr); grid-template-rows:minmax(0, 1fr) auto; gap:12px; }
/* Like the MODS list, the tab reaches 14px past the footer on the right, where the settings' scrollbar sits. */
#popupInnards.mod-tab-active:has(> #mod-crosshair-section:not([style*="display: none"])) > #mod-crosshair-section { grid-column:1; grid-row:1; min-height:0; height:100%; max-height:none !important; margin-right:-14px; overflow:visible !important; padding:0 !important; }
#popupInnards > #mod-crosshair-section .ch2-top { display:flex !important; flex-direction:row !important; align-items:stretch !important; gap:18px !important; height:100% !important; min-height:0; }
#popupInnards > #mod-crosshair-section.pm-enter .ch2-preview-col, #popupInnards > #mod-crosshair-section.pm-enter .ch2-right-col { animation:pm-in 0.22s ease-out both; }
#popupInnards > #mod-crosshair-section.pm-enter .ch2-right-col { animation-delay:0.04s; }

/* Left: one frosted panel like the MODS sidebar. It doesn't scroll: the preview takes the height that's left. */
#popupInnards > #mod-crosshair-section .ch2-preview-col {
flex:0 0 38% !important; min-width:0; position:static !important; display:flex !important; flex-direction:column;
overflow-x:hidden !important; overflow-y:auto !important; scrollbar-width:none !important; box-sizing:border-box; padding:14px !important;
border:1px solid var(--pm-edge); border-radius:18px; background:linear-gradient(180deg, rgba(255,255,255,0.32), rgba(255,255,255,0.14));
box-shadow:inset 0 1px 0 rgba(255,255,255,0.65), var(--pm-lift);
}
#popupInnards > #mod-crosshair-section .ch2-preview-col::-webkit-scrollbar { display:none; }
#popupInnards > #mod-crosshair-section .ch2-preview-col .ch2-group-card { margin:0 !important; padding:0 !important; border:0 !important; border-radius:0 !important; background:none !important; box-shadow:none !important; }
#popupInnards > #mod-crosshair-section .ch2-preview-col .ch2-card-preview { flex:1 1 auto; min-height:0; display:flex; flex-direction:column; }
#popupInnards > #mod-crosshair-section .ch2-preview-col .ch2-card-profiles { flex:none; margin-top:14px !important; padding-top:14px !important; border-top:1px solid var(--pm-line) !important; }
/* Group labels: small caps that name the groups without competing with the settings */
#popupInnards > #mod-crosshair-section .ch2-preview-col .ch2-card-title {
display:block !important; flex:none; min-height:0; margin:0 0 8px !important; padding:0 !important; border:0 !important;
font-family:"Nunito",system-ui,sans-serif !important; font-size:12px !important; font-weight:900 !important; letter-spacing:1px !important; line-height:1.2 !important;
text-transform:uppercase !important; color:var(--ssb-ink) !important;
}
#popupInnards > #mod-crosshair-section .ch2-preview-wrap {
flex:1 1 auto; min-height:110px; height:auto !important; max-height:280px; aspect-ratio:auto !important; margin:0 !important; box-sizing:border-box;
border:1px solid rgba(12,87,111,0.16) !important; border-radius:14px !important; box-shadow:inset 0 0 0 1px rgba(255,255,255,0.45), 0 6px 16px rgba(8,62,84,0.12);
}
/* Background: the presets and the custom color share one white field (one setting, one place) */
#popupInnards > #mod-crosshair-section .ch2-card-preview .ch2-control-row { flex:none; flex-wrap:wrap; container-type:inline-size; margin:10px 0 0 !important; padding:0 !important; }
#popupInnards > #mod-crosshair-section .ch2-card-preview .ch2-control-right { margin-left:auto; }
/* too narrow for one line: the field goes under the label at full width, so both edges line up with the preview */
@container (max-width:316px) {
#popupInnards > #mod-crosshair-section .ch2-card-preview .ch2-control-right { flex:1 1 100%; margin-left:0; }
#popupInnards > #mod-crosshair-section .ch2-card-preview .ch2-hex { flex:1 1 auto; min-width:0; padding-left:8px !important; text-align:left !important; }
}
#popupInnards > #mod-crosshair-section .ch2-bg-swatches { flex:none; gap:5px; margin:0 4px 0 2px; padding-right:8px; border-right:1px solid rgba(12,87,111,0.14); }
#popupInnards > #mod-crosshair-section .ch2-bg-swatch { width:18px !important; height:18px !important; border:2px solid #fff !important; box-shadow:0 0 0 1px rgba(12,87,111,0.32) !important; }
#popupInnards > #mod-crosshair-section .ch2-bg-swatch.on { box-shadow:0 0 0 2px #ff981f !important; }

/* Profiles: label with a Gallery button beside it (a secondary button, like the footer's), quick picker, toolbar */
#popupInnards > #mod-crosshair-section .ch2-card-profiles { display:grid !important; grid-template-columns:minmax(0, 1fr) auto; grid-template-areas:"title gal" "mini mini" "bar bar"; align-items:center; }
#popupInnards > #mod-crosshair-section .ch2-card-profiles > .ch2-card-title { grid-area:title; margin:0 !important; }
#popupInnards > #mod-crosshair-section .ch2-card-profiles > .ch2-mini-row { grid-area:mini; }
#popupInnards > #mod-crosshair-section .ch2-card-profiles > .ch2-icon-bar { grid-area:bar; }
/* Profile tools: the toolbar and Undo / Redo / Revert share one white panel, split by an inset hairline. The second
row uses the toolbar's own button look (transparent, blue glyph, tinted on hover), so both rows line up. */
#popupInnards > #mod-crosshair-section .ch2-card-profiles > .ch2-prof-tools { grid-area:bar; min-width:0; margin:10px 0 0; border:1px solid rgba(255,255,255,0.78); border-radius:14px; background:linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.52) 100%); box-shadow:inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(14,118,151,0.14), 0 1px 2px rgba(8,62,84,0.12), 0 8px 18px rgba(8,62,84,0.16); }
#popupInnards > #mod-crosshair-section .ch2-prof-tools > .ch2-icon-bar { margin:0 !important; border-radius:13px 13px 0 0 !important; background:transparent !important; box-shadow:none !important; }
#popupInnards > #mod-crosshair-section .ch2-hist-row { position:relative; display:flex; align-items:center; gap:2px; height:40px; padding:0 4px; box-sizing:border-box; container-type:inline-size; }
#popupInnards > #mod-crosshair-section .ch2-hist-row::before { content:""; position:absolute; top:0; left:10px; right:10px; height:1px; background:linear-gradient(90deg, rgba(14,118,151,0), rgba(14,118,151,0.24) 16%, rgba(14,118,151,0.24) 84%, rgba(14,118,151,0)); box-shadow:0 1px 0 rgba(255,255,255,0.75); }
#popupInnards > #mod-crosshair-section .ch2-hist-btn { position:relative; flex:1 1 0 !important; min-width:0 !important; width:auto !important; height:30px !important; margin:0 !important; padding:0 6px !important; box-sizing:border-box !important;
display:inline-flex !important; align-items:center !important; justify-content:center !important; gap:6px !important; border:0 !important; border-radius:9px !important; background:transparent !important; box-shadow:none !important;
color:var(--ssb-blue) !important; font-family:"Nunito", system-ui, sans-serif !important; font-size:13px !important; font-weight:800 !important; letter-spacing:0.1px !important; line-height:1 !important; text-transform:none !important; text-shadow:none !important;
white-space:nowrap !important; cursor:pointer !important; transform:none !important; transition:background-color 0.12s, color 0.12s; }
#popupInnards > #mod-crosshair-section .ch2-hist-btn > svg { flex:none; display:block; pointer-events:none; }
#popupInnards > #mod-crosshair-section .ch2-hist-btn > span { min-width:0; overflow:hidden; text-overflow:ellipsis; font-size:inherit !important; }
#popupInnards > #mod-crosshair-section .ch2-hist-btn + .ch2-hist-btn::before { content:""; position:absolute; left:-1.5px; top:8px; bottom:8px; width:1px; background:rgba(14,118,151,0.18); transition:opacity 0.12s; }
#popupInnards > #mod-crosshair-section .ch2-hist-btn:hover:not(:disabled) { background:rgba(14,118,151,0.12) !important; color:var(--ssb-ink) !important; }
#popupInnards > #mod-crosshair-section .ch2-hist-btn:active:not(:disabled) { background:rgba(14,118,151,0.2) !important; }
#popupInnards > #mod-crosshair-section .ch2-hist-btn:hover:not(:disabled)::before, #popupInnards > #mod-crosshair-section .ch2-hist-btn:hover:not(:disabled) + .ch2-hist-btn::before { opacity:0; }
#popupInnards > #mod-crosshair-section .ch2-hist-btn:disabled { color:rgba(14,118,151,0.36) !important; cursor:default !important; }
#popupInnards > #mod-crosshair-section .ch2-hist-btn:focus-visible { outline:2px solid var(--ssb-focus) !important; outline-offset:-2px !important; }
/* too narrow for the words: icons only (the tooltips still name them) */
@container (max-width:220px) { #popupInnards > #mod-crosshair-section .ch2-hist-btn > span { display:none; } }
#popupInnards > #mod-crosshair-section #ch2-open-gallery-btn {
grid-area:gal; flex-direction:row !important; justify-content:center !important; width:auto !important; height:30px !important; margin:0 !important; padding:0 5px 0 9px !important; gap:6px !important;
border:0 !important; border-radius:9px !important; background:var(--ssb-yolk) !important;
box-shadow:inset 0 1px 0 rgba(255,255,255,0.35), 0 2px 0 var(--ssb-yolk-shadow), 0 4px 8px rgba(211,84,0,0.25) !important; color:#fff !important; transform:none !important;
font-size:13px !important; font-weight:900 !important; letter-spacing:0.1px !important; text-transform:none !important; text-shadow:0 1px 2px rgba(0,0,0,0.3) !important; transition:background-color 0.12s, box-shadow 0.12s;
}
#popupInnards > #mod-crosshair-section #ch2-open-gallery-btn::before { content:""; flex:none; width:14px; height:14px; background:#fff; -webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='7.5' height='7.5' rx='1.5'/%3E%3Crect x='13.5' y='3' width='7.5' height='7.5' rx='1.5'/%3E%3Crect x='3' y='13.5' width='7.5' height='7.5' rx='1.5'/%3E%3Crect x='13.5' y='13.5' width='7.5' height='7.5' rx='1.5'/%3E%3C/svg%3E") center / contain no-repeat; mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='7.5' height='7.5' rx='1.5'/%3E%3Crect x='13.5' y='3' width='7.5' height='7.5' rx='1.5'/%3E%3Crect x='3' y='13.5' width='7.5' height='7.5' rx='1.5'/%3E%3Crect x='13.5' y='13.5' width='7.5' height='7.5' rx='1.5'/%3E%3C/svg%3E") center / contain no-repeat; }
#popupInnards > #mod-crosshair-section #ch2-open-gallery-btn::after { content:attr(data-count); min-width:18px; height:18px; padding:0 5px; box-sizing:border-box; border-radius:999px; background:rgba(255,255,255,0.3); color:#fff; font-size:11px; font-weight:900; line-height:18px; text-align:center; }
#popupInnards > #mod-crosshair-section #ch2-open-gallery-btn:hover { background:var(--ssb-yolk-hi) !important; }
#popupInnards > #mod-crosshair-section #ch2-open-gallery-btn:active { transform:translateY(1px) !important; box-shadow:inset 0 1px 0 rgba(255,255,255,0.35), 0 1px 0 var(--ssb-yolk-shadow) !important; }
#popupInnards > #mod-crosshair-section .ch2-mini-row { margin:10px 0 0 !important; }
#popupInnards > #mod-crosshair-section .ch2-mini-tile { border:2px solid #fff !important; border-radius:10px !important; box-shadow:0 2px 6px rgba(8,62,84,0.16) !important; transition:transform 0.12s, box-shadow 0.12s; }
#popupInnards > #mod-crosshair-section .ch2-mini-tile.selected { box-shadow:0 0 0 2.5px #ff981f, 0 4px 10px rgba(247,147,30,0.35) !important; }
#popupInnards > #mod-crosshair-section .ch2-mini-more { border:2px solid #fff !important; border-radius:10px !important; background:rgba(255,255,255,0.55) !important; box-shadow:0 2px 6px rgba(8,62,84,0.16) !important; color:var(--ssb-ink) !important; text-shadow:none !important; }
#popupInnards > #mod-crosshair-section .ch2-mini-more:hover { background:#fff !important; }
#popupInnards > #mod-crosshair-section .ch2-icon-bar {
height:42px; margin:10px 0 0 !important; padding:0 6px 0 4px !important; gap:2px !important; box-sizing:border-box !important; border:0 !important; border-radius:12px !important;
background:linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.52) 100%) !important; box-shadow:inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(14,118,151,0.14), 0 1px 2px rgba(8,62,84,0.12), 0 8px 18px rgba(8,62,84,0.16) !important;
}
#popupInnards > #mod-crosshair-section .ch2-profile-select { height:34px; padding:0 4px 0 8px !important; font-size:14px !important; font-weight:800 !important; }
#popupInnards > #mod-crosshair-section .ch2-icon-divider { height:20px !important; margin:0 4px !important; background:rgba(14,118,151,0.18) !important; }
#popupInnards > #mod-crosshair-section .ch2-icon-btn { width:30px !important; height:30px !important; border-radius:9px !important; background:transparent !important; box-shadow:none !important; color:var(--ssb-blue) !important; transform:none !important; }
#popupInnards > #mod-crosshair-section .ch2-icon-btn svg { filter:none !important; }
#popupInnards > #mod-crosshair-section .ch2-icon-btn:hover { background:rgba(14,118,151,0.12) !important; color:var(--ssb-ink) !important; }
#popupInnards > #mod-crosshair-section .ch2-icon-btn.danger, #popupInnards > #mod-crosshair-section .ch2-icon-btn.danger:hover { color:var(--ssb-red) !important; box-shadow:none !important; }
#popupInnards > #mod-crosshair-section .ch2-icon-btn.danger:hover { background:rgba(216,39,39,0.1) !important; }

/* Right: the settings in a scrolling column, laid out like a MODS page: a heading with a subtitle, then a glass list */
/* (6px of bottom padding for the Reset button's shadow reaches into the gap above the footer, so the button's
bottom edge still lines up with the panel on the left; 6px on the left, pulled back the same way, keeps the
Reset button's focus ring whole) */
#popupInnards > #mod-crosshair-section .ch2-right-col {
flex:1 1 0 !important; min-width:0; display:flex !important; flex-direction:column !important; gap:12px !important;
overflow-y:auto !important; box-sizing:border-box; margin-bottom:-6px; margin-left:-6px; padding:0 8px 6px 6px !important; scrollbar-gutter:stable;
}
#popupInnards > #mod-crosshair-section .ch2-right-col > * { flex-shrink:0; }
@supports (animation-timeline: scroll()) {
#popupInnards > #mod-crosshair-section .ch2-right-col {
-webkit-mask-image:linear-gradient(to bottom, transparent, #000 var(--pm-fade-t), #000 calc(100% - var(--pm-fade-b)), transparent);
mask-image:linear-gradient(to bottom, transparent, #000 var(--pm-fade-t), #000 calc(100% - var(--pm-fade-b)), transparent);
animation:pm-fade linear both; animation-timeline:scroll(self);
}
}
/* the cards hold a heading and a list; only the list (and the Enable card) is glass, like a MODS card */
#popupInnards > #mod-crosshair-section .ch2-right-col .ch2-group-card { margin:0 !important; padding:0 !important; border:0 !important; border-radius:0 !important; background:none !important; box-shadow:none !important; }
#popupInnards > #mod-crosshair-section .ch2-right-col :is(.ch2-card-enable, .ch2-card-list) {
border:1px solid var(--pm-edge) !important; border-radius:14px !important; background:var(--pm-glass) !important;
box-shadow:inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 6px rgba(8,62,84,0.06) !important;
}
#popupInnards > #mod-crosshair-section .ch2-card-list { padding:0 14px; }
#popupInnards > #mod-crosshair-section .ch2-controls-container { margin-top:10px !important; }
#popupInnards > #mod-crosshair-section .ch2-controls-container > .ch2-group-card + .ch2-group-card { margin-top:22px !important; }

/* Headings: the MODS page heading (Sigmar One, a subtitle underneath, a hairline), no icons */
#popupInnards > #mod-crosshair-section .ch2-right-col .ch2-card-title {
display:block !important; margin:0 0 14px !important; padding:0 0 12px !important; border-bottom:1px solid rgba(12,87,111,0.14) !important;
font-family:"Sigmar One",sans-serif !important; font-size:22px !important; font-weight:normal !important; letter-spacing:0.5px !important; line-height:1.1 !important;
text-transform:uppercase !important; color:var(--ssb-ink) !important;
}
#popupInnards > #mod-crosshair-section .ch2-right-col .ch2-card-title::after, #popupInnards > #mod-crosshair-section .ch2-gallery-hint {
display:block; margin:5px 0 0 !important; font-family:"Nunito",system-ui,sans-serif !important; font-size:13.5px !important; font-weight:700 !important;
letter-spacing:0 !important; line-height:1.3; text-transform:none !important; color:var(--pm-sub) !important;
}
#popupInnards > #mod-crosshair-section .ch2-card-arms > .ch2-card-title::after { content:"Color, size and angle of the four arms."; }
#popupInnards > #mod-crosshair-section .ch2-card-dot > .ch2-card-title::after { content:"The dot, plus or still cross in the middle."; }

/* Rows: one line each, a hairline between them, every control ending on the same right edge */
#popupInnards > #mod-crosshair-section .ch2-right-col :is(.ch2-check-label, .ch2-control-row, .ch2-slider-wrap) { box-sizing:border-box; min-height:52px; margin:0 !important; padding:8px 0 !important; border-top:1px solid var(--pm-line) !important; }
#popupInnards > #mod-crosshair-section .ch2-card-list > :first-child { border-top:0 !important; }
#popupInnards > #mod-crosshair-section .ch2-card-dot .ch2-collapse-body { border-top:1px solid var(--pm-line); }
/* An open row group doesn't clip, so the focus ring of a box, color field or switch at a row's right end stays
whole. It still clips while it folds (the inline max-height) and while it's folded. flow-root keeps the layout. */
#popupInnards > #mod-crosshair-section .ch2-collapse-body:not(.collapsed):not([style*="max-height"]) { overflow:visible !important; display:flow-root; }
#popupInnards > #mod-crosshair-section :is(.ch2-label, .ch2-check-text) { font-size:15px !important; font-weight:800 !important; line-height:1.25; color:var(--ssb-ink) !important; }

/* Checkboxes: the MODS toggle switch, on the right */
#popupInnards > #mod-crosshair-section .ch2-check-label { gap:14px !important; justify-content:space-between; }
#popupInnards > #mod-crosshair-section .ch2-check-text { order:0; flex:1 1 auto; min-width:0; }
#popupInnards > #mod-crosshair-section .ch2-check-box {
order:1; position:relative; width:46px !important; height:26px !important; border-radius:999px !important;
background:rgba(12,87,111,0.22) !important; box-shadow:inset 0 2px 4px rgba(8,62,84,0.28); transition:background 0.18s, box-shadow 0.18s;
}
#popupInnards > #mod-crosshair-section .ch2-check-box::after {
content:"" !important; display:block !important; position:absolute; top:3px; left:3px; width:20px !important; height:20px !important; margin:0 !important;
border:0 !important; border-radius:50%; background:#fff; box-shadow:0 2px 5px rgba(0,0,0,0.25); transform:none !important; transition:transform 0.2s cubic-bezier(0.3,1.4,0.6,1);
}
#popupInnards > #mod-crosshair-section .ch2-check-label input:checked ~ .ch2-check-box { background:var(--pm-orange) !important; box-shadow:inset 0 1px 2px rgba(0,0,0,0.15), 0 0 0 1px var(--pm-orange-edge); }
#popupInnards > #mod-crosshair-section .ch2-check-label input:checked ~ .ch2-check-box::after { transform:translateX(20px) !important; }

/* Colors: swatch and hex share one white field, like the MODS number boxes */
#popupInnards > #mod-crosshair-section .ch2-control-right { flex-wrap:nowrap !important; gap:2px !important; height:36px; box-sizing:border-box; padding:0 4px; border-radius:10px; background:#fff; box-shadow:inset 0 1px 3px rgba(8,62,84,0.16); }
#popupInnards > #mod-crosshair-section .ch2-color { flex:none; width:30px !important; height:26px !important; border-radius:7px !important; }
#popupInnards > #mod-crosshair-section .ch2-color::-webkit-color-swatch { border:1px solid rgba(0,0,0,0.12); border-radius:7px; }
#popupInnards > #mod-crosshair-section .ch2-hex { width:68px !important; height:28px !important; padding:0 4px !important; border:0 !important; border-radius:6px !important; background:transparent !important; font-size:14px !important; font-weight:700 !important; }

/* Sliders: one line like the MODS FOV slider (name, range, track, value), with the same track, thumb and value box */
#popupInnards > #mod-crosshair-section .ch2-slider-wrap { display:grid; grid-template-columns:110px 28px minmax(0, 1fr) 28px auto; column-gap:8px; align-items:center; }
#popupInnards > #mod-crosshair-section .ch2-slider-lrow { display:contents !important; }
#popupInnards > #mod-crosshair-section .ch2-slider-wrap .ch2-label { grid-area:1 / 1; min-width:0; }
#popupInnards > #mod-crosshair-section .ch2-slider-wrap::before, #popupInnards > #mod-crosshair-section .ch2-slider-wrap::after { font-size:11px; font-weight:700; line-height:1; color:#216a80; opacity:0.75; white-space:nowrap; }
#popupInnards > #mod-crosshair-section .ch2-slider-wrap::before { content:attr(data-min); grid-area:1 / 2; text-align:right; }
#popupInnards > #mod-crosshair-section .ch2-slider-wrap::after { content:attr(data-max); grid-area:1 / 4; text-align:left; }
#popupInnards > #mod-crosshair-section .ch2-slider { grid-area:1 / 3; width:100% !important; height:10px !important; margin:0; border:1px solid rgba(12,87,111,0.15) !important; border-radius:5px !important; background:#fff !important; }
#popupInnards > #mod-crosshair-section .ch2-slider::-webkit-slider-thumb { width:21px !important; height:21px !important; margin-top:-7px !important; box-sizing:border-box !important; border:4.5px solid #fff !important; border-radius:50% !important; background:var(--ssb-yolk) !important; box-shadow:0 1px 4px rgba(0,0,0,0.35) !important; }
#popupInnards > #mod-crosshair-section .ch2-slider::-moz-range-thumb { width:21px !important; height:21px !important; box-sizing:border-box !important; border:4.5px solid #fff !important; border-radius:50% !important; background:var(--ssb-yolk) !important; box-shadow:0 1px 4px rgba(0,0,0,0.35) !important; }
#popupInnards > #mod-crosshair-section .ch2-slider-wrap .ch2-num { grid-area:1 / 5; }
#popupInnards > #mod-crosshair-section .ch2-num { width:64px !important; height:36px !important; box-sizing:border-box; padding:0 6px !important; border:0 !important; border-radius:10px !important; background:#fff !important; box-shadow:inset 0 1px 3px rgba(8,62,84,0.16); font-size:15px !important; font-weight:700 !important; }

/* Dot / Plus / Still: a segmented control, with a hairline above and below like the rows */
#popupInnards > #mod-crosshair-section .ch2-shape-row { gap:4px !important; margin:10px 0 !important; padding:4px; border-radius:13px; background:rgba(12,87,111,0.1); box-shadow:inset 0 1px 3px rgba(8,62,84,0.14); }
#popupInnards > #mod-crosshair-section .ch2-shape-btn {
flex:1 1 0 !important; gap:7px; height:36px !important; padding:0 10px !important; border:1px solid transparent !important; border-radius:10px !important;
background:transparent !important; box-shadow:none !important; color:var(--ssb-ink) !important; transform:none !important;
font-size:14px !important; font-weight:800 !important; letter-spacing:0.2px !important; text-transform:none !important; text-shadow:none !important;
}
#popupInnards > #mod-crosshair-section .ch2-shape-btn::before { content:""; flex:none; width:16px; height:16px; background:currentColor; -webkit-mask:var(--pm-ico) center / contain no-repeat; mask:var(--pm-ico) center / contain no-repeat; }
#popupInnards > #mod-crosshair-section .ch2-shape-btn:nth-child(1) { --pm-ico:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='5.5' fill='black' stroke='none'/%3E%3C/svg%3E"); }
#popupInnards > #mod-crosshair-section .ch2-shape-btn:nth-child(2) { --pm-ico:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 4v16M4 12h16'/%3E%3C/svg%3E"); }
#popupInnards > #mod-crosshair-section .ch2-shape-btn:nth-child(3) { --pm-ico:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3v6M12 15v6M3 12h6M15 12h6'/%3E%3C/svg%3E"); }
#popupInnards > #mod-crosshair-section .ch2-shape-btn:hover:not(.active) { background:var(--pm-glass-hi) !important; box-shadow:none !important; }
#popupInnards > #mod-crosshair-section .ch2-shape-btn.active {
border-color:var(--pm-orange-edge) !important; background:var(--pm-orange) !important; color:#fff !important; text-shadow:0 1px 0 rgba(0,0,0,0.22) !important;
box-shadow:inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -2px 0 rgba(0,0,0,0.12), 0 4px 10px rgba(247,147,30,0.3) !important;
}

/* Enable: a MODS card (name, description underneath, switch) with the MODS orange edge while it's on.
The label fills the card, so the whole card is the click target. */
#popupInnards > #mod-crosshair-section .ch2-right-col .ch2-card-enable { transition:background 0.15s, border-color 0.15s, box-shadow 0.15s; }
#popupInnards > #mod-crosshair-section .ch2-right-col .ch2-card-enable:hover { background:var(--pm-glass-hi) !important; box-shadow:inset 0 1px 0 rgba(255,255,255,0.6), 0 8px 18px rgba(8,62,84,0.12) !important; }
#popupInnards > #mod-crosshair-section .ch2-right-col .ch2-card-enable:has(input:checked) { border-color:rgba(255,152,31,0.6) !important; background:rgba(255,255,255,0.4) !important; }
#popupInnards > #mod-crosshair-section .ch2-card-enable .ch2-check-label {
display:grid !important; grid-template-columns:minmax(0, 1fr) auto; grid-template-areas:"name box" "desc box";
align-items:center; column-gap:14px !important; row-gap:3px !important; min-height:64px; padding:12px 14px !important; border:0 !important; cursor:pointer;
}
#popupInnards > #mod-crosshair-section .ch2-card-enable .ch2-check-text { grid-area:name; align-self:end; font-size:16.5px !important; }
#popupInnards > #mod-crosshair-section .ch2-card-enable .ch2-check-label::after { content:"Replace the game's crosshair with your own design."; grid-area:desc; align-self:start; font-size:12.5px; font-weight:600; line-height:1.35; color:var(--pm-sub); }
#popupInnards > #mod-crosshair-section .ch2-card-enable .ch2-check-box { grid-area:box; }

/* Customizer off: a dashed glass box with an orange button (the one thing to do here) */
#popupInnards > #mod-crosshair-section .ch2-disabled-msg { gap:12px; margin:0 !important; padding:24px 18px !important; border:2px dashed rgba(14,118,151,0.35) !important; border-radius:14px !important; background:var(--pm-glass) !important; color:var(--pm-sub) !important; font-weight:800; }
#popupInnards > #mod-crosshair-section .ch2-disabled-msg > span { max-width:30em; font-size:14.5px; line-height:1.4; }
#popupInnards > #mod-crosshair-section .ch2-disabled-msg .ch2-profile-btn {
flex:none !important; width:auto !important; padding:0 20px !important; border:2px solid var(--pm-orange-edge) !important; border-radius:12px !important; background:var(--pm-orange) !important;
box-shadow:inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.14), 0 6px 14px rgba(247,147,30,0.3) !important; text-transform:none !important; letter-spacing:0.2px !important;
}

/* Reset Crosshair: a quiet glass row with red text, set apart from the Center Dot list (it asks before resetting) */
#popupInnards > #mod-crosshair-section #ch2-reset-crosshair {
width:100% !important; height:44px !important; margin:10px 0 0 !important; padding:0 16px !important; gap:8px; border:1px solid var(--pm-edge) !important; border-radius:14px !important;
background:var(--pm-glass) !important; box-shadow:inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 6px rgba(8,62,84,0.06) !important; color:#b42318 !important; transform:none !important;
font-size:14.5px !important; font-weight:800 !important; text-transform:none !important; letter-spacing:0.2px !important; text-shadow:none !important;
}
#popupInnards > #mod-crosshair-section #ch2-reset-crosshair::before { content:""; flex:none; width:16px; height:16px; background:currentColor; -webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 12a9 9 0 1 0 3-6.7L3 8'/%3E%3Cpath d='M3 3v5h5'/%3E%3C/svg%3E") center / contain no-repeat; mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 12a9 9 0 1 0 3-6.7L3 8'/%3E%3Cpath d='M3 3v5h5'/%3E%3C/svg%3E") center / contain no-repeat; }
#popupInnards > #mod-crosshair-section #ch2-reset-crosshair:hover { border-color:rgba(216,39,39,0.35) !important; background:rgba(255,255,255,0.55) !important; }
#popupInnards > #mod-crosshair-section #ch2-reset-crosshair:active { transform:translateY(1px) !important; }

/* Gallery: a page like the others: heading and hint with the Back button beside them, then the cards */
#popupInnards > #mod-crosshair-section .ch2-gallery-header { gap:12px; margin:0 !important; padding:0 0 12px !important; border-bottom:1px solid rgba(12,87,111,0.14) !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-header .ch2-card-title { flex:1 1 auto; min-width:0; margin:0 !important; padding:0 !important; border:0 !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-back-btn {
flex:none; height:30px; padding:0 12px !important; border:0 !important; border-radius:9px !important; background:var(--ssb-yolk) !important;
box-shadow:inset 0 1px 0 rgba(255,255,255,0.35), 0 2px 0 var(--ssb-yolk-shadow), 0 4px 8px rgba(211,84,0,0.25) !important; color:#fff !important; font-size:13px !important; font-weight:900 !important; text-shadow:0 1px 2px rgba(0,0,0,0.3) !important; white-space:nowrap; transition:background-color 0.12s, box-shadow 0.12s;
}
#popupInnards > #mod-crosshair-section .ch2-gallery-back-btn:hover { background:var(--ssb-yolk-hi) !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-back-btn:active { transform:translateY(1px) !important; box-shadow:inset 0 1px 0 rgba(255,255,255,0.35), 0 1px 0 var(--ssb-yolk-shadow) !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-grid { grid-template-columns:repeat(auto-fill, minmax(136px, 1fr)) !important; gap:14px !important; padding:14px 0 2px !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-card {
gap:9px !important; padding:10px !important; border:1px solid var(--pm-edge) !important; border-radius:14px !important;
background:var(--pm-glass) !important; box-shadow:inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 6px rgba(8,62,84,0.08) !important;
}
#popupInnards > #mod-crosshair-section .ch2-gallery-card:hover { background:var(--pm-glass-hi) !important; box-shadow:inset 0 1px 0 rgba(255,255,255,0.6), 0 8px 18px rgba(8,62,84,0.14) !important; transform:translateY(-2px) !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-card:active { transform:none !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-card.selected { border-color:rgba(255,152,31,0.9) !important; background:rgba(255,255,255,0.45) !important; box-shadow:0 0 0 2px #ff981f, 0 8px 18px rgba(247,147,30,0.22) !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-card.selected .ch2-gallery-title { color:#c46a00 !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-mini-preview { height:104px !important; border-radius:10px !important; box-shadow:inset 0 0 0 1px rgba(12,87,111,0.12); }
#popupInnards > #mod-crosshair-section .ch2-gallery-title { font-size:13px !important; text-shadow:none !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-badge { top:-8px !important; right:-8px !important; background:var(--pm-orange) !important; box-shadow:0 0 0 2px #fff, 0 3px 8px rgba(247,147,30,0.4) !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-badge svg { stroke:#fff; }
#popupInnards > #mod-crosshair-section .ch2-gallery-actions { top:14px !important; right:14px !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-abtn { width:26px !important; height:26px !important; border:1px solid var(--pm-edge) !important; border-radius:8px !important; background:rgba(255,255,255,0.88) !important; box-shadow:0 2px 6px rgba(8,62,84,0.18) !important; color:var(--ssb-blue) !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-abtn:hover { background:#fff !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-abtn.danger { color:var(--ssb-red) !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-new-card { min-height:150px !important; border:2px dashed rgba(14,118,151,0.38) !important; border-radius:14px !important; background:rgba(255,255,255,0.14) !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-new-card:hover { border-color:var(--ssb-orange) !important; background:var(--pm-glass) !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-new-plus { background:var(--pm-orange) !important; box-shadow:inset 0 1px 0 rgba(255,255,255,0.45), 0 4px 10px rgba(247,147,30,0.35) !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-new-label { font-size:12px !important; letter-spacing:0.2px !important; text-transform:none !important; }
/* drag-to-reorder markers (after the card rules above, which would hide them) */
#popupInnards > #mod-crosshair-section .ch2-gallery-card.ch2-dragging { opacity:0.45 !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-card.ch2-drop-before { box-shadow:-5px 0 0 var(--ssb-orange), 0 2px 6px rgba(8,62,84,0.08) !important; }
#popupInnards > #mod-crosshair-section .ch2-gallery-card.ch2-drop-after { box-shadow:5px 0 0 var(--ssb-orange), 0 2px 6px rgba(8,62,84,0.08) !important; }

/* Narrow window: the panel and the settings stack and scroll together */
@container (max-width:700px) {
#popupInnards > #mod-crosshair-section .ch2-top { flex-direction:column !important; gap:12px !important; overflow-y:auto !important; margin-left:-6px; padding-left:6px; padding-right:8px; scrollbar-gutter:stable; }
#popupInnards > #mod-crosshair-section .ch2-preview-col, #popupInnards > #mod-crosshair-section .ch2-right-col { flex:none !important; width:100%; overflow:visible !important; margin-bottom:0; scrollbar-gutter:auto; }
/* the scrolling column above holds the room for focus rings now; the panel keeps its padding on both sides */
#popupInnards > #mod-crosshair-section .ch2-right-col { margin-left:0; padding-left:0 !important; padding-right:0 !important; }
#popupInnards > #mod-crosshair-section .ch2-preview-wrap { flex:none; height:160px !important; }
}
#mod-settings-section .mod-search-empty { padding:30px 10px 10px; text-align:center; font-size:17px; font-weight:800; color:var(--ssb-ink); }
#mod-settings-footer { flex-wrap:wrap; gap:10px 14px; }
#mod-settings-footer .mod-footer-mid { display:inline-flex; align-items:center; flex-wrap:wrap; justify-content:center; gap:8px; }
/* Update status beside "Check for updates": a quiet pill when current, the orange game button when there's an update. */
#ssb-update-status:empty { display:none; }
#ssb-update-status { display:inline-flex; align-items:center; gap:6px; height:30px; padding:0 12px; box-sizing:border-box; border-radius:999px; font-size:13px; font-weight:800; line-height:1; white-space:nowrap; }
#ssb-update-status::before { content:""; flex:none; width:8px; height:8px; border-radius:50%; background:currentColor; }
#ssb-update-status.is-latest { background:rgba(40,150,80,0.15); color:#17703b; }
#ssb-update-status.is-checking, #ssb-update-status.is-error, #ssb-update-status.is-reload { background:rgba(12,87,111,0.1); color:var(--ssb-ink); }
#ssb-update-status.is-checking::before { animation:ssb-upd-pulse 0.9s ease-in-out infinite alternate; }
@keyframes ssb-upd-pulse { from { opacity:0.25; } to { opacity:1; } }
#ssb-update-status.is-available { padding:0; background:none; }
#ssb-update-status.is-available::before { display:none; }
#ssb-update-status .ssb-upd-go { display:inline-flex; align-items:center; gap:6px; height:30px; padding:0 12px; box-sizing:border-box; border:2px solid #924e0c; border-radius:8px; background:#f79520; color:#fff; font-size:13px; font-weight:900; text-decoration:none; text-shadow:rgba(0,0,0,0.25) 1px 1px 0; box-shadow:inset 0 -3px 0 rgba(0,0,0,0.16); transition:filter 0.12s; }
#ssb-update-status .ssb-upd-go:hover { filter:brightness(1.07); }
#ssb-update-status .ssb-upd-go::before { content:"↑"; font-size:14px; }
#mod-settings-footer .mod-footer-btn { height:30px; margin:0; padding:0 12px; border:2px solid var(--ssb-blue); border-radius:8px; background:rgba(255,255,255,0.35); color:var(--ssb-ink); font-family:"Nunito",system-ui,sans-serif; font-size:13px; font-weight:800; cursor:pointer; transition:background 0.12s; }
#mod-settings-footer .mod-footer-btn:hover { background:rgba(255,255,255,0.65); }
#mod-settings-footer a.mod-footer-btn { display:inline-flex; align-items:center; box-sizing:border-box; text-decoration:none; white-space:nowrap; }
#mod-settings-footer a.mod-footer-discord { width:30px; padding:0; justify-content:center; }
#mod-settings-footer .mod-footer-discord svg { width:18px; height:18px; font-size:inherit; display:block; transition:color 0.12s; }
#mod-settings-footer .mod-footer-discord:hover { color:#5865F2; }
#mod-settings-footer a.mod-footer-youtube { width:30px; padding:0; justify-content:center; }
#mod-settings-footer .mod-footer-youtube svg { width:19px; height:19px; font-size:inherit; display:block; transition:color 0.12s; }
#mod-settings-footer .mod-footer-youtube:hover { color:#FF0000; }
#mod-settings-footer a.mod-footer-github { width:30px; padding:0; justify-content:center; }
#mod-settings-footer .mod-footer-github svg { width:18px; height:18px; font-size:inherit; display:block; transition:color 0.12s; }
#mod-settings-footer .mod-footer-github:hover { color:#ffffff; }
#mod-settings-footer .mod-footer-update { width:30px; padding:0; display:inline-flex; align-items:center; justify-content:center; box-sizing:border-box; }
#mod-settings-footer .mod-footer-update svg { width:17px; height:17px; font-size:inherit; display:block; transition:transform 0.35s ease; }
#mod-settings-footer .mod-footer-update:hover:not(:disabled) svg { transform:rotate(180deg); }
#mod-settings-footer .mod-footer-update:disabled { cursor:default; }
#mod-settings-footer .mod-footer-update:disabled svg { animation:ssb-upd-spin 0.8s linear infinite; }
@keyframes ssb-upd-spin { to { transform:rotate(360deg); } }

/* Key-binding buttons: listening state and the Clear link */
#mod-settings-section .mod-key-btn.mod-key-listening { width:auto !important; min-width:120px; border:none !important; background:var(--ssb-card) !important; box-shadow:inset 0 0 0 2px var(--ssb-muted); text-transform:none !important; }
#mod-settings-section .mod-key-clear { margin:0; padding:2px 4px; border:none; background:none; color:var(--ssb-muted); font-family:"Nunito", system-ui, sans-serif; font-size:14px; font-weight:800; text-decoration:underline; text-underline-offset:3px; cursor:pointer; }
#mod-settings-section .mod-key-clear:hover { color:var(--ssb-ink); }
/* The clash warning under a key row (13a _keyClash): its own line, red like the game's warnings */
#mod-settings-section .mod-slider-container:has(> .mod-key-warn:not([hidden])) { flex-wrap:wrap; row-gap:6px; }
#mod-settings-section .mod-key-warn { flex:1 0 100%; margin:0; font-family:"Nunito", system-ui, sans-serif; font-size:13.5px; font-weight:800; line-height:1.3; color:#d11414; }
#mod-settings-section .mod-key-warn[hidden] { display:none; }
/* Off / Copy / Download (When King of the Coop Ends): the Crosshair tab's segmented control, without icons */
#mod-settings-section .mod-seg { display:flex; gap:4px; padding:4px; border-radius:13px; background:rgba(12,87,111,0.1); box-shadow:inset 0 1px 3px rgba(8,62,84,0.14); }
#mod-settings-section .mod-seg-btn { flex:1 1 0; min-width:84px; height:36px; margin:0; padding:0 12px; border:1px solid transparent; border-radius:10px; background:transparent; box-shadow:none; color:var(--ssb-ink); font-family:"Nunito", system-ui, sans-serif; font-size:14px; font-weight:800; letter-spacing:0.2px; line-height:1; text-transform:none; text-shadow:none; white-space:nowrap; cursor:pointer; transition:background 0.12s; }
#mod-settings-section .mod-seg-btn:hover:not([aria-pressed="true"]) { background:var(--pm-glass-hi, rgba(255,255,255,0.42)); }
#mod-settings-section .mod-seg-btn[aria-pressed="true"] { border-color:var(--pm-orange-edge, #cf700c); background:var(--pm-orange, #ff961d); color:#fff; text-shadow:0 1px 0 rgba(0,0,0,0.22); box-shadow:inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -2px 0 rgba(0,0,0,0.12), 0 4px 10px rgba(247,147,30,0.3); }
/* Changed page: a "Reset" text link on each card there, styled like Clear. The word is CSS, so search doesn't read it. */
#mod-settings-section .mod-reset-one { display:none; flex:none; margin:0; padding:2px 4px; border:none; background:none; color:var(--ssb-muted); font-family:"Nunito", system-ui, sans-serif; font-size:14px; font-weight:800; text-decoration:underline; text-underline-offset:3px; cursor:pointer; }
#mod-settings-section .mod-reset-one::before { content:"Reset"; }
#mod-settings-section .mod-reset-one:hover { color:var(--ssb-ink); }
#mod-settings-section .mod-item.ssb-covered { opacity:0.5; cursor:default; }
#mod-settings-section.ssb-paged[data-page="changed"]:not(.mod-searching) .mod-reset-one { display:inline-block; }
#mod-settings-section.ssb-paged[data-page="changed"]:not(.mod-searching) .mod-item { grid-template-columns:minmax(0,1fr) auto auto; grid-template-areas:"name reset box" "desc reset box"; }
#mod-settings-section.ssb-paged .mod-item > .mod-reset-one { grid-area:reset; }
#mod-crosshair-section .ch2-disabled-msg { display:flex; flex-direction:column; align-items:center; gap:var(--ssb-gap); margin-top:15px; padding:22px 18px; border:2px dashed rgba(33,106,128,0.45); border-radius:10px; background:rgba(33,106,128,0.06); color:var(--ssb-muted); font-size:14px; font-weight:700; text-align:center; letter-spacing:0.2px; }
/* While searching, each match shows its description under its name */
#mod-settings-section .mod-search-tip { display:none; margin-top:3px; font-size:14px; font-weight:600; line-height:1.3; color:var(--ssb-muted); }
#mod-settings-section.mod-searching .mod-search-tip { display:block; }

/* Tooltips styling */
#mod-settings-section [data-tooltip], #mod-settings-section .mod-slider-label[data-tooltip] {
cursor: default;
}
`
;
(document.head || document.documentElement).appendChild(n);
}
if (!document.getElementById("mod-crosshair-compact")) {
let cs = document.createElement("style");
cs.id = "mod-crosshair-compact";
cs.textContent =
`#mod-crosshair-section .ch2-preview-col{flex:1!important}#mod-crosshair-section .ch2-preview-wrap{margin-bottom:12px!important;border-radius:12px!important}#mod-crosshair-section .ch2-label{font-size:14px!important}#mod-crosshair-section .ch2-check-text{font-size:18px!important}#mod-crosshair-section .ch2-check-label{gap:14px!important;margin-bottom:8px!important}#mod-crosshair-section .ch2-check-box{width:30px!important;height:30px!important;border-radius:7px!important}#mod-crosshair-section .ch2-color{width:48px!important;height:28px!important;border-radius:7px!important}#mod-crosshair-section .ch2-hex{width:76px!important;padding:4px 8px!important;font-size:14px!important;border-radius:8px!important}#mod-crosshair-section .ch2-num{width:56px!important;padding:4px 8px!important;font-size:14px!important;border-radius:8px!important}#mod-crosshair-section .ch2-control-row{gap:13px!important;margin-bottom:9px!important}#mod-crosshair-section .ch2-slider{height:5px!important;border-radius:4px!important}#mod-crosshair-section .ch2-slider::-webkit-slider-thumb{-webkit-appearance:none!important;appearance:none!important;width:21px!important;height:21px!important;border:4.5px solid #ffffff!important;margin-top:-8px!important;box-sizing:border-box!important}#mod-crosshair-section .ch2-slider::-moz-range-thumb{width:21px!important;height:21px!important;border-width:4.5px!important;box-sizing:border-box!important}#mod-crosshair-section .ch2-slider-wrap{margin-bottom:14px!important}#mod-crosshair-section .ch2-slider-lrow{margin-bottom:6px!important}#mod-crosshair-section .ch2-shape-row{gap:5px!important;margin-bottom:10px!important}#mod-crosshair-section .ch2-shape-btn{font-size:15px!important;padding:0 8px!important;height:36px!important;border-radius:10px!important;letter-spacing:0.4px!important;box-shadow:0 3px 0 var(--ssb-card-shadow-hi)!important}#mod-crosshair-section .ch2-shape-btn:hover{box-shadow:0 3px 0 var(--ssb-card-shadow-hi)!important}#mod-crosshair-section .ch2-shape-btn:active{box-shadow:0 1px 0 var(--ssb-card-shadow-hi)!important}#mod-crosshair-section .ch2-shape-btn.active{box-shadow:0 3px 0 var(--ssb-ink)!important}#mod-crosshair-section .ch2-reset-btn{padding:0 18px!important;font-size:15px!important;height:36px!important;border-radius:10px!important;margin-top:10px!important;letter-spacing:0.4px!important;box-shadow:0 3px 0 var(--ssb-red-shadow)!important}#mod-crosshair-section .ch2-reset-btn:hover{box-shadow:0 3px 0 var(--ssb-red-shadow-hi)!important}#mod-crosshair-section .ch2-reset-btn:active{box-shadow:0 1px 0 var(--ssb-red-shadow-hi)!important}#mod-crosshair-section .ch2-profile-btn{font-size: 14px !important;height:34px!important;padding:0 10px!important;border-radius:9px!important;letter-spacing:0.3px!important;white-space:nowrap!important;box-shadow:0 3px 0 #123d4b!important}#mod-crosshair-section .ch2-profile-btn:hover{box-shadow:0 3px 0 var(--ssb-blue-shadow)!important}#mod-crosshair-section .ch2-profile-btn:active{box-shadow:0 1px 0 var(--ssb-blue-shadow)!important}#mod-crosshair-section .ch2-profile-btn.danger{box-shadow:0 3px 0 var(--ssb-red-shadow)!important}`;
(document.head || document.documentElement).appendChild(cs)
}
let i = document.createElement("div");
if (window.__ssbUI) window.__ssbUI.ensureCss();
let kw = {
"Hide HP": "health bar",
"Hide Ammo & Grenades": "hide ammo grenade count",
"Hide Scoreboard": "hide player readouts player list leaderboard",
"Hide Kill Feed": "killfeed kills ticker",
"Hide Challenges": "daily challenge rewards complete popup respawn",
"Hide Chick'n Winner": "chicken winner chickn free eggs prizes wake home main menu respawn match bottom left",
"Hide Best Streak": "shell streak",
"Hide Game Stats": "team scores spatula capture",
"Hide Scope Lines": "sniper",
"Hide Chat": "messages",
"Hide Bullets": "tracers projectiles",
"Hide Bullet Splats": "wall impact puff bullet hit smoke particles",
"Disable All Particles": "blood sparks",
"Uncap FPS": "frame rate refresh hz gear options",
"Target FPS": "uncap fps cap limit limiter max maximum frame rate target unlocker hz",
"Controlled Uncap": "uncap fps frame rate limit limiter adaptive smart input lag mouse delay gpu",
"Hide Box Background": "hide box fps box backdrop",
"Show Frametime (ms)": "milliseconds",
"Show Session Time": "timer clock",
"Session Time Counts From": "session time timer clock match round start since page load reset",
"Server Picker": "show server list frontpage home region ping",
"Auto-pick Best Server": "auto best lowest ping region server select",
"Pause-Menu Volume Slider": "show volume slider sound audio",
"Show Changed Tab": "changed settings modified defaults reset sidebar tab optional",
"Advanced Settings": "advanced extra effects gameplay game fixes sidebar tabs pages explanations manage show hide more options",
"Stats Tracker": "enable stats kdr kills deaths",
"Kill Bars": "scoreboard row fill kills team bar graph",
"Highlight Your Name": "stats scoreboard own player me highlight row",
"Pin Stats on Pause Menu": "keep stats pinned",
"When King of the Coop Ends": "kotc game over win round end copy download save picture image screenshot scoreboard",
"Stats Hotkey": "keybind",
"Tab Out Key": "keybind pointer lock",
"Legacy Skins": "classic old guns",
"Legacy Sounds": "classic old audio",
"Auto Fullscreen": "full screen f11",
"Render Scale": "resolution quality pixels hardware scaling blurry sharp lag low fps performance",
"GUI Scale": "ui size zoom smaller bigger shrink resize text hud menus interface font 4k big screen",
"FOV (Black Bars)": "field of view stretch letterbox widescreen aspect ratio window resolution"
};
function a(e, id) {
let t = document.createElement("div");
t.className = "mod-header";
t.textContent = e;
t.id = "mod-sec-" + id;
t.setAttribute(
"data-section", id);
t.style.marginTop = i.querySelector(".mod-header") ? "30px" :
"14px";
i.appendChild(t);
let o = document.createElement("div");
o.className = "mod-grid";
o.setAttribute("data-section", id);
i.appendChild(o);
return o;
}
function r(e, t, n, k) {
return window.__ssbSettings.row({
key: k,
label: e,
checked: t,
tip: o[e],
keywords: kw[e],
onChange: (v, ev) => {
ef("ui_onchange");
n(ev);
}
})
}
function s(e, t, o, n, i, a) {
let s = r(t, o[n], function(e) {
o[n] = e.target.checked;
localStorage.setItem(i, JSON.stringify(o[n]));
if (a) a();
}, i);
e.appendChild(s);
return s;
}
function _keyClash(v, def, other, otherName) {
let nk = x => {
let s = String(x == null ? "" : x);
return s === " " ? "space" : s.trim().toLowerCase().replace(/^(key|digit)(?=[a-z0-9])/, "");
};
let me = nk(v);
if (!me || me === nk(def)) return "";
if (other && nk(other) === me) return "This is also your " + otherName +
": pressing it does both.";
try {
let vm = window.vueApp,
ui = vm && (vm.$data && vm.$data.settingsUi || vm.settingsUi),
kb = ui && ui.controls && ui.controls.keyboard;
for (let list of [kb && kb.game, kb && kb.spectate]) {
if (!Array.isArray(list)) continue;
for (let b of list) {
let bv = b && b.value;
if (bv && (nk(bv.code) === me || nk(bv.label) === me))
return "The game uses this key too (Settings ▸ Controls): pressing it does both.";
}
}
} catch (x) {}
return "";
}
function hk(e, t, n, k, get, clash) {
let a = document.createElement("div");
a.className = "mod-slider-container";
if (k) a.setAttribute("data-setting", k);
if (kw[e]) a
.setAttribute("data-keywords", kw[e]);
let r = document.createElement("div");
r.className = "mod-slider-label";
r.textContent = e;
let s = o[e];
if (s) {
r.setAttribute("data-tooltip", s);
r.style.cursor = "default";
}
let l = document.createElement("button"),
clr = document.createElement("button"),
cur = t,
c = false;
function d(e) {
return e ? e === " " ? "Space" : e : "None"
}
let warn = document.createElement("div");
warn.className = "mod-key-warn";
warn.setAttribute("role", "status");
warn.hidden = true;
function paint() {
l.textContent = d(cur);
l.setAttribute("aria-label", e + ": " + d(cur) +
". Press to change.");
let w = clash ? clash(cur) : "";
if (warn.textContent !== w) warn.textContent = w;
warn.hidden = !w;
}
l.type = "button";
l.className = "mod-num-input mod-key-btn";
l.style.cssText =
"width: 120px; padding: 6px 10px; cursor: pointer; text-transform: capitalize; font-weight: 700;";
clr.type = "button";
clr.className = "mod-key-clear";
clr.textContent = "Clear";
clr
.setAttribute("aria-label", "Clear " + e);
paint();
let cancel = () => end(),
outside = ev => {
if (ev.target !== l) end();
};
function end(v) {
if (!c) return;
c = false;
window.removeEventListener("keydown", onKey, true);
window.removeEventListener(
"blur", cancel);
document.removeEventListener("mousedown", outside, true);
document.removeEventListener("visibilitychange", cancel);
l.removeEventListener(
"blur", cancel);
l.classList.remove("mod-key-listening");
if (undefined !== v) {
n(v);
cur = get ? get() : v;
}
paint();
}
function onKey(ev) {
if (!l.isConnected || !l.offsetParent) {
end();
return
}
ev.preventDefault();
ev.stopPropagation();
if (ev.key === "Escape") {
window.__ssbEatKeyUp("Escape");
end();
return
}
if (/^(Shift|Control|Alt|Meta|AltGraph|CapsLock|Dead|Unidentified)$/.test(ev.key))
return;
window.__ssbEatKeyUp(ev.key);
end(ev.key);
}
l.addEventListener("click", ev => {
if (ev.preventDefault(), c) {
end();
return
}
c = true;
l.textContent = "Press a key… (Esc cancels)";
l.classList.add(
"mod-key-listening");
window.addEventListener("keydown", onKey, true);
window.addEventListener("blur", cancel);
document.addEventListener(
"mousedown", outside, true);
document.addEventListener("visibilitychange",
cancel);
l.addEventListener("blur", cancel);
});
clr.addEventListener("click", ev => {
ev.preventDefault();
end();
n("");
cur = get ? get() : "";
paint();
ef(
"ui_click");
});
a.__ssbSet = v => {
end();
n(v);
cur = get ? get() : v;
paint();
};
a.appendChild(r);
a.appendChild(l);
a.appendChild(clr);
a.appendChild(warn);
return a;
}
function seg(e, opts, cur, n, k) {
let a = document.createElement("div");
a.className = "mod-slider-container";
a.setAttribute("data-setting", k);
if (kw[e]) a.setAttribute("data-keywords", kw[e]);
let r = document.createElement("div");
r.className = "mod-slider-label";
r.textContent = e;
if (o[e]) {
r.setAttribute("data-tooltip", o[e]);
r.style.cursor = "default";
}
let g = document.createElement("div");
g.className = "mod-seg";
g.setAttribute("role", "group");
g.setAttribute("aria-label", e);
let bs = opts.map((t, v) => {
let b = document.createElement("button");
b.type = "button";
b.className = "mod-seg-btn";
b.textContent = t;
b.addEventListener("click", ev => {
ev.preventDefault();
if (v === cur) return;
ef("ui_onchange");
a.__ssbSet(v);
});
g.appendChild(b);
return b;
});
let paint = () => bs.forEach((b, v) => b.setAttribute("aria-pressed", String(v === cur)));
a.__ssbSet = v => {
cur = n(v);
paint();
};
paint();
a.appendChild(r);
a.appendChild(g);
return a;
}
i.id = "mod-settings-section";
i.style.cssText =
"display:none;overflow-y:auto;box-sizing:border-box;padding:0 10px 30px;";
let hdr = document.createElement("div");
hdr.id = "mod-top-bar";
let sw = document.createElement("div");
sw.className = "mod-search-wrap";
let k = document.createElement("input");
k.type = "text";
k.className = "mod-search";
k.placeholder = "Search settings…";
k
.spellcheck = false;
k.autocomplete = "off";
k.setAttribute("aria-label", "Search settings");
let kx = document.createElement("button");
kx.type = "button";
kx.className = "mod-search-clear";
kx.textContent = "×";
kx.setAttribute(
"aria-label", "Clear search");
sw.appendChild(k);
sw.appendChild(kx);
hdr.appendChild(
sw);
let jb = document.createElement("div");
jb.className = "mod-jump-bar";
jb.setAttribute("role", "tablist");
jb.setAttribute("aria-label",
"MODS sections");
let _jmp =
0;
let _pages = ["hud", "chat", "effects", "fps", "menus", "stats", "gameplay", "others",
"manage", "changed"
],
_advPages = ["effects",
"gameplay"
],
_ico = {
others: "<svg class='pm-ico' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><rect x='3.5' y='3.5' width='7' height='7' rx='1.5'/><rect x='13.5' y='3.5' width='7' height='7' rx='1.5'/><rect x='3.5' y='13.5' width='7' height='7' rx='1.5'/><path d='M17 13.5v7M13.5 17h7'/></svg>",
hud: "<svg class='pm-ico' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M4 9V6a2 2 0 0 1 2-2h3M15 4h3a2 2 0 0 1 2 2v3M20 15v3a2 2 0 0 1-2 2h-3M9 20H6a2 2 0 0 1-2-2v-3'/><path d='M9 12h6'/></svg>",
chat: "<svg class='pm-ico' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M21 11.5a8.4 8.4 0 0 1-12.2 7.5L3 21l2-5.8A8.4 8.4 0 1 1 21 11.5z'/></svg>",
effects: "<svg class='pm-ico' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M12 3l1.8 4.9L19 9.5l-5.2 1.6L12 16l-1.8-4.9L5 9.5l5.2-1.6z'/><path d='M19 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z'/></svg>",
fps: "<svg class='pm-ico' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M4.5 18a8.5 8.5 0 1 1 15 0'/><path d='M12 14.5l3.5-4.5'/><circle cx='12' cy='14.5' r='1.3'/></svg>",
menus: "<svg class='pm-ico' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01'/></svg>",
stats: "<svg class='pm-ico' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M4 20h16'/><path d='M7 16v-5M12 16V6M17 16v-8'/></svg>",
gameplay: "<svg class='pm-ico' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M7 8h10a5 5 0 0 1 4.8 6.3l-.6 2.2a2.3 2.3 0 0 1-4 .8L15.5 15h-7l-1.7 2.3a2.3 2.3 0 0 1-4-.8l-.6-2.2A5 5 0 0 1 7 8z'/><path d='M8 10.5v3M6.5 12h3M15.5 11.5h.01M17.5 13h.01'/></svg>",
manage: "<svg class='pm-ico' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M4 7h9M17 7h3M4 17h3M11 17h9'/><circle cx='15' cy='7' r='2'/><circle cx='9' cy='17' r='2'/></svg>",
changed: "<svg class='pm-ico' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M4 20h4L19 9l-4-4L4 16z'/><path d='M14 6l4 4'/></svg>"
},
_pg0;
try {
_pg0 = localStorage.getItem("ssb-modsPage")
} catch (x) {}
i.classList.add("ssb-paged");
i.classList.toggle("ssb-adv", !!d.ui.advancedSettings);
function pageAllowed(id) {
return _pages.includes(id) && (id !== "changed" || d.ui.showChangedTab) && (!_advPages
.includes(id) || d.ui.advancedSettings);
}
i.dataset.page = pageAllowed(_pg0) ? _pg0 : "hud";
function paintPage() {
let id = i.dataset.page;
jb.querySelectorAll(".mod-jump-chip").forEach(b => {
let on = b.getAttribute("data-jump") === id;
b.classList.toggle("active", on);
b.setAttribute("aria-selected", on ? "true" :
"false");
})
}
function setPage(id) {
if (!pageAllowed(id)) return;
let fresh = i.dataset.page !== id;
i.dataset.page = id;
i.scrollTop = 0;
paintPage();
if (fresh) {
i.classList.remove("pm-enter");
void i.offsetWidth;
i.classList.add("pm-enter");
}
try {
localStorage.setItem("ssb-modsPage", id)
} catch (x) {}
if (id === "changed" && window.__ssbPaintChanged) window.__ssbPaintChanged();
if (id === "others" && window.__ssbPaintOthers) window.__ssbPaintOthers();
if (window.__ssbRequestLayout) window.__ssbRequestLayout();
}
function syncTabs() {
i.classList.toggle("ssb-adv", !!d.ui.advancedSettings);
jb.querySelectorAll("[data-jump]").forEach(b => {
const id = b.getAttribute("data-jump");
if (id === "changed" || _advPages.includes(id)) b.hidden = !pageAllowed(id);
});
if (!pageAllowed(i.dataset.page)) {
const own = i.dataset.page === "changed" ? "tp-showChangedTab" : "tp-advancedSettings";
setPage("menus");
i.querySelector('[data-setting="' + own + '"] input')?.focus({preventScroll: true});
}
}
function jump(id) {
if (id === "changed") {
if (k.value) {
k.value = "";
E();
}
setPage(id);
return
}
if (!k.value.trim()) {
setPage(id);
return
}
let h = document.getElementById("mod-sec-" + id);
if (!h) return;
_jmp = Date.now();
jb.querySelectorAll(".mod-jump-chip").forEach(b => b.classList.toggle(
"active", b.getAttribute("data-jump") === id));
let from = i.scrollTop,
top = Math.max(0, Math.min(h.offsetTop - 6, i.scrollHeight - i.clientHeight));
i.scrollTo({
top: top,
behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ?
"auto" : "smooth"
});
setTimeout(() => {
if (i.scrollTop === from && from !== top) i.scrollTop = top;
}, 250);
} [
["hud", "HUD"],
["chat", "Chat"],
["effects", "Effects"],
["fps", "FPS & Ping"],
["menus", "Menus"],
["stats", "Stats"],
["gameplay", "Gameplay"],
["others", "Other Mods"],
["manage", "Manage"],
["changed", "Changed"]
].forEach(([id, t]) => {
let b = document.createElement("button");
b.type = "button";
b.className = "mod-jump-chip";
b.textContent = t;
if (_ico[id]) b
.insertAdjacentHTML("afterbegin", _ico[id]);
b.setAttribute("data-jump", id);
if (id === "changed" || _advPages.includes(id)) b.hidden = !pageAllowed(id);
b
.setAttribute("role", "tab");
b.addEventListener("click", () => {
ef("ui_click");
jump(id);
});
jb.appendChild(b);
});
hdr.appendChild(jb);
let feedback = document.createElement("div");
feedback.className = "ssb-settings-feedback";
let resultCount = document.createElement("span");
resultCount.setAttribute("role", "status");
resultCount.setAttribute("aria-live", "polite");
let reloadNotice = document.createElement("span");
reloadNotice.className = "ssb-reload-notice";
feedback.appendChild(resultCount);
feedback.appendChild(reloadNotice);
hdr.appendChild(feedback);
const showFeedback = () => {
const pending = window.__ssbSettings.reloadPending();
const text = pending.length ? "Reload required: " + pending.map(x => x.label).join(
", ") : "";
if (reloadNotice.textContent !== text) reloadNotice.textContent = text;
reloadNotice.classList.toggle("ssb-reload-pending", !!pending.length);
};
window.__ssbSettingsFeedback = showFeedback;
showFeedback();
let emp = document.createElement("div");
emp.className = "mod-search-empty";
emp.style.display = "none";
i.appendChild(
emp
);
function syncChips() {
if (!k.value.trim()) {
paintPage();
return
}
if (!i.offsetParent || Date.now() - _jmp < 800) return;
let hs = i.querySelectorAll(".mod-header:not([data-section='changed'])"),
top = i.scrollTop + 12,
cur = hs[0];
hs.forEach(h => {
if (h.offsetParent && h.offsetTop <= top) cur = h;
});
if (hs.length && i.scrollTop + i.clientHeight >= i.scrollHeight - 2) cur = hs[hs
.length - 1];
let id = cur && cur.getAttribute("data-section");
jb.querySelectorAll(".mod-jump-chip").forEach(b => b.classList.toggle("active", b
.getAttribute("data-jump") === id))
}
let _scT = 0;
i.addEventListener("scroll", () => {
if (!_scT) _scT = requestAnimationFrame(() => {
_scT = 0;
syncChips();
});
}, {
passive: true
});
window.__ssbPaintModTop = null;
window.__ssbSyncModChips =
syncChips;
function E() {
let e = k.value.toLowerCase().trim(),
w = e.split(/\s+/).filter(Boolean),
n = 0;
kx.style.visibility = e ? "visible" : "hidden";
i.classList.toggle("mod-searching", !!e);
i
.querySelectorAll(".mod-grid").forEach(o => {
let h = o.previousElementSibling,
sec = h && h.classList.contains("mod-header") ? h.textContent : "",
c = 0;
Array.from(o.children).forEach(t => {
if (t.id === "ssb-inv-card") return;
let tt = t.getAttribute("data-tooltip") || (t.querySelector(
"[data-tooltip]") || t).getAttribute("data-tooltip") || "",
hay = (t.textContent + " " + tt + " " + (t.getAttribute(
"data-keywords") || "") + " " + sec).toLowerCase(),
hit = w.every(x => hay.includes(x));
if (hit && tt) {
let host = t.classList.contains("mod-item") ? t.querySelector(
".mod-label") : t.querySelector(".mod-slider-label");
if (host && !host.querySelector(".mod-search-tip")) {
let tp = document.createElement("span");
tp.className = "mod-search-tip";
tp.textContent = tt;
host
.appendChild(tp);
}
}
t.style.display = hit ? "" : "none";
if (hit) c++;
});
let v = c > 0;
o.style.display = v ? "" : "none";
jb.querySelectorAll("[data-jump]").forEach(
b => {
if (b.dataset.jump === o.dataset.section) b.disabled = !v;
});
if (h && h.classList.contains("mod-header")) h.style.display = v ?
"" : "none";
n += c;
});
emp.style.display = e && !n ? "" : "none";
emp.textContent = e && !n ?
"No settings match “" + k.value.trim() + "”" : "";
resultCount.textContent = e ? n + (
n === 1 ? " result" : " results") : "";
if (!e) syncChips();
if (window
.__ssbRequestLayout) window.__ssbRequestLayout();
}
k.addEventListener("input", E);
k.addEventListener("keydown", ev => {
if (ev.key === "Escape" && k.value) {
ev.preventDefault();
ev.stopPropagation();
window
.__ssbEatKeyUp("Escape");
k.value = "";
E();
}
});
kx.addEventListener("click", () => {
k.value = "";
E();
k.focus();
});
let C = a("HUD", "hud");
s(C, "Hide HP", d.ui, "hideHP", "tp-hideHP", ei);
C.appendChild(r("Hide Ammo & Grenades", d.ui
.hideAmmo || d.ui.hideGrenade,
function(e) {
let v = e.target.checked;
d.ui.hideAmmo = v;
localStorage.setItem("tp-hideAmmo", JSON.stringify(v));
d.ui
.hideGrenade = v;
localStorage.setItem("tp-hideGrenade", JSON.stringify(v));
ei();
}, "tp-hideAmmo"));
s(C, "Hide Egg Count", d.ui, "hideEggCount", "tp-hideEggCount", ei);
s(C, "Hide Best Streak", d.ui, "hideBestStreak", "tp-hideBestStreak", ei);
s(C,
"Hide Game Stats", d.ui, "hideGameStats", "tp-hideGameStats", ei);
s(C,
"Hide Scoreboard", d.ui, "hidePlayerList", "tp-hidePlayerList", ei);
s(C,
"Hide Kill Feed", d.ui, "hideKillFeed", "tp-hideKillFeed", ei);
s(C, "Hide Challenges",
d.ui, "hideChallenges", "tp-hideChallenges", ei);
s(C, "Hide Chick'n Winner", d.ui,
"hideChickenWinner", "tp-hideChickenWinner", ei);
s(C, "Hide Scope Lines", d.gameplay,
"hideScopeLines", "tp-hideScopeLines", () => {
if (window.__ssbApplyScopeLines) window.__ssbApplyScopeLines();
});
let _guC = document.createElement("div");
_guC.className = "mod-slider-container";
_guC.setAttribute("data-setting", "tp-guiScale");
_guC
.setAttribute("data-keywords", kw["GUI Scale"]);
let _guL = document.createElement("div");
_guL.className = "mod-slider-label";
_guL.textContent = "GUI Scale";
let _guTt = o["GUI Scale"];
if (_guTt) {
_guL.setAttribute("data-tooltip", _guTt);
_guL.style.cursor = "default";
}
let _guIW = document.createElement("div");
_guIW.className = "mod-slider-inner-wrap";
_guIW.style.cssText =
"display: flex; align-items: center; flex: 1; gap: 8px;";
let _guMn = document.createElement("span");
_guMn.className = "mod-slider-limit";
_guMn.style.cssText =
"font-size: 11px; color: #216a80; font-weight: 700; opacity: 0.75; min-width: 20px; text-align: right;";
_guMn.textContent = "0.4";
let _guR = document.createElement("input");
Object.assign(_guR, {
type: "range",
className: "mod-slider",
min: "0.4",
max: "1.2",
step: "0.05",
value: window.__ssbGuiScale()
});
let _guMx = document.createElement("span");
_guMx.className = "mod-slider-limit";
_guMx.style.cssText =
"font-size: 11px; color: #216a80; font-weight: 700; opacity: 0.75; min-width: 20px; text-align: left;";
_guMx.textContent = "1.2";
_guIW.appendChild(_guMn);
_guIW.appendChild(_guR);
_guIW
.appendChild(_guMx);
let _guN = document.createElement(
"input"
);
function _guApply(v) {
v = Math.max(.4, Math.min(1.2, Math.round(20 * v) / 20));
_guR.value = v;
_guN.value = v;
d
.ui.guiScale = v;
localStorage.setItem("tp-guiScale", JSON.stringify(v));
document
.dispatchEvent(new Event("ssb:settings-change"));
ef("ui_onchange");
}
Object.assign(_guN, {
type: "number",
className: "mod-num-input",
min: "0.4",
max: "1.2",
step: "0.05",
value: window.__ssbGuiScale()
});
_guR.addEventListener("input", () => {
_guN.value = _guR.value
});
_guR.addEventListener("change", () => _guApply(parseFloat(_guR.value)));
let _guNc = () => {
let e = parseFloat(_guN.value);
if (!isNaN(e)) _guApply(e);
};
_guN.addEventListener("change", _guNc);
_guN.addEventListener("keydown", e => {
if (e.key === "Enter") {
_guNc();
_guN.blur();
}
});
_guC.__ssbSet = _guApply;
_guC.appendChild(_guL);
_guC.appendChild(_guIW);
_guC.appendChild(
_guN);
C.appendChild(_guC);
let Ch = a("Chat", "chat");
s(Ch, "Hide Chat", d.ui, "hideChat", "tp-hideChat", ei);
if (window.__ssbChatCopyRow) Ch.appendChild(window.__ssbChatCopyRow());
let Ef = a("Effects", "effects");
Ef.appendChild(window.__ssbEffects60.row(d.perf));
s(Ef, "Hide Explosion Fire", d.gameplay, "noExplosionFire", "tp-noExplosionFire", g);
s(Ef,
"Hide Yolk Burst", d.gameplay, "noYolk", "tp-noYolk", g);
s(Ef, "Hide Damage Splats", d
.gameplay, "noSplats", "tp-noSplats", g);
s(Ef, "Hide Bullet Splats", d.gameplay, "noBulletSplats", "tp-noBulletSplats", g);
s(Ef, "Hide Shell Burst", d.gameplay,
"noShellBurst", "tp-noShellBurst", g);
s(Ef, "Hide Bullets", d.perf,
"noBulletProjectiles", "tp-noBulletProjectiles", () => {
let e = $();
if (e) w(e);
});
s(Ef, "Disable All Particles", d.perf, "noParticles", "tp-noParticles", () => {
y();
g();
eg();
fxCover();
});
function fxCover() {
let on = !!d.perf.noParticles;
["tp-noExplosionFire", "tp-noYolk", "tp-noSplats", "tp-noBulletSplats", "tp-noShellBurst",
"tp-noBulletProjectiles"
].forEach(k => {
let row = Ef.querySelector('[data-setting="' + k + '"]'),
cb = row && row.querySelector("input[type=checkbox]"),
r = _ssbCore.find(x => x[2] === k);
if (!cb || !r) return;
if (row.__ssbTip == null) row.__ssbTip = row.getAttribute("data-tooltip") || "";
row.classList.toggle("ssb-covered", on);
cb.setAttribute("aria-disabled",
on ? "true" : "false");
cb.checked = on || !!d[r[0]][r[1]];
row
.setAttribute("data-tooltip", on ? "On while Disable All Particles is on." :
row.__ssbTip);
if (!row.__ssbCover) {
row.__ssbCover = 1;
row
.addEventListener("click", ev => {
if (row.classList.contains("ssb-covered") && ev.isTrusted && !ev
.target.closest(".mod-reset-one")) {
ev.preventDefault();
ev.stopPropagation();
}
}, true);
cb.addEventListener("change", () => fxCover());
}
})
}
fxCover();
let T = a("FPS & Ping", "fps");
let _ucCard = s(T, "Uncap FPS", d.hideFPS, "uncap", "tp-uncapFPS", () => {
_ucReset();
if (d.hideFPS.uncap) _installUncap();
});
let _ucSub = [s(T, "Controlled Uncap", d.hideFPS, "uncapCtl", "tp-uncapControlled", _ucReset)];
let _tgC = document.createElement("div");
_tgC.className = "mod-slider-container";
_tgC.setAttribute("data-setting", "tp-uncapTarget");
_tgC.setAttribute("data-keywords", kw["Target FPS"]);
let _tgL = document.createElement("div");
_tgL.className = "mod-slider-label";
_tgL.textContent = "Target FPS";
_tgL.setAttribute("data-tooltip", o["Target FPS"]);
_tgL.style.cursor = "default";
let _tgIW = document.createElement("div");
_tgIW.className = "mod-slider-inner-wrap";
_tgIW.style.cssText = "display: flex; align-items: center; flex: 1; gap: 8px;";
let _tgR = document.createElement("input");
Object.assign(_tgR, {
type: "range",
className: "mod-slider",
min: "29",
max: "1000",
step: "1"
});
_tgR.setAttribute("aria-label", "Target FPS");
["Off", "1000"].forEach(x => {
let l = document.createElement("span");
l.className = "mod-slider-limit";
l.style.cssText =
"font-size: 11px; color: #216a80; font-weight: 700; opacity: 0.75; min-width: 20px; text-align: " +
(x === "Off" ? "right" : "left") + ";";
l.textContent = x;
if (x === "Off") _tgIW.append(l, _tgR);
else _tgIW.appendChild(l);
});
let _tgN = document.createElement("input");
Object.assign(_tgN, {
type: "number",
className: "mod-num-input",
min: "30",
max: "1000",
step: "1",
placeholder: "Off"
});
_tgN.setAttribute("aria-label", "Target FPS, 30 to 1000, empty for Off");
let _tgPaint = () => {
let v = d.hideFPS.uncapTarget;
_tgR.value = String(v || 29);
_tgR.setAttribute("aria-valuetext", v ? v + " frames per second" : "Off");
_tgN.value = v ? String(v) : "";
},
_tgSet = v => {
v = _ucClean(v);
if (v !== d.hideFPS.uncapTarget) {
d.hideFPS.uncapTarget = v;
try {
localStorage.setItem("tp-uncapTarget", JSON.stringify(v));
} catch (e) {
window.__ssbErr("uncap.target", e);
}
document.dispatchEvent(new Event("ssb:settings-change"));
}
_tgPaint();
},
_tgCommit = () => {
let t = _tgN.value.trim(),
n = t === "" ? 0 : Number(t);
if (!(_tgN.validity && _tgN.validity.badInput) && Number.isFinite(n) && _ucClean(n) !== d
.hideFPS.uncapTarget) {
_tgSet(n);
ef("ui_onchange");
} else _tgPaint();
},
_tgKeys = e => {
if (/^(Arrow|Home$|End$|PageUp$|PageDown$)/.test(e.key)) e.stopPropagation();
};
_tgPaint();
_tgR.addEventListener("input", () => _tgSet(+_tgR.value === 29 ? 0 : +_tgR.value));
_tgR.addEventListener("change", () => ef("ui_onchange"));
["keydown", "keyup"].forEach(t => _tgR.addEventListener(t, _tgKeys));
_tgN.addEventListener("change", _tgCommit);
_tgN.addEventListener("keydown", e => {
if (e.key !== "Escape") e.stopPropagation();
if (e.key === "Enter") {
e.preventDefault();
window.__ssbEatKeyUp(e.key);
_tgCommit();
_tgN.blur();
}
});
_tgN.addEventListener("keyup", e => {
if (e.key !== "Escape") e.stopPropagation();
});
_tgC.__ssbSet = v => {
_tgSet(v);
ef("ui_onchange");
};
_tgC.append(_tgL, _tgIW, _tgN);
T.appendChild(_tgC);
_ucSub.push(_tgC);
let _ucGear = document.createElement("button");
_ucGear.type = "button";
_ucGear.className = "ssb-uc-gear";
_ucGear.setAttribute("aria-label", "Uncap FPS options");
_ucGear.setAttribute("data-tooltip", "Controlled Uncap and Target FPS");
_ucGear.setAttribute("aria-expanded", "false");
_ucSub.forEach((el, k) => {
el.classList.add("ssb-uc-sub");
el.id = "ssb-uc-sub" + k;
});
_ucGear.setAttribute("aria-controls", "ssb-uc-sub0 ssb-uc-sub1");
_ucGear.addEventListener("click", ev => {
ev.preventDefault();
ev.stopPropagation();
ef("ui_click");
let open = T.classList.toggle("ssb-uc-open");
_ucGear.setAttribute("aria-expanded", String(open));
if (open) _tgC.scrollIntoView({
block: "nearest",
behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
});
});
_ucCard.classList.add("ssb-uc-has-gear");
_ucCard.appendChild(_ucGear);
s(T, "Hide FPS", d.hideFPS, "hide", "tp-hideFPS", eo);
s(T, "Hide Ping", d.ping, "hide",
"tp-hidePing", eo);
s(T, "Show Frametime (ms)", d.hideFPS, "showMs", "tp-showMs", eo);
s(T, "Show Session Time", d.hideFPS, "showSessionTime", "tp-showSessionTime", eo);
T.appendChild(seg("Session Time Counts From", ["Page Load", "Match Start"], d.hideFPS.sessionFrom ===
1 ? 1 : 0, v => {
d.hideFPS.sessionFrom = v === 1 ? 1 : 0;
localStorage.setItem("tp-sessionTimeFrom", JSON.stringify(d.hideFPS.sessionFrom));
eo();
document.dispatchEvent(new Event("ssb:settings-change"));
return d.hideFPS.sessionFrom;
}, "tp-sessionTimeFrom"));
s(T,
"Hide Box Background", d.hideFPS, "hideBox", "tp-hideBox", eo);
let _rsC = document.createElement("div");
_rsC.className = "mod-slider-container";
_rsC.setAttribute("data-setting", "tp-renderScale");
_rsC.setAttribute("data-keywords", kw["Render Scale"]);
let _rsL = document.createElement("div");
_rsL.className = "mod-slider-label";
_rsL.textContent = "Render Scale";
let _rsTt = o["Render Scale"];
if (_rsTt) {
_rsL.setAttribute("data-tooltip", _rsTt);
_rsL.style.cursor = "default";
}
let _rsIW = document.createElement("div");
_rsIW.className = "mod-slider-inner-wrap";
_rsIW.style.cssText =
"display: flex; align-items: center; flex: 1; gap: 8px;";
let _rsMn = document.createElement("span");
_rsMn.className = "mod-slider-limit";
_rsMn.style.cssText =
"font-size: 11px; color: #216a80; font-weight: 700; opacity: 0.75; min-width: 20px; text-align: right;";
_rsMn.textContent = "1";
let _rsR = document.createElement("input");
Object.assign(_rsR, {
type: "range",
className: "mod-slider",
min: "1",
max: "4",
step: "0.25",
value: window.__ssbRenderScale()
});
let _rsMx = document.createElement("span");
_rsMx.className = "mod-slider-limit";
_rsMx.style.cssText =
"font-size: 11px; color: #216a80; font-weight: 700; opacity: 0.75; min-width: 20px; text-align: left;";
_rsMx.textContent = "4";
_rsIW.appendChild(_rsMn);
_rsIW.appendChild(_rsR);
_rsIW
.appendChild(_rsMx);
let _rsN = document.createElement("input");
function _rsApply(v) {
v = Math.max(1, Math.min(4, Math.round(4 * v) / 4));
_rsR.value = v;
_rsN.value = v;
d.perf
.renderScale = v;
localStorage.setItem("tp-renderScale", JSON.stringify(v));
document
.dispatchEvent(new Event("ssb:settings-change"));
ef("ui_onchange");
}
Object.assign(_rsN, {
type: "number",
className: "mod-num-input",
min: "1",
max: "4",
step: "0.25",
value: window.__ssbRenderScale()
});
_rsR.addEventListener("input", () => {
_rsN.value = _rsR.value
});
_rsR.addEventListener("change", () => _rsApply(parseFloat(_rsR.value)));
let _rsNc = () => {
let e = parseFloat(_rsN.value);
if (!isNaN(e)) _rsApply(e);
};
_rsN.addEventListener("change", _rsNc);
_rsN.addEventListener("keydown", e => {
if (e.key === "Enter") {
_rsNc();
_rsN.blur();
}
});
_rsC.__ssbSet = _rsApply;
_rsC.appendChild(_rsL);
_rsC.appendChild(_rsIW);
_rsC.appendChild(
_rsN);
T.appendChild(_rsC);
if (window.__ssbFpsCheck) T.appendChild(window.__ssbFpsCheck.row());
let P = a("Menus", "menus");
s(P, "Server Picker", d.ui, "showServerList", "tp-showServerList", () => {
if (!d.ui.showServerList) {
let e = document.querySelector(".mod-server-clone");
if (e) e.remove();
}
});
s(P, "Auto-pick Best Server", d.ping, "autoPickBest", "tp-autoPickBest", () => {
if (d.ping.autoPickBest) {
ej = false;
_apT0 = 0;
localStorage.removeItem(
"tp-autoPickHeld");
}
});
s(P, "Pause-Menu Volume Slider", d.ui, "showVolumeSlider", "tp-showVolumeSlider",
ei);
s(P, "Show Changed Tab", d.ui, "showChangedTab", "tp-showChangedTab", syncTabs);
s(P, "Advanced Settings", d.ui, "advancedSettings", "tp-advancedSettings", syncTabs);
let St = a("Stats", "stats");
s(St, "Stats Tracker", d.stats, "enabled", "tp-statsEnabled");
s(St, "King of the Coop Stats", d
.stats, "kotc", "tp-statsKotc");
s(St, "Kill Bars", d.stats, "killBars", "tp-statsKillBars");
s(St, "Highlight Your Name", d.stats, "highlightMe", "tp-statsHighlightMe");
s(St, "Pin Stats on Pause Menu", d.stats, "pinned",
"tp-statsPinned");
St.appendChild(seg("When King of the Coop Ends", ["Off", "Copy", "Download"], _stEndMode(), v => {
d.stats.kotcEnd = v === 1 || v === 2 ? v : 0;
localStorage.setItem("tp-statsKotcEnd", JSON.stringify(d.stats.kotcEnd));
document.dispatchEvent(new Event("ssb:settings-change"));
return d.stats.kotcEnd;
}, "tp-statsKotcEnd"));
St.appendChild(hk("Stats Hotkey", d.stats.hotkey, function(e) {
d.stats.hotkey = e || "";
localStorage.setItem("tp-statsHotkey", d.stats
.hotkey);
document.dispatchEvent(new Event("ssb:settings-change"));
}, "tp-statsHotkey", () => d.stats.hotkey, v => _keyClash(v, "\\", d.gameplay.tabOutKey,
"Tab Out Key")));
let L = a("Gameplay", "gameplay");
s(L, "Legacy Skins", d.gameplay, "legacySkins", "tp-legacySkins", () => setLegacySkins(d
.gameplay.legacySkins));
s(L, "Legacy Sounds", d.gameplay, "legacySounds",
"tp-legacySounds", () => setLegacySounds(d.gameplay.legacySounds));
s(L,
"Auto Fullscreen", d.ui, "autoFullscreen", "tp-autoFullscreen");
L.appendChild(hk(
"Tab Out Key", d.gameplay.tabOutKey,
function(e) {
d.gameplay.tabOutKey = e || "";
localStorage.setItem("tp-tabOutKey", d.gameplay
.tabOutKey);
document.dispatchEvent(new Event("ssb:settings-change"));
}, "tp-tabOutKey", () => d.gameplay.tabOutKey, v => _keyClash(v, "Tab", d.stats.hotkey,
"Stats Hotkey")));
let _fovC = document.createElement("div");
_fovC.className = "mod-slider-container";
_fovC.setAttribute("data-setting", "tp-fovStretch");
_fovC.setAttribute("data-keywords", kw["FOV (Black Bars)"]);
let _fovL = document.createElement("div");
_fovL.className = "mod-slider-label";
_fovL.textContent = "FOV (Black Bars)";
let _fovTt = o["FOV (Black Bars)"];
if (_fovTt) {
_fovL.setAttribute("data-tooltip", _fovTt);
_fovL.style.cursor = "default";
}
let _fovIW = document.createElement("div");
_fovIW.className = "mod-slider-inner-wrap";
_fovIW.style.cssText =
"display: flex; align-items: center; flex: 1; gap: 8px;";
let _fovMn = document.createElement("span");
_fovMn.className = "mod-slider-limit";
_fovMn.style.cssText =
"font-size: 11px; color: #216a80; font-weight: 700; opacity: 0.75; min-width: 20px; text-align: right;";
_fovMn.textContent = "1";
let _fovR = document.createElement("input");
Object.assign(_fovR, {
type: "range",
className: "mod-slider",
min: "1",
max: "1.8",
step: "0.05",
value: d.gameplay.fovStretch
});
let _fovMx = document.createElement("span");
_fovMx.className = "mod-slider-limit";
_fovMx.style.cssText =
"font-size: 11px; color: #216a80; font-weight: 700; opacity: 0.75; min-width: 20px; text-align: left;";
_fovMx.textContent = "1.8";
_fovIW.appendChild(_fovMn);
_fovIW.appendChild(_fovR);
_fovIW
.appendChild(_fovMx);
let _fovN = document.createElement("input");
function _fovApply(v) {
v = Math.max(1, Math.min(1.8, Math.round(20 * v) / 20));
_fovR.value = v;
_fovN.value = v;
d
.gameplay.fovStretch = v;
localStorage.setItem("tp-fovStretch", JSON.stringify(v));
document.dispatchEvent(new Event("ssb:settings-change"));
ef("ui_onchange");
applyFovStretch();
}
Object.assign(_fovN, {
type: "number",
className: "mod-num-input",
min: "1",
max: "1.8",
step: "0.05",
value: d.gameplay.fovStretch
});
_fovR.addEventListener("input", () => {
_fovN.value = _fovR.value
});
_fovR.addEventListener("change", () => _fovApply(parseFloat(_fovR.value)));
let _fovNc = () => {
let e = parseFloat(_fovN.value);
if (!isNaN(e)) _fovApply(e);
};
_fovN.addEventListener("change", _fovNc);
_fovN.addEventListener("keydown", e => {
if (e.key === "Enter") {
_fovNc();
_fovN.blur();
}
});
_fovC.__ssbSet = _fovApply;
_fovC.appendChild(_fovL);
_fovC.appendChild(_fovIW);
_fovC
.appendChild(_fovN);
L.appendChild(_fovC);
let et = a("Manage", "manage");
let _om = a("Other Mods",
"others"
);
(function() {
let R = "https://github.com/Virojet/",
W = "https://raw.githubusercontent.com/Virojet/",
MODS = [
["Gun Sounds",
"Pick weapon, meme or your own sounds for shots, melee swings, reloads and the empty click.",
"Shell-Shockers-Gun-Sounds", "Shell-Shockers-Gun-Sounds.user.js", () =>
window.ssGunSounds && (window.ssGunSounds.version || true)
],
["Valorant Kill Sounds",
"Valorant-style kill sounds and banners that climb with your streak, from fifteen packs or your own files.",
"Shell-Shockers-Valorant-Kill-Sounds",
"Shell-Shockers-Valorant-Kill-Sounds.user.js", () => window.ssKillSounds &&
(window.ssKillSounds.version || true)
],
["Valorant Sensitivity",
"Use your Valorant sensitivity, typed in or read from Valorant's settings, from the hip and scoped.",
"Shell-Shockers-Valorant-Sensitivity",
"Shell-Shockers-Valorant-Sensitivity.user.js", () => window
.ssValorantSens && (window.ssValorantSens.version || true)
],
["Mod Menu",
"Switch your installed mods and themes on and off without reloading, or add any userscript.",
"Shell-Shockers-Mod-Menu", "Shell-Shockers-Mod-Menu.user.js", () => window
.ssModMenu ? (window.ssModMenu.version || true) : !!document.getElementById(
"ssmm-root")
],
["Stats Mod",
"Better HUD's Match History on its own. You already have it in Better HUD.",
"Shell-Shockers-Stats-Mod", "Shell-Shockers-Stats-Mod.user.js", () => false,
1
],
["Blossom V4 Theme",
"Black and pink menus over cherry blossom art, a pink HUD and \"You blossomed\" kill messages.",
"Shell-Shockers-Blossom-V4-Theme", "Shell-Shockers-Blossom-V4.user.js",
() => _omStyle("blossom-v4-style")
],
["Cherry Blossom Theme", "Pink menus, a plum background and falling petals.",
"Shell-Shockers-Cherry-Blossom-Theme",
"Shell-Shockers-Cherry-Blossom.user.js", () => _omStyle("ss-sakura-style")
]
],
cards = [];
function _omStyle(id) {
let s = document.getElementById(id);
if (!s) return false;
if (s.dataset && s.dataset.version) return s.dataset.version;
try {
let mm = window.ssModMenu,
re = id === "ss-sakura-style" ? /cherry/i : /blossom[\s-]*v?4/i,
hit = mm && typeof mm.list == "function" && mm.list().find(x => x && x
.version && re.test(x.name || ""));
if (hit) return String(hit.version)
} catch (x) {}
return true
}
function link(cls, text, href) {
let b = document.createElement("a");
b.className = "ssb-om-btn " + cls;
b.textContent = text;
b.href = href;
b.target =
"_blank";
b.rel = "noopener noreferrer";
b.addEventListener("click", () => ef(
"ui_click"));
return b
}
MODS.forEach(m => {
let c = document.createElement("div");
c.className = "ssb-om-card";
c.setAttribute("data-keywords",
"other mods install userscript sounds theme virojet");
let n = document.createElement("div");
n.className = "ssb-om-name";
n.textContent = m[0];
let d = document.createElement("div");
d.className = "ssb-om-desc";
d.textContent = m[1];
let meta = document.createElement("div");
meta.className = "ssb-om-meta";
let act = document.createElement("div");
act.className = "ssb-om-act";
c.append(n, d, meta, act);
c._om = m;
cards.push(c);
_om.appendChild(c);
});
function paintOthers() {
cards.forEach(c => {
let m = c._om,
v;
try {
v = m[4]()
} catch (x) {
v = false
}
let on = !!v;
c.classList.toggle("on", on);
c.querySelector(".ssb-om-meta")
.textContent = m[5] ? "Built into Better HUD" : on ? "Installed" + (
typeof v == "string" ? " · v" + v : "") : "Not installed";
let act = c.querySelector(".ssb-om-act");
act.textContent = "";
if (m[5]) act.appendChild(link("quiet", "GitHub", R + m[2]));
else {
if (on && m[0] === "Mod Menu" && window.ssModMenu && typeof window
.ssModMenu.open == "function") {
let o = document.createElement("button");
o.type = "button";
o.className = "ssb-om-btn";
o.textContent =
"Open";
o.addEventListener("click", () => {
ef("ui_click");
try {
window.ssModMenu.open()
} catch (x) {}
});
act.appendChild(o);
}
if (!on) act.appendChild(link("", "Install", W + m[2] + "/main/" +
m[
3]));
act.appendChild(link(on ? "" : "quiet", "GitHub", R + m[2]))
}
})
}
paintOthers();
window.__ssbPaintOthers = paintOthers
})();
window.__ssbSettings.mount(
i
);
let _chH = document.createElement("div");
_chH.className = "mod-header";
_chH.id = "mod-sec-changed";
_chH.textContent = "Changed";
_chH
.setAttribute("data-section", "changed");
let _chE = document.createElement("div");
_chE.className = "mod-search-empty mod-changed-empty";
_chE.setAttribute("data-section",
"changed");
_chE.textContent = "Everything is at its default.";
i.prepend(_chH, _chE);
let _chgRows = id => {
let r = _ssbCore.find(x => x[2] === id);
return r ? r[6] ? _ssbCore.filter(x => x[6] === r[6]) : [r] : []
},
_chgDiff = r => {
let v = d[r[0]][r[1]],
df = r[4];
return r[5] === "key" ? String(v).toLowerCase() !== String(df).toLowerCase() : r[5] ===
"b" ? !!v !== !!df : Math.abs(v - df) > 1e-9
},
_chgItem = id => window.__ssbSettings.items.find(x => x.key === id),
_chgIs = id => {
let it = _chgItem(id);
if (it) {
try {
return !!it.get() !== !!it.def
} catch (x) {
return false
}
}
return _chgRows(id).some(_chgDiff)
};
function _chgReset(card) {
let id = card.getAttribute("data-setting"),
it = _chgItem(id),
cb = card.querySelector("input[type=checkbox]"),
rows = _chgRows(id);
if (it && cb) {
cb.checked = !!it.get();
if (cb.checked !== !!it.def) cb.click();
} else if (cb && rows.length) {
let df = !!rows[0][4];
cb.checked = df ? rows.every(r => !!d[r[0]][r[1]]) : rows.some(r => !!d[r[0]][r[1]]);
if (cb
.checked !== df) cb.click();
} else if (card.__ssbSet && rows.length) {
if (rows[0][5] === "key") ef("ui_click");
card.__ssbSet(rows[0][4]);
}
paintChanged()
}
function paintChanged() {
if (i.dataset.page !== "changed") return;
let any = false;
i.querySelectorAll(".mod-grid[data-section]").forEach(g => {
if (g.dataset.section === "manage") return;
let n = 0;
Array.from(g.children).forEach(card => {
let id = card.getAttribute("data-setting");
if (!id) return;
let on = _chgIs(id);
card.classList.toggle("ssb-changed", on);
if (on) n++;
if (on && !card.querySelector(":scope > .mod-reset-one")) {
let lab = card.querySelector(".mod-label") || card
.querySelector(".mod-slider-label"),
name = lab ? (lab.firstChild && lab.firstChild
.nodeType === 3 ? lab.firstChild.nodeValue : lab
.textContent)
.trim() : id,
b = document.createElement("button");
b.type = "button";
b.className = "mod-reset-one";
b
.setAttribute("aria-label", "Reset " + name);
b
.addEventListener("click", ev => {
ev.preventDefault();
ev.stopPropagation();
let had = document.activeElement === b;
_chgReset(card);
if (had) {
let nx = i.querySelector(
".ssb-changed > .mod-reset-one");
if (nx) nx.focus({
preventScroll: true
});
}
});
card.appendChild(b);
}
});
g.classList.toggle("ssb-has-changed", n > 0);
let h = g.previousElementSibling;
if (h && h.classList.contains("mod-header")) h.classList.toggle(
"ssb-has-changed",
n > 0);
if (n) any = true;
});
i.classList.toggle("ssb-none-changed", !any);
}
window.__ssbPaintChanged = paintChanged;
if (!window.__ssbChangedHooked) {
window
.__ssbChangedHooked = true;
document.addEventListener("ssb:settings-change", () => {
if (window.__ssbPaintChanged) window.__ssbPaintChanged();
});
}
paintChanged();
function _ssbPackNum(val, scale = 100, offset = 0) {
return Math.round((val + offset) * scale).toString(36);
}
function _ssbUnpackNum(valStr, scale = 100, offset = 0) {
let parsed = parseInt(valStr, 36);
return isNaN(parsed) ? 0 : (parsed / scale) - offset;
}
function _ssbPackColor(hex) {
if (!hex) return "0";
return parseInt(hex.replace("#", ""), 16).toString(36);
}
function _ssbUnpackColor(valStr) {
if (!valStr || valStr === "0") return "#ffffff";
let parsed = parseInt(valStr, 36);
return "#" + (isNaN(parsed) ? "ffffff" : parsed.toString(16).padStart(6, "0"));
}
const dDefaults = {
hideFPS: {},
ping: {},
ui: {},
gameplay: {},
perf: {},
stats: {}
};
_ssbCore.forEach(([sec, prop, , , def]) => {
dDefaults[sec][prop] = def;
});
function _ssbPersistD() {
_ssbCore.forEach(([sec, prop, key, , , type]) => {
const v = d[sec][prop];
localStorage.setItem(key, type === "key" ? String(v) : JSON.stringify(v));
});
}
const CODE_KEYS = {};
_ssbCore.forEach(([sec, prop, , code, , type]) => {
CODE_KEYS[code] = [sec, prop, type];
});
const _ssbSecret = ["hideFPS.min", "hideFPS.max", "hideFPS.random", "ping.min", "ping.max",
"ping.random", "gameplay.noExplosionSmoke", "gameplay.skinUnlocker"
];
function _ssbKeepSecrets(o) {
_ssbSecret.forEach(k => {
const [sec, prop] = k.split(".");
if (o && o[sec]) o[sec][prop] = d[sec][prop];
});
return o;
}
function _ssbSecretsOff() {
let reload = false;
try {
reload = JSON.parse(localStorage.getItem("tp-chatBypass") || "false") === true;
localStorage.setItem("tp-chatBypass", "false");
if (typeof window.__ssbSetScopeFrame === "function") window.__ssbSetScopeFrame(false);
else localStorage.setItem("tp-hideScopeFrame", "false");
} catch (err) {
window.__ssbErr("codes.reset", err)
}
window.__ssbSkinUnlocker = false;
if (window.__ssbAutoCw) window.__ssbAutoCw.off();
if (window.__ssbApplyParticles) window.__ssbApplyParticles();
document.dispatchEvent(new Event("ssb:settings-change"));
return reload ? "\nPress F5 to finish." : "";
}
function packModSettings(current, regParts) {
const S = window.__ssbSettings,
parts = [];
Object.keys(CODE_KEYS).forEach(code => {
const [sec, prop, type] = CODE_KEYS[code], v = current[sec][prop], def =
dDefaults[sec][prop];
if (_ssbSecret.includes(sec + "." + prop)) return;
if (type === "key" ? String(v).toLowerCase() === String(def).toLowerCase() :
v === def) return;
parts.push(code + (type === "b" ? (v ? "1" : "0") : code === "Fv" && v === 1 ? "01" :
S.encodeValue(type === "key" ? v : _ssbPackNum(v, type === "n1" ? 1 : 100))));
});
return S.packCode(parts.join("") + (regParts != null ? regParts : S.codeParts()));
}
function unpackModSettings(code) {
if (!code) throw new Error("Invalid code format");
code = code.trim();
if (/^M2?-/.test(code)) {
const parsed = window.__ssbSettings.parseCode(code),
res = JSON.parse(JSON.stringify(dDefaults));
Object.keys(parsed.vals).forEach(key => {
const m = CODE_KEYS[key];
if (!m) return;
const [sec, prop, type] = m, v = parsed.vals[key];
if (key === "Fv") {
res[sec][prop] = v === "1" ? 60 : window.__ssbEffects60.clean(_ssbUnpackNum(v, 1));
return;
}
if (key === "Sm") {
const n = _ssbUnpackNum(v, 1);
res[sec][prop] = n === 1 || n === 2 ? n : 0;
return;
}
if (key === "Fs") {
res[sec][prop] = _ssbUnpackNum(v, 1) === 1 ? 1 : 0;
return;
}
if (key === "Fg") {
res[sec][prop] = _ucClean(_ssbUnpackNum(v, 1));
return;
}
if (type === "b") res[sec][prop] = v === "1";
else if (type === "n1") res[sec][prop] = _ssbUnpackNum(v, 1);
else if (type === "n") res[sec][prop] = _ssbUnpackNum(v);
else if (parsed.version === 2) res[sec][prop] = v;
else if (prop === "tabOutKey") res[sec][prop] = v === "tab" ? "Tab" : v ===
"escape" ? "Escape" : v === "space" ? "Space" : (v.charAt(0)
.toUpperCase() + v.slice(1));
else res[sec][prop] = v;
});
return res;
}
throw new Error("Invalid code format");
}
const CODE_LABELS = {};
_ssbCore.forEach(([sec, prop, , , , , label]) => {
if (label) CODE_LABELS[sec + "." + prop] = label;
});
function _ssbCodeChanges(next, code) {
const names = new Set();
let unnamed = 0;
Object.keys(dDefaults).forEach(sec => Object.keys(dDefaults[sec]).forEach(p => {
const a = d[sec][p],
b = next[sec][p];
if (typeof a === "string" ? String(a).toLowerCase() === String(b)
.toLowerCase() : a === b) return;
const label = CODE_LABELS[sec + "." + p];
if (label) names.add(label);
else unnamed++;
}));
let vals = {};
try {
vals = window.__ssbSettings.parseCode(code).vals;
} catch (e) {
window.__ssbErr("codes.preview", e)
}
window.__ssbSettings.items.forEach(s => {
if (!s.code) return;
const v = Object.prototype.hasOwnProperty.call(vals, s.code) ? vals[s.code] ===
"1" : !!s.def;
if (!!s.get() !== v) names.add(s.label);
});
return {
names: [...names],
unnamed: unnamed
};
}
let U = window.__ssbUI,
_rebuild = () => {
document.getElementById("mod-crosshair-section")?.__ssbPreviewDispose?.();
i.__ssbTabsDispose?.();
document.dispatchEvent(new Event("ssb:settings-change"));
i.remove();
hdr.remove();
document.getElementById("mod-settings-footer")?.remove();
document.getElementById("mod-crosshair-section")?.remove();
document.getElementById(
"mod-settings-tab")?.remove();
document.getElementById("mod-crosshair-tab")
?.remove();
eW();
eo();
ei();
eg();
y();
},
_f5 = ch => {
let r = window.__ssbSettings.items.filter(s => s.requiresReload && ch.indexOf(s.key) >=
0).map(s => s.label);
return r.length ? "\nPress F5 to apply " + r.join(" and ") + "." : ""
};
let ec_code = document.createElement("button");
ec_code.className = "ch2-profile-btn";
ec_code.textContent = "Copy Settings Code";
ec_code
.setAttribute("data-tooltip",
"Copy all your MODS settings as a short code you can share or keep as a backup.");
ec_code.style.cssText = "width: 100%; cursor: pointer; box-sizing: border-box;";
ec_code
.addEventListener("click", () => {
try {
let t = packModSettings(d);
ef("ui_click");
U.copyCode(t, "Settings code");
} catch (o) {
U.toast("Couldn't create the settings code: " + o.message, {
type: "error"
})
}
});
let cmds = [
[/^(hide|toggle) (explosion )?smoke$/i, () => {
let on = !d.gameplay.noExplosionSmoke;
d.gameplay.noExplosionSmoke = on;
localStorage.setItem(
"tp-noExplosionSmoke", JSON.stringify(on));
if (window
.__ssbApplyParticles) window.__ssbApplyParticles();
document
.dispatchEvent(new Event("ssb:settings-change"));
return on ?
"Hide Explosion Smoke is ON." : "Hide Explosion Smoke is OFF.";
}],
[/^toggle skins$/i, () => {
let on = !d.gameplay.skinUnlocker;
d.gameplay.skinUnlocker = on;
window.__ssbSkinUnlocker = on;
localStorage
.setItem("tp-skinUnlocker", JSON.stringify(on));
document.dispatchEvent(
new Event("ssb:settings-change"));
return on ? "Skin Unlocker is ON." :
"Skin Unlocker is OFF.";
}],
[/^autocw([123])$/i, mt => window.__ssbAutoCw ? window.__ssbAutoCw.toggle(+mt[1]) :
"Not available."
],
[/^autocw2?\s+max\s+(\d+)$/i, mt => window.__ssbAutoCw ? window.__ssbAutoCw.max(
parseInt(mt[1], 10)) : "Not available."],
[/^autocw(?:\s+(off|status))?$/i, mt => {
const a = window.__ssbAutoCw;
if (!a) return "Not available.";
if (mt[1] && mt[1].toLowerCase() === "off") {
a.off();
return "Auto Chick'n Winner is OFF."
}
return a.status()
}],
[/^hide scope frame$/i, () => {
let on;
if (typeof window.__ssbToggleScopeFrame === "function") on = window
.__ssbToggleScopeFrame();
else {
on = !(JSON.parse(localStorage.getItem("tp-hideScopeFrame") || "false") ===
true);
localStorage.setItem("tp-hideScopeFrame", JSON.stringify(on));
}
return on ? "Hide Scope Frame is ON." : "Hide Scope Frame is OFF."
}],
[/^toggle chat$/i, () => {
let on = !(JSON.parse(localStorage.getItem("tp-chatBypass") || "false") ===
true);
localStorage.setItem("tp-chatBypass", JSON.stringify(on));
return "Chat Filter Bypass is " + (on ? "ON" : "OFF") +
".\nFully reload the page (F5) for this to take effect — leaving and rejoining a match is not enough.";
}],
[/^setfps\s+(\d+)(?:\s+(\d+))?$/i, fpsCmd => {
let min = Math.max(1, Math.min(999, parseInt(fpsCmd[1], 10))),
max = fpsCmd[2] ? Math.max(1, Math.min(999, parseInt(fpsCmd[2], 10))) : min;
if (min > max) {
let tmp = min;
min = max;
max = tmp
}
d.hideFPS.min = min;
d.hideFPS.max = max;
d.hideFPS.random = true;
localStorage.setItem("tp-minFPS", JSON.stringify(min));
localStorage
.setItem("tp-maxFPS", JSON.stringify(max));
localStorage.setItem(
"tp-randomFPS", JSON.stringify(true));
return "Custom FPS enabled: " + (min ===
max ? min + " FPS." : min + "-" + max + " FPS.");
}],
[/^(disable setfps|setfps disable|setfps off)$/i, () => (d.hideFPS.random = false,
localStorage.setItem("tp-randomFPS", JSON.stringify(false)),
"Custom FPS disabled."
)],
[/^setping\s+(\d+)(?:\s+(\d+))?$/i, pingCmd => {
let min = Math.max(1, Math.min(999, parseInt(pingCmd[1], 10))),
max = pingCmd[2] ? Math.max(1, Math.min(999, parseInt(pingCmd[2], 10))) :
min;
if (min > max) {
let tmp = min;
min = max;
max = tmp
}
d.ping.min = min;
d.ping.max = max;
d.ping.random = true;
localStorage
.setItem("tp-minPing", JSON.stringify(min));
localStorage.setItem(
"tp-maxPing", JSON.stringify(max));
localStorage.setItem(
"tp-randomPing", JSON.stringify(true));
return "Custom Ping enabled: " + (min ===
max ? min + " ms." : min + "-" + max + " ms.");
}],
[/^(disable setping|setping disable|setping off)$/i, () => (d.ping.random = false,
localStorage.setItem("tp-randomPing", JSON.stringify(false)),
"Custom Ping disabled.")]
];
let ei_code = document.createElement("button");
ei_code.className = "ch2-profile-btn";
ei_code.textContent = "Import Settings Code";
ei_code
.setAttribute("data-tooltip", "Paste a settings code to load those MODS settings.");
ei_code
.style.cssText = "width: 100%; cursor: pointer; box-sizing: border-box;";
ei_code
.addEventListener("click", async () => {
let code = await U.prompt({
title: "Import Settings",
text: "Paste a settings code. It starts with M2- or M-.",
placeholder: "M2-…",
ok: "Next",
validate: v => {
if (!(v = v.trim())) return "Paste a code first.";
if (/^copy chat$/i.test(v)) return "";
if (cmds.some(c => c[0].test(v))) return "";
if (/^SSB-MODS-/i.test(v) || /^eyJ[A-Za-z0-9+/=]*$/.test(v))
return "That code is from an older Better HUD and can't be imported anymore. Settings codes now start with M2-.";
if (!/^M2?-/.test(v))
return "That isn't a settings code. It should start with M2- or M-.";
try {
let o = unpackModSettings(v);
if (!o || typeof o != "object" || Array.isArray(o))
return "That settings code is damaged."
} catch (n) {
return /incomplete/.test(n.message) ?
"The code is incomplete or mistyped. Copy it again in full." :
"That settings code is damaged."
}
return ""
}
});
if (code == null) return;
code = code.trim();
if (/^copy chat$/i.test(code)) {
if (window.__ssbCopyChat) window.__ssbCopyChat();
else U.toast("Chat isn't ready yet. Try again in a moment.", {type: "error"});
return;
}
for (let [re, run] of cmds) {
let mt = re.exec(code);
if (mt) {
let msg = run(mt);
ef("ui_equip");
U.toast(msg, {
type: "success"
});
return
}
}
let o;
try {
o = _ssbKeepSecrets(unpackModSettings(code))
} catch (n) {
U.toast("Import failed: " + n.message, {
type: "error"
});
return
}
let diff = _ssbCodeChanges(o, code),
shown = diff.names.slice(0, 8),
more = diff.names.length - shown.length + diff.unnamed;
if (!shown.length && !diff.unnamed) {
U.toast("That code matches your current settings. Nothing to change.", {
type: "success"
});
return
}
if (!(await U.confirm({
title: "Import Settings",
text: "This will change: " + shown.join(", ") + (more > 0 ? (
shown.length ? " and " : "") + more + " more" : "") +
".\nYour crosshairs aren't affected.",
ok: "Import",
danger: true
}))) return;
try {
! function e(t, o) {
if (o) Object.keys(o).forEach(n => {
if (o[n] === null || typeof o[n] != "object" || Array
.isArray(o[
n])) t[n] = o[n];
else {
if (!t[n]) t[n] = {};
e(t[n], o[
n]);
}
});
}(d, o);
_ssbPersistD();
let ch = window.__ssbSettings.applyCode(code);
ef("ui_equip");
U.toast("Settings imported." + _f5(ch), {
type: "success"
});
_rebuild();
} catch (n) {
U.toast("Import failed: " + n.message, {
type: "error"
})
}
});
const _PRESETS = [{
name: "Performance",
text: "Smart Auto Detail, Disable Anti-Aliasing, Disable All Particles (smoke stays visible), Hide Bullets, Hide Bullet Splats and Hide Explosion Fire.",
core: {
"perf.noParticles": true,
"perf.noBulletProjectiles": true,
"gameplay.noBulletSplats": true,
"gameplay.noExplosionFire": true
},
reg: {
"tp-smartDetail": true,
"tp-noAA": true
}
}, {
name: "Clean HUD",
text: "Hides the egg count, challenges, Chick'n Winner and best streak. Your health, ammo, chat and kill feed stay.",
core: {
"ui.hideEggCount": true,
"ui.hideChallenges": true,
"ui.hideChickenWinner": true,
"ui.hideBestStreak": true
},
reg: {}
}, {
name: "Default",
text: "Every MODS setting back at its default. Your crosshairs, favorites and match history stay.",
all: true
}],
_PRESET_MAX = 10;
function _presetCode(p) {
const S = window.__ssbSettings;
let cur = JSON.parse(JSON.stringify(p.all ? dDefaults : d)),
reg = "";
if (!p.all) Object.keys(p.core).forEach(k => {
let [sec, prop] = k.split(".");
if (cur[sec]) cur[sec][prop] = p.core[k];
});
S.items.forEach(s => {
if (!s.code) return;
let v = p.all ? !!s.def : Object.prototype.hasOwnProperty.call(p.reg, s.key) ? !!p.reg[s.key] :
!!s.get();
if (v !== !!s.def) reg += s.code + (v ? "1" : "0");
});
return packModSettings(cur, reg);
}
function _presetsGet() {
try {
let a = JSON.parse(localStorage.getItem("tp-presets") || "[]");
return Array.isArray(a) ? a.filter(x => x && typeof x.n == "string" && x.n && typeof x.c ==
"string" && /^M2-/.test(x.c)).slice(0, _PRESET_MAX) : []
} catch (x) {
return []
}
}
function _presetsSet(a) {
try {
if (a.length) localStorage.setItem("tp-presets", JSON.stringify(a));
else localStorage.removeItem("tp-presets");
return true;
} catch (x) {
window.__ssbErr("presets#1", x);
return false;
}
}
function _ssbMerge(t, o) {
if (o) Object.keys(o).forEach(n => {
if (o[n] === null || typeof o[n] != "object" || Array.isArray(o[n])) t[n] = o[n];
else {
if (!t[n]) t[n] = {};
_ssbMerge(t[n], o[n]);
}
});
}
async function _presetLoad(code, name) {
let o;
try {
o = _ssbKeepSecrets(unpackModSettings(code))
} catch (n) {
U.toast("Couldn't load " + name + ": " + n.message, {
type: "error"
});
return
}
let diff = _ssbCodeChanges(o, code),
shown = diff.names.slice(0, 8),
more = diff.names.length - shown.length + diff.unnamed;
if (!shown.length && !diff.unnamed) {
U.toast("Your settings already match " + name + ". Nothing to change.", {
type: "success"
});
return
}
if (!(await U.confirm({
title: "Load " + name,
text: "This will change: " + shown.join(", ") + (more > 0 ? (shown.length ? " and " : "") +
more + " more" : "") + ".\nYour crosshairs aren't affected.",
ok: "Load",
danger: true
}))) return;
try {
_ssbMerge(d, o);
_ssbPersistD();
let ch = window.__ssbSettings.applyCode(code);
ef("ui_equip");
U.toast(name + " loaded." + _f5(ch), {
type: "success"
});
_rebuild();
} catch (n) {
U.toast("Couldn't load " + name + ": " + n.message, {
type: "error"
})
}
}
function _presetsOpen() {
let wrap = document.createElement("div"),
list = document.createElement("ul"),
item = (name, text, load, del) => {
let li = document.createElement("li"),
b = document.createElement("b"),
t = document.createElement("span"),
acts = document.createElement("div"),
mk = (label, kind, fn) => {
let x = document.createElement("button");
x.type = "button";
x.className = "ssb-dlg-btn ssb-dlg-" + kind + " ssb-dlg-act";
x.textContent = label;
x.addEventListener("click", fn);
acts.appendChild(x);
};
b.textContent = name;
t.textContent = text;
acts.className = "ssb-dlg-acts";
mk("Load", "blue", () => {
ef("ui_click");
_presetLoad(load(), name);
});
if (del) mk("Delete", "red", del);
li.append(b, t, acts);
list.appendChild(li);
};
wrap.className = "ssb-dlg-report";
list.className = "ssb-dlg-list";
_PRESETS.forEach(p => item(p.name, p.text, () => _presetCode(p)));
_presetsGet().forEach(x => item(x.n, "Your settings" + (x.t ? ", saved " + new Date(x.t)
.toLocaleDateString() : "") + ".", () => x.c, async () => {
ef("ui_click");
if (await U.confirm({
title: "Delete Preset",
text: "Delete the preset \"" + x.n +
"\"? Your current settings stay as they are.",
ok: "Delete",
danger: true
})) {
if (_presetsSet(_presetsGet().filter(y => !(y.n === x.n && y.c === x.c))))
U.toast("Preset deleted.", {type: "success"});
else U.toast("Couldn't delete the preset: browser storage is full or unavailable.", {
type: "error"
});
}
_presetsOpen();
}));
wrap.appendChild(list);
U.dialog({
title: "Presets",
text: "Load a set of MODS settings. You'll see what it changes before anything does.",
body: wrap,
wide: true,
cancel: undefined,
buttons: [{
label: "Save Current",
kind: "yolk",
run: () => _presetSave(true)
}, {
label: "Close",
kind: "blue",
value: undefined,
primary: true
}]
});
}
async function _presetSave(fromList) {
let saved = _presetsGet(),
nm = await U.prompt({
title: "Save Preset",
text: "Name your current MODS settings to load them again from Presets. Using a name again replaces that preset.",
placeholder: "My settings",
ok: "Save",
maxLength: 40,
validate: v => {
v = v.trim();
if (!v) return "Give it a name.";
if (_PRESETS.some(p => p.name.toLowerCase() === v.toLowerCase()))
return "That's a built-in preset's name. Pick another.";
if (!saved.some(x => x.n === v) && saved.length >= _PRESET_MAX)
return "You can save up to " + _PRESET_MAX + " presets. Delete one first.";
return ""
}
});
if (nm != null) {
nm = nm.trim();
try {
saved = saved.filter(x => x.n !== nm);
saved.push({
n: nm,
c: packModSettings(d),
t: Date.now()
});
if (!_presetsSet(saved)) throw new Error("Browser storage is full or unavailable.");
ef("ui_equip");
U.toast("Saved \"" + nm + "\" in Presets.", {
type: "success"
});
} catch (n) {
U.toast("Couldn't save the preset: " + n.message, {
type: "error"
});
}
}
if (fromList) _presetsOpen();
}
let pr_load = document.createElement("button");
pr_load.className = "ch2-profile-btn";
pr_load.setAttribute("data-pm", "presets");
pr_load.textContent = "Presets";
pr_load.setAttribute("data-tooltip",
"Load a ready set of settings (Performance, Clean HUD, Default) or one you saved. You see what it changes before anything does.");
pr_load.setAttribute("data-keywords", "preset presets profile setup performance clean hud default load");
pr_load.style.cssText = "width: 100%; cursor: pointer; box-sizing: border-box;";
pr_load.addEventListener("click", () => {
ef("ui_click");
_presetsOpen();
});
let pr_save = document.createElement("button");
pr_save.className = "ch2-profile-btn";
pr_save.setAttribute("data-pm", "preset-save");
pr_save.textContent = "Save Settings as Preset";
pr_save.setAttribute("data-tooltip",
"Save your current MODS settings under a name, to load them again from Presets.");
pr_save.setAttribute("data-keywords", "preset presets profile setup save");
pr_save.style.cssText = "width: 100%; cursor: pointer; box-sizing: border-box;";
pr_save.addEventListener("click", () => {
ef("ui_click");
_presetSave();
});
let es = document.createElement("button");
es.className = "ch2-reset-btn";
es.textContent = "Reset All Mod Settings";
es.setAttribute(
"data-tooltip", o["Reset All Mod Settings"]);
es.style.cssText =
"margin: 0; width: 100%; cursor: pointer; grid-column: 1 / -1; box-sizing: border-box;";
es
.addEventListener("click", async () => {
if (!(await U.confirm({
title: "Reset All",
text: "Reset every MODS setting to its default?\nYour crosshairs aren't affected.",
ok: "Reset",
danger: true
}))) return;
let D = JSON.parse(JSON.stringify(dDefaults));
Object.keys(D).forEach(k => Object.assign(d[k], D[k]));
_ssbPersistD();
let ch = window.__ssbSettings.reset(),
rx = _ssbSecretsOff();
ef("ui_click");
U.toast("All MODS settings are back to their defaults." + (_f5(
ch) || rx), {
type: "success"
});
_rebuild();
});
let _bkOk = k => /^(tp|ch2)-/.test(k) && !
/^tp-(chatBypass|skinUnlocker|hideScopeFrame|hideScopeFrameMigrated|randomFPS|minFPS|maxFPS|randomPing|minPing|maxPing|noExplosionSmoke|statsDebug|statsLifetime|statsSession|lastSkinCache|schema|chwAuto|chwAutoMax|chwAutoDay|chwAutoWins)$/
.test(k),
_bkPj = (v, fb) => {
try {
let x = JSON.parse(v);
return x == null ? fb : x
} catch (o) {
return fb
}
},
_bkObj = v => v && typeof v == "object" && !Array.isArray(v);
let bk_save = document.createElement("button");
bk_save.className = "ch2-profile-btn";
bk_save.setAttribute("data-pm", "bsave");
bk_save
.textContent = "Save Backup File";
bk_save.setAttribute("data-tooltip",
"Download one file with your MODS settings, crosshairs, favorites and match history.");
bk_save.style.cssText = "width: 100%; cursor: pointer; box-sizing: border-box;";
bk_save
.addEventListener("click", () => {
try {
let keys = {};
for (let n = 0; n < localStorage.length; n++) {
let k = localStorage.key(n);
if (k && _bkOk(k)) keys[k] = localStorage.getItem(k);
}
let s = new Date(),
p = v => String(v).padStart(2, "0"),
blob = new Blob([JSON.stringify({
app: "better-hud-backup",
version: 1,
mod: window.SSB_VERSION,
created: Date.now(),
keys: keys
}, null, 1)], {
type: "application/json"
}),
a = document.createElement("a");
a.href = URL.createObjectURL(blob);
a.download = "better-hud-backup-" + s
.getFullYear() + "-" + p(s.getMonth() + 1) + "-" + p(s.getDate()) + ".json";
document.body.appendChild(a);
a.click();
a.remove();
setTimeout(() => URL
.revokeObjectURL(a.href), 1e3);
ef("ui_click");
U.toast(
"Backup file downloaded.", {
type: "success"
});
} catch (o) {
U.toast("Couldn't save the backup: " + o.message, {
type: "error"
})
}
});
let bk_load = document.createElement("button");
bk_load.className = "ch2-profile-btn";
bk_load.setAttribute("data-pm", "bload");
bk_load
.textContent = "Load Backup File";
bk_load.setAttribute("data-tooltip",
"Restore a Better HUD backup file. You see what it changes first, then the page reloads."
);
bk_load.style.cssText = "width: 100%; cursor: pointer; box-sizing: border-box;";
bk_load.addEventListener("click", () => {
let inp = document.createElement("input");
inp.type = "file";
inp.accept = ".json,application/json";
inp.style.display =
"none";
inp.addEventListener("change", async () => {
let file = inp.files && inp.files[0];
inp.remove();
if (!file) return;
let bad = () => U.toast("That file isn't a Better HUD backup.", {
type: "error"
});
if (file.size > 5e6) {
bad();
return
}
let b;
try {
b = JSON.parse(await file.text())
} catch (o) {
bad();
return
}
if (!b || b.app !== "better-hud-backup" || !_bkObj(b.keys)) {
bad();
return
}
let api = window.__ssbStatsApi,
src = {};
Object.keys(b.keys).forEach(k => {
if (_bkOk(k) && typeof b.keys[k] == "string") src[k] = b
.keys[k];
});
let profIn = _bkPj(src["ch2-profiles"], {}),
profHave = _bkPj(localStorage.getItem("ch2-profiles"), {});
if (!_bkObj(profIn)) profIn = {};
if (!_bkObj(profHave)) profHave = {};
let profNames = Object.keys(profIn),
profNew = profNames.filter(n => !(n in profHave)).length,
profRep = profNames.filter(n => n in profHave && JSON.stringify(
profHave[n]) !== JSON.stringify(profIn[n])).length,
favIn = _bkPj(src["tp-favItems"], []),
favHave = _bkPj(localStorage.getItem("tp-favItems"), []);
if (!Array.isArray(favIn)) favIn = [];
if (!Array.isArray(favHave)) favHave = [];
let favSet = new Set(favHave),
favNew = favIn.filter(x => !favSet.has(x)).length,
histIn = _bkPj(src["tp-statsHistory"], []);
if (!Array.isArray(histIn)) histIn = [];
histIn = histIn.filter(h =>
h && typeof h == "object");
let histHave = api ? api.hist() : _bkPj(localStorage.getItem(
"tp-statsHistory"), []),
hk = h => (h.code || "") + "|" + (h.startMs || 0),
histKeys = new Set(histHave.map(hk)),
histAdd = histIn.filter(h => !histKeys.has(hk(h))),
special = {
"ch2-profiles": 1,
"tp-favItems": 1,
"tp-statsHistory": 1
},
plain = Object.keys(src).filter(k => !special[k] && localStorage
.getItem(k) !== src[k]),
pl = (n, one, many) => n + " " + (n === 1 ? one : many),
parts = [];
if (plain.length) parts.push(pl(plain.length, "setting",
"settings"));
if (profNew) parts.push(pl(profNew, "new crosshair profile",
"new crosshair profiles"));
if (profRep) parts.push(pl(
profRep,
"crosshair profile with the same name replaced",
"crosshair profiles with the same name replaced"));
if (favNew) parts.push(pl(favNew, "favorite", "favorites"));
if (histAdd.length) parts.push(pl(histAdd.length,
"match added to your history",
"matches added to your history"));
if (!parts.length) {
U.toast("That backup matches what you have. Nothing to change.", {
type: "success"
});
return
}
let when = +b.created ? new Date(+b.created).toLocaleString() :
"an unknown date";
if (!(await U.confirm({
title: "Load Backup",
text: "Backup from " + when + (b.mod ?
" (Better HUD v" + String(b.mod).slice(0,
12) + ")" : "") + ".\nIt changes: " +
parts.join(", ") +
".\nThe page reloads afterwards.",
ok: "Load",
danger: true
}))) return;
try {
plain.forEach(k => localStorage.setItem(k, src[k]));
if ((profNew ||
profRep)) localStorage.setItem("ch2-profiles", JSON
.stringify(Object.assign({}, profHave, profIn)));
if (favNew) localStorage.setItem("tp-favItems", JSON
.stringify([...new Set(favHave.concat(favIn))]));
if (histAdd.length) {
let all = histHave.concat(histAdd).sort((x, y) => (y
.startMs || 0) - (x.startMs || 0));
if (api) {
if (all.length > 40) all.splice(40);
api.setHist(
all);
} else localStorage.setItem("tp-statsHistory", JSON
.stringify(all.slice(0, 40)));
}
} catch (o) {
U.toast("Couldn't load the backup: " + o.message, {
type: "error"
});
return
}
ef("ui_equip");
U.toast("Backup loaded. Reloading…", {
type: "success"
});
setTimeout(() => location.reload(), 900);
});
document.body.appendChild(inp);
inp.click();
});
let es_sup = document.createElement("button");
es_sup.className = "ch2-profile-btn";
es_sup.setAttribute("data-pm", "support");
es_sup
.textContent = "Copy Support Info";
es_sup.setAttribute("data-tooltip",
"Copy what helps fix a problem: Better HUD version, browser, graphics card, and anything that failed to load. Paste it into your bug report."
);
es_sup.style.cssText = "width: 100%; cursor: pointer; box-sizing: border-box;";
es_sup.addEventListener("click", () => {
try {
let lines = ["Better HUD " + window.SSB_VERSION + " support info", "Browser: " +
navigator.userAgent, "Site: " + location.hostname
],
hide = /^(chat|block-ads)( \(error\))?$/;
try {
let cp = window.__ssbCopiesList && window.__ssbCopiesList();
if (cp) lines.push("Copies: " + cp.join(", "));
} catch (e) {
window.__ssbErr("copies#2", e)
}
try {
let g = window.__ssbFpsCheck && window.__ssbFpsCheck.gpu();
if (g) lines.push("Graphics: " + g.name + (g.aa == null ? "" :
", anti-aliasing " + (g.aa ? "on" : "off")));
} catch (x) {
window.__ssbErr("support#1", x)
}
let sc = parseFloat(document.documentElement.style.getPropertyValue(
"--ssb-ui-scale")) || 1;
lines.push("Screen: " + screen.width + " × " + screen.height + ", window " +
innerWidth + " × " + innerHeight + ", pixel ratio " + Math.round(100 * (
devicePixelRatio || 1)) / 100 + ", UI scale " + Math.round(100 *
sc) / 100);
let pr = window.__ssbPatchReport;
if (pr) {
let ap = (pr.applied || []).filter(n => !hide.test(n)),
ms = (pr.missed || []).filter(n => !hide.test(n));
lines.push("Game patches: " + (ap.length ? ap.join(", ") : "none") +
" applied" + (ms.length ? "; not applied: " + ms.join(", ") : ""))
} else lines.push("Game patches: not run yet");
let er = window.__ssbErrLog || [];
lines.push(er.length ? "Errors:" : "Errors: none");
er.forEach(x => lines.push(
"- " + x.tag + ": " + x.msg));
let ch = [];
_ssbCore.forEach(r => {
if (r[6] && _chgDiff(r) && ch.indexOf(r[6]) < 0) ch.push(r[6]);
});
window.__ssbSettings.items.forEach(it => {
if (!it.code || it.code === "Ab") return;
let v;
try {
v = !!it.get()
} catch (x) {
return
}
if (v !== !!it.def) ch.push(it.label);
});
lines.push("Changed settings: " + (ch.length ? ch.join(", ") : "none"));
ef("ui_click");
U.copyText(lines.join("\n"),
"Support info copied. Paste it into your bug report.");
} catch (o) {
U.toast("Couldn't collect the support info: " + o.message, {
type: "error"
})
}
});
let es_intro = document.createElement("button");
es_intro.className = "ch2-profile-btn";
es_intro.setAttribute("data-pm", "intro");
es_intro
.setAttribute("data-keywords",
"welcome guide tour setup intro introduction first run start help");
es_intro
.textContent = "Welcome Guide";
es_intro.setAttribute("data-tooltip",
"Open the three-step setup again: quick switches, a starter crosshair, and where everything is."
);
es_intro.style.cssText = "width: 100%; cursor: pointer; box-sizing: border-box;";
es_intro.addEventListener("click", () => {
if (window.__ssbIntro) window.__ssbIntro.open();
});
let es_wipe = document.createElement("button");
es_wipe.className = "ch2-reset-btn";
es_wipe.setAttribute("data-pm", "wipe");
es_wipe
.setAttribute("data-keywords",
"remove delete erase wipe clear all data reset storage fresh start privacy");
es_wipe
.textContent = "Remove All Mod Data";
es_wipe.setAttribute("data-tooltip",
"Delete everything Better HUD saved in this browser and start fresh. Save a backup file first to keep your crosshairs."
);
es_wipe.style.cssText =
"margin: 0; width: 100%; cursor: pointer; grid-column: 1 / -1; box-sizing: border-box;";
es_wipe.addEventListener("click", async () => {
if (!(await U.confirm({
title: "Remove All Data",
text: "Delete everything Better HUD saved in this browser: MODS settings, crosshairs, favorites, match history and hotkeys.\nThe game's own settings stay. Better HUD starts fresh after the page reloads.\nSave a backup file first if you want to keep any of it.",
ok: "Remove",
danger: true
}))) return;
try {
let mine = k => /^(tp|ch2|ssb)-/.test(k) || k === "mod-server-hosts",
drop = k => mine(k) && k !== "ssb-install-counted",
gone = [],
was = Storage.prototype.setItem;
for (let n = 0; n < localStorage.length; n++) {
let k = localStorage.key(n);
if (k && drop(k)) gone.push(k);
}
Storage.prototype.setItem = function(k, v) {
if (this === localStorage && drop(String(k))) return;
return was.apply(this, arguments)
};
setTimeout(() => {
Storage.prototype.setItem = was
}, 4e3);
gone.forEach(k => localStorage.removeItem(k));
} catch (o) {
U.toast("Couldn't remove the data: " + o.message, {
type: "error"
});
return
}
ef("ui_equip");
U.toast("All Better HUD data removed. Reloading…", {
type: "success"
});
setTimeout(() => location.reload(), 900);
});
let fav_exp = document.createElement("button");
fav_exp.className = "ch2-profile-btn";
fav_exp.setAttribute("data-pm", "favexp");
fav_exp
.setAttribute("data-keywords",
"export favorites favourites favorite stars starred inventory items copy code share");
fav_exp.textContent = "Export Favorites";
fav_exp.setAttribute("data-tooltip",
"Copy your starred inventory items as a short code you can share or keep.");
fav_exp
.style.cssText = "width: 100%; cursor: pointer; box-sizing: border-box;";
fav_exp
.addEventListener("click", () => {
let f = window.__ssbFavCodes;
if (f) f.exportCode();
else U.toast("Favorites aren't ready yet. Try again in a moment.", {
type: "error"
});
});
let fav_imp = document.createElement("button");
fav_imp.className = "ch2-profile-btn";
fav_imp.setAttribute("data-pm", "favimp");
fav_imp
.setAttribute("data-keywords",
"import favorites favourites favorite stars starred inventory items paste code");
fav_imp.textContent = "Import Favorites";
fav_imp.setAttribute("data-tooltip",
"Paste a favorites code to star the same inventory items. It replaces the ones you have now."
);
fav_imp.style.cssText = "width: 100%; cursor: pointer; box-sizing: border-box;";
fav_imp.addEventListener("click", () => {
let f = window.__ssbFavCodes;
if (f) f.importCode();
else U.toast("Favorites aren't ready yet. Try again in a moment.", {
type: "error"
});
});
et.appendChild(ec_code);
et.appendChild(ei_code);
et.appendChild(pr_load);
et.appendChild(pr_save);
et.appendChild(bk_save);
et.appendChild(
bk_load);
et.appendChild(fav_exp);
et.appendChild(fav_imp);
et.appendChild(es_sup);
et
.appendChild(es_intro);
et.appendChild(es);
et.appendChild(es_wipe);
let el = document.createElement("div");
el.id = "mod-settings-footer";
el.style.cssText =
"margin-top: 30px; padding-top: 15px; border-top: 2px solid rgba(33,106,128,0.15); display: flex; justify-content: space-between; align-items: center; font-size: 13px; font-weight: 700; color: #216a80; font-family: 'Nunito', system-ui, sans-serif;";
let ed = document.createElement("span");
ed.className = "mod-footer-version";
ed.textContent = "Better HUD v" + window.SSB_VERSION;
ed
.setAttribute("role", "button");
ed.tabIndex = 0;
ed.setAttribute("data-tooltip",
"Open the Better HUD changelog.");
let fm = document.createElement("span");
fm.className = "mod-footer-mid";
let ecu = document.createElement("button");
ecu.type = "button";
ecu.className = "mod-footer-btn mod-footer-update";
ecu.innerHTML =
'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 0 0-14.3-4.9L4 8"/><path d="M4 3v5h5"/><path d="M4 13a8 8 0 0 0 14.3 4.9L20 16"/><path d="M20 21v-5h-5"/></svg>';
ecu.setAttribute("aria-label", "Check for updates");
ecu.setAttribute("data-tooltip",
"Check GitHub for a newer version of Better HUD right now.");
ecu.addEventListener(
"click", () => {
ef("ui_click");
if (window.__ssbCheckUpdate) window.__ssbCheckUpdate(true);
else U.toast(
"Update checks need Tampermonkey or Violentmonkey.", {
type: "error"
});
});
fm.appendChild(ecu);
(function() {
let us = document.createElement("span");
us.id = "ssb-update-status";
us.setAttribute("role", "status");
us.setAttribute(
"aria-live", "polite");
fm.insertBefore(us, ecu);
if (window
.__ssbPaintUpdateStatus) window.__ssbPaintUpdateStatus(us);
}());
(function() {
let dc = document.createElement("a");
dc.className = "mod-footer-btn mod-footer-discord";
dc.href = window.SSB_DISCORD;
dc
.target = "_blank";
dc.rel = "noopener";
dc.innerHTML =
'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>';
dc.setAttribute("aria-label", "Join Discord");
dc.setAttribute("data-tooltip",
"Join the Better HUD Discord server: help, news and all the links.");
dc
.addEventListener("click", () => ef("ui_click"));
fm.appendChild(dc);
}());
(function() {
let yt = document.createElement("a");
yt.className = "mod-footer-btn mod-footer-youtube";
yt.href = window.SSB_YOUTUBE;
yt
.target = "_blank";
yt.rel = "noopener";
yt.innerHTML =
'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>';
yt.setAttribute("aria-label", "Better HUD on YouTube");
yt.setAttribute(
"data-tooltip", "Watch the official Better HUD YouTube channel.");
yt
.addEventListener("click", () => ef("ui_click"));
fm.appendChild(yt);
}());
(function() {
let gh = document.createElement("a");
gh.className = "mod-footer-btn mod-footer-github";
gh.href =
"https://github.com/Virojet/Shell-Shockers-Better-Hud-Mod";
gh.target = "_blank";
gh
.rel = "noopener";
gh.innerHTML =
'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>';
gh.setAttribute("aria-label", "Better HUD on GitHub");
gh.setAttribute(
"data-tooltip", "View the Better HUD source code and releases on GitHub.");
gh
.addEventListener("click", () => ef("ui_click"));
fm.appendChild(gh);
}());
if (typeof GM_info == "undefined") {
ecu.style.display = "none";
if (fm.querySelector(
"#ssb-update-status")) fm.querySelector("#ssb-update-status").style.display =
"none";
}
let ec = document.createElement("a");
ec.href = "https://www.youtube.com/@subtovirojet?sub_confirmation=1";
ec.target = "_blank";
ec
.textContent = "Created by Virojet";
ec.style.cssText =
"color: #ff9800; text-decoration: none; transition: color 0.15s; font-family: 'Nunito', system-ui, sans-serif;";
ec.addEventListener("mouseover", () => ec.style.color = "#e68a00");
ec.addEventListener(
"mouseout", () => ec.style.color = "#ff9800");
el.appendChild(ed);
el.appendChild(fm);
el.appendChild(ec);
i.appendChild(el);
let ep = document.createElement("div");
ep.id = "mod-crosshair-section";
ep.style.cssText =
"display:none;overflow-y:auto;box-sizing:border-box;padding:0 14px 30px;";
let em = t.parentElement;
em.appendChild(hdr);
em.appendChild(i);
em.appendChild(ep);
em.appendChild(el);
(function e() {
let t = document.getElementById("mod-crosshair-section");
if (!t) return;
let o = (e, ...t) => {
let o = document.createElement("div");
if (o.className = "ch2-control-row", e) {
let n = document.createElement("span");
n.className = "ch2-label";
n.textContent = e;
o.appendChild(n);
}
let i = document.createElement("div");
i.className = "ch2-control-right";
t.forEach(e => i.appendChild(e));
o
.appendChild(i);
return o;
},
n = (e, t, n) => {
let i = document.createElement("input");
i.type = "color";
i.value = n[t];
i.className = "ch2-color";
let a = document.createElement("input");
a.type = "text";
a.value = n[t];
a.className = "ch2-hex";
let r = () => {
n[t] = i.value;
a.value = i.value;
schedUpd(t, n[t]);
};
i.addEventListener("input", r);
i.addEventListener("change", () => ef(
"ui_onchange"));
a.addEventListener("input", () => {
if (/^#[0-9a-f]{6}$/i.test(a.value)) {
i.value = a.value;
n[t] = a
.value;
F(t, n[t]);
G();
Y();
ef("ui_onchange");
}
});
return o(e, i, a);
},
i = (e, t, o, n, i, a) => {
let r = document.createElement("input");
r.type = "range";
r.min = n;
r.max = i;
r.step = a;
r.value = o[t];
r
.className = "ch2-slider";
let s = document.createElement("input");
s.type = "number";
s.min = n;
s.max = i;
s.step = a;
s.value = o[t];
s
.className = "ch2-num";
r.addEventListener("input", () => {
o[t] = parseFloat(r.value);
s.value = o[t];
schedUpd(t, o[t]);
});
r.addEventListener("change", () => ef("ui_onchange"));
let l = () => {
let e = parseFloat(s.value);
if (!isNaN(e)) {
e = Math.max(parseFloat(n), Math.min(parseFloat(i), e));
s
.value = e;
r.value = e;
o[t] = e;
F(t, o[t]);
G();
Y();
ef(
"ui_onchange");
}
};
s.addEventListener("change", l);
s.addEventListener("keydown", e => {
if (e.key === "Enter") {
l();
s.blur();
}
});
let d = document.createElement("div");
d.className = "ch2-slider-wrap";
d.dataset.min = n;
d.dataset.max = i;
let c = document.createElement("div");
c.className = "ch2-slider-lrow";
let p = document.createElement("span");
p.className = "ch2-label";
p.textContent = e;
c.appendChild(p);
c
.appendChild(s);
d.appendChild(c);
d.appendChild(r);
return d;
},
a = (e, t, o, n) => {
let i = document.createElement("label");
i.className = "ch2-check-label";
let a = document.createElement("input");
a.type = "checkbox";
a.checked = o[t];
let r = document.createElement("span");
r.className = "ch2-check-box";
let s = document.createElement("span");
s.className = "ch2-check-text";
s.textContent = e;
i.appendChild(a);
i
.appendChild(r);
i.appendChild(s);
a.addEventListener("change", () => {
o[t] = a.checked;
F(t, o[t]);
G();
Y();
ef("ui_onchange");
if (n) n();
});
return i;
};
t.innerHTML = "";
let l = document.createElement("div");
l.className = "ch2-top";
let d = document.createElement("div");
d.className = "ch2-preview-col";
let previewCard = document.createElement("div");
previewCard.className = "ch2-group-card ch2-card-preview";
let previewTitle = document.createElement("div");
previewTitle.className = "ch2-card-title";
previewTitle.textContent = "Preview";
previewCard.appendChild(previewTitle);
let previewWrap = document.createElement("div");
previewWrap.className = "ch2-preview-wrap";
previewWrap.id = "ch2-preview-wrap";
previewCard.appendChild(previewWrap);
let c = document.createElement("input");
c.type = "color";
c.value = localStorage.getItem("ch2-previewBg") || "#ffffff";
c
.className = "ch2-color";
let p = document.createElement("input");
p.type = "text";
p.value = localStorage.getItem("ch2-previewBg") || "#ffffff";
p
.className = "ch2-hex";
let m = () => {
localStorage.setItem("ch2-previewBg", c.value);
p.value = c.value;
Y();
};
c.addEventListener("input", m);
p.addEventListener("input", () => {
if (/^#[0-9a-f]{6}$/i.test(p.value)) {
c.value = p.value;
localStorage.setItem(
"ch2-previewBg", p.value);
Y();
}
});
let h = o("Background", c, p);
h.style.marginTop = "6px";
previewCard.appendChild(h);
d.appendChild(previewCard);
let bgSw = document.createElement("div");
bgSw.className = "ch2-bg-swatches";
[
["#87ceeb", "Sky"],
["#808080", "Grey"],
["#1b1b1b", "Dark"],
["#ffffff", "White"]
].forEach(([hex, nm]) => {
let b = document.createElement("button");
b.type = "button";
b.className = "ch2-bg-swatch";
b.dataset.hex = hex;
b
.style.background = hex;
b.setAttribute("data-tooltip", nm +
" background");
b.setAttribute("aria-label", nm + " background");
b.addEventListener("click", () => {
c.value = hex;
p.value = hex;
localStorage.setItem(
"ch2-previewBg", hex);
Y();
ef("ui_click");
});
bgSw.appendChild(b);
});
h.lastChild.prepend(bgSw);
let profilesCard = document.createElement("div");
profilesCard.className = "ch2-group-card ch2-card-profiles";
let profilesTitle = document.createElement("div");
profilesTitle.className = "ch2-card-title";
profilesTitle.textContent = "Profiles";
profilesCard.appendChild(profilesTitle);
let y = document.createElement("select");
y.className = "ch2-profile-select";
let x = document.createElement("button");
x.className = "ch2-gallery-btn";
x.id = "ch2-open-gallery-btn";
x.addEventListener("click", () => {
if (typeof ef === "function") ef("ui_click");
if (window._ssbToggleGallery) window._ssbToggleGallery(true);
});
let mini = document.createElement("div");
mini.className = "ch2-mini-row";
mini.setAttribute("role", "group");
mini.setAttribute("aria-label", "Quick profile picker");
function renderMini() {
let all = N(),
names = PO(all),
cur = z();
mini.hidden = !names.length;
mini.innerHTML = "";
let w = mini.clientWidth;
if (!w || !names.length) return;
let TILE = 44,
GAP = 6,
cap = Math.max(1, Math.floor((w + GAP) / (TILE + GAP)));
let shown = names.length > cap ? names.slice(0, cap - 1) : names;
shown.forEach(nm => {
let b = document.createElement("button");
b.type = "button";
b.className = "ch2-mini-tile" + (nm === cur ?
" selected" : "");
b.setAttribute("data-tooltip", nm);
b.setAttribute("aria-label",
"Use profile " + nm + (nm === cur ? " (current)" : ""));
b.innerHTML = xhMini(all[nm], 30);
b.addEventListener("click", () => {
if (nm !== z()) {
y.value = nm;
y.dispatchEvent(new Event(
"change"));
}
});
mini.appendChild(b);
});
if (names.length > shown.length) {
let more = document.createElement("button"),
left = names.length - shown.length;
more.type = "button";
more.className = "ch2-mini-more";
more.textContent = "+" +
left;
more.setAttribute("data-tooltip", "Open the gallery to see all " + names
.length + " profiles");
more.setAttribute("aria-label", left +
" more profiles. Open the gallery");
more.addEventListener("click", () => {
if (typeof ef == "function") ef("ui_click");
if (window
._ssbToggleGallery) window._ssbToggleGallery(true);
});
mini.appendChild(more);
}
}
if (localStorage.getItem("ch2-starterSeeded") !== "2") {
try {
let all = N(),
mine = PO(all),
starters = [
["Default", "X-"],
["Techno", "X-AwpDssSc1ekbSb1ejySwpSggoSe0Ss19"],
["Green Dot", "X-Dc1eei"],
["No Hair", "X-Hc1"],
["No Center Dot", "X-Hd1"]
],
names = starters.map(x => x[0]);
starters.forEach(([nm, code]) => {
if (!all[nm]) all[nm] = unpackCrosshair(code);
});
Object.keys(all).forEach(k => {
if (all[k] && typeof all[k] == "object") all[k].enabled = true;
});
M(all);
PS(names.concat(mine.filter(n => !names.includes(n))));
if (!z()) {
let def = _withDot(all.Default);
if (Object.keys(B).every(k => k === "enabled" || A[k] === def[k])) O(
"Default");
}
} catch (err) {
window.__ssbErr("crosshair.seed", err)
}
localStorage.setItem("ch2-starterSeeded", "2");
}
function E() {
y.innerHTML = "";
let e = N(),
t = PO(e),
o = document.createElement("option");
o.value = "";
o.textContent = t.length ? "--  select a profile -- " :
"--  no profiles saved -- ";
y.appendChild(o);
t.forEach(e => {
let t = document.createElement("option");
t.value = e;
t.textContent = e;
y.appendChild(t);
});
y.value = z() || "";
if (x) {
x.textContent = "Gallery";
x.setAttribute("data-count", t.length);
}
renderMini();
if (window._ssbUpdateGallery) {
if (window._ssbGalleryActive) window._ssbUpdateGallery(e, t, y.value);
else window
._ssbGalleryDirty = true;
}
}
E();
y.addEventListener("change", () => {
let o = y.value;
if (o && function e(t) {
let o = N();
if (!o[t]) return false;
let n = Object.assign(_withDot(o[t]), {
enabled: true
}),
i = Object.assign({}, A);
Object.assign(A, n);
Object.keys(A).forEach(e => {
if (i[e] !== A[e]) F(e, A[e]);
});
O(t);
return true;
}(o)) {
G();
Y();
t.innerHTML = "";
e();
ef("ui_click");
}
});
profilesCard.appendChild(x);
profilesCard.appendChild(mini);
function packCrosshair(p) {
let parts = [];
if (p.hideCrosshair) parts.push("Hc1");
if (p.armColor && p.armColor.toLowerCase() !== "#ffffff") parts.push("Ac" +
_ssbPackColor(p.armColor));
if (p.armBorder && p.armBorder.toLowerCase() !== "#000000") parts.push("Ab" +
_ssbPackColor(p.armBorder));
if (p.armLength !== 0.75) parts.push("Al" + _ssbPackNum(p.armLength));
if (p.armWidth !== 0.3) parts.push("Aw" + _ssbPackNum(p.armWidth));
if (p.armOpacity !== 1) parts.push("Ao" + _ssbPackNum(p.armOpacity));
if (p.armRotation !== 0) parts.push("Ar" + _ssbPackNum(p.armRotation, 1));
if (p.armGap !== 0) parts.push("Ag" + _ssbPackNum(p.armGap, 1, 100));
if (p.armScale !== 1) parts.push("As" + _ssbPackNum(p.armScale));
if (p.armOutlineEnabled === false) parts.push("Ae0");
if (p.hideDot) parts.push("Hd1");
if (p.dotShape && p.dotShape !== "dot") parts.push("Ds" + (p.dotShape === "plus" ?
"p" : "s"));
if (p.dotColor && p.dotColor.toLowerCase() !== "#ffffff") parts.push("Dc" +
_ssbPackColor(p.dotColor));
if (p.dotRound) parts.push("Dr1");
if (_dbc(p).toLowerCase() !== (p.armBorder || "#000000").toLowerCase()) parts.push(
"Db" + _ssbPackColor(_dbc(p)));
if (_dbw(p) !== .05) parts.push("Dw" + _ssbPackNum(_dbw(p)));
if (p.dotOutlineEnabled === false) parts.push("De0");
if (p.dotOpacity !== 1) parts.push("Do" + _ssbPackNum(p.dotOpacity));
if (p.dotPlusLen !== 8) parts.push("Pl" + _ssbPackNum(p.dotPlusLen, 1));
if (p.dotPlusWidth !== 2) parts.push("Pw" + _ssbPackNum(p.dotPlusWidth, 1));
if (p.dotScale !== 1) parts.push("Dz" + _ssbPackNum(p.dotScale));
if (p.plusScale !== 1) parts.push("Ps" + _ssbPackNum(p.plusScale));
if (p.staticColor && p.staticColor.toLowerCase() !== "#ffffff") parts.push("Sc" +
_ssbPackColor(p.staticColor));
if (p.staticBorder && p.staticBorder.toLowerCase() !== "#000000") parts.push("Sb" +
_ssbPackColor(p.staticBorder));
if (p.staticOpacity !== 1) parts.push("So" + _ssbPackNum(p.staticOpacity));
if (p.staticLength !== 0.75) parts.push("Sl" + _ssbPackNum(p.staticLength));
if (p.staticWidth !== 0.3) parts.push("Sw" + _ssbPackNum(p.staticWidth));
if (p.staticGap !== 3) parts.push("Sg" + _ssbPackNum(p.staticGap));
if (!p.staticOutlineEnabled) parts.push("Se0");
if (p.stillScale !== 1) parts.push("Ss" + _ssbPackNum(p.stillScale));
return "X-" + parts.join("");
}
function _ssbIsValorantCode(v) {
return /^\s*0\s*;/.test(String(v));
}
function _ssbValorantCrosshair(code, defaults, height) {
const bad = () => new Error("Invalid code format");
const tok = String(code).trim().replace(/;+$/, "").split(";").map(x => x.trim());
if (tok[0] !== "0") throw bad();
const secs = {
"0": {}
};
let cur = "0";
for (let i = 1; i < tok.length;) {
if (/^[A-Z]$/.test(tok[i])) {
cur = tok[i];
secs[cur] = secs[cur] || {};
i++;
continue
}
if (i + 1 >= tok.length) throw bad();
secs[cur][tok[i]] = tok[i + 1];
i += 2;
}
const P = secs.P;
if (!P) throw bad();
const num = (k, def) => {
if (!(k in P)) return def;
const v = parseFloat(P[k]);
if (!isFinite(v)) throw bad();
return v
};
const R2 = v => Math.round(v * 100) / 100,
CL = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const em = px => px / 21.06,
k = (height > 0 ? height : 1080) / 1080;
const fsH = .0195 * (height > 0 ? height : 1080),
Bt = Math.max(1, Math.round(.05 *
fsH));
const PRESET = ["#ffffff", "#00ff00", "#7fff00", "#dfff00", "#ffff00", "#00ffff",
"#ff00ff", "#ff0000"
];
const ci = Math.round(num("c", 0));
let col = PRESET[ci] || "#ffffff";
if (ci === 8 && /^[0-9a-f]{6}([0-9a-f]{2})?$/i.test(P.u || "")) col = "#" + P.u
.slice(0, 6).toLowerCase();
const outline = num("h", 1) !== 0 && num("t", 1) > 0 && num("o", .5) >= .2;
const ob = outline ? 1.053 : 0;
const iT = num("0t", 2),
iA = num("0a", .8),
iO = num("0o", 3);
let iL = num("0l", 6);
if (iL <= 0 && "0v" in P) iL = Math.max(0, num("0v", 0));
const inner = num("0b", 1) !== 0 && iT > 0 && iL > 0 && iA > .02;
const oT = num("1t", 2),
oA = num("1a", .35),
oO = num("1o", 10);
let oL = num("1l", 2);
if (oL <= 0 && "1v" in P) oL = Math.max(0, num("1v", 0));
const outer = num("1b", 1) !== 0 && oT > 0 && oL > 0 && oA > .02;
const dZ = num("z", 2),
dA = num("a", 1);
const dot = num("d", 0) !== 0 && dZ > 0 && dA > .02;
const p = Object.assign({}, defaults),
notes = [];
p.armColor = p.dotColor = p.staticColor = col;
p.armBorder = p.dotBorder = outline ? "#000000" : col;
p.staticBorder = "#000000";
p.staticOutlineEnabled = outline;
p.hideCrosshair = !inner;
if (inner) {
p.armLength = R2(CL(em(iL + 2 * ob), 0, 3));
p.armWidth = R2(CL(em(iT + 2 * ob), .05, 2));
p.armOpacity = R2(CL(iA, 0, 1));
p.armGap = Math.round(CL((iO - ob) * k, -3, 60));
}
if (dot) {
const F = dZ / 21.06;
p.hideDot = false;
p.dotShape = "dot";
p.dotRound = false;
p.dotOpacity = R2(CL(dA, 0, 1));
p.dotScale = 1;
p.dotBorderWidth = outline ? .05 : 0;
if (!inner) p.armWidth = R2(.1 + F);
else {
const u = Math.max(0, p.armWidth - .1),
need = u > 0 ? F / u : 99;
if (outline ? need <= 1.15 : need <= 4) {
p.dotScale = R2(CL(need, outline ? .23 : .1, 5));
if (outline) p.dotBorderWidth = Math.min(.2, Math.ceil(Math.max(1, Math
.round(Bt / p.dotScale)) / fsH * 100) / 100);
} else {
const wide = R2(.1 + F),
s = R2(CL(em(iT + 2 * ob) / wide, .1, 5));
p.armLength = R2(CL(em(iL + 2 * ob) / s, 0, 3));
p.armWidth = wide;
p.armScale = s;
}
}
} else if (outer) {
p.hideDot = false;
p.dotShape = "still";
p.stillScale = 1;
p.staticOpacity = R2(CL(oA, 0, 1));
p.staticLength = R2(CL(em(oL + 2 * ob), 0, 3));
p.staticWidth = R2(CL(em(oT + 2 * ob), .05, 2));
p.staticGap = Math.round(CL((oO - ob) * k, 0, 60));
} else p.hideDot = true;
if (dot && outer) notes.push(
"The outer lines were left out, since the center dot takes their place.");
if (!inner && !dot && !outer) notes.push("This code shows no lines and no dot.");
Object.defineProperty(p, "__notes", {
value: notes
});
return p;
}
function unpackCrosshair(code) {
if (!code) throw new Error("Invalid code format");
if (_ssbIsValorantCode(code)) return _ssbValorantCrosshair(code, B, window
.innerHeight);
if (code.startsWith("X-")) {
let body = code.substring(2);
let p = Object.assign({}, B),
sawDb = false;
let regex = /([A-Z][a-z])([0-9a-z]*)/g;
let match;
while ((match = regex.exec(body)) !== null) {
let key = match[1];
let valStr = match[2];
switch (key) {
case "Hc":
p.hideCrosshair = valStr === "1";
break;
case "Ac":
p.armColor = _ssbUnpackColor(valStr);
break;
case "Ab":
p.armBorder = _ssbUnpackColor(valStr);
break;
case "Al":
p.armLength = _ssbUnpackNum(valStr);
break;
case "Aw":
p.armWidth = _ssbUnpackNum(valStr);
break;
case "Ao":
p.armOpacity = _ssbUnpackNum(valStr);
break;
case "Ar":
p.armRotation = _ssbUnpackNum(valStr, 1);
break;
case "Ag":
p.armGap = _ssbUnpackNum(valStr, 1, 100);
break;
case "As":
p.armScale = _ssbUnpackNum(valStr);
break;
case "Hd":
p.hideDot = valStr === "1";
break;
case "Ds":
p.dotShape = valStr === "p" ? "plus" : valStr === "s" ? "still" :
"dot";
break;
case "Dc":
p.dotColor = _ssbUnpackColor(valStr);
break;
case "Dr":
p.dotRound = valStr === "1";
break;
case "Db":
p.dotBorder = _ssbUnpackColor(valStr);
sawDb = true;
break;
case "Dw":
p.dotBorderWidth = _ssbUnpackNum(valStr);
break;
case "Do":
p.dotOpacity = _ssbUnpackNum(valStr);
break;
case "Pl":
p.dotPlusLen = _ssbUnpackNum(valStr, 1);
break;
case "Pw":
p.dotPlusWidth = _ssbUnpackNum(valStr, 1);
break;
case "Dz":
p.dotScale = _ssbUnpackNum(valStr);
break;
case "Ps":
p.plusScale = _ssbUnpackNum(valStr);
break;
case "Sc":
p.staticColor = _ssbUnpackColor(valStr);
break;
case "Sb":
p.staticBorder = _ssbUnpackColor(valStr);
break;
case "So":
p.staticOpacity = _ssbUnpackNum(valStr);
break;
case "Sl":
p.staticLength = _ssbUnpackNum(valStr);
break;
case "Sw":
p.staticWidth = _ssbUnpackNum(valStr);
break;
case "Sg":
p.staticGap = _ssbUnpackNum(valStr);
break;
case "Se":
p.staticOutlineEnabled = valStr !== "0";
break;
case "Ae":
p.armOutlineEnabled = valStr !== "0";
break;
case "De":
p.dotOutlineEnabled = valStr !== "0";
break;
case "Ss":
p.stillScale = _ssbUnpackNum(valStr);
break;
}
}
if (!sawDb) p.dotBorder = p.armBorder;
return p;
}
if (!code.startsWith("SSB-")) {
try {
let parsed = JSON.parse(atob(code.trim()));
if (parsed && typeof parsed === "object") {
return _withDot(parsed);
}
} catch (err) {
window.__ssbErr("crosshair#1", err)
}
throw new Error("Invalid code format");
}
let body = code.substring(4);
if (!body.includes(".")) {
try {
let parsed = JSON.parse(atob(body));
if (parsed && typeof parsed === "object") {
return _withDot(parsed);
}
} catch (err) {
window.__ssbErr("crosshair#2", err)
}
}
let p = Object.assign({}, B);
let parts = body.split(".");
parts.forEach(part => {
if (!part) return;
let key, valStr;
if (part.startsWith("ss")) {
key = "ss";
valStr = part.substring(2);
} else {
key = part.substring(0, 1);
valStr = part.substring(1);
}
switch (key) {
case "a":
p.hideCrosshair = valStr === "1";
break;
case "c":
p.armColor = "#" + valStr;
break;
case "b":
p.armBorder = "#" + valStr;
break;
case "l":
p.armLength = parseFloat(valStr);
break;
case "w":
p.armWidth = parseFloat(valStr);
break;
case "o":
p.armOpacity = parseFloat(valStr);
break;
case "r":
p.armRotation = parseInt(valStr, 10);
break;
case "g":
p.armGap = parseInt(valStr, 10);
break;
case "s":
p.armScale = parseFloat(valStr);
break;
case "h":
p.hideDot = valStr === "1";
break;
case "d":
p.dotShape = valStr === "p" ? "plus" : valStr === "s" ?
"still" : "dot";
break;
case "x":
p.dotColor = "#" + valStr;
break;
case "n":
p.dotRound = valStr === "1";
break;
case "p":
p.dotOpacity = parseFloat(valStr);
break;
case "k":
p.dotPlusLen = parseInt(valStr, 10);
break;
case "j":
p.dotPlusWidth = parseInt(valStr, 10);
break;
case "z":
p.dotScale = parseFloat(valStr);
break;
case "f":
p.plusScale = parseFloat(valStr);
break;
case "q":
p.staticColor = "#" + valStr;
break;
case "v":
p.staticOpacity = parseFloat(valStr);
break;
case "e":
p.staticLength = parseFloat(valStr);
break;
case "t":
p.staticWidth = parseFloat(valStr);
break;
case "i":
p.staticGap = parseFloat(valStr);
break;
case "m":
p.staticOutlineEnabled = valStr !== "0";
break;
case "ss":
p.stillScale = parseFloat(valStr);
break;
}
});
p.dotBorder = p.armBorder;
return p;
}
let iconBar = document.createElement("div");
iconBar.className = "ch2-icon-bar";
let selectWrap = document.createElement("div");
selectWrap.className = "ch2-icon-select-wrap";
selectWrap.appendChild(y);
iconBar.appendChild(selectWrap);
let ibDiv2 = document.createElement("div");
ibDiv2.className = "ch2-icon-divider";
iconBar.appendChild(ibDiv2);
let ibIcons = {
save: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" fill-rule="evenodd"><path d="M6 2h10l5 5v13a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm2 2.5v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1zm-1 10v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1z"/></svg>',
dup: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><rect x="2" y="2" width="14" height="14" rx="3.5" opacity=".45"/><rect x="8" y="8" width="14" height="14" rx="3.5"/></svg>',
exp: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 1l6.2 6.8a.6.6 0 0 1-.44 1H14.5V15a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V8.8H6.24a.6.6 0 0 1-.44-1L12 1z"/><path d="M3 14.5h3v3.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3.5h3V19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-4.5z"/></svg>',
imp: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 16l-6.2-6.8a.6.6 0 0 1 .44-1H9.5V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6.2h3.26a.6.6 0 0 1 .44 1L12 16z"/><path d="M3 14.5h3v3.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3.5h3V19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-4.5z"/></svg>',
del: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" fill-rule="evenodd"><path d="M9.3 1.5h5.4a1 1 0 0 1 .9.55L16.4 3.5H20a1.2 1.2 0 0 1 0 2.4H4a1.2 1.2 0 0 1 0-2.4h3.6l.8-1.45a1 1 0 0 1 .9-.55z"/><path d="M5 7.5h14l-1.1 12.4a2.5 2.5 0 0 1-2.5 2.3H8.6a2.5 2.5 0 0 1-2.5-2.3L5 7.5zm4.4 3a.95.95 0 0 0-.95 1l.35 6a.95.95 0 0 0 1.9-.1l-.35-6a.95.95 0 0 0-.95-.9zm5.2 0a.95.95 0 0 0-.95.9l-.35 6a.95.95 0 0 0 1.9.1l.35-6a.95.95 0 0 0-.95-1z"/></svg>'
};
function mkIB(ico, tip, cls) {
let b = document.createElement("button");
b.className = "ch2-icon-btn" + (cls ? " " + cls : "");
b.setAttribute("data-tooltip", tip);
b.innerHTML = ibIcons[ico];
return b
}
let UI = window.__ssbUI,
nameDlg = (title, value, keep) => UI.prompt({
title: title,
text: "Give this crosshair profile a name.",
value: value || "",
placeholder: "Profile name",
ok: "Save",
maxLength: 40,
validate: v => v.trim() ? "" : "Type a name first."
}).then(v => {
if (v == null) return null;
v = v.trim();
return N()[v] && v !== keep ? UI.confirm({
title: "Replace Profile",
text: "A profile named \"" + v +
"\" already exists. Replace it?",
ok: "Replace",
danger: true
}).then(ok => ok ? v : null) : v
});
let btnSave = mkIB("save", "Save profile");
btnSave.addEventListener("click", async () => {
let t = z() || await nameDlg("Save Profile", "");
if (t) {
D(t);
E();
y.value = t;
ef("ui_click");
UI.toast(
"Saved profile \"" + t + "\".", {
type: "success"
});
}
});
let btnSaveAs = mkIB("dup", "Duplicate / Save As");
btnSaveAs.addEventListener("click", async () => {
let e = await nameDlg("Save As", z() ? z() + " copy" : "");
if (e) {
D(e);
E();
y.value = e;
ef("ui_click");
UI.toast(
"Saved profile \"" + e + "\".", {
type: "success"
});
}
});
let btnCopy = mkIB("exp", "Export code to clipboard");
btnCopy.addEventListener("click", () => {
let e = y.value;
if (!e) {
UI.toast("Select a profile first.", {
type: "error"
});
return
}
let t = N();
if (!t[e]) {
UI.toast("That profile no longer exists.", {
type: "error"
});
return
}
if (typeof ef == "function") ef("ui_click");
UI.copyCode(packCrosshair(t[e]),
"Crosshair code");
});
let btnImport = mkIB("imp", "Import code");
btnImport.addEventListener("click", async () => {
let e = await UI.prompt({
title: "Import Crosshair",
text: "Paste a crosshair code. It starts with X- or SSB-. A crosshair code from Valorant works too (it starts with 0;).",
placeholder: "X-…",
ok: "Next",
validate: v => {
if (!(v = v.trim())) return "Paste a code first.";
if (!v.startsWith("X-") && !v.startsWith("SSB-") &&
!_ssbIsValorantCode(v))
return "That isn't a crosshair code. It should start with X-, SSB- or 0;.";
try {
unpackCrosshair(v)
} catch (i) {
return "That crosshair code is damaged."
}
return ""
}
});
if (e == null) return;
let t;
try {
t = unpackCrosshair(e.trim())
} catch (i) {
UI.toast("Import failed: " + i.message, {
type: "error"
});
return
}
let o = await nameDlg("Name Profile", (_ssbIsValorantCode(e) ?
"Valorant_" : "Imported_") + Math.floor(1e3 * Math
.random()));
if (!o) return;
let n = N();
n[o] = Object.assign(t, {
enabled: true
});
M(n);
E();
if (typeof ef == "function") ef("ui_click");
UI.toast(
"Imported profile \"" + o + "\"." + (t.__notes && t.__notes
.length ? "\n" + t.__notes.join("\n") : ""), {
type: "success",
ms: t.__notes && t.__notes.length ? 7000 : 0
});
});
let btnDel = mkIB("del", "Delete profile", "danger");
btnDel.addEventListener("click", async () => {
let e = y.value;
if (!e) {
UI.toast("Select a profile first.", {
type: "error"
});
return
}
if ((await UI.confirm({
title: "Delete Profile",
text: "Delete the crosshair profile \"" + e + "\"?",
ok: "Delete",
danger: true
}))) {
function e(t) {
let o = N();
return !!o[t] && (delete o[t], M(o), z() === t && O(""), true)
}(e);
E();
ef("ui_click");
}
});
[btnSave, btnSaveAs, btnCopy, btnImport, btnDel].forEach(b => iconBar.appendChild(b));
profilesCard.appendChild(iconBar);
d.appendChild(profilesCard);
l.appendChild(d);
let u = document.createElement("div");
u.className = "ch2-right-col";
let f = document.createElement("div");
f.className = "ch2-controls-container";
let g = document.createElement("div");
g.className = "ch2-disabled-msg";
let gt = document.createElement("span");
gt.textContent = "The Crosshair Customizer is off, so these settings are hidden.";
let gb = document.createElement("button");
gb.type = "button";
gb.className = "ch2-profile-btn";
gb.textContent = "Turn it on";
gb
.addEventListener("click", () => {
let cb = b.querySelector("input");
cb.checked = true;
cb.dispatchEvent(new Event("change"));
cb.focus();
});
g.appendChild(gt);
g.appendChild(gb);
let enableCard = document.createElement("div");
enableCard.className = "ch2-group-card ch2-card-enable";
let $ = () => {
if (window._ssbGalleryActive) return;
(rb => {
if (A.enabled) {
f.style.display = "";
g.style.display = "none";
if (rb) rb
.style.removeProperty("display");
} else {
f.style.display = "none";
g
.style.display = "";
if (rb) rb.style.setProperty("display",
"none", "important");
}
})(document.getElementById("ch2-reset-crosshair"))
};
let b = a("Enable Crosshair Customizer", "enabled", A, $);
b.style.marginBottom = "0px";
enableCard.appendChild(b);
let galWrap = document.createElement("div");
galWrap.style.display = "none";
galWrap.className = "ch2-group-card ch2-card-gallery";
let galHeader = document.createElement("div");
galHeader.className = "ch2-gallery-header";
let galTitle = document.createElement("div");
galTitle.className = "ch2-card-title";
galTitle.style.marginBottom = "0";
galTitle.textContent = "Saved Profiles";
let galHint = document.createElement("span");
galHint.className = "ch2-gallery-hint";
galHint.textContent = "Drag to reorder";
galTitle.appendChild(galHint);
let galBack = document.createElement("button");
galBack.className = "ch2-gallery-back-btn";
galBack.innerHTML = "&larr; Back to Settings";
galBack.addEventListener("click", () => {
if (typeof ef === "function") ef("ui_click");
window._ssbToggleGallery(false);
});
galHeader.appendChild(galTitle);
galHeader.appendChild(galBack);
let galGrid = document.createElement("div");
galGrid.className = "ch2-gallery-grid";
function moveProfile(name, target, after) {
let r = PO(),
from = r.indexOf(name);
if (from < 0 || name === target) return;
r.splice(from, 1);
let to = target == null ? r.length : r.indexOf(target) + (after ? 1 : 0);
r.splice(Math.max(0, Math.min(r.length, to)), 0, name);
PS(r);
if (typeof ef == "function") ef("ui_click");
E();
}
let dragName = null,
clearDrop = () => galGrid.querySelectorAll(
".ch2-drop-before,.ch2-drop-after,.ch2-dragging").forEach(c => c.classList
.remove("ch2-drop-before", "ch2-drop-after", "ch2-dragging")),
dropSide = (c, ev) => {
let r = c.getBoundingClientRect();
return ev.clientX > r.left + r.width / 2
};
galGrid.addEventListener("dragstart", ev => {
let c = ev.target.closest && ev.target.closest(".ch2-gallery-card");
if (!c) return;
dragName = c.getAttribute("data-name");
c.classList.add("ch2-dragging");
ev
.dataTransfer.effectAllowed = "move";
try {
ev.dataTransfer.setData("text/plain", dragName)
} catch (err) {
window.__ssbErr("crosshair.drag", err)
}
});
galGrid.addEventListener("dragover", ev => {
if (dragName == null) return;
let c = ev.target.closest && ev.target.closest(".ch2-gallery-card");
if (!c || c.getAttribute("data-name") === dragName) return;
ev.preventDefault();
ev.dataTransfer.dropEffect = "move";
let after = dropSide(c, ev);
if (!c.classList.contains(after ? "ch2-drop-after" : "ch2-drop-before")) {
clearDrop();
galGrid.querySelector(
".ch2-gallery-card[data-name=\"" + CSS.escape(dragName) + "\"]")
?.classList.add("ch2-dragging");
c.classList.add(after ?
"ch2-drop-after" : "ch2-drop-before");
}
});
galGrid.addEventListener("drop", ev => {
if (dragName == null) return;
let c = ev.target.closest && ev.target.closest(".ch2-gallery-card");
ev.preventDefault();
let n = dragName;
dragName = null;
clearDrop();
if (c && c.getAttribute("data-name") !== n) moveProfile(n, c.getAttribute(
"data-name"), dropSide(c, ev));
else {
if (!c && ev.target.closest && ev
.target.closest(".ch2-gallery-new-card")) moveProfile(n, null,
true);
}
});
galGrid.addEventListener("dragend", () => {
dragName = null;
clearDrop();
});
galWrap.appendChild(galHeader);
galWrap.appendChild(galGrid);
window._ssbGalleryActive = false;
window._ssbToggleGallery = (show) => {
window._ssbGalleryActive = show;
let resetBtn = document.querySelector("#mod-crosshair-section .ch2-reset-btn");
let rightCol = document.querySelector("#mod-crosshair-section .ch2-right-col");
let leftCol = document.querySelector("#mod-crosshair-section .ch2-preview-col");
if (show) {
if (window._ssbGalleryDirty) {
window._ssbGalleryDirty = false;
let _p = N();
window._ssbUpdateGallery(_p, PO(_p), z() || "")
}
enableCard.style.display = "none";
f.style.display = "none";
g.style.display = "none";
galWrap.style.display = "flex";
galWrap.style.flexDirection = "column";
galWrap.style.flex = "1";
if (rightCol) {
rightCol.style.display = "flex";
rightCol.style.flexDirection = "column";
rightCol.style.setProperty("flex", "1", "important");
rightCol.style.setProperty("max-width", "100%", "important");
}
if (leftCol) leftCol.style.setProperty("display", "none", "important");
if (resetBtn) resetBtn.style.setProperty("display", "none", "important");
} else {
enableCard.style.display = "";
galWrap.style.display = "none";
galWrap.style.flex = "";
if (rightCol) {
rightCol.style.removeProperty("flex");
rightCol.style.removeProperty("max-width");
}
if (leftCol) leftCol.style.removeProperty("display");
if (resetBtn) resetBtn.style.removeProperty("display");
$();
renderMini();
}
};
window._ssbUpdateGallery = (savedProfiles, keys, activeVal) => {
galGrid.innerHTML = "";
keys.forEach(name => {
let card = document.createElement("div");
card.className = "ch2-gallery-card";
if (name === activeVal) card.classList.add("selected");
let o = savedProfiles[name];
let miniWrap = document.createElement("div");
miniWrap.className = "ch2-gallery-mini-preview";
miniWrap.innerHTML = xhMini(o, 92);
let title = document.createElement("div");
title.className = "ch2-gallery-title";
title.textContent = name;
card.appendChild(miniWrap);
card.appendChild(title);
card.setAttribute("data-tooltip", name);
if (name === activeVal) {
let badge = document.createElement("div");
badge.className = "ch2-gallery-badge";
badge.innerHTML =
'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#0C576F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 13 9 18 20 6"/></svg>';
card.appendChild(badge);
}
let actions = document.createElement("div");
actions.className = "ch2-gallery-actions";
let aExp = document.createElement("button");
aExp.className = "ch2-gallery-abtn";
aExp.setAttribute("data-tooltip", "Copy this profile's code");
aExp
.setAttribute("aria-label", "Copy the code for " + name);
aExp.innerHTML =
'<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 1l6.2 6.8a.6.6 0 0 1-.44 1H14.5V15a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V8.8H6.24a.6.6 0 0 1-.44-1L12 1z"/><path d="M3 14.5h3v3.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3.5h3V19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-4.5z"/></svg>';
aExp.addEventListener("click", ev => {
ev.stopPropagation();
let prof = N()[name];
if (!prof) {
UI.toast("That profile no longer exists.", {
type: "error"
});
return
}
if (typeof ef == "function") ef("ui_click");
UI.copyCode(packCrosshair(prof), "Crosshair code");
});
let aDel = document.createElement("button");
aDel.className = "ch2-gallery-abtn danger";
aDel.setAttribute("data-tooltip", "Delete profile");
aDel
.setAttribute("aria-label", "Delete " + name);
aDel.innerHTML =
'<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M9.3 1.5h5.4a1 1 0 0 1 .9.55L16.4 3.5H20a1.2 1.2 0 0 1 0 2.4H4a1.2 1.2 0 0 1 0-2.4h3.6l.8-1.45a1 1 0 0 1 .9-.55z"/><path d="M5 7.5h14l-1.1 12.4a2.5 2.5 0 0 1-2.5 2.3H8.6a2.5 2.5 0 0 1-2.5-2.3L5 7.5z"/></svg>';
aDel.addEventListener("click", async ev => {
ev.stopPropagation();
if (!(await UI.confirm({
title: "Delete Profile",
text: "Delete the crosshair profile \"" +
name + "\"?",
ok: "Delete",
danger: true
}))) return;
let all = N();
if (all[name]) {
delete all[name];
M(all);
if (z() === name) O("");
}
E();
if (typeof ef == "function") ef("ui_click");
});
actions.appendChild(aExp);
actions.appendChild(aDel);
card.appendChild(actions);
card.draggable = true;
card.setAttribute("data-name", name);
card.addEventListener("keydown", ev => {
if (!ev.altKey || ev.target !== card) return;
let d = ev.key === "ArrowLeft" || ev.key === "ArrowUp" ?
-1 : ev.key === "ArrowRight" || ev
.key === "ArrowDown" ? 1 : 0;
if (!d) return;
ev.preventDefault();
let r = PO(),
i = r.indexOf(name),
j = i + d;
if (j < 0 || j >= r.length) return;
moveProfile(name, r[j], d > 0);
let again = galGrid.querySelector(
".ch2-gallery-card[data-name=\"" + CSS.escape(
name) + "\"]");
if (again) again.focus();
});
card.addEventListener("click", () => {
y.value = name;
y.dispatchEvent(new Event("change"));
});
card.tabIndex = 0;
card.setAttribute("role", "button");
card
.setAttribute("aria-label", "Use profile " + name + (name ===
activeVal ? " (current)" : "") +
". Alt plus arrow keys move it.");
card.addEventListener(
"keydown", ev => {
if (ev.target === card && (ev.key === "Enter" || ev
.key === " ")) {
ev.preventDefault();
card.click();
}
});
galGrid.appendChild(card);
});
let newCard = document.createElement("div");
newCard.className = "ch2-gallery-new-card";
newCard.innerHTML =
'<div class="ch2-gallery-new-plus"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round"><line x1="12" y1="4" x2="12" y2="20"/><line x1="4" y1="12" x2="20" y2="12"/></svg></div><div class="ch2-gallery-new-label">Create new</div>';
newCard.setAttribute("data-tooltip",
"Create a new profile with default crosshair settings");
newCard
.tabIndex = 0;
newCard.setAttribute("role", "button");
newCard.setAttribute(
"aria-label", "Create a new profile");
newCard.addEventListener(
"keydown", ev => {
if (ev.target === newCard && (ev.key === "Enter" || ev.key ===
" ")) {
ev.preventDefault();
newCard.click();
}
});
newCard.addEventListener("click", async () => {
let nm = await nameDlg("New Profile", "");
if (!nm) return;
let all = N();
all[nm] = Object.assign({}, B, {
enabled: true
});
M(all);
E();
y.value = nm;
y.dispatchEvent(new Event("change"));
if (typeof ef == "function") ef("ui_click");
});
galGrid.appendChild(newCard);
};
if (typeof N === "function") {
window._ssbUpdateGallery(N(), PO(), typeof z === "function" ? z() || "" : "");
}
u.appendChild(galWrap);
u.appendChild(enableCard);
u.appendChild(g);
u.appendChild(f);
$();
let armsCard = document.createElement("div");
armsCard.className = "ch2-group-card ch2-card-arms";
let armsTitle = document.createElement("div");
armsTitle.className = "ch2-card-title";
armsTitle.textContent = "Arms";
armsCard.appendChild(armsTitle);
let armsList = document.createElement("div");
armsList.className = "ch2-card-list";
armsCard.appendChild(armsList);
let armsBody = document.createElement("div");
armsBody.className = "ch2-collapse-body";
let _fold = (body, hide) => {
body.style.maxHeight = body.scrollHeight + "px";
void body.offsetHeight;
body
.classList.toggle("collapsed", hide);
clearTimeout(body.__ssbFold);
if (!hide) body.__ssbFold = setTimeout(() => {
if (!body.classList.contains("collapsed")) body.style.maxHeight =
"";
}, 400);
};
let j = a("Hide Arms", "hideCrosshair", A, () => _fold(armsBody, A.hideCrosshair));
j.style.marginBottom = "10px";
armsList.appendChild(j);
armsBody.appendChild(n("Color", "armColor", A));
let abRow = n("Outline Color", "armBorder", A);
abRow.style.display = A.armOutlineEnabled ? "" : "none";
armsBody.appendChild(a(
"Outline", "armOutlineEnabled", A, () => {
abRow.style.display = A.armOutlineEnabled ? "" : "none"
}));
armsBody.appendChild(abRow);
armsBody.appendChild(i("Length", "armLength", A, 0, 3, .05));
armsBody.appendChild(i("Width", "armWidth", A, .05, 2, .05));
armsBody.appendChild(i("Opacity", "armOpacity", A, 0, 1, .01));
armsBody.appendChild(i("Rotation", "armRotation", A, 0, 360, 1));
armsBody.appendChild(i("Scale", "armScale", A, .1, 5, .05));
if (A.hideCrosshair) {
armsBody.classList.add("collapsed");
}
armsList.appendChild(armsBody);
f.appendChild(armsCard);
let dotCard = document.createElement("div");
dotCard.className = "ch2-group-card ch2-card-dot";
let dotTitle = document.createElement("div");
dotTitle.className = "ch2-card-title";
dotTitle.textContent = "Center Dot";
dotCard.appendChild(dotTitle);
let dotList = document.createElement("div");
dotList.className = "ch2-card-list";
dotCard.appendChild(dotList);
let dotBody = document.createElement("div");
dotBody.className = "ch2-collapse-body";
let W = a("Hide Center Dot", "hideDot", A, () => _fold(dotBody, A.hideDot));
W.style.marginBottom = "10px";
dotList.appendChild(W);
let SG = a("Hide Center Dot With Shotgun", "hideDotShotgun", A, () => {
if (window.__ssbShotgunDot) window.__ssbShotgunDot();
});
SG.style.marginBottom = "10px";
dotList.appendChild(SG);
let K = document.createElement("div");
K.className = "ch2-shape-row";
let U = {};
["dot", "plus", "still"].forEach(e => {
let t = document.createElement("button");
t.className = "ch2-shape-btn" + (A.dotShape === e ? " active" : "");
t
.textContent = e.charAt(0).toUpperCase() + e.slice(1);
t
.addEventListener("click", () => {
A.dotShape = e;
F("dotShape", e);
Object.values(U).forEach(e =>
e.classList.remove("active"));
t.classList.add(
"active");
X.style.display = e === "dot" ? "" : "none";
J
.style.display = e === "plus" ? "" : "none";
Q.style
.display = e === "still" ? "" : "none";
V.style.display =
e === "still" ? "none" : "";
Z.style.display = e === "still" ? "none" : "";
G();
Y();
ef("ui_click");
});
U[e] = t;
K.appendChild(t);
});
dotBody.appendChild(K);
let V = n("Color", "dotColor", A);
V.style.display = A.dotShape === "still" ? "none" : "";
dotBody.appendChild(V);
let Z = i("Opacity", "dotOpacity", A, 0, 1, .01);
Z.style.display = A.dotShape === "still" ? "none" : "";
dotBody.appendChild(Z);
let X = document.createElement("div");
X.style.display = A.dotShape === "dot" ? "" : "none";
let dbC = n("Outline Color", "dotBorder", A),
dbW = i("Outline Width", "dotBorderWidth", A, 0, .2, .01),
dbShow = () => {
dbC.style.display = dbW.style.display = A.dotOutlineEnabled ? "" : "none"
};
dbShow();
X.appendChild(a("Round (circle)", "dotRound", A));
X.appendChild(i("Scale",
"dotScale", A, .1, 5, .05));
X.appendChild(a("Outline", "dotOutlineEnabled", A,
dbShow));
X.appendChild(dbC);
X.appendChild(dbW);
dotBody.appendChild(X);
let J = document.createElement("div");
J.style.display = A.dotShape === "plus" ? "" : "none";
J.appendChild(i("Length",
"dotPlusLen", A, 1, 40, 1));
J.appendChild(i("Width", "dotPlusWidth", A, 1, 10,
1));
J.appendChild(i("Scale", "plusScale", A, .1, 5, .05));
dotBody.appendChild(
J);
let Q = document.createElement("div");
Q.style.display = A.dotShape === "still" ? "" : "none";
Q.appendChild(n("Color",
"staticColor", A));
Q.appendChild(i("Opacity", "staticOpacity", A, 0, 1, .01));
Q.appendChild(i("Length", "staticLength", A, 0, 3, .05));
Q.appendChild(i("Width",
"staticWidth", A, .05, 2, .05));
Q.appendChild(i("Center Gap", "staticGap", A,
0, 20, 1));
Q.appendChild(i("Scale", "stillScale", A, .1, 5, .05));
let ee = n("Outline Color", "staticBorder", A);
ee.style.display = A.staticOutlineEnabled ? "" : "none";
Q.appendChild(a("Outline",
"staticOutlineEnabled", A, () => {
ee.style.display = A.staticOutlineEnabled ? "" : "none";
G();
Y();
}));
Q.appendChild(ee);
dotBody.appendChild(Q);
if (A.hideDot) {
dotBody.classList.add("collapsed");
}
dotList.appendChild(dotBody);
f.appendChild(dotCard);
window.__ssbChRebuild = () => {
let scrollers = () => [t, t.querySelector(".ch2-right-col"), t.querySelector(
".ch2-preview-col")],
keep = scrollers().map(el => el ? el.scrollTop : 0),
ae = document.activeElement,
act = ae && t.contains(ae) && ae.getAttribute("data-ch-act");
G();
Y();
t.innerHTML = "";
e();
scrollers().forEach((el, i) => {
if (el) el.scrollTop = keep[i];
});
let back = act && t.querySelector('[data-ch-act="' + act + '"]');
if (back && back.disabled) back = t.querySelector(
".ch2-hist-btn:not(:disabled)");
if (back) back.focus({
preventScroll: true
});
};
let chH = window.__ssbChHist,
chBar = profilesCard.querySelector(".ch2-icon-bar"),
chTools = document.createElement("div"),
chRow = document.createElement("div");
chTools.className = "ch2-prof-tools";
chRow.className = "ch2-hist-row";
chBar
.replaceWith(chTools);
chTools.appendChild(chBar);
chTools.appendChild(chRow);
let chSvg = p =>
'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round">' +
p + "</svg>",
chIcons = {
undo: chSvg(
'<path d="M8.5 4.5L4 9l4.5 4.5"/><path d="M4.5 9H15a5 5 0 0 1 0 10h-4"/>'
),
redo: chSvg(
'<path d="M15.5 4.5L20 9l-4.5 4.5"/><path d="M19.5 9H9a5 5 0 0 0 0 10h4"/>'
),
revert: chSvg(
'<path d="M4 12A8 8 0 1 0 6.34 6.34L4.3 8.4"/><path d="M4.3 3.9v4.5h4.5"/>'
)
};
let chBtn = (act, label, name, tip, run) => {
let b = document.createElement("button");
b.type = "button";
b.className = "ch2-hist-btn";
b.setAttribute("data-ch-act",
act);
b.setAttribute("aria-label", name);
b.setAttribute("data-tooltip",
tip);
b.innerHTML = chIcons[act] + "<span>" + label + "</span>";
b
.addEventListener("click", () => {
if (run()) ef("ui_click");
});
chRow.appendChild(b);
return b
};
let chU = chBtn("undo", "Undo", "Undo", "Undo your last crosshair change (Ctrl+Z).",
() => chH.undo()),
chR = chBtn("redo", "Redo", "Redo", "Redo the change you undid (Ctrl+Y).", () => chH
.redo()),
chV = chBtn("revert", "Revert", "Revert to Saved",
"Revert to Saved: put this profile back the way you last saved it.", () => chH
.revert());
let chPaint = () => {
chU.disabled = !chH.canUndo();
chR.disabled = !chH.canRedo();
chV.disabled = !
chH.dirty();
};
window.__ssbChPaint = chPaint;
chPaint();
let et = document.createElement("button");
et.className = "ch2-reset-btn";
et.id = "ch2-reset-crosshair";
et.textContent =
"Reset Crosshair";
et.style.display = A.enabled ? "" : "none";
et.addEventListener(
"click", async () => {
if ((await UI.confirm({
title: "Reset Crosshair",
text: "Reset all crosshair settings to their defaults?",
ok: "Reset",
danger: true
}))) {
Object.keys(B).forEach(e => {
if (e !== "enabled" && e !== "hideCrosshair") A[e] = B[
e];
});
Object.keys(A).forEach(e => F(e, A[e]));
t.innerHTML = "";
e();
G();
}
});
if (!A.enabled) et.style.setProperty("display", "none", "important");
u
.appendChild(et);
l.appendChild(u);
t.appendChild(l);
$();
Y();
if (t.__ssbPreviewDispose) t.__ssbPreviewDispose();
const previewNode = document.getElementById("ch2-preview-wrap");
const previewIntersection = window.IntersectionObserver ? new IntersectionObserver(
entries => {
if (entries[0].isIntersecting) Y();
}, {
threshold: .01
}) : null;
if (previewNode && previewIntersection) previewIntersection.observe(previewNode);
const miniRO = window.ResizeObserver ? new ResizeObserver(() => {
let w = mini.clientWidth;
if (w !== mini.__ssbW) {
mini.__ssbW = w;
renderMini();
}
}) : null;
if (miniRO) miniRO.observe(mini);
window.__ssbRenderMini = renderMini;
renderMini();
t.__ssbPreviewDispose = () => {
if (previewIntersection) previewIntersection.disconnect();
if (miniRO) miniRO.disconnect();
};
}());
setTimeout(V, 500);
let eh = em.previousElementSibling;
if (i.style.maxHeight = "500px", ep.style.maxHeight = "500px", eh && eh.children.length >= 3) {
let eu = eh.firstElementChild.className.replace(/\b([a-zA-Z0-9_\-]*active|selected)\b/gi,
"").trim(),
e$ = null;
function eb(e, t) {
let o = document.createElement("div");
o.id = e;
o.className = eu;
o.tabIndex = 0;
o.setAttribute("role", "button");
o
.setAttribute("aria-pressed", "false");
o.addEventListener("keydown", ev => {
if (ev.key === "Enter" || ev.key === " ") {
ev.preventDefault();
ev.stopPropagation();
o.click();
}
});
o.innerHTML =
`<div class="mod-tab-label" style="font-family:inherit;font-weight:900;color:white;display:flex;align-items:center;justify-content:center;width:100%;height:100%;text-shadow:0 2px 4px rgba(0,0,0,0.3)">${t}</div>`;
return o;
}
Array.from(eh.children).forEach(e => {
let t = Array.from(e.classList).find(e => /active|selected/i.test(e));
if (t) e$ = t;
});
let ey = eb("mod-settings-tab", "MODS"),
ex = eb("mod-crosshair-tab", "CROSSHAIR");
function ev() {
em.classList.remove("mod-tab-active");
i.style.display = "none";
ep.style.display =
"none";
[ey, ex].forEach(e => {
e.className = eu;
if (e$) e.classList.remove(e$);
e.classList.remove(
"mod-tab-is-active");
e.setAttribute("aria-pressed", "false");
});
Array.from(eh.children).forEach(e => e.classList.remove("mod-native-dim"));
}
function e_(e, t, o, n) {
e.addEventListener("click", () => {
var a;
ev();
(function e() {
let t = em.nextElementSibling;
for (; t && t.offsetHeight < 30;) t = t.nextElementSibling;
let o = em.getBoundingClientRect().top,
vb = window.__ssbViewBox(),
n = t ? t.getBoundingClientRect().top : vb.top + vb.height - 90,
a = Math.max(150, n - o - 12) + "px";
i.style.maxHeight = a;
ep.style.maxHeight = a;
}());
t.style.display = "block";
a = e;
em.classList.add(
"mod-tab-active");
Array.from(eh.children).forEach(e => {
if (e !== ey && e !== ex) e.classList.add("mod-native-dim");
});
[ey, ex].forEach(e => {
if (e !== a) {
if (e$) e.classList.remove(e$);
e.classList.remove(
"mod-tab-is-active");
}
});
a.classList.add(e$ || "active");
a.classList.add(
"mod-tab-is-active");
a.setAttribute("aria-pressed", "true");
if (window
.__ssbRequestLayout) window.__ssbRequestLayout();
if (n) n();
localStorage.setItem("ch2-lastTab", o);
ef("ui_toggletab");
})
}
eh.style.display = "flex";
eh.classList.add("mod-tab-strip");
Array.from(eh.children)
.forEach(e => {
e.style.flex = "1";
if (e.__ssbNativeTabClick) e.removeEventListener("click", e
.__ssbNativeTabClick);
e.__ssbNativeTabClick = () => {
ev();
localStorage.setItem("ch2-lastTab", "native");
};
e.addEventListener("click", e.__ssbNativeTabClick);
});
e_(ey, i, "mods", () => {
if (window.__ssbSyncModChips) window.__ssbSyncModChips();
_ssbFocusSettingsSearch(true);
if (window
.__ssbRequestLayout) window.__ssbRequestLayout();
});
e_(ex, ep, "crosshair", () => {
ep.classList.remove("pm-enter");
void ep.offsetWidth;
ep.classList.add(
"pm-enter");
clearTimeout(ep.__pmEnter);
ep.__pmEnter = setTimeout(() =>
ep.classList.remove("pm-enter"), 400);
Y();
if (window.__ssbRenderMini) window.__ssbRenderMini();
});
eh.appendChild(ey);
eh.appendChild(ex);
let e0 = false;
function ew() {
let e = localStorage.getItem("ch2-lastTab");
if (e === "crosshair") ex.click();
else {
if (e === "mods") ey.click();
}
e0 = true;
}
let tabIntersection = window.IntersectionObserver ? new IntersectionObserver(e => {
if (e[0].isIntersecting && !e0) ew();
else {
if (!e[0].isIntersecting) e0 = false;
}
}, {
threshold: .01
}) : null;
if (tabIntersection) tabIntersection.observe(eh);
let ek = new MutationObserver(() => {
let e = eh.offsetWidth > 0 || eh.offsetHeight > 0;
if (e && !e0) ew();
else {
if (!e) e0 = false;
}
});
[em, em.parentElement, em.parentElement && em.parentElement.parentElement].filter(Boolean)
.forEach(e => ek.observe(e, {
attributes: true,
attributeFilter: ["style", "class"]
}));
i.__ssbTabsDispose = () => {
ek.disconnect();
if (tabIntersection) tabIntersection.disconnect();
};
} else {
t.appendChild(i);
i.style.display = "block";
}
E()
}()
} catch (e) {
console.error("injectGameSettings error:", e);
if (!(window.__ssbBuildErrShown || !window.__ssbUI)) {
window.__ssbBuildErrShown = 1;
window.__ssbUI
.toast("Better HUD couldn't build its settings tab. Reload the page (F5).", {
type: "error"
});
}
}
try {
if (d.ui.showServerList) {
if (!eG()) e5();
} else {
let t = document.querySelector(".mod-server-clone");
if (t) t.remove();
}
} catch (o) {
console.error("injectServerSelector error:", o)
}
}
};
function eG() {
let e = document.querySelector(".photo-booth-map-section");
if (!e || e.checkVisibility && !e.checkVisibility()) return false;
let t = e.getBoundingClientRect();
return t.width > 0 && t.height > 0
}
let _ssbOwnSel =
'#mod-settings-section,#mod-crosshair-section,.mod-server-clone,[id^="mod-"],[id^="ssb-"],[id^="ch2-"],style,script,link';
function _ssbFocusSettingsSearch(select) {
if (document.hidden || document.pointerLockElement) return null;
const settings = document.getElementById("settings"), search = document.querySelector("#mod-top-bar .mod-search");
if (!settings || !search || !settings.getClientRects().length || !search.getClientRects().length) return null;
const active = document.activeElement;
if (active === search) {
if (select) search.select();
return search;
}
if (active && (active.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(active.tagName))) return null;
search.focus({ preventScroll: true });
search.select();
return search;
}
function _ssbTypeToSearch(event) {
const was = document.activeElement;
if (was?.classList?.contains("mod-search") && !was.getClientRects().length) was.blur();
if (event.defaultPrevented || event.isComposing || event.ctrlKey || event.metaKey || event.altKey || event.repeat || !/^[\p{L}\p{N}]$/u.test(event.key || "")) return;
if (document.hidden || document.pointerLockElement) return;
const active = document.activeElement;
if (active && (active.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(active.tagName))) return;
const settings = document.getElementById("settings");
if (!settings?.getClientRects().length || settings.querySelector(".mod-key-listening")) return;
if (document.querySelector("#ssb-dialog-overlay,#ssb-intro-overlay,#ssb-changelog-overlay,#ssb-stats-overlay.open")) return;
const mods = document.getElementById("mod-settings-tab"), search = document.querySelector("#mod-top-bar .mod-search");
if (!mods || !search) return;
if (!search.getClientRects().length) mods.click();
if (_ssbFocusSettingsSearch() !== search) return;
event.preventDefault();
event.stopImmediatePropagation();
search.setRangeText(event.key, search.selectionStart ?? search.value.length, search.selectionEnd ?? search.value.length, "end");
search.dispatchEvent(new Event("input", { bubbles: true }));
}
window.addEventListener("keydown", _ssbTypeToSearch, true);
function _ssbOwnRec(r) {
let t = r.target.nodeType === 1 ? r.target : r.target.parentElement;
if (t && t.closest(_ssbOwnSel)) return true;
for (let n of r.addedNodes)
if (n.nodeType === 1 && !n.matches(_ssbOwnSel)) return false;
for (let n of r.removedNodes)
if (n.nodeType === 1 && !n.matches(_ssbOwnSel)) return false;
return true
}
window._modObs = new MutationObserver(e => {
for (let t of e)
if (!_ssbOwnRec(t)) {
if (window.__ssbPerf) window.__ssbPerf.mods++;
clearTimeout(window._modObsT);
window._modObsT =
setTimeout(eW, 100);
return
}
});
window._modObs.observe(document.body || document.documentElement, {
childList: true,
subtree: true
});
window.__ssbMenuPoll(() => {
let e = i(".mod-server-clone");
if (!d.ui.showServerList) {
if (e) e.remove();
return
}
if (document.pointerLockElement) {
if (e) e.remove();
return
}
if (eG()) {
if (e) e.style.setProperty("display", "none", "important");
return
}
if (e) e.style.removeProperty("display");
try {
e5()
} catch (i) {
console.error("server inject error", i)
}
let a = e || i(".mod-server-clone");
if (a) {
let r = a.querySelector("h3");
if (r && r.textContent !== "Server") r.textContent = "Server";
let s = a.querySelector("p.game-mode-type") || a.querySelector("p[class*='game-mode']");
if (s) {
let l = " " + eT();
if ((s.childNodes.length !== 1 || !s.firstChild || s.firstChild.nodeType !== Node.TEXT_NODE || s
.firstChild.textContent !== l)) s.textContent = l;
e2 = s.firstChild;
}
}
}, 1e3);
document.addEventListener("pointerlockchange", () => {
if (document.pointerLockElement) {
document.querySelector(".mod-server-clone")?.remove();
if (window._modObs) window._modObs.disconnect();
if (window.__ssbAutoFs) window.__ssbAutoFs();
} else if (!document.hidden) {
if (window._modObs) window._modObs.observe(document.body, {
childList: true,
subtree: true
});
eW()
}
});
! function() {
let mine = false,
quit = false,
locked = false,
optOut = null,
asked = 0,
escDown = false,
escAt = -1e9;
let real = () => !document.fullscreenElement && !!(window.matchMedia && window.matchMedia(
"(display-mode: fullscreen)").matches);
let unlock = () => {
try {
if (navigator.keyboard && navigator.keyboard.unlock) navigator.keyboard.unlock();
} catch (e) {
window.__ssbErr("fullscreen#2", e)
}
};
let fills = () => {
let s = window.screen,
w = window.outerWidth,
h = window.outerHeight;
if (mine && document.fullscreenElement && s && (w < .9 * s.width || h < .9 * s.height)) window.__ssbErr(
"fullscreen#5", new Error("window " + w + "x" + h + ", screen " + s.width + "x" + s.height));
};
window.__ssbAutoFs = () => {
let el = document.documentElement,
code = window.__ssbGameCode || "",
ua = navigator.userActivation;
if (!d.ui.autoFullscreen || document.fullscreenElement || real() || optOut === code || !el
.requestFullscreen || performance.now() - asked < 1500 || ua && !ua.isActive) return;
asked = performance.now();
el.requestFullscreen({
navigationUI: "hide"
}).then(() => {
asked = 0;
mine = true;
locked = false;
if (navigator.keyboard && navigator.keyboard.lock) navigator.keyboard.lock(["Escape"]).then(
() => {
locked = true
}, e => window.__ssbErr("fullscreen#2", e));
setTimeout(fills, 800)
}, e => {
asked = 0;
window.__ssbErr("fullscreen#1", e);
})
};
let rpl = Element.prototype.requestPointerLock;
if (rpl) Element.prototype.requestPointerLock = function() {
let r = rpl.apply(this, arguments);
try {
window.__ssbAutoFs()
} catch (e) {
window.__ssbErr("fullscreen#4", e)
}
return r
};
document.addEventListener("fullscreenchange", () => {
if (document.fullscreenElement || !mine) return;
mine = false;
unlock();
if (quit) quit = false;
else {
if (locked && (escDown || performance.now() - escAt < 1e3)) optOut = window
.__ssbGameCode || "";
}
locked = false
});
window.addEventListener("keydown", e => {
if (e.key === "Escape") {
escDown = true;
escAt = performance.now();
if (mine && locked && document
.pointerLockElement) document.exitPointerLock();
}
}, true);
window.addEventListener("keyup", e => {
if (e.key === "Escape") {
escDown = false;
escAt = performance.now();
}
}, true);
window.addEventListener("blur", () => {
escDown = false
});
document.addEventListener("ssb:settings-change", () => {
if (!d.ui.autoFullscreen && mine && document.fullscreenElement) {
quit = true;
document.exitFullscreen()
.catch(e => {
quit = false;
window.__ssbErr("fullscreen#3", e);
});
}
})
}();
document.addEventListener("visibilitychange", () => {
clearTimeout(window._modObsT);
if (document.hidden) window._modObs?.disconnect();
else if (!document.pointerLockElement && document.body) {
window._modObs?.observe(document.body, {
childList: true,
subtree: true
});
eW();
}
});
let eK = window.requestAnimationFrame.bind(window),
eU = window.cancelAnimationFrame.bind(window),
eY = 0,
eV = new Map;
window._msgPending = false;
let _ssbMC = new MessageChannel;
let _ssbFB = [];
let _ucN = 0,
_ucAsk = 0,
_ucLvl = 2,
_ucUp = 0,
_ucUpAt = -1e4,
_ucBack = 2e3,
_ucGl = null,
_ucQ = [],
_ucGpu = 0,
_ucDone = 0,
_ucT = 0,
_ucLast = -1e9,
_ucOwed = 0;
function _ucClean(v) {
v = +v;
return Number.isFinite(v) && v > 0 ? Math.max(30, Math.min(1e3, Math.round(v))) : 0
}
d.hideFPS.uncapTarget = _ucClean(d.hideFPS.uncapTarget);
let _ucWait = now => {
let f = _ucClean(d.hideFPS.uncapTarget);
return f ? _ucLast + 1e3 / f - now : 0
};
let _ucPost = () => {
if (!window._msgPending) {
window._msgPending = true;
_ssbMC.port2.postMessage(0);
}
},
_ucPoll = () => {
_ucT = 0;
_ucPost();
};
let _ucDown = (now, to) => {
if (to < _ucLvl) {
_ucBack = now - _ucUpAt < 3e3 ? Math.min(16e3, 2 * _ucBack) : 2e3;
_ucLvl = to;
}
_ucUp = now + _ucBack
};
let _ucFence = () => {
try {
let sc = window.P && window.P.scene,
en = sc && sc.getEngine && sc.getEngine(),
gl = en && en._gl;
if (gl !== _ucGl) {
_ucQ = [];
_ucGl = gl && gl.fenceSync ? gl : null;
}
if (!_ucGl || _ucGl.isContextLost()) return;
if (_ucQ.length > 1) _ucGl.deleteSync(_ucQ.shift()[0]);
_ucQ.push([_ucGl.fenceSync(_ucGl.SYNC_GPU_COMMANDS_COMPLETE, 0), performance.now()]);
_ucGl.flush()
} catch (e) {
_ucQ = []
}
};
let _ucBehind = now => {
try {
if (!_ucGl || _ucGl.isContextLost()) return 0;
while (_ucQ.length && _ucGl.getSyncParameter(_ucQ[0][0], _ucGl.SYNC_STATUS) === _ucGl.SIGNALED) {
_ucGpu += (now - Math.max(_ucQ[0][1], _ucDone) - _ucGpu) / 4;
_ucDone = now;
_ucGl.deleteSync(_ucQ
.shift()[0]);
}
return _ucQ.length
} catch (e) {
return 0
}
};
let _ucRun = () => {
if (eV.size === 0) return;
let now = performance.now(),
fns = _ssbFB,
i = 0;
_ucLast = now;
_ucOwed = 0;
for (let v of eV.values()) fns[i++] = v;
eV.clear();
for (let n = 0; n < i; n++) {
try {
fns[n](now)
} catch (e) {
window.__ssbErr("frame#1", e)
}
}
fns.length = 0;
if (d.hideFPS.uncapCtl) _ucFence()
};
let _ucNat = () => {
let now = performance.now();
_ucN = 0;
if (now - _ucAsk > 24) _ucDown(now, Math.max(0, _ucLvl - 1));
else {
if (_ucLvl < 2 && now > _ucUp) {
_ucLvl++;
_ucUpAt = now;
_ucUp = now + _ucBack;
}
}
if (eV.size && _ucWait(now) > 0) {
_ucOwed = 1;
return _ucPost()
}
_ucRun()
};
let _ssbFlush = () => {
window._msgPending = false;
if (eV.size === 0) return;
let now = performance.now(),
w = _ucWait(now);
if (w > 0) {
if (w <= 2) _ucPost();
else if (!_ucT) _ucT = setTimeout(_ucPoll, w - 2);
return
}
if (_ucOwed || !d.hideFPS.uncapCtl) return _ucRun();
if (!_ucLvl || _ucN && now - _ucAsk > 24) return;
if (_ucBehind(now) >= Math.min(_ucLvl, _ucGpu < 1.5 ? 2 : 1)) {
let age = now - _ucQ[0][1];
if (age < 3) _ucPost();
else {
if (age < 100 && !_ucT) _ucT = setTimeout(_ucPoll, 1);
}
return
}
_ucRun()
};
_ssbMC.port1.onmessage = _ssbFlush;
function _ucReset() {
if (_ucT) clearTimeout(_ucT);
_ucT = 0;
_ucLast = -1e9;
_ucOwed = 0;
try {
if (_ucGl && !_ucGl.isContextLost()) _ucQ.forEach(q => _ucGl.deleteSync(q[0]));
} catch (e) {}
_ucQ = [];
_ucLvl = 2;
_ucGpu = _ucDone = _ucUp = 0;
_ucUpAt = -1e4;
_ucBack = 2e3;
if (eV.size) _ucPost();
}
function _installUncap() {
if (window._ssbUncapInst) return;
window._ssbUncapInst = 1;
window.requestAnimationFrame = function(e) {
if (d.hideFPS.uncap && !document.hidden && document.pointerLockElement) {
let t = -1 - ++eY;
eV.set(t, e);
if (!_ucN) {
_ucN = eK(_ucNat);
_ucAsk = performance.now();
}
if (_ucLvl || !d.hideFPS.uncapCtl) _ucPost();
return t
}
return eK(e)
};
window.cancelAnimationFrame = function(e) {
if (e < 0) {
eV.delete(e);
return
}
return eU(e)
};
window.addEventListener("mousemove", e => {
if (e.isTrusted && d.hideFPS.uncap && d.hideFPS.uncapCtl && document.pointerLockElement) {
let now = performance.now();
if (now - e.timeStamp > 40) _ucDown(now, 0);
}
}, true)
}
if (d.hideFPS.uncap) _installUncap();
let _ucMode = [!!d.hideFPS.uncap, !!d.hideFPS.uncapCtl, d.hideFPS.uncapTarget];
document.addEventListener("ssb:settings-change", () => {
const next = [!!d.hideFPS.uncap, !!d.hideFPS.uncapCtl, _ucClean(d.hideFPS.uncapTarget)];
d.hideFPS.uncapTarget = next[2];
if (next[0] === _ucMode[0] && next[1] === _ucMode[1] && next[2] === _ucMode[2]) return;
_ucMode = next;
_ucReset();
if (d.hideFPS.uncap) _installUncap();
});
let initTooltip = () => {
let tooltipEl = document.createElement("div");
tooltipEl.id = "ssb-global-tooltip";
tooltipEl.style.cssText =
"position:fixed;display:none;z-index:2147483647;background:#ffffff;color:#0C576F;padding:8px 12px;border-radius:8px;border:2px solid #2db8d4;font-family:'Nunito',system-ui,sans-serif;font-size:13px;font-weight:700;max-width:250px;box-shadow:0 4px 15px rgba(0,0,0,0.25);pointer-events:none;line-height:1.3;opacity:0;transition:opacity 0.12s cubic-bezier(0.4,0,0.2,1);";
document.body.appendChild(
tooltipEl
);
let tipFor = null,
tipMove = e => {
let t = tipFor;
if (t) {
if (!(t.contains(e.target) || t.isConnected && t.matches(":focus-visible") && t.getClientRects()
.length)) hide();
}
};
let show = target => {
let text = target.getAttribute("data-tooltip");
if (!text) return;
tipFor = target;
document.addEventListener("mousemove", tipMove, true);
if (document.body.lastElementChild !== tooltipEl) document.body.appendChild(tooltipEl);
tooltipEl.textContent = text;
tooltipEl.style.display = "block";
let rect = target.getBoundingClientRect();
let tooltipRect = tooltipEl
.getBoundingClientRect();
let vb = window.__ssbViewBox();
let left = rect.left + (rect.width - tooltipRect.width) / 2;
let top = rect.top - tooltipRect.height - 8;
if (left < vb.left + 10) left = vb.left + 10;
if (left + tooltipRect.width > vb.left + vb.width - 10) left = vb.left + vb.width - tooltipRect
.width - 10;
if (top < vb.top + 10) top = rect.bottom + 8;
top = Math.max(vb.top + 10, Math.min(top, vb.top + vb.height - tooltipRect.height -
10
));
let tz = parseFloat(getComputedStyle(tooltipEl).zoom) || 1;
tooltipEl.style.left = (left - vb.left) / tz + "px";
tooltipEl.style.top = (top - vb.top) / tz + "px";
tooltipEl.style.opacity = "1"
},
hide = () => {
tipFor = null;
document.removeEventListener("mousemove", tipMove, true);
if (tooltipEl.style.opacity === "0") return;
tooltipEl.style.opacity = "0";
let onTransitionEnd = () => {
if (tooltipEl.style.opacity === "0") tooltipEl.style.display = "none";
tooltipEl
.removeEventListener("transitionend", onTransitionEnd);
};
tooltipEl.addEventListener("transitionend", onTransitionEnd)
};
document.body.addEventListener("mouseover", e => {
let target = e.target.closest("[data-tooltip]");
if (target) show(target);
});
document.body.addEventListener("mouseout", e => {
if (e.target.closest("[data-tooltip]")) hide();
});
document.addEventListener("mousedown", hide, true);
window.addEventListener("keydown", e => {
if (e.key === "Escape") hide();
}, true);
document.addEventListener("focusin", e => {
let t = e.target;
if (t && t.matches && t.matches("[data-tooltip]:focus-visible")) show(t);
});
document.addEventListener("focusout", e => {
let t = e.target;
if (t && t.matches && t.matches("[data-tooltip]")) hide();
})
};
if (document.body) initTooltip();
else document.addEventListener("DOMContentLoaded", initTooltip);
function xhMini(o, budget) {
o = _withDot(o);
let n = o.armLength * o.armScale,
i = o.armWidth * o.armScale,
aw = Math.min(.05 * o.armScale, .3 * i).toFixed(4);
let r =
`position:absolute;transform-origin:50% ${-(o.armGap || 0)}px;top:${o.armGap || 0}px;left:calc(-${(i / 2).toFixed(4)}em);width:${i}em;height:${n}em;background:${o.armColor};background-clip:${o.armOutlineEnabled === false ? "padding-box" : "border-box"};border:solid ${aw}em ${o.armOutlineEnabled === false ? "transparent" : o.armBorder};opacity:${o.armOpacity};box-sizing:border-box;z-index:1;`;
let s = "";
if (!o.hideDot) {
if (o.dotShape === "still") {
let l = o.staticOutlineEnabled ? `solid 0.05em ${o.staticBorder}` : "none";
let d =
`position:absolute;transform-origin:50% -${o.staticGap}px;top:${o.staticGap}px;left:calc(-${o.staticWidth / 2}em);width:${o.staticWidth}em;height:${o.staticLength}em;background:${o.staticColor};border:${l};opacity:${o.staticOpacity};box-sizing:border-box;`;
s =
`<div style="position:absolute;top:0;left:0;width:0;height:0;transform:scale(${o.stillScale});z-index:2;"><div style="${d}transform:rotate(0deg);"></div><div style="${d}transform:rotate(90deg);"></div><div style="${d}transform:rotate(180deg);"></div><div style="${d}transform:rotate(270deg);"></div></div>`;
} else {
s = o.dotShape === "plus" ?
`<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(${o.plusScale});font-size: 24px;opacity:${o.dotOpacity};width:0;height:0;background:none;border:none;z-index:2;"><div style="position:absolute;background:${o.dotColor};top:50%;left:50%;width:${o.dotPlusWidth}px;height:${o.dotPlusLen}px;transform:translate(-50%,-50%) rotate(90deg);"></div><div style="position:absolute;background:${o.dotColor};top:50%;left:50%;width:${o.dotPlusWidth}px;height:${o.dotPlusLen}px;transform:translate(-50%,-50%);"></div></div>` :
`<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(${o.dotScale});font-size: 24px;opacity:${o.dotOpacity};box-sizing:border-box;width:${_dsz(o)}em;height:${_dsz(o)}em;background:${o.dotColor};border:solid ${_dbw(o)}em ${o.dotOutlineEnabled === false ? "transparent" : _dbc(o)};background-clip:${o.dotOutlineEnabled === false ? "padding-box" : "border-box"};border-radius:${o.dotRound ? "100%" : "0"};z-index:2;"></div>`;
}
}
let c = o.hideCrosshair ? "" :
`<div style="${r}transform:rotate(0deg);"></div><div style="${r}transform:rotate(90deg);"></div><div style="${r}transform:rotate(180deg);"></div><div style="${r}transform:rotate(270deg);"></div>`;
let extPx = 10;
if (!o.hideCrosshair) extPx = Math.max(extPx, 2 * (n * 24 + (o.armGap || 0)));
if (!o.hideDot) {
if (o.dotShape === "still") extPx = Math.max(extPx, 2 * ((o.staticGap + o.staticLength * 24) * o
.stillScale));
else if (o.dotShape === "plus") extPx = Math.max(extPx, 2 * o.dotPlusLen * o.plusScale);
else extPx = Math.max(extPx, o.armWidth * 24 * o.dotScale);
}
let fit = Math.min(0.85, budget / extPx);
return `<div style="position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;overflow:hidden;"><div style="position:relative;width:0;height:0;font-size: 24px;transform:rotate(${o.armRotation}deg) scale(${fit.toFixed(3)});">${c}${s}</div></div>`;
}
! function() {
const KEY = "ssb-intro",
FIRST = !!window.__ssbFirstRun,
STEPS = 3;
const lsGet = k => {
try {
return localStorage.getItem(k)
} catch (e) {
return null
}
};
const lsSet = (k, v) => {
try {
localStorage.setItem(k, v)
} catch (e) {
window.__ssbErr("intro#1", e)
}
};
const snd = n => {
try {
if (window.BAWK && window.BAWK.play) window.BAWK.play(n);
} catch (e) {
window.__ssbErr("intro#2", e)
}
};
const el = (tag, cls, text) => {
let e = document.createElement(tag);
if (cls) e.className = cls;
if (text != null) e.textContent = text;
return e
};
const STARTERS = [
["Default", {}],
["Techno", {
armWidth: .25,
dotShape: "still",
staticColor: "#00fffb",
staticBorder: "#00ffee",
staticWidth: .25,
staticGap: 6,
staticOutlineEnabled: false,
stillScale: .45
}],
["Green Dot", {
dotColor: "#00ff2a"
}],
["No Hair", {
hideCrosshair: true
}],
["No Center Dot", {
hideDot: true
}]
].map(([n, o]) => [n, Object.assign({}, B, o, {
enabled: true
})]);
const PICKS = [
["tp-smartDetail", "Smart Auto Detail",
"Lowers the resolution when your FPS drops under 40, and raises it again once it recovers."
],
["tp-showServerList", "Server Picker",
"Adds a server region picker with live ping to the home screen, beside Game Mode."
],
["tp-infiniteChat", "Infinite Chat History",
"Keeps the whole match's chat, so you can scroll up and read it back."
],
["tp-autoFullscreen", "Auto Fullscreen", "Goes fullscreen like F11 when you click into a match."]
];
let cur = null;
function due() {
let s = lsGet(KEY);
return s === "pending" || (s === null && FIRST)
}
function setting(key) {
let r = _ssbCore.find(x => x[2] === key);
if (r) return {
get: () => !!d[r[0]][r[1]],
set: v => {
d[r[0]][r[1]] = v;
localStorage.setItem(key, JSON.stringify(v));
if (key === "tp-showServerList" && !v) {
let e = document.querySelector(".mod-server-clone");
if (e) e.remove();
}
if (window.__ssbSettingsFeedback) window.__ssbSettingsFeedback();
document.dispatchEvent(
new Event("ssb:settings-change"));
}
};
let it = window.__ssbSettings.items.find(x => x.key === key);
return it ? {
get: () => !!it.get(),
set: v => it.set(v)
} : null;
}
const sameXh = (a, b) => Object.keys(B).every(k => k === "enabled" || a[k] === b[k]);
function starterList() {
let all = N();
return STARTERS.map(([n, o]) => [n, all[n] && typeof all[n] == "object" ? Object.assign(_withDot(all[n]), {
enabled: true
}) : o]);
}
function seedStarters() {
if (localStorage.getItem("ch2-starterSeeded") === "2") return;
try {
let all = N(),
mine = PO(all),
names = STARTERS.map(x => x[0]);
STARTERS.forEach(([n, o]) => {
if (!all[n]) all[n] = Object.assign({}, o);
});
Object.keys(all).forEach(k => {
if (all[k] && typeof all[k] == "object") all[k].enabled = true;
});
M(all);
PS(names.concat(mine.filter(n => !names.includes(n))));
if (!z()) {
let def = _withDot(all.Default);
if (Object.keys(B).every(k => k === "enabled" || A[k] === def[k])) O("Default");
}
} catch (e) {
window.__ssbErr("intro.seed", e)
}
localStorage.setItem("ch2-starterSeeded", "2");
}
function useXh(t) {
let o, name;
if (t.keep) {
o = t.snap.a;
name = t.snap.z;
} else {
seedStarters();
let all = N();
if (!all[t.name]) {
all[t.name] = Object.assign({}, STARTERS.find(x => x[0] === t.name)[1]);
M(all);
PS(PO(all));
}
o = Object.assign(_withDot(all[t.name]), {
enabled: true
});
name = t.name;
}
let prev = Object.assign({}, A);
Object.assign(A, o);
Object.keys(A).forEach(k => {
if (prev[k] !== A[k]) F(k, A[k]);
});
O(name);
if (window.__ssbChRebuild) window.__ssbChRebuild();
else {
G();
Y();
}
}
function xhTiles() {
let list = starterList(),
z0 = z(),
snap = {
a: Object.assign({}, A),
z: z0
};
let hit = A.enabled ? list.find(([n, o]) => n === z0 && sameXh(A, o)) || list.find(([, o]) => sameXh(A,
o)) : null;
let tiles = list.map(([n, o]) => ({
name: n,
o: o,
on: !!hit && hit[0] === n
}));
if (!hit) {
let p = z0 && N()[z0],
name = !A.enabled ? "Game's own" : p && typeof p == "object" && sameXh(A, _withDot(p)) ? z0 :
"Current";
tiles.unshift({
name: name,
o: A.enabled ? Object.assign({}, A) : Object.assign({}, B),
keep: true,
snap: snap,
on: true
});
}
return tiles;
}
function openTab(id) {
let t = document.getElementById(id);
if (!(t && t.offsetParent)) try {
if (window.vueApp && typeof window.vueApp.showSettingsPopup == "function") window.vueApp
.showSettingsPopup();
} catch (e) {
window.__ssbErr("intro#3", e)
}
let t0 = Date.now(),
tick = () => {
let b = document.getElementById(id);
if (b && b.offsetParent) b.click();
else {
if (Date.now() - t0 < 4e3) setTimeout(tick, 100);
}
};
tick();
}
function css() {
if (document.getElementById("ssb-intro-style")) return;
let s = el("style");
s.id = "ssb-intro-style";
s.textContent = `#ssb-intro-overlay { position:fixed; inset:0; z-index:2147483647; display:flex; align-items:center; justify-content:center; padding:18px; box-sizing:border-box; background:rgba(7,39,52,0.62); backdrop-filter:blur(2px); font-family:"Nunito",system-ui,sans-serif; }
#ssb-intro-panel { width:min(660px,100%); max-height:min(760px,calc((100vh - 36px) / var(--ssb-ui-scale, 1))); display:flex; flex-direction:column; overflow:hidden; box-sizing:border-box; background:var(--ssb-panel); border:4px solid var(--ssb-blue); border-radius:8px; box-shadow:0 18px 42px rgba(0,0,0,0.36); color:var(--ssb-ink); font-family:"Nunito",system-ui,sans-serif; text-align:left; animation:ssb-intro-in 0.16s ease-out; }
#ssb-intro-panel * { box-sizing:border-box; font-size:inherit; letter-spacing:normal; }
#ssb-intro-panel [hidden] { display:none !important; }
#ssb-intro-panel .ssb-intro-head { flex:none; display:flex; align-items:center; justify-content:space-between; gap:16px; padding:18px 22px 16px; background:#1196B8; border-bottom:4px solid var(--ssb-blue); }
#ssb-intro-panel .ssb-intro-kicker { margin:0 0 3px; font-size:12px; line-height:1.2; font-weight:900; text-transform:uppercase; color:#BDF6FF; }
#ssb-intro-panel h2 { margin:0; font-family:"Sigmar One",system-ui,sans-serif; font-size:30px; line-height:1.1; color:#fff; text-shadow:0 3px 0 rgba(12,87,111,0.45); }
#ssb-intro-panel .ssb-intro-version { flex:0 0 auto; min-width:76px; padding:8px 12px; border:3px solid #fff; border-radius:8px; background:var(--ssb-orange); color:#fff; text-align:center; font-size:18px; font-weight:900; box-shadow:inset 0 -4px 0 rgba(0,0,0,0.14); }
#ssb-intro-panel .ssb-intro-body { flex:1 1 auto; min-height:0; overflow:auto; padding:16px 18px 16px; }
#ssb-intro-panel .ssb-intro-steps { display:grid; }
#ssb-intro-panel .ssb-intro-step { grid-area:1 / 1; min-width:0; }
#ssb-intro-panel .ssb-intro-step:not(.on) { visibility:hidden; }
#ssb-intro-panel .ssb-intro-step.on { animation:ssb-intro-step 0.2s ease-out; }
#ssb-intro-panel .ssb-intro-title { margin:0; font-family:"Sigmar One",sans-serif; font-weight:normal; font-size:22px; line-height:1.15; text-transform:uppercase; color:var(--ssb-ink); }
#ssb-intro-panel .ssb-intro-sub { margin:5px 0 14px; font-size:13.5px; font-weight:700; line-height:1.3; color:rgba(12,87,111,0.72); }
#ssb-intro-panel .ssb-intro-list { display:grid; gap:10px; }
#ssb-intro-panel .ssb-intro-card { position:relative; display:grid; grid-template-columns:minmax(0,1fr) auto; grid-template-areas:"name ctl" "desc ctl"; align-items:center; column-gap:14px; row-gap:3px; min-height:66px; margin:0; padding:12px 14px; border:1px solid rgba(255,255,255,0.5); border-radius:14px; background:rgba(255,255,255,0.24); box-shadow:inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 6px rgba(8,62,84,0.06); transition:background 0.15s, border-color 0.15s, box-shadow 0.15s, transform 0.15s; }
#ssb-intro-panel label.ssb-intro-card { cursor:pointer; }
#ssb-intro-panel label.ssb-intro-card:hover { background:rgba(255,255,255,0.42); box-shadow:inset 0 1px 0 rgba(255,255,255,0.6), 0 8px 18px rgba(8,62,84,0.12); transform:translateY(-1px); }
#ssb-intro-panel .ssb-intro-card:has(input:checked) { background:rgba(255,255,255,0.4); border-color:rgba(255,152,31,0.6); }
#ssb-intro-panel .ssb-intro-name { grid-area:name; font-size:16.5px; font-weight:800; line-height:1.25; color:var(--ssb-ink); }
#ssb-intro-panel .ssb-intro-desc { grid-area:desc; min-width:0; font-size:12.5px; font-weight:600; line-height:1.35; color:rgba(12,87,111,0.72); }
#ssb-intro-panel .ssb-intro-ctl { grid-area:ctl; display:flex; align-items:center; gap:8px; }
#ssb-intro-panel .ssb-intro-card input { position:absolute; top:0; left:0; width:1px; height:1px; margin:0; opacity:0; pointer-events:none; }
#ssb-intro-panel .ssb-intro-switch { grid-area:ctl; position:relative; width:46px; height:26px; border-radius:999px; background:rgba(12,87,111,0.22); box-shadow:inset 0 2px 4px rgba(8,62,84,0.28); transition:background 0.18s, box-shadow 0.18s; }
#ssb-intro-panel .ssb-intro-switch::after { content:""; position:absolute; top:3px; left:3px; width:20px; height:20px; border-radius:50%; background:#fff; box-shadow:0 2px 5px rgba(0,0,0,0.25); transition:transform 0.2s cubic-bezier(0.3,1.4,0.6,1); }
#ssb-intro-panel input:checked + .ssb-intro-switch { background:linear-gradient(180deg,#ffb23f 0%,#ff961d 100%); box-shadow:inset 0 1px 2px rgba(0,0,0,0.15), 0 0 0 1px #cf700c; }
#ssb-intro-panel input:checked + .ssb-intro-switch::after { transform:translateX(20px); }
#ssb-intro-panel input:focus-visible + .ssb-intro-switch { outline:3px solid var(--ssb-focus); outline-offset:2px; }
#ssb-intro-panel .ssb-intro-btn { display:inline-flex; align-items:center; justify-content:center; height:36px; min-width:76px; margin:0; padding:0 14px; border:0; border-radius:10px; background:#fff; color:var(--ssb-ink); font-family:"Nunito",system-ui,sans-serif; font-size:15px; font-weight:800; line-height:1; text-decoration:none; text-transform:none; white-space:nowrap; cursor:pointer; box-shadow:inset 0 1px 3px rgba(8,62,84,0.16); transition:background 0.12s, box-shadow 0.12s; }
#ssb-intro-panel .ssb-intro-btn:hover { background:#F5FDFF; box-shadow:inset 0 1px 3px rgba(8,62,84,0.16), 0 0 0 2px rgba(14,118,151,0.35); }
#ssb-intro-panel .ssb-intro-key { width:120px; font-weight:700; text-transform:capitalize; }
#ssb-intro-panel .ssb-intro-key.listening { background:var(--ssb-card); box-shadow:inset 0 0 0 2px var(--ssb-muted); text-transform:none; }
#ssb-intro-panel .ssb-intro-xhs { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:14px; }
#ssb-intro-panel .ssb-intro-xh { display:flex; flex-direction:column; gap:9px; min-width:0; margin:0; padding:10px; border:1px solid rgba(255,255,255,0.5); border-radius:14px; background:rgba(255,255,255,0.24); box-shadow:inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 6px rgba(8,62,84,0.08); color:var(--ssb-ink); font-family:"Nunito",system-ui,sans-serif; text-transform:none; cursor:pointer; transition:background 0.15s, border-color 0.15s, box-shadow 0.15s, transform 0.15s; }
#ssb-intro-panel .ssb-intro-xh:hover { background:rgba(255,255,255,0.42); box-shadow:inset 0 1px 0 rgba(255,255,255,0.6), 0 8px 18px rgba(8,62,84,0.14); transform:translateY(-2px); }
#ssb-intro-panel .ssb-intro-xh:active { transform:none; }
#ssb-intro-panel .ssb-intro-xh[aria-pressed="true"] { border-color:rgba(255,152,31,0.9); background:rgba(255,255,255,0.45); box-shadow:0 0 0 2px #ff981f, 0 8px 18px rgba(247,147,30,0.22); }
#ssb-intro-panel .ssb-intro-xh-view { position:relative; display:block; width:100%; height:104px; border-radius:10px; overflow:hidden; background:#87ceeb; box-shadow:inset 0 0 0 1px rgba(12,87,111,0.12); }
#ssb-intro-panel .ssb-intro-xh-view div:not([style*="font-size"]) { font-size:inherit !important; }
#ssb-intro-panel .ssb-intro-xh-name { display:block; font-size:13px; font-weight:800; line-height:1.2; text-align:center; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
#ssb-intro-panel .ssb-intro-xh[aria-pressed="true"] .ssb-intro-xh-name { color:#c46a00; }
#ssb-intro-panel .ssb-intro-foot { flex:none; display:flex; align-items:center; justify-content:space-between; gap:12px; padding:12px 18px 18px; background:rgba(255,255,255,0.18); border-top:2px solid rgba(14,118,151,0.22); }
#ssb-intro-panel .ssb-intro-skip { margin:0; padding:6px 2px; border:0; background:none; color:var(--ssb-muted); font-family:"Nunito",system-ui,sans-serif; font-size:14px; font-weight:800; text-decoration:underline; text-underline-offset:3px; text-transform:none; cursor:pointer; }
#ssb-intro-panel .ssb-intro-skip:hover { color:var(--ssb-ink); }
#ssb-intro-panel:focus { outline:none; }
#ssb-intro-panel .ssb-intro-nav { display:flex; gap:10px; margin-left:auto; }
#ssb-intro-panel .ssb-intro-nav button { height:46px; min-width:120px; margin:0; padding:0 22px; border:3px solid var(--ssb-blue); border-radius:8px; background:#fff; color:var(--ssb-ink); font-family:"Nunito",system-ui,sans-serif; font-size:18px; font-weight:900; text-transform:none; cursor:pointer; box-shadow:inset 0 -4px 0 rgba(14,118,151,0.16); }
#ssb-intro-panel .ssb-intro-nav button:hover { background:#F5FDFF; }
#ssb-intro-panel .ssb-intro-nav .ssb-intro-next { min-width:150px; background:var(--ssb-blue); color:#fff; text-shadow:0 1px 0 rgba(0,0,0,0.2); box-shadow:inset 0 -4px 0 rgba(0,0,0,0.16); }
#ssb-intro-panel .ssb-intro-nav .ssb-intro-next:hover { background:#1186AB; }
#ssb-intro-panel :is(.ssb-intro-nav button, .ssb-intro-skip, .ssb-intro-btn, .ssb-intro-xh):focus-visible { outline:3px solid var(--ssb-focus); outline-offset:2px; }
@keyframes ssb-intro-in { from { opacity:0; transform:scale(0.97); } to { opacity:1; transform:none; } }
@keyframes ssb-intro-step { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:none; } }
@media (max-width:560px) {
#ssb-intro-panel .ssb-intro-head { align-items:flex-start; padding:16px; }
#ssb-intro-panel h2 { font-size:24px; }
#ssb-intro-panel .ssb-intro-version { min-width:62px; padding:7px 9px; font-size:15px; }
#ssb-intro-panel .ssb-intro-body { padding:12px; }
#ssb-intro-panel .ssb-intro-xhs { grid-template-columns:repeat(2,minmax(0,1fr)); }
#ssb-intro-panel .ssb-intro-nav button { min-width:96px; padding:0 14px; }
}
@media (prefers-reduced-motion: reduce) {
#ssb-intro-panel, #ssb-intro-panel .ssb-intro-step.on { animation:none; }
#ssb-intro-panel * { transition:none !important; }
}
`;
(document.head || document.documentElement).appendChild(s);
}
function open(auto) {
if (cur || !document.body || document.pointerLockElement) return false;
css();
let step = 0,
listening = false,
done = false,
prevFocus = document.activeElement;
let ov = el("div"),
panel = el("div"),
head = el("div", "ssb-intro-head"),
hl = el("div"),
kick = el("p", "ssb-intro-kicker"),
title = el("h2", null, "Better HUD");
ov.id = "ssb-intro-overlay";
panel.id = "ssb-intro-panel";
title.id = "ssb-intro-h";
panel.setAttribute("role", "dialog");
panel.setAttribute("aria-modal", "true");
panel.setAttribute(
"aria-labelledby", "ssb-intro-h");
kick.setAttribute("aria-live", "polite");
panel.tabIndex = -
1;
hl.append(kick, title);
head.append(hl, el("div", "ssb-intro-version", "v" + String(window.SSB_VERSION)
.split(".").slice(0, 2).join(".")));
let body = el("div", "ssb-intro-body"),
steps = el("div", "ssb-intro-steps");
body.appendChild(steps);
const page = (t, sub) => {
let s = el("div", "ssb-intro-step");
s.append(el("h3", "ssb-intro-title", t), el("p", "ssb-intro-sub", sub));
steps.appendChild(s);
return s
};
const card = (tag, name, desc) => {
let c = el(tag, "ssb-intro-card");
c.append(el("span", "ssb-intro-name", name), el("span", "ssb-intro-desc", desc));
return c
};
let s1 = page("Quick setup", "Switch on what you like. These and many more are in Settings ▸ MODS."),
l1 = el("div", "ssb-intro-list");
PICKS.forEach(([key, name, desc]) => {
let st = setting(key);
if (!st) return;
let c = card("label", name, desc),
cb = el("input"),
sw = el("span", "ssb-intro-switch");
cb.type = "checkbox";
cb.checked = st.get();
c.setAttribute("data-setting", key);
cb.addEventListener("change", () => {
snd("ui_onchange");
st.set(cb.checked);
cb.checked = st.get();
let m = document.querySelector('#mod-settings-section [data-setting="' + key +
'"] input[type=checkbox]');
if (m) m.checked = cb.checked;
});
c.append(cb, sw);
l1.appendChild(c);
});
s1.appendChild(l1);
let tl = xhTiles(),
kp = tl.find(t => t.keep);
let s2 = page("Pick a crosshair", (kp ? "Choose a starter, or keep " + (kp.name === "Game's own" ?
"the game's own" : "yours") + "." : "Choose a starter.") +
" Build your own any time in Settings ▸ CROSSHAIR."),
g2 = el("div", "ssb-intro-xhs");
tl.forEach(t => {
let b = el("button", "ssb-intro-xh"),
v = el("span", "ssb-intro-xh-view");
b.type = "button";
b.setAttribute("aria-pressed", t.on ? "true" : "false");
b.setAttribute(
"data-xh", t.name);
if (t.keep) b.setAttribute("data-keep", "1");
v.innerHTML = xhMini(t.o, 70);
b.append(v, el("span", "ssb-intro-xh-name", t.name));
b.addEventListener("click", () => {
if (b.getAttribute("aria-pressed") === "true") return;
snd("ui_click");
try {
useXh(t)
} catch (e) {
window.__ssbErr("intro#4", e)
}
g2.querySelectorAll(".ssb-intro-xh").forEach(x => x.setAttribute("aria-pressed",
x === b ? "true" : "false"));
});
g2.appendChild(b);
});
s2.appendChild(g2);
let s3 = page("Where things are",
"Better HUD adds two tabs to the game's Settings, and a key for your match stats."),
l3 = el("div", "ssb-intro-list");
const info = (name, desc, ...ctls) => {
let c = card("div", name, desc),
k = el("span", "ssb-intro-ctl");
k.append(...ctls);
c.appendChild(k);
l3.appendChild(c);
return c
};
let oMods = el("button", "ssb-intro-btn", "Open"),
oXh = el("button", "ssb-intro-btn", "Open"),
kb = el("button", "ssb-intro-btn ssb-intro-key");
let dc = el("a", "ssb-intro-btn", "Discord"),
yt = el("a", "ssb-intro-btn", "YouTube");
[oMods, oXh, kb].forEach(x => x.type = "button");
oMods.setAttribute("aria-label", "Open the MODS tab");
oXh.setAttribute("aria-label",
"Open the CROSSHAIR tab");
dc.href = window.SSB_DISCORD;
yt.href = window.SSB_YOUTUBE;
[dc, yt].forEach(a => {
a.target = "_blank";
a.rel = "noopener";
a.addEventListener("click", () => snd("ui_click"));
});
info("MODS tab", "Every Better HUD switch, with a search box. Back up or share your settings under Manage.",
oMods).setAttribute("data-info", "mods");
info("CROSSHAIR tab", "Make your own crosshair, save it as a profile, and share it as a code.", oXh)
.setAttribute("data-info", "crosshair");
info("Match Stats",
"Press this key in a match for your kills, deaths and KDR. Out of a match, it opens Match History.",
kb).setAttribute("data-info", "stats");
info("Discord & YouTube", "Help, bug reports and news on the Discord, and videos on the YouTube channel.",
dc, yt).setAttribute("data-info", "links");
s3.appendChild(l3);
const keyName = k => k ? k === " " ? "Space" : k : "None";
const paintKey = () => {
kb.textContent = listening ? "Press a key…" : keyName(d.stats.hotkey);
kb.setAttribute("aria-label",
"Stats Hotkey: " + keyName(d.stats.hotkey) + ". Press to change.");
};
const listen = on => {
listening = on;
kb.classList.toggle("listening", on);
paintKey();
};
const setKey = k => {
let row = document.querySelector('#mod-settings-section [data-setting="tp-statsHotkey"]');
if (row && row.__ssbSet) row.__ssbSet(k);
else {
d.stats.hotkey = k;
localStorage.setItem("tp-statsHotkey", k);
document.dispatchEvent(
new Event("ssb:settings-change"));
}
};
kb.addEventListener("click", () => listen(!listening));
paintKey();
let foot = el("div", "ssb-intro-foot"),
nav = el("div", "ssb-intro-nav"),
skip = el("button", "ssb-intro-skip", "Skip setup"),
back = el("button", "ssb-intro-back", "Back"),
next = el("button", "ssb-intro-next", "Next");
[skip, back, next].forEach(x => x.type = "button");
nav.append(back, next);
foot.append(skip, nav);
panel.append(head, body, foot);
ov.appendChild(panel);
let pages = [s1, s2, s3];
function go(n) {
if (listening) listen(false);
step = Math.max(0, Math.min(STEPS - 1, n));
pages.forEach((s, i) => {
s.classList.toggle("on", i === step);
s.setAttribute("aria-hidden", i === step ? "false" :
"true");
});
kick.textContent = "Welcome · Step " + (step + 1) + " of " + STEPS;
back.hidden = step === 0;
skip.hidden = step === STEPS - 1;
next.textContent = step === STEPS - 1 ?
"Done" : "Next";
body.scrollTop = 0;
let f = document.activeElement;
if ((!f || !panel.contains(f) || f.hidden || f.closest(".ssb-intro-step:not(.on)"))) next.focus({
preventScroll: true
});
}
function finish(how) {
if (done) return;
done = true;
if (listening) listen(false);
window.removeEventListener("keydown", onKey, true);
window.removeEventListener("keyup", swallow, true);
window.removeEventListener("keypress", swallow, true);
window.removeEventListener("blur", unlisten);
ov.remove();
cur = null;
lsSet(KEY, "done");
if ((auto || FIRST) && window.__ssbChangelog) window.__ssbChangelog
.markSeen();
if (auto && how === "skip" && window.__ssbUI) window.__ssbUI.toast(
"You can open the Welcome Guide again from Settings ▸ MODS ▸ Manage.");
try {
if (prevFocus && prevFocus.isConnected && prevFocus.focus) prevFocus.focus({
preventScroll: true
});
} catch (e) {
window.__ssbErr("intro#5", e)
}
}
function swallow(e) {
e.stopPropagation()
}
function onKey(e) {
e.stopPropagation();
if (listening) {
e.preventDefault();
if (e.key === "Escape") {
window.__ssbEatKeyUp("Escape");
listen(false);
return
}
if (/^(Shift|Control|Alt|Meta|AltGraph|CapsLock|Dead|Unidentified)$/.test(e.key)) return;
window.__ssbEatKeyUp(e.key);
setKey(e.key);
listen(false);
return;
}
let f = document.activeElement;
if (e.key === "Escape") {
e.preventDefault();
window.__ssbEatKeyUp("Escape");
finish("skip");
} else if (e.key === "Enter" && !e.isComposing) {
e.preventDefault();
window.__ssbEatKeyUp("Enter");
if (f && /^(BUTTON|A)$/.test(f.tagName) && panel.contains(f)) f.click();
else next.click();
} else if (e.key === "Tab") {
e.preventDefault();
let list = [].slice.call(panel.querySelectorAll(
".ssb-intro-step.on :is(input, button, a[href]), .ssb-intro-foot button")).filter(x => !x
.hidden && !x.disabled),
i = list.indexOf(f);
let nx = list[i < 0 ? (e.shiftKey ? list.length - 1 : 0) : (i + (e.shiftKey ? -1 : 1) + list
.length) % list.length];
if (nx) nx.focus();
} else if ((e.key === "ArrowLeft" || e.key === "ArrowRight") && f && f.classList.contains(
"ssb-intro-xh")) {
e.preventDefault();
let t = [].slice.call(g2.children),
i = t.indexOf(f);
t[(i + (e.key === "ArrowRight" ? 1 : -1) + t.length) % t.length].focus();
}
}
back.addEventListener("click", () => {
snd("ui_click");
go(step - 1);
});
next.addEventListener("click", () => {
snd("ui_click");
if (step === STEPS - 1) finish("done");
else go(step + 1);
});
skip.addEventListener("click", () => {
snd("ui_click");
finish("skip");
});
oMods.addEventListener("click", () => {
snd("ui_click");
finish("done");
openTab("mod-settings-tab");
});
oXh.addEventListener("click", () => {
snd("ui_click");
finish("done");
openTab("mod-crosshair-tab");
});
function unlisten() {
if (listening) listen(false);
}
ov.addEventListener("mousedown", e => {
if (!kb.contains(e.target)) unlisten();
}, true);
window.addEventListener("keydown", onKey, true);
window.addEventListener("keyup", swallow, true);
window
.addEventListener("keypress", swallow, true);
window.addEventListener("blur", unlisten);
cur = {
finish: finish
};
if (auto) lsSet(KEY, "pending");
document.body.appendChild(ov);
panel.focus({
preventScroll: true
});
go(0);
snd("ui_popupopen");
return true;
}
function schedule() {
if (cur || !due()) return;
let run = () => setTimeout(() => {
if (cur || !due()) return;
try {
open(true)
} catch (e) {
window.__ssbErr("intro#6", e);
lsSet(KEY, "done");
}
}, 1200);
if (document.body) run();
else document.addEventListener("DOMContentLoaded", run, {
once: true
});
}
document.addEventListener("pointerlockchange", () => {
if (!document.pointerLockElement) schedule();
});
window.__ssbIntro = {
due: due,
busy: () => !!cur || due(),
open: () => open(false),
close: () => {
if (cur) cur.finish("skip");
}
};
schedule();
}();
}();
(function() {
if (!document.getElementById('harmonized-ui-overrides')) {
const style = document.createElement('style');
style.id = 'harmonized-ui-overrides';
style.textContent = `/* Remove canvas focus outline (white ring on play) */
#canvas, #canvas:focus, #canvas:focus-visible { outline: none !important; -webkit-tap-highlight-color: transparent !important; }
/* Fix Manage-section button heights */
/* Force the blue (ch2-profile-btn) and red (ch2-reset-btn) buttons to match */
#mod-settings-section .ch2-profile-btn,
#mod-settings-section .ch2-reset-btn,
.ch2-profile-btn, .ch2-reset-btn {
height: 40px !important;
font-size: 14px !important;
box-sizing: border-box !important;
display: inline-flex !important;
align-items: center !important;
justify-content: center !important;
}

#mod-crosshair-section .ch2-preview-col {
gap: 0px !important;
overflow-y: auto !important;
scrollbar-width: none !important; /* Hide scrollbar for a clean look */
flex: 0 0 calc(40% - 15px) !important;
}
#mod-crosshair-section .ch2-right-col {
overflow-y: auto !important;
padding-bottom: 40px !important;
flex: 0 0 calc(60% - 15px) !important;
}
#mod-crosshair-section .ch2-preview-col .ch2-group-card {
padding: 6px 10px !important;
margin-bottom: 6px !important;
}
#mod-crosshair-section .ch2-preview-col .ch2-card-title {
font-size: 13px !important;
margin-bottom: 4px !important;
}
#mod-crosshair-section .ch2-preview-wrap {
height: 160px !important;
margin-bottom: 4px !important;
}
#mod-crosshair-section .ch2-preview-col .ch2-control-row {
margin-bottom: 0px !important;
gap: 8px !important;
}
#mod-crosshair-section .ch2-preview-col .ch2-color {
width: 38px !important;
height: 24px !important;
border-radius: 5px !important;
}
#mod-crosshair-section .ch2-preview-col .ch2-hex {
width: 68px !important;
height: 24px !important;
font-size: 12px !important;
padding: 0 4px !important;
border-width: 1.5px !important;
border-radius: 5px !important;
}
#mod-crosshair-section .ch2-preview-col .ch2-icon-bar {
margin-top: 6px !important;
margin-bottom: 0px !important;
}

/* GALLERY button in the crosshair Profiles card */
#ch2-open-gallery-btn { height:51px !important; width:100% !important; margin:0 !important; padding:0 10px !important; border:none !important; border-radius:6px !important; outline:none !important; background:var(--ssb-yolk) !important; box-shadow:0 3px 0 var(--ssb-yolk-shadow) !important; color:#fff !important; font-family:"Nunito",system-ui,sans-serif !important; font-size:14px !important; font-weight:800 !important; letter-spacing:0.3px !important; text-transform:uppercase !important; white-space:nowrap !important; text-shadow:0 1px 2px rgba(0,0,0,0.3) !important; cursor:pointer !important; transition:all 0.1s !important; display:flex !important; align-items:center !important; justify-content:center !important; flex-direction:column !important; gap:2px !important; box-sizing:border-box !important; }
#ch2-open-gallery-btn:hover { background:var(--ssb-yolk-hi) !important; box-shadow:0 3px 0 #b33e00 !important; }
#ch2-open-gallery-btn:active { transform:translateY(2px) !important; box-shadow:0 1px 0 #b33e00 !important; }

/* Preview background swatches (Preview card title row) */
#mod-crosshair-section .ch2-bg-swatches { display:flex; align-items:center; gap:5px; }
#mod-crosshair-section .ch2-bg-swatch { width:18px; height:18px; margin:0; padding:0; border:2px solid #fff; border-radius:50%; box-shadow:0 0 0 1.5px rgba(12,87,111,0.45); cursor:pointer; transition:transform 0.1s; }
#mod-crosshair-section .ch2-bg-swatch:hover { transform:scale(1.15); }

/* Crosshair previews (live preview, gallery cards, mini selector) are drawn in em from a 24px wrapper. The game's
"* { font-size: 1.95vh }" would otherwise give every arm its own screen-height-based size, so arms looked twice as
big at 1440p/100% as at 720p or 200% scaling. Only elements without their own font-size inherit. */
:is(#ch2-preview-wrap, .ch2-gallery-mini-preview, .ch2-mini-tile) div:not([style*="font-size"]) { font-size: inherit !important; }
/* Mini profile selector (Profiles card) */
#mod-crosshair-section .ch2-mini-row { display:flex; gap:6px; margin:8px 0 0; min-width:0; }
#mod-crosshair-section .ch2-mini-row[hidden] { display:none; }
#mod-crosshair-section .ch2-mini-tile, #mod-crosshair-section .ch2-mini-more { flex:0 0 44px; width:44px; height:44px; margin:0; padding:0; border:2px solid transparent; border-radius:8px; box-sizing:border-box; cursor:pointer; }
#mod-crosshair-section .ch2-mini-tile { position:relative; overflow:hidden; background:#87ceeb; box-shadow:0 2px 0 var(--ssb-card-shadow); }
#mod-crosshair-section .ch2-mini-tile:hover { transform:translateY(-1px); }
#mod-crosshair-section .ch2-mini-tile.selected { border-color:#ffc900; box-shadow:0 2px 0 #d3a000; }
#mod-crosshair-section .ch2-mini-more { background:var(--ssb-yolk); box-shadow:0 2px 0 var(--ssb-yolk-shadow); color:#fff; font-family:"Nunito",system-ui,sans-serif; font-size:14px; font-weight:900; text-shadow:0 1px 2px rgba(0,0,0,0.3); }
#mod-crosshair-section .ch2-mini-more:hover { background:var(--ssb-yolk-hi); }
#mod-crosshair-section .ch2-mini-tile:focus-visible, #mod-crosshair-section .ch2-mini-more:focus-visible { outline:3px solid var(--ssb-focus); outline-offset:2px; }
.ch2-gallery-hint { margin-left:10px; font-family:"Nunito",system-ui,sans-serif; font-size:12px; font-weight:700; text-transform:none; color:var(--ssb-muted); }
.ch2-gallery-card.ch2-dragging { opacity:0.45 !important; }
.ch2-gallery-card.ch2-drop-before { box-shadow:-5px 0 0 var(--ssb-yolk), 0 4px 0 var(--ssb-card-shadow) !important; }
.ch2-gallery-card.ch2-drop-after { box-shadow:5px 0 0 var(--ssb-yolk), 0 4px 0 var(--ssb-card-shadow) !important; }

/* Gallery Styles */
.ch2-gallery-grid {
display: grid !important;
grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)) !important;
gap: 16px !important;
padding: 12px 0 !important;
}
.ch2-gallery-card {
background: var(--ssb-card) !important;
border: 2px solid transparent !important;
border-radius: 10px !important;
box-shadow: 0 4px 0 var(--ssb-card-shadow) !important;
padding: 12px !important;
cursor: pointer !important;
transition: all 0.15s ease-in-out !important;
display: flex !important;
flex-direction: column !important;
align-items: center !important;
gap: 10px !important;
}
.ch2-gallery-card:hover {
background: var(--ssb-card-hi) !important;
box-shadow: 0 4px 0 var(--ssb-card-shadow-hi) !important;
transform: translateY(-2px) !important;
}
.ch2-gallery-card:active {
transform: translateY(2px) !important;
box-shadow: 0 1px 0 var(--ssb-card-shadow) !important;
}
.ch2-gallery-card {
position: relative !important;
overflow: visible !important;
}
.ch2-gallery-card.selected {
background: var(--ssb-card) !important;
border: 2.5px solid #ffc900 !important;
box-shadow: 0 4px 0 var(--ssb-card-shadow) !important;
}
.ch2-gallery-card.selected:hover {
background: var(--ssb-card-hi) !important;
box-shadow: 0 4px 0 var(--ssb-card-shadow-hi) !important;
transform: translateY(-2px) !important;
}
.ch2-gallery-card.selected:active {
transform: translateY(2px) !important;
box-shadow: 0 1px 0 var(--ssb-card-shadow) !important;
}
.ch2-gallery-card.selected .ch2-gallery-title {
color: #cf9700 !important;
}
.ch2-gallery-badge {
position: absolute !important;
top: -9px !important;
right: -9px !important;
width: 24px !important;
height: 24px !important;
border-radius: 50% !important;
background: #ffc900 !important;
box-shadow: 0 2px 0 #d3a000 !important;
display: flex !important;
align-items: center !important;
justify-content: center !important;
z-index: 6 !important;
pointer-events: none !important;
}
.ch2-gallery-actions {
position: absolute !important;
top: 16px !important;
right: 16px !important;
display: flex !important;
gap: 4px !important;
opacity: 0 !important;
transition: opacity 0.12s ease !important;
z-index: 5 !important;
}
.ch2-gallery-card:hover .ch2-gallery-actions,
.ch2-gallery-card:focus-within .ch2-gallery-actions {
opacity: 1 !important;
}
@media (hover: none) {
.ch2-gallery-actions { opacity: 1 !important; }
}
.ch2-gallery-card:focus-visible, .ch2-gallery-new-card:focus-visible {
outline: 3px solid var(--ssb-focus) !important;
outline-offset: 2px !important;
}
.ch2-gallery-abtn {
width: 24px !important;
height: 24px !important;
border: none !important;
border-radius: 6px !important;
background: var(--ssb-blue) !important;
box-shadow: 0 2px 0 var(--ssb-ink) !important;
color: #ffffff !important;
cursor: pointer !important;
display: inline-flex !important;
align-items: center !important;
justify-content: center !important;
padding: 0 !important;
transition: all 0.1s ease !important;
}
.ch2-gallery-abtn:hover {
background: var(--ssb-blue-hi) !important;
transform: translateY(-1px) !important;
}
.ch2-gallery-abtn.danger {
background: var(--ssb-red) !important;
box-shadow: 0 2px 0 var(--ssb-red-shadow) !important;
}
.ch2-gallery-abtn.danger:hover {
background: var(--ssb-red-hi) !important;
}
.ch2-gallery-abtn svg { pointer-events: none !important; }
.ch2-gallery-new-card {
background: rgba(255,255,255,0.18) !important;
border: 2.5px dashed var(--ssb-blue) !important;
border-radius: 10px !important;
cursor: pointer !important;
display: flex !important;
flex-direction: column !important;
align-items: center !important;
justify-content: center !important;
gap: 10px !important;
min-height: 150px !important;
transition: all 0.15s ease !important;
box-sizing: border-box !important;
}
.ch2-gallery-new-card:hover {
background: rgba(255,255,255,0.32) !important;
transform: translateY(-2px) !important;
}
.ch2-gallery-new-plus {
width: 42px !important;
height: 42px !important;
border-radius: 50% !important;
background: var(--ssb-yolk) !important;
box-shadow: 0 3px 0 var(--ssb-yolk-shadow) !important;
display: flex !important;
align-items: center !important;
justify-content: center !important;
}
.ch2-gallery-new-label {
color: var(--ssb-ink) !important;
font-size: 11px !important;
font-weight: 900 !important;
text-transform: uppercase !important;
text-align: center !important;
letter-spacing: 0.5px !important;
}
.ch2-gallery-mini-preview {
width: 100% !important;
height: 110px !important;
background: #87ceeb !important;
border-radius: 6px !important;
border: none !important;
position: relative !important;
overflow: hidden !important;
box-sizing: border-box !important;
}
.ch2-gallery-title {
color: var(--ssb-ink) !important;
font-size: 13.5px !important;
font-weight: 900 !important;
text-transform: uppercase !important;
text-align: center !important;
letter-spacing: 0.5px !important;
text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5) !important;
width: 100% !important;
white-space: nowrap !important;
overflow: hidden !important;
text-overflow: ellipsis !important;
}
.ch2-gallery-header {
display: flex !important;
align-items: center !important;
justify-content: space-between !important;
margin-bottom: 15px !important;
padding-bottom: 10px !important;
border-bottom: 2px solid rgba(33,106,128,0.15) !important;
}
.ch2-gallery-back-btn {
background: var(--ssb-blue) !important;
border: none !important;
outline: none !important;
box-shadow: 0 3.5px 0 var(--ssb-ink) !important;
color: #ffffff !important;
border-radius: 8px !important;
padding: 6px 14px !important;
font-size: 13px !important;
font-weight: 800 !important;
cursor: pointer !important;
transition: all 0.1s !important;
}
.ch2-gallery-back-btn:hover {
background: var(--ssb-blue-hi) !important;
box-shadow: 0 3.5px 0 var(--ssb-blue-shadow) !important;
}
.ch2-gallery-back-btn:active {
transform: translateY(2px) !important;
box-shadow: 0 1px 0 var(--ssb-ink) !important;
}

/* Force volume slider display and sizes */
#mod-volDisplay {
font-size: 16px !important;
font-weight: bold !important;
}
.mod-vol-slider {
height: 6px !important;
background: #ffffff !important;
}
.mod-vol-slider::-webkit-slider-thumb {
width: 21px !important;
height: 21px !important;
margin-top: -8px !important;
background: var(--ssb-yolk) !important;
border: 4.5px solid #fff !important;
box-sizing: border-box !important;
}
.mod-vol-slider::-moz-range-thumb {
width: 21px !important;
height: 21px !important;
background: var(--ssb-yolk) !important;
border: 4.5px solid #fff !important;
box-sizing: border-box !important;
}

/* Make the slider dot bigger */
.mod-slider::-webkit-slider-thumb, .ch2-slider::-webkit-slider-thumb {
width: 21px !important;
height: 21px !important;
border: 4.5px solid #ffffff !important;
margin-top: -7px !important; /* Center the larger dot */
}
.mod-slider::-moz-range-thumb, .ch2-slider::-moz-range-thumb {
width: 21px !important;
height: 21px !important;
border: 4.5px solid #ffffff !important;
}

/* Keep track height thin */
.ch2-slider {
height: 6px !important;
}

.ch2-label { font-size: 14px !important; }
.ch2-num, .ch2-hex {
height: 30px !important;
font-size: 14px !important;
padding: 0 8px !important;
border: 2px solid var(--ssb-blue) !important;
border-radius: 6px !important;
}
.ch2-num { width: 60px !important; }
.ch2-hex { width: 80px !important; }
`;
(document.head || document.documentElement).appendChild(style);
}
(function installVersionChangelog() {
const displayVersion = "6.5";
const changelogVersion = "6.5";
const changelogKey = "ssb-better-ui-changelog-seen";
function changelogSound(name) {
try {
window.BAWK?.play?.(name);
} catch (err) {
window.__ssbErr("changelog.sound", err);
}
}
const v65Items = [{
label: "Game Fixes",
text: "A new switch in MODS ▸ Gameplay, on by default, with a gear that opens each fix: Chick'n Winner Fix, Early Respawn Guard and the new Blank Egg Fix, which stops the home-screen egg going blank when you press the confirm button on Leave Game twice, too fast. There is no Fixes tab any more.",
group: "v6.5"
}, {
label: "Advanced Settings",
text: "A new switch in MODS ▸ Menus, off by default, that shows the Effects and Gameplay tabs, and what each Manage button does under it. Until it is on they are hidden; their settings keep working, and search still finds them.",
group: "v6.5"
}, {
label: "Cleaner Look",
text: "The NEW tags are gone, and the Search settings box no longer draws an outline around itself.",
group: "v6.5"
}];
const v64Items = [{
label: "Presets",
text: "MODS ▸ Manage ▸ Presets loads a ready set of settings (Performance, Clean HUD or Default) or one you saved with Save Settings as Preset. It lists what will change before anything does.",
group: "v6.4"
}, {
label: "Keep Matches",
text: "Keep, on a match in Match History, saves it from the 40-match limit (up to 20 kept). Clear History leaves kept matches.",
group: "v6.4"
}, {
label: "Personal Records",
text: "A new switch in MODS ▸ Stats, on by default: your most kills and best KDR for each mode and map, shown above Match History, and a message at the end of a match that beats one.",
group: "v6.4"
}, {
label: "Show Match FPS",
text: "A new switch in MODS ▸ Stats, off by default: Match History shows each match's average and lowest FPS.",
group: "v6.4"
}, {
label: "FPS Check",
text: "Now counts stutters and freezes in your match, and its tips can turn on Smart Auto Detail or Disable Anti-Aliasing with one click.",
group: "v6.4"
}, {
label: "Chat",
text: "With Infinite Chat History off, the chat keeps the game's own 5 messages again. Chat Timestamps (MODS ▸ Chat, off by default) shows when each message arrived while you're paused. Copy Chat in MODS ▸ Chat copies every retained line as text.",
group: "v6.4"
}, {
label: "Session Time",
text: "Session Time Counts From can start the TIME in the FPS box when the match starts, instead of when the page loaded.",
group: "v6.4"
}, {
label: "Fixes",
text: "Chick'n Winner Fix and Early Respawn Guard can be switched off on their own. Early Respawn Guard now says why a Play click did nothing.",
group: "v6.4"
}, {
label: "Hotkeys",
text: "Stats Hotkey and Tab Out Key say so when the key you pick is also the other one, or one the game uses.",
group: "v6.4"
}, {
label: "Match History",
text: "An unknown server is saved as a dash instead of the last server you ever connected to, and server names come from the game's own list.",
group: "v6.4"
}];
const changelogHistory = [{
version: displayVersion,
intro: "Here's what's new in v6.5:",
items: v65Items
}, {
version: "6.4",
intro: "Previously in v6.4:",
items: v64Items
}];
function hasSeenChangelog() {
try {
return localStorage.getItem(changelogKey) === changelogVersion;
} catch (err) {
return false;
}
}
function markChangelogSeen() {
try {
localStorage.setItem(changelogKey, changelogVersion);
} catch (err) {
window.__ssbErr("changelog#1", err)
}
}
function showChangelog(forceOpen = false) {
if ((!forceOpen && hasSeenChangelog()) || document.getElementById("ssb-changelog-overlay"))
return false;
if (!forceOpen && window.__ssbIntro && window.__ssbIntro.busy())
return false;
if (document.pointerLockElement) return false;
const style = document.createElement("style");
style.id = "ssb-changelog-style";
style.textContent = `#ssb-changelog-overlay {
position: fixed;
inset: 0;
z-index: 2147483647;
display: flex;
align-items: center;
justify-content: center;
background: rgba(7, 39, 52, 0.62);
backdrop-filter: blur(2px);
font-family: "Nunito", system-ui, sans-serif;
padding: 18px;
box-sizing: border-box;
}
#ssb-changelog-panel {
width: min(660px, 100%);
max-height: min(760px, calc(100vh - 36px));
display: flex;
flex-direction: column;
overflow: hidden;
background: var(--ssb-panel);
border: 4px solid var(--ssb-blue);
border-radius: 8px;
box-shadow: 0 18px 42px rgba(0, 0, 0, 0.36);
color: var(--ssb-ink);
box-sizing: border-box;
}
#ssb-changelog-panel .ssb-changelog-head {
display: flex;
align-items: center;
justify-content: space-between;
gap: 16px;
padding: 18px 22px 16px;
background: #1196B8;
border-bottom: 4px solid var(--ssb-blue);
}
#ssb-changelog-panel .ssb-changelog-kicker {
margin: 0 0 3px;
font-size: 12px;
line-height: 1.2;
font-weight: 900;
text-transform: uppercase;
color: #BDF6FF;
}
#ssb-changelog-panel h2 {
margin: 0;
font-family: "Sigmar One", system-ui, sans-serif;
font-size: 30px;
line-height: 1.1;
color: #ffffff;
text-shadow: 0 3px 0 rgba(12, 87, 111, 0.45);
letter-spacing: 0;
}
#ssb-changelog-panel .ssb-changelog-version {
flex: 0 0 auto;
min-width: 76px;
padding: 8px 12px;
border: 3px solid #ffffff;
border-radius: 8px;
background: var(--ssb-orange);
color: #ffffff;
text-align: center;
font-size: 18px;
font-weight: 900;
box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.14);
}
#ssb-changelog-panel .ssb-changelog-body {
overflow: auto;
padding: 16px 18px 8px;
}
#ssb-changelog-panel .ssb-changelog-sub {
margin: 0 0 12px;
font-size: 15px;
font-weight: 800;
}
#ssb-changelog-panel .ssb-changelog-switcher {
display: flex;
align-items: center;
gap: 10px;
margin: 0 0 12px;
font-size: 13px;
font-weight: 900;
text-transform: uppercase;
}
#ssb-changelog-panel .ssb-changelog-switcher select {
flex: 0 0 auto;
min-width: 112px;
height: 34px;
border: 3px solid var(--ssb-blue);
border-radius: 8px;
background: #ffffff;
color: var(--ssb-ink);
font-size: 14px;
font-weight: 900;
padding: 0 10px;
font-family: "Nunito", system-ui, sans-serif;
cursor: pointer;
}
#ssb-changelog-panel .ssb-changelog-list {
display: grid;
gap: 8px;
}
#ssb-changelog-panel .ssb-changelog-item {
display: grid;
grid-template-columns: 116px 1fr;
gap: 12px;
align-items: start;
padding: 10px 12px;
border: 2px solid rgba(14, 118, 151, 0.42);
border-radius: 8px;
background: rgba(255, 255, 255, 0.54);
box-sizing: border-box;
}
#ssb-changelog-panel .ssb-changelog-tag {
display: inline-flex;
align-items: center;
justify-content: center;
min-height: 28px;
padding: 3px 9px;
border-radius: 7px;
background: #ffffff;
color: var(--ssb-blue);
border: 2px solid rgba(14, 118, 151, 0.32);
font-size: 12px;
font-weight: 900;
text-transform: uppercase;
box-sizing: border-box;
}
#ssb-changelog-panel .ssb-changelog-text {
margin: 0;
font-size: 15px;
font-weight: 700;
line-height: 1.35;
}
#ssb-changelog-panel .ssb-changelog-group {
margin: 6px 2px 0;
font-size: 13px;
font-weight: 900;
text-transform: uppercase;
letter-spacing: 0.5px;
}
#ssb-changelog-panel .ssb-changelog-group:first-child {
margin-top: 0;
}
#ssb-changelog-panel .ssb-changelog-more {
display: block;
margin: 0 0 10px;
color: var(--ssb-ink);
font-size: 13px;
font-weight: 800;
text-align: center;
text-decoration: underline;
text-underline-offset: 3px;
}
#ssb-changelog-panel .ssb-changelog-links {
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 4px 18px;
}
#ssb-changelog-panel .ssb-changelog-foot {
padding: 12px 18px 18px;
background: rgba(255, 255, 255, 0.18);
border-top: 2px solid rgba(14, 118, 151, 0.22);
}
#ssb-changelog-panel button {
width: 100%;
height: 46px;
border: 3px solid var(--ssb-blue);
border-radius: 8px;
background: #ffffff;
color: var(--ssb-ink);
font-size: 18px;
font-weight: 900;
cursor: pointer;
box-shadow: inset 0 -4px 0 rgba(14, 118, 151, 0.16);
}
#ssb-changelog-panel button:hover {
background: #F5FDFF;
}
@media (max-width: 560px) {
#ssb-changelog-panel .ssb-changelog-head {
align-items: flex-start;
padding: 16px;
}
#ssb-changelog-panel h2 {
font-size: 24px;
}
#ssb-changelog-panel .ssb-changelog-version {
min-width: 62px;
font-size: 15px;
padding: 7px 9px;
}
#ssb-changelog-panel .ssb-changelog-body {
padding: 12px;
}
#ssb-changelog-panel .ssb-changelog-switcher {
align-items: flex-start;
flex-direction: column;
gap: 6px;
}
#ssb-changelog-panel .ssb-changelog-item {
grid-template-columns: 1fr;
gap: 7px;
}
#ssb-changelog-panel .ssb-changelog-tag {
justify-self: start;
}
}
`;
const overlay = document.createElement("div");
overlay.id = "ssb-changelog-overlay";
overlay.innerHTML = `
                <div id="ssb-changelog-panel" role="dialog" aria-modal="true" aria-labelledby="ssb-changelog-title">
                    <div class="ssb-changelog-head">
                        <div>
                            <p class="ssb-changelog-kicker">${forceOpen ? "Changelog" : "Update installed"}</p>
                            <h2 id="ssb-changelog-title">Better HUD</h2>
                        </div>
                        <div class="ssb-changelog-version">v${displayVersion}</div>
                    </div>
                    <div class="ssb-changelog-body">
                        <p class="ssb-changelog-sub"></p>
                        <label class="ssb-changelog-switcher">
                            <span>Version</span>
                            <select aria-label="Changelog version">
                                ${changelogHistory.map((release, idx) => `<option value="${idx}">v${release.version}</option>`).join("")}
                            </select>
                        </label>
                        <div class="ssb-changelog-list"></div>
                    </div>
                    <div class="ssb-changelog-foot">
                        <div class="ssb-changelog-links">
                            <a class="ssb-changelog-more" href="${window.SSB_DISCORD}" target="_blank" rel="noopener">Join the Discord</a>
                            <a class="ssb-changelog-more" href="${window.SSB_YOUTUBE}" target="_blank" rel="noopener">YouTube channel</a>
                            <a class="ssb-changelog-more" href="https://github.com/Virojet/Shell-Shockers-Better-Hud-Mod#changelog" target="_blank" rel="noopener">Full changelog on GitHub</a>
                        </div>
                        <button type="button">Got it</button>
                    </div>
                </div>
            `;
const versionBadge = overlay.querySelector(".ssb-changelog-version");
const intro = overlay.querySelector(".ssb-changelog-sub");
const list = overlay.querySelector(".ssb-changelog-list");
const selector = overlay.querySelector(".ssb-changelog-switcher select");
function renderRelease(index) {
const release = changelogHistory[index] || changelogHistory[0];
versionBadge.textContent = "v" + release.version;
intro.textContent = release.intro;
let group = "";
list.innerHTML = release.items.map(item => {
const head = item.group && item.group !== group ?
`<div class="ssb-changelog-group">${(group = item.group)}</div>` : "";
return head + `
                    <div class="ssb-changelog-item">
                        <span class="ssb-changelog-tag">${item.label}</span>
                        <p class="ssb-changelog-text">${item.text}</p>
                    </div>
                `;
}).join("");
}
selector.addEventListener("change", () => {
renderRelease(parseInt(selector.value, 10) || 0);
changelogSound("ui_onchange");
});
renderRelease(0);
overlay.querySelector("button").addEventListener("click", () => {
markChangelogSeen();
overlay.remove();
changelogSound("ui_popupclose");
});
(document.head || document.documentElement).appendChild(style);
document.body.appendChild(overlay);
changelogSound("ui_popupopen");
return true;
}
function installFooterChangelogLink() {
if (!document.getElementById("ssb-changelog-link-style")) {
const style = document.createElement("style");
style.id = "ssb-changelog-link-style";
style.textContent = `#mod-settings-footer .mod-footer-version {
cursor: pointer;
text-decoration: underline;
text-underline-offset: 3px;
}
#mod-settings-footer .mod-footer-version:hover {
color: var(--ssb-blue);
}
#mod-settings-footer .mod-footer-version:focus-visible {
outline: 3px solid var(--ssb-focus);
outline-offset: 2px;
}
`;
(document.head || document.documentElement).appendChild(style);
}
const footerVersion = target => target && target.closest ? target.closest(
"#mod-settings-footer .mod-footer-version") : null;
document.addEventListener("click", event => {
if (!footerVersion(event.target)) return;
event.preventDefault();
event.stopPropagation();
showChangelog(true);
}, true);
document.addEventListener("keydown", event => {
if (event.key !== "Enter" && event.key !== " ") return;
if (!footerVersion(event.target)) return;
event.preventDefault();
showChangelog(true);
}, true);
}
function scheduleChangelog() {
if (hasSeenChangelog() || (window.__ssbIntro && window.__ssbIntro.busy())) return;
const run = () => setTimeout(showChangelog, 1200);
if (document.body) run();
else document.addEventListener("DOMContentLoaded", run, {
once: true
});
}
window.__ssbChangelog = {
version: changelogVersion,
seen: hasSeenChangelog,
markSeen: markChangelogSeen,
show: showChangelog
};
document.addEventListener("pointerlockchange", () => {
if (!document.pointerLockElement) scheduleChangelog();
});
installFooterChangelogLink();
scheduleChangelog();
})();
(function ssbInstallCount() {
const KEY = "ssb-install-counted";
try {
if (localStorage.getItem(KEY)) return;
} catch (e) {
return;
}
setTimeout(() => {
fetch("https://abacus.jasoncameron.dev/hit/virojet-better-hud/installs", {
credentials: "omit",
referrerPolicy: "no-referrer"
})
.then(r => {
if (r.ok) localStorage.setItem(KEY, "1");
})
.catch(() => {});
}, 8000);
})();
(function ssbUpdateChecker() {
const META_URL =
"https://raw.githubusercontent.com/Virojet/Shell-Shockers-Better-Hud-Mod/main/Shell-Shockers-Better-Hud.meta.js";
const DOWNLOAD_URL =
"https://raw.githubusercontent.com/Virojet/Shell-Shockers-Better-Hud-Mod/main/Shell-Shockers-Better-Hud.user.js";
const installed = (typeof GM_info !== "undefined" && GM_info.script && GM_info.script.version) ? GM_info
.script.version : null;
if (!installed) return;
function isNewer(remote, local) {
const a = String(remote).split("."),
b = String(local).split(".");
for (let i = 0; i < Math.max(a.length, b.length); i++) {
const x = parseInt(a[i] || "0", 10),
y = parseInt(b[i] || "0", 10);
if (x > y) return true;
if (x < y) return false;
}
return false;
}
const CHANGELOG_URL = "https://github.com/Virojet/Shell-Shockers-Better-Hud-Mod#changelog";
const TOAST_CSS = `#ssb-update-toast { position:fixed; top:14px; right:14px; z-index:2147483647; width:300px; box-sizing:border-box; padding:14px 16px; border:3px solid var(--ssb-blue,#0E7697); border-radius:10px; background:var(--ssb-panel,#8ED9E8); color:var(--ssb-ink,#0C576F); font-family:"Nunito",system-ui,sans-serif; box-shadow:0 12px 32px rgba(0,0,0,0.4); animation:ssb-toast-in 0.16s ease; }
#ssb-update-toast * { box-sizing:border-box; font-size:inherit; letter-spacing:normal; }
#ssb-update-toast .ssb-upd-title { margin:0 26px 4px 0; font-size:16px; font-weight:900; line-height:1.25; }
#ssb-update-toast .ssb-upd-text { margin:0 0 12px; font-size:13px; font-weight:700; line-height:1.3; }
#ssb-update-toast .ssb-upd-close { position:absolute; top:8px; right:8px; width:24px; height:24px; margin:0; padding:0; border:none; border-radius:50%; background:rgba(12,87,111,0.14); color:var(--ssb-ink,#0C576F); font-family:"Nunito",system-ui,sans-serif; font-size:17px; font-weight:900; line-height:24px; text-align:center; cursor:pointer; }
#ssb-update-toast .ssb-upd-close:hover { background:rgba(12,87,111,0.26); }
#ssb-update-toast .ssb-upd-actions { display:flex; align-items:center; gap:8px; flex-wrap:wrap; }
#ssb-update-toast .ssb-upd-btn { display:inline-flex; align-items:center; justify-content:center; height:34px; margin:0; padding:0 14px; border:3px solid; border-radius:8px; font-family:"Nunito",system-ui,sans-serif; font-size:14px; font-weight:900; text-decoration:none; cursor:pointer; }
#ssb-update-toast .ssb-upd-primary { border-color:#924e0c; background:#f79520; color:#fff; text-shadow:rgba(0,0,0,0.25) 1px 1px 0; box-shadow:inset 0 -3px 0 rgba(0,0,0,0.16); }
#ssb-update-toast .ssb-upd-primary:hover { filter:brightness(1.07); }
#ssb-update-toast .ssb-upd-secondary { border-color:var(--ssb-blue,#0E7697); background:#fff; color:var(--ssb-ink,#0C576F); box-shadow:inset 0 -3px 0 rgba(14,118,151,0.16); }
#ssb-update-toast .ssb-upd-secondary:hover { background:#f5fdff; }
#ssb-update-toast .ssb-upd-link { margin-left:auto; color:var(--ssb-ink,#0C576F); font-size:13px; font-weight:800; text-decoration:underline; text-underline-offset:3px; }
#ssb-update-toast .ssb-upd-note { margin:10px 0 0; padding-top:8px; border-top:1px solid rgba(12,87,111,0.18); font-size:12px; font-weight:700; line-height:1.3; opacity:0.85; }
`;
let installed_clicked = "";
function afterInstallClick(remote, toast) {
installed_clicked = remote;
lsSet("ssb-update-dismissed", remote);
if (toast) {
const t = toast.querySelector(".ssb-upd-title"),
x = toast.querySelector(".ssb-upd-text"),
a = toast.querySelector(".ssb-upd-actions"),
n = toast.querySelector(".ssb-upd-note");
if (t) t.textContent = "Reload to finish updating";
if (x) x.textContent = "Once Tampermonkey has installed v" + remote +
", reload the game (F5) to start using it. Your settings and crosshairs stay just as they are.";
if (a) a.remove();
if (n) n.remove();
toast.querySelector(".ssb-upd-close")?.addEventListener("click", () => toast.remove());
}
setStatus("reload", remote);
}
function showToast(remote) {
if (document.getElementById("ssb-update-toast") || !document.body) return;
if (window.__ssbUI) window.__ssbUI.ensureCss();
if (!document.getElementById("ssb-update-toast-style")) {
const st = document.createElement("style");
st.id = "ssb-update-toast-style";
st.textContent = TOAST_CSS;
(document.head || document.documentElement).appendChild(st);
}
const mk = (tag, cls, text) => {
const e = document.createElement(tag);
e.className = cls;
if (text) e.textContent = text;
return e;
};
const el = mk("div", "");
el.id = "ssb-update-toast";
el.setAttribute("role", "status");
const dismiss = () => {
try {
localStorage.setItem("ssb-update-dismissed", remote);
} catch (e) {
window.__ssbErr("update#1", e)
}
el.remove();
};
const close = mk("button", "ssb-upd-close", "×");
close.type = "button";
close.setAttribute("aria-label", "Close");
close.onclick = dismiss;
const btn = mk("a", "ssb-upd-btn ssb-upd-primary", "Update now");
btn.href = DOWNLOAD_URL;
btn.target = "_blank";
btn.rel = "noopener";
btn.addEventListener("click", () => afterInstallClick(remote, el));
const later = mk("button", "ssb-upd-btn ssb-upd-secondary", "Later");
later.type = "button";
later.onclick = dismiss;
const link = mk("a", "ssb-upd-link", "What's new");
link.href = CHANGELOG_URL;
link.target = "_blank";
link.rel = "noopener";
const actions = mk("div", "ssb-upd-actions");
actions.append(btn, later, link);
el.append(close, mk("div", "ssb-upd-title", "Better HUD v" + remote + " is out!"),
mk("div", "ssb-upd-text", "You're on v" + installed +
". Update to get the newest fixes and features. Your settings and crosshairs stay just as they are."
), actions,
mk("div", "ssb-upd-note",
"This is a one-time reminder. You can check any time at the bottom of the MODS tab."));
document.body.appendChild(el);
}
function lsGet(k) {
try {
return localStorage.getItem(k) || "";
} catch (e) {
return "";
}
}
function lsSet(k, v) {
try {
localStorage.setItem(k, v);
} catch (e) {
window.__ssbErr("update#2", e)
}
}
const CHECK_EVERY = 30 * 60 * 1000;
let status = {
state: "",
remote: ""
};
function paintStatus(target) {
const el = target || document.getElementById(
"ssb-update-status");
if (!el) return;
const st = status.state;
el.className = st ? "is-" + st : "";
el.textContent = "";
el.removeAttribute("data-tooltip");
if (st === "available") {
const a = document.createElement("a");
a.className = "ssb-upd-go";
a.href = DOWNLOAD_URL;
a.target = "_blank";
a.rel = "noopener";
a.textContent = "Update to v" + status.remote;
a.setAttribute("data-tooltip", "You have v" + installed +
". Opens the installer; your settings and crosshairs are kept.");
a.addEventListener("click", () => afterInstallClick(status.remote, document.getElementById(
"ssb-update-toast")));
el.appendChild(a);
} else if (st === "reload") {
el.textContent = "Reload to update";
el.setAttribute("data-tooltip", "After Tampermonkey installs v" + status.remote +
", reload the game (F5) to start using it.");
} else if (st === "latest") {
el.textContent = "Up to date";
el.setAttribute("data-tooltip", "v" + installed + " is the newest version.");
} else if (st === "checking") {
el.textContent = "Checking\u2026";
} else if (st === "error") {
el.textContent = "Couldn't check";
el.setAttribute("data-tooltip",
"GitHub couldn't be reached. Try Check for updates again later.");
}
const btn = el.parentElement && el.parentElement.querySelector(".mod-footer-btn");
if (btn) btn.disabled = st === "checking";
}
function setStatus(state, remote) {
status = {
state: state,
remote: remote || status.remote
};
paintStatus();
}
const statusFor = remote => isNewer(remote, installed) ? (installed_clicked === remote ? "reload" :
"available") : "latest";
window.__ssbPaintUpdateStatus = paintStatus;
function consider(remote, manual) {
const ui = window.__ssbUI;
if (!isNewer(remote, installed)) {
if (manual && ui) ui.toast("You're on the latest version (v" + installed + ").", {
type: "success"
});
return;
}
if (!manual) {
const seen = lsGet("ssb-better-ui-changelog-seen");
if (seen && !isNewer(remote, seen)) return;
if (lsGet("ssb-update-dismissed") === remote || lsGet("ssb-update-reminded") === remote) return;
lsSet("ssb-update-reminded", remote);
} else {
const old = document.getElementById("ssb-update-toast");
if (old) old.remove();
}
showToast(remote);
}
function check(manual) {
const ui = window.__ssbUI,
cached = lsGet("ssb-update-remote");
if (!manual) {
const last = parseInt(lsGet("ssb-update-checked"), 10) || 0;
if (cached && last <= Date.now() && Date.now() - last < CHECK_EVERY) {
setStatus(statusFor(cached), cached);
consider(cached, false);
return Promise.resolve();
}
}
setStatus("checking");
return fetch(META_URL + "?_=" + Date.now()).then(r => r.text()).then(txt => {
const m = txt.match(/@version\s+([0-9.]+)/);
if (!m) throw new Error("no @version");
lsSet("ssb-update-checked", String(Date.now()));
lsSet("ssb-update-remote", m[1]);
setStatus(statusFor(m[1]), m[1]);
consider(m[1], manual);
}).catch(e => {
window.__ssbErr("update.check", e);
setStatus(cached ? statusFor(cached) : "error",
cached);
if (manual && ui) ui.toast(
"Couldn't reach GitHub. Check your connection and try again.", {
type: "error"
});
});
}
window.__ssbCheckUpdate = check;
if (document.body) check(false);
else window.addEventListener("DOMContentLoaded", () => check(false));
})();
})();
(function() {
"use strict";
const KEY = "tp-hideScopeFrame";
const STYLE_ID = "ssb-hide-scope-frame-style";
let _on = false;
const readOn = () => {
try {
_on = JSON.parse(localStorage.getItem(KEY) || "false") === true;
} catch (e) {
_on = false;
}
return _on;
};
const writeOn = (on) => {
try {
localStorage.setItem(KEY, JSON.stringify(!!on));
} catch (e) {
window.__ssbErr("view#1", e)
}
};
function styleEl(id) {
let el = document.getElementById(id);
if (!el) {
el = document.createElement("style");
el.id = id;
(document.head || document.documentElement).appendChild(el);
}
return el;
}
let _vpScene = null;
function expandCamArr(arr) {
if (!arr) return;
for (let i = 0; i < arr.length; i++) {
const v = arr[i] && arr[i].viewport;
if (v && (v.x > 0.001 || v.y > 0.001 || v.width < 0.999 || v.height < 0.999)) {
v.x = 0;
v.y = 0;
v.width = 1;
v.height = 1;
}
}
}
function expandScopeViewports() {
try {
const s = window.P && window.P.scene;
if (!s) return;
expandCamArr(s.activeCameras);
expandCamArr(s.cameras);
} catch (e) {
window.__ssbErr("view#2", e)
}
}
function installViewportHook() {
const s = window.P && window.P.scene;
if (!s || !s.onBeforeRenderObservable || _vpScene === s) return;
_vpScene = s;
try {
s.onBeforeRenderObservable.add(() => {
if (_on) expandScopeViewports();
});
} catch (e) {
window.__ssbErr("view#3", e)
}
}
function applyScopeFrame() {
installViewportHook();
const on = _on;
const css = on ?
"#scopeBorder{background:transparent!important;border:0!important;box-shadow:none!important;pointer-events:none!important;}#scopeBorder *{visibility:hidden!important;opacity:0!important;background:transparent!important;border:0!important;box-shadow:none!important;}" :
"";
const style = styleEl(STYLE_ID);
if (style.textContent !== css) style.textContent = css;
if (on) expandScopeViewports();
}
function setScopeFrame(on) {
writeOn(on);
readOn();
applyScopeFrame();
return _on;
}
function toggleScopeFrame() {
return setScopeFrame(!readOn());
}
window.__ssbSetScopeFrame = setScopeFrame;
window.__ssbToggleScopeFrame = toggleScopeFrame;
function boot() {
try {
if (!localStorage.getItem("tp-hideScopeFrameMigrated")) {
localStorage.setItem(KEY, "false");
localStorage.setItem("tp-hideScopeFrameMigrated", "1");
}
} catch (e) {
window.__ssbErr("view#4", e)
}
readOn();
applyScopeFrame();
window.addEventListener("storage", e => {
if (e.key === KEY || e.key === null) {
readOn();
applyScopeFrame();
}
});
document.addEventListener("visibilitychange", () => {
if (!document.hidden) {
readOn();
applyScopeFrame();
}
});
window.__ssbMenuPoll(applyScopeFrame, 2000);
document.addEventListener("pointerlockchange", () => setTimeout(applyScopeFrame, 0), true);
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
})();
(function() {
"use strict";
const SLOTS = ["3", "4", "7", "6", "1", "2"];
const LS = {
showFav: "tp-showFavIcon",
favFilter: "tp-favOnly",
favFirst: "tp-favFirst",
favs: "tp-favItems",
skinCache: "tp-lastSkinCache",
};
const readJSON = (k, fb) => {
try {
const v = localStorage.getItem(k);
return v === null ? fb : JSON.parse(v);
} catch (e) {
return fb;
}
};
const writeJSON = (k, v) => {
try {
localStorage.setItem(k, JSON.stringify(v));
} catch (e) {
window.__ssbErr("favorites#1", e)
}
};
let showFavState, favOnlyState, favFirstState, favoriteIds = new Set();
function syncFeatureState() {
showFavState = readJSON(LS.showFav, false) === true;
favOnlyState = readJSON(LS.favFilter, false) === true;
favFirstState = readJSON(LS.favFirst, false) === true;
const stored = readJSON(LS.favs, []);
favoriteIds = new Set(Array.isArray(stored) ? stored : []);
}
syncFeatureState();
document.addEventListener("ssb:settings-change", syncFeatureState);
document.addEventListener("visibilitychange", () => {
if (!document.hidden) syncFeatureState();
});
window.addEventListener("storage", e => {
if (e.key === null || e.key === LS.showFav || e.key === LS.favFilter || e.key === LS.favFirst || e
.key === LS.favs) {
syncFeatureState();
window.__ssbMenuPoll.reconcile();
}
});
const showFavIcon = () => showFavState;
const setShowFavIcon = (v) => {
showFavState = !!v;
writeJSON(LS.showFav, showFavState);
};
const favOnly = () => favOnlyState;
const setFavOnly = (v) => {
favOnlyState = !!v;
writeJSON(LS.favFilter, favOnlyState);
};
const favFirst = () => favFirstState;
const setFavFirst = (v) => {
favFirstState = !!v;
writeJSON(LS.favFirst, favFirstState);
};
const getFavs = () => new Set(favoriteIds);
const setFavs = (s) => {
favoriteIds = new Set(s);
writeJSON(LS.favs, [...s]);
};
const isFav = (id) => favoriteIds.has(id);
const toggleFav = (id) => {
const s = getFavs();
if (s.has(id)) s.delete(id);
else s.add(id);
setFavs(s);
return s.has(id);
};
const skinUnlockerOn = () => window.__ssbSkinUnlocker === true;
const shown = (el, min) => {
if (!el || (el.checkVisibility && !el.checkVisibility())) return false;
const r = el.getBoundingClientRect();
return r.width > min && r.height > min;
};
function gameReady() {
return !!(window.extern && window.extern.catalog &&
typeof window.extern.getEquippedItems === "function" &&
window.vueApp && window.vueApp.$refs && window.vueApp.$refs.equipScreen);
}
function whenReady(cb) {
if (gameReady()) return cb();
const unsubscribe = window.__ssbMenuPoll(() => {
if (gameReady()) {
unsubscribe();
cb();
}
}, 600);
}
function visibleGrid() {
const grids = document.querySelectorAll("#item_grid, .equip_grid");
for (const g of grids) {
if (shown(g, 4)) return g;
}
return null;
}
function inInventory() {
return !!visibleGrid();
}
function gridItems() {
try {
const es = window.vueApp.$refs.equipScreen;
return (es && es.equip && es.equip.showingItems) || [];
} catch (e) {
return [];
}
}
function refreshGrid() {
try {
const es = window.vueApp.$refs.equipScreen;
if (!es || !es.equip || !es.populateItemGridWithType) return;
es.populateItemGridWithType(es.equip.selectedItemType);
if (es.equip.itemSearchTerm && typeof es.itemSearch === "function") es.itemSearch();
} catch (e) {
window.__ssbErr("favorites#3", e)
}
}
function readSkinCache() {
if (pendingCache) return pendingCache;
const raw = readJSON(LS.skinCache, null),
c = {
current: null,
byClass: {}
};
const isObj = (v) => !!v && typeof v === "object" && !Array.isArray(v);
if (!isObj(raw)) return c;
if (SLOTS.some((t) => raw[t] != null)) {
c.current = raw;
return c;
}
if (isObj(raw.current)) c.current = raw.current;
if (isObj(raw.byClass)) c.byClass = raw.byClass;
return c;
}
const inList = (list, id) => !!list && Array.prototype.some.call(list, (it) => !!it && it.id === id);
const gunFits = (fc, ci, slot, id) => id != null && !!fc[ci] && !!fc[ci].forWeaponSlot && inList(fc[ci]
.forWeaponSlot[slot], id);
function withSkins(lo, cat, c, acct) {
const fc = cat && cat.forClass;
if (!fc || !(fc.length > 0) || !Array.isArray(lo.primaryId) || !Array.isArray(lo.secondaryId)) return lo;
const out = Object.assign({}, lo, {
primaryId: lo.primaryId.slice(),
secondaryId: lo.secondaryId.slice()
});
for (let ci = 0; ci < fc.length; ci++) {
const m = c.byClass[ci];
if (!m || typeof m !== "object") continue;
if (gunFits(fc, ci, 0, m[3])) out.primaryId[ci] = m[3];
if (gunFits(fc, ci, 1, m[4])) out.secondaryId[ci] = m[4];
}
const cur = c.current;
if (cur) {
for (let ci = 0; ci < fc.length; ci++) {
if (!gunFits(fc, ci, 0, cur[3])) continue;
out.classIdx = ci;
out.primaryId[ci] = cur[3];
if (gunFits(fc, ci, 1, cur[4])) out.secondaryId[ci] = cur[4];
break;
}
[
[1, "hatId"],
[2, "stampId"],
[6, "grenadeId"],
[7, "meleeId"]
].forEach(([t, k]) => {
const it = cur[t] != null && cat.findItemById(cur[t]);
if (it && Number(it.item_type_id) === t) out[k] = it.id;
});
const nColors = Array.isArray(window.shellColors) ? window.shellColors.length : 0,
col = cur.color;
const vipOnly = col >= 7 && !!acct && typeof acct.isUpgraded === "function" && acct.isUpgraded() ===
false;
if (Number.isInteger(col) && col >= 0 && (!nColors || col < nColors) && !vipOnly) out.colorIdx = col;
}
return out;
}
let skinCat = null;
window.__ssbLoadout = function(acct, lo, cat) {
if (!skinUnlockerOn() || !lo || typeof lo !== "object") return lo;
try {
if (cat && typeof cat.findItemById === "function") skinCat = cat;
const use = skinCat || (window.extern && window.extern.catalog);
if (!use || typeof use.findItemById !== "function") return lo;
watchAccount(acct);
const out = withSkins(lo, use, readSkinCache(), acct),
vd = window.vueData;
if (!window.vueApp && vd && typeof vd === "object" && Number.isInteger(out.classIdx) && vd
.classIdx !== out.classIdx) vd.classIdx = out.classIdx;
return out;
} catch (e) {
window.__ssbErr("favorites#4", e);
return lo;
}
};
let saveTimer = 0,
pendingCache = null;
function noteSkinChange() {
if (!skinUnlockerOn()) return;
try {
const acct = window.extern && window.extern.account;
const eq = acct && typeof acct.getEquippedItems === "function" ? acct.getEquippedItems() : null;
if (!eq || !eq[3] || eq[3].id == null) return;
const c = readSkinCache(),
cur = {};
SLOTS.forEach((t) => {
if (eq[t] && eq[t].id != null) cur[t] = eq[t].id;
});
if (Number.isInteger(acct.colorIdx) && acct.colorIdx >= 0) cur.color = acct.colorIdx;
c.current = cur;
if (Number.isInteger(acct.classIdx) && acct.classIdx >= 0) c.byClass[acct.classIdx] = {
3: cur[3],
4: cur[4]
};
pendingCache = c;
} catch (e) {
window.__ssbErr("favorites#5", e);
return;
}
clearTimeout(saveTimer);
saveTimer = setTimeout(saveSkinCache, 300);
}
function saveSkinCache() {
clearTimeout(saveTimer);
saveTimer = 0;
const c = pendingCache;
if (!c) return;
pendingCache = null;
try {
const json = JSON.stringify(c);
if (json !== localStorage.getItem(LS.skinCache)) localStorage.setItem(LS.skinCache, json);
} catch (e) {
window.__ssbErr("favorites#5", e)
}
}
window.addEventListener("pagehide", saveSkinCache, true);
document.addEventListener("visibilitychange", () => {
if (document.visibilityState === "hidden") saveSkinCache();
}, true);
function callThen(obj, key, after) {
const inner = obj[key];
if (typeof inner !== "function") return;
obj[key] = function() {
const out = inner.apply(this, arguments);
after();
return out;
};
}
function installSkinHooks() {
const ex = window.extern;
if (!ex || ex.__ssbSkinCacheHook) return;
ex.__ssbSkinCacheHook = true;
callThen(ex, "tryEquipItem", noteSkinChange);
callThen(ex, "changeClass", noteSkinChange);
callThen(ex, "setShellColor", noteSkinChange);
}
const watchedAccounts = new WeakSet();
function watchAccount(acct) {
if (!acct || typeof acct !== "object" || watchedAccounts.has(acct)) return;
watchedAccounts.add(acct);
try {
callThen(acct, "tryEquipItem", noteSkinChange);
} catch (e) {
window.__ssbErr("favorites#7", e)
}
}
let applyPending = false;
async function applySkinMemory(loadModels) {
let ex = window.extern,
acct = ex && ex.account;
if (!skinUnlockerOn() || !acct) return;
if (ex.inGame) {
applyPending = true;
return;
}
applyPending = false;
try {
let loaded = false;
if (loadModels && typeof ex.loadAllMeshesOnDemand === "function") {
const t0 = performance.now();
await ex.loadAllMeshesOnDemand();
loaded = performance.now() - t0 > 50;
if (!skinUnlockerOn()) return;
if (ex.inGame) {
applyPending = true;
return;
}
acct = ex.account;
}
if (!acct || typeof acct.applyLoadoutObject !== "function" || typeof acct.generateLoadoutObject !==
"function") return;
watchAccount(acct);
const lo = acct.generateLoadoutObject(),
want = withSkins(lo, skinCat || ex.catalog, readSkinCache(), acct);
if (JSON.stringify(want) !== JSON.stringify(lo)) {
acct.applyLoadoutObject(want);
const es = window.vueApp && window.vueApp.$refs && window.vueApp.$refs.equipScreen;
if (es && typeof es.updateEquippedItems === "function") es.updateEquippedItems();
} else if (loaded && typeof ex.resetPaperDoll === "function") ex
.resetPaperDoll();
} catch (e) {
window.__ssbErr("favorites#6", e)
}
}
let unlockerWas = skinUnlockerOn();
document.addEventListener("ssb:settings-change", () => {
const on = skinUnlockerOn();
if (on === unlockerWas) return;
unlockerWas = on;
if (on) {
installSkinHooks();
applySkinMemory(true);
}
else {
saveSkinCache();
applyPending = false;
}
});
let _lastPoseRefreshAt = 0;
function refreshHeldWeaponPose(force) {
if (!skinUnlockerOn()) return;
const ws = document.querySelector(".pause-game-weapon-select");
if (!ws || (ws.checkVisibility && !ws.checkVisibility()) || ws.getBoundingClientRect().width < 4) return;
const now = Date.now();
if (!force && now - _lastPoseRefreshAt < 1500) return;
_lastPoseRefreshAt = now;
try {
const ex = window.extern,
es = window.vueApp && window.vueApp.$refs && window.vueApp.$refs.equipScreen;
if (!ex || !es) return;
if (typeof es.updateEquippedItems === "function") es.updateEquippedItems();
if (typeof ex.closeEquipInGame === "function") ex.closeEquipInGame(true);
if (typeof es.poseEquippedItems === "function") es.poseEquippedItems();
if (typeof ex.poseWithItems === "function") ex.poseWithItems(ex.getEquippedItems(), 0, 0);
} catch (e) {
window.__ssbErr("favorites#13", e)
}
}
const favSortMark = Symbol.for("ssb.favorites-first.sort");
const favGridMark = Symbol.for("ssb.favorites.grid");
function installFavFirstSort(list, es) {
if (!Array.isArray(list) || typeof list.sort !== "function" || list.sort[favSortMark]) return;
const innerSort = list.sort;
const sort = function(cmp) {
if (!favFirst() || !window.vueData || es.currentEquipMode !== window.vueData.equipMode.inventory ||
typeof cmp !== "function") return innerSort.apply(this, arguments);
const favs = getFavs();
return innerSort.call(this, (a, b) => {
const fa = !!a && favs.has(a.id),
fb = !!b && favs.has(b.id);
return fa === fb ? cmp(a, b) : fa ? -1 : 1;
});
};
Object.defineProperty(sort, favSortMark, {
value: true
});
Object.defineProperty(list, "sort", {
value: sort,
configurable: true,
writable: true
});
}
function installFavFilterHook() {
const es = window.vueApp && window.vueApp.$refs && window.vueApp.$refs.equipScreen;
if (!es || typeof es.populateItemGrid !== "function") return;
if (es.populateItemGrid === es.__ssbFavWrapper) return;
const inner = es.populateItemGrid;
es.__ssbFavWrapper = function(items, ...args) {
let invMode = false;
try {
invMode = !!window.vueData && this.currentEquipMode === window.vueData.equipMode.inventory;
if (favOnly() && invMode) {
const favs = getFavs();
items = (items || []).filter((it) => it && favs.has(it.id));
}
} catch (e) {
window.__ssbErr("favorites#15", e)
}
const out = inner.call(this, items, ...args);
try {
const list = invMode && favFirst() && this.equip.showingItems;
if (list) installFavFirstSort(list, this);
} catch (e) {
window.__ssbErr("favorites#21", e)
}
return out;
};
Object.defineProperty(es.__ssbFavWrapper, favGridMark, {
value: true
});
es.populateItemGrid = es.__ssbFavWrapper;
}
function decorateTiles() {
if (!showFavIcon()) {
document.querySelectorAll(".ssb-star").forEach((s) => s.remove());
return;
}
const grid = visibleGrid();
if (!grid) return;
const showing = gridItems();
if (!showing.length) return;
const tips = grid.querySelectorAll(".tool-tip");
tips.forEach((tip, i) => {
const item = showing[i];
const tile = tip.querySelector(".grid-item") || tip;
if (!item || item.id == null) {
const s = tile.querySelector(":scope > .ssb-star");
if (s) s.remove();
return;
}
if (getComputedStyle(tile).position === "static") tile.style.position = "relative";
let star = tile.querySelector(":scope > .ssb-star");
if (!star) {
star = document.createElement("button");
star.className = "ssb-star";
star.type = "button";
star.addEventListener("click", (e) => {
e.stopPropagation();
e.preventDefault();
paintStar(star, toggleFav(Number(star.dataset.itemId)));
if (favOnly() || favFirst()) refreshGrid();
}, true);
tile.appendChild(star);
}
star.dataset.itemId = item.id;
paintStar(star, isFav(item.id));
});
}
function paintStar(btn, filled) {
const label = filled ? "Remove from favorites" : "Add to favorites";
btn.setAttribute("aria-label", label);
btn.setAttribute("aria-pressed", String(filled));
if (btn.dataset.filled === String(filled)) return;
btn.dataset.filled = String(filled);
btn.classList.toggle("ssb-star--on", filled);
btn.setAttribute("data-tooltip", filled ? "Remove from favorites" : "Add to favorites");
btn.innerHTML = filled ?
'<svg viewBox="0 0 24 24" width="16" height="16"><path fill="#ffcf33" stroke="#a06a00" stroke-width="1.2" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01z"/></svg>' :
'<svg viewBox="0 0 24 24" width="16" height="16"><path fill="rgba(0,0,0,0.25)" stroke="#fff" stroke-width="1.4" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01z"/></svg>';
}
function favClick() {
try {
if (window.BAWK && window.BAWK.play) window.BAWK.play("ui_click");
} catch (e) {
window.__ssbErr("favorites#16", e)
}
}
function encodeFavCode() {
const ids = [...getFavs()].map(Number).filter((n) => Number.isFinite(n) && n >= 0).map((n) => Math.floor(
n));
return "FAV-" + ids.map((n) => n.toString(36)).join(".");
}
function decodeFavCode(code) {
if (typeof code !== "string") return null;
code = code.trim();
if (!/^FAV-/i.test(code)) return null;
const body = code.slice(4).trim();
if (!body) return [];
const ids = [];
for (const part of body.split(".")) {
if (!part) continue;
const n = parseInt(part, 36);
if (Number.isFinite(n) && n >= 0) ids.push(n);
}
return ids;
}
function exportFavCode() {
const ui = window.__ssbUI,
favs = getFavs();
if (!favs.size) {
ui.toast("You haven't favorited any items yet.\nStar some inventory items first, then export.", {
type: "error"
});
return;
}
favClick();
ui.copyCode(encodeFavCode(), "Favorites code (" + favs.size + " item" + (favs.size === 1 ? "" : "s") + ")");
}
async function importFavCode() {
const ui = window.__ssbUI;
const code = await ui.prompt({
title: "Import Favorites",
text: "Paste a favorites code. It starts with FAV-.",
placeholder: "FAV-…",
ok: "Import",
validate: (v) => !v.trim() ? "Paste a code first." : decodeFavCode(v) ? "" :
"That isn't a favorites code. It should start with FAV-."
});
if (code === null) return;
const ids = decodeFavCode(code);
const cur = getFavs();
if (cur.size && !(await ui.confirm({
title: "Import Favorites",
text: "Replace your " + cur.size + " favorited item" + (cur.size === 1 ? "" : "s") +
" with the " + ids.length + " from this code?",
ok: "Replace",
danger: true
}))) return;
setFavs(new Set(ids));
favClick();
try {
decorateTiles();
} catch (e) {
window.__ssbErr("favorites#17", e)
}
try {
refreshGrid();
} catch (e) {
window.__ssbErr("favorites#18", e)
}
ui.toast("Imported " + ids.length + " favorite" + (ids.length === 1 ? "" : "s") + ".", {
type: "success"
});
}
window.__ssbFavCodes = {
exportCode: exportFavCode,
importCode: importFavCode
};
function registerModMenuToggles() {
window.__ssbSettings.add({
key: LS.showFav,
section: "menus",
after: "tp-showVolumeSlider",
label: "Favorite Stars",
code: "Af",
def: false,
tip: "Show a star button on each inventory item so you can favorite it.",
keywords: "show favorites icon star inventory",
get: showFavIcon,
set: (v) => {
setShowFavIcon(v);
decorateTiles();
refreshGrid();
}
});
window.__ssbSettings.add({
key: LS.favFilter,
section: "menus",
after: LS.showFav,
label: "Only Show Favorites",
code: "Ao",
def: false,
tip: "In the Inventory, show only the items you've starred.",
keywords: "favorites filter inventory starred",
get: favOnly,
set: (v) => {
setFavOnly(v);
refreshGrid();
}
});
window.__ssbSettings.add({
key: LS.favFirst,
section: "menus",
after: LS.favFilter,
label: "Favorites First",
code: "Ap",
def: false,
tip: "In the Inventory, show the items you've starred first, before the rest.",
keywords: "favorites first top order sort starred inventory",
get: favFirst,
set: (v) => {
setFavFirst(v);
installFavFilterHook();
refreshGrid();
}
});
}
function injectStyles() {
if (document.getElementById("ssb-fav-styles")) return;
const s = document.createElement("style");
s.id = "ssb-fav-styles";
s.textContent = `
      .ssb-star { position:absolute; top:4px; right:4px; z-index:30; width:24px; height:24px; padding:0; cursor:pointer;
        border:none; border-radius:50%; background:rgba(0,0,0,0.35); display:flex; align-items:center; justify-content:center;
        transition: transform .1s, background .15s; }
      .ssb-star:hover { transform: scale(1.15); background: rgba(0,0,0,0.55); }
      .ssb-star--on { background: rgba(0,0,0,0.15); }
    `;
(document.head || document.documentElement).appendChild(s);
}
function boot() {
injectStyles();
registerModMenuToggles();
if (skinUnlockerOn()) {
let early = false;
const stop = window.__ssbMenuPoll(function skinStart() {
const ex = window.extern;
if (!skinUnlockerOn()) {
stop();
return;
}
if (!ex || !ex.account) return;
installSkinHooks();
if (ex.isGameReady) {
stop();
applySkinMemory(true);
} else if (!early) {
early = true;
applySkinMemory(false);
}
}, 100);
}
whenReady(() => {
installSkinHooks();
installFavFilterHook();
let _wasPauseWSVisible = false;
document.addEventListener("pointerlockchange", () => {
if (document.pointerLockElement) _wasPauseWSVisible = false;
});
window.__ssbMenuPoll(() => {
if (document.pointerLockElement) {
_wasPauseWSVisible = false;
return;
}
if (showFavIcon() || favOnly() || favFirst()) {
installFavFilterHook();
if (inInventory()) decorateTiles();
}
const ex = window.extern;
if (!skinUnlockerOn() || !ex || !ex.inGame) {
_wasPauseWSVisible = false;
if (applyPending && skinUnlockerOn()) applySkinMemory(
true);
return;
}
const pauseWS = document.querySelector(".pause-game-weapon-select");
const wsVisible = !!pauseWS && (!pauseWS.checkVisibility || pauseWS
.checkVisibility()) && pauseWS.getBoundingClientRect().width > 4;
if (wsVisible && !_wasPauseWSVisible) {
refreshHeldWeaponPose();
setTimeout(() => refreshHeldWeaponPose(true), 400);
}
_wasPauseWSVisible = wsVisible;
}, 600);
});
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
})();
(function() {
"use strict";
const REF_BASE_PX = 21.06;
const VAR_NAME = "--ssb-ui-scale";
const STYLE_ID = "ssb-ui-scale-style";
const GUI_STYLE_ID = "ssb-gui-scale-style";
const GUI_VAR = "--ssb-gui";
const CH_VAR = "--ssb-ch-scale";
let _guiNow = null;
function guiValue() {
let g = 1;
try {
g = +window.__ssbGuiScale();
} catch (e) {
window.__ssbErr("uiscale#5", e)
}
return g >= 0.4 && g <= 1.2 ? g : 1;
}
function applyGui() {
const g = guiValue();
if (g === _guiNow) return g;
_guNowSet(g);
return g;
}
function _guNowSet(g) {
_guiNow = g;
let el = document.getElementById(GUI_STYLE_ID);
const root = document.documentElement;
if (g === 1) {
if (el) el.remove();
if (root) root.style.removeProperty(GUI_VAR);
return;
}
if (!el) {
el = document.createElement("style");
el.id = GUI_STYLE_ID;
(document.head || root).appendChild(el);
}
el.textContent =
"html, html *:where(:not(#reticleContainer):not(#reticleContainer *):not(#reticleDot):not(#reticleDot *)) { font-size: calc(1.95 * var(--ssb-vh, 1vh) * var(" +
GUI_VAR + ", 1)); }\n" +
"html .teamLetter.red, html .teamLetter.blue { font-size: calc(3 * var(--ssb-vh, 1vh) * var(" +
GUI_VAR + ", 1)); }";
if (root) root.style.setProperty(GUI_VAR, String(g));
}
applyGui();
const ROOTS = [
"#mod-settings-section",
"#mod-crosshair-section",
"#ssb-stats-panel",
"#ssb-pinned-stats",
".vol-wrap",
"#ssb-changelog-panel",
"#ssb-intro-panel",
".ssb-star",
"#ssb-dialog-panel",
"#ssb-toast-stack",
"#ssb-update-toast",
"#mod-top-bar",
"#ssb-global-tooltip",
];
function ensureStyle() {
let el = document.getElementById(STYLE_ID);
if (!el) {
el = document.createElement("style");
el.id = STYLE_ID;
(document.head || document.documentElement).appendChild(el);
el.textContent = ROOTS.join(", ") + " { zoom: var(" + VAR_NAME + ", 1); }\n" +
".vol-wrap, #ssb-pinned-stats { zoom: calc(var(" + VAR_NAME + ", 1) * 0.85); }\n" +
"#ssb-stats-panel { min-width: min(640px, calc(96vw / var(" + VAR_NAME +
", 1))) !important; max-width: min(1160px, calc(96vw / var(" + VAR_NAME +
", 1))) !important; max-height: calc(92vh / var(" + VAR_NAME +
", 1)) !important; overflow: auto !important; }\n" +
"#ssb-changelog-panel { max-height: min(760px, calc((100vh - 36px) / var(" + VAR_NAME +
", 1))); }\n" +
"#mod-settings-section, #mod-crosshair-section { max-height: calc(min(48vh, 100vh - 330px) / var(" +
VAR_NAME + ", 1)) !important; }\n" +
"#popupInnards.mod-tab-active { height: min(calc(25em + var(--ss-space-xl) - var(--ss-space-md)), calc(100vh - 330px)); min-height: 0; margin-bottom: var(--ss-space-md) !important; }\n" +
"#popupInnards.mod-tab-active > #mod-settings-section { flex: 1 1 0; min-height: 0; max-height: none !important; }\n" +
"#popupInnards.mod-tab-active { width: min(43.5em, calc(100vw - 6em)) !important; }";
el.textContent += `
                #mod-settings-section, #mod-crosshair-section { min-width:0; container-type:inline-size; }
                #mod-settings-section .mod-item { min-width:0; gap:var(--ssb-gap); position:relative; }
                #mod-settings-section .mod-label { overflow-wrap:anywhere; min-width:0; }
                #mod-settings-section .mod-grid { column-gap:24px; }
                #mod-settings-section .mod-slider-container { flex-wrap:wrap; gap:var(--ssb-gap); }
                #mod-settings-section .mod-slider-label { min-width:0; }
                #mod-settings-section .mod-slider-inner-wrap { min-width:120px; }
                #mod-settings-section input[type=checkbox], #mod-crosshair-section .ch2-check-label input[type=checkbox] { width:1px; height:1px; }
                #mod-settings-section input:focus-visible ~ .mod-box, #mod-crosshair-section input:focus-visible ~ .ch2-check-box {
                    outline:3px solid var(--ssb-focus); outline-offset:3px;
                }
                :is(#mod-top-bar,#mod-settings-section,#mod-crosshair-section,#ssb-dialog-panel) :is(button,input,select):focus-visible,
                :is(#mod-settings-tab,#mod-crosshair-tab,.ssb-star):focus-visible { outline:3px solid var(--ssb-focus)!important; outline-offset:2px; }
                #mod-top-bar { min-width:0; }
                .ssb-settings-feedback:not(:has(> :not(:empty))) { display:none; }
                .ssb-settings-feedback { flex-basis:100%; display:flex; flex-wrap:wrap; justify-content:space-between; gap:6px; font-size:12px; font-weight:700; color:var(--ssb-ink); }
                .ssb-reload-notice { margin-left:auto; }
                .ssb-reload-pending { background:#fff1c2; color:#653c00; padding:2px 6px; border-radius:4px; }
                #mod-crosshair-section .ch2-control-row, #mod-crosshair-section .ch2-control-right { flex-wrap:wrap; }
                #mod-crosshair-section .ch2-label { white-space:normal; }
                #mod-crosshair-section .ch2-check-label { position:relative; }
                #ssb-global-tooltip { max-width:min(250px,calc((100vw - 24px) / var(${VAR_NAME}, 1)))!important; box-sizing:border-box; overflow-wrap:anywhere; }
                @container (max-width:520px) {
                    #mod-settings-section .mod-grid { grid-template-columns:minmax(0,1fr); }
                    #mod-crosshair-section .ch2-top { flex-direction:column; gap:16px; }
                    #mod-crosshair-section .ch2-preview-col { position:static; width:min(100%,300px); align-self:center; flex:none!important; }
                    #mod-crosshair-section .ch2-right-col { width:100%; }
                }
                @media (max-height:800px) {
                    #mod-top-bar .mod-jump-bar { flex-wrap:nowrap; overflow-x:auto; width:100%; padding-bottom:3px; }
                    #mod-top-bar .mod-jump-chip { flex-shrink:0; }
                    #mod-top-bar { gap:6px; padding-block:6px; }
                }
                @media (prefers-reduced-motion:reduce) {
                    :is(#mod-top-bar,#mod-settings-section,#mod-crosshair-section,#ssb-dialog-overlay,#ssb-toast-stack,#ssb-update-toast) *,
                    #ssb-global-tooltip,.ssb-star { animation:none!important; transition:none!important; scroll-behavior:auto!important; }
                }
            `;
}
return el;
}
const FIT_ROOTS = ["#mod-settings-section", "#mod-crosshair-section"];
function fitPass(globalScale) {
const vw = document.documentElement.clientWidth || window.innerWidth;
const vh = document.documentElement.clientHeight || window.innerHeight;
const MARGIN = 8;
for (const sel of FIT_ROOTS) {
const el = document.querySelector(sel);
if (!el || !el.offsetParent) continue;
const parentW = el.parentElement ? el.parentElement.clientWidth : 0;
const key = globalScale + "|" + vw + "x" + vh + "|" + parentW + "|" + el.scrollHeight + "|" + el
.childElementCount;
if (el.__ssbFitKey === key) continue;
el.__ssbFitKey = key;
let z = globalScale;
el.style.zoom = "";
for (let i = 0; i < 5; i++) {
const cw = el.clientWidth,
sw = el.scrollWidth;
const rect = el.getBoundingClientRect();
let shrink = 1;
if (cw && sw > cw) shrink = Math.min(shrink, cw / sw);
if (rect.width && rect.right > vw - MARGIN) shrink = Math.min(shrink, (vw - MARGIN - rect.left) /
rect.width);
if (shrink >= 0.999) break;
z = Math.max(0.5, Math.round(z * shrink * 0.995 * 1000) / 1000);
el.style.zoom = String(z);
}
if (z >= globalScale - 0.001 && el.style.zoom) el.style.zoom = "";
const tb = sel === "#mod-settings-section" && document.getElementById("mod-top-bar");
if (tb) tb.style.zoom = el.style.zoom;
}
}
let _last = 0,
_lastCh = 0;
function applyScale() {
if (document.hidden || document.pointerLockElement) return;
const gui = applyGui();
let base = NaN;
try {
base = parseFloat(getComputedStyle(document.documentElement).fontSize);
} catch (e) {
window.__ssbErr("uiscale#1", e)
}
let scale = base > 0 ? base / REF_BASE_PX : (window.innerHeight || 1080) / 1080;
if (!Number.isFinite(scale) || scale <= 0) scale = 1;
if (Math.abs(scale - 1) < 0.02) scale = 1;
scale = Math.round(scale * 1000) / 1000;
if (scale !== _last) {
_last = scale;
try {
document.documentElement.style.setProperty(VAR_NAME, String(scale));
} catch (e) {
window.__ssbErr("uiscale#2", e)
}
}
let ch = Math.round(scale / gui * 1000) / 1000;
if (Math.abs(ch - 1) < 0.02) ch = 1;
if (ch !== _lastCh) {
_lastCh = ch;
try {
document.documentElement.style.setProperty(CH_VAR, String(ch));
} catch (e) {
window.__ssbErr("uiscale#6", e)
}
}
try {
fitPass(scale);
} catch (e) {
window.__ssbErr("uiscale#3", e)
}
try {
if (window.__ssbPaintModTop) window.__ssbPaintModTop();
} catch (e) {
window.__ssbErr("uiscale#4", e)
}
}
let frame = null,
retry = null,
observed = [],
ro = null,
mo = null;
const nativeFrame = window.__ssbNativeFrame;
function requestLayout() {
if (document.hidden || document.pointerLockElement || frame !== null) return;
frame = nativeFrame.request(() => {
frame = null;
applyScale();
});
}
window.__ssbRequestLayout = requestLayout;
function cancelLayout() {
if (frame !== null) nativeFrame.cancel(frame);
frame = null;
clearTimeout(retry);
retry = null;
}
function bindRoots() {
const roots = FIT_ROOTS.map(sel => document.querySelector(sel)).filter(Boolean);
const targets = [...new Set(roots.concat(roots.map(el => el.parentElement)).filter(Boolean))];
if (targets.length === observed.length && targets.every((el, n) => el === observed[n])) return;
if (ro) ro.disconnect();
if (mo) mo.disconnect();
observed = targets;
if (window.ResizeObserver) {
ro = new ResizeObserver(requestLayout);
targets.forEach(el => ro.observe(el));
}
mo = new MutationObserver(records => {
if (records.some(r => !r.target.closest?.("#ch2-preview-wrap") &&
(r.type === "childList" || r.attributeName === "class" || r.attributeName === "hidden")
)) requestLayout();
});
roots.forEach(el => mo.observe(el, {
childList: true,
subtree: true,
attributes: true,
attributeFilter: ["class", "hidden"]
}));
requestLayout();
}
function boot() {
ensureStyle();
requestLayout();
bindRoots();
window.addEventListener("resize", requestLayout);
document.addEventListener("fullscreenchange", requestLayout);
if (document.fonts) document.fonts.ready.then(requestLayout);
document.addEventListener("ssb:settings-change", requestLayout);
document.addEventListener("click", e => {
if (!e.target.closest?.(
"#mod-settings-section,#mod-crosshair-section,#mod-top-bar,#mod-settings-tab,#mod-crosshair-tab"
)) return;
requestLayout();
clearTimeout(retry);
retry = setTimeout(requestLayout, 180);
}, true);
function reconcile() {
cancelLayout();
if (document.hidden || document.pointerLockElement) {
if (ro) ro.disconnect();
if (mo) mo.disconnect();
observed = [];
} else {
bindRoots();
requestLayout();
}
}
document.addEventListener("visibilitychange", reconcile);
document.addEventListener("pointerlockchange", reconcile);
window.addEventListener("pagehide", cancelLayout);
if (document.readyState !== "complete") window.addEventListener("load", requestLayout, {
once: true
});
window.__ssbMenuPoll(() => {
bindRoots();
if (_last && !document.documentElement.style.getPropertyValue(VAR_NAME)) {
_last = 0;
requestLayout();
}
}, 2000);
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
})();
(function() {
"use strict";
const KEY = "tp-infiniteChat";
const STYLE_ID = "ssb-infinite-chat-style";
const MAX_KEEP = 500;
const GAME_KEEP = 5;
const isOn = () => {
try {
return JSON.parse(localStorage.getItem(KEY) || "false") === true;
} catch (e) {
return false;
}
};
const setOn = (v) => {
try {
localStorage.setItem(KEY, JSON.stringify(!!v));
} catch (e) {
window.__ssbErr("chat#1", e)
}
};
const inPlay = () => {
const w = document.querySelector(".chat-wrapper");
return !!w && !!document.querySelector(".game-screen") && !w.closest(".is-paused");
};
function styleEl() {
let el = document.getElementById(STYLE_ID);
if (!el) {
el = document.createElement("style");
el.id = STYLE_ID;
(document.head || document.documentElement).appendChild(el);
}
return el;
}
function applyCSS() {
styleEl().textContent =
".game-screen #chatOut:not(.is-paused *){overflow-y:auto!important;overscroll-behavior:contain;scrollbar-width:none!important;-ms-overflow-style:none!important;}" +
".game-screen #chatOut:not(.is-paused *)::-webkit-scrollbar{width:0!important;height:0!important;display:none!important;}" +
".game-screen #chatIn:not(.is-paused *){flex-shrink:0!important;}" +
".ssb-chat-latest{position:absolute;top:6px;right:16px;z-index:3;padding:6px 10px;border:2px solid var(--ssb-blue,#0E7697);border-radius:var(--ssb-radius,8px);background:#fff;color:var(--ssb-ink,#0C576F);font:700 13px system-ui;cursor:pointer;}" +
".ssb-chat-latest[hidden]{display:none!important;}" +
".chat-container{scrollbar-width:none!important;-ms-overflow-style:none!important;}" +
".chat-container::-webkit-scrollbar{width:0!important;height:0!important;display:none!important;}";
}
function panelPx(wrap) {
const cs = getComputedStyle(wrap);
const fs = parseFloat(cs.fontSize) || 16;
const v = cs.getPropertyValue("--ss--chat-height").trim();
const n = parseFloat(v);
if (n > 0 && /px$/.test(v)) return n;
if (n > 0 && /^[\d.]+em$/.test(v)) return n * fs;
return 14.5 * fs;
}
let rowHeight = 0;
function rowPx(out) {
if (rowHeight) return rowHeight;
let h = 0,
el = out.lastElementChild;
for (let k = 0; el && k < 8; el = el.previousElementSibling, k++) {
const eh = el.offsetHeight;
if (eh && (!h || eh < h)) h = eh;
}
return (rowHeight = h);
}
function sizeInPlayChat() {
const out = document.getElementById("chatOut");
if (!out) return;
if (!inPlay()) {
if (out.style.maxHeight) out.style.removeProperty("max-height");
return;
}
const wrap = document.querySelector(".chat-wrapper");
const input = document.getElementById("chatIn");
if (!wrap) return;
const ih = rowPx(out);
if (!ih) return;
const avail = panelPx(wrap) - (input ? input.offsetHeight : 0);
const rows = Math.max(3, Math.floor(avail / ih));
const px = Math.round(rows * ih) + "px";
if (out.style.maxHeight !== px) out.style.maxHeight = px;
}
const lines = out => out.getElementsByClassName("chat-item").length;
function restore(out, records, keep) {
let added = false;
for (let k = records.length - 1; k >= 0; k--) {
const rec = records[k];
if (rec.addedNodes && rec.addedNodes.length) added = true;
const removed = rec.removedNodes;
if (!removed || !removed.length) continue;
const prev = rec.previousSibling,
next = rec.nextSibling;
if (!prev && !next) {
followLatest = true;
break;
}
if (removed.length !== 1) continue;
if (lines(out) >= keep) continue;
const node = removed[0];
if (!node || node.nodeType !== 1 || !node.classList) continue;
if (!node.classList.contains("chat-item")) continue;
if (node.classList.contains("chat-pinned-item")) continue;
const ref = next && next.parentNode === out ? next :
prev && prev.parentNode === out ? prev.nextSibling :
out.firstChild;
try {
out.insertBefore(node, ref);
} catch (e) {
window.__ssbErr("chat#2", e)
}
}
for (let n = lines(out); n > keep; n--) {
const oldest = out.querySelector(".chat-item:not(.chat-pinned-item)") || out.querySelector(".chat-item");
if (!oldest) break;
oldest.remove();
}
return added;
}
let obs = null,
hooked = null,
stopPoll = null,
listening = false;
let frame = null,
ro = null,
wrapObserver = null,
scrollHost = null,
jump = null;
let followLatest = true,
pendingMessages = false,
observedWidth = -1,
lastPlaying = null,
wrapPosSet = null;
const nativeFrame = window.__ssbNativeFrame;
function onScroll() {
if (!scrollHost || inPlay()) return;
followLatest = scrollHost.scrollHeight - scrollHost.clientHeight - scrollHost.scrollTop < 24;
if (followLatest && jump) jump.hidden = true;
}
function flushChat() {
frame = null;
if (document.hidden || !hooked || !hooked.isConnected || (hooked.checkVisibility && !hooked
.checkVisibility())) return;
sizeInPlayChat();
const playing = inPlay();
if (playing) followLatest = true;
const host = playing ? hooked : (hooked.closest(".chat-container") || hooked);
if (host !== scrollHost) {
if (scrollHost) scrollHost.removeEventListener("scroll", onScroll);
scrollHost = host;
scrollHost.addEventListener("scroll", onScroll, {
passive: true
});
}
if (playing || (pendingMessages && followLatest)) host.scrollTop = host.scrollHeight;
if (jump) jump.hidden = playing || followLatest || (!pendingMessages && jump.hidden);
pendingMessages = false;
}
function copyChat(out) {
if (!window.__ssbUI) return;
if (!out || !lines(out)) {
window.__ssbUI.toast("There's no chat to copy yet.");
return;
}
const rows = Array.from(out.getElementsByClassName("chat-item")).map(el => {
const s = (el.textContent || "").replace(/\s+/g, " ").trim();
const t = el.getAttribute("data-ssb-t");
return s ? (t ? "[" + t + "] " : "") + s : "";
}).filter(Boolean);
if (!rows.length) {
window.__ssbUI.toast("There's no chat to copy yet.");
return;
}
let when = "";
try {
when = ", copied " + new Date().toLocaleString();
} catch (e) {}
return window.__ssbUI.copyText("Shell Shockers chat" + when + "\n" + rows.join("\n"),
"Copied " + rows.length + (rows.length === 1 ? " chat message." : " chat messages."));
}
window.__ssbCopyChat = () => copyChat(document.getElementById("chatOut"));
window.__ssbChatCopyRow = () => {
const c = document.createElement("div");
c.className = "mod-slider-container";
c.setAttribute("data-setting", "ssb-copyChat");
c.setAttribute("data-keywords", "chat copy export save text log history messages clipboard");
const l = document.createElement("div");
l.className = "mod-slider-label";
l.textContent = "Copy Chat";
l.setAttribute("data-tooltip",
"Copies every chat message the game still has, oldest first, as plain text. With Infinite Chat History on that is the whole match. Chat Timestamps adds the times.");
l.style.cursor = "default";
const b = document.createElement("button");
b.type = "button";
b.className = "mod-num-input mod-key-btn";
b.style.cssText = "width: 120px; padding: 6px 10px; cursor: pointer; font-weight: 700;";
b.textContent = "Copy";
b.addEventListener("click", () => {
try {
if (window.BAWK && window.BAWK.play) window.BAWK.play("ui_click");
} catch (e) {
window.__ssbErr("copychat#1", e);
}
window.__ssbCopyChat();
});
c.appendChild(l);
c.appendChild(b);
return c;
};
function scheduleChat(added) {
pendingMessages = pendingMessages || added === true;
if (!document.hidden && frame === null) frame = nativeFrame.request(flushChat);
}
function cleanupHook() {
if (obs) obs.disconnect();
if (ro) ro.disconnect();
if (wrapObserver) wrapObserver.disconnect();
if (scrollHost) scrollHost.removeEventListener("scroll", onScroll);
if (jump) jump.remove();
scrollHost = jump = null;
if (wrapPosSet) {
wrapPosSet.style.removeProperty("position");
wrapPosSet = null;
}
rowHeight = 0;
followLatest = true;
observedWidth = -1;
lastPlaying = null;
}
function hook() {
const out = document.getElementById("chatOut");
if (!out || hooked === out) return;
cleanupHook();
hooked = out;
const wrap = out.closest(".chat-wrapper");
if (wrap) {
if (getComputedStyle(wrap).position === "static") {
wrap.style.position = "relative";
wrapPosSet = wrap;
}
jump = document.createElement("button");
jump.type = "button";
jump.className = "ssb-chat-latest";
jump.textContent = "New messages — jump to latest";
jump.hidden = true;
jump.addEventListener("click", () => {
followLatest = true;
scheduleChat(true);
});
wrap.appendChild(jump);
lastPlaying = inPlay();
wrapObserver = new MutationObserver(() => {
const now = inPlay();
if (now === lastPlaying) return;
lastPlaying = now;
rowHeight = 0;
scheduleChat(false);
});
for (let el = wrap; el && el !== document.body; el = el.parentElement) {
wrapObserver.observe(el, {
attributes: true,
attributeFilter: ["class"]
});
}
}
if (window.ResizeObserver) {
ro = new ResizeObserver(entries => {
const width = entries[0].contentRect.width;
if (width !== observedWidth) {
observedWidth = width;
rowHeight = 0;
scheduleChat(false);
}
});
ro.observe(wrap || out);
}
obs = new MutationObserver((records) => {
obs.disconnect();
const added = restore(out, records, MAX_KEEP);
obs.observe(out, {
childList: true
});
rowHeight = 0;
scheduleChat(added);
});
obs.observe(out, {
childList: true
});
scheduleChat(true);
}
const onRelayout = () => {
rowHeight = 0;
scheduleChat(false);
};
function visibilityChanged() {
if (frame !== null) nativeFrame.cancel(frame);
frame = null;
if (!document.hidden) {
hook();
onRelayout();
}
}
function enable() {
applyCSS();
hook();
if (!stopPoll) stopPoll = window.__ssbMenuPoll(hook, 2000, {
inMatch: true
});
if (!listening) {
listening = true;
window.addEventListener("resize", onRelayout);
document.addEventListener("pointerlockchange", onRelayout);
document.addEventListener("visibilitychange", visibilityChanged);
document.addEventListener("ssb:settings-change", onRelayout);
if (document.fonts) document.fonts.addEventListener("loadingdone", onRelayout);
}
}
function disable() {
if (stopPoll) {
stopPoll();
stopPoll = null;
}
if (listening) {
listening = false;
window.removeEventListener("resize", onRelayout);
document.removeEventListener("pointerlockchange", onRelayout);
document.removeEventListener("visibilitychange", visibilityChanged);
document.removeEventListener("ssb:settings-change", onRelayout);
if (document.fonts) document.fonts.removeEventListener("loadingdone", onRelayout);
}
cleanupHook();
obs = ro = wrapObserver = null;
if (frame !== null) nativeFrame.cancel(frame);
frame = null;
pendingMessages = false;
hooked = null;
const out = document.getElementById("chatOut");
if (out) {
out.style.removeProperty("max-height");
const items = out.querySelectorAll(".chat-item");
let extra = items.length - GAME_KEEP;
for (let k = 0; k < items.length && extra > 0; k++) {
if (items[k].classList.contains("chat-pinned-item")) continue;
items[k].remove();
extra--;
}
}
const el = document.getElementById(STYLE_ID);
if (el) el.remove();
}
function sync() {
if (isOn()) enable();
else disable();
}
function boot() {
sync();
window.__ssbSettings.add({
key: KEY,
section: "chat",
after: "tp-hideChat",
label: "Infinite Chat History",
code: "Ai",
def: false,
tip: "Stops the game deleting old chat messages, so the whole match's chat is kept. Pause or open chat and scroll up to read it back. Copy Chat, below, copies every retained line as text. Off, the chat keeps the game's newest 5 messages.",
keywords: "chat log scroll back messages",
get: isOn,
set: (v) => {
setOn(v);
sync();
}
});
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
})();
(function() {
"use strict";
const KEY = "tp-chatTimes";
const STYLE_ID = "ssb-chat-times-style";
const isOn = () => {
try {
return JSON.parse(localStorage.getItem(KEY) || "false") === true;
} catch (e) {
return false;
}
};
const setOn = (v) => {
try {
localStorage.setItem(KEY, JSON.stringify(!!v));
} catch (e) {
window.__ssbErr("chattimes#1", e)
}
};
let obs = null,
out = null,
stopPoll = null;
function now() {
const d = new Date();
try {
return d.toLocaleTimeString([], {
hour: "2-digit",
minute: "2-digit"
});
} catch (e) {
return ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
}
}
function stamp(records) {
let t = "";
for (const rec of records) {
for (const n of rec.addedNodes) {
if (n.nodeType !== 1 || !n.classList.contains("chat-item") || n.hasAttribute("data-ssb-t")) continue;
n.setAttribute("data-ssb-t", t || (t = now()));
}
}
}
function hook() {
const el = document.getElementById("chatOut");
if (!el || el === out) return;
if (obs) obs.disconnect();
out = el;
obs = new MutationObserver(stamp);
obs.observe(el, {
childList: true
});
}
function css(on) {
let el = document.getElementById(STYLE_ID);
if (!on) {
if (el) el.remove();
return;
}
if (!el) {
el = document.createElement("style");
el.id = STYLE_ID;
(document.head || document.documentElement).appendChild(el);
}
el.textContent =
".is-paused #chatOut .chat-item[data-ssb-t]::before{content:attr(data-ssb-t);margin-right:.45em;opacity:.6;font-size:.82em;font-variant-numeric:tabular-nums;}";
}
function sync() {
const on = isOn();
css(on);
if (on) {
hook();
if (!stopPoll) stopPoll = window.__ssbMenuPoll(hook, 2000, {
inMatch: true
});
return;
}
if (stopPoll) {
stopPoll();
stopPoll = null;
}
if (obs) obs.disconnect();
obs = out = null;
}
function boot() {
sync();
window.__ssbSettings.add({
key: KEY,
section: "chat",
after: "tp-infiniteChat",
label: "Chat Timestamps",
code: "Ct",
def: false,
tip: "When you pause, each chat message shows the time it arrived. The chat you see while playing doesn't change. Messages from before you turned it on have no time.",
keywords: "chat time times timestamp timestamps clock when sent arrived hour minute",
get: isOn,
set: (v) => {
setOn(v);
sync();
}
});
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
})();
(function() {
"use strict";
document.addEventListener("pointerlockchange", () => {
const v = window.vueApp;
if (!document.pointerLockElement || !v || !v.game || !v.game.pauseScreen || !v.screens) return;
if (!v.game.isPaused || v.game.pauseScreen.showMenu || v.showScreen !== v.screens.game) return;
try {
v.setPause(false);
} catch (e) {
return;
}
const w = document.querySelector(".chat-wrapper");
if (w) w.style.height = "auto";
console.log("[Better HUD] Cleared a stale pause state after spawning (stuck blue chat panel).");
});
})();
(function() {
"use strict";
const BTN_ID = "ssb-history-btn";
const KEY = "tp-showMatchHistory";
const isOn = () => {
try {
const v = localStorage.getItem(KEY);
return v === null ? true : JSON.parse(v) === true;
} catch (e) {
return true;
}
};
const setOn = (v) => {
try {
localStorage.setItem(KEY, JSON.stringify(!!v));
} catch (e) {
window.__ssbErr("history#1", e)
}
};
const visible = (el) => {
if (el.checkVisibility && !el.checkVisibility()) return false;
const r = el.getBoundingClientRect();
return r.width > 8 && r.height > 8;
};
function anchorFor(grp) {
const kids = [...grp.children].filter((c) => c.id !== BTN_ID);
return kids.find((c) => c.classList.contains("mod-server-clone") && c.style.display !== "none") ||
kids.find((c) => c.classList.contains("btn_game_mode") && !c.classList.contains("mod-server-clone")) ||
kids.find((c) => visible(c) && /server/i.test(c.textContent || "")) ||
kids.find((c) => visible(c) && /game\s*mode/i.test(c.textContent || "")) ||
null;
}
const ICON =
'<svg class="ssb-hist-ico" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round">' +
'<g class="ssb-hist-ring"><path d="M3.5 12A8.5 8.5 0 1 1 6 18"/><path d="M1 9.6l2.5 2.7L6 9.6"/></g>' +
'<g class="ssb-hist-hands"><path d="M12 7.6V12l3 2"/></g></svg>';
const CSS = [
"#ssb-history-btn.ssb-hist-round { width:1.8em; min-width:1.8em; max-width:none; height:1.8em; padding:0; border-radius:50%; display:flex; align-items:center; justify-content:center; line-height:1; }",
"#ssb-history-btn .ssb-hist-ico { font-size:inherit; width:0.82em; height:0.82em; display:block; overflow:visible; pointer-events:none; filter:drop-shadow(0.1em 0.1em 0 rgba(0,0,0,0.3)); }",
"#ssb-history-btn .ssb-hist-ico g { transform-box:view-box; transform-origin:12px 12px; }",
"#ssb-history-btn.ssb-twist .ssb-hist-ring { animation:ssb-hist-rewind 0.85s cubic-bezier(0.5,0,0.2,1); }",
"#ssb-history-btn.ssb-twist .ssb-hist-hands { animation:ssb-hist-hands 0.85s cubic-bezier(0.5,0,0.2,1); }",
"@keyframes ssb-hist-rewind { to { transform:rotate(-360deg); } }",
"@keyframes ssb-hist-hands { to { transform:rotate(-720deg); } }"
].join("\n");
const still = () => !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
function build() {
const btn = document.createElement("button");
btn.id = BTN_ID;
btn.type = "button";
btn.className = "ss_button btn_big btn_blue bevel_blue box_relative ssb-hist-round";
btn.setAttribute("data-tooltip", "Match History");
btn.setAttribute("aria-label", "Match History");
btn.innerHTML = ICON;
const twist = () => {
if (!still()) btn.classList.add("ssb-twist");
};
btn.addEventListener("mouseenter", twist);
btn.addEventListener("focus", () => {
if (btn.matches(":focus-visible")) twist();
});
btn.addEventListener("animationend", (e) => {
if (e.animationName === "ssb-hist-rewind") btn.classList.remove("ssb-twist");
});
btn.addEventListener("click", (e) => {
e.preventDefault();
e.stopPropagation();
try {
if (window.BAWK && window.BAWK.play) window.BAWK.play("ui_toggletab");
} catch (err) {
window.__ssbErr("history#2", err)
}
if (typeof window.__ssbOpenHistory === "function") window.__ssbOpenHistory();
});
return btn;
}
function rowSig(grp) {
let s = "";
for (const c of grp.children) s += (c.id || c.className) + ":" + c.style.display + ";";
return s;
}
let _sig = "",
_ticks = 0,
_on = isOn(),
_mo = null;
let _watchedRow = null;
function watch() {
if (!_on || document.hidden || document.pointerLockElement || !document.body) {
unwatch();
return
}
const row = document.querySelector(".play-panel-btn-group");
if (!row || _watchedRow === row && row.isConnected) return;
unwatch();
_watchedRow = row;
_mo = new MutationObserver(() => {
inject();
_watchedRow = null;
watch();
});
_mo.observe(row, {
childList: true
});
for (const child of row.children)
if (child.id !== BTN_ID)
_mo.observe(child, {
attributes: true,
attributeFilter: ["style", "class"]
});
}
function unwatch() {
if (_mo) {
_mo.disconnect();
_mo = null;
}
_watchedRow = null;
}
function inject(poll) {
if (document.pointerLockElement) return;
if (poll === true) {
_on = isOn();
if (_on) watch();
else unwatch();
}
const existing = document.getElementById(BTN_ID);
if (!_on) {
if (existing) existing.remove();
_sig = "";
return;
}
const grp = document.querySelector(".play-panel-btn-group");
if (!grp) return;
if (existing && existing.parentElement === grp && rowSig(grp) === _sig && (poll !== true || ++_ticks % 8))
return;
_ticks = 0;
const btn = existing || build();
const a = anchorFor(grp);
const misplaced = btn.parentElement !== grp ||
(a ? btn.previousElementSibling !== a : btn !== grp.lastElementChild);
if (misplaced) grp.insertBefore(btn, a ? a.nextSibling : null);
_sig = rowSig(grp);
}
let _rz = 0;
function boot() {
if (!document.getElementById("ssb-hist-round-css")) {
const st = document.createElement("style");
st.id = "ssb-hist-round-css";
st.textContent = CSS;
(document.head || document.documentElement).appendChild(st);
}
window.__ssbSettings.add({
key: KEY,
section: "menus",
after: "tp-showServerList",
label: "Match History Button",
code: "Am",
def: true,
tip: "Shows a Match History button beside the Server selector on the home screen, opening your saved match history.",
keywords: "show match history icon stats games",
get: isOn,
set: (v) => {
setOn(v);
_on = !!v;
if (_on) watch();
else unwatch();
inject();
}
});
inject();
watch();
document.addEventListener("visibilitychange", () => {
if (document.hidden) unwatch();
else {
inject(true);
watch();
}
});
window.__ssbMenuPoll(() => inject(true));
document.addEventListener("pointerlockchange", () => {
if (document.pointerLockElement) unwatch();
else {
watch();
inject();
}
});
window.addEventListener("resize", () => {
clearTimeout(_rz);
_rz = setTimeout(() => {
if (!document.pointerLockElement) inject();
}, 120);
});
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
})();
(function() {
"use strict";
const KEY = "tp-gameFixes";
const isOn = () => {
try {
const v = localStorage.getItem(KEY);
return v === null ? true : JSON.parse(v) === true;
} catch (e) {
return true;
}
};
const setOn = (v) => {
try {
localStorage.setItem(KEY, JSON.stringify(!!v));
} catch (e) {
if (window.__ssbErr) window.__ssbErr("gamefixes#1", e);
}
};
window.__ssbGameFixesOn = isOn;
let _grid = null;
const dim = () => {
if (_grid) _grid.classList[isOn() ? "remove" : "add"]("ssb-gf-off");
};
function gear(row, grid) {
const b = document.createElement("button");
b.type = "button";
b.className = "ssb-uc-gear";
b.setAttribute("aria-label", "Game Fixes options");
b.setAttribute("data-tooltip", "Switch each game fix on or off on its own");
b.setAttribute("aria-expanded", "false");
b.addEventListener("click", ev => {
ev.preventDefault();
ev.stopPropagation();
try {
if (window.BAWK && window.BAWK.play) window.BAWK.play("ui_click");
} catch (e) {
if (window.__ssbErr) window.__ssbErr("gamefixes#2", e);
}
const subs = Array.from(grid.querySelectorAll(".ssb-gf-sub"));
subs.forEach(el => {
if (!el.id) el.id = "ssb-gf-" + el.getAttribute("data-setting");
});
b.setAttribute("aria-controls", subs.map(el => el.id).join(" "));
const open = grid.classList.toggle("ssb-uc-open");
b.setAttribute("aria-expanded", String(open));
if (open && subs.length) subs[subs.length - 1].scrollIntoView({
block: "nearest",
behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
});
});
row.classList.add("ssb-uc-has-gear");
row.appendChild(b);
_grid = grid;
dim();
}
function boot() {
window.__ssbSettings.add({
key: KEY,
section: "gameplay",
label: "Game Fixes",
code: "Gx",
def: true,
tip: "Workarounds for bugs in the game itself: Chick'n Winner Fix, Early Respawn Guard and Blank Egg Fix. Turns them all on or off together. Click the gear to switch each one on its own. Turn one off if the game fixes it.",
keywords: "game fixes fix bugs workarounds repair chicken winner respawn guard blank egg leave glitch gear",
get: isOn,
set: (v) => {
setOn(v);
dim();
},
onMount: gear
});
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
})();
(function() {
"use strict";
const KEY = "tp-fixChickenWinner";
const isOn = () => {
try {
const v = localStorage.getItem(KEY);
return v === null ? true : JSON.parse(v) === true;
} catch (e) {
return true;
}
};
const setOn = (v) => {
try {
localStorage.setItem(KEY, JSON.stringify(!!v));
} catch (e) {
if (window.__ssbErr) window.__ssbErr("chwfix#1", e);
}
};
const active = () => isOn() && (!window.__ssbGameFixesOn || window.__ssbGameFixesOn());
const NO_POPUP_MS = 25000,
AFTER_POPUP_MS = 4000;
let _since = 0,
_sawPopup = false;
function popupOpen() {
const el = document.getElementById("chickenNugget");
return !!(el && (el.checkVisibility ? el.checkVisibility() : el.offsetParent));
}
function recover(v) {
v.chwOnClick(false);
const x = window.extern;
if (x && x.inGame) {
if (document.pointerLockElement) return;
if (typeof v.disableRespawnButton === "function") v.disableRespawnButton(false);
if (typeof v.showGameMenu === "function") v.showGameMenu();
} else if (typeof v.chwHomeForceReset === "function") v.chwHomeForceReset();
}
function tick() {
try {
const v = window.vueApp;
if (!active() || !v || !v.chw || typeof v.chwOnClick !== "function") {
_since = 0;
return;
}
if (!v.chw.onClick) {
_since = 0;
_sawPopup = false;
return;
}
const now = Date.now();
if (!_since) _since = now;
if (popupOpen()) {
_sawPopup = true;
_since = now;
return;
}
if (now - _since < (_sawPopup ? AFTER_POPUP_MS : NO_POPUP_MS)) return;
_since = 0;
_sawPopup = false;
recover(v);
} catch (e) {
if (window.__ssbErr) window.__ssbErr("chwfix#2", e);
}
}
function boot() {
window.__ssbSettings.add({
key: KEY,
section: "gameplay",
after: "tp-gameFixes",
cls: "ssb-uc-sub ssb-gf-sub",
label: "Chick'n Winner Fix",
code: "Cw",
def: true,
tip: "If clicking Chick'n Winner leaves it blank (or the menus hidden), brings it back on its own, so you don't have to reload.",
keywords: "chicken winner chickn blank stuck broken free eggs ad fix",
get: isOn,
set: (v) => {
setOn(v);
_since = 0;
}
});
setInterval(tick, 1000);
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
})();
(function() {
"use strict";
const KEY = "tp-earlyRespawnGuard";
const isOn = () => {
try {
const v = localStorage.getItem(KEY);
return v === null ? true : JSON.parse(v) === true;
} catch (e) {
return true;
}
};
const setOn = (v) => {
try {
localStorage.setItem(KEY, JSON.stringify(!!v));
} catch (e) {
if (window.__ssbErr) window.__ssbErr("respawnguard#1", e);
}
};
const active = () => isOn() && (!window.__ssbGameFixesOn || window.__ssbGameFixesOn());
function onClick(ev) {
try {
const t = ev.target;
const btn = t && t.closest && t.closest(".btn-respawn.btn_big");
if (!btn || btn.classList.contains("btn_team_switch")) return;
const v = window.vueApp,
gs = v && v.$refs && v.$refs.gameScreen;
if (!v || !v.game || !active()) return;
const ready = !gs || typeof gs.delayTheCracking !== "boolean" || gs.delayTheCracking;
if (!(v.game.respawnTime > 0) && ready && !v.game.disableRespawnButton) return;
ev.stopImmediatePropagation();
ev.preventDefault();
if (gs && typeof gs.jiggleRespawnButton === "function") gs.jiggleRespawnButton();
tell();
} catch (e) {
if (window.__ssbErr) window.__ssbErr("respawnguard#2", e);
}
}
let _toldFor = null;
function tell() {
const id = window.__ssbGameCode || "";
if (_toldFor === id || !window.__ssbUI) return;
_toldFor = id;
window.__ssbUI.toast("Early Respawn Guard: wait for the countdown to end. Clicking Play early would restart it.", {
ms: 4500
});
}
function boot() {
window.__ssbSettings.add({
key: KEY,
section: "gameplay",
after: "tp-fixChickenWinner",
cls: "ssb-uc-sub ssb-gf-sub",
label: "Early Respawn Guard",
code: "Rw",
def: true,
tip: "Clicking Play before the respawn countdown is over no longer restarts it (the game could start it over at 5, mostly after you spectated or switched teams). The button just shakes.",
keywords: "respawn countdown timer reset play button too fast wait 5 seconds glitch spectate team switch",
get: isOn,
set: setOn
});
document.addEventListener("click", onClick, true);
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
})();
(function() {
"use strict";
const KEY = "tp-instantChickenWinner";
const isOn = () => {
try {
return JSON.parse(localStorage.getItem(KEY)) === true;
} catch (e) {
return false;
}
};
const setOn = (v) => {
try {
localStorage.setItem(KEY, JSON.stringify(!!v));
} catch (e) {
if (window.__ssbErr) window.__ssbErr("chwinstant#1", e);
}
};
function onClick(ev) {
try {
if (!isOn()) return;
const t = ev.target;
if (!t || !t.classList || !t.classList.contains("incentivized-egg-chick")) return;
const v = window.vueApp,
n = v && v.$refs && v.$refs.chickenNugget;
if (!n || n.isMiniGameComplete || !Array.isArray(n.eggs))
return;
const egg = n.eggs.find(e => e && e.id === t.id);
if (egg && typeof egg.value === "number" && egg.value < 5) egg.value =
5;
} catch (e) {
if (window.__ssbErr) window.__ssbErr("chwinstant#2", e);
}
}
function boot() {
window.__ssbSettings.add({
key: KEY,
section: "menus",
label: "Instant Chick'n Winner",
code: "Ci",
def: false,
tip: "In the Chick'n Winner egg game, one click cracks the egg instead of six. The prize is the same: the game settles it before the eggs show.",
keywords: "chicken winner chickn egg eggs crack click clicks instant fast quick free eggs",
get: isOn,
set: setOn
});
document.addEventListener("click", onClick, true);
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
})();
(function() {
"use strict";
if (window.__ssbAutoCw) return;
const KEY = "tp-chwAuto",
KMAX = "tp-chwAutoMax",
KDAY = "tp-chwAutoDay",
KWIN = "tp-chwAutoWins";
const FLOOR = 500,
DEF_MAX = 200,
CLS = "ssb-cwauto-run",
GONE = "ssb-cwauto-gone",
STYLE = "ssb-cwauto-style";
const SILENT = /^(ui_playconfirm|mini-egg-game_)/;
const HOOK = Symbol.for("ssb.cwauto.play");
const err = (t, e) => {
if (window.__ssbErr) window.__ssbErr(t, e);
};
let run = null,
pauseUntil = 0,
retryCount = 0,
retryReason = "",
lastEnd = 0,
silentUntil = 0,
closeUntil = 0;
let clk = 0,
lastTickAt = 0,
visAt = Date.now();
let watchedApp = null,
unwatch = null,
runObserver = null;
let ticking = false,
wakeQueued = false;
let prizeKey = "";
let typedAt = 0;
const isText = el => !!el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
document.addEventListener("keydown", e => {
if (isText(e.target)) typedAt = Date.now();
}, true);
const num = (k, d) => {
try {
const n = JSON.parse(localStorage.getItem(k));
return typeof n === "number" && isFinite(n) ? n : d;
} catch (e) {
return d;
}
};
const put = (k, v) => {
try {
localStorage.setItem(k, JSON.stringify(v));
} catch (e) {
err("cwauto#1", e);
}
};
const level = () => {
const n = num(KEY, 0);
return n === 1 || n === 2 || n === 3 ? n : 0;
};
const maxEggs = () => Math.max(0, Math.min(100000, Math.floor(num(KMAX, DEF_MAX))));
const pad = n => String(n).padStart(2, "0");
const today = () => {
const t = new Date();
return t.getFullYear() + "-" + pad(t.getMonth() + 1) + "-" + pad(t.getDate());
};
const rects = el => !!(el && el.getClientRects && el.getClientRects().length);
function day() {
let o = null;
try {
o = JSON.parse(localStorage.getItem(KDAY));
} catch (e) {
o = null;
}
if (!o || typeof o !== "object" || o.d !== today()) o = {
d: today()
};
["plays", "resets", "won", "spent"].forEach(k => {
if (typeof o[k] !== "number" || !isFinite(o[k]) || o[k] < 0) o[k] = 0;
});
return o;
}
function wins() {
let a = null;
try {
a = JSON.parse(localStorage.getItem(KWIN));
} catch (e) {
a = null;
}
return Array.isArray(a) ? a.filter(w => w && typeof w.i === "number" && typeof w.t === "number") : [];
}
function prize() {
const v = window.vueApp,
rw = v && v.chw && v.chw.reward;
const ids = rw && Array.isArray(rw.itemIds) ? rw.itemIds.filter(i => typeof i === "number") : [];
if (!ids.length) {
prizeKey = "";
return [];
}
if (typeof rw.eggs === "number" && rw.eggs > 0) return [];
const k = ids.join(",");
if (k === prizeKey) return [];
prizeKey = k;
const a = wins(),
t = Date.now();
ids.forEach(i => a.push({
i: i,
t: t,
s: 0
}));
put(KWIN, a.slice(-200));
return ids;
}
function style() {
if (document.getElementById(STYLE)) return;
const s = document.createElement("style");
s.id = STYLE;
const ad = "html." + CLS + " #chicknWinner #shellshockers_chicken_nugget_banner_ad";
s.textContent = "html." + CLS + " #chicknWinner,html." + CLS +
" #lightOverlay + div{visibility:hidden!important;pointer-events:none!important}" +
ad + "," + ad + " *{visibility:visible!important}" + ad + "{pointer-events:auto!important}" +
"html." + GONE + " #chicknWinner,html." + GONE + " #lightOverlay + div{display:none!important}" +
"#ssb-dialog-panel li.ssb-cwwin{display:flex;align-items:center;gap:12px;padding:6px 12px}" +
"#ssb-dialog-panel li.ssb-cwwin canvas{flex:none;width:64px;height:64px}#ssb-dialog-panel li.ssb-cwwin>div{min-width:0}";
(document.head || document.documentElement).appendChild(s);
}
const isSilent = () => !!run || Date.now() < silentUntil;
function hook() {
const B = window.BAWK;
if (!B || typeof B.play !== "function" || B.play[HOOK]) return;
const orig = B.play;
const wrap = function(name) {
if (typeof name === "string" && ((isSilent() && SILENT.test(name)) || (name === "ui_popupclose" &&
Date.now() < closeUntil))) return;
return orig.apply(this, arguments);
};
wrap[HOOK] = true;
B.play = wrap;
}
const matchRun = () => !!run && run.inMatch && !!window.extern && window.extern.inGame;
function calledBy(re) {
const n = Error.stackTraceLimit;
try {
Error.stackTraceLimit = 30;
return re.test(String(new Error().stack));
} catch (e) {
return false;
} finally {
Error.stackTraceLimit = n;
}
}
function wrapOnce(obj, name,
skip) {
const f = obj && obj[name];
if (typeof f !== "function" || f[HOOK]) return;
const w = function() {
if (run && skip()) return;
return f.apply(this, arguments);
};
w[HOOK] = true;
obj[name] = w;
}
function hookGame() {
const v = window.vueApp,
ex = window.extern;
wrapOnce(v, "playChwIngame", matchRun);
wrapOnce(v, "disableRespawnButton", () => matchRun() && calledBy(/resetGame/));
wrapOnce(v, "showGameMenu", () => matchRun() && calledBy(/resetGame/));
wrapOnce(ex, "releaseKeys", () => matchRun() && calledBy(/showChicknWinnerPopup/));
}
function popupBusy(v) {
const refs = v.$refs || {};
const winner = refs.chicknWinner;
if ((winner && winner.isShowing) || ((!winner || winner.isShowing !== false) &&
rects(document.getElementById("chicknWinner"))) || document.getElementById("ssb-dialog-overlay"))
return true;
for (const k in refs) {
if (!/Popup$/.test(k)) continue;
const r = refs[k],
el = r && (r.$el || r);
if (el && el.nodeType === 1 && rects(el)) return true;
}
return false;
}
function inMatchMenu(v) {
const g = v.game || (window.vueData && window.vueData.game);
return !!g && g.isPaused === true && !document.pointerLockElement;
}
function vip(ex) {
const a = ex.account;
if (!a || typeof a.isUpgraded !== "function") return false;
const raw = a.isUpgraded();
return (typeof window.__ssbAdBlock === "function" ? window.__ssbAdBlock(raw) : raw) === true;
}
function look(quiet) {
const v = window.vueApp,
ex = window.extern,
lvl = level();
if (!lvl) return {
why: "off"
};
if (!v || !ex || !v.chw || typeof v.playIncentivizedAd !== "function") return {
why: "the game isn't ready"
};
const c = v.chw;
if (!ex.inGame && (v.playClicked || (window.Loader && window.Loader.isShowing === true) || (v.screens && v
.showScreen === v.screens.game)))
return {
why: "the game is loading or joining a match"
};
if (!v.firebaseId || !ex.account) return {
why: "not signed in"
};
if (c.onClick || c.adBlockDetect || v.showAdBlockerVideoAd) return {
why: "busy"
};
if (!quiet && popupBusy(v)) return {
why: "a pop-up is open"
};
if (!quiet && Date.now() - typedAt < 4000 && isText(document.activeElement)) return {
why: "you're typing"
};
if (c.limitReached) {
if (lvl < 2) return {
why: "today's plays are used up"
};
const d = day(),
cost = 200 * ((Number(c.resets) || 0) + 1),
bal = ex.account.currentBalance;
if (typeof bal !== "number") return {
why: "the egg balance isn't known"
};
if (bal < cost) return {
why: "the next reset costs " + cost + " eggs, more than you have"
};
if (lvl === 2 && d.spent + cost > maxEggs()) return {
why: "the next reset (" + cost + " eggs) is over the daily cap"
};
if (lvl === 2 && bal - cost < FLOOR) return {
why: "the next reset (" + cost + " eggs) would leave under " + FLOOR
};
if (lvl === 2 && d.won < d.spent) return {
why: "winnings so far don't cover today's spending"
};
return {
go: "reset",
cost: cost
};
}
if (!c.ready) return {
why: "the cooldown isn't over yet"
};
if (!(c.winnerCounter === 0 || vip(ex))) return {
why: "the next play needs a video ad, so it's yours"
};
return {
go: "play",
cost: 0
};
}
function begin(kind, cost) {
const v = window.vueApp;
hook();
hookGame();
style();
document.documentElement.classList.remove(GONE);
run = {
app: v,
kind: kind,
t0: clk,
step: "wait",
cost: cost,
inMatch: !!window.extern.inGame
};
if (kind === "play") {
document.documentElement.classList.add(CLS);
const pop = document.getElementById("chicknWinner");
if (pop && typeof MutationObserver === "function") {
runObserver = new MutationObserver(() => {
if (run) wake();
});
runObserver.observe(pop, {
childList: true,
subtree: true,
attributes: true
});
}
}
try {
v.playIncentivizedAd();
} catch (e) {
err("cwauto#2", e);
finish(false, "the game could not start the attempt");
}
}
function finish(ok, reason) {
const wasReset = run && run.kind === "reset";
if (runObserver) {
runObserver.disconnect();
runObserver = null;
}
document.documentElement.classList.remove(CLS);
run = null;
lastEnd = Date.now();
silentUntil = lastEnd + 1500;
if (ok) {
retryCount = 0;
retryReason = "";
pauseUntil = 0;
} else if (reason) {
retryReason = reason;
const delay = wasReset ? 60000 : Math.min(60000, 15000 * Math.pow(2, Math.min(retryCount, 2)));
retryCount++;
pauseUntil = lastEnd + delay;
}
}
function note(ids) {
try {
if (window.__ssbUI) window.__ssbUI.toast("Chick'n Winner prize: " + ids.map(itemName).join(", "), {
type: "success"
});
} catch (e) {
err("cwauto#3", e);
}
}
function advance() {
const v = window.vueApp,
ex = window.extern,
c = v && v.chw,
now = clk,
r = run;
if (!v || !ex || !c || v !== r.app) return finish(false, "the game changed while waiting");
const quick = r.inMatch && ex.inGame && !inMatchMenu(v);
if (r.kind === "reset") {
if (!c
.limitReached) {
const d = day();
d.resets += 1;
d.spent += r.cost;
put(KDAY, d);
return finish(true);
}
if (now - r.t0 > 20000 && !c.onClick) return finish(false, "the game did not confirm the reset");
return;
}
const n = v.$refs && v.$refs.chickenNugget,
pop = document.getElementById("chicknWinner");
if (r.step === "wait") {
const popup = v.$refs && v.$refs.chicknWinner;
if (popup && popup.isShowing === true && n && !n.isMiniGameComplete && Array.isArray(n
.eggs) && n.eggs.length) {
r.step = "open";
r.t1 = now;
return;
}
if (now - r.t0 > 5000 && !c.onClick) return finish(false, "the game did not open the reward");
return;
}
if (r.step === "open") {
if (!document.hidden && !quick && now - r.t1 < 700) return;
const egg = n && n.eggs.find(e => e && e.active !== false && typeof e.value === "number");
const el = egg && document.getElementById(egg.id);
if (!el) {
if (now - r.t1 > 8000) finish(false, "the egg controls did not appear");
return;
}
egg.value = 5;
el.click();
r.step = "crack";
r.t2 = now;
return;
}
if (r.step === "crack") {
if (n && n.isMiniGameComplete) {
const rw = c.reward || {},
ids = prize();
const d = day();
d.plays += 1;
d.won += typeof rw.eggs === "number" && rw.eggs > 0 ? rw.eggs : 0;
put(KDAY, d);
if (ids.length) note(ids);
r.step = "shown";
r.t3 = now;
return;
}
if (now - r.t2 > 8000) return finish(false, "the egg game did not finish");
return;
}
if (r.step === "shown") {
if (!document.hidden && !quick && now - r.t3 < 2000) return;
const ok = document.getElementById("gotWinnerOk");
closeUntil = Date.now() + 4000;
if (ok) ok.click();
else if (typeof v.hideChicknWinnerPopup === "function") v.hideChicknWinnerPopup();
r.step = "close";
r.t4 = now;
return;
}
if (r.step === "close") {
const popup = v.$refs && v.$refs.chicknWinner;
if (!c.onClick && ((!popup || popup.isShowing === false) || !rects(pop))) {
if (document.hidden && rects(pop)) document.documentElement.classList.add(GONE);
return finish(true);
}
if (now - r.t4 > 8000) {
try {
v.$refs.chicknWinner.hide();
} catch (e) {
err("cwauto#5", e);
}
finish(false, "the reward popup did not close");
}
}
}
function watchReady() {
const v = window.vueApp;
if (v === watchedApp && unwatch) return;
if (unwatch) {
unwatch();
unwatch = null;
}
watchedApp = v;
if (v && typeof v.$watch === "function") {
unwatch = v.$watch(() => {
const c = v.chw || {};
const refs = v.$refs || {},
popup = refs.chicknWinner,
nugget = refs.chickenNugget;
return [c.ready, c.limitReached, c.onClick, popup && popup.isShowing,
nugget && nugget.isMiniGameComplete, v.firebaseId].join("|");
}, wake);
}
}
function wake() {
if (wakeQueued || (!run && !level())) return;
wakeQueued = true;
Promise.resolve().then(() => {
wakeQueued = false;
tick();
});
}
function tick() {
if (ticking) return;
ticking = true;
try {
watchReady();
const t = Date.now();
if (lastTickAt) clk += Math.max(0, Math.min(t - lastTickAt, 1500));
lastTickAt = t;
const html = document.documentElement;
unGone();
if (!level()) {
if (run) finish(false);
html.classList.remove(GONE);
return;
}
if (run) {
for (let i = 0; i < 6 && run; i++) {
const step = run.step;
advance();
if (!document.hidden || !run || run.step === step) break;
}
return;
}
prize();
const now = Date.now();
if (now < pauseUntil || now - lastEnd < 5000) return;
const w = look();
if (w.go) begin(w.go, w.cost);
} catch (e) {
err("cwauto#4", e);
try {
finish(false, "an unexpected error interrupted the attempt");
} catch (e2) {
}
} finally {
ticking = false;
}
}
function setLevel(n) {
put(KEY, n);
pauseUntil = 0;
retryCount = 0;
retryReason = "";
if (!n) document.documentElement.classList.remove(GONE);
if (!n && run) finish(false);
if (n) wake();
}
function status() {
const lvl = level(),
d = day(),
lines = ["Auto Chick'n Winner is " + (lvl ? "ON, level " + lvl : "OFF") + "."];
lines.push("Today: " + d.plays + (d.plays === 1 ? " play, " : " plays, ") + d.won + " eggs won" +
(d.resets ? ", " + d.spent + " eggs spent on " + d.resets + (d.resets === 1 ? " reset" :
" resets") : "") + ".");
if (lvl === 2) lines.push("Reset cap " + maxEggs() + " eggs a day; the balance stays at " + FLOOR +
" or more.");
if (lvl === 3) lines.push("No limits: it pays every reset your eggs cover.");
if (lvl) {
const w = look(true),
left = pauseUntil - Date.now();
lines.push(run ? (run.step === "wait" ? "Waiting for the game's reward response." : "Running now.") :
left > 0 ? "Retrying in " + Math.ceil(left / 1000) + " seconds: " + retryReason + "." :
w.go ? "Next: a " + w.go + ", as soon as no pop-up is open." :
"Waiting: " + w.why + ".");
}
const wl = wins();
if (wl.length) {
const names = wl.slice(-5).reverse().map(w => itemName(w.i));
lines.push("Skins won: " + names.join(", ") + (wl.length > 5 ? " and " + (wl.length - 5) + " more" :
"") + ".");
}
return lines.join("\n");
}
function itemName(id) {
const cat = window.extern && window.extern.catalog,
it = cat && typeof cat.findItemById === "function" ? cat.findItemById(id) : null;
return it && it.name ? it.name : "item " + id;
}
function winsBoot() {
if (!wins().some(w => !w.s) || typeof window.__ssbMenuPoll !== "function") return;
let quiet = 0,
stop = null;
const task = () => {
const v = window.vueApp,
ex = window.extern,
U = window.__ssbUI;
const ready = v && ex && U && typeof U.report === "function" && ex.catalog && typeof ex.catalog
.findItemById === "function" &&
Array.isArray(v.chwRewardIds) && v.chwRewardIds.length > 0 && !(window.Loader && window.Loader
.isShowing === true) &&
v.screens && v.showScreen === v.screens.home && !ex.inGame && !v.playClicked;
if (!ready || run || popupBusy(v) || document.getElementById("ssb-changelog-overlay") || (window
.__ssbIntro && window.__ssbIntro.busy && window.__ssbIntro.busy())) {
quiet = 0;
return;
}
if (++quiet < 3) return;
if (stop) stop();
showWins();
};
stop = window.__ssbMenuPoll(task, 1000);
}
function showWins() {
const all = wins(),
fresh = all.filter(w => !w.s).reverse();
if (!fresh.length) return;
const ex = window.extern,
cat = ex.catalog,
shown = fresh.slice(0, 24);
const when = t => {
try {
return new Date(t).toLocaleString([], {
month: "short",
day: "numeric",
hour: "numeric",
minute: "2-digit"
});
} catch (e) {
return "";
}
};
const rows = shown.map(w => {
const it = cat.findItemById(w.i);
return {
it: it,
label: it && it.name ? it.name : "item " + w.i,
text: [it && it.item_type_name, when(w.t)].filter(Boolean).join(" · ")
};
});
const sections = [{
items: rows.map(r => ({
label: r.label,
text: r.text
}))
}];
if (fresh.length > shown.length) sections.push({
items: [{
label: "And " + (fresh.length - shown.length) + " more"
}]
});
style();
window.__ssbUI.report({
title: "Chick'n Winner",
text: fresh.length === 1 ? "You won a new skin." : "You won " + fresh.length + " new skins.",
sections: sections
});
if (!document.getElementById("ssb-dialog-overlay"))
return;
all.forEach(w => {
w.s = 1;
});
put(KWIN, all);
const lis = document.querySelectorAll("#ssb-dialog-panel .ssb-dlg-list li"),
todo = [];
rows.forEach((r, n) => {
const li = lis[n];
if (!li || !r.it || typeof ex.renderItemToCanvas !== "function") return;
const box = document.createElement("div"),
cv = document.createElement("canvas");
while (li.firstChild) box.appendChild(li.firstChild);
cv.width = 250;
cv.height = 250;
li.classList.add("ssb-cwwin");
li.appendChild(cv);
li.appendChild(box);
todo.push([r.it, cv]);
});
if (!todo.length) return;
let load = null;
try {
load = typeof ex.loadAllMeshesOnDemand === "function" ? ex.loadAllMeshesOnDemand() : null;
} catch (e) {
err("cwauto#7", e);
}
Promise.resolve(load).catch(e => err("cwauto#7", e)).then(() => todo.forEach(([it, cv]) => {
try {
ex.renderItemToCanvas(it, cv);
} catch (e) {
cv.remove();
err("cwauto#6", e);
}
}));
}
window.__ssbAutoCw = {
toggle: function(n) {
const was = level();
setLevel(was === n ? 0 : n);
if (was === n) return "Auto Chick'n Winner is OFF.";
return "Auto Chick'n Winner level " + n + " is ON" + (n === 2 ?
" (plays that need no ad, and resets up to " + maxEggs() + " eggs a day)." :
n === 3 ? " (plays that need no ad, and every reset your eggs cover, with no limit)." :
" (plays that need no ad).");
},
off: function() {
setLevel(0);
},
max: function(n) {
const m = Math.max(0, Math.min(100000, Math.floor(Number(n) || 0)));
put(KMAX, m);
return "Auto Chick'n Winner may spend up to " + m + " eggs a day on resets.";
},
status: status,
level: level,
state: function() {
return run ? {
kind: run.kind,
step: run.step
} : null;
}
};
function unGone() {
if (!document.hidden && Date.now() - visAt > 1500) document.documentElement.classList.remove(GONE);
}
function boot() {
document.addEventListener("visibilitychange", () => {
if (!document.hidden) {
visAt = Date.now();
setTimeout(unGone, 1600);
}
wake();
});
window.addEventListener("focus", wake);
window.addEventListener("pageshow", wake);
setInterval(tick, 1000);
winsBoot();
tick();
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, { once: true });
else boot();
})();
(function() {
"use strict";
const KEY = "tp-cleanLeave";
const isOn = () => {
try {
const v = localStorage.getItem(KEY);
return v === null ? true : JSON.parse(v) === true;
} catch (e) {
return true;
}
};
const setOn = (v) => {
try {
localStorage.setItem(KEY, JSON.stringify(!!v));
} catch (e) {
if (window.__ssbErr) window.__ssbErr("cleanleave#5", e);
}
};
const active = () => isOn() && (!window.__ssbGameFixesOn || window.__ssbGameFixesOn());
let leaves = 0;
let run = 0;
let lastLeave = 0;
const homeShown = () => {
const v = window.vueApp,
ex = window.extern;
return !!(v && ex && !ex.inGame && v.screens && v.showScreen === v.screens.home);
};
const engine = () => {
try {
const sc = window.P && window.P.scene;
return sc && sc.getEngine ? sc.getEngine() : null;
} catch (e) {
return null;
}
};
function redrawEgg() {
try {
const ex = window.extern;
if (typeof ex.resetPaperDoll === "function") ex.resetPaperDoll();
if (typeof ex.openEquipInGame === "function") ex
.openEquipInGame();
} catch (e) {
if (window.__ssbErr) window.__ssbErr("cleanleave#1", e);
}
}
function revive() {
try {
const en = engine();
if (en && en._activeRenderLoops && en._activeRenderLoops.length === 0 && homeShown()) redrawEgg();
} catch (e) {
if (window.__ssbErr) window.__ssbErr("cleanleave#4", e);
}
}
function afterLeave(id) {
const at = [300, 1500, 3300, 5000, 7000];
let i = 0,
lastFrame = -1;
const check = () => {
if (id !== run || !active()) return;
const en = engine(),
frame = en && typeof en.frameId === "number" ? en.frameId : -1;
if (homeShown() && !document.hidden) {
const loops = en && en._activeRenderLoops;
if (i === 0 || (loops && loops.length !== 1) || (frame >= 0 && frame === lastFrame))
redrawEgg();
}
lastFrame = document.hidden ? -1 : frame;
if (++i < at.length) setTimeout(check, at[i] - at[i - 1]);
};
setTimeout(check, at[0]);
}
function install() {
const ex = window.extern,
v = window.vueApp,
gs = v && v.$refs && v.$refs.gameScreen;
if (!ex || !gs || typeof ex.leaveGame !== "function" || typeof gs.delayGameMenuPlayButtons !== "function")
return false;
if (ex.__ssbCleanLeave) return true;
ex.__ssbCleanLeave = true;
const leave = ex.leaveGame;
ex.leaveGame = function() {
if (!active()) return leave.apply(this, arguments);
const was = !!ex.inGame;
if (!was && Date.now() - lastLeave < 3000) return;
const id = ++run;
try {
return leave.apply(this, arguments);
} finally {
if (was) {
leaves++;
lastLeave = Date.now();
} else revive();
afterLeave(id);
}
};
const delay = gs.delayGameMenuPlayButtons;
gs.delayGameMenuPlayButtons = function() {
if (!active()) return delay.apply(this, arguments);
const n = leaves,
out = delay.apply(this, arguments);
setTimeout(() => {
try {
if (n !== leaves || !ex.inGame) this.delayTheCracking = false;
} catch (e) {
if (window.__ssbErr) window.__ssbErr("cleanleave#2", e);
}
}, 3050);
return out;
};
const prep = ex.prepRespawnButton;
if (typeof prep === "function") ex.prepRespawnButton = function() {
if (!active() || ex.inGame) return prep.apply(this, arguments);
};
return true;
}
function boot() {
window.__ssbSettings.add({
key: KEY,
section: "gameplay",
after: "tp-earlyRespawnGuard",
cls: "ssb-uc-sub ssb-gf-sub",
label: "Blank Egg Fix",
code: "Cl",
def: true,
tip: "If you press the confirm button on Leave Game twice, too fast, the egg on the home screen can go blank. This ignores the extra press and redraws the egg if it still comes back blank. It also stops a match you already left from letting Play through too early on the next one.",
keywords: "leave quit game home screen homescreen egg blank empty frozen invisible double click twice confirm yes fix",
get: isOn,
set: setOn
});
if (install()) return;
const stop = window.__ssbMenuPoll(() => {
try {
if (install()) stop();
} catch (e) {
stop();
if (window.__ssbErr) window.__ssbErr("cleanleave#3", e);
}
}, 500);
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
})();
(function() {
"use strict";
const KEY = "tp-chatJoin";
const STYLE_ID = "ssb-chat-join-style";
const CODE = /(?<![\w-])[a-z]{4}-[a-z]{4}-[a-z]{4}(?![\w-])/gi;
const isOn = () => {
try {
const v = localStorage.getItem(KEY);
return v === null ? true : JSON.parse(v) === true;
} catch (e) {
return true;
}
};
const setOn = (v) => {
try {
localStorage.setItem(KEY, JSON.stringify(!!v));
} catch (e) {
if (window.__ssbErr) window.__ssbErr("chatjoin#1", e);
}
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const roomCode = () => {
try {
return String(window.vueData.game.shareLinkPopup.code || "").toLowerCase();
} catch (e) {
return "";
}
};
function applyCSS() {
let el = document.getElementById(STYLE_ID);
if (!el) {
el = document.createElement("style");
el.id = STYLE_ID;
(document.head || document.documentElement).appendChild(el);
}
el.textContent =
".ssb-chat-code{white-space:nowrap;text-decoration:underline!important;text-decoration-thickness:.08em;text-underline-offset:.14em;cursor:pointer;pointer-events:auto!important;}" +
".ssb-chat-code:hover,.ssb-chat-code:focus-visible{text-decoration-thickness:.16em;outline:none;}";
}
let scanned = new WeakMap();
function wrapLine(item) {
const text = item.textContent;
if (scanned.get(item) === text) return;
scanned.set(item, text);
if (text.indexOf("-") < 0) return;
const walker = document.createTreeWalker(item, NodeFilter.SHOW_TEXT),
nodes = [];
for (let n = walker.nextNode(); n; n = walker.nextNode()) {
const p = n.parentElement;
if (p && !p.closest(".ssb-chat-code, .chat-item > div") && n.nodeValue.indexOf("-") >= 0) nodes.push(n);
}
for (const n of nodes) {
const s = n.nodeValue,
parts = [];
let last = 0,
m;
CODE.lastIndex = 0;
while ((m = CODE.exec(s))) {
if (m.index > last) parts.push(document.createTextNode(s.slice(last, m.index)));
const a = document.createElement("span");
a.className = "ssb-chat-code";
a.textContent = m[0];
a.setAttribute("role", "button");
a.tabIndex = 0;
a.setAttribute("data-code", m[0].toLowerCase());
a.title = "Click to join " + m[0].toLowerCase();
parts.push(a);
last = m.index + m[0].length;
}
if (!parts.length) continue;
if (last < s.length) parts.push(document.createTextNode(s.slice(last)));
n.replaceWith(...parts);
}
}
function unwrapAll() {
const out = document.getElementById("chatOut");
if (!out) return;
const hosts = new Set();
out.querySelectorAll(".ssb-chat-code").forEach((a) => {
hosts.add(a.parentNode);
a.replaceWith(document.createTextNode(a.textContent));
});
hosts.forEach((h) => h.normalize());
}
let busy = false;
async function join(code) {
const ui = window.__ssbUI,
v = window.vueApp,
ex = window.extern;
if (busy || !ui || !v || !ex) return;
const inGame = !!ex.inGame;
if (inGame && roomCode() === code) {
ui.toast("You're already in " + code + ".");
return;
}
busy = true;
try {
const go = await ui.confirm({
title: "Join Game",
text: (inGame ? "Leave this match and join " : "Join ") + code + "?",
ok: "Join",
cancelLabel: "Stay"
});
if (!go) return;
if (inGame) {
v.onLeaveGameConfirm();
for (let t = 0; t < 80 && (ex.inGame || v.showScreen !== v.screens.home); t++) await sleep(100);
if (ex.inGame || v.showScreen !== v.screens.home) throw new Error(
"never reached the home screen");
await sleep(400);
}
const play = v.$refs.homeScreen.$refs.playPanel;
play.showJoinPrivateGamePopup(code, true);
play.onJoinConfirmed();
} catch (e) {
if (window.__ssbErr) window.__ssbErr("chatjoin#2", e);
ui.toast("Couldn't join " + code + ". Type it into Join Game on the home screen.", {
type: "error"
});
} finally {
busy = false;
}
}
const codeEl = (e) => e.target && e.target.closest ? e.target.closest(".ssb-chat-code") : null;
function onClick(e) {
const a = codeEl(e);
if (!a || e.button) return;
e.preventDefault();
e
.stopPropagation();
join(a.getAttribute("data-code"));
}
function onKey(e) {
const a = codeEl(e);
if (!a || (e.key !== "Enter" && e.key !== " ")) return;
e.preventDefault();
e.stopPropagation();
join(a.getAttribute("data-code"));
}
let obs = null,
hooked = null,
stopPoll = null,
listening = false;
function hook() {
const out = document.getElementById("chatOut");
if (!out || hooked === out) return;
if (obs) obs.disconnect();
hooked = out;
obs = new MutationObserver((records) => {
const lines = new Set();
for (const rec of records) {
if (rec.type === "childList") rec.addedNodes.forEach((n) => {
if (n.nodeType === 1) {
const l = n.closest(".chat-item") || n.querySelector(".chat-item");
if (l) lines.add(l);
}
});
const t = rec.target.nodeType === 1 ? rec.target : rec.target.parentElement,
l = t && t.closest(".chat-item");
if (l) lines.add(l);
}
lines.forEach((l) => {
try {
wrapLine(l);
} catch (e) {
if (window.__ssbErr) window.__ssbErr("chatjoin#3", e);
}
});
obs.takeRecords();
});
obs.observe(out, {
childList: true,
subtree: true,
characterData: true
});
out.querySelectorAll(".chat-item").forEach(wrapLine);
}
function enable() {
applyCSS();
hook();
if (!stopPoll) stopPoll = window.__ssbMenuPoll(hook, 2000, {
inMatch: true
});
if (!listening) {
listening = true;
document.addEventListener("click", onClick, true);
document.addEventListener("keydown", onKey, true);
}
}
function disable() {
if (stopPoll) {
stopPoll();
stopPoll = null;
}
if (listening) {
listening = false;
document.removeEventListener("click", onClick, true);
document.removeEventListener("keydown", onKey, true);
}
if (obs) obs.disconnect();
obs = hooked = null;
unwrapAll();
scanned = new WeakMap();
const el = document.getElementById(STYLE_ID);
if (el) el.remove();
}
function sync() {
if (isOn()) enable();
else disable();
}
function boot() {
sync();
window.__ssbSettings.add({
key: KEY,
section: "chat",
after: "tp-infiniteChat",
label: "Join From Chat",
code: "Cj",
def: true,
tip: "Underlines a game code said in chat (like cask-zips-vent). Click it, confirm, and you leave the match and join that game. Chat can only be clicked while the mouse is free, so pause first.",
keywords: "chat code join game private link click friend invite",
get: isOn,
set: (v) => {
setOn(v);
sync();
}
});
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
})();
(function() {
"use strict";
const KEY = "tp-inventoryCount",
CARD = "ssb-inv-card",
STYLE = "ssb-inv-style",
KINDS = [
["hats", "Hats"],
["stamps", "Stamps"],
["primaryWeapons", "Primary guns"],
["secondaryWeapons", "Secondary guns"],
["grenades", "Grenades"],
["melee", "Melee"]
];
let on = false,
stopPoll = null,
seen = "",
reported = false;
try {
on = JSON.parse(localStorage.getItem(KEY)) === true;
} catch (e) {
on = false;
}
const setOn = (v) => {
on = !!v;
try {
localStorage.setItem(KEY, JSON.stringify(on));
} catch (e) {
if (window.__ssbErr) window.__ssbErr("invcount#1", e);
}
};
const asReal = (fn) => {
const was = window.__ssbSkinUnlocker;
window.__ssbSkinUnlocker = false;
try {
return fn();
} finally {
window.__ssbSkinUnlocker = was;
}
};
function count() {
const x = window.extern,
cat = x && x.catalog;
if (!cat || typeof x.isItemOwned !== "function") return null;
return asReal(() => {
const kinds = [];
let owned = 0,
total = 0;
for (const [prop, name] of KINDS) {
const list = cat[prop];
if (!Array.isArray(list)) return null;
let o = 0,
t = 0;
for (const it of list) {
if (!it) continue;
t++;
if (it.unlock === "default" || x.isItemOwned(it)) o++;
}
kinds.push({
name: name,
owned: o,
total: t
});
owned += o;
total += t;
}
return {
kinds: kinds,
owned: owned,
total: total
};
});
}
function safeCount() {
try {
return count();
} catch (e) {
if (!reported && window.__ssbErr) {
reported = true;
window.__ssbErr("invcount#2", e);
}
return null;
}
}
function ensureStyle() {
if (document.getElementById(STYLE)) return;
const s = document.createElement("style");
s.id = STYLE;
s.textContent = `#mod-settings-section .ssb-inv-card { grid-column:1 / -1; box-sizing:border-box; min-width:0; padding:12px 16px 11px; border:1px solid var(--pm-edge, rgba(255,255,255,0.5)); border-radius:14px;
background:var(--pm-glass, rgba(255,255,255,0.24)); box-shadow:inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 6px rgba(8,62,84,0.06);
font-family:"Nunito", system-ui, sans-serif; color:var(--ssb-ink, #0c576f); }
#mod-settings-section .mod-grid:has(> .ssb-inv-card) { grid-auto-flow:row dense; }
#mod-settings-section.mod-searching .ssb-inv-card { display:none !important; }
#mod-settings-section .ssb-inv-title { margin:0 0 9px; font-size:16.5px; font-weight:800; line-height:1.25; }
#mod-settings-section .ssb-inv-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(170px, 1fr)); gap:9px 22px; }
#mod-settings-section .ssb-inv-row { min-width:0; }
#mod-settings-section .ssb-inv-line { display:flex; justify-content:space-between; align-items:baseline; gap:8px; font-size:14px; font-weight:700; line-height:1.3; }
#mod-settings-section .ssb-inv-line > span { margin:0; padding:0; font-family:inherit; font-size:inherit; font-weight:inherit; line-height:inherit; color:inherit; }
#mod-settings-section .ssb-inv-name { min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
#mod-settings-section .ssb-inv-num { font-weight:900; font-variant-numeric:tabular-nums; white-space:nowrap; }
#mod-settings-section .ssb-inv-bar { display:block; height:6px; margin-top:3px; border-radius:3px; background:rgba(12,87,111,0.16); overflow:hidden; }
#mod-settings-section .ssb-inv-bar > b { display:block; height:100%; border-radius:3px; background:var(--ssb-blue, #216a80); }
#mod-settings-section .ssb-inv-total { grid-column:1 / -1; margin-top:3px; }
#mod-settings-section .ssb-inv-total .ssb-inv-line { font-size:15.5px; font-weight:900; }
#mod-settings-section .ssb-inv-total .ssb-inv-bar { height:8px; border-radius:4px; }
#mod-settings-section .ssb-inv-total .ssb-inv-bar > b { border-radius:4px; }
#mod-settings-section .ssb-inv-note { margin-top:9px; font-size:12.5px; font-weight:600; line-height:1.35; color:var(--pm-sub, rgba(12,87,111,0.72)); }
`;
(document.head || document.documentElement).appendChild(s);
}
function build() {
ensureStyle();
const c = document.createElement("div");
c.id = CARD;
c.className = "ssb-inv-card";
c.setAttribute("data-keywords", "inventory count owned items collection complete completion progress hats stamps guns grenades melee skins");
const t = document.createElement("div");
t.className = "ssb-inv-title";
t.textContent = "Inventory";
const g = document.createElement("div");
g.className = "ssb-inv-grid";
const n = document.createElement("div");
n.className = "ssb-inv-note";
c.appendChild(t);
c.appendChild(g);
c.appendChild(n);
return c;
}
function addRow(grid, name, owned, total, cls) {
const r = document.createElement("div");
r.className = "ssb-inv-row" + (cls ? " " + cls : "");
const line = document.createElement("div");
line.className = "ssb-inv-line";
const a = document.createElement("span");
a.className = "ssb-inv-name";
a.textContent = name;
const b = document.createElement("span");
b.className = "ssb-inv-num";
b.textContent = owned + " / " + total;
line.appendChild(a);
line.appendChild(b);
const bar = document.createElement("i");
bar.className = "ssb-inv-bar";
bar.setAttribute("role", "progressbar");
bar.setAttribute("aria-label", name);
bar.setAttribute("aria-valuemin", "0");
bar.setAttribute("aria-valuemax", String(total));
bar.setAttribute("aria-valuenow", String(owned));
const f = document.createElement("b");
f.style.width = (total ? Math.round(1000 * owned / total) / 10 : 0) + "%";
bar.appendChild(f);
r.appendChild(line);
r.appendChild(bar);
grid.appendChild(r);
}
function paint(card) {
const d = safeCount(),
sig = d ? d.kinds.map(k => k.owned + "/" + k.total).join(",") : "none";
if (sig === seen) return;
seen = sig;
const g = card.querySelector(".ssb-inv-grid"),
n = card.querySelector(".ssb-inv-note");
g.textContent = "";
if (!d) {
n.textContent = "Not available yet. The game's item lists aren't ready.";
return;
}
d.kinds.forEach(k => addRow(g, k.name, k.owned, k.total));
const pct = d.total ? Math.round(100 * d.owned / d.total) : 0;
addRow(g, "Total (" + pct + "%)", d.owned, d.total, "ssb-inv-total");
n.textContent = "Includes items that can't be earned any more. Free starter items count as owned.";
}
function tick() {
try {
const root = document.getElementById("mod-settings-section"),
row = root && root.querySelector('[data-setting="' + KEY + '"]');
let c = document.getElementById(CARD);
if (!on || !row) {
if (c) c.remove();
seen = "";
return;
}
if (!c || c.previousElementSibling !== row) {
if (c) c.remove();
c = build();
row.after(c);
seen = "";
}
if (seen && c.checkVisibility && !c.checkVisibility()) return;
paint(c);
} catch (e) {
if (window.__ssbErr) window.__ssbErr("invcount#3", e);
}
}
function start() {
if (!stopPoll) stopPoll = window.__ssbMenuPoll(tick, 1000);
}
function stop() {
if (stopPoll) stopPoll();
stopPoll = null;
seen = "";
const c = document.getElementById(CARD);
if (c) c.remove();
}
function boot() {
window.__ssbInventoryCount = {
count: safeCount
};
window.__ssbSettings.add({
key: KEY,
section: "menus",
after: "tp-favFirst",
label: "Inventory Count",
code: "Ic",
def: false,
tip: "Adds a card under this switch with how many hats, stamps, guns, grenades and melee weapons you own, out of everything the game lists. It only reads your account and changes nothing.",
keywords: "inventory count owned items collection complete completion progress how many hats stamps guns grenades melee skins",
get: () => on,
set: (v) => {
setOn(v);
if (on) start();
else stop();
}
});
if (on) start();
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
else boot();
})();