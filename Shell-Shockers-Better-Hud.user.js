// ==UserScript==
// @name         Shell Shockers Better UI
// @version      4.9.6
// @description  FPS, Ping, HUD controls, match stats history, crosshair, performance tweaks, and styled Server Selector integrated into the native UI.
// @namespace    https://github.com/ViroGear/Shell-Shockers-Better-Hud-Mod
// @author       Virojet
// @license      MIT
// @homepageURL  https://github.com/Virojet/Shell-Shockers-Better-Hud-Mod
// @supportURL   https://github.com/Virojet/Shell-Shockers-Better-Hud-Mod/issues
// @downloadURL  https://raw.githubusercontent.com/Virojet/Shell-Shockers-Better-Hud-Mod/main/Shell-Shockers-Better-Hud.user.js
// @updateURL    https://raw.githubusercontent.com/Virojet/Shell-Shockers-Better-Hud-Mod/main/Shell-Shockers-Better-Hud.meta.js
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
// (html2canvas removed from @require - lazy-loaded on first screenshot via _ssbLoadHtml2Canvas)
// @grant        none
// @run-at       document-start
// ==/UserScript==
/* Better HUD Ultra — robustness guard (runs BEFORE the main script).
   A handful of ch2-* crosshair keys are read with an UNGUARDED JSON.parse during
   init; a single corrupted value would throw and break the entire userscript for
   the user until they cleared storage. Drop any that aren't strictly "true"/"false"
   so the code's own `?? default` fallbacks apply and JSON.parse can never throw. */
