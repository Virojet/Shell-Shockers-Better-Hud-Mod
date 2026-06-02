// ==UserScript==
// @name         Shell Shockers Silent Reload
// @namespace    https://github.com/ViroGear
// @version      1.0
// @description  Silent reload — skips the local reload animation/sound AND the outgoing reload packet, so neither you nor other players see/hear the reload. The local ammo timer still ticks, so reload time is unchanged.
// @author       ViroGear
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
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function(){
    'use strict';

    /* ============================================================
       CONFIG
       ============================================================ */
    const STORAGE_KEY = 'ssb-silent-reload-on';
    const TOGGLE_KEY  = '\\';  // backslash — change in this file if you want
    const SHOW_INDICATOR = true;

    /* ============================================================
       STATE
       ============================================================ */
    let silentOn = false;
    try { silentOn = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'false') === true; } catch(e) {}

    // Expose a getter the patched game code reads — we use a function so the
    // patched source can `window._sr()` and get the live value.
    window._sr = () => silentOn;

    /* ============================================================
       SOURCE PATCH
       Hook script-tag insertion so we can modify the game's own
       reload code before it runs. We rewrite Ox.prototype.reload's
       body so that, when our toggle is on, it:
         - skips the local reload animation (no sound — sound events
           are tied to specific animation frames that never fire)
         - skips the outgoing nc.Di packet (so the server doesn't know
           you reloaded; no broadcast to other players)
       Everything else (countdown set, ammo refill, status flags) is
       left in place so reload time still passes and ammo still arrives.
       ============================================================ */
    const origAppendChild = HTMLElement.prototype.appendChild;
    let patched = false;
    HTMLElement.prototype.appendChild = function(node){
        try {
            if (!patched &&
                node && node.tagName === 'SCRIPT' &&
                typeof node.innerHTML === 'string' &&
                node.innerHTML.startsWith('(()=>{')) {

                const original = node.innerHTML;

                // The exact reload line we're targeting (minified):
                //   this.Aw.nw.reload(),this.nw.wieldingMelee&&this.nw.wieldGun(),this.releaseTrigger();var t=Rc.getBuffer();return t.packInt8(nc.Di),t.send(TO),
                // Names like Aw/nw/Rc/nc/Di/TO are minified and CAN change between releases,
                // so we capture them from the matched source.
                const re = /this\.(\w+)\.(\w+)\.reload\(\),this\.\2\.wieldingMelee&&this\.\2\.wieldGun\(\),this\.releaseTrigger\(\);var (\w+)=(\w+)\.getBuffer\(\);return \3\.packInt8\((\w+)\.(\w+)\),\3\.send\((\w+)\),/;

                const m = re.exec(original);
                if (m) {
                    const [, Aw, nw, t, Rc, nc, Di, TO] = m;
                    const replacement =
                        `(window._sr&&window._sr()?null:this.${Aw}.${nw}.reload()),` +
                        `this.${nw}.wieldingMelee&&this.${nw}.wieldGun(),` +
                        `this.releaseTrigger();` +
                        `var ${t}=${Rc}.getBuffer();` +
                        `return (window._sr&&window._sr()?0:(${t}.packInt8(${nc}.${Di}),${t}.send(${TO}))),`;
                    node.innerHTML = original.replace(re, replacement);
                    patched = true;
                    console.log('[Silent Reload] Game source patched (Aw=' + Aw + ', nw=' + nw + ', nc.' + Di + ').');
                } else {
                    console.warn('[Silent Reload] Could not find the reload pattern in the game source. The game may have updated — please report this so the patch can be refreshed.');
                }
            }
        } catch (err) {
            console.error('[Silent Reload] Patch error:', err);
        }
        return origAppendChild.call(this, node);
    };

    /* ============================================================
       INDICATOR + HOTKEY
       ============================================================ */
    function setSilent(v){
        silentOn = !!v;
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(silentOn)); } catch(e) {}
        updateIndicator();
        showToast('Silent Reload: ' + (silentOn ? 'ON' : 'OFF'));
    }

    function showToast(text){
        const el = document.createElement('div');
        el.textContent = text;
        el.style.cssText = [
            'position:fixed','top:24px','left:50%','transform:translateX(-50%)',
            'background:#0d3d4f','color:#5ad4e6','padding:10px 20px',
            'border-radius:10px','border:2px solid #2db8d4',
            'font-family:Nunito,system-ui,sans-serif','font-weight:900','font-size:14px',
            'letter-spacing:0.4px','z-index:99999999',
            'box-shadow:0 4px 15px rgba(0,0,0,0.45)',
            'pointer-events:none','user-select:none'
        ].join(';');
        (document.body || document.documentElement).appendChild(el);
        setTimeout(() => el.remove(), 1800);
    }

    let indicatorEl = null;
    function makeIndicator(){
        if (!SHOW_INDICATOR) return;
        if (indicatorEl) return;
        if (!document.body) { setTimeout(makeIndicator, 200); return; }
        indicatorEl = document.createElement('div');
        indicatorEl.title = 'Silent Reload (press ' + TOGGLE_KEY + ' to toggle)';
        indicatorEl.style.cssText = [
            'position:fixed','bottom:14px','left:14px',
            'padding:6px 12px','border-radius:8px',
            'background:rgba(13,61,79,0.85)','color:#5ad4e6',
            'border:2px solid #2db8d4',
            'font-family:Nunito,system-ui,sans-serif','font-weight:900','font-size:11px',
            'letter-spacing:0.5px','z-index:99999998',
            'cursor:pointer','user-select:none',
            'box-shadow:0 2px 6px rgba(0,0,0,0.45)'
        ].join(';');
        indicatorEl.addEventListener('click', () => setSilent(!silentOn));
        document.body.appendChild(indicatorEl);
        updateIndicator();
    }

    function updateIndicator(){
        if (!indicatorEl) return;
        indicatorEl.textContent = 'SILENT RELOAD: ' + (silentOn ? 'ON' : 'OFF');
        indicatorEl.style.borderColor = silentOn ? '#8fffa8' : '#2db8d4';
        indicatorEl.style.color       = silentOn ? '#8fffa8' : '#5ad4e6';
    }

    document.addEventListener('keydown', (e) => {
        if (e.repeat || e.ctrlKey || e.metaKey || e.altKey) return;
        // Don't toggle while typing in chat / inputs
        const a = document.activeElement;
        if (a && /^(input|textarea)$/i.test(a.tagName)) return;
        if (e.key === TOGGLE_KEY) {
            e.preventDefault();
            setSilent(!silentOn);
        }
    }, true);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', makeIndicator, { once: true });
    } else {
        makeIndicator();
    }
})();