!function () {
    try {
        ["ch2-enabled", "ch2-hideCrosshair", "ch2-hideDot", "ch2-dotRound", "ch2-staticOutlineEnabled"].forEach(function (k) {
            var v = localStorage.getItem(k);
            if (v !== null && v !== "true" && v !== "false") localStorage.removeItem(k);
        });
    } catch (e) { }
}();
!function () {
    let _ssbBawk = undefined;
    Object.defineProperty(window, 'BAWK', {
        get() { return _ssbBawk; },
        set(val) {
            _ssbBawk = val;
            if (val) {
                try {
                    let originalAddChild = val.addChild;
                    if (originalAddChild && !originalAddChild._ssbHooked) {
                        val.addChild = function (child) {
                            if (child && child.constructor && !child.constructor._ssbHooked) {
                                let Tc = child.constructor;
                                Tc._ssbHooked = true;
                                let originalSetNodePosition = Tc.setNodePosition;
                                if (originalSetNodePosition) {
                                    Tc.setNodePosition = function (node, t) {
                                        if (d?.perf?.audioOptimized && node && t) {
                                            if (typeof node._ssbLastX === 'number') {
                                                let dx = t.x - node._ssbLastX;
                                                let dy = t.y - node._ssbLastY;
                                                let dz = t.z - node._ssbLastZ;
                                                if (dx * dx + dy * dy + dz * dz < 0.0025) return;
                                            }
                                            node._ssbLastX = t.x;
                                            node._ssbLastY = t.y;
                                            node._ssbLastZ = t.z;
                                        }
                                        return originalSetNodePosition.apply(this, arguments);
                                    };
                                }
                                let originalUpdate = Tc.prototype.update;
                                if (originalUpdate) {
                                    Tc.prototype.update = function () {
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
                                                        if (dx * dx + dy * dy + dz * dz > 225) isDistant = true;
                                                    }
                                                    if (isDistant && this._ssbFrameCount !== 0) continue;
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
                        let lastPos = { x: 0, y: 0, z: 0 };
                        val.setPosition = function (t) {
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
                        let lastOrient = { x: 0, y: 0, z: 0 };
                        val.setOrientation = function (t) {
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
                    console.warn("[Better UI] Audio optimization hook failed:", err);
                }
            }
        },
        configurable: true,
        enumerable: true
    });
    let _ssbGetYawPitch = undefined; Object.defineProperty(window, "get_yaw_pitch", { get() { return _ssbGetYawPitch }, set(val) { _ssbGetYawPitch = val }, configurable: true, enumerable: true });
    try { localStorage.removeItem("tp-ultraPerf") } catch (__ssbUltraRemoveErr) { } try { localStorage.removeItem("tp-hideNametags") } catch (__ssbNmRemoveErr) { } let ___noAA = !1; try { let x = localStorage.getItem("tp-noAA"); if (null !== x) ___noAA = !0 === JSON.parse(x) } catch (e) { } let ___ogCtx = HTMLCanvasElement.prototype.getContext; HTMLCanvasElement.prototype.getContext = function (e, t) { let newT = t; if (e.includes("webgl")) { newT = Object.assign({}, t || {}); newT.antialias = !___noAA } return ___ogCtx.call(this, e, newT) }; let e = {}, t = new Map; function o(e) { let o = t.get(e); if (o && o.isConnected) return o; let n = document.getElementById(e); return n ? t.set(e, n) : t.delete(e), n } let n = new Map; function i(e) { let t = n.get(e); if (t && t.isConnected) return t; let o = document.querySelector(e); return o ? n.set(e, o) : n.delete(e), o } function a(e, n, i) { let a = o(e); return a || ((a = document.createElement("style")).id = e, (i || document.head || document.documentElement).appendChild(a), t.set(e, a)), void 0 !== n && a.textContent !== n && (a.textContent = n), a } function r(e, n, i, r) { if (i) a(e, n, r); else { let s = o(e); s && (s.remove(), t.delete(e)) } } function s(e, t) { let o = localStorage.getItem(e); if (null === o) return t; try { return !0 === JSON.parse(o) } catch (n) { return t } } function l(e, t) { let o = localStorage.getItem(e); if (null === o) return t; let n = parseFloat(o); return Number.isFinite(n) ? n : t } let d = { mode: "basic" === localStorage.getItem("tp-mode") ? "basic" : "advanced", hideFPS: { hideBox: s("tp-hideBox", !1), showMs: s("tp-showMs", !1), boxOpacity: l("tp-boxOpacity", 1), showSessionTime: s("tp-showSessionTime", !1), hide: s("tp-hideFPS", !1), min: l("tp-minFPS", 60), max: l("tp-maxFPS", 60), random: s("tp-randomFPS", !1), uncap: s("tp-uncapFPS", !1) }, ping: { hide: s("tp-hidePing", !1), min: l("tp-minPing", 1), max: l("tp-maxPing", 1), random: s("tp-randomPing", !1), preconnect: !0, autoPickBest: s("tp-autoPickBest", !1) }, ui: { hideEggCount: s("tp-hideEggCount", !1), hideChat: s("tp-hideChat", !1), hideKillFeed: s("tp-hideKillFeed", !1), autoFullscreen: s("tp-autoFullscreen", !1), hidePlayerList: s("tp-hidePlayerList", !1), hideBestStreak: s("tp-hideBestStreak", !1), hideGameStats: s("tp-hideGameStats", !1), hideAmmo: s("tp-hideAmmo", !1), hideGrenade: s("tp-hideGrenade", !1), hideHP: s("tp-hideHP", !1), showVolumeSlider: s("tp-showVolumeSlider", !0), showServerList: s("tp-showServerList", !0) }, gameplay: { tabOutKey: (localStorage.getItem("tp-tabOutKey") || "").trim() || "Tab", noExplosionSmoke: s("tp-noExplosionSmoke", !1), noExplosionFire: s("tp-noExplosionFire", !1), noYolk: s("tp-noYolk", !1), noShellBurst: s("tp-noShellBurst", !1), hideNametags: s("tp-hideNametags", !1), hideScopeLines: s("tp-hideScopeLines", !1), skinUnlocker: s("tp-skinUnlocker", !1), fovStretch: l("tp-fovStretch", 1), legacySkins: s("tp-legacySkins", !1), legacySounds: s("tp-legacySounds", !1) }, perf: { renderScale: l("tp-renderScale", 1), perfPriority: !0, noPostProcess: !1, noBulletProjectiles: s("tp-noBulletProjectiles", !1), noShadows: s("tp-noShadows", !1), noAA: s("tp-noAA", !1), noParticles: s("tp-noParticles", !1), audioOptimized: !0 }, stats: { enabled: s("tp-statsEnabled", !0), autoShow: s("tp-statsAutoShow", !0), hotkey: localStorage.getItem("tp-statsHotkey") || "\\", pinned: s("tp-statsPinned", !1) } }; window.__ssbSkinUnlocker = !!d.gameplay.skinUnlocker; function __ssbPatchSkinUnlockerRuntime() { window.__ssbSkinUnlocker = !!d.gameplay.skinUnlocker; if (document.pointerLockElement) return; try { let e = window.extern; if (e && !e.__ssbSkinUnlockerRuntime) { let t = e.isItemOwned && e.isItemOwned.bind(e); e.isItemOwned = function (e) { return window.__ssbSkinUnlocker ? !0 : t ? t(e) : !1 }, e.__ssbSkinUnlockerRuntime = !0 } let o = window.vueApp && window.vueApp.$refs && window.vueApp.$refs.equipScreen; if (o && !o.__ssbSkinUnlockerRuntime && "function" == typeof o.populateItemGrid) { let n = o.populateItemGrid; o.populateItemGrid = function (e) { if (window.__ssbSkinUnlocker && window.vueData && this.currentEquipMode === window.vueData.equipMode.inventory) { this.equip.showingItems = e || []; return } return n.call(this, e) }, o.__ssbSkinUnlockerRuntime = !0 } if (o && o.__ssbSkinUnlockerRuntime) { let i = !!window.__ssbSkinUnlocker; if (o.__ssbSkinLast !== i) { o.__ssbSkinLast = i; if (!i) { try { let _sa = window.__ssbAcct, _ss = window.__ssbStuffedIds; _sa && _sa.inventory && _ss && _ss.size && (_sa.inventory = _sa.inventory.filter(x => !x || !_ss.has(x.id)), _ss.clear()) } catch (_su) { } } try { o.equip && void 0 !== o.equip.selectedItemType && o.populateItemGridWithType(o.equip.selectedItemType) } catch (a) { } } } } catch (r) { } } setInterval(__ssbPatchSkinUnlockerRuntime, 500), __ssbPatchSkinUnlockerRuntime(); !function e() { let t = String.prototype.replaceAll, o = "__ssbHideScopeLines"; window[o] = function () { return d.gameplay.hideScopeLines ? 0 : 536870912 }; let n = /,this\.(..)\.position\.z=2/, i = HTMLElement.prototype.appendChild; HTMLElement.prototype.appendChild = function (e) { try { if (e && "SCRIPT" === e.tagName && "string" == typeof e.innerHTML && e.innerHTML.startsWith("(()=>{")) { let a = n.exec(e.innerHTML); if (a && a[1]) { let r = a[1], s = `this.${r}.applyFog=!1,this.${r}.layerMask=536870912,`, l = `this.${r}.applyFog=!1,this.${r}.layerMask=window.${o}(),this.${r}._ssbScopeMesh=1,`, d = t.call(e.innerHTML, s, l); d !== e.innerHTML && (e.innerHTML = d, console.log("[Better UI] Scope-line hide patch installed.")) } } } catch (c) { console.warn("[Better UI] Scope-line patch failed:", c) } return i.call(this, e) }, window.__ssbApplyScopeLines = function () { try { let e = window.P && window.P.scene; if (!e || !e.meshes) return; let t = d.gameplay.hideScopeLines ? 0 : 536870912; for (let o = 0; o < e.meshes.length; o++) { let n = e.meshes[o]; n && n._ssbScopeMesh && (n.layerMask = t) } } catch (i) { } } }(); let c = new Set; function p(e) { if (!d.ping.preconnect || c.has(e)) return; c.add(e); let t = document.head || document.documentElement;[["dns-prefetch", "//" + e], ["preconnect", "https://" + e]].forEach(([e, o]) => { let n = document.createElement("link"); n.rel = e, n.href = o, "preconnect" === e && (n.crossOrigin = "anonymous"), t.appendChild(n) }) } function m(e) { let t = e.sprites.length, o = 1 === e.blendMode; return 300 === t && o ? "fire" : 300 === t ? "smoke" : 400 === t ? "shell" : 100 === t ? "yolk" : "other" } function h(e) { switch (e._ch2Kind) { case "fire": e._ch2Suppress = !!d.gameplay.noExplosionFire; break; case "smoke": e._ch2Suppress = !!d.gameplay.noExplosionSmoke; break; case "shell": e._ch2Suppress = !!d.gameplay.noShellBurst; break; case "yolk": e._ch2Suppress = !!d.gameplay.noYolk; break; default: e._ch2Suppress = !1 } } function u() { if (!window.P || !window.P.scene) return; let e = window.P.scene, t = e.spriteManagers; if (e === window._ssbUSc && t.length === window._ssbUCt && window._ssbUOk) return; let _p = 0; for (let o = 0, n = t.length; o < n; o++) { let i = t[o]; i.sprites && !i._ch2OrigRender && ("function" == typeof i.oldRender ? (i._ch2OrigRender = i.oldRender, i.oldRender = function () { i._ch2Suppress || i._ch2OrigRender.apply(this, arguments) }, i._ch2Kind = m(i), h(i)) : _p++) } window._ssbUSc = e, window._ssbUCt = t.length, window._ssbUOk = 0 === _p } !function e() { if (!d.ping.preconnect) return; p("shellshock.io"); let t; try { t = JSON.parse(localStorage.getItem("mod-server-hosts") || "{}") || {} } catch (o) { t = {} } Object.values(t).forEach(e => { e && e.host && p(e.host) }) }(); let f = null; function g() { u(), function e() { if (!window.P || !window.P.scene) return; let t = window.P.scene.spriteManagers; for (let o = 0, n = t.length; o < n; o++)t[o]._ch2OrigRender && h(t[o]) }() } function $() { return window.P && window.P.scene ? window.P.scene : null } function b() { let e = $(); return e ? e.getEngine() : null } function y() { let e = $(), t = b(); applyFovStretch(t), e && t && (1 !== d.perf.renderScale ? (t.setHardwareScalingLevel(d.perf.renderScale), t._ch2ScaleApplied = !0) : t._ch2ScaleApplied && (t.setHardwareScalingLevel(1), delete t._ch2ScaleApplied), e.skipPointerMovePicking = !!d.perf.perfPriority, e.skipFrustumClipping = !1, function e(t) { let o = !!d.perf.noPostProcess; !o !== t.postProcessesEnabled && (t.postProcessesEnabled = !o), v(t).forEach(e => { o ? (e._ch2PPSaved || (e._ch2PPSaved = {}, x.forEach(t => { "boolean" == typeof e[t] && (e._ch2PPSaved[t] = e[t]) })), x.forEach(t => { "boolean" == typeof e[t] && (e[t] = !1) })) : e._ch2PPSaved && (Object.keys(e._ch2PPSaved).forEach(t => { e[t] = e._ch2PPSaved[t] }), delete e._ch2PPSaved) }) }(e), function e(t) { let o = !!d.perf.noShadows; try { t.lights?.forEach(e => { o ? e._shadowGenerator && !e._ch2ShadowSaved && (e._ch2ShadowSaved = e._shadowGenerator, e._shadowGenerator = null) : e._ch2ShadowSaved && (e._shadowGenerator = e._ch2ShadowSaved, delete e._ch2ShadowSaved) }), t.meshes?.forEach(e => { o ? e.receiveShadows && !e._ch2RecvShadowsSaved && (e._ch2RecvShadowsSaved = !0, e.receiveShadows = !1) : e._ch2RecvShadowsSaved && (e.receiveShadows = !0, delete e._ch2RecvShadowsSaved) }) } catch (n) { } }(e), function e(t) { let o = !!d.perf.noAA; try { v(t).forEach(e => { "samples" in e && (o ? ("number" != typeof e._ch2AASaved && (e._ch2AASaved = e.samples || 1), e.samples = 1) : "number" == typeof e._ch2AASaved && (e.samples = e._ch2AASaved, delete e._ch2AASaved)) }) } catch (n) { } }(e), function e(t) { try { t.particlesEnabled = !d.perf.noParticles } catch (o) { } }(e)) } let _lastFovP = -1; function applyFovStretch(t) { let want = d.gameplay.fovStretch || 1, sb = document.getElementById("scopeBorder"), scoping = sb && getComputedStyle(sb).display !== "none", active = !!(ed && ed.get ? ed.get.call(document) : document.pointerLockElement) && want > 1.001 && (!scoping || "true" === localStorage.getItem("tp-hideScopeFrame")), eng = t || b(), st = document.getElementById("ssb-fov-style"), doResize = P => { P !== _lastFovP && (_lastFovP = P, eng && (function () { try { eng.resize() } catch (x) { } }(), setTimeout(() => { try { eng.resize() } catch (x) { } }, 0))) }; if (sb && !sb.__ssbScopeObs) { sb.__ssbScopeObs = new MutationObserver(() => applyFovStretch()); sb.__ssbScopeObs.observe(sb, { attributes: !0, attributeFilter: ["style", "class"] }) } if (!active) { if ((ed && ed.get ? ed.get.call(document) : document.pointerLockElement) && want > 1.001) { st || (st = document.createElement("style"), st.id = "ssb-fov-style", (document.head || document.documentElement).appendChild(st)); st.textContent = "html{background:#000!important;}#canvas{position:fixed!important;left:0!important;top:0!important;right:auto!important;bottom:auto!important;width:100vw!important;height:100vh!important;background:#000!important;display:block!important;outline:none!important;z-index:0!important;}#scopeBorder #maskleft,#scopeBorder #maskright{display:none!important;}#scopeBorder #maskmiddle{width:100vw!important;height:100vh!important;flex:none!important;background-size:100vw 100vw!important;background-position:center center!important;background-repeat:no-repeat!important;}" } else st && (st.textContent = ""); doResize(100); return } st || (st = document.createElement("style"), st.id = "ssb-fov-style", (document.head || document.documentElement).appendChild(st)); let P = 100 / want, M = (100 - P) / 2; st.textContent = "html{background:#000!important;}#canvas{position:fixed!important;left:0!important;right:auto!important;bottom:auto!important;width:100vw!important;height:" + P.toFixed(3) + "vh!important;top:" + M.toFixed(3) + "vh!important;outline:none!important;z-index:0!important;}", doResize(P) } let _LSFX = ["ammo", "grenade", "grenade_beep", "grenade_pin", "gun_cluck9mm_fire", "gun_cluck9mm_insert_mag", "gun_cluck9mm_remove_mag", "gun_csg1_fire", "gun_csg1_pull_action", "gun_csg1_release_action", "gun_dozenGauge_close", "gun_dozenGauge_fire", "gun_dozenGauge_load", "gun_dozenGauge_open", "gun_eggk47_dry_fire", "gun_eggk47_fire", "gun_eggk47_full_cycle", "gun_eggk47_insert_mag", "gun_eggk47_remove_mag", "gun_m24_bolt_close", "gun_m24_bolt_open", "gun_m24_fire", "gun_rpegg_load", "gun_rpegg_rocket_fly", "gun_rpegg_rocket_hit", "gun_smg_cycle", "gun_smg_fire", "pickup", "weapon_swap"], _LSFXBASE = "https://raw.githubusercontent.com/InfiniteSmasher/The-MegaMod/main/sfx/legacy/", _lsfxLoad = null, _LSKIN = [3000, 3100, 3400, 3600, 3800, 4000, 4200]; function _sfxReady() { let B = window.BAWK; if (!B || !B.sounds) return !1; let v = Object.values(B.sounds); return !!(v.length && v[0] && v[0].buffer) } function loadLegacySounds() { if (_lsfxLoad) return _lsfxLoad; let B = window.BAWK; if (!B || !B.loadSound || !B.sounds) return Promise.reject(Error("BAWK not ready")); _lsfxLoad = Promise.all(_LSFX.map(s => { if (B.sounds[s] && !B.sounds[s + "_Default"]) B.sounds[s + "_Default"] = B.sounds[s]; return Promise.resolve(B.loadSound(_LSFXBASE + s + ".mp3", s + "_Legacy")).catch(() => { }) })); return _lsfxLoad } function applyLegacySounds(on) { let B = window.BAWK; if (!B || !B.sounds) return; _LSFX.forEach(s => { let t = on ? B.sounds[s + "_Legacy"] : B.sounds[s + "_Default"]; if (t) B.sounds[s] = t }) } function setLegacySounds(on) { if (!on) { applyLegacySounds(!1); return } let go = () => loadLegacySounds().then(() => applyLegacySounds(!0)).catch(() => { }); if (_sfxReady()) go(); else { let iv = setInterval(() => { _sfxReady() && (clearInterval(iv), go()) }, 300) } } function applyLegacySkins(on) { let ex = window.extern; if (!ex || !ex.catalog || !ex.catalog.findItemsByIds) return !1; let items = ex.catalog.findItemsByIds(_LSKIN); if (!items || !items.length) return !1; items.forEach(it => { if (!it || !it.item_data) return; let mn = it.item_data.meshName || ""; if (on) mn.includes("_Legacy") || (it.item_data.meshName = mn + "_Legacy"); else it.item_data.meshName = mn.replace("_Legacy", "") }); try { ex.loadAllMeshesOnDemand && ex.loadAllMeshesOnDemand() } catch (e) { } try { let v = window.vueApp; v && v.$refs && v.$refs.equipScreen && v.$refs.equipScreen.poseEquippedItems && v.$refs.equipScreen.poseEquippedItems() } catch (e) { } return !0 } function setLegacySkins(on) { if (applyLegacySkins(on)) return; let iv = setInterval(() => { applyLegacySkins(on) && clearInterval(iv) }, 500) } (function () { if (!d.gameplay.legacySkins && !d.gameplay.legacySounds) return; let sd = !d.gameplay.legacySounds, kd = !d.gameplay.legacySkins; let iv = setInterval(() => { if (!sd && _sfxReady() && (setLegacySounds(!0), sd = !0), !kd && window.extern && window.extern.catalog && window.extern.catalog.findItemsByIds && (applyLegacySkins(!0), kd = !0), sd && kd) clearInterval(iv) }, 600) })(); setInterval(() => { if (document.hidden || !window.P || !window.P.scene) return; if (!(d.gameplay.noExplosionSmoke || d.gameplay.noExplosionFire || d.gameplay.noYolk || d.gameplay.noShellBurst)) return; let e = window.P.scene; e !== f ? (f = e, setTimeout(u, 500)) : u() }, 1e3); let x = ["bloomEnabled", "fxaaEnabled", "imageProcessingEnabled", "depthOfFieldEnabled", "motionBlurEnabled", "grainEnabled", "chromaticAberrationEnabled", "sharpenEnabled"]; function v(e) { let t = e.postProcessRenderPipelineManager; if (!t) return []; let o = t._renderPipelines || t.supportedPipelines || {}; return Object.values(o) } let _ = !1; function w(e) { if (!e) return; let t = !!d.perf.noBulletProjectiles; if (!t && !_) return; _ = t; let o = e.meshes; if (e._ch2PML !== o.length) { let c = []; for (let n = 0, i = o.length; n < i; n++) { let a = o[n]; void 0 !== a._sourceMesh && "" === a.name && c.push(a) } e._ch2PM = c, e._ch2PML = o.length } let s = e._ch2PM; for (let n = 0, i = s.length; n < i; n++)s[n].isVisible = !t } let k = null; function S() { if (!d.gameplay.hideNametags) return; let e = $(); e && e !== k && (k = e, e.spriteManagers.forEach(e => { 256 !== e.cellWidth || 128 !== e.cellHeight || e._ch2NametagOrigRender || (e._ch2NametagOrigRender = e.render.bind(e), e.render = function () { d.gameplay.hideNametags || e._ch2NametagOrigRender() }) })) } let E, C; let _ssbSusp = []; function _ssbSI(fn, ms) { let id = setInterval(fn, ms); return _ssbSusp.push({ fn: fn, ms: ms, id: id }), id } document.addEventListener("pointerlockchange", () => { document.pointerLockElement ? _ssbSusp.forEach(o => { clearInterval(o.id), o.id = null }) : _ssbSusp.forEach(o => { o.id || (o.id = setInterval(o.fn, o.ms), o.fn()) }); applyFovStretch() }); E = null, C = null, _ssbSI(() => { if (document.hidden) return; let e = $(), t = b(); if (e && t) { if (e !== E) { E = e, C && clearTimeout(C), C = setTimeout(() => { C = null, y() }, 2e3); return } if (1 !== d.perf.renderScale && !t._ch2ScalePending) { let o = "function" == typeof t.getHardwareScalingLevel ? t.getHardwareScalingLevel() : t._hardwareScalingLevel; void 0 !== o && Math.abs(o - d.perf.renderScale) > .01 && (t._ch2ScalePending = !0, requestAnimationFrame(() => { t._ch2ScalePending = !1, $() && 1 !== d.perf.renderScale && t.setHardwareScalingLevel(d.perf.renderScale) })) } } }, 2e3); let P = String.prototype.replaceAll, L = () => Array.from({ length: 10 }, () => String.fromCharCode(97 + Math.floor(26 * Math.random()))).join(""); function I(t, o) { let n = L(); window[n] = function () { try { return o.apply(this, arguments) } catch (e) { return arguments[0] } }, e[t] = n } I("FakePing", function (e) { return d.ping.random ? Math.floor(Math.random() * (d.ping.max - d.ping.min + 1)) + d.ping.min : Date.now() - e }), I("FakeFps", function (e) { let t = d.hideFPS; if (!t.hide && !t.showMs && !t.random) return e; if (t.hide) return ""; if (t.showMs) { let o = parseFloat(e); if (o > 0) return (1e3 / o).toFixed(1) } return t.random ? Math.floor(Math.random() * (t.max - t.min + 1)) + t.min : e }), function t() { let o = null, n = HTMLElement.prototype.appendChild; HTMLElement.prototype.appendChild = function (t) { if (t?.tagName === "SCRIPT" && "string" == typeof t.innerHTML && t.innerHTML.startsWith("(()=>{")) { o = t.innerHTML; try { let i = t.innerHTML, a = /(case [A-Za-z$_]+\.[A-Za-z$_]+\:[A-Za-z$_]+\=)Date\.now\(\)-([A-Za-z$_]+),/.exec(i), r = /(document\.getElementById\("FPS"\)\.innerText=)(.*?)}/.exec(i); a && (i = P.call(i, a[0], `${a[1]}window.${e.FakePing}(${a[2]}),`)), r && (i = P.call(i, r[0], `${r[1]}window.${e.FakeFps}(${r[2]})}`)); let s = /(([a-zA-Z_$][a-zA-Z0-9_$]*)\[this\.playerIdx\])/.exec(i); if (s) { let l = s[2]; i = P.call(i, `${l}=[]`, `${l}=[],window.players=${l}`) } let d = /gameJoined_ received"\),(\w+)=\w+\.unPackInt8U\(\)/.exec(i) || /([A-Z]{2})=[A-Za-z$_]+\.unPackInt8U\(\)/.exec(i); d && (i = P.call(i, d[0], `${d[0]},window.myPlayerIdx=${d[1]}`)); let u = "if(this.inventory[t]&&this.inventory[t].id===e.id)return!0;return!1"; i = P.call(i, u, "if(this.inventory[t]&&this.inventory[t].id===e.id)return!0;if(window.__ssbSkinUnlocker)return!0;return!1"); let f = "hasValue(t.ownedItemIds))for(var i=0;i<t.ownedItemIds.length;i++){var n=Ic.catalog.findItemById(t.ownedItemIds[i]);this.inventory.push(n)}", g = "hasValue(t.ownedItemIds))for(var i=0;i<t.ownedItemIds.length;i++){var n=Ic.catalog.findItemById(t.ownedItemIds[i]);this.inventory.push(n)}if(window.__ssbSkinUnlocker){window.__ssbAcct=this;window.__ssbStuffedIds=window.__ssbStuffedIds||new Set();var __ssbAdd=e=>{e&&e.forEach(e=>{e&&!this.inventory.some(t=>t&&t.id===e.id)&&(this.inventory.push(e),window.__ssbStuffedIds.add(e.id))})};__ssbAdd(Ic.catalog.hats);__ssbAdd(Ic.catalog.stamps);__ssbAdd(Ic.catalog.grenades);__ssbAdd(Ic.catalog.melee);for(var __ssbC=0;__ssbC<Ic.catalog.forClass.length;__ssbC++){__ssbAdd(Ic.catalog.forClass[__ssbC].primaryWeapons);__ssbAdd(Ic.catalog.forClass[__ssbC].secondaryWeapons)}}"; i = P.call(i, f, g); let v = "isItemOwned:MO,tryEquipItem:function(e,t){if(t=t||e.item_type_id,null===e||MO(e)||\"default\"===e.unlock)switch(t)", w = "isItemOwned:function(e){return window.__ssbSkinUnlocker||MO(e)},tryEquipItem:function(e,t){if(t=t||e.item_type_id,null===e||window.__ssbSkinUnlocker||MO(e)||\"default\"===e.unlock)switch(t)"; i = P.call(i, v, w); t.innerHTML = i } catch (c) { } } return n.call(this, t) }; let i = HTMLScriptElement.prototype, a = Object.getOwnPropertyDescriptor(i, "textContent") || Object.getOwnPropertyDescriptor(Node.prototype, "textContent"); Object.defineProperty(i, "textContent", { get() { let e = a.get.call(this); return e && e.startsWith("(()=>{") && o ? o : e }, set: a.set, configurable: !0, enumerable: !0 }) }(); let A = { enabled: JSON.parse(localStorage.getItem("ch2-enabled") ?? "false"), hideCrosshair: JSON.parse(localStorage.getItem("ch2-hideCrosshair") ?? "false"), armColor: (localStorage.getItem("ch2-armColor") ?? "#ffffff").replace(/^"|"$/g, ""), armBorder: (localStorage.getItem("ch2-armBorder") ?? "#000000").replace(/^"|"$/g, ""), armLength: parseFloat(localStorage.getItem("ch2-armLength") ?? "0.75"), armWidth: parseFloat(localStorage.getItem("ch2-armWidth") ?? "0.3"), armOpacity: parseFloat(localStorage.getItem("ch2-armOpacity") ?? "1"), armRotation: parseInt(localStorage.getItem("ch2-armRotation") ?? "0"), armGap: parseInt(localStorage.getItem("ch2-armGap") ?? "0"), armScale: parseFloat(localStorage.getItem("ch2-armScale") ?? "1"), hideDot: JSON.parse(localStorage.getItem("ch2-hideDot") ?? "false"), dotShape: (localStorage.getItem("ch2-dotShape") ?? "dot").replace(/^"|"$/g, ""), dotColor: (localStorage.getItem("ch2-dotColor") ?? "#ffffff").replace(/^"|"$/g, ""), dotBorder: (localStorage.getItem("ch2-dotBorder") ?? "#000000").replace(/^"|"$/g, ""), dotRound: JSON.parse(localStorage.getItem("ch2-dotRound") ?? "false"), dotOpacity: parseFloat(localStorage.getItem("ch2-dotOpacity") ?? "1"), dotPlusLen: parseInt(localStorage.getItem("ch2-dotPlusLen") ?? "8"), dotPlusWidth: parseInt(localStorage.getItem("ch2-dotPlusWidth") ?? "2"), dotScale: parseFloat(localStorage.getItem("ch2-dotScale") ?? "1"), plusScale: parseFloat(localStorage.getItem("ch2-plusScale") ?? "1"), staticColor: (localStorage.getItem("ch2-staticColor") ?? "#ffffff").replace(/^"|"$/g, ""), staticBorder: (localStorage.getItem("ch2-staticBorder") ?? "#000000").replace(/^"|"$/g, ""), staticOpacity: parseFloat(localStorage.getItem("ch2-staticOpacity") ?? "1"), staticLength: parseFloat(localStorage.getItem("ch2-staticLength") ?? "0.75"), staticWidth: parseFloat(localStorage.getItem("ch2-staticWidth") ?? "0.3"), staticGap: parseFloat(localStorage.getItem("ch2-staticGap") ?? "3"), staticOutlineEnabled: JSON.parse(localStorage.getItem("ch2-staticOutlineEnabled") ?? "true"), stillScale: parseFloat(localStorage.getItem("ch2-stillScale") ?? "1") }, B = { enabled: !1, hideCrosshair: !1, armColor: "#ffffff", armBorder: "#000000", armLength: .75, armWidth: .3, armOpacity: 1, armRotation: 0, armGap: 0, armScale: 1, hideDot: !1, dotShape: "dot", dotColor: "#ffffff", dotBorder: "#000000", dotRound: !1, dotOpacity: 1, dotPlusLen: 8, dotPlusWidth: 2, dotScale: 1, plusScale: 1, staticColor: "#ffffff", staticBorder: "#000000", staticOpacity: 1, staticLength: .75, staticWidth: .3, staticGap: 3, staticOutlineEnabled: !0, stillScale: 1 }; function F(e, t) { localStorage.setItem("ch2-" + e, "string" == typeof t ? t : JSON.stringify(t)), _chDirty = !0 } let _chDirty = !1, _updP = null, _updT = 0, _updPend = {}; function schedUpd(e, t) { _updPend[e] = t, _updP || (_updP = requestAnimationFrame(() => { _updP = null, G(), Y(), ef("ui_onchange") })), clearTimeout(_updT), _updT = setTimeout(() => { let o = _updPend; _updPend = {}, Object.keys(o).forEach(e => F(e, o[e])) }, 150) } function _sd(e, t) { e && e.style.display !== t && (e.style.display = t) } window.__ssbPerf = { tick: 0, mods: 0, harm: 0 }; let T = "ch2-profiles", H = "ch2-currentProfile"; function N() { try { return JSON.parse(localStorage.getItem(T)) || {} } catch (e) { return {} } } function M(e) { localStorage.setItem(T, JSON.stringify(e)) } function z() { return localStorage.getItem(H) || "" } function O(e) { localStorage.setItem(H, e || "") } function D(e) { if (!e) return !1; let t = N(); return t[e] = Object.assign({}, A), M(t), O(e), !0 } function R() {
        let e = a("ch2-arm-style", void 0, document.body); if (!A.enabled) { e.textContent && (e.textContent = ""); return } let t = document.getElementById("crosshairContainer"); t && (t.style.transform = `rotate(${A.armRotation}deg)`); let o = A.armLength * A.armScale, n = A.armWidth * A.armScale, i = Math.min(.05 * A.armScale, .3 * n); let fs = 40; if (t) { let _f = parseFloat(getComputedStyle(t).fontSize); _f > 0 && (fs = _f) } let Hpx = Math.max(1, Math.round(o * fs)), Wpx = Math.max(1, Math.round(n * fs)), Bpx = i * fs; Bpx = Bpx > .25 ? Math.max(1, Math.round(Bpx)) : 0; e.innerHTML = `
			.crosshair {
				position: absolute !important;
				transform-origin: 50% top !important;
				top: calc(50% + ${A.armGap}px * var(--ssb-ui-scale, 1)) !important;
				box-sizing: border-box !important;
				border: solid ${Bpx}px ${A.armBorder} !important;
				height: ${Hpx}px !important;
				opacity: ${A.armOpacity} !important;
			}
			.crosshair.normal {
				left: calc(50% - ${(Wpx / 2).toFixed(1)}px) !important;
				background: ${A.armColor} !important;
				width: ${Wpx}px !important;
			}
			.crosshair.powerful {
				left: calc(50% - ${(Wpx / 2).toFixed(1)}px) !important;
				background: red !important;
				width: ${Wpx}px !important;
			}
			.shotReticle.fill.normal {
				border-color: ${A.armColor} !important;
				border-left: solid transparent !important;
				border-right: solid transparent !important;
				border-width: 0.18em !important;
				padding: 0.18em !important;
			}
		`} function q() {
        let e = a("ch2-dot-style", void 0, document.body), t = o("reticleDot"); if (!A.enabled) { a("ch2-dot-style", "", document.body), t && (t.innerHTML = "", t.removeAttribute("style")); return } if (!document.pointerLockElement) { a("ch2-dot-style", "", document.body), t && (t.innerHTML = "", t.removeAttribute("style")); return } if (A.hideDot || "still" === A.dotShape) { a("ch2-dot-style", "#reticleDot { display: none !important; visibility: hidden !important; } #reticleDot .ch2-bar { display: none !important; }", document.body), t && (t.innerHTML = ""); return } "plus" === A.dotShape ? (a("ch2-dot-style", `
				#reticleDot {
					display: block !important; visibility: visible !important;
					position: absolute !important; top: calc(50% + ${A.armGap}px * var(--ssb-ui-scale, 1)) !important; left: 50% !important;
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
					width: calc(${A.dotPlusWidth}px * var(--ssb-ui-scale, 1)) !important; height: calc(${A.dotPlusLen}px * var(--ssb-ui-scale, 1)) !important;
					transform: translate(-50%, -50%) rotate(90deg) !important;
				}
				#reticleDot .ch2-bar.v {
					left: 50% !important; top: 50% !important;
					width: calc(${A.dotPlusWidth}px * var(--ssb-ui-scale, 1)) !important; height: calc(${A.dotPlusLen}px * var(--ssb-ui-scale, 1)) !important;
					transform: translate(-50%, -50%) !important;
				}
			`, document.body), t && !t.querySelector(".ch2-bar") && (t.innerHTML = '<div class="ch2-bar h"></div><div class="ch2-bar v"></div>')) : (a("ch2-dot-style", `
				#reticleDot {
					display: block !important; visibility: visible !important;
					position: absolute !important;
					top: calc(50% + ${A.armGap}px * var(--ssb-ui-scale, 1)) !important; left: 50% !important;
					transform: translate(-50%, -50%) scale(${A.dotScale}) !important;
					background-color: ${A.dotColor} !important;
					border: solid 0.05em ${A.armBorder} !important;
					width: ${A.armWidth}em !important; height: ${A.armWidth}em !important;
					opacity: ${A.dotOpacity} !important;
					border-radius: ${A.dotRound ? "100%" : "0"} !important;
				}
			`, document.body), t && (t.innerHTML = ""))
    } function j() {
        let e = a("ch2-static-style", void 0, document.body), t = document.getElementById("ch2-static-cont"); if (!A.enabled || "still" !== A.dotShape || A.hideDot) { a("ch2-static-style", "", document.body), t && t.remove(); return } t || ((t = document.createElement("div")).id = "ch2-static-cont", t.innerHTML = '<div class="ch2-sa"></div><div class="ch2-sa"></div><div class="ch2-sa"></div><div class="ch2-sa"></div>', document.body.appendChild(t)), t.style.display = document.pointerLockElement ? "" : "none"; let o = document.getElementById("crosshairContainer"), n = o ? getComputedStyle(o).fontSize : "40px", i = t.querySelectorAll(".ch2-sa");[0, 90, 180, 270].forEach((e, t) => { i[t] && (i[t].style.transform = `rotate(${e}deg)`) }), a("ch2-static-style", `
			#ch2-static-cont {
				position: fixed !important; top: 50% !important; left: 50% !important;
				width: 0 !important; height: 0 !important; pointer-events: none !important;
				z-index: 99999 !important; font-size: ${n} !important;
				transform: scale(${A.stillScale}) !important;
			}
			#ch2-static-cont .ch2-sa {
				position: absolute !important;
				transform-origin: 50% calc(-${A.staticGap}px * var(--ssb-ui-scale, 1)) !important;
				top: calc(${A.staticGap}px * var(--ssb-ui-scale, 1)) !important; left: calc(-${A.staticWidth / 2}em) !important;
				width: ${A.staticWidth}em !important; height: ${A.staticLength}em !important;
				background: ${A.staticColor} !important;
				border: ${A.staticOutlineEnabled ? `solid 0.05em ${A.staticBorder}` : "none"} !important;
				opacity: ${A.staticOpacity} !important; box-sizing: border-box !important;
			}
		`, document.body)
    } function W() { a("ch2-hide-style", A.hideCrosshair ? "#crosshairContainer{display:none!important}" : "") } function G() { R(), q(), j(), W() } window.addEventListener("resize", () => { clearTimeout(window._ssbRszT), window._ssbRszT = setTimeout(() => { A.enabled && G() }, 150) }); let K = null, U = null, _lastReticleDot = null; function Y() { window._ssbYP || (window._ssbYP = 1, requestAnimationFrame(() => { window._ssbYP = 0, _Yimpl() })) } function _Yimpl() {
        let e = document.getElementById("ch2-preview-wrap"); if (!e) return; let t = localStorage.getItem("ch2-previewBg") || "#ffffff", o = A.enabled ? A : { hideCrosshair: !1, armColor: "#ffffff", armBorder: "#000000", armLength: .75, armWidth: .3, armOpacity: 1, armRotation: 0, armScale: 1, hideDot: !1, dotShape: "dot", dotColor: "#ffffff", dotBorder: "#000000", dotRound: !1, dotOpacity: 1, dotPlusLen: 8, dotPlusWidth: 2, dotScale: 1, plusScale: 1, staticColor: "#ffffff", staticBorder: "#000000", staticOpacity: 1, staticLength: .75, staticWidth: .3, staticGap: 3, staticOutlineEnabled: !0, stillScale: 1 }, n = o.armLength * o.armScale, i = o.armWidth * o.armScale, a = Math.min(.05 * o.armScale, .3 * i).toFixed(4), r = `position:absolute;transform-origin:50% top;top:0px;left:calc(-${(i / 2).toFixed(4)}em);width:${i}em;height:${n}em;background:${o.armColor};border:solid ${a}em ${o.armBorder};opacity:${o.armOpacity};box-sizing:border-box;`, s = ""; if (!o.hideDot) { if ("still" === o.dotShape) { let l = o.staticOutlineEnabled ? `solid 0.05em ${o.staticBorder}` : "none", d = `position:absolute;transform-origin:50% -${o.staticGap}px;top:${o.staticGap}px;left:calc(-${o.staticWidth / 2}em);width:${o.staticWidth}em;height:${o.staticLength}em;background:${o.staticColor};border:${l};opacity:${o.staticOpacity};box-sizing:border-box;`; s = `<div style="position:absolute;top:0;left:0;width:0;height:0;transform:scale(${o.stillScale});"><div style="${d}transform:rotate(0deg);"></div><div style="${d}transform:rotate(90deg);"></div><div style="${d}transform:rotate(180deg);"></div><div style="${d}transform:rotate(270deg);"></div></div>` } else s = "plus" === o.dotShape ? `<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(${o.plusScale});font-size: 24px;opacity:${o.dotOpacity};width:0;height:0;background:none;border:none;"><div style="position:absolute;background:${o.dotColor};top:50%;left:50%;width:${o.dotPlusWidth}px;height:${o.dotPlusLen}px;transform:translate(-50%,-50%) rotate(90deg);"></div><div style="position:absolute;background:${o.dotColor};top:50%;left:50%;width:${o.dotPlusWidth}px;height:${o.dotPlusLen}px;transform:translate(-50%,-50%);"></div></div>` : `<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(${o.dotScale});font-size: 24px;opacity:${o.dotOpacity};width:${o.armWidth}em;height:${o.armWidth}em;background:${o.dotColor};border:solid 0.05em ${o.armBorder};border-radius:${o.dotRound ? "100%" : "0"};"></div>` } let c = o.hideCrosshair ? "" : `
				<div style="${r}transform:rotate(0deg);"></div>
				<div style="${r}transform:rotate(90deg);"></div>
				<div style="${r}transform:rotate(180deg);"></div>
				<div style="${r}transform:rotate(270deg);"></div>
		`; e.style.background = t, e.style.position = "relative", e.innerHTML = `<div style="position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;overflow:hidden;">
			<div style="position:relative;width:0;height:0;font-size: 24px;transform:rotate(${o.armRotation}deg);">
				${c}
				${s}
			</div>
		</div>`} function V() { R(), W(), j(), function e() { let t = document.getElementById("reticleDot"); t && (t !== _lastReticleDot) && (_lastReticleDot = t, A.enabled && q()); if (!window._ssbReticleObserver) { let o = new MutationObserver(() => { let t = document.getElementById("reticleDot"); t && (t !== _lastReticleDot) && (_lastReticleDot = t, A.enabled && q()) }); o.observe(document.body, { childList: !0, subtree: !0 }), window._ssbReticleObserver = o } }(), window._ssbVLockHook || (window._ssbVLockHook = 1, document.addEventListener("pointerlockchange", () => { document.pointerLockElement && j(); A.enabled && q(); let e = document.getElementById("ch2-static-cont"); e && (e.style.display = document.pointerLockElement ? "" : "none"); let _o = window._ssbReticleObserver; _o && (document.pointerLockElement ? _o.disconnect() : _o.observe(document.body, { childList: !0, subtree: !0 })), eS() })) } setInterval(function e() { if (!document.pointerLockElement) { !1 !== U && K && (K.textContent = "", U = !1); window._specCount = 0; return } K || (K = a("ch2-spec-hide")); let t = function e() { if (!document.pointerLockElement) return !1; try { let a = window.vueApp?.$data || window.vueData || window.vueApp, r = a?.ui?.game; if (r && "boolean" == typeof r.spectate) return !0 === r.spectate } catch (s) { } try { let t = document.querySelectorAll("div.h4.margins_sm"); for (let o of t) { if (!/spectat/i.test(o.textContent || "")) continue; let n = o.getBoundingClientRect(); if (n.width > 0 && n.height > 0) return !0 } } catch (i) { } return !1 }(); if (t) { window._specCount = (window._specCount || 0) + 1 } else { window._specCount = 0 } let confirmed = window._specCount >= 2; confirmed !== U && (U = confirmed, K.textContent = confirmed ? "#reticleDot, #reticleDot .ch2-bar, #ch2-static-cont { display: none !important; visibility: hidden !important; }" : "") }, 2e3), window.resetVolume = function () { if (X) { X.value = .6, X.dispatchEvent(new Event("input", { bubbles: !0 })) } else { Z && (Z.innerText = "60%"), window.vueApp?.setVolume?.(.6), window.Howler?.volume?.(.6), localStorage.setItem("volume", .6) } }; let Z, X, J = `
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
			.mod-slider-title { font-family:"Sigmar One", sans-serif !important; font-size: 24px; font-weight:normal; color:#0C576F; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:0; }
			#resetVolBtn { position:static!important; display:block; margin:8px auto 0;
				padding:5px 22px; border:none; border-radius:999px;
				background:linear-gradient(180deg,#3ec6e0 0%,#1fa8c8 100%);
				border-bottom:3px solid #1480a0; color:#fff; font-size:12px; font-weight:700;
				letter-spacing:.4px; text-shadow:0 1px 1px rgba(0,0,0,.25);
				box-shadow:0 2px 5px rgba(0,0,0,.2); cursor:pointer;
				transition:filter .1s, transform .1s; }
			#resetVolBtn:hover  { filter:brightness(1.1); }
			#resetVolBtn:active { transform:translateY(2px); border-bottom-width:1px; }
		</style>
		<div class="vol-wrap">
			<div class="vol-row">
				<span id="mod-volDisplay"></span>
				<input type="range" min="0" max="1" step="0.01" class="mod-vol-slider" id="mod-vol-slider">
			</div>
			<button id="resetVolBtn" onclick="window.resetVolume()">Reset Volume</button>
		</div>`, Q = setInterval(function () { if (document.pointerLockElement) return; let e = document.getElementsByClassName("pause-game-weapon-select")[0]; if (e) { clearInterval(Q); let t = document.createElement("div"); t.innerHTML = J, e.appendChild(t), Z = document.getElementById("mod-volDisplay"), X = document.getElementById("mod-vol-slider"); let o = parseFloat(localStorage.getItem("volume") ?? .6); X.value = o, Z.innerText = Math.round(100 * o) + "%", X.oninput = function () { let e = parseFloat(this.value); Z.innerText = Math.round(100 * e) + "%", void 0 !== window.Howler && window.Howler.volume(e), window.vueApp && "function" == typeof window.vueApp.setVolume && window.vueApp.setVolume(e); let i = window._ssbSndSlider; if (!i || !i.isConnected) { i = null; let t = Array.from(document.querySelectorAll("div, label, span, h2, h3, h4, th, td")).filter(e => e.textContent && "SOUND EFFECTS" === e.textContent.trim().toUpperCase()); for (let o of t) { let n = o.parentElement.parentElement.parentElement, a = n && n.querySelector('input[type="range"]'); if (a && "mod-vol-slider" !== a.id) { i = a; break } } window._ssbSndSlider = i } i && (i.value = "1" === i.max ? e : 100 * e, i.dispatchEvent(new Event("input", { bubbles: !0 })), i.dispatchEvent(new Event("change", { bubbles: !0 }))); localStorage.setItem("volume", e) } } }, 1e3), ee = Date.now(); function et(e) { let t = Math.floor(e / 1e3), o = Math.floor(t / 3600), n = Math.floor(t % 3600 / 60), i = t % 60, a = e => String(e).padStart(2, "0"); return o > 0 ? `${o}:${a(n)}:${a(i)}` : `${a(n)}:${a(i)}` } function eo() { let e = o("inGameUI"); e && (e.style.opacity = String(Math.max(0, Math.min(1, d.hideFPS.boxOpacity ?? 1)))), r("ssb-hide-fps-box", en, d.hideFPS.hideBox); let t = o("FPS"), n = o("ping"); if (t) { let i = d.hideFPS.hide ? "none" : ""; _sd(t, i); let a = t.previousElementSibling; a && (_sd(a, i), "_ssbOrigText" in a || (a._ssbOrigText = a.textContent), a.textContent = d.hideFPS.showMs ? "MS" : a._ssbOrigText) } if (n) { let s = d.ping.hide ? "none" : ""; _sd(n, s), n.previousElementSibling && _sd(n.previousElementSibling, s) } let l = o("readouts"); l && _sd(l, d.hideFPS.hide && d.ping.hide ? "none" : ""); let c = l || e; if (c) { let p = o("ssb-session-time-label"), m = o("ssb-session-time"); d.hideFPS.showSessionTime ? (p && "H5" !== p.tagName && (p.remove(), p = null), m && "P" !== m.tagName && (m.remove(), m = null), p || ((p = document.createElement("h5")).id = "ssb-session-time-label", p.className = "nospace title", c.appendChild(p)), m || ((m = document.createElement("p")).id = "ssb-session-time", m.className = "name", c.appendChild(m)), m.style.color = "#ffffff", p.style.display = "", m.style.display = "", p.textContent = "TIME", m.textContent = et(Date.now() - ee)) : (p && (p.style.display = "none"), m && (m.style.display = "none")) } } let en = ".pause-game-container, .ss_box, .challenges, .challenges-container { align-self: flex-start !important; height: auto !important; }\n#inGameUI { background: none !important; background-color: transparent !important; border: none !important; box-shadow: none !important; backdrop-filter: none !important; }"; function ei() { let e = d.ui, t = i(".vol-wrap"); _sd(t, e.showVolumeSlider ? "" : "none"); let n = i(".egg_count"), a = n?.closest(".account_eggs"); _sd(a, e.hideEggCount ? "none" : ""); let s = i(".chat-container"); _sd(s, e.hideChat ? "none" : ""); let l = o("playerList"); _sd(l, e.hidePlayerList ? "none" : ""); let c = o("shellStreakContainer"); _sd(c, e.hideBestStreak ? "none" : ""), r("mod-killfeed-style", "#killTicker, .killTicker, [id*='killTicker'], #killLog, .kill-log, .kill-feed, #killList, .killList, .player-kill-feed { display: none !important; opacity: 0 !important; pointer-events: none !important; }", e.hideKillFeed), r("ssb-hide-game-stats", "#teamScores, #captureContainer, #captureIconContainer, #spatulaPlayer, .match-vs, .team-vs, .team-score, .gameStats, .game-stats { display: none !important; visibility: hidden !important; }", e.hideGameStats), r("ssb-hide-ammo", "#ammo { display: none !important; visibility: hidden !important; }", e.hideAmmo), r("ssb-hide-grenade", "#grenades, #grenade1, #grenade2, #grenade3, #grenadeThrow, #grenadeThrowContainer { display: none !important; visibility: hidden !important; }", e.hideGrenade), r("ssb-hide-hp", "#healthBar, #healthContainer { display: none !important; visibility: hidden !important; }", e.hideHP) } let ea = null, er = !1, es = null, el = 0, ed = Object.getOwnPropertyDescriptor(Document.prototype, "pointerLockElement"), ec = Object.getOwnPropertyDescriptor(MouseEvent.prototype, "movementX"), ep = Object.getOwnPropertyDescriptor(MouseEvent.prototype, "movementY"); ec?.get && ep?.get && (Object.defineProperty(MouseEvent.prototype, "movementX", { get() { if (!er && el === 0) return ec.get.call(this); if (er) return 0; return performance.now() < el ? 0 : ec.get.call(this) }, configurable: !0 }), Object.defineProperty(MouseEvent.prototype, "movementY", { get() { if (!er && el === 0) return ep.get.call(this); if (er) return 0; return performance.now() < el ? 0 : ep.get.call(this) }, configurable: !0 })), ed?.get && Object.defineProperty(Document.prototype, "pointerLockElement", { configurable: !0, get() { let e = ed.get.call(this); return er && !e && es ? es : e } }); let em = !1, eh = null; function eu() { eh && cancelAnimationFrame(eh); let e = () => { try { "function" == typeof window.reset_yaw_pitch && window.reset_yaw_pitch() } catch (t) { } eh = performance.now() < el ? requestAnimationFrame(e) : null }; eh = requestAnimationFrame(e) } function ef(e) { try { window.BAWK?.play?.(e) } catch (t) { } } function eg() { let e = $(); e && (S(), w(e)) } !function e() { let t = null; function o(e) { return function () { if (0 === el) return e.apply(this, arguments); let o; try { o = e.apply(this, arguments) } catch (n) { return t || { yaw: 0, pitch: 0, coords: null } } return performance.now() < el && t ? Object.assign({}, t, { coords: o && o.coords }) : (o && "number" == typeof o.yaw && (t = o), o) } } if ("function" == typeof window.get_yaw_pitch) { window.get_yaw_pitch = o(window.get_yaw_pitch); return } let n = setInterval(() => { "function" == typeof window.get_yaw_pitch && (clearInterval(n), window.get_yaw_pitch = o(window.get_yaw_pitch)) }, 100); setTimeout(() => clearInterval(n), 3e4) }(), document.addEventListener("pointerlockchange", function (e) { let t = !!ed?.get.call(document); if (er && !t && e.stopImmediatePropagation(), em && t) { em = !1, el = performance.now() + 500; try { "function" == typeof window.reset_yaw_pitch && window.reset_yaw_pitch() } catch (o) { } eu() } else if (t && er) { er = !1, es = null, el = 0 } }, !0), document.addEventListener("mousemove", function (e) { if (0 === el) return; let t = performance.now(); t < el && (Math.abs(ec.get.call(e)) > 100 || Math.abs(ep.get.call(e)) > 100) && (el = t + 200) }, !0), ea && document.removeEventListener("keydown", ea), ea = function (e) { let t = document.activeElement; !(t && (/^(INPUT|TEXTAREA)$/i.test(t.tagName) || t.isContentEditable)) && e.key && e.key.toLowerCase() === d.gameplay.tabOutKey.toLowerCase() && function e() { let t = document.activeElement?.id === "chatIn", o = window.vueApp?.game?.isPaused; if (!t && !o) { if (er) { er = !1, em = !0, el = performance.now() + 2e3; try { "function" == typeof window.reset_yaw_pitch && window.reset_yaw_pitch() } catch (n) { } eu(), (es || document.getElementById("canvas") || document.querySelector("canvas"))?.requestPointerLock?.() } else { try { "function" == typeof window.reset_yaw_pitch && window.reset_yaw_pitch() } catch (i) { } let a = ed ? ed.get.call(document) : document.pointerLockElement; a && (es = a), er = !0, document.exitPointerLock?.() } } }() }, document.addEventListener("keydown", ea); let e$ = 0; setInterval(() => { e$++, window.__ssbPerf && window.__ssbPerf.tick++; let e = !!document.pointerLockElement, _rd = document.getElementById("reticleDot"); _rd && _rd !== _lastReticleDot && (_lastReticleDot = _rd, A.enabled && q()), e && e$ % 12 != 0 ? e$ % 2 == 0 && function e() { if (!d.hideFPS.showSessionTime) return; let t = o("ssb-session-time"); t && (t.textContent = et(Date.now() - ee)) }() : (eo(), ei(), eg(), A.enabled && _chDirty && (_chDirty = !1, q())), 0 !== el && performance.now() >= el && (el = 0) }, 500); let eb = { matchStartMs: 0, matchEndMs: 0, inMatch: !1, hadLock: !1, userClosed: !1, server: "", map: "", mode: "", snapshot: [], totalKills: {}, totalDeaths: {}, _lastKills: {}, _lastDeaths: {}, knownPlayers: {}, everSeenTeams: !1 }, ey = ["Abduction", "Aqueduct", "Backstage", "Bastion", "Bedrock", "BioHazard", "Blender", "Blue", "Bridge", "Canyon", "Cash", "Castle", "Castle Arena", "Catacombs", "Chicken Itza", "Cluckgrounds", "Cobalt", "Courtyard", "Creak", "Crossed", "Crowsnest", "Death Pit", "Dirt", "Dirt Base", "Downfall", "Duel Pyramid", "Eggcrates", "Enchanted", "Exposure", "Facility", "Feedlot", "Field", "Flux", "Fort Flip", "Foundation", "Four Quarters", "Gravel Stomp", "Greenhouse", "Growler", "Haunted", "Helix", "Hydro", "Ice Box", "Indigo", "Inmates", "Jail Break", "Jinx", "Junction", "King's Court", "Lunar Module", "Mansion", "Maze Runner", "Metamorph", "Metro 1012", "Moonbase", "Mud Gulch", "Nextdoor", "Orbital", "Outer Reach", "Overcooked", "Palace Siege", "Quarry", "Queen's Court", "Raceway", "Rameses", "Rats", "Relic", "Rivals", "Road", "Ruins", "Sanctuary", "Scales", "Shady Glen", "Shellville", "Shipyard", "Sky Scratcher", "Space Factory", "Space Arena", "Sparta", "Spellbound", "Stage", "Starship", "Stax Arena", "Teggtris", "Temple", "Timetwist", "Trainyard", "Tree Fort", "Two Towers", "Uncovered", "Vert", "Wimble", "Wonderland", "Wreckage", "Yolkido Garrison", "Zoomies"]; function ex() { try { let e = window.players || [], _vd = window.vueApp && (window.vueApp.$data || window.vueApp) || {}, _maps = _vd.maps; for (let t of e) { let o = t && t.gameData && t.gameData.mapIdx; if ("number" == typeof o) { if (_maps && _maps[o] && _maps[o].name) return _maps[o].name; if (ey[o]) return ey[o] } } } catch (n) { } let i = e => !e || /^(none|photo|menu|lobby|select|loading)/i.test(String(e).trim()); try { let a = window.vueApp?.$data || window.vueApp || {}, r = [a.gameMap, a.mapName, a.map, a.ui?.game?.map, a.$data?.map, document.getElementById("mainScreens")?.children?.length ? document.querySelector(".btn_game_mode:not(.mod-server-clone) .game-mode-type")?.textContent : null,]; for (let s of r) if ("string" == typeof s && !i(s)) return s.trim() } catch (l) { } return "" } function ev() { if (window.currentServerRegion) return window.currentServerRegion; try { let e = JSON.parse(localStorage.getItem("mod-server-hosts") || "{}"), t = Object.keys(e); return t.length ? t[t.length - 1] : "" } catch (o) { return "" } } function e_(e) { let t = window.players; if (!t) return 0; let o = 0; for (let n of t) n && n.stats && (0 === e || n.team === e) && (o += 0 | n.stats.kills); return o } function e0() { if (eb && (eb.mode === "king" || eb.mode === "ctf")) return eb.mode; let now = Date.now(), _mw = document.pointerLockElement ? 1e4 : 2e3; if (eb && eb._modeTs && now - eb._modeTs < _mw && eb.mode) return eb.mode; if (eb) eb._modeTs = now; let e = e => { if (!e) return !1; let t = e.getBoundingClientRect(); return t.width > 0 && t.height > 0 }, t = document.getElementById("captureContainer"), o = document.getElementById("teamScores"), n = document.getElementById("spatulaPlayer"); if (e(t)) return "king"; if (e(o) || e(n)) return "ctf"; let i = window.players; return i && i.some(e => e && (1 === e.team || 2 === e.team)) || eb && eb.everSeenTeams ? "team" : "ffa" } function _ssbSaveStats(_f) { try { if (!d.stats.enabled || !eb.matchStartMs) return; let _sk = 0, _sd = 0, _sn = 0; for (let _k in eb.byName) { let _r = eb.byName[_k]; _sk += _r.kills || 0; _sd += _r.deaths || 0; _sn++ } let _sig = eb.gameCode + "|" + eb.matchStartMs + "|" + eb.map + "|" + eb.server + "|" + eb.mode + "|" + (eb.kotcScore ? eb.kotcScore[1] + "," + eb.kotcScore[2] : "") + "|" + _sk + "|" + _sd + "|" + _sn; if (!_f && eb._saveSig === _sig) return; eb._saveSig = _sig; let _gcS = eb.gameCode || (eb._synth || (eb._synth = "local-" + (eb.matchStartMs || Date.now()))); localStorage.setItem("tp-statsSession", JSON.stringify({ code: _gcS, map: eb.map, server: eb.server, byName: eb.byName || {}, matchStartMs: eb.matchStartMs, kotcScore: eb.kotcScore || { 1: 0, 2: 0 }, everSeenTeams: eb.everSeenTeams, mode: eb.mode, ts: Date.now() })); let players = (eb.snapshot || []).map(p => ({ name: p.name, team: p.team, kills: p.kills, deaths: p.deaths, isMe: p.isMe })); if (!players.length) return; let hist; try { hist = JSON.parse(localStorage.getItem("tp-statsHistory") || "[]") } catch (he) { hist = [] } if (!Array.isArray(hist)) hist = []; let entry = { code: _gcS, map: eb.map, server: eb.server, mode: eb.mode, startMs: eb.matchStartMs, endMs: Date.now(), kotc: eb.kotcScore || { 1: 0, 2: 0 }, players: players }; let idx = hist.findIndex(h => h && h.code === _gcS && Math.abs((h.startMs || 0) - (eb.matchStartMs || 0)) < 15e3); idx >= 0 ? (entry.label = hist[idx].label, hist[idx] = entry) : hist.unshift(entry); hist.length > 40 && (hist = hist.slice(0, 40)); localStorage.setItem("tp-statsHistory", JSON.stringify(hist)) } catch (e) { } } function _ssbRestoreStats(gc, mp) { try { if (eb._restoreDone) return !1; let raw = localStorage.getItem("tp-statsSession"); if (!raw) return !1; let s = JSON.parse(raw); if (!s || s.code !== gc || !(Date.now() - (s.ts || 0) < 3e5)) return !1; if (s.map && mp && s.map !== mp) return !1; eb.byName = s.byName || {}; for (let _rk of Object.keys(eb.byName)) { let _rr = eb.byName[_rk]; _rr && (_rr._ret = 1, _rr._q = 0) } eb.matchStartMs = s.matchStartMs || Date.now(), eb.kotcScore = s.kotcScore || { 1: 0, 2: 0 }, eb.everSeenTeams = !!s.everSeenTeams, eb.mode = s.mode || "", eb._snapMap = {}, eb._restoreDone = !0; return !0 } catch (e) { return !1 } } window.addEventListener("beforeunload", _ssbSaveStats), window.addEventListener("pagehide", _ssbSaveStats), document.addEventListener("visibilitychange", () => { "hidden" === document.visibilityState && _ssbSaveStats(1) }); function ew() { if (!d.stats.enabled || document.hidden) return; (function () { if (!eb.kotcScore) eb.kotcScore = { 1: 0, 2: 0 }; let rd = t => { let ids = 1 === t ? ["captureScoreBlue", "teamScoreNum1"] : ["captureScoreRed", "teamScoreNum2"]; for (let id of ids) { let n = document.getElementById(id); if (n) { let v = parseInt((n.textContent || "").trim(), 10); if (Number.isFinite(v)) return v } } return 0 }; let b = rd(1), r = rd(2); if (b + r > 0) { eb.kotcScore[1] = b, eb.kotcScore[2] = r } })(); let e = window.players, t = !!document.pointerLockElement, o = !!(e && e.some(e => e)); if (o ? (eb._lastEmptyN = eb._emptyN || 0, eb._emptyN = 0) : (eb._emptyN = (eb._emptyN || 0) + 1), eb._prevHadPlayers && !o && (eb._readyForReset = !0), o) { if (!(document.pointerLockElement && eb.matchStartMs && eb.inMatch && !eb._readyForReset)) { let n = ex(), i = ev(), gc = window.__ssbGameCode || ""; if (!eb.matchStartMs || eb.gameCode !== gc || eb._readyForReset) { let _chg0 = eb.gameCode !== gc, _chg = _chg0 || (eb._readyForReset && eb.matchEndMs && Date.now() - eb.matchEndMs > 3e5) || (eb._readyForReset && (eb._lastEmptyN || 0) >= 2 && eb.map && n && eb.map !== n), _rst = _chg0 && gc && _ssbRestoreStats(gc, n); window.__ssbDlog && window.__ssbDlog("reset-branch chg0=" + _chg0 + " chg=" + _chg + " rst=" + !!_rst + " gc=" + gc + " map=" + n + " emptyN=" + (eb._lastEmptyN || 0)); eb.matchEndMs = 0, eb.inMatch = !0, eb.hadLock = !1, eb.userClosed = !1, _chg && !_rst ? (eb.matchStartMs = Date.now(), eb.byName = {}, eb._snapMap = {}, eb.everSeenTeams = !1, eb.mode = "", eb._modeTs = 0, eb.kotcScore = { 1: 0, 2: 0 }, eb._seedQ = Date.now(), eb._synth = 0) : eb.matchStartMs || (eb.matchStartMs = Date.now()), eb._readyForReset = !1, eb.gameCode = gc, eb.map = n, eb.server = i, eb.mode = e0() } } t ? (eb.inMatch = !0, eb.hadLock = !0, eb.matchEndMs = 0) : eb.hadLock && (eb.matchEndMs = Date.now(), eb.inMatch = !1, eb.hadLock = !1) } if (eb._prevHadPlayers = o, eb.inMatch) { let a = e0(); if (a) { let r = { king: 3, ctf: 2, team: 1, ffa: 0 }; (r[a] || 0) >= (r[eb.mode] || 0) && (eb.mode = a) } eb.map || (eb.map = ex()), eb.server || (eb.server = ev()) } if (e) { eb.map || (eb.map = ex()), eb.server || (eb.server = ev()); eb.byName || (eb.byName = {}); eb._seedQ && (document.pointerLockElement || Date.now() - eb._seedQ > 6e4) && (eb._seedQ = 0); let _dbg = window.__ssbStatsDebug ?? (window.__ssbStatsDebug = (() => { try { return "1" === localStorage.getItem("tp-statsDebug") ? 1 : 0 } catch (_e) { return 0 } })()), _dlog = _dbg ? ((...a) => { let L = window.__ssbStatsLog || (window.__ssbStatsLog = []); L.push(a.join(" ")); L.length > 400 && L.splice(0, 200); console.log("[SSB-STATS]", ...a) }) : (() => {}); window.__ssbDlog = _dbg ? _dlog : null; let _presentKeys = new Set(), _rows = [], _dropN = 0, _voteN = 0, _vSet = new Set(); for (let l = 0; l < e.length; l++) { let c = e[l]; if (!c || !c.stats) continue; let m = c.name || c.safeName || c.lw || "Player " + l, h = c.team || 0; (1 === h || 2 === h) && (eb.everSeenTeams = !0); let u = 0 | c.stats.kills, f = 0 | c.stats.deaths, tk = 0 | c.totalKills; let _fk = m + String.fromCharCode(0) + l, _bk = eb.byName[m], _key; if (_bk && _bk._slot === l) _key = m; else if (eb.byName[_fk]) _key = _fk; else if (_bk) { let _ow = e[_bk._slot]; _key = _ow && _ow.stats && (_ow.name || _ow.safeName || _ow.lw || "Player " + _bk._slot) === m ? _fk : m } else _key = m; _presentKeys.add(_key); let rec = eb.byName[_key]; if (rec && !_vSet.has(rec) && !rec._ret && !rec._absentTs && (rec._lastK > 0 || rec._lastD > 0)) { _vSet.add(rec); _voteN++; (u < rec._lastK || f < rec._lastD) && _dropN++ } _rows.push([_key, rec, l, u, f, h, m, c, _fk, tk]) } let _roll = !eb._seedQ && (_dropN >= 2 || _dropN >= 1 && _dropN === _voteN); if (_roll) { _dlog("ROLLOVER drops=" + _dropN + "/" + _voteN); try { _ssbSaveStats(1) } catch (_fe) {} eb.matchStartMs = Date.now(), eb.matchEndMs = 0, eb.kotcScore = { 1: 0, 2: 0 }, eb._snapMap = {}, eb.mode = "", eb._modeTs = 0, eb.everSeenTeams = !1, eb._synth = 0, eb.map = ex() || eb.map; for (let _dk of Object.keys(eb.byName)) _presentKeys.has(_dk) || (_dlog("roll-purge " + _dk), delete eb.byName[_dk]) } let _used = new Set(); for (let _ri = 0; _ri < _rows.length; _ri++) { let [_key, rec, l, u, f, h, m, c, _fk, tk] = _rows[_ri]; rec && _used.has(rec) && (rec = void 0); if (!rec) { let _b2 = eb.byName[m]; if (_b2 && !_used.has(_b2) && _b2._slot === l) rec = _b2, _key = m; else if (eb.byName[_fk] && !_used.has(eb.byName[_fk])) rec = eb.byName[_fk], _key = _fk; else if (_b2 && (_used.has(_b2) || (() => { let _o2 = e[_b2._slot]; return _o2 && _o2.stats && (_o2.name || _o2.safeName || _o2.lw || "Player " + _b2._slot) === m })())) _key = _fk; else if (_b2) rec = _b2, _key = m; _presentKeys.add(_key) } rec || (_dlog("new " + m + " slot" + l + " seed " + u + "/" + f + (eb._seedQ ? " Q" : "")), rec = eb.byName[_key] = { name: m, team: h, isMe: !1, kills: u, deaths: f, _lastK: u, _lastD: f, _lastTK: tk, _slot: l, _q: eb._seedQ ? 1 : 0 }); _used.add(rec); if (_roll) rec.kills = u, rec.deaths = f, rec._lastTK = tk, rec._ret = 0, rec._q = 0; else { let _gd = u - rec._lastK, _ud = tk - (rec._lastTK || 0), _ka = (_gd > 0 ? _gd : 0) > (_ud > 0 ? _ud : 0) ? _gd : (_ud > 0 ? _ud : 0); if (_ka > 0) rec.kills += _ka; else if (u < rec._lastK && rec._q) rec.kills = u; if (f > rec._lastD) rec.deaths += f - rec._lastD; else if (f < rec._lastD && rec._q) rec.deaths = f } rec._ret && (rec._ret = 0); rec._q && !eb._seedQ && (rec._q = 0); rec._slot = l, rec._lastK = u, rec._lastD = f, rec._lastTK = tk, rec.team = h, rec.isMe = ("number" == typeof window.myPlayerIdx && l === window.myPlayerIdx) || (window.vueApp && window.vueApp.game && l === window.vueApp.game.myPlayerIdx) || c.isLocalPlayer || c.me || c.isMe || (c.name && window.vueApp && window.vueApp.game && c.name === window.vueApp.game.myName) || rec.isMe; if (rec.isMe && eb._meRec !== rec) { eb._meRec && eb._meRec.isMe && (eb._meRec.isMe = !1); eb._meRec = rec; _dlog("me-row -> " + rec.name + " slot" + l) } let _dv = rec.kills < u ? rec.kills - u : 0; if (_dv !== rec._dvK) { rec._dvK = _dv; _dv && _dlog("diverge " + rec.name + " mod=" + rec.kills + " raw=" + u + " slot" + l) } } let _nowTs = Date.now(); for (let _nm of Object.keys(eb.byName)) { let _r = eb.byName[_nm]; if (_presentKeys.has(_nm)) { _r._absentTs = 0; continue } _r._absentTs || (_r._absentTs = _nowTs); (_r._q || !_r.kills && !_r.deaths) && _nowTs - _r._absentTs > 4e3 && (_dlog("prune " + _nm), delete eb.byName[_nm], eb._snapMap && delete eb._snapMap[_nm]) } eb._snapMap || (eb._snapMap = {}); let _si = 0; eb.snapshot = Object.keys(eb.byName).map(nm => { let o = eb.byName[nm], s = eb._snapMap[nm] || (eb._snapMap[nm] = { id: _si++ }); return s.name = o.name, s.team = o.team, s.isMe = o.isMe, s.kills = o.kills, s.deaths = o.deaths, s }), eS() } } setInterval(ew, 1e3), setInterval(_ssbSaveStats, 3e3); let ek = null; function eS() { if (!d.stats.enabled || !d.stats.pinned) { ek && (ek.remove(), ek = null); return } if (document.pointerLockElement) return; let e = i(".pause-game-weapon-select"); if (!ek) { ek = document.createElement("div"); ek.id = "ssb-pinned-stats"; ek.style.cssText = "background:var(--ss-blue1, linear-gradient(180deg, #99def2 0%, #b5e8f7 100%));border:5px solid var(--ss-blue4, #1b6e82);border-radius:12px;margin-bottom:15px;width:100%;box-sizing:border-box;display:flex;flex-direction:column;overflow:hidden;color:#fff;"; let t = document.createElement("div"); t.className = "title"; t.style.cssText = "font-family:'Lilita One', var(--ss-font-secondary), cursive, sans-serif;background:var(--ss-blue3, #04a2d1);padding:10px;text-align:center;font-size:18px;letter-spacing:1px;text-shadow:0 2px 3px rgba(0,0,0,0.3);text-transform:uppercase;margin:0;"; t.textContent = "MATCH STATS"; ek.appendChild(t); let cont = document.createElement("div"); cont.id = "ssb-pinned-stats-content"; cont.style.cssText = "padding:14px;display:flex;justify-content:space-evenly;align-items:center;"; const _mk = (lab, col) => { const w = document.createElement("div"); w.style.cssText = "display:flex;flex-direction:column;align-items:center;"; const ll = document.createElement("span"); ll.style.cssText = "font-size:12px;color:var(--ss-blue4, #1b6e82);font-family:'Lilita One', var(--ss-font-secondary), cursive, sans-serif;font-weight:900;text-transform:uppercase;"; ll.textContent = lab; const vv = document.createElement("span"); vv.className = "title"; vv.style.cssText = "font-family:'Lilita One', var(--ss-font-secondary), cursive, sans-serif;font-size:24px;color:" + col + ";text-shadow:0 3px 5px rgba(0,0,0,0.3);margin:0;"; vv.textContent = "0"; w.appendChild(ll); w.appendChild(vv); return [w, vv] }; const _kc = _mk("Kills", "#fff"), _dc = _mk("Deaths", "#ff5a5a"), _rc = _mk("KDR", "var(--ss-yolk, #ffc900)"); cont.appendChild(_kc[0]); cont.appendChild(_dc[0]); cont.appendChild(_rc[0]); ek._kV = _kc[1]; ek._dV = _dc[1]; ek._rV = _rc[1]; ek.appendChild(cont); if (e) { let n = e.closest(".ss_box") || e.closest(".pause-game-container") || e.parentNode; n && n.parentNode && n.parentNode.insertBefore(ek, n) } } else if (e) { let i = e.closest(".ss_box") || e.closest(".pause-game-container") || e.parentNode; i && i.parentNode && ek.parentNode !== i.parentNode && i.parentNode.insertBefore(ek, i) } ek.style.display = e ? "flex" : "none"; let snap = eb.snapshot || [], me = snap.find(e => e.isMe) || { kills: 0, deaths: 0 }; let _kS = String(me.kills || 0), _dS = String(me.deaths || 0), _rS = ((me.kills || 0) / Math.max(1, me.deaths || 0)).toFixed(2); if (ek._kV && ek._kV.textContent !== _kS) ek._kV.textContent = _kS; if (ek._dV && ek._dV.textContent !== _dS) ek._dV.textContent = _dS; if (ek._rV && ek._rV.textContent !== _rS) ek._rV.textContent = _rS } function eC(e) { return String(e).replace(/[&<>"']/g, e => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[e]) } function eP(e) { if (!e || e < 1) return "0s"; let t = Math.floor(e / 60), o = e % 60; return t ? `${t}m ${o}s` : `${o}s` } function eSN(e) { if (!e) return "-"; let t = { singapore: "Singapore", uswest: "US West", sydney: "Sydney", uscentral: "US Central", useast: "US East", germany: "Germany", santiago: "Chile" }[String(e).toLowerCase().trim()]; return t || e } function eL(e, t, o, n, i, a) {
        var r; let s = { headers: ["Player", "K", "D", "KDR"], cells: e => [eC(e.name), e.kills, e.deaths, (e.kills / Math.max(1, e.deaths)).toFixed(2),] }, l = o.map(e => { let t = s.cells(e).map(e => `<td>${e}</td>`).join(""); return `<tr class="${e.isMe ? "ssb-me" : ""}">${t}</tr>` }).join(""), d = s.headers.map(e => `<th>${e}</th>`).join(""), c = "king" === i && (1 === a || 2 === a) ? `<span>${eb.kotcScore ? (eb.kotcScore[a] || 0) : 0}</span>` : ""; return `
			<div class="ssb-team ${n}">
				<div class="ssb-team-hdr"><span>${e}</span>${c}</div>
				<table>
					<thead><tr>${d}</tr></thead>
					<tbody>${l}</tbody>
				</table>
			</div>
		`} function e6() {
        !function e() {
            if (document.getElementById("ssb-stats-style")) return; let t = document.createElement("style"); t.id = "ssb-stats-style", t.textContent = `
			#ssb-stats-overlay { position:fixed;inset:0;background:rgba(13,61,79,0.55);z-index:2147483646;display:none;align-items:center;justify-content:center;font-family:inherit; }
			#ssb-stats-overlay.open { display:flex; }
			#ssb-stats-panel { background:linear-gradient(180deg,#6cc5d6 0%,#4ba9bc 100%);border:3px solid #216a80;border-radius:14px;padding:20px 22px;width:fit-content;min-width:640px;max-width:900px;max-height:92vh;overflow:auto;color:#0d3d4f;box-shadow:0 10px 50px rgba(0,0,0,0.5); font-family:"Nunito",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif; font-size:14px; letter-spacing:normal; word-spacing:normal; font-variant-ligatures:none; }
			/* The game styles EVERY element with font-size:1.95vh (universal * rule).
			   Force inheritance inside the panel so only our explicit sizes apply —
			   otherwise unstyled spans (e.g. the duration) render huge/inconsistent. */
			#ssb-stats-panel * { font-size:inherit; letter-spacing:normal !important; word-spacing:normal !important; }
			#ssb-stats-panel .ssb-head { display:flex;flex-direction:row;justify-content:space-between;align-items:center;gap:10px;margin-bottom:18px;padding-bottom:14px;border-bottom:2px solid rgba(33,106,128,0.3); }
			#ssb-stats-panel .ssb-meta { display:flex;flex-wrap:wrap;align-items:center;gap:6px;font-size:12px;color:#216a80;font-weight:600;min-width:0; }
			#ssb-stats-panel .ssb-meta-row { display:contents; }
			#ssb-stats-panel .ssb-meta .ssb-bold { color:#0d3d4f;font-weight:900;font-size:15px; }
			#ssb-stats-panel .ssb-chip { display:inline-flex;align-items:center;padding:5px 11px;border:2px solid #b0d8e8;border-radius:999px;background:rgba(255,255,255,0.3);font-size:12px;font-weight:700;color:#216a80;line-height:1;white-space:nowrap; }
			#ssb-stats-panel .ssb-chip-strong { color:#0d3d4f;font-weight:900; }
			#ssb-stats-panel .ssb-dur:empty { display:none; }
			#ssb-stats-panel .ssb-actions { display:flex;gap:8px;flex-shrink:0;justify-content:flex-end; }
			#ssb-stats-panel .ssb-btn { padding:8px 14px;border:2px solid #b0d8e8;border-radius:8px;background:rgba(255,255,255,0.3);color:#216a80;font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;transition:all 0.15s; }
			#ssb-stats-panel .ssb-btn:hover { border-color:#216a80;background:rgba(255,255,255,0.55);color:#0d3d4f; }
			#ssb-stats-panel .ssb-btn.ssb-close { border-color:#c0392b;color:#c0392b; }
			#ssb-stats-panel .ssb-btn.ssb-close:hover { background:rgba(192,57,43,0.15);color:#a32a1d; }
			#ssb-stats-panel .ssb-icon-btn { padding:8px 10px; display:inline-flex; align-items:center; justify-content:center; }
			#ssb-stats-panel .ssb-icon-btn svg { display:block; }
				#ssb-stats-panel .ssb-hist-list { max-height:62vh;overflow:auto;display:flex;flex-direction:column;gap:6px; }
				#ssb-stats-panel .ssb-hist-row { display:flex;justify-content:space-between;align-items:center;gap:12px;padding:10px 14px;border:2px solid #b0d8e8;border-radius:8px;background:rgba(255,255,255,0.22);cursor:pointer;transition:all .12s; }
				#ssb-stats-panel .ssb-hist-row:hover { border-color:#216a80;background:rgba(255,255,255,0.45); }
				#ssb-stats-panel .ssb-hist-code { font-weight:900;color:#0d3d4f;font-size:15px;display:block; }
				#ssb-stats-panel .ssb-hist-meta { font-size:12px;color:#216a80;font-weight:600; }
				#ssb-stats-panel .ssb-hist-side { text-align:right;flex-shrink:0; }
				#ssb-stats-panel .ssb-hist-kd { font-weight:900;color:#0d3d4f;font-size:15px;display:block; }
				#ssb-stats-panel .ssb-hist-time { font-size:11px;color:#216a80;font-weight:600; }
				#ssb-stats-panel .ssb-hist-main { flex:1;min-width:0; }
				#ssb-stats-panel .ssb-hist-actions { display:flex;gap:6px;flex-shrink:0;opacity:0;transition:opacity .12s; }
				#ssb-stats-panel .ssb-hist-row:hover .ssb-hist-actions { opacity:1; }
				#ssb-stats-panel .ssb-hist-abtn { width:30px;height:30px;border:none;border-radius:7px;background:#0E7697;color:#fff;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;padding:0;transition:background .1s; }
				#ssb-stats-panel .ssb-hist-abtn:hover { background:#2db8d4; }
				#ssb-stats-panel .ssb-hist-abtn.danger { background:#d82727; }
				#ssb-stats-panel .ssb-hist-abtn.danger:hover { background:#ec4343; }
				#ssb-stats-panel .ssb-hist-abtn svg { display:block;pointer-events:none; }
				#ssb-stats-panel .ssb-btn.ssb-reset { border-color:#e0a020;color:#b8860b; }
				#ssb-stats-panel .ssb-btn.ssb-reset:hover { background:rgba(224,160,32,0.15);color:#8a6508; }
			#ssb-stats-panel .ssb-cols { display:flex;align-items:start;gap:16px; }
			#ssb-stats-panel .ssb-team { flex:1;min-width:0;background:rgba(255,255,255,0.22);border:2px solid #b0d8e8;border-radius:10px;overflow:hidden; }
			#ssb-stats-panel .ssb-team-hdr { padding:12px 14px;font-weight:900;font-size:18px;letter-spacing:1px;display:flex;justify-content:space-between;align-items:center; }
			#ssb-stats-panel .ssb-team-blue .ssb-team-hdr { background:linear-gradient(135deg,rgba(33,106,128,0.85),rgba(33,106,128,0.55));color:#fff; }
			#ssb-stats-panel .ssb-team-red  .ssb-team-hdr { background:linear-gradient(135deg,rgba(192,57,43,0.85),rgba(192,57,43,0.55));color:#fff; }
			#ssb-stats-panel .ssb-team-ffa  .ssb-team-hdr { background:linear-gradient(135deg,rgba(13,61,79,0.85),rgba(13,61,79,0.55));color:#fff; }
			#ssb-stats-panel table { width:100%;border-collapse:collapse;table-layout:fixed; }
			#ssb-stats-panel thead th { padding:7px 10px;font-size:11px;font-weight:800;color:#216a80;text-align:center;text-transform:uppercase;letter-spacing:0.5px;background:rgba(176,216,232,0.4);width:74px; }
			#ssb-stats-panel thead th:first-child { text-align:left;width:auto; }
			#ssb-stats-panel tbody td { padding:7px 10px;font-size:14px;text-align:center;font-variant-numeric:tabular-nums;font-weight:600;color:#0d3d4f;border-top:1px solid rgba(33,106,128,0.12);line-height:1.35; }
			#ssb-stats-panel tbody td:first-child { text-align:left;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap; }
			#ssb-stats-panel tbody tr:nth-child(even) td { background:rgba(255,255,255,0.10); }
			#ssb-stats-panel tbody tr.ssb-me td { background:rgba(45,184,212,0.18); }
			#ssb-stats-panel .ssb-team-blue tbody td:first-child { color:#216a80; }
			#ssb-stats-panel .ssb-team-red  tbody td:first-child { color:#a32a1d; }
		`, (document.head || document.documentElement).appendChild(t)
        }(), ew(); let e = document.getElementById("ssb-stats-overlay"); e || ((e = document.createElement("div")).id = "ssb-stats-overlay", e.addEventListener("click", t => { t.target === e && e1() }), document.body.appendChild(e)); let t = { 1: [], 2: [], 0: [] }; eb.snapshot.forEach(e => { let o = 1 === e.team || 2 === e.team ? e.team : 0; t[o].push(e) }), Object.values(t).forEach(e => e.sort((e, t) => t.kills - e.kills)); let o = eb.mode || e0(), n; n = t[1].length && t[2].length ? eL("BLUE TEAM", "#3a7eff", t[1], "ssb-team-blue", o, 1) + eL("RED TEAM", "#ff5a5a", t[2], "ssb-team-red", o, 2) : t[0].length ? eL("PLAYERS", "#aac", t[0], "ssb-team-ffa", o, 0) : `<div style="padding:20px;color:#9ec3d2;">No player data yet - fire up a match first.</div>`; let i = !!eb.matchStartMs, a = i ? Math.floor(((eb.matchEndMs || Date.now()) - eb.matchStartMs) / 1e3) : 0, r = i ? eP(a) : "", s = new Date, l = e => String(e).padStart(2, "0"), d = `${s.getFullYear()}-${l(s.getMonth() + 1)}-${l(s.getDate())} ${l(s.getHours())}:${l(s.getMinutes())}`, p = `<div class="ssb-meta-row"><span class="ssb-chip ssb-chip-strong">${eC(d.slice(11))}</span><span class="ssb-chip ssb-chip-strong">${eC(d.slice(0, 10))}</span></div><div class="ssb-meta-row"><span class="ssb-chip">${eC(eb.map || "-")}</span><span class="ssb-chip">${eC(eSN(eb.server))}</span><span class="ssb-chip">${eC({ ctf: "Capture the Spatula", king: "King of the Coop", team: "Teams", ffa: "Free for All" }[o] || "-")}</span><span class="ssb-chip ssb-dur">${r}</span></div>`; e.innerHTML = `
			<div id="ssb-stats-panel">
				<div class="ssb-head">
					<div class="ssb-meta">${p}</div>
					<div class="ssb-actions">
						<button class="ssb-btn ssb-reset ssb-icon-btn" data-act="reset" title="Reset match stats"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v6h6"/><path d="M3.5 8a9 9 0 1 0 2.3-3.3L3 8"/></svg></button>
							<button class="ssb-btn ssb-icon-btn" data-act="copy" title="Copy as Image"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button>
													<button class="ssb-btn ssb-icon-btn" data-act="download" title="Download PNG"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></button>
							<button class="ssb-btn ssb-icon-btn" data-act="history" title="History"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></button>
						<button class="ssb-btn ssb-close ssb-icon-btn" data-act="close" title="Close"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
					</div>
				</div>
				<div class="ssb-cols">${n}</div>
			</div>
		`, e.classList.add("open"), e.querySelector('[data-act="close"]').onclick = e1, e.querySelector('[data-act="copy"]').onclick = eA, e.querySelector('[data-act="reset"]').onclick = eRS, e.querySelector('[data-act="history"]').onclick = eHIST, e.querySelector('[data-act="download"]').onclick = e4, e8 && clearInterval(e8), e8 = setInterval(() => { let e = document.getElementById("ssb-stats-overlay"); if (!e || !e.classList.contains("open")) { clearInterval(e8), e8 = null; return } let t = e.querySelector(".ssb-dur"); if (!t) return; if (!eb.matchStartMs) return; let n = Math.floor(((eb.matchEndMs || Date.now()) - eb.matchStartMs) / 1e3); t.textContent = eP(n) }, 1e3)
    } function e1() { eb.userClosed = !0; let e = document.getElementById("ssb-stats-overlay"); e && e.classList.remove("open"), e8 && (clearInterval(e8), e8 = null) } function eRS() { if (!confirm("Reset tracked match stats (kills / deaths / KDR) for this session?")) return; let pl = window.players || []; eb.byName = {}, eb._snapMap = {}, eb.snapshot = []; for (let p = 0; p < pl.length; p++) { let c = pl[p]; if (c && c.stats) { let m = c.name || c.safeName || c.lw || "Player " + p; eb.byName[m] = { name: m, team: c.team || 0, isMe: !1, kills: 0, deaths: 0, _lastK: 0 | c.stats.kills, _lastD: 0 | c.stats.deaths } } } eb.matchStartMs = Date.now(), eb.matchEndMs = 0, eb.kotcScore = { 1: 0, 2: 0 }; try { ef("ui_click") } catch (e) { } let ov = document.getElementById("ssb-stats-overlay"); ov && ov.classList.contains("open") ? e6() : (ew(), eS()) } function eHIST() { let ov = document.getElementById("ssb-stats-overlay"); if (!ov) { e6(); ov = document.getElementById("ssb-stats-overlay") } if (!ov) return; let hist; try { hist = JSON.parse(localStorage.getItem("tp-statsHistory") || "[]") } catch (e) { hist = [] } if (!Array.isArray(hist)) hist = []; let _ltK = 0, _ltD = 0, _ltG = hist.length; hist.forEach(h => { let me = (h.players || []).find(p => p.isMe) || {}; _ltK += me.kills || 0, _ltD += me.deaths || 0 }); let _ltR = (_ltK / Math.max(1, _ltD)).toFixed(2); let fd = ms => { if (!ms) return "-"; let s = new Date(ms), p = e => String(e).padStart(2, "0"); return `${s.getFullYear()}-${p(s.getMonth() + 1)}-${p(s.getDate())} ${p(s.getHours())}:${p(s.getMinutes())}` }, mn = { ctf: "CTS", king: "KotC", team: "Teams", ffa: "FFA" }, rows = hist.map((h, idx) => { let me = (h.players || []).find(p => p.isMe) || { kills: 0, deaths: 0 }, dur = h.startMs && h.endMs ? eP(Math.floor((h.endMs - h.startMs) / 1e3)) : ""; return `<div class="ssb-hist-row" data-code="${eC(h.code || "")}"><div class="ssb-hist-main"><span class="ssb-hist-code">${eC(h.label || h.code || "-")}</span><span class="ssb-hist-meta">${h.label ? eC(h.code) + " · " : ""}${eC(h.map || "-")} · ${eC(mn[h.mode] || h.mode || "-")} · ${eC(eSN(h.server))}</span></div><div class="ssb-hist-side"><span class="ssb-hist-kd">${me.kills || 0} / ${me.deaths || 0}</span><span class="ssb-hist-time">${eC(fd(h.startMs))}${dur ? " · " + dur : ""}</span></div><div class="ssb-hist-actions"><button class="ssb-hist-abtn" data-hact="rename" data-code="${eC(h.code || "")}" title="Rename"><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm14.71-7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg></button><button class="ssb-hist-abtn danger" data-hact="del" data-code="${eC(h.code || "")}" title="Delete"><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M9 3v1H4v2h16V4h-5V3H9zM6 7l1 13h10l1-13H6z"/></svg></button></div></div>` }).join("") || `<div style="padding:20px;color:#9ec3d2;">No games recorded yet.</div>`; ov.innerHTML = `<div id="ssb-stats-panel"><div class="ssb-head"><div class="ssb-meta"><span class="ssb-bold">Match History</span> | ${_ltG} games | ${_ltK} / ${_ltD} | KDR ${_ltR}</div><div class="ssb-actions"><button class="ssb-btn ssb-icon-btn" data-act="backlive" title="Back to Live"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg></button><button class="ssb-btn ssb-reset ssb-icon-btn" data-act="clearhist" title="Clear all history"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg></button><button class="ssb-btn ssb-close ssb-icon-btn" data-act="close" title="Close"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div></div><div class="ssb-hist-list">${rows}</div></div>`; ov.classList.add("open"); ov.querySelector('[data-act="close"]').onclick = e1; ov.querySelector('[data-act="backlive"]').onclick = () => e6(); let cl = ov.querySelector('[data-act="clearhist"]'); cl && (cl.onclick = () => { confirm("Clear all match history?") && (localStorage.removeItem("tp-statsHistory"), eHIST()) }); ov.querySelectorAll(".ssb-hist-row").forEach(row => row.onclick = () => eHISTDetail(hist.find(x => x && x.code === row.getAttribute("data-code")))); ov.querySelectorAll(".ssb-hist-abtn").forEach(b => b.onclick = ev => { ev.stopPropagation(); let code = b.getAttribute("data-code"), act = b.getAttribute("data-hact"), H; try { H = JSON.parse(localStorage.getItem("tp-statsHistory") || "[]") } catch (e) { H = [] } if (!Array.isArray(H)) H = []; let i = H.findIndex(x => x && x.code === code); if (i < 0) return; if ("del" === act) { if (confirm("Delete this match from history?")) { H.splice(i, 1), localStorage.setItem("tp-statsHistory", JSON.stringify(H)), eHIST() } } else if ("rename" === act) { let nn = prompt("Rename this match (leave blank to restore the code):", H[i].label || H[i].code || ""); if (null != nn) { nn = nn.trim(), nn ? H[i].label = nn : delete H[i].label, localStorage.setItem("tp-statsHistory", JSON.stringify(H)), eHIST() } } }) } function eHISTDetail(h) { if (!h) return; let ov = document.getElementById("ssb-stats-overlay"); if (!ov) return; let teams = { 1: [], 2: [], 0: [] }; (h.players || []).forEach(p => { let o = 1 === p.team || 2 === p.team ? p.team : 0; teams[o].push(p) }), Object.values(teams).forEach(a => a.sort((x, y) => y.kills - x.kills)); let mode = h.mode || "ffa", _sk = eb.kotcScore; eb.kotcScore = h.kotc || { 1: 0, 2: 0 }; let cols = teams[1].length && teams[2].length ? eL("BLUE TEAM", "#3a7eff", teams[1], "ssb-team-blue", mode, 1) + eL("RED TEAM", "#ff5a5a", teams[2], "ssb-team-red", mode, 2) : teams[0].length ? eL("PLAYERS", "#aac", teams[0], "ssb-team-ffa", mode, 0) : `<div style="padding:20px;color:#9ec3d2;">No player data.</div>`; eb.kotcScore = _sk; let s = new Date(h.startMs || Date.now()), p = e => String(e).padStart(2, "0"), dstr = `${s.getFullYear()}-${p(s.getMonth() + 1)}-${p(s.getDate())} ${p(s.getHours())}:${p(s.getMinutes())}`, dur = h.startMs && h.endMs ? eP(Math.floor((h.endMs - h.startMs) / 1e3)) : "", mnf = { ctf: "Capture the Spatula", king: "King of the Coop", team: "Teams", ffa: "Free for All" }[mode] || "-", meta = `<div class="ssb-meta-row"><span class="ssb-chip ssb-chip-strong">${eC(h.label || h.code || "-")}${h.label ? " · " + eC(h.code) : ""}</span><span class="ssb-chip ssb-chip-strong">${eC(dstr.slice(11))}</span><span class="ssb-chip ssb-chip-strong">${eC(dstr.slice(0, 10))}</span></div><div class="ssb-meta-row"><span class="ssb-chip">${eC(h.map || "-")}</span><span class="ssb-chip">${eC(eSN(h.server))}</span><span class="ssb-chip">${eC(mnf)}</span>` + (dur ? `<span class="ssb-chip ssb-dur">${dur}</span>` : "") + `</div>`; ov.innerHTML = `<div id="ssb-stats-panel"><div class="ssb-head"><div class="ssb-meta">${meta}</div><div class="ssb-actions"><button class="ssb-btn ssb-icon-btn" data-act="backhist" title="Back to History"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg></button><button class="ssb-btn ssb-icon-btn" data-act="copy" title="Copy as Image"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button><button class="ssb-btn ssb-close ssb-icon-btn" data-act="close" title="Close"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div></div><div class="ssb-cols">${cols}</div></div>`; ov.classList.add("open"); ov.querySelector('[data-act="close"]').onclick = e1; ov.querySelector('[data-act="backhist"]').onclick = () => eHIST(); ov.querySelector('[data-act="copy"]').onclick = eA } let e8 = null, eI = null, _ssbFC = null; function _ssbFontCSS() { return _ssbFC || (_ssbFC = fetch("https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Lilita+One&display=swap").then(r => r.text()).then(css => { let urls = [...new Set([...css.matchAll(/url\((https:[^)]+)\)/g)].map(m => m[1]))]; return Promise.all(urls.map(u => fetch(u).then(r => r.blob()).then(b => new Promise(res => { let fr = new FileReader(); fr.onload = () => res([u, fr.result]); fr.readAsDataURL(b) })))).then(pairs => { for (let [u, d] of pairs) css = css.split(u).join(d); return css }) }).catch(err => { console.warn("[Better UI] Font embed failed, screenshot may use fallback font:", err); _ssbFC = null; return "" })) } function e9(e) { let t = document.getElementById("ssb-stats-panel"); t && ("object" == typeof window.htmlToImage ? Promise.resolve() : eI || (eI = new Promise((e, t) => { let o = document.createElement("script"); o.src = "https://cdnjs.cloudflare.com/ajax/libs/html-to-image/1.11.11/html-to-image.min.js", o.onload = () => e(), o.onerror = () => { eI = null, t(Error("html-to-image failed to load")) }, document.head.appendChild(o) }))).then(() => { if ("object" != typeof window.htmlToImage) { alert("html-to-image failed to load - check your network connection."); return } let o = t.querySelector(".ssb-actions"), n = o ? o.style.opacity : "", _css = t.style.cssText; o && (o.style.opacity = "0"), t.style.setProperty("zoom", "1", "important"), t.style.setProperty("max-height", "none", "important"), t.style.setProperty("overflow", "visible", "important"); let _restore = () => { o && (o.style.opacity = n), t.style.cssText = _css }; _ssbFontCSS().then(fc => window.htmlToImage.toBlob(t, { backgroundColor: null, pixelRatio: 2, width: t.scrollWidth, height: t.scrollHeight, ...(fc ? { fontEmbedCSS: fc } : {}) })).then(blob => { _restore(), e(blob) }).catch(err => { _restore(), console.error("[Better UI] Stats screenshot failed:", err) }) }).catch(e => alert(e.message)) } function eA() { e9(e => { if (e) try { navigator.clipboard.write([new ClipboardItem({ "image/png": e })]).then(() => ef("ui_click")).catch(e => { console.error(e), alert("Clipboard write failed: " + e.message) }) } catch (t) { alert("Clipboard API not available in this browser.") } }) } function e4() { e9(e => { if (!e) return; let t = document.createElement("a"); t.href = URL.createObjectURL(e), t.download = `shellshockers-stats-${Date.now()}.png`, document.body.appendChild(t), t.click(), document.body.removeChild(t), URL.revokeObjectURL(t.href), ef("ui_click") }) } document.addEventListener("keydown", function (e) { if (!d.stats.enabled || !e.key || e.key.toLowerCase() !== d.stats.hotkey.toLowerCase()) return; let t = document.activeElement; if (t && /^(INPUT|TEXTAREA)$/i.test(t.tagName) || t && t.isContentEditable) return; e.preventDefault(); let o = document.getElementById("ssb-stats-overlay"); o && o.classList.contains("open") ? e1() : (eb.userClosed = !1, e6()) }, !0); let eB = [{ value: "singapore", text: "Singapore" }, { value: "uswest", text: "US West" }, { value: "sydney", text: "Sydney" }, { value: "uscentral", text: "US Central" }, { value: "useast", text: "US East" }, { value: "germany", text: "Germany" }, { value: "santiago", text: "Chile" },].map(e => ({ ...e, ping: null })), eF = localStorage.getItem("selectedRegionId") || "singapore", e2 = null; let eBLive = null; function eBv() { return eBLive && eBLive.length ? eB.filter(e => eBLive.includes(e.value)) : eB } function eT() { return (eB.find(e => e.value === eF)?.text || eF).toUpperCase() } function eH(e) { eF = e, localStorage.setItem("selectedRegionId", eF), e2 && (e2.textContent = eT()); let t = document.getElementById("regionSelect"); t && (t.value = eF, t.dispatchEvent(new Event("change", { bubbles: !0 }))) } function eN(e) { return null == e ? ["rgba(60,60,60,0.6)", "#cfcfcf"] : e < 80 ? ["rgba(30,125,58,0.75)", "#8fffa8"] : e < 150 ? ["rgba(140,100,0,0.75)", "#ffd97a"] : ["rgba(140,30,30,0.75)", "#ff9898"] } let eM; try { eM = JSON.parse(localStorage.getItem("mod-server-hosts") || "{}") || {} } catch (ez) { eM = {} } function e7() { let e = document.getElementById("mod-server-panel"); if (e) return e; (e = document.createElement("div")).id = "mod-server-panel"; let t = document.createElement("div"); return t.className = "ssb-panel-header", t.textContent = "Select Server", e.appendChild(t), document.body.appendChild(e), e.addEventListener("click", e => e.stopPropagation()), e.addEventListener("mousedown", e => e.stopPropagation()), document.addEventListener("click", () => e.classList.remove("open")), e } function eO(e) { Array.from(e.querySelectorAll(".ssb-option")).forEach(e => e.remove()), eBv().forEach(t => { var o; let n = document.createElement("div"); n.className = "ssb-option" + (t.value === eF ? " active" : ""); let i = document.createElement("span"); i.className = "ssb-option-name", i.textContent = t.text; let a = document.createElement("span"); a.className = "ssb-ping " + (null == (o = t.ping) ? "unknown" : o < 80 ? "good" : o < 150 ? "ok" : "bad"), a.textContent = null != t.ping ? t.ping + "ms" : "-", n.appendChild(i), n.appendChild(a), n.addEventListener("click", () => { eH(t.value), e.classList.remove("open"), eO(e) }), e.appendChild(n) }) } function eD(e, t) { eO(t); let o = e.getBoundingClientRect(); t.style.left = o.left + "px", t.style.top = o.top - 8 + "px", t.style.transform = "translateY(-100%)", t.classList.add("open") } function eR(e) { for (let t = e.childNodes.length - 1; t >= 0; t--) { let o = e.childNodes[t]; if (o.nodeType === Node.TEXT_NODE && o.textContent.trim()) return o } return null } function e5() {
        !function e() {
            if (document.getElementById("mod-server-style")) return; let t = document.createElement("style"); t.id = "mod-server-style", t.textContent = `
			.btn_game_mode:not(.mod-server-clone) { position:relative !important; z-index:2 !important; }
			.mod-server-clone { position:relative !important; z-index:1 !important; margin-left:8px !important; }
			.mod-server-clone i, .mod-server-clone svg, .mod-server-clone img, .mod-server-clone [class*="caret"], .mod-server-clone [class*="arrow"], .mod-server-clone [class*="chevron"], .mod-server-clone::after, .mod-server-clone::before { transition: transform 0.2s ease !important; }
			.mod-server-clone.ssb-open i, .mod-server-clone.ssb-open svg, .mod-server-clone.ssb-open img, .mod-server-clone.ssb-open [class*="caret"], .mod-server-clone.ssb-open [class*="arrow"], .mod-server-clone.ssb-open [class*="chevron"], .mod-server-clone.ssb-open::after, .mod-server-clone.ssb-open::before { transform: rotate(180deg) !important; }
			.mod-server-clone:not(.ssb-open) i, .mod-server-clone:not(.ssb-open) svg, .mod-server-clone:not(.ssb-open) img, .mod-server-clone:not(.ssb-open) [class*="caret"], .mod-server-clone:not(.ssb-open) [class*="arrow"], .mod-server-clone:not(.ssb-open) [class*="chevron"], .mod-server-clone:not(.ssb-open)::after, .mod-server-clone:not(.ssb-open)::before { transform: rotate(0deg) !important; }
			.mod-server-clone.ssb-open ul i, .mod-server-clone.ssb-open ul svg, .mod-server-clone.ssb-open ul img, .mod-server-clone.ssb-open ul [class*="caret"], .mod-server-clone.ssb-open ul [class*="arrow"], .mod-server-clone.ssb-open ul [class*="chevron"] { transform: none !important; }
			#mod-server-panel { display:none; position:fixed; background:linear-gradient(180deg,#1c6878 0%,#154f5e 100%); border:2px solid #2db8d4; border-radius:10px; overflow:hidden; z-index:999999; min-width:220px; box-shadow:0 6px 24px rgba(0,0,0,0.55); }
			#mod-server-panel.open { display:block; animation:ssb-drop 0.13s ease; }
			@keyframes ssb-drop { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
			.ssb-panel-header { padding:8px 14px 6px; font-family:inherit; font-size:11px; font-weight:900; text-transform:uppercase; letter-spacing:1.2px; color:rgba(255,255,255,0.55); border-bottom:1px solid rgba(255,255,255,0.12); }
			.ssb-option { display:flex; align-items:center; padding:9px 14px; cursor:pointer; font-family:inherit; font-size:14px; font-weight:700; color:#fff; text-shadow:0 1px 2px rgba(0,0,0,0.25); transition:background 0.1s; gap:10px; border-bottom:1px solid rgba(255,255,255,0.06); }
			.ssb-option:last-child { border-bottom:none; }
			.ssb-option:hover { background:rgba(255,255,255,0.12); }
			.ssb-option.active { background:rgba(255,255,255,0.2); position:relative; }
			.ssb-option.active::before { content:''; position:absolute; left:0; top:0; bottom:0; width:3px; background:#5ad4e6; border-radius:0 2px 2px 0; }
			.ssb-option-name { flex:1; text-transform:uppercase; letter-spacing:0.3px; font-size:13px; }
			.ssb-ping { font-size:11px; font-weight:800; font-family:monospace; padding:2px 7px; border-radius:4px; min-width:46px; text-align:center; letter-spacing:0.2px; }
			.ssb-ping.good{background:rgba(30,125,58,0.7);color:#8fffa8} .ssb-ping.ok{background:rgba(140,100,0,0.7);color:#ffd97a} .ssb-ping.bad{background:rgba(140,30,30,0.7);color:#ff9898} .ssb-ping.unknown{background:rgba(60,60,60,0.7);color:#aaa}
		`, (document.head || document.documentElement).appendChild(t)
        }(); let e = function e() { let t = document.querySelectorAll(".btn_game_mode"); for (let o of t) { if (o.closest('.photo-booth-map-section, [class*="phb-"]')) continue; let n = o.getBoundingClientRect(); if (n.width > 0 && n.height > 0) return { el: o, r: n } } return null }(); if (!e) return; let t = document.querySelector(".mod-server-clone"); if (t && t.previousElementSibling === e.el) return; t && t.remove(); let o = e.el, n = o.cloneNode(!0); n.classList.add("mod-server-clone"), n.removeAttribute("id"); let i = function e(t) { let o = t.querySelector('i, svg, img, [class*="caret"], [class*="arrow"], [class*="chevron"]'); if (o) return o; for (let n of t.querySelectorAll("*")) { let i = n.tagName.toLowerCase(); if (!("h3" === i || "p" === i || "ul" === i || n.classList.contains("box_absolute") || n.querySelector("ul"))) return n } return null }(n); function a(e) { i && (i.style.setProperty("transition", "transform 0.2s ease", "important"), i.style.setProperty("transform", e ? "rotate(180deg)" : "rotate(0deg)", "important")) } n.querySelectorAll("*").forEach(e => { for (let t of (e.removeAttribute("onclick"), e.removeAttribute("id"), [...e.attributes])) (t.name.startsWith("v-") || t.name.startsWith("@") || t.name.startsWith("data-v-")) && e.removeAttribute(t.name) }), n.removeAttribute("onclick"); let r = n.querySelector("h3"); r && (r.textContent = "Server"); let s = n.querySelector("p.game-mode-type") || n.querySelector("p[class*='game-mode']"); if (s) { s.textContent = " " + eT(), e2 = s.firstChild } let d = n.querySelector("ul"), c = n.querySelector("div.box_absolute, div[class*='box_absolute']"), p = d && (!c || !c.contains(d)); if (d && d.children.length) { let m = d.children[0].cloneNode(!0); d.innerHTML = "", eBv().forEach(e => { let t = m.cloneNode(!0), o = e.value === eF; t.classList.toggle("selected", o), t.style.setProperty("display", "flex", "important"), t.style.setProperty("align-items", "center", "important"), t.style.setProperty("white-space", "nowrap", "important"), t.style.setProperty("gap", "12px", "important"); let i = t.querySelector(".f_row"); i && (i.style.display = "", i.style.visibility = o ? "visible" : "hidden"); let r = eR(t); r && (r.textContent = " " + e.text); let s = document.createElement("span"); s.className = "mod-server-ping", s.textContent = null != e.ping ? e.ping + "ms" : "-"; let l = { "margin-left": "auto", "font-size": "12px", "font-family": "monospace", "font-weight": "800", padding: "2px 8px", "border-radius": "4px", "min-width": "50px", "text-align": "center", "letter-spacing": "0.2px" };[l.background, l.color] = eN(e.ping), Object.entries(l).forEach(([e, t]) => s.style.setProperty(e, t, "important")), t.appendChild(s), t.addEventListener("click", o => { o.stopPropagation(), o.preventDefault(), ef("ui_equip"), eH(e.value), e2 && (e2.textContent = " " + eT()), d.querySelectorAll("li").forEach(e => { let o = e === t; e.classList.toggle("selected", o); let n = e.querySelector(".f_row"); n && (n.style.visibility = o ? "visible" : "hidden") }), c && c.style.setProperty("display", "none", "important"), p && d.style.setProperty("display", "none", "important"), n.classList.remove("ssb-open"), a(!1) }, !0), d.appendChild(t) }) } c && (c.style.setProperty("display", "none", "important"), c.style.setProperty("min-width", "max-content", "important"), c.style.setProperty("white-space", "nowrap", "important")), p && d.style.setProperty("display", "none", "important"), n.addEventListener("click", e => { if (c && c.contains(e.target) || p && d.contains(e.target) || (e.stopPropagation(), e.preventDefault(), !c && !p)) return; let t = c ? "none" !== c.style.display : "none" !== d.style.display; c && c.style.setProperty("display", t ? "none" : "block", "important"), p && d.style.setProperty("display", t ? "none" : "block", "important"), !t && d && c && c.contains(d) && d.style.removeProperty("display"), n.classList.toggle("ssb-open", !t), a(!t), ef(t ? "ui_popupclose" : "ui_popupopen") }, !0), window._ssbServerOutsideClick || (window._ssbServerOutsideClick = e => { let t = document.querySelector(".mod-server-clone"); if (!t || t.contains(e.target)) return; let o = t.querySelector("div.box_absolute, div[class*='box_absolute']"), n = t.querySelector("ul"); (o || n) && (o && o.style.setProperty("display", "none", "important"), !n || o && o.contains(n) || n.style.setProperty("display", "none", "important"), t.classList.remove("ssb-open"), function () { let i = t.querySelector('i, svg, img, [class*="caret"], [class*="arrow"], [class*="chevron"]'); i && i.style.setProperty("transform", "rotate(0deg)", "important") }()) }, document.addEventListener("click", window._ssbServerOutsideClick)), o.parentElement.insertBefore(n, o.nextSibling), requestAnimationFrame(() => { a(!1) })
    } !function e() { let t = window.WebSocket; window.WebSocket = function (e, o) { try { let n = new URL(e), i = n.hostname; try { let _gm = /\/game\/([^/?#]+)/.exec(n.pathname || ""); if (_gm) { _gm[1] !== window.__ssbGameCode && (eb._readyForReset = !0), window.__ssbGameCode = _gm[1], window.__ssbGameHost = i } } catch (_ge) { } n.port; let a = eB.map(r => r.value); for (let r of a) if (i.toLowerCase().includes(r)) { let s = eM[r]; s && s.host === i || (eM[r] = { host: i, port: 443 }, localStorage.setItem("mod-server-hosts", JSON.stringify(eM)), console.log("[mod] Discovered server:", r, "->", i)), window.currentServerRegion = r, p(i); break } let l = a.some(e => i.toLowerCase().includes(e)); !l && /\/game\//.test(n.pathname || "") && console.log("[mod] Unknown game server WS URL (report this!):", e) } catch (d) { } return new t(e, o) }, window.WebSocket.prototype = t.prototype, Object.assign(window.WebSocket, t) }(); let eq = null, ej = !1; setInterval(() => { if (document.pointerLockElement) return; let e = o("regionSelect"); if (e && e.options && e.options.length) { try { let _lv = []; Array.from(e.options).forEach(op => { if (!op.value) return; _lv.push(op.value); let _lb = (op.textContent || "").replace(/\s*\d+\s*ms\s*$/i, "").trim(); let _n = eB.find(x => x.value === op.value); _n ? (_lb && (_n.text = _lb)) : eB.push({ value: op.value, text: _lb || op.value, ping: null }) }); eBLive = _lv; if (_lv.length && !_lv.includes(eF) && e.value && _lv.includes(e.value)) { eF = e.value; localStorage.setItem("selectedRegionId", eF); e2 && (e2.textContent = eT()) } let _pn = document.querySelectorAll(".mod-server-clone .mod-server-ping"); if (_pn.length && _pn.length !== eBv().length) { let _cl = i(".mod-server-clone"); _cl && _cl.remove() } } catch (_rse) {} } if (e && (eq !== e && (eq = e, e.value = eF, (() => { try { e.options.length > 0 && e.dispatchEvent(new Event("change", { bubbles: !0 })) } catch (_re) { } })(), e.addEventListener("change", e => { eF = e.target.value, localStorage.setItem("selectedRegionId", eF), e2 && (e2.textContent = eT()) })), e.options.length > 0)) { let t = !1; if (Array.from(e.options).forEach(e => { let o = function e(t) { let o = t.match(/(\d+)\s*ms/i); return o ? parseInt(o[1]) : null }(e.textContent); null != o && (t = !0); let n = eB.find(t => t.value === e.value); n && (n.ping = o) }), t && function e() { let t = o("mod-server-panel"); t && eO(t), document.querySelectorAll(".mod-server-clone .mod-server-ping").forEach((e, t) => { let _vb = eBv(); if (t >= _vb.length) return; let o = _vb[t]; e.textContent = null != o.ping ? o.ping + "ms" : "-"; let [n, i] = eN(o.ping); e.style.setProperty("background", n, "important"), e.style.setProperty("color", i, "important") }) }(), t && d.ping.autoPickBest && !ej) { let _vb = eBv(), o = _vb.filter(e => null != e.ping); if (o.length >= 3 || o.length > 0 && _vb.every(e => null != e.ping || _vb.indexOf(e) > 4)) { let n = o[0]; o.forEach(e => { e.ping < n.ping && (n = e) }), n && n.value !== eF && (console.log("[Better UI] Auto-picking best ping server:", n.value, "(" + n.ping + "ms)"), eH(n.value)), ej = !0 } } } }, 1500); let eW = () => {
        if (!document.pointerLockElement) {
            try {
                !function e() {
                    let t = document.getElementById("settings_misc"); if (!t || document.getElementById("mod-settings-section")) return; let o = { "Hide Chat": "Completely hides the in-game text chat window.", "Hide Kill Feed": "Removes the kill log/feed display from the top-right corner.", "Hide Egg Count": "Hides your current egg count in the main account display.", "Auto Fullscreen": "Automatically switches the game to fullscreen when pointer lock starts.", "Hide Player List": "Hides the players list (scoreboard) on the right side.", "Hide Best Streak": "Hides the shell streak notifications/counters.", "Hide Game Stats": "Hides match versus headers, team scores, and spatula/capture status widgets.", "Hide Ammo Count": "Hides the remaining bullet ammo counter at the bottom right.", "Hide Grenade Count": "Hides your grenade inventory icons/throwing controls.", "Hide Ammo": "Hides the bullet ammo counter and the grenade inventory.", "Hide Player Readouts": "Hides the players list (scoreboard) and the kill feed.", "Hide HP": "Hides the green health bar at the bottom center.", "Show Volume Slider": "Adds an extra master volume slider directly under the pause weapon selection.", "Show Server List (in Frontpage)": "Shows an integrated server region picker with live ping readouts on the frontpage.", "Hide Explosion": "Hides both the explosion smoke and fire sprites for better fight visibility.", "Hide Explosion Smoke": "Hides heavy grey smoke puffs generated by grenade explosions.", "Hide Explosion Fire": "Hides red/yellow flame sprite animations from grenade blasts.", "Hide Yolk Burst": "Stops yolk splatters from rendering when players take damage.", "Hide Shell Burst": "Disables the shell/casing burst particle effect when firing.", "Hide Bullets": "Hides the physical bullet tracer meshes to improve focus and frame rate.", "Disable All Particles": "Turns off all BabylonJS particle systems (blood, smoke, sparks).", "Hide Nametags": "Hides the 3D text nametags hovering over enemy/friendly players.", "Hide Scope Lines": "Hides black overlay crosshair/lines when aiming down sniper scopes.", "Tab Out Key": "The keyboard key that releases pointer lock so you can tab away without snapping the camera.", "Ping Settings": "Customize how your ping is displayed, prewarmed, and auto-selected.", "Hide Box": "Removes the solid dark backdrop border/backdrop filter behind the HUD FPS/Ping box.", "Uncap FPS": "Unlocks browser requestAnimationFrame limits to match high refresh rate monitors.", "Hide FPS": "Completely hides the FPS display from the in-game HUD.", "Show Frametime (ms)": "Swaps standard FPS into milliseconds per frame (frametime) readout.", "Show Session Time": "Displays a real-time count of how long you've been playing in this session.", "Customize FPS": "Allows you to fake your FPS count between custom min and max values.", "Min FPS": "The lower bound for the randomized fake FPS count.", "Max FPS": "The upper bound for the randomized fake FPS count.", "Box Opacity": "Controls the opacity level of the in-game HUD status box background.", "Hide Ping": "Completely hides the ping display from the in-game HUD.", "Customize Ping": "Allows you to fake your ping count between custom min and max values.", "Min Ping": "The lower bound for the randomized fake ping count.", "Max Ping": "The upper bound for the randomized fake ping count.", "Connection Prewarming": "Injects preconnect links to game hosts on boot to lower connection overhead.", "Enable Stats": "Enables the local stats tracker which compiles kills/deaths/KDR/session history.", "Auto-Show on Match End": "Automatically pops up the comprehensive stats overlay when a match finishes.", "Keep Stats Pinned": "Shows a pinned compact kills/deaths/KDR overlay above the in-game pause menu's weapon select.", "Stats Hotkey": "The keyboard key used to toggle the match stats overlay panel.", "Render Scale": "Adjusts hardware scaling level. Higher scale means lower resolution and much better FPS.", "Legacy Skins": "Restores the classic/old gun models for the 7 default weapons (visual only). Toggles live without reload; in an active match your held gun updates on next equip/respawn.", "Legacy Sounds": "Restores the classic/old weapon & game sound effects (fire, reload, pickup, grenade, swap). Loads legacy audio on first enable, then toggles live without reload.", "FOV (Black Bars)": "Widens your horizontal field of view by letterboxing the game view with black bars (top & bottom), like stretching your browser window wider but in-game with no distortion. Only the 3D view is affected — the HUD stays full-screen. Active only while you're playing (pointer locked).", "Skip Frustum & Pointer Checks": "Skips camera frustum mesh clipping and UI raycasts to boost GPU performance.", "Disable Post-Processing (bloom/FXAA)": "Turns off screen post-effects (bloom, FXAA, blur) for raw performance.", "Disable Shadows": "Disables real-time dynamic light maps and shadows on meshes.", "Disable Anti-Aliasing (refresh required)": "Turns off MSAA multi-sampling on the primary camera render targets. Requires a refresh to take effect.", "Audio Optimization (GC & Thread)": "Filters redundant 3D audio updates and throttles distant sound coordinates to eliminate audio-thread stutter and reduce GC sweeps.", "Export Settings": "Backup and download all your current mod configurations into a JSON file.", "Import Settings": "Load and restore your mod configurations from a saved JSON settings file.", "Reset All Mod Settings": "Restore all gameplay, performance, FPS, Ping, and tracker settings back to default values." }; if (!document.getElementById("mod-settings-style")) {
                        let n = document.createElement("style"); n.id = "mod-settings-style", n.textContent = `




				#mod-settings-section { font-family: "Nunito", system-ui, sans-serif !important; }
				#mod-settings-section .mod-header { font-family:"Sigmar One", sans-serif !important; font-weight:normal; font-size: 24px; text-transform:uppercase; color:#0C576F; margin: 0 0 12px 0; }
				#mod-settings-section .mod-grid { display:grid; grid-template-columns:1fr 1fr; gap: 10px 40px; margin-bottom: 20px; }
				#mod-settings-section .mod-item { display:flex; flex-direction:row; align-items:center; gap:20px; cursor:pointer; -webkit-user-select:none; user-select:none; margin-bottom:0; }
				#mod-settings-section .mod-item input[type="checkbox"] { position:absolute; opacity:0; width:0; height:0; pointer-events:none; }
				#mod-settings-section .mod-box { width: 36px; height: 36px; border-radius: 9px; background:#ffffff !important; opacity: 1 !important; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
				#mod-settings-section .mod-box::after { content:''; display:none; width: 9px; height: 18px; border: 5px solid #0E7697; border-top:none; border-left:none; transform: rotate(45deg); margin-top: -4px; }
				#mod-settings-section .mod-item input:checked ~ .mod-box::after { display:block; }
				#mod-settings-section .mod-label { font-family:"Nunito", system-ui, sans-serif !important; font-size: 22px; font-weight:700; color:#0E7697; line-height:1.2; }
				#mod-settings-section .mod-slider-container { grid-column:1 / -1; display:flex; flex-direction:row; align-items:center; gap:24px; margin:15px 0 30px 0; }
				#mod-settings-section .mod-slider-label { font-family:"Nunito", system-ui, sans-serif !important; font-size: 22px; font-weight:700; color:#0E7697; min-width:200px; text-align:left; }
				#mod-settings-section .mod-slider { -webkit-appearance:none; flex:1; height:10px; border-radius:5px; background:#ffffff !important; border: 1px solid rgba(12,87,111,0.15); outline:none; cursor:pointer; }
				#mod-settings-section .mod-slider::-webkit-slider-thumb { -webkit-appearance:none; width:28px; height:28px; border-radius:50%; background:#ff9800 !important; border:4px solid #ffffff !important; box-shadow:0 1px 4px rgba(0,0,0,0.35); cursor:pointer; }
				#mod-settings-section .mod-slider::-moz-range-thumb { width:28px; height:28px; border-radius:50%; background:#ff9800 !important; border:4px solid #ffffff !important; box-shadow:0 1px 4px rgba(0,0,0,0.35); cursor:pointer; }
				#mod-settings-section .mod-slider-value { font-family:monospace; font-size: 22px; font-weight:bold; color:#0C576F; min-width:55px; text-align:right; }
				#mod-settings-section .mod-num-input { width:100px; padding:8px 12px; border:none !important; border-radius:10px; background:#ffffff !important; color:#0C576F !important; font-family:"Nunito", system-ui, sans-serif !important; font-size: 18px; font-weight: 700; text-align:center; outline:none; transition:border-color 0.15s,background 0.15s; -moz-appearance:textfield; }
				#mod-settings-section .mod-num-input::-webkit-outer-spin-button, #mod-settings-section .mod-num-input::-webkit-inner-spin-button { -webkit-appearance:none; margin:0; }
				#mod-settings-section .mod-num-input:focus { border:none !important; }
				.mod-tab-active .settings-content { display:none !important; }
				.mod-tab-active #settings_keyboard, .mod-tab-active #settings_controller, .mod-tab-active #settings_misc { display:none !important; }

				/* Crosshair tab */
				#mod-crosshair-section { font-family: "Nunito", system-ui, sans-serif !important; }
				#mod-crosshair-section .ch2-top { display: flex; gap: 30px; align-items: flex-start; }
				#mod-crosshair-section .ch2-preview-col { flex: 1; min-width: 0; position: sticky; top: 0; z-index: 10; }
				#mod-crosshair-section .ch2-preview-label-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
				#mod-crosshair-section .ch2-preview-wrap { width: 100%; aspect-ratio: 1; border-radius: 16px; border: 2px solid rgba(12,87,111,0.35); overflow: hidden; background: #ffffff; margin-bottom: 16px; position: relative; }
				#mod-crosshair-section .ch2-right-col { flex: 1; min-width: 0; }
				#mod-crosshair-section .ch2-section-title { font-family:"Sigmar One", sans-serif !important; font-weight:normal; font-size: 18px; color: #0C576F; text-transform: uppercase; margin-bottom: 16px; }
				#mod-crosshair-section .ch2-header { font-family:"Sigmar One", sans-serif !important; font-weight: normal; font-size: 24px; text-transform: uppercase; color: #0C576F; margin: 16px 0 24px 0; }
				#mod-crosshair-section .ch2-divider { border: none; border-top: 1px solid rgba(12,87,111,0.18); margin: 20px 0; }
				#mod-crosshair-section .ch2-control-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 12px; }
				#mod-crosshair-section .ch2-label { font-family:"Nunito", system-ui, sans-serif !important; font-size: 16px; font-weight: 700; color: #0E7697; white-space: nowrap; }
				#mod-crosshair-section .ch2-control-right { display: flex; align-items: center; gap: 14px; }
				#mod-crosshair-section .ch2-color { width: 54px; height: 44px; border:none !important; border-radius: 10px; padding: 0; cursor: pointer; flex-shrink: 0; background: none; }
				#mod-crosshair-section .ch2-color::-webkit-color-swatch-wrapper { padding: 0; }
				#mod-crosshair-section .ch2-color::-webkit-color-swatch { border: none; border-radius: 10px; }
				#mod-crosshair-section .ch2-hex { width: 80px; padding: 4px 8px; border:none !important; border-radius: 10px; background: #ffffff !important; color: #0C576F !important; font-family: "Nunito", system-ui, sans-serif !important; font-size: 14px; font-weight: 700; text-align: center; outline: none; }
				#mod-crosshair-section .ch2-hex:focus { border:none !important; }
				#mod-crosshair-section .ch2-slider-wrap { margin-bottom: 20px; }
				#mod-crosshair-section .ch2-slider-lrow { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
				#mod-crosshair-section .ch2-slider { -webkit-appearance: none; width: 100%; height: 6px; border-radius: 5px; background: #ffffff !important; border: 1px solid rgba(12,87,111,0.15); outline: none; cursor: pointer; }
				#mod-crosshair-section .ch2-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 21px !important; height: 21px !important; border-radius: 50%; background: #ff9800 !important; border: 4.5px solid #ffffff !important; box-shadow: 0 1px 4px rgba(0,0,0,0.3); cursor: pointer; }
				#mod-crosshair-section .ch2-slider::-moz-range-thumb { width: 21px !important; height: 21px !important; border-radius: 50%; background: #ff9800 !important; border: 4.5px solid #ffffff !important; box-shadow: 0 1px 4px rgba(0,0,0,0.3); cursor: pointer; }
				#mod-crosshair-section .ch2-num { width: 60px; padding: 4px 8px; border:none !important; border-radius: 10px; background: #ffffff !important; color: #0C576F !important; font-family: "Nunito", system-ui, sans-serif !important; font-size: 14px; font-weight: 700; text-align: center; outline: none; -moz-appearance: textfield; }
				#mod-crosshair-section .ch2-num::-webkit-outer-spin-button, #mod-crosshair-section .ch2-num::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
				#mod-crosshair-section .ch2-num:focus { border:none !important; }
				#mod-crosshair-section .ch2-check-label { display: flex; align-items: center; gap: 20px; cursor: pointer; user-select: none; margin-bottom: 10px; }
				#mod-crosshair-section .ch2-check-label input[type=checkbox] { position: absolute; opacity: 0; width: 0; height: 0; pointer-events: none; }
				#mod-crosshair-section .ch2-check-box { width: 36px; height: 36px; border-radius: 9px; background: #ffffff !important; opacity: 1 !important; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
				#mod-crosshair-section .ch2-check-label input:checked ~ .ch2-check-box::after { content: ''; display: block; width: 9px; height: 18px; border: 5px solid #0E7697; border-top: none; border-left: none; transform: rotate(45deg); margin-top: -4px; }
				#mod-crosshair-section .ch2-check-text { font-family:"Nunito", system-ui, sans-serif !important; font-size: 22px; font-weight: 700; color: #0E7697; line-height: 1.2; }
				#mod-crosshair-section .ch2-shape-row { display: flex; gap: 16px; margin-bottom: 24px; }
				#mod-crosshair-section .ch2-shape-btn { flex: 1 !important; border: none !important; border-radius: 12px !important; background: #b5e8f7 !important; color: #0C576F !important; font-family: "Nunito", system-ui, sans-serif !important; font-size: 16px !important; font-weight: 900 !important; text-transform: uppercase !important; letter-spacing: 0.5px !important; cursor: pointer !important; transition: all 0.1s ease !important; box-shadow: 0 4px 0 #80b8c8 !important; box-sizing: border-box !important; height: 50px !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; text-shadow: 0 1px 2px rgba(255,255,255,0.4) !important; }
				#mod-crosshair-section .ch2-shape-btn:hover { background: #cbf2fc !important; box-shadow: 0 4px 0 #99cddc !important; transform: translateY(-1px) !important; }
				#mod-crosshair-section .ch2-shape-btn:active { transform: translateY(3px) !important; box-shadow: 0 1px 0 #99cddc !important; }
				#mod-crosshair-section .ch2-shape-btn.active { background: #0E7697 !important; color: #ffffff !important; box-shadow: 0 4px 0 #0C576F !important; text-shadow: 0 1px 2px rgba(0,0,0,0.3) !important; }
				#mod-crosshair-section .ch2-shape-btn.active:hover { background: #2db8d4 !important; box-shadow: 0 4px 0 #1b7385 !important; transform: translateY(-1px) !important; }
				#mod-crosshair-section .ch2-shape-btn.active:active { transform: translateY(3px) !important; box-shadow: 0 1px 0 #1b7385 !important; }
				#mod-settings-section .ch2-reset-btn, #mod-crosshair-section .ch2-reset-btn { width: 100% !important; padding: 12px 24px !important; background: #d82727 !important; color: #ffffff !important; border: none !important; cursor: pointer !important; font-weight: 900 !important; font-size: 14px !important; border-radius: 12px !important; margin-top: 10px !important; font-family: "Nunito", system-ui, sans-serif !important; text-transform: uppercase !important; letter-spacing: 0.5px !important; transition: all 0.1s ease !important; box-shadow: 0 4px 0 #901414 !important; box-sizing: border-box !important; height: 40px !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; text-shadow: 0 1px 2px rgba(0,0,0,0.3) !important; }
				#mod-settings-section .ch2-reset-btn:hover, #mod-crosshair-section .ch2-reset-btn:hover { background: #ec4343 !important; box-shadow: 0 4px 0 #ab1b1b !important; transform: translateY(-1px) !important; }
				#mod-settings-section .ch2-reset-btn:active, #mod-crosshair-section .ch2-reset-btn:active { transform: translateY(3px) !important; box-shadow: 0 1px 0 #ab1b1b !important; }
				#mod-crosshair-section .ch2-profile-select { background: transparent !important; border: none !important; color: #0C576F !important; font-size: 13px !important; font-weight: 700 !important; font-family: "Nunito", system-ui, sans-serif !important; cursor: pointer !important; padding: 2px 4px !important; outline: none !important; width: 100% !important; min-width: 0 !important; text-overflow: ellipsis !important; white-space: nowrap !important; overflow: hidden !important; }
				#mod-crosshair-section .ch2-icon-bar { display: flex !important; align-items: center !important; gap: 5px !important; background: rgba(255,255,255,0.18) !important; border-radius: 10px !important; padding: 5px 10px !important; margin-bottom: 8px !important; box-shadow: 0 2px 8px rgba(0,0,0,0.08) !important; border: 1.5px solid rgba(14,118,151,0.2) !important; flex-wrap: nowrap !important; width: 100% !important; box-sizing: border-box !important; overflow: visible !important; }
				#mod-crosshair-section .ch2-icon-bar-label { font-family: "Sigmar One", sans-serif !important; font-size: 10px !important; color: #0C576F !important; text-transform: uppercase !important; letter-spacing: 0.5px !important; white-space: nowrap !important; flex-shrink: 0 !important; }
				#mod-crosshair-section .ch2-icon-divider { width: 1.5px !important; height: 22px !important; background: rgba(14,118,151,0.3) !important; margin: 0 3px !important; flex-shrink: 0 !important; border-radius: 1px !important; }
				#mod-crosshair-section .ch2-icon-select-wrap { display: flex !important; align-items: center !important; flex: 1 !important; min-width: 60px !important; overflow: hidden !important; }
				#mod-crosshair-section .ch2-icon-btn { width: 30px !important; height: 30px !important; border: none !important; background: #0E7697 !important; border-radius: 8px !important; cursor: pointer !important; color: #ffffff !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; transition: all 0.1s ease !important; flex-shrink: 0 !important; padding: 0 !important; box-shadow: 0 2.5px 0 #0C576F !important; overflow: visible !important; }
				#mod-crosshair-section .ch2-icon-btn svg { display: block !important; pointer-events: none !important; filter: drop-shadow(0 1px 1px rgba(0,0,0,0.25)) !important; }
				#mod-crosshair-section .ch2-icon-btn:hover { background: #2db8d4 !important; box-shadow: 0 2.5px 0 #1b7385 !important; transform: translateY(-1px) !important; }
				#mod-crosshair-section .ch2-icon-btn:active { transform: translateY(2px) !important; box-shadow: 0 0.5px 0 #1b7385 !important; }
				#mod-crosshair-section .ch2-icon-btn.danger { background: #d82727 !important; box-shadow: 0 2.5px 0 #901414 !important; }
				#mod-crosshair-section .ch2-icon-btn.danger:hover { background: #ec4343 !important; box-shadow: 0 2.5px 0 #ab1b1b !important; transform: translateY(-1px) !important; }
				#mod-crosshair-section .ch2-icon-btn.danger:active { transform: translateY(2px) !important; box-shadow: 0 0.5px 0 #ab1b1b !important; }
				#mod-crosshair-section .ch2-custom-select { position: relative; width: 100%; margin-bottom: 16px; font-family: inherit; }
				#mod-crosshair-section .ch2-custom-select-trigger { display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 0 16px !important; height: 38px !important; border:none !important; border-radius: 10px; background: #ffffff !important; color: #0C576F !important; font-size: 22px !important; font-weight: 700 !important; cursor: pointer; box-sizing: border-box !important; user-select: none; transition: border-color 0.15s, background 0.15s; line-height: 1 !important; font-family: "Nunito", system-ui, sans-serif !important; }
				#mod-crosshair-section .ch2-custom-select-text { font-size: 16px !important; font-weight: 700 !important; color: inherit !important; }
				#mod-crosshair-section .ch2-custom-select-trigger:hover { border-color: #0C576F !important; }
				#mod-crosshair-section .ch2-custom-select.open .ch2-custom-select-trigger { border-color: #0C576F !important; border-bottom-left-radius: 0; border-bottom-right-radius: 0; }
				#mod-crosshair-section .ch2-custom-select-arrow { width: 20px; height: 20px; fill: currentColor; transition: transform 0.2s ease; }
				#mod-crosshair-section .ch2-custom-select.open .ch2-custom-select-arrow { transform: rotate(180deg); }
				#mod-crosshair-section .ch2-custom-select-options { display: none; position: absolute; top: 100%; left: 0; right: 0; z-index: 99999; border: 2px solid #0C576F !important; border-top: none !important; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; background: #ffffff !important; box-shadow: 0 8px 24px rgba(0,0,0,0.2); max-height: 300px; overflow-y: auto; box-sizing: border-box; }
				#mod-crosshair-section .ch2-custom-select.open .ch2-custom-select-options { display: block; }
				#mod-crosshair-section .ch2-custom-select-option { padding: 10px 16px; color: #0C576F !important; font-family: "Nunito", system-ui, sans-serif !important; font-size: 16px !important; font-weight: 700; cursor: pointer; user-select: none; transition: background 0.1s ease, color 0.1s ease; }
				#mod-crosshair-section .ch2-custom-select-option:hover { background: #e0f2f7 !important; color: #0C576F !important; }
				#mod-crosshair-section .ch2-custom-select-option.selected { background: #0E7697 !important; color: #ffffff !important; }
				.ch2-profile-btns { display: none !important; }
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
					color: #0C576F !important;
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

				#mod-settings-section .ch2-profile-btn, #mod-crosshair-section .ch2-profile-btn { flex: 1 !important; padding: 0 10px !important; border: none !important; border-radius: 10px !important; background: #0E7697 !important; color: #ffffff !important; font-family: "Nunito", system-ui, sans-serif !important; font-size: 14px !important; font-weight: 900 !important; text-transform: uppercase !important; letter-spacing: 0.5px !important; cursor: pointer !important; transition: all 0.1s ease !important; box-shadow: 0 3px 0 #0C576F !important; box-sizing: border-box !important; height: 40px !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; text-shadow: 0 1px 2px rgba(0,0,0,0.3) !important; }
				#mod-settings-section .ch2-profile-btn:hover, #mod-crosshair-section .ch2-profile-btn:hover { background: #2db8d4 !important; box-shadow: 0 4px 0 #1b7385 !important; transform: translateY(-1px) !important; }
				#mod-settings-section .ch2-profile-btn:active, #mod-crosshair-section .ch2-profile-btn:active { transform: translateY(3px) !important; box-shadow: 0 1px 0 #1b7385 !important; }
				#mod-settings-section .ch2-profile-btn.danger, #mod-crosshair-section .ch2-profile-btn.danger { background: #d82727 !important; box-shadow: 0 4px 0 #901414 !important; }
				#mod-settings-section .ch2-profile-btn.danger:hover, #mod-crosshair-section .ch2-profile-btn.danger:hover { background: #ec4343 !important; box-shadow: 0 4px 0 #ab1b1b !important; transform: translateY(-1px) !important; }
				#mod-settings-section .ch2-profile-btn.danger:active, #mod-crosshair-section .ch2-profile-btn.danger:active { transform: translateY(3px) !important; box-shadow: 0 1px 0 #ab1b1b !important; }
				#mod-settings-section input[type="file"], #mod-crosshair-section input[type="file"] { display: none !important; }
				.mod-tab-label { opacity: 0.4; transition: opacity 0.15s; }
				#mod-settings-tab:hover .mod-tab-label, #mod-crosshair-tab:hover .mod-tab-label { opacity: 0.75; }
				#mod-settings-tab.mod-tab-is-active .mod-tab-label, #mod-crosshair-tab.mod-tab-is-active .mod-tab-label { opacity: 1; }
				.mod-native-dim { opacity: 0.45 !important; transition: opacity 0.15s; }




				/* Mode selector at the top of #mod-settings-section */
				#mod-mode-row { display:flex; align-items:center; gap:14px; margin:5px -8px 20px -8px; padding:10px 14px; background:rgba(33,106,128,0.08); border:2px solid rgba(33,106,128,0.25); border-radius:10px; }
				#mod-mode-row .mod-mode-label { font-weight:900; font-size:16px; color:#216a80; text-transform:uppercase; letter-spacing:0.5px; }
				#mod-mode-row .mod-mode-btns { display:flex; gap:6px; }
				#mod-mode-row .mod-mode-btn { padding:6px 18px; border:2px solid #b0d8e8; border-radius:8px; background:rgba(255,255,255,0.3); color:#216a80; font-family:inherit; font-size:14px; font-weight:700; cursor:pointer; transition:all 0.15s; }
				#mod-mode-row .mod-mode-btn:hover { border-color:#216a80; background:rgba(255,255,255,0.5); }
				#mod-mode-row .mod-mode-btn.active { background:#216a80; border-color:#216a80; color:#fff; }
				/* Basic-mode hide rule: any element tagged .mod-advanced-only is gone in basic */
				#mod-settings-section.mod-basic .mod-advanced-only { display:none !important; }
				/* Inverse: items only shown in basic (combined "Hide Explosion" / "Hide Bullets") */
				#mod-settings-section:not(.mod-basic) .mod-basic-only { display:none !important; }

				/* Tooltips styling */
				#mod-settings-section [data-tooltip], #mod-settings-section .mod-slider-label[data-tooltip] {
					cursor: default;
				}
			`, (document.head || document.documentElement).appendChild(n)
                    } if (!document.getElementById("mod-crosshair-compact")) { let cs = document.createElement("style"); cs.id = "mod-crosshair-compact"; cs.textContent = `#mod-crosshair-section .ch2-preview-col{flex:1!important}#mod-crosshair-section .ch2-preview-wrap{margin-bottom:12px!important;border-radius:12px!important}#mod-crosshair-section .ch2-header{font-size:21px!important;margin:12px 0 16px 0!important}#mod-crosshair-section .ch2-section-title{font-size:16px!important;margin-bottom:12px!important}#mod-crosshair-section .ch2-label{font-size:14px!important}#mod-crosshair-section .ch2-check-text{font-size:18px!important}#mod-crosshair-section .ch2-check-label{gap:14px!important;margin-bottom:8px!important}#mod-crosshair-section .ch2-check-box{width:30px!important;height:30px!important;border-radius:7px!important}#mod-crosshair-section .ch2-color{width:48px!important;height:28px!important;border-radius:7px!important}#mod-crosshair-section .ch2-hex{width:76px!important;padding:4px 8px!important;font-size:14px!important;border-radius:8px!important}#mod-crosshair-section .ch2-num{width:56px!important;padding:4px 8px!important;font-size:14px!important;border-radius:8px!important}#mod-crosshair-section .ch2-control-row{gap:13px!important;margin-bottom:9px!important}#mod-crosshair-section .ch2-slider{height:5px!important;border-radius:4px!important}#mod-crosshair-section .ch2-slider::-webkit-slider-thumb{-webkit-appearance:none!important;appearance:none!important;width:21px!important;height:21px!important;border:4.5px solid #ffffff!important;margin-top:-8px!important;box-sizing:border-box!important}#mod-crosshair-section .ch2-slider::-moz-range-thumb{width:21px!important;height:21px!important;border-width:4.5px!important;box-sizing:border-box!important}#mod-crosshair-section .ch2-slider-wrap{margin-bottom:14px!important}#mod-crosshair-section .ch2-slider-lrow{margin-bottom:6px!important}#mod-crosshair-section .ch2-shape-row{gap:5px!important;margin-bottom:10px!important}#mod-crosshair-section .ch2-shape-btn{font-size:15px!important;padding:0 8px!important;height:36px!important;border-radius:10px!important;letter-spacing:0.4px!important;box-shadow:0 3px 0 #99cddc!important}#mod-crosshair-section .ch2-shape-btn:hover{box-shadow:0 3px 0 #99cddc!important}#mod-crosshair-section .ch2-shape-btn:active{box-shadow:0 1px 0 #99cddc!important}#mod-crosshair-section .ch2-shape-btn.active{box-shadow:0 3px 0 #0C576F!important}#mod-crosshair-section .ch2-reset-btn{padding:0 18px!important;font-size:15px!important;height:36px!important;border-radius:10px!important;margin-top:10px!important;letter-spacing:0.4px!important;box-shadow:0 3px 0 #901414!important}#mod-crosshair-section .ch2-reset-btn:hover{box-shadow:0 3px 0 #ab1b1b!important}#mod-crosshair-section .ch2-reset-btn:active{box-shadow:0 1px 0 #ab1b1b!important}#mod-crosshair-section .ch2-profile-btn{font-size: 14px !important;height:34px!important;padding:0 10px!important;border-radius:9px!important;letter-spacing:0.3px!important;white-space:nowrap!important;box-shadow:0 3px 0 #123d4b!important}#mod-crosshair-section .ch2-profile-btn:hover{box-shadow:0 3px 0 #1b7385!important}#mod-crosshair-section .ch2-profile-btn:active{box-shadow:0 1px 0 #1b7385!important}#mod-crosshair-section .ch2-profile-btn.danger{box-shadow:0 3px 0 #901414!important}#mod-crosshair-section .ch2-custom-select-trigger{height:34px!important;font-size:13px!important;padding:0 12px!important}#mod-crosshair-section .ch2-custom-select-text{font-size:13px!important}#mod-crosshair-section .ch2-custom-select-option{padding:7px 12px!important;font-size:13px!important}#mod-crosshair-section .ch2-divider{margin:10px 0!important}#mod-crosshair-section .ch2-profile-btns{gap:6px!important}`; (document.head || document.documentElement).appendChild(cs) } let i = document.createElement("div"); function a(e) { let t = document.createElement("div"); t.className = "mod-header", t.textContent = e, t.style.marginTop = 0 === i.children.length ? "10px" : "30px", i.appendChild(t); let o = document.createElement("div"); return o.className = "mod-grid", i.appendChild(o), o } function r(e, t, n) { let i = document.createElement("label"); i.className = "mod-item"; let a = o[e]; a && i.setAttribute("data-tooltip", a); let r = document.createElement("input"); r.type = "checkbox", r.checked = !!t, r.tabIndex = -1, r.addEventListener("change", e => { ef("ui_click"), n(e) }); let s = document.createElement("span"); s.className = "mod-box"; let l = document.createElement("span"); return l.className = "mod-label", l.textContent = e, i.appendChild(r), i.appendChild(s), i.appendChild(l), i.addEventListener("click", e => { e.preventDefault(), r.checked = !r.checked, r.dispatchEvent(new Event("change")) }), i } function s(e, t, o, n, i, a) { let s = r(t, o[n], function (e) { o[n] = e.target.checked, localStorage.setItem(i, JSON.stringify(o[n])), a && a() }); return e.appendChild(s), s } function l(e, t, n, i, a, r, s) { let l = function e(t, n, i, a, r, s = 1) { let l = document.createElement("div"); l.className = "mod-slider-container"; let d = document.createElement("div"); d.className = "mod-slider-label", d.textContent = t; let c = o[t]; c && (d.setAttribute("data-tooltip", c), d.style.cursor = "default"); let p = document.createElement("div"); p.className = "mod-slider-inner-wrap", p.style.cssText = "display: flex; align-items: center; flex: 1; gap: 8px;"; let m = document.createElement("span"); m.className = "mod-slider-limit", m.style.cssText = "font-size: 11px; color: #216a80; font-weight: 700; opacity: 0.75; min-width: 20px; text-align: right;", m.textContent = n; let h = document.createElement("input"); Object.assign(h, { type: "range", className: "mod-slider", min: n, max: i, step: s, value: a }); let u = document.createElement("span"); u.className = "mod-slider-limit", u.style.cssText = "font-size: 11px; color: #216a80; font-weight: 700; opacity: 0.75; min-width: 20px; text-align: left;", u.textContent = i, p.appendChild(m), p.appendChild(h), p.appendChild(u); let f = document.createElement("input"); Object.assign(f, { type: "number", className: "mod-num-input", min: n, max: i, step: s, value: a }), h.addEventListener("input", () => { f.value = h.value }), h.addEventListener("change", e => { ef("ui_onchange"), r(e) }); let g = () => { let e = parseFloat(f.value); isNaN(e) || (e = Math.max(n, Math.min(i, e)), f.value = e, h.value = e, r({ target: { value: String(e) } })) }; return f.addEventListener("change", g), f.addEventListener("keydown", e => { "Enter" === e.key && (g(), f.blur()) }), l.appendChild(d), l.appendChild(p), l.appendChild(f), l }(t, n, i, a[r], function (e) { a[r] = parseInt(e.target.value, 10), localStorage.setItem(s, JSON.stringify(a[r])) }); return e.appendChild(l), l } function c(...e) { return e.forEach(e => e && e.classList && e.classList.add("mod-advanced-only")), e[0] } i.id = "mod-settings-section", i.style.cssText = "display:none;overflow-y:auto;box-sizing:border-box;padding:0 10px 30px;"; let p, m = document.createElement("div"); m.id = "mod-mode-row"; let h = document.createElement("span"); h.className = "mod-mode-label", h.textContent = "Mode"; let u = document.createElement("div"); u.className = "mod-mode-btns"; let f = document.createElement("button"); f.className = "mod-mode-btn", f.textContent = "Basic"; let b = document.createElement("button"); function x(e) { d.mode = e, localStorage.setItem("tp-mode", e), f.classList.toggle("active", "basic" === e), b.classList.toggle("active", "advanced" === e), i.classList.toggle("mod-basic", "basic" === e); try { let t = p?.querySelector("input"); t && (t.checked = d.gameplay.noExplosionSmoke && d.gameplay.noExplosionFire) } catch (o) { } ef("ui_click"), "function" == typeof E && E() } b.className = "mod-mode-btn", b.textContent = "Advanced", f.addEventListener("click", () => x("basic")), b.addEventListener("click", () => x("advanced")), u.appendChild(f), u.appendChild(b), m.appendChild(h), m.appendChild(u); let modTopRow = document.createElement("div"); modTopRow.style.cssText = "display:flex;gap:18px;align-items:stretch;flex-wrap:wrap;margin:5px -8px 15px -8px;padding:0;background:none;border:none;border-radius:0;box-sizing:border-box;"; m.style.cssText = "margin:0;padding:0;background:none;border:none;border-radius:0;flex:0 0 auto;display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:8px;"; modTopRow.appendChild(m); i.appendChild(modTopRow); let v = document.createElement("div"); v.id = "mod-search-row", v.style.cssText = "margin:0;padding:0;background:none;border:none;display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:8px;flex:1 1 250px;min-width:0;"; let _ = document.createElement("div"); _.className = "mod-header", _.style.cssText = "margin:0 0 12px 0;padding:0;", _.textContent = "Search Settings:"; let k = document.createElement("input"); function E() { let e = k.value.toLowerCase().trim(), t = "basic" === d.mode, o = i.querySelectorAll(".mod-grid"); o.forEach(o => { let n = o.previousElementSibling, i = 0; Array.from(o.children).forEach(o => { let n = o.classList.contains("mod-advanced-only"), a = o.classList.contains("mod-basic-only"), r = !0; if (t && n && (r = !1), !t && a && (r = !1), !r) { o.style.display = "none"; return } let s = o.textContent.toLowerCase(), l = s.includes(e); l ? (o.style.display = "", i++) : o.style.display = "none" }); let a = i > 0; o.style.display = a ? "" : "none", n && n.classList.contains("mod-header") && (n.style.display = a ? "" : "none") }) } k.type = "text", k.className = "mod-num-input", k.placeholder = "Type to search...", k.style.cssText = "width: 100%; box-sizing: border-box; text-align: left; padding: 0 20px; font-family: Arial, 'Nunito', sans-serif; font-size: 18px; font-weight: 700; border-radius: 8.8px; height: 64.5px; border: 5px solid rgb(14, 118, 151); background-color: rgb(255, 255, 255); color: rgb(11, 147, 189);", v.appendChild(_), v.appendChild(k), modTopRow.appendChild(v), k.addEventListener("input", E), x(d.mode); let C = a("Hide Game HUD"); s(C, "Hide Chat", d.ui, "hideChat", "tp-hideChat", ei), s(C, "Hide Egg Count", d.ui, "hideEggCount", "tp-hideEggCount", ei), s(C, "Auto Fullscreen", d.ui, "autoFullscreen", "tp-autoFullscreen"), C.appendChild(r("Hide Player Readouts", d.ui.hidePlayerList || d.ui.hideKillFeed, function (e) { let v = e.target.checked; d.ui.hidePlayerList = v, localStorage.setItem("tp-hidePlayerList", JSON.stringify(v)), d.ui.hideKillFeed = v, localStorage.setItem("tp-hideKillFeed", JSON.stringify(v)), ei() })), s(C, "Hide Best Streak", d.ui, "hideBestStreak", "tp-hideBestStreak", ei), c(s(C, "Hide Game Stats", d.ui, "hideGameStats", "tp-hideGameStats", ei)), c(C.appendChild(r("Hide Ammo", d.ui.hideAmmo || d.ui.hideGrenade, function (e) { let v = e.target.checked; d.ui.hideAmmo = v, localStorage.setItem("tp-hideAmmo", JSON.stringify(v)), d.ui.hideGrenade = v, localStorage.setItem("tp-hideGrenade", JSON.stringify(v)), ei() }))), c(s(C, "Hide HP", d.ui, "hideHP", "tp-hideHP", ei)); let P = a("Mod HUD Widgets"); P.previousElementSibling && c(P.previousElementSibling), c(P), c(s(P, "Show Volume Slider", d.ui, "showVolumeSlider", "tp-showVolumeSlider", ei)), c(s(P, "Show Server List (in Frontpage)", d.ui, "showServerList", "tp-showServerList", () => { if (!d.ui.showServerList) { let e = document.querySelector(".mod-server-clone"); e && e.remove() } })); s(P, "Enable Stats", d.stats, "enabled", "tp-statsEnabled"), s(P, "Keep Stats Pinned", d.stats, "pinned", "tp-statsPinned"); let STATS_KEY = function (t, n, i) { let a = document.createElement("div"); a.className = "mod-slider-container"; let r = document.createElement("div"); r.className = "mod-slider-label", r.textContent = t; let s = o[t]; s && (r.setAttribute("data-tooltip", s), r.style.cursor = "default"); let l = document.createElement("button"); function d(e) { return e ? " " === e ? "Space" : e : "None" } l.className = "mod-num-input", l.style.cssText = "width: 120px; padding: 6px 10px; cursor: pointer; text-transform: capitalize; font-weight: 700;", l.textContent = d(n); let c = !1; return l.addEventListener("click", e => { function t(e) { e.preventDefault(), e.stopPropagation(); let o = e.key; "Escape" === o && (o = ""), l.textContent = d(o), l.style.borderColor = "", l.style.background = "", i(o), c = !1, window.removeEventListener("keydown", t, !0) } e.preventDefault(), c || (c = !0, l.textContent = "...", l.style.borderColor = "#216a80", l.style.background = "rgba(45, 184, 212, 0.35)", "function" == typeof ef && ef("ui_click"), window.addEventListener("keydown", t, !0)) }), a.appendChild(r), a.appendChild(l), a }("Stats Hotkey", d.stats.hotkey, function (e) { d.stats.hotkey = e || "", localStorage.setItem("tp-statsHotkey", d.stats.hotkey) }); P.appendChild(STATS_KEY); let L = a("Gameplay Settings"); (p = r("Hide Explosion", d.gameplay.noExplosionSmoke && d.gameplay.noExplosionFire, function (e) { let t = e.target.checked; d.gameplay.noExplosionSmoke = t, d.gameplay.noExplosionFire = t, localStorage.setItem("tp-noExplosionSmoke", JSON.stringify(t)), localStorage.setItem("tp-noExplosionFire", JSON.stringify(t)), g() })).classList.add("mod-basic-only"), L.appendChild(p), c(s(L, "Hide Explosion Smoke", d.gameplay, "noExplosionSmoke", "tp-noExplosionSmoke", g)), c(s(L, "Hide Explosion Fire", d.gameplay, "noExplosionFire", "tp-noExplosionFire", g)), s(L, "Hide Yolk Burst", d.gameplay, "noYolk", "tp-noYolk", g), s(L, "Hide Shell Burst", d.gameplay, "noShellBurst", "tp-noShellBurst", g), s(L, "Hide Bullets", d.perf, "noBulletProjectiles", "tp-noBulletProjectiles", () => { let e = $(); e && w(e) }), s(L, "Disable All Particles", d.perf, "noParticles", "tp-noParticles", y), c(s(L, "Hide Scope Lines", d.gameplay, "hideScopeLines", "tp-hideScopeLines", () => { window.__ssbApplyScopeLines && window.__ssbApplyScopeLines() })), s(L, "Legacy Skins", d.gameplay, "legacySkins", "tp-legacySkins", () => setLegacySkins(d.gameplay.legacySkins)), s(L, "Legacy Sounds", d.gameplay, "legacySounds", "tp-legacySounds", () => setLegacySounds(d.gameplay.legacySounds)); let I = function e(t, n, i) { let a = document.createElement("div"); a.className = "mod-slider-container"; let r = document.createElement("div"); r.className = "mod-slider-label", r.textContent = t; let s = o[t]; s && (r.setAttribute("data-tooltip", s), r.style.cursor = "default"); let l = document.createElement("button"); function d(e) { return e ? " " === e ? "Space" : e : "None" } l.className = "mod-num-input", l.style.cssText = "width: 120px; padding: 6px 10px; cursor: pointer; text-transform: capitalize; font-weight: 700;", l.textContent = d(n); let c = !1; return l.addEventListener("click", e => { function t(e) { e.preventDefault(), e.stopPropagation(); let o = e.key; "Escape" === o && (o = ""), l.textContent = d(o), l.style.borderColor = "", l.style.background = "", i(o), c = !1, window.removeEventListener("keydown", t, !0) } e.preventDefault(), c || (c = !0, l.textContent = "...", l.style.borderColor = "#216a80", l.style.background = "rgba(45, 184, 212, 0.35)", ef("ui_click"), window.addEventListener("keydown", t, !0)) }), a.appendChild(r), a.appendChild(l), a }("Tab Out Key", d.gameplay.tabOutKey, function (e) { d.gameplay.tabOutKey = e || "Tab", localStorage.setItem("tp-tabOutKey", d.gameplay.tabOutKey) }); L.appendChild(I); let _fovC = document.createElement("div"); _fovC.className = "mod-slider-container"; let _fovL = document.createElement("div"); _fovL.className = "mod-slider-label", _fovL.textContent = "FOV (Black Bars)"; let _fovTt = o["FOV (Black Bars)"]; _fovTt && (_fovL.setAttribute("data-tooltip", _fovTt), _fovL.style.cursor = "default"); let _fovIW = document.createElement("div"); _fovIW.className = "mod-slider-inner-wrap", _fovIW.style.cssText = "display: flex; align-items: center; flex: 1; gap: 8px;"; let _fovMn = document.createElement("span"); _fovMn.className = "mod-slider-limit", _fovMn.style.cssText = "font-size: 11px; color: #216a80; font-weight: 700; opacity: 0.75; min-width: 20px; text-align: right;", _fovMn.textContent = "1"; let _fovR = document.createElement("input"); Object.assign(_fovR, { type: "range", className: "mod-slider", min: "1", max: "1.8", step: "0.05", value: d.gameplay.fovStretch }); let _fovMx = document.createElement("span"); _fovMx.className = "mod-slider-limit", _fovMx.style.cssText = "font-size: 11px; color: #216a80; font-weight: 700; opacity: 0.75; min-width: 20px; text-align: left;", _fovMx.textContent = "1.8", _fovIW.appendChild(_fovMn), _fovIW.appendChild(_fovR), _fovIW.appendChild(_fovMx); let _fovN = document.createElement("input"); function _fovApply(v) { v = Math.max(1, Math.min(1.8, Math.round(20 * v) / 20)), _fovR.value = v, _fovN.value = v, d.gameplay.fovStretch = v, localStorage.setItem("tp-fovStretch", JSON.stringify(v)), ef("ui_onchange"), applyFovStretch(), (v !== 1 && (d.gameplay.hideScopeLines = !0, localStorage.setItem("tp-hideScopeLines", "true"), window.__ssbApplyScopeLines && window.__ssbApplyScopeLines(), localStorage.setItem("tp-hideScopeFrame", "true"), document.querySelectorAll(".mod-item").forEach(_el => { let _l = _el.querySelector(".mod-label"); if (_l && ("Hide Scope Lines" === _l.textContent || "Hide Scope Frame" === _l.textContent)) { let _c = _el.querySelector('input[type="checkbox"]'); _c && (_c.checked = !0) } }))) } Object.assign(_fovN, { type: "number", className: "mod-num-input", min: "1", max: "1.8", step: "0.05", value: d.gameplay.fovStretch }), _fovR.addEventListener("input", () => { _fovN.value = _fovR.value }), _fovR.addEventListener("change", () => _fovApply(parseFloat(_fovR.value))); let _fovNc = () => { let e = parseFloat(_fovN.value); isNaN(e) || _fovApply(e) }; _fovN.addEventListener("change", _fovNc), _fovN.addEventListener("keydown", e => { "Enter" === e.key && (_fovNc(), _fovN.blur()) }); let _fovHint = document.createElement("div"); _fovHint.style.cssText = "font-size:11px;color:#aaa;margin-top:2px;grid-column:1/-1;text-align:left;padding-left:145px;font-family:'Nunito',system-ui,sans-serif;", _fovHint.textContent = "1.00 = normal  |  higher = wider FOV with black bars", _fovC.appendChild(_fovL), _fovC.appendChild(_fovIW), _fovC.appendChild(_fovN), _fovC.appendChild(_fovHint), L.appendChild(_fovC); let T = a("FPS Settings"); s(T, "Hide Box", d.hideFPS, "hideBox", "tp-hideBox", eo), s(T, "Uncap FPS", d.hideFPS, "uncap", "tp-uncapFPS", () => { d.hideFPS.uncap && _installUncap() }), s(T, "Hide FPS", d.hideFPS, "hide", "tp-hideFPS", eo), c(s(T, "Hide Ping", d.ping, "hide", "tp-hidePing", eo)), c(s(T, "Show Frametime (ms)", d.hideFPS, "showMs", "tp-showMs", eo)), s(T, "Show Session Time", d.hideFPS, "showSessionTime", "tp-showSessionTime", eo); let H = a("Performance Settings"), R = document.createElement("div"); R.className = "mod-slider-container"; let q = document.createElement("div"); q.className = "mod-slider-label", q.textContent = "Render Scale"; let j = o["Render Scale"]; j && (q.setAttribute("data-tooltip", j), q.style.cursor = "default"); let W = document.createElement("div"); W.className = "mod-slider-inner-wrap", W.style.cssText = "display: flex; align-items: center; flex: 1; gap: 8px;"; let K = document.createElement("span"); K.className = "mod-slider-limit", K.style.cssText = "font-size: 11px; color: #216a80; font-weight: 700; opacity: 0.75; min-width: 20px; text-align: right;", K.textContent = "1"; let U = document.createElement("input"); Object.assign(U, { type: "range", className: "mod-slider", min: "1", max: "4", step: "0.25", value: d.perf.renderScale }); let Z = document.createElement("span"); Z.className = "mod-slider-limit", Z.style.cssText = "font-size: 11px; color: #216a80; font-weight: 700; opacity: 0.75; min-width: 20px; text-align: left;", Z.textContent = "4", W.appendChild(K), W.appendChild(U), W.appendChild(Z); let X = document.createElement("input"); function J(e) { U.value = e, X.value = e, d.perf.renderScale = e, localStorage.setItem("tp-renderScale", e), ef("ui_onchange"), y() } Object.assign(X, { type: "number", className: "mod-num-input", min: "1", max: "4", step: "0.25", value: d.perf.renderScale }), U.addEventListener("input", () => { X.value = U.value }), U.addEventListener("change", () => J(parseFloat(U.value))); let Q = () => { let e = parseFloat(X.value); isNaN(e) || (e = Math.max(1, Math.min(4, e)), X.value = e, U.value = e, J(e)) }; X.addEventListener("change", Q), X.addEventListener("keydown", e => { "Enter" === e.key && (Q(), X.blur()) }); let ee = document.createElement("div"); ee.style.cssText = "font-size:11px;color:#aaa;margin-top:2px;grid-column:1/-1;text-align:left;padding-left:145px;font-family:'Nunito',system-ui,sans-serif;", ee.textContent = "1 = native res  |  2 = half  |  4 = quarter (best FPS)", R.appendChild(q), R.appendChild(W), R.appendChild(X), R.appendChild(ee), H.appendChild(R), s(H, "Disable Shadows", d.perf, "noShadows", "tp-noShadows", y), s(H, "Disable Anti-Aliasing (refresh required)", d.perf, "noAA", "tp-noAA", y); let et = a("Mod Management");

                    // Base36 encoding helpers for ultra-compact codes
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
                        mode: "advanced",
                        hideFPS: { hideBox: false, showMs: false, boxOpacity: 1, showSessionTime: false, hide: false, min: 60, max: 60, random: false, uncap: false },
                        ping: { hide: false, min: 1, max: 1, random: false, preconnect: true, autoPickBest: false },
                        ui: { hideEggCount: false, hideChat: false, hideKillFeed: false, autoFullscreen: false, hidePlayerList: false, hideBestStreak: false, hideGameStats: false, hideAmmo: false, hideGrenade: false, hideHP: false, showVolumeSlider: true, showServerList: true },
                        gameplay: { tabOutKey: "Tab", noExplosionSmoke: false, noExplosionFire: false, noYolk: false, noShellBurst: false, hideNametags: false, hideScopeLines: false, skinUnlocker: false, fovStretch: 1, legacySkins: false, legacySounds: false },
                        perf: { renderScale: 1, perfPriority: true, noPostProcess: false, noBulletProjectiles: false, noShadows: false, noAA: false, noParticles: false, audioOptimized: true },
                        stats: { enabled: true, autoShow: true, hotkey: "\\", pinned: false }
                    };

                    // Persist ALL of d to localStorage using the SAME keys boot reads.
                    // (A plain "tp-" + propName wrote hideFPS/ping/stats to wrong keys,
                    // so imported/reset settings silently reverted on reload.)
                    function _ssbPersistD() {
                        localStorage.setItem("tp-mode", d.mode);
                        const _fk = { hide: "tp-hideFPS", min: "tp-minFPS", max: "tp-maxFPS", random: "tp-randomFPS", uncap: "tp-uncapFPS" };
                        Object.entries(d.hideFPS).forEach(([e, t]) => localStorage.setItem(_fk[e] || "tp-" + e, JSON.stringify(t)));
                        const _pk = { hide: "tp-hidePing", min: "tp-minPing", max: "tp-maxPing", random: "tp-randomPing" };
                        Object.entries(d.ping).forEach(([e, t]) => localStorage.setItem(_pk[e] || "tp-" + e, JSON.stringify(t)));
                        Object.entries(d.ui).forEach(([e, t]) => localStorage.setItem("tp-" + e, JSON.stringify(t)));
                        Object.entries(d.gameplay).forEach(([e, t]) => { "tabOutKey" === e ? localStorage.setItem("tp-" + e, t) : localStorage.setItem("tp-" + e, JSON.stringify(t)) });
                        Object.entries(d.perf).forEach(([e, t]) => localStorage.setItem("tp-" + e, JSON.stringify(t)));
                        const _sk = { enabled: "tp-statsEnabled", autoShow: "tp-statsAutoShow", hotkey: "tp-statsHotkey", pinned: "tp-statsPinned" };
                        Object.entries(d.stats).forEach(([e, t]) => { "hotkey" === e ? localStorage.setItem(_sk[e], t) : localStorage.setItem(_sk[e] || "tp-" + e, JSON.stringify(t)) });
                    }

                    function packModSettings(current) {
                        let parts = [];
                        let def = dDefaults;
                        if (current.mode !== def.mode) parts.push("Mm" + current.mode);

                        let h = current.hideFPS, hd = def.hideFPS;
                        if (h.hideBox !== hd.hideBox) parts.push("Fb" + (h.hideBox ? "1" : "0"));
                        if (h.showMs !== hd.showMs) parts.push("Fm" + (h.showMs ? "1" : "0"));
                        if (h.boxOpacity !== hd.boxOpacity) parts.push("Fo" + _ssbPackNum(h.boxOpacity));
                        if (h.showSessionTime !== hd.showSessionTime) parts.push("Ft" + (h.showSessionTime ? "1" : "0"));
                        if (h.hide !== hd.hide) parts.push("Fh" + (h.hide ? "1" : "0"));
                        if (h.min !== hd.min) parts.push("Fi" + _ssbPackNum(h.min, 1));
                        if (h.max !== hd.max) parts.push("Fa" + _ssbPackNum(h.max, 1));
                        if (h.random !== hd.random) parts.push("Fr" + (h.random ? "1" : "0"));
                        if (h.uncap !== hd.uncap) parts.push("Fu" + (h.uncap ? "1" : "0"));

                        let p = current.ping, pd = def.ping;
                        if (p.hide !== pd.hide) parts.push("Ph" + (p.hide ? "1" : "0"));
                        if (p.min !== pd.min) parts.push("Pi" + _ssbPackNum(p.min, 1));
                        if (p.max !== pd.max) parts.push("Pa" + _ssbPackNum(p.max, 1));
                        if (p.random !== pd.random) parts.push("Pr" + (p.random ? "1" : "0"));
                        if (p.preconnect !== pd.preconnect) parts.push("Pc" + (p.preconnect ? "1" : "0"));
                        if (p.autoPickBest !== pd.autoPickBest) parts.push("Pb" + (p.autoPickBest ? "1" : "0"));

                        let u = current.ui, ud = def.ui;
                        if (u.hideEggCount !== ud.hideEggCount) parts.push("Ue" + (u.hideEggCount ? "1" : "0"));
                        if (u.hideChat !== ud.hideChat) parts.push("Uc" + (u.hideChat ? "1" : "0"));
                        if (u.hideKillFeed !== ud.hideKillFeed) parts.push("Uk" + (u.hideKillFeed ? "1" : "0"));
                        if (u.autoFullscreen !== ud.autoFullscreen) parts.push("Uf" + (u.autoFullscreen ? "1" : "0"));
                        if (u.hidePlayerList !== ud.hidePlayerList) parts.push("Up" + (u.hidePlayerList ? "1" : "0"));
                        if (u.hideBestStreak !== ud.hideBestStreak) parts.push("Us" + (u.hideBestStreak ? "1" : "0"));
                        if (u.hideGameStats !== ud.hideGameStats) parts.push("Ug" + (u.hideGameStats ? "1" : "0"));
                        if (u.hideAmmo !== ud.hideAmmo) parts.push("Ua" + (u.hideAmmo ? "1" : "0"));
                        if (u.hideGrenade !== ud.hideGrenade) parts.push("Un" + (u.hideGrenade ? "1" : "0"));
                        if (u.hideHP !== ud.hideHP) parts.push("Uh" + (u.hideHP ? "1" : "0"));
                        if (u.showVolumeSlider !== ud.showVolumeSlider) parts.push("Uv" + (u.showVolumeSlider ? "1" : "0"));
                        if (u.showServerList !== ud.showServerList) parts.push("Ul" + (u.showServerList ? "1" : "0"));

                        let gp = current.gameplay, gpd = def.gameplay;
                        if (gp.tabOutKey !== gpd.tabOutKey) parts.push("Gt" + gp.tabOutKey.toLowerCase());
                        if (gp.noExplosionSmoke !== gpd.noExplosionSmoke) parts.push("Gs" + (gp.noExplosionSmoke ? "1" : "0"));
                        if (gp.noExplosionFire !== gpd.noExplosionFire) parts.push("Gf" + (gp.noExplosionFire ? "1" : "0"));
                        if (gp.noYolk !== gpd.noYolk) parts.push("Gy" + (gp.noYolk ? "1" : "0"));
                        if (gp.noShellBurst !== gpd.noShellBurst) parts.push("Gb" + (gp.noShellBurst ? "1" : "0"));
                        if (gp.hideNametags !== gpd.hideNametags) parts.push("Gn" + (gp.hideNametags ? "1" : "0"));
                        if (gp.hideScopeLines !== gpd.hideScopeLines) parts.push("Gl" + (gp.hideScopeLines ? "1" : "0"));
                        if (gp.skinUnlocker !== gpd.skinUnlocker) parts.push("Gu" + (gp.skinUnlocker ? "1" : "0"));
                        if (gp.fovStretch !== gpd.fovStretch) parts.push("Gv" + _ssbPackNum(gp.fovStretch));
                        if (gp.legacySkins !== gpd.legacySkins) parts.push("Gk" + (gp.legacySkins ? "1" : "0"));
                        if (gp.legacySounds !== gpd.legacySounds) parts.push("Go" + (gp.legacySounds ? "1" : "0"));

                        let pf = current.perf, pfd = def.perf;
                        if (pf.renderScale !== pfd.renderScale) parts.push("Er" + _ssbPackNum(pf.renderScale));
                        if (pf.perfPriority !== pfd.perfPriority) parts.push("Ep" + (pf.perfPriority ? "1" : "0"));
                        if (pf.noPostProcess !== pfd.noPostProcess) parts.push("Eo" + (pf.noPostProcess ? "1" : "0"));
                        if (pf.noBulletProjectiles !== pfd.noBulletProjectiles) parts.push("Eb" + (pf.noBulletProjectiles ? "1" : "0"));
                        if (pf.noShadows !== pfd.noShadows) parts.push("Es" + (pf.noShadows ? "1" : "0"));
                        if (pf.noAA !== pfd.noAA) parts.push("Ea" + (pf.noAA ? "1" : "0"));
                        if (pf.noParticles !== pfd.noParticles) parts.push("Et" + (pf.noParticles ? "1" : "0"));
                        if (pf.audioOptimized !== pfd.audioOptimized) parts.push("Eu" + (pf.audioOptimized ? "1" : "0"));

                        let st = current.stats, std = def.stats;
                        if (st.enabled !== std.enabled) parts.push("Se" + (st.enabled ? "1" : "0"));
                        if (st.autoShow !== std.autoShow) parts.push("Sa" + (st.autoShow ? "1" : "0"));
                        if (st.hotkey !== std.hotkey) parts.push("Sh" + st.hotkey.toLowerCase());
                        if (st.pinned !== std.pinned) parts.push("Sp" + (st.pinned ? "1" : "0"));

                        return "M-" + parts.join("");
                    }

                    function unpackModSettings(code) {
                        if (!code) throw new Error("Invalid code format");

                        if (code.startsWith("M-")) {
                            let body = code.substring(2);
                            let res = JSON.parse(JSON.stringify(dDefaults));
                            let regex = /([A-Z][a-z])([0-9a-z]*)/g;
                            let match;
                            while ((match = regex.exec(body)) !== null) {
                                let key = match[1];
                                let valStr = match[2];

                                switch (key) {
                                    case "Mm": res.mode = valStr; break;

                                    case "Fb": res.hideFPS.hideBox = valStr === "1"; break;
                                    case "Fm": res.hideFPS.showMs = valStr === "1"; break;
                                    case "Fo": res.hideFPS.boxOpacity = _ssbUnpackNum(valStr); break;
                                    case "Ft": res.hideFPS.showSessionTime = valStr === "1"; break;
                                    case "Fh": res.hideFPS.hide = valStr === "1"; break;
                                    case "Fi": res.hideFPS.min = _ssbUnpackNum(valStr, 1); break;
                                    case "Fa": res.hideFPS.max = _ssbUnpackNum(valStr, 1); break;
                                    case "Fr": res.hideFPS.random = valStr === "1"; break;
                                    case "Fu": res.hideFPS.uncap = valStr === "1"; break;

                                    case "Ph": res.ping.hide = valStr === "1"; break;
                                    case "Pi": res.ping.min = _ssbUnpackNum(valStr, 1); break;
                                    case "Pa": res.ping.max = _ssbUnpackNum(valStr, 1); break;
                                    case "Pr": res.ping.random = valStr === "1"; break;
                                    case "Pc": res.ping.preconnect = valStr === "1"; break;
                                    case "Pb": res.ping.autoPickBest = valStr === "1"; break;

                                    case "Ue": res.ui.hideEggCount = valStr === "1"; break;
                                    case "Uc": res.ui.hideChat = valStr === "1"; break;
                                    case "Uk": res.ui.hideKillFeed = valStr === "1"; break;
                                    case "Uf": res.ui.autoFullscreen = valStr === "1"; break;
                                    case "Up": res.ui.hidePlayerList = valStr === "1"; break;
                                    case "Us": res.ui.hideBestStreak = valStr === "1"; break;
                                    case "Ug": res.ui.hideGameStats = valStr === "1"; break;
                                    case "Ua": res.ui.hideAmmo = valStr === "1"; break;
                                    case "Un": res.ui.hideGrenade = valStr === "1"; break;
                                    case "Uh": res.ui.hideHP = valStr === "1"; break;
                                    case "Uv": res.ui.showVolumeSlider = valStr === "1"; break;
                                    case "Ul": res.ui.showServerList = valStr === "1"; break;

                                    case "Gt":
                                        res.gameplay.tabOutKey = valStr === "tab" ? "Tab" : valStr === "escape" ? "Escape" : valStr === "space" ? "Space" : (valStr.charAt(0).toUpperCase() + valStr.slice(1));
                                        break;
                                    case "Gs": res.gameplay.noExplosionSmoke = valStr === "1"; break;
                                    case "Gf": res.gameplay.noExplosionFire = valStr === "1"; break;
                                    case "Gy": res.gameplay.noYolk = valStr === "1"; break;
                                    case "Gb": res.gameplay.noShellBurst = valStr === "1"; break;
                                    case "Gn": res.gameplay.hideNametags = valStr === "1"; break;
                                    case "Gl": res.gameplay.hideScopeLines = valStr === "1"; break;
                                    case "Gu": res.gameplay.skinUnlocker = valStr === "1"; break;
                                    case "Gv": res.gameplay.fovStretch = _ssbUnpackNum(valStr); break;
                                    case "Gk": res.gameplay.legacySkins = valStr === "1"; break;
                                    case "Go": res.gameplay.legacySounds = valStr === "1"; break;

                                    case "Er": res.perf.renderScale = _ssbUnpackNum(valStr); break;
                                    case "Ep": res.perf.perfPriority = valStr === "1"; break;
                                    case "Eo": res.perf.noPostProcess = valStr === "1"; break;
                                    case "Eb": res.perf.noBulletProjectiles = valStr === "1"; break;
                                    case "Es": res.perf.noShadows = valStr === "1"; break;
                                    case "Ea": res.perf.noAA = valStr === "1"; break;
                                    case "Et": res.perf.noParticles = valStr === "1"; break;
                                    case "Eu": res.perf.audioOptimized = valStr === "1"; break;

                                    case "Se": res.stats.enabled = valStr === "1"; break;
                                    case "Sa": res.stats.autoShow = valStr === "1"; break;
                                    case "Sh": res.stats.hotkey = valStr; break;
                                    case "Sp": res.stats.pinned = valStr === "1"; break;
                                }
                            }
                            return res;
                        }

                        if (!code.startsWith("SSB-MODS-")) {
                            try {
                                let parsed = JSON.parse(decodeURIComponent(escape(atob(code.trim()))));
                                if (parsed && typeof parsed === "object") {
                                    let merged = JSON.parse(JSON.stringify(dDefaults));
                                    Object.keys(parsed).forEach(k => {
                                        if (parsed[k] && typeof parsed[k] === "object") {
                                            Object.assign(merged[k], parsed[k]);
                                        } else {
                                            merged[k] = parsed[k];
                                        }
                                    });
                                    return merged;
                                }
                            } catch (err) { }
                            throw new Error("Invalid code format");
                        }

                        let body = code.substring(9);
                        if (!body.includes(".")) {
                            try {
                                let parsed = JSON.parse(decodeURIComponent(escape(atob(body))));
                                if (parsed && typeof parsed === "object") {
                                    let merged = JSON.parse(JSON.stringify(dDefaults));
                                    Object.keys(parsed).forEach(k => {
                                        if (parsed[k] && typeof parsed[k] === "object") {
                                            Object.assign(merged[k], parsed[k]);
                                        } else {
                                            merged[k] = parsed[k];
                                        }
                                    });
                                    return merged;
                                }
                            } catch (err) { }
                        }

                        let res = JSON.parse(JSON.stringify(dDefaults));
                        let parts = body.split(".");
                        parts.forEach(part => {
                            if (!part) return;
                            let match = part.match(/^([a-z]+)(.*)$/);
                            if (!match) return;
                            let key = match[1];
                            let valStr = match[2];

                            switch (key) {
                                case "m": res.mode = valStr; break;
                                case "hb": res.hideFPS.hideBox = valStr === "1"; break;
                                case "hm": res.hideFPS.showMs = valStr === "1"; break;
                                case "ho": res.hideFPS.boxOpacity = parseFloat(valStr); break;
                                case "hs": res.hideFPS.showSessionTime = valStr === "1"; break;
                                case "hh": res.hideFPS.hide = valStr === "1"; break;
                                case "hmin": res.hideFPS.min = parseFloat(valStr); break;
                                case "hmax": res.hideFPS.max = parseFloat(valStr); break;
                                case "hfa": res.hideFPS.random = valStr === "1"; break;
                                case "huc": res.hideFPS.uncap = valStr === "1"; break;
                                case "ph": res.ping.hide = valStr === "1"; break;
                                case "pmin": res.ping.min = parseFloat(valStr); break;
                                case "pmax": res.ping.max = parseFloat(valStr); break;
                                case "pra": res.ping.random = valStr === "1"; break;
                                case "ppw": res.ping.preconnect = valStr === "1"; break;
                                case "pab": res.ping.autoPickBest = valStr === "1"; break;
                                case "ue": res.ui.hideEggCount = valStr === "1"; break;
                                case "uc": res.ui.hideChat = valStr === "1"; break;
                                case "uk": res.ui.hideKillFeed = valStr === "1"; break;
                                case "uf": res.ui.autoFullscreen = valStr === "1"; break;
                                case "up": res.ui.hidePlayerList = valStr === "1"; break;
                                case "us": res.ui.hideBestStreak = valStr === "1"; break;
                                case "ug": res.ui.hideGameStats = valStr === "1"; break;
                                case "ua": res.ui.hideAmmo = valStr === "1"; break;
                                case "un": res.ui.hideGrenade = valStr === "1"; break;
                                case "uh": res.ui.hideHP = valStr === "1"; break;
                                case "uv": res.ui.showVolumeSlider = valStr === "1"; break;
                                case "ul": res.ui.showServerList = valStr === "1"; break;
                                case "gt": res.gameplay.tabOutKey = valStr; break;
                                case "ges": res.gameplay.noExplosionSmoke = valStr === "1"; break;
                                case "gef": res.gameplay.noExplosionFire = valStr === "1"; break;
                                case "gy": res.gameplay.noYolk = valStr === "1"; break;
                                case "gs": res.gameplay.noShellBurst = valStr === "1"; break;
                                case "gn": res.gameplay.hideNametags = valStr === "1"; break;
                                case "gl": res.gameplay.hideScopeLines = valStr === "1"; break;
                                case "gu": res.gameplay.skinUnlocker = valStr === "1"; break;
                                case "prs": res.perf.renderScale = parseFloat(valStr); break;
                                case "pp":
                                case "ppp": res.perf.perfPriority = valStr === "1"; break;
                                case "ppo": res.perf.noPostProcess = valStr === "1"; break;
                                case "pbu": res.perf.noBulletProjectiles = valStr === "1"; break;
                                case "psh": res.perf.noShadows = valStr === "1"; break;
                                case "paa": res.perf.noAA = valStr === "1"; break;
                                case "ppt": res.perf.noParticles = valStr === "1"; break;
                                case "pao": res.perf.audioOptimized = valStr === "1"; break;
                                case "se": res.stats.enabled = valStr === "1"; break;
                                case "sa": res.stats.autoShow = valStr === "1"; break;
                                case "sh": res.stats.hotkey = valStr; break;
                                case "sp": res.stats.pinned = valStr === "1"; break;
                            }
                        });
                        return res;
                    }

                    let ec_code = document.createElement("button"); ec_code.className = "ch2-profile-btn", ec_code.textContent = "Copy Settings Code", ec_code.setAttribute("data-tooltip", "Pack and copy all your current mod configurations as a clipboard code string."), ec_code.style.cssText = "width: 100%; cursor: pointer; height: 40px !important; padding: 0 16px !important; box-sizing: border-box !important; display: inline-flex !important; align-items: center !important; justify-content: center !important;", ec_code.addEventListener("click", () => { try { let t = packModSettings(d); navigator.clipboard.writeText(t).then(() => { alert("Mod settings code copied to clipboard!\n" + t), ef("ui_click") }).catch(o => { alert("Clipboard copy failed: " + o.message) }) } catch (o) { alert("Export failed: " + o.message) } }); let ei_code = document.createElement("button"); ei_code.className = "ch2-profile-btn", ei_code.textContent = "Import Settings Code", ei_code.setAttribute("data-tooltip", "Paste and restore your mod configurations from a copied settings code string."), ei_code.style.cssText = "width: 100%; cursor: pointer; height: 40px !important; padding: 0 16px !important; box-sizing: border-box !important; display: inline-flex !important; align-items: center !important; justify-content: center !important;", ei_code.addEventListener("click", () => { let code = prompt("Paste your Mod Settings Code (starts with M- or SSB-MODS-):"); if (!code) return; if (code = code.trim(), /^toggle skins$/i.test(code)) { let on = !d.gameplay.skinUnlocker; d.gameplay.skinUnlocker = on, window.__ssbSkinUnlocker = on, localStorage.setItem("tp-skinUnlocker", JSON.stringify(on)), ef("ui_equip"), alert(on ? "Skin Unlocker is ON." : "Skin Unlocker is OFF."); return } let fpsCmd = /^setfps\s+(\d+)(?:\s+(\d+))?$/i.exec(code); if (fpsCmd) { let min = Math.max(1, Math.min(999, parseInt(fpsCmd[1], 10))), max = fpsCmd[2] ? Math.max(1, Math.min(999, parseInt(fpsCmd[2], 10))) : min; if (min > max) { let tmp = min; min = max; max = tmp } d.hideFPS.min = min, d.hideFPS.max = max, d.hideFPS.random = !0, localStorage.setItem("tp-minFPS", JSON.stringify(min)), localStorage.setItem("tp-maxFPS", JSON.stringify(max)), localStorage.setItem("tp-randomFPS", JSON.stringify(!0)), ef("ui_equip"), alert("Custom FPS enabled: " + (min === max ? min + " FPS." : min + "-" + max + " FPS.")); return } if (/^(disable setfps|setfps disable|setfps off)$/i.test(code)) { d.hideFPS.random = !1, localStorage.setItem("tp-randomFPS", JSON.stringify(!1)), ef("ui_equip"), alert("Custom FPS disabled."); return } let pingCmd = /^setping\s+(\d+)(?:\s+(\d+))?$/i.exec(code); if (pingCmd) { let min = Math.max(1, Math.min(999, parseInt(pingCmd[1], 10))), max = pingCmd[2] ? Math.max(1, Math.min(999, parseInt(pingCmd[2], 10))) : min; if (min > max) { let tmp = min; min = max; max = tmp } d.ping.min = min, d.ping.max = max, d.ping.random = !0, localStorage.setItem("tp-minPing", JSON.stringify(min)), localStorage.setItem("tp-maxPing", JSON.stringify(max)), localStorage.setItem("tp-randomPing", JSON.stringify(!0)), ef("ui_equip"), alert("Custom Ping enabled: " + (min === max ? min + " ms." : min + "-" + max + " ms.")); return } if (/^(disable setping|setping disable|setping off)$/i.test(code)) { d.ping.random = !1, localStorage.setItem("tp-randomPing", JSON.stringify(!1)), ef("ui_equip"), alert("Custom Ping disabled."); return } if (!code.startsWith("M-") && !code.startsWith("SSB-MODS-")) { alert("Invalid settings code. Must start with M- or SSB-MODS-"); return } try { let o = unpackModSettings(code); if (!o || "object" != typeof o || Array.isArray(o)) { alert("Import failed: invalid settings code."); return } if (!confirm("This will overwrite your current Mod settings. Are you sure you want to proceed?")) return; !function e(t, o) { o && Object.keys(o).forEach(n => { null === o[n] || "object" != typeof o[n] || Array.isArray(o[n]) ? t[n] = o[n] : (t[n] || (t[n] = {}), e(t[n], o[n])) }) }(d, o), _ssbPersistD(), ef("ui_equip"), alert("Mod settings imported successfully! The settings panel will now refresh."), i.remove(), document.getElementById("mod-crosshair-section")?.remove(), document.getElementById("mod-settings-tab")?.remove(), document.getElementById("mod-crosshair-tab")?.remove(), eW(), eo(), ei(), eg(), y() } catch (n) { alert("Import failed: " + n.message) } }); let es = document.createElement("button"); es.className = "ch2-reset-btn", es.textContent = "Reset All Mod Settings", es.setAttribute("data-tooltip", o["Reset All Mod Settings"]), es.style.cssText = "margin: 0; width: 100%; cursor: pointer; grid-column: 1 / -1; height: 40px !important; padding: 0 16px !important; box-sizing: border-box !important; display: inline-flex !important; align-items: center !important; justify-content: center !important;", es.addEventListener("click", () => { confirm("Are you sure you want to reset ALL Mod Settings to default? This will not affect your custom crosshairs.") && (d.mode = "advanced", d.hideFPS = { hideBox: !1, showMs: !1, boxOpacity: 1, showSessionTime: !1, hide: !1, min: 60, max: 60, random: !1, uncap: !1 }, d.ping = { hide: !1, min: 1, max: 1, random: !1, preconnect: !0, autoPickBest: !1 }, d.ui = { hideEggCount: !1, hideChat: !1, hideKillFeed: !1, autoFullscreen: !1, hidePlayerList: !1, hideBestStreak: !1, hideGameStats: !1, hideAmmo: !1, hideGrenade: !1, hideHP: !1, showVolumeSlider: !0, showServerList: !0 }, d.gameplay = { tabOutKey: "Tab", noExplosionSmoke: !1, noExplosionFire: !1, noYolk: !1, noShellBurst: !1, hideNametags: !1, hideScopeLines: !1, skinUnlocker: !1, fovStretch: 1, legacySkins: !1, legacySounds: !1 }, d.perf = { renderScale: 1, perfPriority: !0, noPostProcess: !1, noBulletProjectiles: !1, noShadows: !1, noAA: !1, noParticles: !1, audioOptimized: !0 }, d.stats = { enabled: !0, autoShow: !0, hotkey: "\\", pinned: !1 }, _ssbPersistD(), ef("ui_click"), i.remove(), document.getElementById("mod-crosshair-section")?.remove(), document.getElementById("mod-settings-tab")?.remove(), document.getElementById("mod-crosshair-tab")?.remove(), eW(), eo(), ei(), eg(), y()) }), et.appendChild(ec_code), et.appendChild(ei_code), et.appendChild(es); let el = document.createElement("div"); el.id = "mod-settings-footer", el.style.cssText = "margin-top: 30px; padding-top: 15px; border-top: 2px solid rgba(33,106,128,0.15); display: flex; justify-content: space-between; align-items: center; font-size: 13px; font-weight: 700; color: #216a80; font-family: 'Nunito', system-ui, sans-serif;"; let ed = document.createElement("span"); ed.textContent = "Shell Shockers Better UI v4.9.4"; let ec = document.createElement("a"); ec.href = "https://www.youtube.com/@subtovirojet?sub_confirmation=1", ec.target = "_blank", ec.textContent = "Created by Virojet", ec.style.cssText = "color: #ff9800; text-decoration: none; transition: color 0.15s; font-family: 'Nunito', system-ui, sans-serif;", ec.addEventListener("mouseover", () => ec.style.color = "#e68a00"), ec.addEventListener("mouseout", () => ec.style.color = "#ff9800"), el.appendChild(ed), el.appendChild(ec), i.appendChild(el); let ep = document.createElement("div"); ep.id = "mod-crosshair-section", ep.style.cssText = "display:none;overflow-y:auto;box-sizing:border-box;padding:0 14px 30px;"; let em = t.parentElement; em.appendChild(i), em.appendChild(ep), function e() {
                        let t = document.getElementById("mod-crosshair-section");
                        if (!t) return;
                        let o = (e, ...t) => {
                            let o = document.createElement("div");
                            if (o.className = "ch2-control-row", e) {
                                let n = document.createElement("span");
                                n.className = "ch2-label", n.textContent = e, o.appendChild(n)
                            }
                            let i = document.createElement("div");
                            return i.className = "ch2-control-right", t.forEach(e => i.appendChild(e)), o.appendChild(i), o
                        },
                            n = (e, t, n) => {
                                let i = document.createElement("input");
                                i.type = "color", i.value = n[t], i.className = "ch2-color";
                                let a = document.createElement("input");
                                a.type = "text", a.value = n[t], a.className = "ch2-hex";
                                let r = () => { n[t] = i.value, a.value = i.value, schedUpd(t, n[t]) };
                                return i.addEventListener("input", r), a.addEventListener("input", () => {
                                    /^#[0-9a-f]{6}$/i.test(a.value) && (i.value = a.value, n[t] = a.value, F(t, n[t]), G(), Y(), ef("ui_onchange"))
                                }), o(e, i, a)
                            },
                            i = (e, t, o, n, i, a) => {
                                let r = document.createElement("input");
                                r.type = "range", r.min = n, r.max = i, r.step = a, r.value = o[t], r.className = "ch2-slider";
                                let s = document.createElement("input");
                                s.type = "number", s.min = n, s.max = i, s.step = a, s.value = o[t], s.className = "ch2-num", r.addEventListener("input", () => {
                                    o[t] = parseFloat(r.value), s.value = o[t], schedUpd(t, o[t])
                                });
                                let l = () => {
                                    let e = parseFloat(s.value);
                                    isNaN(e) || (e = Math.max(parseFloat(n), Math.min(parseFloat(i), e)), s.value = e, r.value = e, o[t] = e, F(t, o[t]), G(), Y(), ef("ui_onchange"))
                                };
                                s.addEventListener("change", l), s.addEventListener("keydown", e => { "Enter" === e.key && (l(), s.blur()) });
                                let d = document.createElement("div");
                                d.className = "ch2-slider-wrap";
                                let c = document.createElement("div");
                                c.className = "ch2-slider-lrow";
                                let p = document.createElement("span");
                                return p.className = "ch2-label", p.textContent = e, c.appendChild(p), c.appendChild(s), d.appendChild(c), d.appendChild(r), d
                            },
                            a = (e, t, o, n) => {
                                let i = document.createElement("label");
                                i.className = "ch2-check-label";
                                let a = document.createElement("input");
                                a.type = "checkbox", a.checked = o[t], a.tabIndex = -1;
                                let r = document.createElement("span");
                                r.className = "ch2-check-box";
                                let s = document.createElement("span");
                                return s.className = "ch2-check-text", s.textContent = e, i.appendChild(a), i.appendChild(r), i.appendChild(s), i.addEventListener("click", e => {
                                    e.preventDefault(); e.stopPropagation(); a.checked = !a.checked; a.dispatchEvent(new Event("change"))
                                }), a.addEventListener("change", () => {
                                    o[t] = a.checked, F(t, o[t]), G(), Y(), ef("ui_click"), n && n()
                                }), i
                            },
                            r = e => {
                                let t = document.createElement("div");
                                return t.className = "ch2-header", t.textContent = e, t
                            },
                            s = () => {
                                let e = document.createElement("div");
                                return e.className = "ch2-divider", e
                            };

                        t.innerHTML = "";
                        let l = document.createElement("div");
                        l.className = "ch2-top";

                        // Left Column
                        let d = document.createElement("div");
                        d.className = "ch2-preview-col";

                        // 1. Live Preview Card
                        let previewCard = document.createElement("div");
                        previewCard.className = "ch2-group-card";
                        let previewTitle = document.createElement("div");
                        previewTitle.className = "ch2-card-title";
                        previewTitle.textContent = "Preview";
                        previewCard.appendChild(previewTitle);
                        let previewWrap = document.createElement("div");
                        previewWrap.className = "ch2-preview-wrap", previewWrap.id = "ch2-preview-wrap";
                        previewCard.appendChild(previewWrap);
                        let c = document.createElement("input");
                        c.type = "color", c.value = localStorage.getItem("ch2-previewBg") || "#ffffff", c.className = "ch2-color";
                        let p = document.createElement("input");
                        p.type = "text", p.value = localStorage.getItem("ch2-previewBg") || "#ffffff", p.className = "ch2-hex";
                        let m = () => { localStorage.setItem("ch2-previewBg", c.value), p.value = c.value, Y() };
                        c.addEventListener("input", m), p.addEventListener("input", () => {
                            /^#[0-9a-f]{6}$/i.test(p.value) && (c.value = p.value, localStorage.setItem("ch2-previewBg", p.value), Y())
                        });
                        let h = o("BG Color", c, p);
                        h.style.marginTop = "6px", previewCard.appendChild(h), d.appendChild(previewCard);

                        // 2. Profiles Card
                        let profilesCard = document.createElement("div");
                        profilesCard.className = "ch2-group-card";
                        let profilesTitle = document.createElement("div");
                        profilesTitle.className = "ch2-card-title";
                        profilesTitle.textContent = "Profiles";
                        profilesCard.appendChild(profilesTitle);

                        let y = document.createElement("select");
                        y.className = "ch2-profile-select";

                        let x = document.createElement("button");
                        x.className = "ch2-profile-btn";
                        x.id = "ch2-open-gallery-btn";
                        x.style.cssText = "height: 51px !important; font-size: 14px !important; font-weight: 800 !important; width: 100% !important; border-radius: 6px !important; background: #ff9800 !important; border: none !important; outline: none !important; box-shadow: 0 3px 0 #d35400 !important; color: #fff !important; cursor: pointer !important; transition: all 0.1s !important; display: flex !important; align-items: center !important; justify-content: center !important; flex-direction: column !important; gap: 2px !important; text-shadow: 0 1px 2px rgba(0,0,0,0.3) !important;";
                        x.addEventListener("mouseover", () => {
                            x.style.setProperty("background", "#e68a00", "important");
                            x.style.setProperty("box-shadow", "0 3px 0 #b33e00", "important");
                        });
                        x.addEventListener("mouseout", () => {
                            x.style.setProperty("background", "#ff9800", "important");
                            x.style.setProperty("box-shadow", "0 3px 0 #d35400", "important");
                        });
                        x.addEventListener("mousedown", () => {
                            x.style.setProperty("transform", "translateY(2px)", "important");
                            x.style.setProperty("box-shadow", "0 1px 0 #b33e00", "important");
                        });
                        x.addEventListener("mouseup", () => {
                            x.style.setProperty("transform", "translateY(0px)", "important");
                            x.style.setProperty("box-shadow", "0 3px 0 #d35400", "important");
                        });
                        x.addEventListener("click", () => {
                            if (typeof ef === "function") ef("ui_click");
                            if (window._ssbToggleGallery) window._ssbToggleGallery(true);
                        });

                        function E() {
                            y.innerHTML = "";
                            let e = N(), t = Object.keys(e), o = document.createElement("option");
                            o.value = "", o.textContent = t.length ? "--  select a profile -- " : "--  no profiles saved -- ", y.appendChild(o), t.forEach(e => {
                                let t = document.createElement("option"); t.value = e, t.textContent = e, y.appendChild(t)
                            }), y.value = z() || "";

                            if (x) {
                                x.textContent = "GALLERY";
                            }

                            if (window._ssbUpdateGallery) { window._ssbGalleryActive ? window._ssbUpdateGallery(e, t, y.value) : window._ssbGalleryDirty = !0 }
                        }
                        E(), y.addEventListener("change", () => {
                            let o = y.value;
                            o && function e(t) {
                                let o = N(); if (!o[t]) return !1;
                                let n = Object.assign({}, B, o[t]), i = Object.assign({}, A);
                                return Object.assign(A, n), Object.keys(A).forEach(e => { i[e] !== A[e] && F(e, A[e]) }), O(t), !0
                            }(o) && (G(), Y(), t.innerHTML = "", e(), ef("ui_click"))
                        });

                        profilesCard.appendChild(x);

                        // Pack/unpack helpers used by icon bar buttons below

                        function packCrosshair(p) {
                            let parts = [];
                            if (p.hideCrosshair) parts.push("Hc1");
                            if (p.armColor && p.armColor.toLowerCase() !== "#ffffff") parts.push("Ac" + _ssbPackColor(p.armColor));
                            if (p.armBorder && p.armBorder.toLowerCase() !== "#000000") parts.push("Ab" + _ssbPackColor(p.armBorder));
                            if (p.armLength !== 0.75) parts.push("Al" + _ssbPackNum(p.armLength));
                            if (p.armWidth !== 0.3) parts.push("Aw" + _ssbPackNum(p.armWidth));
                            if (p.armOpacity !== 1) parts.push("Ao" + _ssbPackNum(p.armOpacity));
                            if (p.armRotation !== 0) parts.push("Ar" + _ssbPackNum(p.armRotation, 1));
                            if (p.armGap !== 0) parts.push("Ag" + _ssbPackNum(p.armGap, 1, 100));
                            if (p.armScale !== 1) parts.push("As" + _ssbPackNum(p.armScale));

                            if (p.hideDot) parts.push("Hd1");
                            if (p.dotShape && p.dotShape !== "dot") parts.push("Ds" + (p.dotShape === "plus" ? "p" : "s"));
                            if (p.dotColor && p.dotColor.toLowerCase() !== "#ffffff") parts.push("Dc" + _ssbPackColor(p.dotColor));
                            if (p.dotRound) parts.push("Dr1");
                            if (p.dotOpacity !== 1) parts.push("Do" + _ssbPackNum(p.dotOpacity));
                            if (p.dotPlusLen !== 8) parts.push("Pl" + _ssbPackNum(p.dotPlusLen, 1));
                            if (p.dotPlusWidth !== 2) parts.push("Pw" + _ssbPackNum(p.dotPlusWidth, 1));
                            if (p.dotScale !== 1) parts.push("Dz" + _ssbPackNum(p.dotScale));
                            if (p.plusScale !== 1) parts.push("Ps" + _ssbPackNum(p.plusScale));

                            if (p.staticColor && p.staticColor.toLowerCase() !== "#ffffff") parts.push("Sc" + _ssbPackColor(p.staticColor));
                            if (p.staticBorder && p.staticBorder.toLowerCase() !== "#000000") parts.push("Sb" + _ssbPackColor(p.staticBorder));
                            if (p.staticOpacity !== 1) parts.push("So" + _ssbPackNum(p.staticOpacity));
                            if (p.staticLength !== 0.75) parts.push("Sl" + _ssbPackNum(p.staticLength));
                            if (p.staticWidth !== 0.3) parts.push("Sw" + _ssbPackNum(p.staticWidth));
                            if (p.staticGap !== 3) parts.push("Sg" + _ssbPackNum(p.staticGap));
                            if (!p.staticOutlineEnabled) parts.push("Se0");
                            if (p.stillScale !== 1) parts.push("Ss" + _ssbPackNum(p.stillScale));

                            return "X-" + parts.join("");
                        }

                        function unpackCrosshair(code) {
                            if (!code) throw new Error("Invalid code format");

                            if (code.startsWith("X-")) {
                                let body = code.substring(2);
                                let p = Object.assign({}, B);
                                let regex = /([A-Z][a-z])([0-9a-z]*)/g;
                                let match;
                                while ((match = regex.exec(body)) !== null) {
                                    let key = match[1];
                                    let valStr = match[2];

                                    switch (key) {
                                        case "Hc": p.hideCrosshair = valStr === "1"; break;
                                        case "Ac": p.armColor = _ssbUnpackColor(valStr); break;
                                        case "Ab": p.armBorder = _ssbUnpackColor(valStr); break;
                                        case "Al": p.armLength = _ssbUnpackNum(valStr); break;
                                        case "Aw": p.armWidth = _ssbUnpackNum(valStr); break;
                                        case "Ao": p.armOpacity = _ssbUnpackNum(valStr); break;
                                        case "Ar": p.armRotation = _ssbUnpackNum(valStr, 1); break;
                                        case "Ag": p.armGap = _ssbUnpackNum(valStr, 1, 100); break;
                                        case "As": p.armScale = _ssbUnpackNum(valStr); break;

                                        case "Hd": p.hideDot = valStr === "1"; break;
                                        case "Ds": p.dotShape = valStr === "p" ? "plus" : valStr === "s" ? "still" : "dot"; break;
                                        case "Dc": p.dotColor = _ssbUnpackColor(valStr); break;
                                        case "Dr": p.dotRound = valStr === "1"; break;
                                        case "Do": p.dotOpacity = _ssbUnpackNum(valStr); break;
                                        case "Pl": p.dotPlusLen = _ssbUnpackNum(valStr, 1); break;
                                        case "Pw": p.dotPlusWidth = _ssbUnpackNum(valStr, 1); break;
                                        case "Dz": p.dotScale = _ssbUnpackNum(valStr); break;
                                        case "Ps": p.plusScale = _ssbUnpackNum(valStr); break;

                                        case "Sc": p.staticColor = _ssbUnpackColor(valStr); break;
                                        case "Sb": p.staticBorder = _ssbUnpackColor(valStr); break;
                                        case "So": p.staticOpacity = _ssbUnpackNum(valStr); break;
                                        case "Sl": p.staticLength = _ssbUnpackNum(valStr); break;
                                        case "Sw": p.staticWidth = _ssbUnpackNum(valStr); break;
                                        case "Sg": p.staticGap = _ssbUnpackNum(valStr); break;
                                        case "Se": p.staticOutlineEnabled = valStr !== "0"; break;
                                        case "Ss": p.stillScale = _ssbUnpackNum(valStr); break;
                                    }
                                }
                                return p;
                            }

                            if (!code.startsWith("SSB-")) {
                                try {
                                    let parsed = JSON.parse(atob(code.trim()));
                                    if (parsed && typeof parsed === "object") {
                                        return Object.assign({}, B, parsed);
                                    }
                                } catch (err) { }
                                throw new Error("Invalid code format");
                            }

                            let body = code.substring(4);
                            if (!body.includes(".")) {
                                try {
                                    let parsed = JSON.parse(atob(body));
                                    if (parsed && typeof parsed === "object") {
                                        return Object.assign({}, B, parsed);
                                    }
                                } catch (err) { }
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
                                    case "a": p.hideCrosshair = valStr === "1"; break;
                                    case "c": p.armColor = "#" + valStr; break;
                                    case "b": p.armBorder = "#" + valStr; break;
                                    case "l": p.armLength = parseFloat(valStr); break;
                                    case "w": p.armWidth = parseFloat(valStr); break;
                                    case "o": p.armOpacity = parseFloat(valStr); break;
                                    case "r": p.armRotation = parseInt(valStr, 10); break;
                                    case "g": p.armGap = parseInt(valStr, 10); break;
                                    case "s": p.armScale = parseFloat(valStr); break;

                                    case "h": p.hideDot = valStr === "1"; break;
                                    case "d": p.dotShape = valStr === "p" ? "plus" : valStr === "s" ? "still" : "dot"; break;
                                    case "x": p.dotColor = "#" + valStr; break;
                                    case "n": p.dotRound = valStr === "1"; break;
                                    case "p": p.dotOpacity = parseFloat(valStr); break;
                                    case "k": p.dotPlusLen = parseInt(valStr, 10); break;
                                    case "j": p.dotPlusWidth = parseInt(valStr, 10); break;
                                    case "z": p.dotScale = parseFloat(valStr); break;
                                    case "f": p.plusScale = parseFloat(valStr); break;

                                    case "q": p.staticColor = "#" + valStr; break;
                                    case "v": p.staticOpacity = parseFloat(valStr); break;
                                    case "e": p.staticLength = parseFloat(valStr); break;
                                    case "t": p.staticWidth = parseFloat(valStr); break;
                                    case "i": p.staticGap = parseFloat(valStr); break;
                                    case "m": p.staticOutlineEnabled = valStr !== "0"; break;
                                    case "ss": p.stillScale = parseFloat(valStr); break;
                                }
                            });
                            return p;
                        }

                        // Icon bar � compact horizontal toolbar replacing stacked buttons
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
                        function mkIB(ico, tip, cls) { let b = document.createElement("button"); b.className = "ch2-icon-btn" + (cls ? " " + cls : ""); b.title = tip; b.innerHTML = ibIcons[ico]; return b }
                        let btnSave = mkIB("save", "Save profile");
                        btnSave.addEventListener("click", () => { let e = z(), t = e || prompt("Profile name:"); t && t.trim() && (D(t.trim()), E(), y.value = t.trim(), ef("ui_click")) });
                        let btnSaveAs = mkIB("dup", "Duplicate / Save As");
                        btnSaveAs.addEventListener("click", () => { let e = prompt("Profile name:"); e && e.trim() && (D(e.trim()), E(), y.value = e.trim(), ef("ui_click")) });
                        let btnCopy = mkIB("exp", "Export code to clipboard");
                        btnCopy.addEventListener("click", () => { let e = y.value; if (!e) { alert("Select a profile first."); return } let t = N(); if (!t[e]) { alert("Profile not found."); return } let c = packCrosshair(t[e]); navigator.clipboard.writeText(c).then(() => alert("Copied!\n" + c)).catch(r => alert("Failed: " + r)); "function" == typeof ef && ef("ui_click") });
                        let btnImport = mkIB("imp", "Import code");
                        btnImport.addEventListener("click", () => { let e = prompt("Paste code (X- or SSB-):"); if (!e) return; e = e.trim(); if (!e.startsWith("X-") && !e.startsWith("SSB-")) { alert("Invalid code. Must start with X- or SSB-."); return } try { let t = unpackCrosshair(e), o = prompt("Profile name:", "Imported_" + Math.floor(1e3 * Math.random())); if (!o) return; let n = N(); if (n[o] && !confirm(`Overwrite "${o}"?`)) return; n[o] = t, M(n), E(), "function" == typeof ef && ef("ui_click"), alert(`Imported!`) } catch (i) { alert("Import failed: " + i.message) } });
                        let btnDel = mkIB("del", "Delete profile", "danger");
                        btnDel.addEventListener("click", () => { let e = y.value; e && confirm(`Delete "${e}"?`) && (function e(t) { let o = N(); return !!o[t] && (delete o[t], M(o), z() === t && O(""), !0) }(e), E(), ef("ui_click")) });
                        [btnSave, btnSaveAs, btnCopy, btnImport, btnDel].forEach(b => iconBar.appendChild(b));
                        profilesCard.appendChild(iconBar);
                        d.appendChild(profilesCard); l.appendChild(d);

                        // Right Column
                        let u = document.createElement("div");
                        u.className = "ch2-right-col";
                        let f = document.createElement("div");
                        f.className = "ch2-controls-container";
                        let g = document.createElement("div");
                        g.className = "ch2-disabled-msg", g.textContent = "Turn on Crosshair Customizer to change settings", g.style.cssText = "color: #216a80; font-style: italic; font-weight: 700; font-size: 14px; text-align: center; margin-top: 15px; padding: 22px 18px; border: 2px dashed rgba(33,106,128,0.45); border-radius: 10px; font-family: inherit; background: rgba(33,106,128,0.06); letter-spacing: 0.2px;";

                        // Enable Switch Card
                        let enableCard = document.createElement("div");
                        enableCard.className = "ch2-group-card";
                        let $ = () => {
                            if (window._ssbGalleryActive) return;
                            (rb => { A.enabled ? (f.style.display = "", g.style.display = "none", rb && rb.style.removeProperty("display")) : (f.style.display = "none", g.style.display = "", rb && rb.style.setProperty("display", "none", "important")) })(document.getElementById("ch2-reset-crosshair"))
                        };
                        let b = a("Enable Crosshair Customizer", "enabled", A, $);
                        b.style.marginBottom = "0px";
                        enableCard.appendChild(b);

                        // GALLERY WRAPPER
                        let galWrap = document.createElement("div");
                        galWrap.style.display = "none";
                        galWrap.className = "ch2-group-card";

                        let galHeader = document.createElement("div");
                        galHeader.className = "ch2-gallery-header";
                        let galTitle = document.createElement("div");
                        galTitle.className = "ch2-card-title";
                        galTitle.style.marginBottom = "0";
                        galTitle.textContent = "Saved Profiles";
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
                        galWrap.appendChild(galHeader);
                        galWrap.appendChild(galGrid);

                        window._ssbGalleryActive = false;
                        window._ssbToggleGallery = (show) => {
                            window._ssbGalleryActive = show;
                            let resetBtn = document.querySelector("#mod-crosshair-section .ch2-reset-btn");
                            let rightCol = document.querySelector("#mod-crosshair-section .ch2-right-col");
                            let leftCol = document.querySelector("#mod-crosshair-section .ch2-preview-col");
                            if (show) {
                                if (window._ssbGalleryDirty) { window._ssbGalleryDirty = !1; let _p = N(); window._ssbUpdateGallery(_p, Object.keys(_p), z() || "") }
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
                            }
                        };

                        window._ssbUpdateGallery = (savedProfiles, keys, activeVal) => {
                            galGrid.innerHTML = "";
                            keys.forEach(name => {
                                let card = document.createElement("div");
                                card.className = "ch2-gallery-card";
                                if (name === activeVal) card.classList.add("selected");

                                let o = savedProfiles[name];
                                let n = o.armLength * o.armScale, i = o.armWidth * o.armScale, aw = Math.min(.05 * o.armScale, .3 * i).toFixed(4);
                                let r = `position:absolute;transform-origin:50% top;top:0px;left:calc(-${(i / 2).toFixed(4)}em);width:${i}em;height:${n}em;background:${o.armColor};border:solid ${aw}em ${o.armBorder};opacity:${o.armOpacity};box-sizing:border-box;z-index:1;`;
                                let s = "";
                                if (!o.hideDot) {
                                    if ("still" === o.dotShape) {
                                        let l = o.staticOutlineEnabled ? `solid 0.05em ${o.staticBorder}` : "none";
                                        let d = `position:absolute;transform-origin:50% -${o.staticGap}px;top:${o.staticGap}px;left:calc(-${o.staticWidth / 2}em);width:${o.staticWidth}em;height:${o.staticLength}em;background:${o.staticColor};border:${l};opacity:${o.staticOpacity};box-sizing:border-box;`;
                                        s = `<div style="position:absolute;top:0;left:0;width:0;height:0;transform:scale(${o.stillScale});z-index:2;"><div style="${d}transform:rotate(0deg);"></div><div style="${d}transform:rotate(90deg);"></div><div style="${d}transform:rotate(180deg);"></div><div style="${d}transform:rotate(270deg);"></div></div>`;
                                    } else {
                                        s = "plus" === o.dotShape ? `<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(${o.plusScale});font-size: 24px;opacity:${o.dotOpacity};width:0;height:0;background:none;border:none;z-index:2;"><div style="position:absolute;background:${o.dotColor};top:50%;left:50%;width:${o.dotPlusWidth}px;height:${o.dotPlusLen}px;transform:translate(-50%,-50%) rotate(90deg);"></div><div style="position:absolute;background:${o.dotColor};top:50%;left:50%;width:${o.dotPlusWidth}px;height:${o.dotPlusLen}px;transform:translate(-50%,-50%);"></div></div>` : `<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(${o.dotScale});font-size: 24px;opacity:${o.dotOpacity};width:${o.armWidth}em;height:${o.armWidth}em;background:${o.dotColor};border:solid 0.05em ${o.armBorder};border-radius:${o.dotRound ? "100%" : "0"};z-index:2;"></div>`;
                                    }
                                }
                                let c = o.hideCrosshair ? "" : `<div style="${r}transform:rotate(0deg);"></div><div style="${r}transform:rotate(90deg);"></div><div style="${r}transform:rotate(180deg);"></div><div style="${r}transform:rotate(270deg);"></div>`;

                                // Auto-fit: clamp preview scale so big crosshairs don't fill the tile
                                let extPx = 10;
                                if (!o.hideCrosshair) extPx = Math.max(extPx, 2 * (n * 24 + (o.armGap || 0)));
                                if (!o.hideDot) {
                                    if ("still" === o.dotShape) extPx = Math.max(extPx, 2 * ((o.staticGap + o.staticLength * 24) * o.stillScale));
                                    else if ("plus" === o.dotShape) extPx = Math.max(extPx, 2 * o.dotPlusLen * o.plusScale);
                                    else extPx = Math.max(extPx, o.armWidth * 24 * o.dotScale);
                                }
                                let fit = Math.min(0.85, 92 / extPx);

                                let miniWrap = document.createElement("div");
                                miniWrap.className = "ch2-gallery-mini-preview";
                                miniWrap.innerHTML = `<div style="position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;overflow:hidden;"><div style="position:relative;width:0;height:0;font-size: 24px;transform:rotate(${o.armRotation}deg) scale(${fit.toFixed(3)});">${c}${s}</div></div>`;

                                let title = document.createElement("div");
                                title.className = "ch2-gallery-title";
                                title.textContent = name;

                                card.appendChild(miniWrap);
                                card.appendChild(title);
                                card.title = name;

                                if (name === activeVal) {
                                    let badge = document.createElement("div");
                                    badge.className = "ch2-gallery-badge";
                                    badge.innerHTML = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#0C576F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 13 9 18 20 6"/></svg>';
                                    card.appendChild(badge);
                                }

                                let actions = document.createElement("div");
                                actions.className = "ch2-gallery-actions";
                                let aExp = document.createElement("button");
                                aExp.className = "ch2-gallery-abtn";
                                aExp.title = "Export code";
                                aExp.innerHTML = '<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 1l6.2 6.8a.6.6 0 0 1-.44 1H14.5V15a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V8.8H6.24a.6.6 0 0 1-.44-1L12 1z"/><path d="M3 14.5h3v3.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3.5h3V19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-4.5z"/></svg>';
                                aExp.addEventListener("click", ev => {
                                    ev.stopPropagation();
                                    let prof = N()[name];
                                    if (!prof) { alert("Profile not found."); return }
                                    let code = packCrosshair(prof);
                                    navigator.clipboard.writeText(code).then(() => alert("Copied!\n" + code)).catch(r => alert("Failed: " + r));
                                    "function" == typeof ef && ef("ui_click");
                                });
                                let aDel = document.createElement("button");
                                aDel.className = "ch2-gallery-abtn danger";
                                aDel.title = "Delete profile";
                                aDel.innerHTML = '<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M9.3 1.5h5.4a1 1 0 0 1 .9.55L16.4 3.5H20a1.2 1.2 0 0 1 0 2.4H4a1.2 1.2 0 0 1 0-2.4h3.6l.8-1.45a1 1 0 0 1 .9-.55z"/><path d="M5 7.5h14l-1.1 12.4a2.5 2.5 0 0 1-2.5 2.3H8.6a2.5 2.5 0 0 1-2.5-2.3L5 7.5z"/></svg>';
                                aDel.addEventListener("click", ev => {
                                    ev.stopPropagation();
                                    if (!confirm(`Delete profile "${name}"?`)) return;
                                    let all = N();
                                    if (all[name]) { delete all[name]; M(all); z() === name && O(""); }
                                    E();
                                    "function" == typeof ef && ef("ui_click");
                                });
                                actions.appendChild(aExp);
                                actions.appendChild(aDel);
                                card.appendChild(actions);

                                card.addEventListener("click", () => {
                                    y.value = name;
                                    y.dispatchEvent(new Event("change"));
                                });
                                galGrid.appendChild(card);
                            });

                            // "Save current as new" tile
                            let newCard = document.createElement("div");
                            newCard.className = "ch2-gallery-new-card";
                            newCard.innerHTML = '<div class="ch2-gallery-new-plus"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round"><line x1="12" y1="4" x2="12" y2="20"/><line x1="4" y1="12" x2="20" y2="12"/></svg></div><div class="ch2-gallery-new-label">Create new</div>';
                            newCard.title = "Create a new profile with default crosshair settings";
                            newCard.addEventListener("click", () => {
                                let nm = prompt("New profile name:");
                                if (!nm || !nm.trim()) return;
                                nm = nm.trim();
                                let all = N();
                                if (all[nm] && !confirm(`Profile "${nm}" already exists. Overwrite?`)) return;
                                all[nm] = Object.assign({}, B);
                                M(all);
                                E();
                                y.value = nm;
                                y.dispatchEvent(new Event("change"));
                                "function" == typeof ef && ef("ui_click");
                            });
                            galGrid.appendChild(newCard);
                        };

                        // Populate gallery initially!
                        if (typeof N === "function") {
                            window._ssbUpdateGallery(N(), Object.keys(N()), typeof z === "function" ? z() || "" : "");
                        }

                        u.appendChild(galWrap);
                        u.appendChild(enableCard), u.appendChild(g), u.appendChild(f), $();

                        // Arms Configuration Card
                        let armsCard = document.createElement("div");
                        armsCard.className = "ch2-group-card";
                        let armsTitle = document.createElement("div");
                        armsTitle.className = "ch2-card-title";
                        armsTitle.textContent = "Arms";
                        armsCard.appendChild(armsTitle);
                        let armsBody = document.createElement("div");
                        armsBody.className = "ch2-collapse-body";
                        let j = a("Hide Arms", "hideCrosshair", A, () => {
                            armsBody.classList.toggle("collapsed", A.hideCrosshair);
                            if (!A.hideCrosshair) {
                                armsBody.style.maxHeight = armsBody.scrollHeight + "px";
                            }
                        });
                        j.style.marginBottom = "10px", armsCard.appendChild(j);
                        armsBody.appendChild(n("Color", "armColor", A));
                        armsBody.appendChild(n("Border", "armBorder", A));
                        armsBody.appendChild(i("Length", "armLength", A, 0, 3, .05));
                        armsBody.appendChild(i("Width", "armWidth", A, .05, 2, .05));
                        armsBody.appendChild(i("Opacity", "armOpacity", A, 0, 1, .01));
                        armsBody.appendChild(i("Rotation", "armRotation", A, 0, 360, 1));
                        armsBody.appendChild(i("Scale", "armScale", A, .1, 5, .05));
                        if (A.hideCrosshair) {
                            armsBody.classList.add("collapsed");
                        }
                        armsCard.appendChild(armsBody), f.appendChild(armsCard);

                        // Center Dot Configuration Card
                        let dotCard = document.createElement("div");
                        dotCard.className = "ch2-group-card";
                        let dotTitle = document.createElement("div");
                        dotTitle.className = "ch2-card-title";
                        dotTitle.textContent = "Center Dot";
                        dotCard.appendChild(dotTitle);
                        let dotBody = document.createElement("div");
                        dotBody.className = "ch2-collapse-body";
                        let W = a("Hide Center Dot", "hideDot", A, () => {
                            dotBody.classList.toggle("collapsed", A.hideDot);
                            if (!A.hideDot) {
                                dotBody.style.maxHeight = dotBody.scrollHeight + "px";
                            }
                        });
                        W.style.marginBottom = "10px", dotCard.appendChild(W);
                        let K = document.createElement("div");
                        K.className = "ch2-shape-row";
                        let U = {};
                        ["dot", "plus", "still"].forEach(e => {
                            let t = document.createElement("button");
                            t.className = "ch2-shape-btn" + (A.dotShape === e ? " active" : ""), t.textContent = e.charAt(0).toUpperCase() + e.slice(1), t.addEventListener("click", () => {
                                A.dotShape = e, F("dotShape", e), Object.values(U).forEach(e => e.classList.remove("active")), t.classList.add("active"), X.style.display = "dot" === e ? "" : "none", J.style.display = "plus" === e ? "" : "none", Q.style.display = "still" === e ? "" : "none", V.style.display = "still" === e ? "none" : "", Z.style.display = "still" === e ? "none" : "", G(), Y(), ef("ui_click")
                            }), U[e] = t, K.appendChild(t)
                        }), dotBody.appendChild(K);
                        let V = n("Color", "dotColor", A);
                        V.style.display = "still" === A.dotShape ? "none" : "", dotBody.appendChild(V);
                        let Z = i("Opacity", "dotOpacity", A, 0, 1, .01);
                        Z.style.display = "still" === A.dotShape ? "none" : "", dotBody.appendChild(Z);
                        let X = document.createElement("div");
                        X.style.display = "dot" === A.dotShape ? "" : "none", X.appendChild(a("Round (circle)", "dotRound", A)), X.appendChild(i("Scale", "dotScale", A, .1, 5, .05)), dotBody.appendChild(X);
                        let J = document.createElement("div");
                        J.style.display = "plus" === A.dotShape ? "" : "none", J.appendChild(i("Length", "dotPlusLen", A, 1, 40, 1)), J.appendChild(i("Width", "dotPlusWidth", A, 1, 10, 1)), J.appendChild(i("Scale", "plusScale", A, .1, 5, .05)), dotBody.appendChild(J);
                        let Q = document.createElement("div");
                        Q.style.display = "still" === A.dotShape ? "" : "none", Q.appendChild(n("Color", "staticColor", A)), Q.appendChild(i("Opacity", "staticOpacity", A, 0, 1, .01)), Q.appendChild(i("Length", "staticLength", A, 0, 3, .05)), Q.appendChild(i("Width", "staticWidth", A, .05, 2, .05)), Q.appendChild(i("Center Gap", "staticGap", A, 0, 20, 1)), Q.appendChild(i("Scale", "stillScale", A, .1, 5, .05));
                        let ee = n("Outline Color", "staticBorder", A);
                        ee.style.display = A.staticOutlineEnabled ? "" : "none", Q.appendChild(a("Outline", "staticOutlineEnabled", A, () => { ee.style.display = A.staticOutlineEnabled ? "" : "none", G(), Y() })), Q.appendChild(ee), dotBody.appendChild(Q);
                        if (A.hideDot) {
                            dotBody.classList.add("collapsed");
                        }
                        dotCard.appendChild(dotBody), f.appendChild(dotCard);

                        // Reset Crosshair Button
                        let et = document.createElement("button");
                        et.className = "ch2-reset-btn", et.id = "ch2-reset-crosshair", et.textContent = "Reset Crosshair", et.style.display = A.enabled ? "" : "none", et.addEventListener("click", () => {
                            confirm("Are you sure you want to reset all crosshair settings to default?") && (Object.keys(B).forEach(e => { "enabled" !== e && "hideCrosshair" !== e && (A[e] = B[e]) }), Object.keys(A).forEach(e => F(e, A[e])), t.innerHTML = "", e(), G())
                        }), A.enabled || et.style.setProperty("display", "none", "important"), u.appendChild(et), l.appendChild(u), t.appendChild(l), $(), Y(), new MutationObserver(() => { "none" !== t.style.display && Y() }).observe(t, { attributes: !0, attributeFilter: ["style"] });
                        let eo = document.getElementById("ch2-preview-wrap");
                        eo && window.IntersectionObserver && new IntersectionObserver(e => { e[0].isIntersecting && Y() }, { threshold: .01 }).observe(eo), setTimeout(Y, 250), setTimeout(Y, 800), setTimeout(Y, 2e3)
                    }(), setTimeout(V, 500); let eh = em.previousElementSibling; if (i.style.maxHeight = "500px", ep.style.maxHeight = "500px", eh && eh.children.length >= 3) { let eu = eh.firstElementChild.className.replace(/\b([a-zA-Z0-9_\-]*active|selected)\b/gi, "").trim(), e$ = null; function eb(e, t) { let o = document.createElement("div"); return o.id = e, o.className = eu, o.innerHTML = `<div class="mod-tab-label" style="font-family:inherit;font-size: 22px;font-weight:900;color:white;display:flex;align-items:center;justify-content:center;width:100%;height:100%;text-shadow:0 2px 4px rgba(0,0,0,0.3)">${t}</div>`, o } Array.from(eh.children).forEach(e => { let t = Array.from(e.classList).find(e => /active|selected/i.test(e)); t && (e$ = t) }); let ey = eb("mod-settings-tab", "MODS"), ex = eb("mod-crosshair-tab", "CROSSHAIR"); function ev() { em.classList.remove("mod-tab-active"), i.style.display = "none", ep.style.display = "none", [ey, ex].forEach(e => { e.className = eu, e$ && e.classList.remove(e$), e.classList.remove("mod-tab-is-active") }), Array.from(eh.children).forEach(e => e.classList.remove("mod-native-dim")) } function e_(e, t, o, n) { e.addEventListener("click", () => { var a; ev(), function e() { let t = em.nextElementSibling; for (; t && t.offsetHeight < 30;)t = t.nextElementSibling; let o = em.getBoundingClientRect().top, n = t ? t.getBoundingClientRect().top : window.innerHeight - 90, a = Math.max(150, n - o - 12) + "px"; i.style.maxHeight = a, ep.style.maxHeight = a }(), t.style.display = "block", a = e, em.classList.add("mod-tab-active"), Array.from(eh.children).forEach(e => { e !== ey && e !== ex && e.classList.add("mod-native-dim") }), [ey, ex].forEach(e => { e !== a && (e$ && e.classList.remove(e$), e.classList.remove("mod-tab-is-active")) }), a.classList.add(e$ || "active"), a.classList.add("mod-tab-is-active"), n && n(), localStorage.setItem("ch2-lastTab", o), ef("ui_toggletab") }) } eh.style.display = "flex", Array.from(eh.children).forEach(e => { e.style.flex = "1", e.addEventListener("click", () => ev()) }), e_(ey, i, "mods"), e_(ex, ep, "crosshair", Y), Array.from(eh.children).forEach(e => { e !== ey && e !== ex && e.addEventListener("click", () => localStorage.setItem("ch2-lastTab", "native")) }), eh.appendChild(ey), eh.appendChild(ex); let e0 = !1; function ew() { let e = localStorage.getItem("ch2-lastTab"); "crosshair" === e ? ex.click() : "mods" === e && ey.click(), e0 = !0 } window.IntersectionObserver && new IntersectionObserver(e => { e[0].isIntersecting && !e0 ? ew() : e[0].isIntersecting || (e0 = !1) }, { threshold: .01 }).observe(eh); let ek = new MutationObserver(() => { let e = eh.offsetWidth > 0 || eh.offsetHeight > 0; e && !e0 ? ew() : e || (e0 = !1) });[em, em.parentElement, em.parentElement && em.parentElement.parentElement].filter(Boolean).forEach(e => ek.observe(e, { attributes: !0, attributeFilter: ["style", "class"] })) } else t.appendChild(i), i.style.display = "block"; E()
                }()
            } catch (e) { alert("Script Error: " + e.message + "\nLine: " + e.lineNumber); console.error("injectGameSettings error:", e) } try { if (d.ui.showServerList) eG() || e5(); else { let t = document.querySelector(".mod-server-clone"); t && t.remove() } } catch (o) { console.error("injectServerSelector error:", o) }
        }
    }; function eG() { let e = document.querySelector(".photo-booth-map-section"); if (!e) return !1; let t = e.getBoundingClientRect(); return t.width > 0 && t.height > 0 } window._modObs = new MutationObserver(() => { window.__ssbPerf && window.__ssbPerf.mods++, clearTimeout(window._modObsT), window._modObsT = setTimeout(eW, 100) }), window._modObs.observe(document.body, { childList: !0, subtree: !0 }), setInterval(() => { let e = i(".mod-server-clone"); if (!d.ui.showServerList) { e && e.remove(); return } if (document.pointerLockElement) { e && e.remove(); return } if (eG()) { e && e.style.setProperty("display", "none", "important"); return } e && e.style.removeProperty("display"); try { e5() } catch (i) { console.error("server inject error", i) } let a = e || i(".mod-server-clone"); if (a) { let r = a.querySelector("h3"); r && "Server" !== r.textContent && (r.textContent = "Server"); let s = a.querySelector("p.game-mode-type") || a.querySelector("p[class*='game-mode']"); if (s) { let l = " " + eT(); (1 !== s.childNodes.length || !s.firstChild || s.firstChild.nodeType !== Node.TEXT_NODE || s.firstChild.textContent !== l) && (s.textContent = l), e2 = s.firstChild } } }, 1e3), document.addEventListener("pointerlockchange", () => { if (document.pointerLockElement) { window._modObs && window._modObs.disconnect(); d.ui.autoFullscreen && !document.fullscreenElement && document.documentElement.requestFullscreen?.().catch(() => { }) } else { window._modObs && window._modObs.observe(document.body, { childList: !0, subtree: !0 }); eW() } }); let eK = window.requestAnimationFrame.bind(window), eU = window.cancelAnimationFrame.bind(window), eY = 0, eV = new Map; window._msgPending = !1; let _ssbMC = new MessageChannel; let _ssbFB = []; let _ssbFlush = () => { window._msgPending = !1; if (eV.size === 0) return; let now = performance.now(), fns = _ssbFB, i = 0; for (let v of eV.values()) fns[i++] = v; eV.clear(); for (let n = 0; n < i; n++) { try { fns[n](now) } catch (e) { } } fns.length = 0 }; _ssbMC.port1.onmessage = _ssbFlush; function _installUncap() { if (window._ssbUncapInst) return; window._ssbUncapInst = 1; window.requestAnimationFrame = function (e) { if (d.hideFPS.uncap && !document.hidden && document.pointerLockElement) { let t = ++eY; eV.set(t, e); if (!window._msgPending) { window._msgPending = !0; _ssbMC.port2.postMessage(0) } return t } return eK(e) }, window.cancelAnimationFrame = function (e) { if (eV.has(e)) { eV.delete(e); return } return eU(e) } } d.hideFPS.uncap && _installUncap(); let initTooltip = () => { let tooltipEl = document.createElement("div"); tooltipEl.id = "ssb-global-tooltip"; tooltipEl.style.cssText = "position:fixed;display:none;z-index:9999999;background:#ffffff;color:#0C576F;padding:8px 12px;border-radius:8px;border:2px solid #2db8d4;font-family:'Nunito',system-ui,sans-serif;font-size:13px;font-weight:700;max-width:250px;box-shadow:0 4px 15px rgba(0,0,0,0.25);pointer-events:none;line-height:1.3;opacity:0;transition:opacity 0.12s cubic-bezier(0.4,0,0.2,1);"; document.body.appendChild(tooltipEl); document.body.addEventListener("mouseover", e => { let target = e.target.closest("[data-tooltip]"); if (!target) return; let text = target.getAttribute("data-tooltip"); if (!text) return; tooltipEl.textContent = text; tooltipEl.style.display = "block"; let rect = target.getBoundingClientRect(); let tooltipRect = tooltipEl.getBoundingClientRect(); let left = rect.left + (rect.width - tooltipRect.width) / 2; let top = rect.top - tooltipRect.height - 8; if (left < 10) left = 10; if (left + tooltipRect.width > window.innerWidth - 10) left = window.innerWidth - tooltipRect.width - 10; if (top < 10) top = rect.bottom + 8; tooltipEl.style.left = left + "px"; tooltipEl.style.top = top + "px"; tooltipEl.offsetHeight; tooltipEl.style.opacity = "1" }); document.body.addEventListener("mouseout", e => { let target = e.target.closest("[data-tooltip]"); if (!target) return; tooltipEl.style.opacity = "0"; let onTransitionEnd = () => { tooltipEl.style.opacity === "0" && (tooltipEl.style.display = "none"), tooltipEl.removeEventListener("transitionend", onTransitionEnd) }; tooltipEl.addEventListener("transitionend", onTransitionEnd) }) }; document.body ? initTooltip() : document.addEventListener("DOMContentLoaded", initTooltip)
}();




















// --- HARMONIZED UI AESTHETICS ---
(function () {
    if (!document.getElementById('harmonized-ui-overrides')) {
        const style = document.createElement('style');
        style.id = 'harmonized-ui-overrides';
        style.textContent = `
            /* Remove canvas focus outline (white ring on play) */
            #canvas, #canvas:focus, #canvas:focus-visible { outline: none !important; -webkit-tap-highlight-color: transparent !important; }
            /* Fix Mod Management Button Heights */
            /* Force the blue (ch2-profile-btn) and red (ch2-reset-btn) buttons to match */
            #mod-settings-section .ch2-profile-btn,
            #mod-settings-section .ch2-reset-btn,
            .ch2-profile-btn, .ch2-reset-btn, .mod-btn {
                height: 40px !important;
                font-size: 14px !important;
                box-sizing: border-box !important;
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
            }

            /* Profile buttons in the crosshair preview specifically should stay small! */
            #mod-crosshair-section .ch2-profile-btns .ch2-profile-btn,
            .ch2-profile-btns .ch2-profile-btn, .ch2-profile-btns .ch2-btn {
                height: 30px !important;
                font-size: 12px !important;
                padding: 0 10px !important;
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
            #mod-crosshair-section .ch2-preview-col .ch2-custom-select {
                margin-bottom: 24px !important;
            }
            #mod-crosshair-section .ch2-preview-col .ch2-custom-select-trigger {
                height: 51px !important;
                border-width: 2px !important;
                border-radius: 6px !important;
                padding: 0 10px !important;
            }
            #mod-crosshair-section .ch2-preview-col .ch2-custom-select-text {
                font-size: 14px !important;
            }
            /* Convert profile select dropdown to dropup to prevent cutting off at bottom */
            #mod-crosshair-section .ch2-preview-col .ch2-custom-select-options {
                top: auto !important;
                bottom: 100% !important;
                border-top: 2px solid #0E7697 !important;
                border-bottom: none !important;
                border-radius: 8px 8px 0 0 !important;
                box-shadow: 0 -8px 24px rgba(0,0,0,0.15) !important;
                max-height: 120px !important;
            }
            #mod-crosshair-section .ch2-preview-col .ch2-custom-select.open .ch2-custom-select-trigger {
                border-bottom-left-radius: 6px !important;
                border-bottom-right-radius: 6px !important;
                border-top-left-radius: 0 !important;
                border-top-right-radius: 0 !important;
            }
            #mod-crosshair-section .ch2-preview-col .ch2-custom-select-option {
                padding: 6px 10px !important;
                font-size: 13px !important;
            }
            #mod-crosshair-section .ch2-preview-col .ch2-icon-bar {
                margin-top: 6px !important;
                margin-bottom: 0px !important;
            }

            /* Gallery Styles */
            .ch2-gallery-grid {
                display: grid !important;
                grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)) !important;
                gap: 16px !important;
                padding: 12px 0 !important;
            }
            .ch2-gallery-card {
                background: #b5e8f7 !important;
                border: 2px solid transparent !important;
                border-radius: 10px !important;
                box-shadow: 0 4px 0 #80b8c8 !important;
                padding: 12px !important;
                cursor: pointer !important;
                transition: all 0.15s ease-in-out !important;
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
                gap: 10px !important;
            }
            .ch2-gallery-card:hover {
                background: #cbf2fc !important;
                box-shadow: 0 4px 0 #99cddc !important;
                transform: translateY(-2px) !important;
            }
            .ch2-gallery-card:active {
                transform: translateY(2px) !important;
                box-shadow: 0 1px 0 #80b8c8 !important;
            }
            .ch2-gallery-card {
                position: relative !important;
                overflow: visible !important;
            }
            .ch2-gallery-card.selected {
                background: #b5e8f7 !important;
                border: 2.5px solid #ffc900 !important;
                box-shadow: 0 4px 0 #80b8c8 !important;
            }
            .ch2-gallery-card.selected:hover {
                background: #cbf2fc !important;
                box-shadow: 0 4px 0 #99cddc !important;
                transform: translateY(-2px) !important;
            }
            .ch2-gallery-card.selected:active {
                transform: translateY(2px) !important;
                box-shadow: 0 1px 0 #80b8c8 !important;
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
            .ch2-gallery-card:hover .ch2-gallery-actions {
                opacity: 1 !important;
            }
            .ch2-gallery-abtn {
                width: 24px !important;
                height: 24px !important;
                border: none !important;
                border-radius: 6px !important;
                background: #0E7697 !important;
                box-shadow: 0 2px 0 #0C576F !important;
                color: #ffffff !important;
                cursor: pointer !important;
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
                padding: 0 !important;
                transition: all 0.1s ease !important;
            }
            .ch2-gallery-abtn:hover {
                background: #2db8d4 !important;
                transform: translateY(-1px) !important;
            }
            .ch2-gallery-abtn.danger {
                background: #d82727 !important;
                box-shadow: 0 2px 0 #901414 !important;
            }
            .ch2-gallery-abtn.danger:hover {
                background: #ec4343 !important;
            }
            .ch2-gallery-abtn svg { pointer-events: none !important; }
            .ch2-gallery-new-card {
                background: rgba(255,255,255,0.18) !important;
                border: 2.5px dashed #0E7697 !important;
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
                background: #ff9800 !important;
                box-shadow: 0 3px 0 #d35400 !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
            }
            .ch2-gallery-new-label {
                color: #0C576F !important;
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
                color: #0C576F !important;
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
                background: #0E7697 !important;
                border: none !important;
                outline: none !important;
                box-shadow: 0 3.5px 0 #0C576F !important;
                color: #ffffff !important;
                border-radius: 8px !important;
                padding: 6px 14px !important;
                font-size: 13px !important;
                font-weight: 800 !important;
                cursor: pointer !important;
                transition: all 0.1s !important;
            }
            .ch2-gallery-back-btn:hover {
                background: #2db8d4 !important;
                box-shadow: 0 3.5px 0 #1b7385 !important;
            }
            .ch2-gallery-back-btn:active {
                transform: translateY(2px) !important;
                box-shadow: 0 1px 0 #0C576F !important;
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
                background: #ff9800 !important;
                border: 4.5px solid #fff !important;
                box-sizing: border-box !important;
            }
            .mod-vol-slider::-moz-range-thumb {
                width: 21px !important;
                height: 21px !important;
                background: #ff9800 !important;
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

            /* General Section Titles */
            .ch2-section-title {
                font-family: "Sigmar One", sans-serif !important;
                font-size: 20px !important;
                color: #0C576F !important;
                text-transform: uppercase !important;
                margin-bottom: 10px !important;
                display: block;
            }

            .ch2-label { font-size: 14px !important; }
            .ch2-num, .ch2-hex {
                height: 30px !important;
                font-size: 14px !important;
                padding: 0 8px !important;
                border: 2px solid #0E7697 !important;
                border-radius: 6px !important;
            }
            .ch2-num { width: 60px !important; }
            .ch2-hex { width: 80px !important; }

            .ch2-custom-select-trigger {
                height: 40px !important;
                border: 3px solid #0E7697 !important;
                border-radius: 8px !important;
                background-color: #ffffff !important;
                padding: 0 12px !important;
                box-sizing: border-box !important;
            }
            .ch2-custom-select-text, .ch2-custom-select-option {
                color: #0C576F !important;
                font-size: 16px !important;
                font-weight: 700 !important;
                font-family: "Nunito", sans-serif !important;
            }
            .ch2-custom-select-option { padding: 10px 12px !important; }
            .ch2-custom-select-arrow { border-top-color: #0C576F !important; border-width: 6px 5px 0 5px !important; }

            .mod-mode-dropdown {
                height: 40px !important;
                width: 160px !important;
                border: 3px solid #0E7697 !important;
                border-radius: 8px !important;
                background-color: #ffffff !important;
                color: #0C576F !important;
                font-size: 16px !important;
                font-weight: 700 !important;
                font-family: "Nunito", sans-serif !important;
                padding: 0 12px !important;
                box-sizing: border-box !important;
                outline: none !important;
                appearance: none !important;
                -webkit-appearance: none !important;
                background-image: url('data:image/svg+xml;utf8,<svg fill="%230C576F" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>') !important;
                background-repeat: no-repeat !important;
                background-position-x: calc(100% - 8px) !important;
                background-position-y: 50% !important;
            }
            .mod-mode-dropdown option {
                color: #0C576F !important;
                font-size: 16px !important;
                font-weight: 700 !important;
                font-family: "Nunito", sans-serif !important;
            }
        `;
        (document.head || document.documentElement).appendChild(style);
    }

    let harmonizedDone = false;
    const observeHarmonizer = () => {
        if (!harmonizedDone && !document.pointerLockElement) {
            observer.observe(document.documentElement, { childList: true, subtree: true });
        }
    };
    const observer = new MutationObserver(() => {
        if (window.__ssbPerf) window.__ssbPerf.harm++;
        if (document.pointerLockElement) return; // skip all work while in a match
        // --- 1. MODS TAB LAYOUT FIXES ---
        const modeRow = document.getElementById('mod-mode-row');
        if (modeRow && !modeRow.hasAttribute('data-new-transformed')) {
            modeRow.setAttribute('data-new-transformed', 'true');

            // Set 'Advanced' mode as default by clicking the native advanced button if not already active
            const btns = modeRow.querySelector('.mod-mode-btns');
            if (btns) {
                const advBtn = btns.children[1];
                if (advBtn && !advBtn.classList.contains('active')) {
                    advBtn.click();
                }
            }

            // Hide the mode selector entirely from the UI
            modeRow.style.display = 'none';

            const searchRow = document.getElementById('mod-search-row');
            if (searchRow) {
                searchRow.style.cssText = "display: flex; flex-direction: column; align-items: flex-start; gap: 8px; margin-bottom: 0; background: transparent; border: none; padding: 0; width: 100%;";
                const sLabel = searchRow.querySelector('.mod-header');
                if (sLabel) sLabel.style.cssText = "font-family: 'Sigmar One', sans-serif !important; font-size: 24px !important; color: #0C576F !important; text-transform: uppercase !important; margin: 0 0 12px 0; font-weight: normal;";
                const sInput = searchRow.querySelector('input');
                if (sInput) sInput.style.cssText = "padding: 0 12px; height: 40px; border:3px solid #0E7697 !important; border-radius:8px; background:#ffffff !important; color:#0C576F !important; font-family:'Nunito', system-ui, sans-serif !important; font-size:16px; font-weight:700; outline:none; width: 100%; box-sizing: border-box;";
            }

            const parent = modeRow.parentElement;
            if (parent && searchRow) {
                const topBar = document.createElement('div');
                topBar.style.cssText = "display: flex; flex-direction: row; gap: 40px; margin-bottom: 20px; width: 100%; align-items: flex-end; padding-left: 0px; padding-right: 25px; padding-top: 15px; box-sizing: border-box;";
                parent.insertBefore(topBar, modeRow);
                topBar.appendChild(modeRow); // Keep in DOM for functional triggers but hidden
                topBar.appendChild(searchRow);
            }
            updateSearchVisibility();
            harmonizedDone = true;
            observer.disconnect();
        }

    });

    function updateSearchVisibility() {
        const searchRow = document.getElementById('mod-search-row');
        if (searchRow) {
            searchRow.style.visibility = 'visible';
            searchRow.style.display = 'flex';
        }
    }

    document.body.addEventListener('click', () => {
        const modeRow = document.getElementById('mod-mode-row');
        if (!modeRow || !modeRow.hasAttribute('data-new-transformed')) {
            harmonizedDone = false;
            observeHarmonizer();
        }
        setTimeout(updateSearchVisibility, 10);
    });
    observeHarmonizer();
    document.addEventListener('pointerlockchange', () => {
        if (document.pointerLockElement) observer.disconnect();
        else observeHarmonizer();
    });

    (function installVersionChangelog() {
        const installedVersion = (typeof GM_info !== "undefined" && GM_info.script && GM_info.script.version) ? GM_info.script.version : "4.9.5";
        const displayVersion = "4.9";
        // Keep the visible changelog on the v4.9 release notes even for patch
        // releases; the userscript @version still drives manager auto-updates.
        const changelogVersion = "4.9";
        const changelogKey = "ssb-better-ui-changelog-seen";
        const changelogItems = [
            { label: "Loading Fix", text: "Fixed a freeze where Uncap FPS could lock up the loading screen. It now engages only while you're in a match, so the game always loads and reloads cleanly." },
            { label: "Fresh Stats", text: "Entering a new game or a new round no longer shows kills from the previous one — stats reliably restart at 0 while leave-and-rejoin totals still carry over." },
            { label: "Every Kill Counts", text: "Melee and grenade kills now register in the tracker: it reads the game's complete kill counter instead of the partial one, so totals match the real scoreboard." },
            { label: "Every Game Counts", text: "Matches are no longer missing from Stats History: each round gets its own entry, revisited lobbies don't overwrite older results, and games save even when the server code can't be read." },
            { label: "Live Regions", text: "The server picker now mirrors the game's real region list, so retired regions (like US Central) no longer show a dead \"-\" ping and newly added regions appear automatically." },
            { label: "Update Prompt", text: "The \"update available\" notification no longer nags when you're already on the latest version." },
            { label: "Accurate Stats", text: "Same-named or blank-named players now get their own scoreboard rows instead of merging into one, impossible kill / death totals are fixed, and your stats carry over if you leave and rejoin the same match." },
            { label: "Stat Images", text: "Copy / Download of the stats panel now captures the whole panel in the game font, with no clipped columns or stretched layout." },
            { label: "Changelog", text: "Click the Shell Shockers Better HUD version at the bottom of MODS settings anytime to reopen these notes." },
            { label: "Stats History", text: "Stats History is now built into the mod, so you can revisit recent match results from the stats panel." },
            { label: "Hide Scope Frame", text: "New Gameplay option hides the scope frame while scoped for a clean full-screen scoped view, with scope state preserved and no frozen edges." },
            { label: "Low Textures", text: "New Low Texture Filtering option drops anisotropic/trilinear filtering for cheaper GPU sampling and extra FPS. Fully reversible." },
            { label: "Skins", text: "Skin loadouts are more reliable now, with better memory for recent choices and cleaner inventory filtering." },
            { label: "Adaptive UI", text: "The MODS and CROSSHAIR panels now scale to your resolution, so long settings pages stay usable on smaller screens and proportional on larger ones." },
            { label: "Favorites Controls", text: "Export and import favorite inventory items with a shareable code; the buttons stay aligned beside the egg-color picker and scale with your resolution." },
            { label: "Stats Fixes", text: "Stat screenshots now use the game font with corrected spacing/sizes, long stats panels scroll properly, duplicate empty 0 / 0 rows are removed, and the live match timer ticks again." },
            { label: "Settings Fixes", text: "Imported/reset settings save correctly, FOV black bars automatically enable the matching scope helpers when needed, and the server-picker arrow no longer sticks." }
        ];
        const changelogHistory = [
            { version: displayVersion, intro: "Here's what's new in this release:", items: changelogItems },
            {
                version: "4.8.5",
                intro: "Previously in v4.8.5:",
                items: [
                    { label: "Update Check", text: "Better HUD checks for a new version each time Shell Shockers loads and shows a one-click update prompt." },
                    { label: "Scope Fix", text: "FOV black bars switch off while scoped, so scoped guns render cleanly." },
                    { label: "Auto-Update", text: "Tampermonkey/Violentmonkey can detect future releases from GitHub instead of requiring manual copy/paste installs." },
                    { label: "Changelog", text: "New versions show a one-time what-changed panel when Shell Shockers opens." },
                    { label: "Profiles", text: "Crosshair Profiles got a compact icon bar, custom SVG icons, and a cleaner profile gallery." },
                    { label: "Legacy", text: "Legacy Skins and Legacy Sounds restore classic gun models and SFX live without a reload." },
                    { label: "FOV", text: "FOV (Black Bars) widens horizontal field of view with in-game letterboxing, without image distortion." },
                    { label: "Skins", text: "Skin handling was reworked and streamlined." },
                    { label: "Performance", text: "Restored frustum culling, gated heavier hooks behind their settings, paused non-essential work during matches, and removed duplicate legacy audio loading." },
                    { label: "Fixes", text: "Fixed match stats getting stuck at 0, can't-move-on-spawn after tab-out, and uneven crosshair arms after resize." }
                ]
            },
            {
                version: "4.8.2",
                intro: "Previously in v4.8:",
                items: [
                    { label: "Auto-Update", text: "Tampermonkey/Violentmonkey update support was added through GitHub." },
                    { label: "Changelog", text: "The one-time in-game update changelog was introduced." },
                    { label: "Profiles", text: "Crosshair Profiles were redesigned with save, duplicate, export, import, and delete controls plus a gallery view." },
                    { label: "Legacy", text: "Legacy Skins and Legacy Sounds became live settings." },
                    { label: "FOV", text: "FOV (Black Bars) was added for wider horizontal view with letterboxing and no image stretch." },
                    { label: "Skins", text: "Skin tools were cleaned up and simplified." },
                    { label: "Performance", text: "Performance work restored frustum culling, gated optional hooks, paused non-essential work in matches, and removed duplicate audio loading." },
                    { label: "Fixes", text: "Fixed stuck match stats, spawn movement after tab-out, and crosshair resize issues." }
                ]
            }
        ];

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
            } catch (err) { }
        }

        function showChangelog(forceOpen = false) {
            if ((!forceOpen && hasSeenChangelog()) || document.getElementById("ssb-changelog-overlay")) return false;
            if (document.pointerLockElement) return false;

            const style = document.createElement("style");
            style.id = "ssb-changelog-style";
            style.textContent = `
                #ssb-changelog-overlay {
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
                    background: #8ED9E8;
                    border: 4px solid #0E7697;
                    border-radius: 8px;
                    box-shadow: 0 18px 42px rgba(0, 0, 0, 0.36);
                    color: #0C576F;
                    box-sizing: border-box;
                }
                #ssb-changelog-panel .ssb-changelog-head {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 16px;
                    padding: 18px 22px 16px;
                    background: #1196B8;
                    border-bottom: 4px solid #0E7697;
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
                    background: #FF981F;
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
                    border: 3px solid #0E7697;
                    border-radius: 8px;
                    background: #ffffff;
                    color: #0C576F;
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
                    color: #0E7697;
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
                #ssb-changelog-panel .ssb-changelog-foot {
                    padding: 12px 18px 18px;
                    background: rgba(255, 255, 255, 0.18);
                    border-top: 2px solid rgba(14, 118, 151, 0.22);
                }
                #ssb-changelog-panel button {
                    width: 100%;
                    height: 46px;
                    border: 3px solid #0E7697;
                    border-radius: 8px;
                    background: #ffffff;
                    color: #0C576F;
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
                list.innerHTML = release.items.map(item => `
                    <div class="ssb-changelog-item">
                        <span class="ssb-changelog-tag">${item.label}</span>
                        <p class="ssb-changelog-text">${item.text}</p>
                    </div>
                `).join("");
            }
            selector.addEventListener("change", () => {
                renderRelease(parseInt(selector.value, 10) || 0);
                if (typeof ef === "function") ef("ui_onchange");
            });
            renderRelease(0);

            overlay.querySelector("button").addEventListener("click", () => {
                markChangelogSeen();
                overlay.remove();
            });

            (document.head || document.documentElement).appendChild(style);
            document.body.appendChild(overlay);
            if (typeof ef === "function") ef("ui_popupopen");
            return true;
        }

        function installFooterChangelogLink() {
            if (!document.getElementById("ssb-changelog-link-style")) {
                const style = document.createElement("style");
                style.id = "ssb-changelog-link-style";
                style.textContent = `
                    #mod-settings-footer span:first-child {
                        cursor: pointer;
                        text-decoration: underline;
                        text-underline-offset: 3px;
                    }
                    #mod-settings-footer span:first-child:hover {
                        color: #0E7697;
                    }
                `;
                (document.head || document.documentElement).appendChild(style);
            }

            function getFooterVersion(target) {
                const el = target && target.closest ? target.closest("#mod-settings-footer span:first-child") : null;
                if (!el || !/Shell Shockers Better (UI|HUD)/i.test(el.textContent || "")) return null;
                return el;
            }

            function decorateFooter() {
                const footerVersion = document.querySelector("#mod-settings-footer span:first-child");
                if (!footerVersion) return;
                const versionLabel = "Shell Shockers Better HUD v" + displayVersion;
                if (footerVersion.textContent !== versionLabel) footerVersion.textContent = versionLabel;
                if (footerVersion.getAttribute("role") !== "button") {
                    footerVersion.setAttribute("role", "button");
                    footerVersion.setAttribute("tabindex", "0");
                    footerVersion.setAttribute("data-tooltip", "Open the Better HUD changelog.");
                }
            }

            document.addEventListener("click", event => {
                if (!getFooterVersion(event.target)) return;
                event.preventDefault();
                event.stopPropagation();
                showChangelog(true);
            }, true);

            document.addEventListener("keydown", event => {
                if (event.key !== "Enter" && event.key !== " ") return;
                if (!getFooterVersion(event.target)) return;
                event.preventDefault();
                showChangelog(true);
            }, true);

            if (document.documentElement) {
                const observer = new MutationObserver(decorateFooter);
                // Watch only outside matches: every killfeed/chat mutation would
                // otherwise run the footer lookup for the whole match.
                const syncFooterObserver = () => {
                    if (document.pointerLockElement) observer.disconnect();
                    else observer.observe(document.documentElement, { childList: true, subtree: true });
                };
                document.addEventListener("pointerlockchange", syncFooterObserver);
                syncFooterObserver();
            }
            decorateFooter();
        }

        function scheduleChangelog() {
            if (hasSeenChangelog()) return;
            const run = () => setTimeout(showChangelog, 1200);
            if (document.body) run();
            else document.addEventListener("DOMContentLoaded", run, { once: true });
        }

        document.addEventListener("pointerlockchange", () => {
            if (!document.pointerLockElement) scheduleChangelog();
        });
        installFooterChangelogLink();
        scheduleChangelog();
    })();

    (function ssbUpdateChecker() {
        const META_URL = "https://raw.githubusercontent.com/Virojet/Shell-Shockers-Better-Hud-Mod/main/Shell-Shockers-Better-Hud.meta.js";
        const DOWNLOAD_URL = "https://raw.githubusercontent.com/Virojet/Shell-Shockers-Better-Hud-Mod/main/Shell-Shockers-Better-Hud.user.js";
        const installed = (typeof GM_info !== "undefined" && GM_info.script && GM_info.script.version) ? GM_info.script.version : null;
        if (!installed) return;

        function isNewer(remote, local) {
            const a = String(remote).split("."), b = String(local).split(".");
            for (let i = 0; i < Math.max(a.length, b.length); i++) {
                const x = parseInt(a[i] || "0", 10), y = parseInt(b[i] || "0", 10);
                if (x > y) return true;
                if (x < y) return false;
            }
            return false;
        }

        function showToast(remote) {
            if (document.getElementById("ssb-update-toast")) return;
            const el = document.createElement("div");
            el.id = "ssb-update-toast";
            el.style.cssText = "position:fixed;top:14px;right:14px;z-index:2147483647;background:#8ED9E8;border:3px solid #0E7697;border-radius:10px;color:#0C576F;font-family:'Nunito',system-ui,sans-serif;padding:12px 14px 11px;box-shadow:0 12px 32px rgba(0,0,0,.4);max-width:300px;";
            el.innerHTML = '<div style="font-size:14px;font-weight:800;margin-bottom:9px;">Better HUD <b>v' + remote + '</b> is available.</div>';
            const btn = document.createElement("a");
            btn.href = DOWNLOAD_URL;
            btn.target = "_blank";
            btn.rel = "noopener";
            btn.textContent = "Update now";
            btn.style.cssText = "display:inline-block;background:#FF981F;color:#fff;text-decoration:none;padding:7px 15px;border-radius:8px;font-weight:900;font-size:13px;box-shadow:inset 0 -3px 0 rgba(0,0,0,.16);margin-right:10px;";
            const dismiss = () => { try { localStorage.setItem("ssb-update-dismissed", remote); } catch (e) { } };
            btn.addEventListener("click", dismiss);
            const later = document.createElement("span");
            later.textContent = "Later";
            later.style.cssText = "cursor:pointer;font-size:12px;font-weight:700;opacity:.75;";
            later.onclick = () => { dismiss(); el.remove(); };
            el.appendChild(btn);
            el.appendChild(later);
            (document.body || document.documentElement).appendChild(el);
        }

        function lsGet(k) { try { return localStorage.getItem(k) || ""; } catch (e) { return ""; } }
        function check() {
            fetch(META_URL + "?_=" + Date.now()).then(r => r.text()).then(txt => {
                const m = txt.match(/@version\s+([0-9.]+)/);
                if (!m) return;
                const remote = m[1];
                // Only nag for a genuinely newer version, and never for one the user
                // has already run+acknowledged (its changelog was dismissed) or already
                // dismissed this toast for — stops "update available for the version you
                // already have" across reloads and lagging manager states.
                if (!isNewer(remote, installed)) return;
                const seen = lsGet("ssb-better-ui-changelog-seen");
                if (seen && !isNewer(remote, seen)) return;
                if (lsGet("ssb-update-dismissed") === remote) return;
                showToast(remote);
            }).catch(() => { });
        }

        if (document.body) check();
        else window.addEventListener("DOMContentLoaded", check);
    })();

})();

/* =======================================================================
 *  BETTER HUD — Hide Scope Frame (add-on module)
 *  -----------------------------------------------------------------------
 *  Adds Settings ▸ MODS ▸ Gameplay Settings ▸ "Hide Scope Frame".
 *  Hides Shell Shockers' #scopeBorder overlay so scoped weapons do not show
 *  the black frame/mask around the view.
 * ===================================================================== */
(function () {
  "use strict";

  const KEY = "tp-hideScopeFrame";
  const STYLE_ID = "ssb-hide-scope-frame-style";

  let _on = false; // cached on-state so the per-frame render hook never touches localStorage
  const readOn = () => {
    try { _on = JSON.parse(localStorage.getItem(KEY) || "false") === true; }
    catch (e) { _on = false; }
    return _on;
  };
  const writeOn = (on) => {
    try { localStorage.setItem(KEY, JSON.stringify(!!on)); } catch (e) {}
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

  // --- Keep the whole screen live while scoped -----------------------
  // Verified live (2026-06-30): scoping does NOT touch scene.activeCamera —
  // it shrinks the WORLD camera's viewport (one of scene.activeCameras) to a
  // centered strip ~[0.155, 0, 0.69, 1]. The game then only renders the world
  // inside that strip; everything outside keeps its last frame, which shows
  // through as "frozen" once #scopeBorder is hidden. Fix: each rendered frame,
  // expand any camera whose viewport has been shrunk to a sub-rect back to
  // full. Babylon recomputes the camera aspect from the viewport, so the
  // zoomed view fills the screen with no stretch. We never touch the scope
  // LOGIC, so the "scoped" state — and the faster bloom/accuracy that comes
  // with it — is preserved exactly as before. (No-op when not scoped, since
  // the viewports are already full then.)
  let _vpScene = null;
  function expandCamArr(arr) {
    if (!arr) return;
    for (let i = 0; i < arr.length; i++) {
      const v = arr[i] && arr[i].viewport;
      if (v && (v.x > 0.001 || v.y > 0.001 || v.width < 0.999 || v.height < 0.999)) {
        v.x = 0; v.y = 0; v.width = 1; v.height = 1;
      }
    }
  }
  function expandScopeViewports() {
    try {
      const s = window.P && window.P.scene;
      if (!s) return;
      expandCamArr(s.activeCameras);
      expandCamArr(s.cameras);
    } catch (e) {}
  }
  // Re-assert full viewports every rendered frame (the game re-shrinks them
  // each frame while scoped). Re-hooks automatically when the scene rebuilds.
  function installViewportHook() {
    const s = window.P && window.P.scene;
    if (!s || !s.onBeforeRenderObservable || _vpScene === s) return;
    _vpScene = s;
    try { s.onBeforeRenderObservable.add(() => { if (_on) expandScopeViewports(); }); } catch (e) {}
  }

  function applyScopeFrame() {
    installViewportHook();
    const on = readOn();
    // Keep #scopeBorder itself DISPLAYED (just transparent + non-interactive)
    // so other features that detect scoping via its display still work (e.g.
    // FOV Stretch). Only its children — the actual mask/frame graphics — are
    // hidden, so the frame disappears without breaking scope detection.
    styleEl(STYLE_ID).textContent = on
      ? "#scopeBorder{background:transparent!important;border:0!important;box-shadow:none!important;pointer-events:none!important;}#scopeBorder *{visibility:hidden!important;opacity:0!important;background:transparent!important;border:0!important;box-shadow:none!important;}"
      : "";
    if (on) expandScopeViewports();
  }

  function makeToggle(grid) {
    if (!grid || grid.querySelector(".ssb-hide-scope-frame-toggle")) return;
    const row = document.createElement("label");
    row.className = "mod-item mod-advanced-only ssb-hide-scope-frame-toggle";
    row.setAttribute("data-tooltip", "Hide the full scope overlay/frame while scoped.");
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.tabIndex = -1;
    cb.checked = readOn();
    const box = document.createElement("span");
    box.className = "mod-box";
    const label = document.createElement("span");
    label.className = "mod-label";
    label.textContent = "Hide Scope Frame";

    cb.addEventListener("change", () => {
      writeOn(cb.checked);
      applyScopeFrame();
      try { window.BAWK && window.BAWK.play && window.BAWK.play("ui_click"); } catch (e) {}
    });
    row.addEventListener("click", (e) => {
      e.preventDefault();
      cb.checked = !cb.checked;
      cb.dispatchEvent(new Event("change"));
    });

    row.appendChild(cb);
    row.appendChild(box);
    row.appendChild(label);
    // Place directly after "Hide Scope Lines" (above Legacy Skins/Sounds)
    // instead of at the end of the grid.
    const scopeLines = Array.from(grid.querySelectorAll(".mod-item")).find((it) => {
      const l = it.querySelector(".mod-label");
      return l && (l.textContent || "").trim() === "Hide Scope Lines";
    });
    if (scopeLines) scopeLines.insertAdjacentElement("afterend", row);
    else grid.appendChild(row);
  }

  function injectToggle() {
    document.querySelectorAll(".mod-header").forEach((h) => {
      if ((h.textContent || "").trim() === "Gameplay Settings") makeToggle(h.nextElementSibling);
    });
  }

  function boot() {
    applyScopeFrame();
    injectToggle();
    setInterval(() => {
      // Settings UI can't be open while pointer-locked, and applyScopeFrame is
      // re-synced on every pointerlockchange below, so the tick can sleep mid-match.
      if (document.pointerLockElement) return;
      injectToggle();
      applyScopeFrame();
    }, 700);
    document.addEventListener("pointerlockchange", () => setTimeout(applyScopeFrame, 0), true);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();

/* =======================================================================
 *  BETTER HUD — Inventory Favorites + Skin Memory  (add-on module)
 *  -----------------------------------------------------------------------
 *  Settings ▸ MODS ▸ Mod HUD Widgets:
 *    • "Show Favorites Icon" — a ★ button on each inventory item to favorite it.
 *    • "Only Show Favorites" — filter the inventory grid to starred items.
 *  Skin memory: while the Skin Unlocker ("toggle skins") is ON, the loadout
 *  you're wearing is remembered and re-applied on reload (the game reverts
 *  unowned skins to default otherwise). Self-contained; only appends DOM.
 * ===================================================================== */
(function () {
    "use strict";

    const SLOTS = ["3", "4", "7", "6", "1", "2"];
    const LS = {
        showFav: "tp-showFavIcon",
        favFilter: "tp-favOnly",
        favs: "tp-favItems",
        skinCache: "tp-lastSkinCache",
    };

    const readJSON = (k, fb) => { try { const v = localStorage.getItem(k); return v === null ? fb : JSON.parse(v); } catch (e) { return fb; } };
    const writeJSON = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } };
    const showFavIcon = () => readJSON(LS.showFav, false) === true;
    const setShowFavIcon = (v) => writeJSON(LS.showFav, !!v);
    const favOnly = () => readJSON(LS.favFilter, false) === true;
    const setFavOnly = (v) => writeJSON(LS.favFilter, !!v);
    const getFavs = () => new Set(readJSON(LS.favs, []));
    const setFavs = (s) => writeJSON(LS.favs, [...s]);
    const isFav = (id) => getFavs().has(id);
    const toggleFav = (id) => { const s = getFavs(); s.has(id) ? s.delete(id) : s.add(id); setFavs(s); return s.has(id); };
    // The Skin Unlocker ("toggle skins") setting — read the persisted value,
    // not window.__ssbSkinUnlocker (which we flip during equips).
    const skinUnlockerOn = () => { try { return JSON.parse(localStorage.getItem("tp-skinUnlocker") || "false") === true; } catch (e) { return false; } };

    function gameReady() {
        return !!(window.extern && window.extern.catalog &&
            typeof window.extern.getEquippedItems === "function" &&
            window.vueApp && window.vueApp.$refs && window.vueApp.$refs.equipScreen);
    }
    function whenReady(cb) { if (gameReady()) return cb(); const iv = setInterval(() => { if (gameReady()) { clearInterval(iv); cb(); } }, 400); }
    function lobbyReady() {
        if (document.pointerLockElement) return false;
        const icons = Array.from(document.querySelectorAll("#weapon_select .weapon_img"));
        if (icons.length < 2) return false;
        return icons.some((el) => {
            const r = el.getBoundingClientRect();
            return r.width > 8 && r.height > 8;
        });
    }
    function poseEquippedItems() {
        try {
            const es = window.vueApp && window.vueApp.$refs && window.vueApp.$refs.equipScreen;
            if (es && typeof es.poseEquippedItems === "function") es.poseEquippedItems();
        } catch (e) { }
    }
    function whenLobbyReady(cb) {
        if (lobbyReady()) return cb();
        const started = Date.now();
        const iv = setInterval(() => {
            if (lobbyReady()) {
                clearInterval(iv);
                cb();
            } else if (Date.now() - started > 20000) {
                clearInterval(iv);
                restoringSkinCache = false;
            }
        }, 150);
    }

    /* ---- skin-restore preview mask: blur the 3D preview until the skin has painted, so the
           default weapon model is never visibly shown flipping to the unlocked skin ---- */
    let _skinMaskOn = false, _skinMaskReveal = null, _skinMaskHardCap = null;
    function showSkinMask() {
        if (document.pointerLockElement) return;            // never blur during gameplay
        if (_skinMaskReveal) { clearTimeout(_skinMaskReveal); _skinMaskReveal = null; }
        if (!_skinMaskOn) {
            _skinMaskOn = true;
            let st = document.getElementById("ssb-skin-mask");
            if (!st) { st = document.createElement("style"); st.id = "ssb-skin-mask"; (document.head || document.documentElement).appendChild(st); }
            st.textContent = "#canvas{filter:blur(16px) brightness(.9)!important;transition:filter .18s ease-out!important;}";
        }
        if (_skinMaskHardCap) clearTimeout(_skinMaskHardCap);
        _skinMaskHardCap = setTimeout(hideSkinMask, 6000);  // absolute safety reveal
    }
    function hideSkinMask() {
        if (_skinMaskReveal) { clearTimeout(_skinMaskReveal); _skinMaskReveal = null; }
        if (_skinMaskHardCap) { clearTimeout(_skinMaskHardCap); _skinMaskHardCap = null; }
        _skinMaskOn = false;
        const st = document.getElementById("ssb-skin-mask");
        if (st) st.remove();
    }
    function revealSkinMaskSoon(ms) {
        if (_skinMaskReveal) clearTimeout(_skinMaskReveal);
        _skinMaskReveal = setTimeout(hideSkinMask, ms);
    }
    document.addEventListener("pointerlockchange", () => { if (document.pointerLockElement) hideSkinMask(); });

    /* ---- inventory detection (handles the game's duplicate hidden #item_grid) ---- */
    function visibleGrid() {
        const grids = document.querySelectorAll("#item_grid, .equip_grid");
        for (const g of grids) { const r = g.getBoundingClientRect(); if (r.width > 4 && r.height > 4) return g; }
        return null;
    }
    function inInventory() { return !!visibleGrid(); }
    function gridItems() { try { const es = window.vueApp.$refs.equipScreen; return (es && es.equip && es.equip.showingItems) || []; } catch (e) { return []; } }
    function refreshGrid() { try { const es = window.vueApp.$refs.equipScreen; if (es && es.equip && es.populateItemGridWithType) es.populateItemGridWithType(es.equip.selectedItemType); } catch (e) { } }

    // Bug fix: with the Skin Unlocker ON, typing in the inventory's native item
    // search filters the grid, but CLEARING the search makes the game repopulate
    // from OWNED items only — so every unlocked skin vanishes (empty "SOLD OUT"
    // grid). When the search box is emptied, rebuild the full unlocked grid for
    // the current category. Only active while the unlocker is on + in inventory,
    // so the native behaviour is untouched otherwise.
    function installSearchFix() {
        let input = null;
        const inputs = document.querySelectorAll("input");
        for (const el of inputs) { if (/search name/i.test(el.placeholder || "")) { input = el; break; } }
        if (!input || input.__ssbSearchFix) return;
        input.__ssbSearchFix = true;
        input.addEventListener("input", () => {
            if (!skinUnlockerOn()) return;                 // native handles it when unlocker is off
            if ((input.value || "").trim() !== "") return; // only when the search is cleared
            if (!inInventory()) return;
            refreshGrid();                                 // rebuild now…
            setTimeout(refreshGrid, 120);                  // …and again after the game's own clear handler runs
        });
    }

    /* ---- latest skin cache ---- */
    function currentLoadout() {
        const out = {};
        try { const eq = window.extern.getEquippedItems() || {}; SLOTS.forEach((t) => { if (eq[t] && eq[t].id != null) out[t] = eq[t].id; }); } catch (e) { }
        return out;
    }
    function isLoadoutMap(v) {
        return !!(v && typeof v === "object" && !Array.isArray(v) && SLOTS.some((t) => v[t] != null));
    }
    function emptySkinCache() {
        return { current: null, byPrimary: {}, byClass: {} };
    }
    function normalizeSkinCache(raw) {
        const c = emptySkinCache();
        if (isLoadoutMap(raw)) {
            c.current = Object.assign({}, raw);
            return c;
        }
        if (!raw || typeof raw !== "object" || Array.isArray(raw)) return c;
        c.current = isLoadoutMap(raw.current) ? Object.assign({}, raw.current) : null;
        c.byPrimary = raw.byPrimary && typeof raw.byPrimary === "object" && !Array.isArray(raw.byPrimary) ? raw.byPrimary : {};
        c.byClass = raw.byClass && typeof raw.byClass === "object" && !Array.isArray(raw.byClass) ? raw.byClass : {};
        return c;
    }
    function primaryClassIndex(primaryId) {
        try {
            const fc = window.extern && window.extern.catalog && window.extern.catalog.forClass;
            if (!fc || primaryId == null) return "";
            for (let i = 0; i < fc.length; i++) {
                const ps = fc[i] && fc[i].primaryWeapons;
                if (ps && ps.some((it) => it && it.id === primaryId)) return String(i);
            }
        } catch (e) { }
        return "";
    }
    function itemIsDefault(id) {
        try {
            const it = window.extern && window.extern.catalog && window.extern.catalog.findItemById(id);
            return !it || it.unlock === "default";
        } catch (e) { return false; }
    }
    function loadoutHasCustomWeapon(map) {
        return !!(map && ((map["3"] != null && !itemIsDefault(map["3"])) || (map["4"] != null && !itemIsDefault(map["4"]))));
    }
    function cacheSkinMap(map) {
        if (!isLoadoutMap(map)) return null;
        const c = normalizeSkinCache(readJSON(LS.skinCache, null));
        const copy = Object.assign({}, map);
        const hasCustomWeapon = loadoutHasCustomWeapon(copy);
        if (hasCustomWeapon || !isLoadoutMap(c.current)) c.current = copy;
        if (copy["3"] != null) {
            if (hasCustomWeapon || !c.byPrimary[String(copy["3"])]) c.byPrimary[String(copy["3"])] = copy;
            const cls = primaryClassIndex(copy["3"]);
            if (cls !== "" && (hasCustomWeapon || !c.byClass[cls])) c.byClass[cls] = copy;
        }
        writeJSON(LS.skinCache, c);
        if (hasCustomWeapon || !activeLatestSkinMap) activeLatestSkinMap = copy;
        return c;
    }
    function cacheCurrentSkin() {
        if (restoringSkinCache) return null;
        if (!skinUnlockerOn() || !gameReady()) return null;
        const cur = currentLoadout();
        return Object.keys(cur).length ? cacheSkinMap(cur) : null;
    }
    function loadoutApplied(map) {
        try { const eq = window.extern.getEquippedItems() || {}; return SLOTS.every((t) => map[t] == null || (eq[t] && eq[t].id) === map[t]); }
        catch (e) { return false; }
    }
    function slotApplied(map, slot) {
        try { const eq = window.extern.getEquippedItems() || {}; return map && map[slot] != null && eq[slot] && eq[slot].id === map[slot]; }
        catch (e) { return false; }
    }
    function tryEquipSlot(cat, slot, id) {
        const it = cat.findItemById(id);
        if (!it) return false;
        try { window.extern.tryEquipItem(it, Number(slot)); } catch (e) { }
        try { window.extern.tryEquipItem(it, it.item_type_id || Number(slot)); } catch (e) { }
        return true;
    }
    function applyCachedSkin(map, onlyPrimary) {
        if (!skinUnlockerOn() || !map || !window.extern || !window.extern.catalog) return;
        const cat = window.extern.catalog;
        const prev = window.__ssbSkinUnlocker; window.__ssbSkinUnlocker = true;
        try {
            const order = onlyPrimary ? ["3"] : ["4", "7", "6", "1", "2"];
            order.forEach((t) => { if (map[t] != null) tryEquipSlot(cat, t, map[t]); });
        } finally { window.__ssbSkinUnlocker = prev; }
    }
    function scheduleSkinRestore(fn, ms) {
        const id = setTimeout(() => {
            skinRestoreTimers = skinRestoreTimers.filter((timerId) => timerId !== id);
            if (!skinUnlockerOn()) { restoringSkinCache = false; return; }
            fn();
        }, ms);
        skinRestoreTimers.push(id);
        return id;
    }
    function applyLatestSkinNow() {
        if (!activeLatestSkinMap || !skinUnlockerOn() || !lobbyReady()) return;
        const wasRestoring = restoringSkinCache;
        restoringSkinCache = true;
        applyCachedSkin(activeLatestSkinMap, true);
        applyCachedSkin(activeLatestSkinMap, false);
        try { window.extern.loadAllMeshesOnDemand && window.extern.loadAllMeshesOnDemand(); } catch (e) { }
        try { window.extern.saveEquipment(); } catch (e) { }
        poseEquippedItems();
        // Silently rebuild the held/equipped weapon mesh — same call the inventory-open
        // lifecycle uses, so unlocked skins render on reload without opening the inventory.
        try { const es = window.vueApp && window.vueApp.$refs && window.vueApp.$refs.equipScreen; if (es && typeof es.updateEquippedItems === "function") es.updateEquippedItems(); } catch (e) { }
        setTimeout(poseEquippedItems, 120);
        restoringSkinCache = wasRestoring;
    }
    function cancelSkinRestore(keepLatest) {
        const hadActiveRestore = skinRestoreTimers.length || restoringSkinCache;
        if (skinRestoreTimers.length) {
            skinRestoreTimers.forEach((id) => clearTimeout(id));
            skinRestoreTimers = [];
        }
        restoringSkinCache = false;
        if (keepLatest && hadActiveRestore) applyLatestSkinNow();
    }
    function cachedRestoreMaps() {
        const c = normalizeSkinCache(readJSON(LS.skinCache, null));
        const currentKey = isLoadoutMap(c.current) ? SLOTS.map((t) => c.current[t] == null ? "" : c.current[t]).join("|") : "";
        const seen = new Set();
        const maps = [];
        const add = (map) => {
            if (!isLoadoutMap(map)) return;
            const key = SLOTS.map((t) => map[t] == null ? "" : map[t]).join("|");
            if (key === currentKey) return;
            if (seen.has(key)) return;
            seen.add(key);
            maps.push(map);
        };
        Object.keys(c.byClass || {}).forEach((k) => add(c.byClass[k]));
        Object.keys(c.byPrimary || {}).forEach((k) => add(c.byPrimary[k]));
        if (isLoadoutMap(c.current)) maps.push(c.current);
        return maps;
    }
    function latestCachedSkinMap() {
        const maps = cachedRestoreMaps();
        for (let i = maps.length - 1; i >= 0; i--) {
            if (loadoutHasCustomWeapon(maps[i])) return maps[i];
        }
        return maps.length ? maps[maps.length - 1] : null;
    }
    function applyCachedSkinPair(map, tracked) {
        if (!skinUnlockerOn()) return;
        const defer = tracked ? scheduleSkinRestore : setTimeout;
        applyCachedSkin(map, true);
        defer(() => applyCachedSkin(map, false), 150);
        defer(() => {
            if (!loadoutApplied(map)) applyCachedSkin(map, false);
        }, 340);
    }
    function clickElement(el) {
        if (!el) return false;
        ["pointerdown", "mousedown", "mouseup", "click"].forEach((type) => {
            try { el.dispatchEvent(new MouseEvent(type, { bubbles: true, cancelable: true, view: window })); } catch (e) { }
        });
        return true;
    }
    function nudgeSelectedWeapon(map) {
        if (!skinUnlockerOn() || inInventory() || !lobbyReady()) return;
        const now = Date.now();
        if (now - lastWeaponNudgeAt < 2500) return;
        const icons = Array.from(document.querySelectorAll("#weapon_select .weapon_img"));
        if (icons.length < 2) return;
        const selected = icons.findIndex((el) => el.classList.contains("weapon_selected"));
        if (selected < 0) return;
        lastWeaponNudgeAt = now;
        const other = selected === 0 ? 1 : selected - 1;
        const wasRestoring = restoringSkinCache;
        restoringSkinCache = true;
        clickElement(icons[other].closest(".nospace") || icons[other]);
        scheduleSkinRestore(() => {
            clickElement(icons[selected].closest(".nospace") || icons[selected]);
            if (map) {
                applyCachedSkin(map, true);
                applyCachedSkin(map, false);
            }
            try { window.extern.loadAllMeshesOnDemand && window.extern.loadAllMeshesOnDemand(); } catch (e) { }
            poseEquippedItems();
            restoringSkinCache = wasRestoring;
        }, 90);
    }
    // Rebuild the in-game first-person held weapon so it uses the equipped SKIN mesh instead of
    // the default one. On spawn the game enables the default gun mesh even though the skin is
    // equipped; this replays the exact method sequence the game runs when you click your weapon
    // (verified live) — NO DOM click, so no sound and no equip reset. Strictly gated to the
    // in-game respawn/pause panel so it never touches the home lobby / reload restore.
    let _lastPoseRefreshAt = 0;
    function refreshHeldWeaponPose() {
        if (!skinUnlockerOn()) return;
        const ws = document.querySelector(".pause-game-weapon-select");
        if (!ws || ws.getBoundingClientRect().width < 4) return;
        const now = Date.now();
        if (now - _lastPoseRefreshAt < 1500) return;    // ignore the panel's width flicker
        _lastPoseRefreshAt = now;
        try {
            const ex = window.extern, es = window.vueApp && window.vueApp.$refs && window.vueApp.$refs.equipScreen;
            if (!ex || !es) return;
            if (typeof es.updateEquippedItems === "function") es.updateEquippedItems();
            if (typeof ex.closeEquipInGame === "function") ex.closeEquipInGame(true);
            if (typeof es.poseEquippedItems === "function") es.poseEquippedItems();
            if (typeof ex.poseWithItems === "function") ex.poseWithItems(ex.getEquippedItems(), 0, 0);
        } catch (e) { }
    }
    function restoreCachedSkin(background) {
        if (!skinUnlockerOn()) return;
        // Blur the preview as early as possible (even before the lobby is interactive) when we
        // have a custom skin to restore, so the default weapon model is never seen flipping.
        const pending = latestCachedSkinMap();
        if (pending && loadoutHasCustomWeapon(pending)) showSkinMask();
        if (!lobbyReady()) return whenLobbyReady(() => restoreCachedSkin(background));
        const maps = cachedRestoreMaps();
        if (!maps.length) { hideSkinMask(); return; }
        cancelSkinRestore(false);
        restoringSkinCache = true;
        const latest = latestCachedSkinMap();
        if (!latest) { hideSkinMask(); return; }
        activeLatestSkinMap = latest;
        applyCachedSkinPair(latest, true);
        // Apply right away, then retry densely early so the skin renders as soon as the
        // meshes finish loading — rather than waiting on slow fixed ticks.
        applyLatestSkinNow();
        [150, 400, 800, 1500, 3000].forEach((ms) => scheduleSkinRestore(() => applyLatestSkinNow(), ms));
        // Reveal only after the skin mesh has had time to load + paint (so you see a brief blur,
        // never the default model). Safety cap + spawn/inventory still force-reveal.
        if (latest && loadoutHasCustomWeapon(latest)) revealSkinMaskSoon(900); else hideSkinMask();
        scheduleSkinRestore(() => {
            try { window.extern.saveEquipment(); } catch (e) { }
            poseEquippedItems();
            restoringSkinCache = false;
        }, 6000);
        startSkinRevertGuard();
    }
    // The game re-applies your SERVER loadout (default, since unlocked skins aren't owned) a few
    // seconds AFTER load, overwriting our restored skin — a race that made reloads flaky (skin
    // sometimes "fails to load"). Watch for ~20s and re-apply the cached skin whenever the
    // equipped weapon reverts to default, so the skin always wins regardless of revert timing.
    let _skinGuardIv = null;
    function startSkinRevertGuard() {
        if (_skinGuardIv) clearInterval(_skinGuardIv);
        let tries = 0;
        _skinGuardIv = setInterval(() => {
            if (!skinUnlockerOn() || !activeLatestSkinMap || ++tries > 40) { clearInterval(_skinGuardIv); _skinGuardIv = null; return; }
            if (document.pointerLockElement || inInventory()) return;   // don't fight gameplay or the inventory
            let m = activeLatestSkinMap;
            // Respect a manual weapon-CLASS switch on the homepage: if the equipped primary is a
            // DIFFERENT class than what we're tracking, retarget to THAT class's cached skin so we
            // never snap the player back to the previous gun. Only re-apply on a true revert-to-
            // default WITHIN the same class.
            const eqPrimary = currentLoadout()['3'];
            if (eqPrimary != null && primaryClassIndex(eqPrimary) !== primaryClassIndex(m['3'])) {
                const cls = primaryClassIndex(eqPrimary);
                const c = normalizeSkinCache(readJSON(LS.skinCache, null));
                const classMap = c && c.byClass && c.byClass[cls];
                if (classMap && loadoutHasCustomWeapon(classMap)) {
                    activeLatestSkinMap = m = classMap;        // enforce the new class's skin instead
                } else {
                    activeLatestSkinMap = currentLoadout();    // no cached skin for this class — keep their pick
                    return;
                }
            }
            const weaponsOk = (m['3'] == null || slotApplied(m, '3')) && (m['4'] == null || slotApplied(m, '4'));
            if (!weaponsOk) { showSkinMask(); applyLatestSkinNow(); revealSkinMaskSoon(600); }
        }, 500);
    }
    let restoringSkinCache = false;
    let skinRestoreTimers = [];
    let activeLatestSkinMap = null;
    let lastWeaponNudgeAt = 0;
    function installSkinCacheHooks() {
        const ex = window.extern;
        if (!ex || typeof ex.tryEquipItem !== "function" || ex.__ssbSkinCacheHook) return;
        const inner = ex.tryEquipItem.bind(ex);
        ex.tryEquipItem = function () {
            const out = inner.apply(this, arguments);
            if (!restoringSkinCache) setTimeout(cacheCurrentSkin, 250);
            return out;
        };
        ex.__ssbSkinCacheHook = true;
    }
    window.addEventListener("pagehide", cacheCurrentSkin, true);
    window.addEventListener("beforeunload", cacheCurrentSkin, true);
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") cacheCurrentSkin(); }, true);

    /* ---- "Only show favorites" filter (composes with the Skin Unlocker grid wrapper) ---- */
    function installFavFilterHook() {
        const es = window.vueApp && window.vueApp.$refs && window.vueApp.$refs.equipScreen;
        if (!es || typeof es.populateItemGrid !== "function") return;
        if (es.populateItemGrid === es.__ssbFavWrapper) return; // already outermost
        const inner = es.populateItemGrid;
        es.__ssbFavWrapper = function (items) {
            try {
                const invMode = window.vueData && this.currentEquipMode === window.vueData.equipMode.inventory;
                if (favOnly() && invMode) { const favs = getFavs(); items = (items || []).filter((it) => it && favs.has(it.id)); }
            } catch (e) { }
            return inner.call(this, items);
        };
        es.populateItemGrid = es.__ssbFavWrapper;
    }

    /* ---- star buttons on inventory tiles ---- */
    function decorateTiles() {
        if (!showFavIcon()) { document.querySelectorAll(".ssb-star").forEach((s) => s.remove()); return; }
        const grid = visibleGrid(); if (!grid) return;
        const showing = gridItems(); if (!showing.length) return;
        const tips = grid.querySelectorAll(".tool-tip");
        tips.forEach((tip, i) => {
            const item = showing[i];
            const tile = tip.querySelector(".grid-item") || tip;
            if (!item || item.id == null) { const s = tile.querySelector(":scope > .ssb-star"); if (s) s.remove(); return; }
            if (getComputedStyle(tile).position === "static") tile.style.position = "relative";
            let star = tile.querySelector(":scope > .ssb-star");
            if (!star) {
                star = document.createElement("button");
                star.className = "ssb-star"; star.type = "button"; star.title = "Favorite this item";
                star.addEventListener("click", (e) => {
                    e.stopPropagation(); e.preventDefault();
                    paintStar(star, toggleFav(Number(star.dataset.itemId)));
                    if (favOnly()) refreshGrid();
                }, true);
                tile.appendChild(star);
            }
            star.dataset.itemId = item.id;
            paintStar(star, isFav(item.id));
        });
    }
    function paintStar(btn, filled) {
        btn.classList.toggle("ssb-star--on", filled);
        btn.innerHTML = filled
            ? '<svg viewBox="0 0 24 24" width="16" height="16"><path fill="#ffcf33" stroke="#a06a00" stroke-width="1.2" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01z"/></svg>'
            : '<svg viewBox="0 0 24 24" width="16" height="16"><path fill="rgba(0,0,0,0.25)" stroke="#fff" stroke-width="1.4" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01z"/></svg>';
    }

    /* ---- favorites export / import code ---- */
    function favClick() { try { window.BAWK && window.BAWK.play && window.BAWK.play("ui_click"); } catch (e) { } }
    function encodeFavCode() {
        const ids = [...getFavs()].map(Number).filter((n) => Number.isFinite(n) && n >= 0).map((n) => Math.floor(n));
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
        const favs = getFavs();
        if (!favs.size) { alert("You haven't favorited any items yet.\nStar some inventory items first, then export."); return; }
        const code = encodeFavCode();
        favClick();
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(code)
                .then(() => alert("Favorites code copied to clipboard! (" + favs.size + " item" + (favs.size === 1 ? "" : "s") + ")\n\n" + code))
                .catch(() => prompt("Copy your favorites code:", code));
        } else {
            prompt("Copy your favorites code:", code);
        }
    }
    function importFavCode() {
        const code = prompt("Paste a favorites code (starts with FAV-):");
        if (code === null) return;
        const ids = decodeFavCode(code);
        if (!ids) { alert("Invalid favorites code. It should start with FAV-."); return; }
        const cur = getFavs();
        if (cur.size && !confirm("Replace your " + cur.size + " favorited item" + (cur.size === 1 ? "" : "s") + " with the " + ids.length + " from this code?")) return;
        setFavs(new Set(ids));
        favClick();
        try { decorateTiles(); } catch (e) { }
        try { refreshGrid(); } catch (e) { }
        alert("Imported " + ids.length + " favorite" + (ids.length === 1 ? "" : "s") + ".");
    }
    // Export / Import Favorites buttons on the INVENTORY screen, placed just left
    // of the egg-color picker (#equip_free_colors). Only shown while
    // "Show Favorites Icon" is enabled and the egg-color row is visible.
    function favCodeMetrics() {
        const vw = Math.max(1, window.innerWidth || document.documentElement.clientWidth || 1280);
        const vh = Math.max(1, window.innerHeight || document.documentElement.clientHeight || 720);
        const scale = Math.max(0.74, Math.min(1.08, Math.min(vw / 1280, vh / 720)));
        const size = Math.round(Math.max(30, Math.min(46, 42 * scale)));
        return {
            size,
            gap: Math.round(Math.max(4, Math.min(9, 8 * scale))),
            icon: Math.round(Math.max(15, Math.min(23, size * 0.5))),
            radius: Math.round(Math.max(7, Math.min(11, size * 0.24))),
            shadow: Math.round(Math.max(3, Math.min(5, size * 0.1))),
            clearance: Math.round(Math.max(14, Math.min(24, 18 * scale)))
        };
    }
    function ensureFavCodeButtons() {
        const box = document.getElementById("equip_free_colors") || document.querySelector(".egg-color-select");
        const panel = document.getElementById("equip_panel_middle");
        let el = document.getElementById("ssb-favcode-inv");
        if (!showFavIcon() || !box || !panel || box.getBoundingClientRect().width < 10) {
            if (el) el.remove();
            return;
        }
        if (getComputedStyle(panel).position === "static") panel.style.position = "relative";
        if (!el) {
            el = document.createElement("div");
            el.id = "ssb-favcode-inv";
            el.style.cssText = "position:absolute;display:flex;align-items:center;gap:var(--ssb-favcode-gap,8px);z-index:30;";
            const favCodeIcons = {
                exp: '<svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor" aria-hidden="true"><path d="M12 1l6.2 6.8a.6.6 0 0 1-.44 1H14.5V15a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V8.8H6.24a.6.6 0 0 1-.44-1L12 1z"/><path d="M3 14.5h3V18a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3.5h3V19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-4.5z"/></svg>',
                imp: '<svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor" aria-hidden="true"><path d="M12 16l-6.2-6.8a.6.6 0 0 1 .44-1H9.5V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6.2h3.26a.6.6 0 0 1 .44 1L12 16z"/><path d="M3 14.5h3V18a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3.5h3V19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-4.5z"/></svg>'
            };
            const mk = (label, icon, fn, title) => {
                const b = document.createElement("button");
                b.type = "button";
                b.className = "ssb-favcode-btn";
                b.title = title;
                b.setAttribute("aria-label", label);
                b.setAttribute("data-tooltip", title);
                b.innerHTML = icon;
                b.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); fn(); });
                return b;
            };
            el.appendChild(mk("Export Favorites", favCodeIcons.exp, exportFavCode, "Export Favorites"));
            el.appendChild(mk("Import Favorites", favCodeIcons.imp, importFavCode, "Import Favorites"));
            panel.appendChild(el);
        }
        const br = box.getBoundingClientRect(), pr = panel.getBoundingClientRect();
        const firstSwatch = Array.from(box.children || [])
            .map((node) => node.getBoundingClientRect())
            .filter((rect) => rect.width > 8 && rect.height > 8 && rect.top < br.top + br.height * 0.75)
            .sort((a, b) => a.left - b.left)[0];
        const ar = firstSwatch || br;
        const m = favCodeMetrics();
        const spaceLeft = Math.max(0, br.left - pr.left);
        let size = m.size, gap = m.gap;
        if (spaceLeft && size * 2 + gap + m.clearance > spaceLeft) {
            size = Math.max(28, Math.floor((spaceLeft - m.clearance - gap) / 2));
            gap = Math.max(3, Math.min(gap, Math.round(size * 0.18)));
        }
        el.style.setProperty("--ssb-favcode-size", size + "px");
        el.style.setProperty("--ssb-favcode-gap", gap + "px");
        el.style.setProperty("--ssb-favcode-icon", Math.round(Math.max(14, Math.min(m.icon, size * 0.52))) + "px");
        el.style.setProperty("--ssb-favcode-radius", Math.round(Math.max(6, Math.min(m.radius, size * 0.26))) + "px");
        el.style.setProperty("--ssb-favcode-shadow", Math.round(Math.max(2, Math.min(m.shadow, size * 0.1))) + "px");
        el.style.setProperty("--ssb-favcode-press", Math.round(Math.max(2, Math.min(3, size * 0.08))) + "px");
        const left = br.left - pr.left - el.offsetWidth - m.clearance;
        const top = ar.top - pr.top + ar.height / 2 - el.offsetHeight / 2;
        el.style.left = Math.max(0, Math.round(left)) + "px";
        el.style.top = Math.round(top) + "px";
    }

    /* ---- mod-menu toggles ---- */
    function modToggle(grid, cls, text, tip, get, onChange) {
        if (grid.querySelector("." + cls)) return;
        const row = document.createElement("label");
        row.className = "mod-item " + cls;
        if (tip) row.setAttribute("data-tooltip", tip);
        const cb = document.createElement("input"); cb.type = "checkbox"; cb.tabIndex = -1; cb.checked = get();
        const box = document.createElement("span"); box.className = "mod-box";
        const label = document.createElement("span"); label.className = "mod-label"; label.textContent = text;
        cb.addEventListener("change", () => onChange(cb.checked));
        row.appendChild(cb); row.appendChild(box); row.appendChild(label);
        row.addEventListener("click", (e) => { e.preventDefault(); cb.checked = !cb.checked; cb.dispatchEvent(new Event("change")); });
        grid.appendChild(row);
    }
    function injectModMenuToggle() {
        let grid = null;
        document.querySelectorAll(".mod-header").forEach((h) => { if ((h.textContent || "").trim() === "Mod HUD Widgets") grid = h.nextElementSibling; });
        if (!grid || !grid.classList || !grid.classList.contains("mod-grid")) return;
        modToggle(grid, "ssb-favicon-toggle", "Show Favorites Icon",
            "Show a star button on each inventory item so you can favorite it.",
            showFavIcon, (v) => { setShowFavIcon(v); decorateTiles(); refreshGrid(); });
        modToggle(grid, "ssb-favonly-toggle", "Only Show Favorites",
            "In the Inventory, show only the items you've starred.",
            favOnly, (v) => { setFavOnly(v); refreshGrid(); });
        // Move the favorites toggles above the "Enable Stats" / "Keep Stats Pinned" rows.
        const favIcon = grid.querySelector(".ssb-favicon-toggle");
        const favOnlyRow = grid.querySelector(".ssb-favonly-toggle");
        let anchor = null;
        grid.querySelectorAll(":scope > *").forEach((row) => {
            if (!anchor && /Enable Stats/i.test(row.textContent || "")) anchor = row;
        });
        if (anchor && favIcon && favOnlyRow) {
            grid.insertBefore(favIcon, anchor);
            grid.insertBefore(favOnlyRow, anchor);
        }
    }

    function injectStyles() {
        if (document.getElementById("ssb-fav-styles")) return;
        const s = document.createElement("style"); s.id = "ssb-fav-styles";
        s.textContent = `
      .ssb-star { position:absolute; top:4px; right:4px; z-index:30; width:24px; height:24px; padding:0; cursor:pointer;
        border:none; border-radius:50%; background:rgba(0,0,0,0.35); display:flex; align-items:center; justify-content:center;
        transition: transform .1s, background .15s; }
      .ssb-star:hover { transform: scale(1.15); background: rgba(0,0,0,0.55); }
      .ssb-star--on { background: rgba(0,0,0,0.15); }
      .ssb-favcode-btn { width:var(--ssb-favcode-size,42px); height:var(--ssb-favcode-size,42px); padding:0; border:none; border-radius:var(--ssb-favcode-radius,10px); cursor:pointer; color:#fff;
        background:#0E7697; box-shadow:0 var(--ssb-favcode-shadow,4px) 0 #0C576F; display:inline-flex; align-items:center; justify-content:center;
        transition:transform .1s ease, background .1s ease, box-shadow .1s ease; box-sizing:border-box;
        text-shadow:0 1px 2px rgba(0,0,0,.3); }
      .ssb-favcode-btn:hover { background:#2db8d4; box-shadow:0 var(--ssb-favcode-shadow,4px) 0 #1b7385; transform:translateY(-1px); }
      .ssb-favcode-btn:active { transform:translateY(var(--ssb-favcode-press,3px)); box-shadow:0 1px 0 #1b7385; }
      .ssb-favcode-btn svg { width:var(--ssb-favcode-icon,21px); height:var(--ssb-favcode-icon,21px); display:block; pointer-events:none; filter:drop-shadow(0 1px 1px rgba(0,0,0,.25)); }
    `;
        (document.head || document.documentElement).appendChild(s);
    }

    function boot() {
        injectStyles();
        whenReady(() => {
            installSkinCacheHooks();
            installFavFilterHook();
            restoreCachedSkin();
            // Re-assert the equipped skin the moment the inventory opens — the game reverts
            // unowned (unlocked) skins to default on open, so re-equip + rebuild once here.
            const reassertSkinInInventory = () => {
                if (!skinUnlockerOn() || !activeLatestSkinMap) return;
                applyCachedSkin(activeLatestSkinMap, true);
                applyCachedSkin(activeLatestSkinMap, false);
                try { const es = window.vueApp && window.vueApp.$refs && window.vueApp.$refs.equipScreen; if (es && typeof es.updateEquippedItems === "function") es.updateEquippedItems(); } catch (e) { }
            };
            let _wasInInventory = false, _wasPauseWSVisible = false;
            setInterval(() => {
                // Mid-match none of this UI (settings, inventory, respawn panel) can be
                // open; resetting the visibility flags keeps the appear-transitions
                // (skin-mesh fix, inventory decorations) firing correctly after unlock.
                if (document.pointerLockElement) { _wasInInventory = false; _wasPauseWSVisible = false; return; }
                injectModMenuToggle();   // (re)add the checkboxes whenever the settings panel is built
                try { ensureFavCodeButtons(); } catch (e) { } // export/import favorites buttons on the inventory
                installSkinCacheHooks();
                installFavFilterHook();  // keep the favorites filter outermost
                installSearchFix();      // restore unlocked skins when the item search is cleared
                activeLatestSkinMap = activeLatestSkinMap || latestCachedSkinMap();
                const inv = inInventory();
                if (inv) {
                    cancelSkinRestore(true);
                    hideSkinMask();
                    if (!_wasInInventory) {            // only on the open transition, not every tick
                        reassertSkinInInventory();
                        setTimeout(reassertSkinInInventory, 250);
                    }
                    decorateTiles();
                }
                _wasInInventory = inv;
                // In-game respawn/pause panel appeared (first spawn or after dying): rebuild the
                // held weapon so it uses the skin mesh, not default. No click, no sound, no reset.
                const pauseWS = document.querySelector(".pause-game-weapon-select");
                const wsVisible = !document.pointerLockElement && !!pauseWS && pauseWS.getBoundingClientRect().width > 4;
                if (wsVisible && !_wasPauseWSVisible) { refreshHeldWeaponPose(); setTimeout(refreshHeldWeaponPose, 400); }
                _wasPauseWSVisible = wsVisible;
            }, 600);
        });
    }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();


/* =======================================================================
 *  BETTER HUD — ULTRA additions  (v6.0.0)
 *  -----------------------------------------------------------------------
 *  Self-contained module appended after the Pro build above. Reads its OWN
 *  tpx-* localStorage keys, injects a native-looking toggle into the
 *  existing settings sections, and applies only REVERSIBLE, guarded
 *  effects. It never edits the Pro code above.
 *
 *  Performance Settings ▸
 *    • Low Texture Filtering (tpx-lowTex)  drop anisotropic filtering /
 *                                          trilinear → cheaper GPU sampling.
 *                                          Originals are stored per-texture
 *                                          and restored when turned off.
 * ===================================================================== */
(function () {
    "use strict";

    function gb(key, def) {
        try { const v = localStorage.getItem(key); if (v === null) return def; return JSON.parse(v) === true; }
        catch (e) { return def; }
    }
    function sb(key, val) { try { localStorage.setItem(key, JSON.stringify(!!val)); } catch (e) { } }

    const K_LOWTEX = "tpx-lowTex";
    const C = { lowTex: gb(K_LOWTEX, false) };

    function scene() { try { return (window.P && window.P.scene) || null; } catch (e) { return null; } }
    function uiClick() { try { window.BAWK && window.BAWK.play && window.BAWK.play("ui_click"); } catch (e) { } }

    /* ----------------------- Low Texture Filtering --------------------- */
    const TEX_BILINEAR = 2; // BABYLON.Texture.BILINEAR_SAMPLINGMODE
    function applyLowTex() {
        const s = scene();
        if (!s) return;
        const on = C.lowTex;
        const texs = s.textures || [];
        for (let i = 0; i < texs.length; i++) {
            const t = texs[i];
            if (!t) continue;
            try {
                if (on) {
                    if (t._ssbxTex === undefined) {
                        t._ssbxTex = { a: t.anisotropicFilteringLevel, s: (typeof t._samplingMode === "number" ? t._samplingMode : null) };
                    }
                    if (t.anisotropicFilteringLevel !== 1) t.anisotropicFilteringLevel = 1;
                    if (typeof t.updateSamplingMode === "function" && t._samplingMode !== TEX_BILINEAR) t.updateSamplingMode(TEX_BILINEAR);
                } else if (t._ssbxTex !== undefined) {
                    try { if (typeof t._ssbxTex.a === "number") t.anisotropicFilteringLevel = t._ssbxTex.a; } catch (e) { }
                    try { if (typeof t.updateSamplingMode === "function" && typeof t._ssbxTex.s === "number") t.updateSamplingMode(t._ssbxTex.s); } catch (e) { }
                    t._ssbxTex = undefined;
                }
            } catch (e) { }
        }
    }
    function hasLowTexState() {
        const s = scene();
        if (!s || !s.textures) return false;
        for (let i = 0; i < s.textures.length; i++) if (s.textures[i] && s.textures[i]._ssbxTex !== undefined) return true;
        return false;
    }

    /* ----------------------- settings UI injection --------------------- */
    function gridFor(sectionName) {
        const heads = document.querySelectorAll(".mod-header");
        for (let i = 0; i < heads.length; i++) {
            if ((heads[i].textContent || "").trim() === sectionName) {
                const g = heads[i].nextElementSibling;
                if (g && g.classList && g.classList.contains("mod-grid")) return g;
            }
        }
        return null;
    }
    function injectToggle() {
        const grid = gridFor("Performance Settings");
        if (!grid || grid.querySelector(".ssbx-lowTex")) return;
        const row = document.createElement("label");
        row.className = "mod-item mod-advanced-only ssbx-lowTex";
        row.setAttribute("data-tooltip", "Disable anisotropic/trilinear filtering for cheaper GPU sampling. Reversible.");
        const cb = document.createElement("input");
        cb.type = "checkbox"; cb.tabIndex = -1; cb.checked = !!C.lowTex;
        const box = document.createElement("span"); box.className = "mod-box";
        const lab = document.createElement("span"); lab.className = "mod-label"; lab.textContent = "Low Texture Filtering";
        cb.addEventListener("change", () => { C.lowTex = cb.checked; sb(K_LOWTEX, cb.checked); uiClick(); applyLowTex(); });
        row.addEventListener("click", (e) => { e.preventDefault(); cb.checked = !cb.checked; cb.dispatchEvent(new Event("change")); });
        row.appendChild(cb); row.appendChild(box); row.appendChild(lab);
        grid.appendChild(row);
    }

    function boot() {
        injectToggle();
        setInterval(() => { if (!document.pointerLockElement) injectToggle(); }, 700); // settings UI can't exist mid-match
        setInterval(() => {
            if (document.hidden) return;
            if (C.lowTex || hasLowTexState()) applyLowTex();
        }, 2000);
    }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
    else boot();
})();

/* =======================================================================
 *  BETTER HUD — Resolution-Adaptive Mod UI  (add-on module)
 *  -----------------------------------------------------------------------
 *  The game scales its ENTIRE native UI with a universal CSS rule
 *  `* { font-size: 1.95vh }` (1.95% of viewport height) and sizes
 *  everything in em/vh — so native UI looks identical at any resolution.
 *  The mod UI is styled in fixed px, so it ignores resolution.
 *
 *  Fix: derive a scale factor from the game's own live base font-size
 *  (html font-size = 1.95vh) relative to 1080p CSS height — where the
 *  mod's px design renders exactly as authored — and apply CSS `zoom`
 *  to every mod-built UI root. At 1080p nothing changes; at any other
 *  resolution the mod UI scales in lockstep with the native UI.
 *  Gameplay crosshair elements are deliberately NOT scaled (the arms
 *  already scale natively, and dot px sizes are user-tuned).
 * ===================================================================== */
(function () {
    "use strict";

    // 1.95vh at 1080 CSS-px viewport height = 21.06px: the reference where
    // the mod's px values render at their designed size (zoom = 1).
    const REF_BASE_PX = 21.06;
    const VAR_NAME = "--ssb-ui-scale";
    const STYLE_ID = "ssb-ui-scale-style";

    // Every mod-built UI root. New elements match automatically via CSS.
    const ROOTS = [
        "#mod-settings-section",   // Settings ▸ MODS tab (headers/toggles/sliders/search)
        "#mod-crosshair-section",  // Settings ▸ Crosshair tab (incl. profiles + gallery)
        "#ssb-stats-panel",        // match-stats overlay panel (backdrop stays fullscreen)
        "#ssb-pinned-stats",       // pinned K/D/KDR box on the respawn screen
        ".vol-wrap",               // volume slider block on the respawn screen
        "#ssb-changelog-panel",    // one-time changelog panel
        "#mod-server-panel",       // frontpage server/ping picker panel
        ".ssb-star",               // inventory favorite-star buttons
    ];

    function ensureStyle() {
        let el = document.getElementById(STYLE_ID);
        if (!el) {
            el = document.createElement("style");
            el.id = STYLE_ID;
            (document.head || document.documentElement).appendChild(el);
            // vh/vw units inside a zoomed element still resolve against the real
            // viewport, then get MULTIPLIED by the zoom when rendered — so the
            // panels' own viewport caps (92vh etc.) could exceed the screen.
            // Dividing those caps by the scale keeps the RENDERED size within
            // the viewport at any zoom level.
            el.textContent = ROOTS.join(", ") + " { zoom: var(" + VAR_NAME + ", 1); }\n" + ".vol-wrap, #ssb-pinned-stats { zoom: calc(var(" + VAR_NAME + ", 1) * 0.85); }\n" +
                "#ssb-stats-panel { min-width: min(640px, calc(96vw / var(" + VAR_NAME + ", 1))) !important; max-width: min(900px, calc(96vw / var(" + VAR_NAME + ", 1))) !important; max-height: calc(92vh / var(" + VAR_NAME + ", 1)) !important; overflow: auto !important; }\n" +
                "#ssb-changelog-panel { max-height: min(760px, calc((100vh - 36px) / var(" + VAR_NAME + ", 1))); }\n" +
                // The game grows the settings popup to fit its tab content: the
                // long MODS tab fills the section's inline max-height (~717px) and
                // pushes the "centered" popup to nearly full height / top edge,
                // while short tabs (Crosshair) stay compact and centered. Cap the
                // section's RENDERED height (÷ scale, since vh multiplies by zoom)
                // so the popup always stays the compact, centered size with margins
                // and long content scrolls inside. Verified: MODS popup 82% of
                // screen with even top/bottom margins, matching the Crosshair tab.
                "#mod-settings-section, #mod-crosshair-section { max-height: calc(48vh / var(" + VAR_NAME + ", 1)) !important; }";
        }
        return el;
    }

    // The settings/crosshair sections live inside the native settings popup,
    // whose width is fixed by the game. Zoom shrinks the section's LOCAL
    // layout width (parentWidth / zoom); if that drops below the content's
    // minimum width, rows clip off the right edge ("menu too big to hold").
    // Fit-clamp: give those roots an inline zoom no larger than what their
    // parent can hold, and let it ride the global scale otherwise.
    const FIT_ROOTS = ["#mod-settings-section", "#mod-crosshair-section"];
    function fitPass(globalScale) {
        const vw = document.documentElement.clientWidth || window.innerWidth;
        const vh = document.documentElement.clientHeight || window.innerHeight;
        const MARGIN = 8;
        for (const sel of FIT_ROOTS) {
            const el = document.querySelector(sel);
            if (!el || !el.offsetParent) continue;                 // absent/hidden: leave as-is
            // Re-measure only when something that affects the fit changed —
            // scale, viewport, the container slot, OR the content itself (tab
            // switch, toggling the crosshair customizer, changing dot shape all
            // change scrollHeight/child count). Without the content terms a
            // grown panel would overflow until the next unrelated change.
            const parentW = el.parentElement ? el.parentElement.clientWidth : 0;
            const key = globalScale + "|" + vw + "x" + vh + "|" + parentW + "|" + el.scrollHeight + "|" + el.childElementCount;
            if (el.__ssbFitKey === key) continue;
            el.__ssbFitKey = key;
            // Shrink the zoom until the content fits its own box (no right-edge
            // clip) AND the box stays within the screen. clientWidth grows as
            // the zoom shrinks, so iterate to convergence; each style write
            // forces a synchronous reflow before the next measurement.
            let z = globalScale;
            el.style.zoom = "";                                    // measure at global first
            for (let i = 0; i < 5; i++) {
                const cw = el.clientWidth, sw = el.scrollWidth;
                const rect = el.getBoundingClientRect();
                let shrink = 1;
                if (cw && sw > cw) shrink = Math.min(shrink, cw / sw);                       // content clips inside its box
                if (rect.width && rect.right > vw - MARGIN) shrink = Math.min(shrink, (vw - MARGIN - rect.left) / rect.width); // box past the screen edge
                if (shrink >= 0.999) break;
                z = Math.max(0.5, Math.round(z * shrink * 0.995 * 1000) / 1000);
                el.style.zoom = String(z);
            }
            if (z >= globalScale - 0.001 && el.style.zoom) el.style.zoom = "";
        }
    }

    let _last = 0;
    function applyScale() {
        let base = NaN;
        try { base = parseFloat(getComputedStyle(document.documentElement).fontSize); } catch (e) { }
        let scale = base > 0 ? base / REF_BASE_PX : (window.innerHeight || 1080) / 1080;
        if (!Number.isFinite(scale) || scale <= 0) scale = 1;
        if (Math.abs(scale - 1) < 0.02) scale = 1;      // snap to 1 near 1080p (avoids blur)
        scale = Math.round(scale * 1000) / 1000;
        if (scale !== _last) {
            _last = scale;
            try { document.documentElement.style.setProperty(VAR_NAME, String(scale)); } catch (e) { }
        }
        try { fitPass(scale); } catch (e) { }
    }

    let _rszT = 0;
    function boot() {
        ensureStyle();
        applyScale();
        window.addEventListener("resize", () => {
            clearTimeout(_rszT);
            _rszT = setTimeout(applyScale, 150);
        });
        // Re-fit promptly on any settings-UI interaction (opening the panel,
        // switching to the Crosshair tab, toggling the customizer / dot shape)
        // so an oversized panel never lingers between the slow safety ticks.
        // Cheap: applyScale is a cached no-op unless something actually changed,
        // and the sections are skipped entirely while pointer-locked / hidden.
        document.addEventListener("click", () => {
            if (document.pointerLockElement) return;
            requestAnimationFrame(applyScale);
            setTimeout(applyScale, 130);
            setTimeout(applyScale, 420);
        }, true);
        // belt-and-braces: fullscreen toggles, browser-zoom changes, and the
        // settings screen being (re)built.
        setInterval(() => { if (!document.hidden && !document.pointerLockElement) applyScale(); }, 1200);
    }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
    else boot();
})();
