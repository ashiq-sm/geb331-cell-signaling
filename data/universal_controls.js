(function () {
        var DEFAULT_SHORTCUTS = {
            search: 'f',
            theme: 't',
            expandAll: 'e',
            underlineMode: 'u',
            floatingBar: 'g',
            addBookmark: 'b',
            prevBookmark: 'v',
            nextBookmark: 'n',
            bookmarkPanel: 'p',
            red: '1',
            green: '2',
            indigo: '3',
            yellow: '4',
            off: '0'
        };

        function getShortcutConfig() {
            // Allow future courses to override any shortcut via window.SM_SHORTCUTS.
            var custom = (window.SM_SHORTCUTS && typeof window.SM_SHORTCUTS === 'object')
                ? window.SM_SHORTCUTS
                : {};
            var merged = {};
            Object.keys(DEFAULT_SHORTCUTS).forEach(function (k) {
                merged[k] = String(custom[k] || DEFAULT_SHORTCUTS[k]).toLowerCase();
            });
            return merged;
        }

    if (window.__smUniversalControlsLoaded) return;
    window.__smUniversalControlsLoaded = true;

    function injectUniversalStyles() {
        if (document.getElementById('sm-universal-controls-style')) return;
        var style = document.createElement('style');
        style.id = 'sm-universal-controls-style';
        style.textContent = [
            '.highlight-btn.yellow { background: rgba(250,204,21,0.24); color: #a16207; border-color: #a16207; }',
            '.highlight-btn.yellow:hover { background: #ca8a04; color: #fff; }',
            '.highlight-btn.yellow.active { background: #ca8a04; color: #fff; }',
            '.highlight-yellow { background: rgba(250,204,21,0.36) !important; }',
            '.highlight-underline.underline-yellow { text-decoration: underline wavy #ca8a04; background: none !important; }',
            '.bookmark-item .bookmark-item-actions { display: flex; gap: 6px; }',
            '.bookmark-item .bookmark-item-actions button { flex: 0 0 auto; }',
            '.bookmark-item .bookmark-remove-btn { color: #b91c1c; border-color: rgba(185,28,28,0.35); }',
            '.bookmark-header-actions { display: inline-flex; align-items: center; gap: 6px; }',
            '.bookmark-add-btn { position: relative; min-width: 28px; height: 24px; border: 1px solid var(--border-color, rgba(120,120,120,0.3)); border-radius: 6px; background: transparent; color: inherit; cursor: pointer; font-size: 0.95rem; line-height: 1; }',
            '.bookmark-add-btn .bookmark-add-key { position: absolute; top: 1px; right: 3px; font-size: 0.56rem; line-height: 1; opacity: 0.85; font-weight: 700; pointer-events: none; }',
            '.sm-toast-alert { position: fixed; left: 50%; top: 74px; transform: translateX(-50%) translateY(-8px); z-index: 3000; background: rgba(18, 59, 40, 0.96); color: #fff; border: 1px solid rgba(255,255,255,0.22); border-radius: 999px; padding: 0.48rem 0.95rem; font-size: 0.82rem; opacity: 0; pointer-events: none; transition: opacity 0.26s ease, transform 0.26s ease; }',
            '.sm-toast-alert.show { opacity: 1; transform: translateX(-50%) translateY(0); }',
            '.top-controls button.sm-iconized { min-width: 34px; min-height: 34px; justify-content: center; padding: 0.4rem 0.3rem; gap: 0; position: relative; font-size: 0.98rem; line-height: 1; margin: 2px !important; flex: 1 1 auto; }',
            '.top-controls button.sm-iconized .sm-key-badge { position: absolute; top: 1px; right: 2px; font-size: 0.58rem; line-height: 1; opacity: 0.82; font-weight: 700; pointer-events: none; }',
            '.top-controls button.sm-iconized .sm-icon-main { display: inline-flex; align-items: center; justify-content: center; width: 100%; }',
            '/* Unified CSS updates */',
            '.inline-toggles-container { transition: opacity 0.3s, transform 0.3s; opacity: 1; }',
            '.inline-toggles-container.scrolled { opacity: 0.05; pointer-events: none; }',
            '#topControls { position: fixed !important; left: 0 !important; top: 180px !important; right: auto !important; width: 68px !important; flex-direction: row !important; flex-wrap: wrap !important; padding: 6px !important; border-radius: 0 12px 12px 0 !important; transform: translateX(-120%) !important; transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important; z-index: 1000 !important; box-shadow: 4px 0 15px rgba(0,0,0,0.15) !important; background: var(--card-bg) !important; border: 1px solid var(--border-color) !important; border-left: none !important; opacity: 1 !important; visibility: visible !important; justify-content: center !important; }',
            '#topControls.open { transform: translateX(0) !important; }',
            '#topControls .separator { width: 100% !important; height: 1px !important; margin: 4px 0 !important; }',
            '#topControls span { width: 100% !important; text-align: center !important; font-size: 0.72rem !important; }',
            '.bookmark-panel { transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s; position: fixed !important; right: 0 !important; top: 180px !important; transform: translateX(120%) !important; z-index: 1000 !important; margin: 0 !important; height: auto !important; max-height: 70vh !important; border-radius: 12px 0 0 12px !important; box-shadow: -4px 0 15px rgba(0,0,0,0.15) !important; }',
            '.bookmark-panel.open { transform: translateX(0) !important; }',
            '.edge-hint-handle { position: fixed; top: 50%; transform: translateY(-50%); width: 32px; height: 64px; display: flex; align-items: center; justify-content: center; background: var(--accent-color, #10b981); color: #fff; font-weight: 900; cursor: pointer; transition: opacity 0.25s, transform 0.25s; z-index: 1100; box-shadow: 0 2px 12px rgba(0,0,0,0.28); opacity: 0; pointer-events: none; font-size: 1.3rem; line-height: 1; user-select: none; }',
            '.edge-hint-handle.visible { opacity: 0.8; pointer-events: auto; }',
            '.edge-hint-handle.visible:hover { opacity: 1; width: 40px; }',
            '.edge-hint-handle.left-hint { left: 0; border-radius: 0 16px 16px 0; transform: translateY(-50%); }',
            '.edge-hint-handle.right-hint { right: 0; border-radius: 16px 0 0 16px; transform: translateY(-50%); }',
            '.pin-icon-btn { cursor: pointer; opacity: 0.6; transition: 0.2s; background: none; border: none; font-size: 1rem; color: var(--accent-color); padding: 2px 4px; display: inline-flex; align-items: center; }',
            '.pin-icon-btn:hover { opacity: 1; }',
            '.pin-icon-btn.pinned { opacity: 1; transform: scale(1.1); filter: drop-shadow(0 0 3px var(--accent-color)); }',
            '.sm-support-cta { display:block; margin: 1.5rem 0 0; padding: 0.7rem 1.2rem; background: linear-gradient(90deg,rgba(16,185,129,0.08),rgba(16,185,129,0.04)); border: 1px dashed var(--accent-color,#10b981); border-radius: 10px; font-size: 0.82rem; color: var(--accent-color,#10b981); cursor: pointer; text-align:center; font-weight:600; transition: background 0.2s; text-decoration: none; }',
            '.sm-support-cta:hover { background: rgba(16,185,129,0.14); }',
            '.sm-header-extra-btns { display:inline-flex; gap:6px; margin-left:6px; flex-wrap:wrap; align-items:center; }',
            '.sm-header-extra-btns .sm-hbtn { background: rgba(255,255,255,0.13); border: 1px solid rgba(255,255,255,0.22); color:#fff; padding:5px 12px; border-radius:50px; cursor:pointer; font-size:0.8rem; font-weight:700; font-family:inherit; transition:0.2s; text-decoration:none; display:inline-flex; align-items:center; gap:5px; }',
            '.sm-header-extra-btns .sm-hbtn:hover { background:rgba(255,255,255,0.26); transform:scale(1.04); }',
            '.sm-header-extra-btns .sm-hbtn.soon { opacity:0.6; cursor:not-allowed; pointer-events:none; }'
        ].join('\n');
        document.head.appendChild(style);
    }

    function showToastAlert(message, durationMs) {
        var id = 'smToastAlert';
        var node = document.getElementById(id);
        if (!node) {
            node = document.createElement('div');
            node.id = id;
            node.className = 'sm-toast-alert';
            document.body.appendChild(node);
        }
        node.textContent = String(message || 'Done');
        node.classList.add('show');
        if (node.__hideTimer) clearTimeout(node.__hideTimer);
        node.__hideTimer = setTimeout(function () {
            node.classList.remove('show');
        }, typeof durationMs === 'number' ? durationMs : 2400);
    }

    function patchBookmarkAlertsToToast() {
        if (window.__smAlertPatched) return;
        window.__smAlertPatched = true;
        var originalAlert = window.alert;
        window.alert = function (msg) {
            var text = String(msg || '');
            if (/bookmark|mark position|saved position|no bookmarks/i.test(text)) {
                showToastAlert(text, 2400);
                return;
            }
            originalAlert(msg);
        };
    }

    function enhanceToggleButtons() {
        var btn = document.getElementById('toggleBookmarkPanelBtn');
        if (btn && btn.dataset.smEnhanced !== '1') {
            btn.dataset.smEnhanced = '1';
            btn.innerHTML = '<span class="bookmarkbar-icon" style="margin-right:4px;">❮</span><span class="bookmarkbar-label">Bookmark Panel (OFF)</span>';
        }
        var floatBtn = document.getElementById('toggleFloatbarBtn');
        if (floatBtn && floatBtn.dataset.smEnhanced !== '1') {
            floatBtn.dataset.smEnhanced = '1';
            floatBtn.innerHTML = '<span class="floatbar-icon" style="margin-right:4px;">❯</span><span class="floatbar-label">Floating Controls (OFF)</span>';
        }
    }

    function enhanceBookmarkPanelHeader() {
        var panel = document.getElementById('bookmarkPanel');
        if (!panel) return;
        var header = panel.querySelector('.bookmark-header');
        if (!header) return;

        var clearBtn = header.querySelector('.bookmark-clear-btn');
        if (!clearBtn) return;

        var actions = header.querySelector('.bookmark-header-actions');
        if (!actions) {
            actions = document.createElement('span');
            actions.className = 'bookmark-header-actions';
            header.appendChild(actions);
        }

        if (!actions.contains(clearBtn)) {
            actions.appendChild(clearBtn);
        }

        var addBtn = actions.querySelector('.bookmark-add-btn');
        if (!addBtn) {
            addBtn = document.createElement('button');
            addBtn.type = 'button';
            addBtn.className = 'bookmark-add-btn';
            addBtn.innerHTML = '+<sup class="bookmark-add-key">B</sup>';
            addBtn.title = 'Add current position bookmark [B]';
            addBtn.setAttribute('aria-label', 'Add current position bookmark');
            addBtn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                if (typeof window.addBookmarkPosition === 'function') {
                    window.addBookmarkPosition();
                }
            });
            actions.insertBefore(addBtn, clearBtn);
        }
    }

    function updateToggleLabels() {
        var btn = document.getElementById('toggleBookmarkPanelBtn');
        var panel = document.getElementById('bookmarkPanel');
        if (btn && panel) {
            var label = btn.querySelector('.bookmarkbar-label');
            if (label) label.textContent = panel.classList.contains('open') ? 'Bookmark Panel (ON)' : 'Bookmark Panel (OFF)';
        }
        var floatBtn = document.getElementById('toggleFloatbarBtn');
        var topControls = document.getElementById('topControls');
        if (floatBtn && topControls) {
            var fLabel = floatBtn.querySelector('.floatbar-label');
            if (fLabel) fLabel.textContent = topControls.classList.contains('open') ? 'Floating Controls (ON)' : 'Floating Controls (OFF)';
        }
    }

    function isNodeVisible(node) {
        if (!node) return false;
        var cs = window.getComputedStyle(node);
        return cs.display !== 'none' && cs.visibility !== 'hidden' && parseFloat(cs.opacity || '1') > 0.02;
    }

    function getSetsRegionNode() {
        return document.getElementById('setsContainer') || document.querySelector('.set-card');
    }

    
    var states = {
        topControls: { pinned: false, open: false, timer: null },
        bookmarkPanel: { pinned: false, open: false, timer: null }
    };

    function createEdgeHints() {
        if (!document.getElementById('leftHintHandle')) {
            var lh = document.createElement('div');
            lh.id = 'leftHintHandle'; lh.className = 'edge-hint-handle left-hint'; lh.innerHTML = '❯';
            document.body.appendChild(lh);
            lh.addEventListener('mouseenter', function() { openPanel('topControls'); });
            lh.addEventListener('click', function() { openPanel('topControls'); });
        }
        if (!document.getElementById('rightHintHandle')) {
            var rh = document.createElement('div');
            rh.id = 'rightHintHandle'; rh.className = 'edge-hint-handle right-hint'; rh.innerHTML = '❮';
            document.body.appendChild(rh);
            rh.addEventListener('mouseenter', function() { openPanel('bookmarkPanel'); });
            rh.addEventListener('click', function() { openPanel('bookmarkPanel'); });
        }
    }

    function addPinButtons() {
        // Floating Controls Pin
        var topControls = document.getElementById('topControls');
        if (topControls && !document.getElementById('topControlsPin')) {
            var pBtn = document.createElement('button');
            pBtn.id = 'topControlsPin'; pBtn.innerHTML = '📌'; pBtn.className = 'pin-icon-btn';
            pBtn.title = 'Pin Panel';
            pBtn.onclick = function() { togglePin('topControls'); };
            var headSpan = topControls.querySelector('span');
            if (headSpan) topControls.insertBefore(pBtn, headSpan);
            else topControls.prepend(pBtn);
        }
        // Bookmark Panel Pin
        var bookmarkPanel = document.getElementById('bookmarkPanel');
        if (bookmarkPanel && !document.getElementById('bookmarkPanelPin')) {
            var bpBtn = document.createElement('button');
            bpBtn.id = 'bookmarkPanelPin'; bpBtn.innerHTML = '📌'; bpBtn.className = 'pin-icon-btn';
            bpBtn.title = 'Pin Panel';
            bpBtn.onclick = function() { togglePin('bookmarkPanel'); };
            var header = bookmarkPanel.querySelector('.bookmark-header');
            if (header) {
                var a = header.querySelector('.bookmark-header-actions');
                if (a) a.insertBefore(bpBtn, a.firstChild);
                else header.prepend(bpBtn);
            }
        }
    }

    function togglePin(panelId) {
        states[panelId].pinned = !states[panelId].pinned;
        var btn = document.getElementById(panelId + 'Pin');
        if(btn) {
            btn.classList.toggle('pinned', states[panelId].pinned);
        }
        if (states[panelId].pinned) {
            openPanel(panelId);
        } else {
            initiateCloseTimer(panelId);
        }
    }

    function openPanel(panelId) {
        var panel = document.getElementById(panelId);
        if (!panel) return;
        if (states[panelId].timer) clearTimeout(states[panelId].timer);
        states[panelId].open = true;
        panel.classList.add('open');
        var hint = panelId === 'topControls' ? document.getElementById('leftHintHandle') : document.getElementById('rightHintHandle');
        if (hint) hint.classList.remove('visible');
    }

    function initiateCloseTimer(panelId) {
        if (states[panelId].pinned) return;
        if (states[panelId].timer) clearTimeout(states[panelId].timer);
        states[panelId].timer = setTimeout(function() {
            var panel = document.getElementById(panelId);
            if (panel) {
                states[panelId].open = false;
                panel.classList.remove('open');
            }
            // Allow 300ms for css transition to finish, then show hint
            setTimeout(updateHintsAndContainersVisibility, 300);
        }, 2000);
    }

    function setupPanelHover(panelId) {
        var panel = document.getElementById(panelId);
        if (!panel) return;
        panel.addEventListener('mouseenter', function() {
            if (states[panelId].timer) clearTimeout(states[panelId].timer);
            openPanel(panelId);
        });
        panel.addEventListener('mouseleave', function() {
            initiateCloseTimer(panelId);
        });
    }

    function isScrolledPast() {
        return window.scrollY > 200;
    }

    function updateHintsAndContainersVisibility() {
        var scrolled = isScrolledPast();
        var lh = document.getElementById('leftHintHandle');
        var rh = document.getElementById('rightHintHandle');

        if (scrolled) {
            if (lh && !states.topControls.open && document.getElementById('topControls')) lh.classList.add('visible');
            if (rh && !states.bookmarkPanel.open && document.getElementById('bookmarkPanel')) rh.classList.add('visible');
        } else {
            if (lh) lh.classList.remove('visible');
            if (rh) rh.classList.remove('visible');
            if (!states.topControls.pinned) document.getElementById('topControls')?.classList.remove('open');
            if (!states.bookmarkPanel.pinned) document.getElementById('bookmarkPanel')?.classList.remove('open');
        }
    }

    function initUnifiedControlsSync() {
        createEdgeHints();
        addPinButtons();
        setupPanelHover('topControls');
        setupPanelHover('bookmarkPanel');
        
        // Expose toggle methods globally for buttons
        window.toggleFloatingBar = function() {
            if (states.topControls.open) togglePin('topControls');
            else openPanel('topControls');
        };
        window.toggleBookmarkPanel = function() {
            if (states.bookmarkPanel.open) togglePin('bookmarkPanel');
            else openPanel('bookmarkPanel');
        };

        window.addEventListener('scroll', function() {
            updateHintsAndContainersVisibility();
            if (isScrolledPast()) {
                initiateCloseTimer('topControls');
                initiateCloseTimer('bookmarkPanel');
            }
        }, { passive: true });
        
        updateHintsAndContainersVisibility();
    }

    function removeBookmarkByIndex(idx) {
        if (typeof bookmarkPositions === 'undefined' || !Array.isArray(bookmarkPositions)) return;
        if (idx < 0 || idx >= bookmarkPositions.length) return;
        bookmarkPositions.splice(idx, 1);
        if (typeof saveBookmarks === 'function') saveBookmarks();
        if (typeof renderBookmarkPanel === 'function') renderBookmarkPanel();
        showToastAlert('Bookmark removed.', 1600);
    }

    function enhanceBookmarkListItems() {
        var list = document.getElementById('bookmarkList');
        if (!list) return;
        var items = [].slice.call(list.querySelectorAll('.bookmark-item'));
        items.forEach(function (item, idx) {
            if (item.querySelector('.bookmark-remove-btn')) return;
            var goBtn = item.querySelector('button');
            if (!goBtn) return;

            var actions = document.createElement('div');
            actions.className = 'bookmark-item-actions';

            goBtn.classList.add('bookmark-go-btn');
            actions.appendChild(goBtn);

            var removeBtn = document.createElement('button');
            removeBtn.type = 'button';
            removeBtn.className = 'bookmark-remove-btn';
            removeBtn.textContent = 'Remove';
            removeBtn.title = 'Remove this bookmark';
            removeBtn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                removeBookmarkByIndex(idx);
            });

            actions.appendChild(removeBtn);
            item.appendChild(actions);
        });
    }

    function patchBookmarkPanelFunctions() {
        if (typeof window.renderBookmarkPanel === 'function' && !window.renderBookmarkPanel.__smWrapped) {
            var originalRender = window.renderBookmarkPanel;
            var wrappedRender = function () {
                var out = originalRender.apply(this, arguments);
                enhanceBookmarkPanelHeader();
                enhanceBookmarkListItems();
                syncBookmarkButtonWithFloatbar();
                return out;
            };
            wrappedRender.__smWrapped = true;
            window.renderBookmarkPanel = wrappedRender;
        }

        if (typeof window.toggleBookmarkPanel === 'function' && !window.toggleBookmarkPanel.__smWrapped) {
            var originalToggle = window.toggleBookmarkPanel;
            var wrappedToggle = function (forceOpen) {
                var panel = document.getElementById('bookmarkPanel');
                var shouldOpen = typeof forceOpen === 'boolean'
                    ? forceOpen
                    : (panel ? !panel.classList.contains('open') : true);
                if (shouldOpen && !canShowBookmarkPanel()) {
                    syncBookmarkButtonWithFloatbar();
                    return;
                }
                return originalToggle.apply(this, arguments);
            };
            wrappedToggle.__smWrapped = true;
            window.toggleBookmarkPanel = wrappedToggle;
        }
    }

    function initBookmarkButtonSync() {
        var floatBtn = document.getElementById('toggleFloatbarBtn');
        var panel = document.getElementById('bookmarkPanel');
        if (!floatBtn) return;

        syncBookmarkButtonWithFloatbar();
        window.addEventListener('scroll', syncBookmarkButtonWithFloatbar, { passive: true });
        window.addEventListener('resize', syncBookmarkButtonWithFloatbar, { passive: true });

        var mo = new MutationObserver(syncBookmarkButtonWithFloatbar);
        mo.observe(floatBtn, { attributes: true, attributeFilter: ['class', 'style'] });

        if (panel) {
            var moPanel = new MutationObserver(updateToggleLabels);
            moPanel.observe(panel, { attributes: true, attributeFilter: ['class'] });
        }
    }

    function ensureYellowControls() {
        var top = document.getElementById('topControls');
        var offBtn = document.getElementById('highlightOff');

        if (top && !document.getElementById('highlightYellow') && typeof window.setHighlightMode === 'function') {
            var yellowBtn = document.createElement('button');
            yellowBtn.className = 'highlight-btn yellow';
            yellowBtn.id = 'highlightYellow';
            yellowBtn.textContent = '🟡';
            yellowBtn.title = 'Auto Yellow Highlight Mode [4]';
            yellowBtn.onclick = function () { window.setHighlightMode('yellow'); };

            if (offBtn && offBtn.parentNode) {
                offBtn.parentNode.insertBefore(yellowBtn, offBtn);
            } else {
                top.appendChild(yellowBtn);
            }
        }
    }

    function patchHighlightStateUpdater() {
        if (typeof window.updateHighlightButtons !== 'function') return;
        if (window.updateHighlightButtons.__smWrapped) return;

        var original = window.updateHighlightButtons;
        var wrapped = function () {
            original();
            var yellowBtn = document.getElementById('highlightYellow');
            var offBtn = document.getElementById('highlightOff');
            var isYellow = window.currentHighlightColor === 'yellow';
            if (yellowBtn) {
                yellowBtn.classList.toggle('active', isYellow);
            }
            if (isYellow && offBtn) {
                offBtn.classList.remove('active');
            }
        };

        wrapped.__smWrapped = true;
        window.updateHighlightButtons = wrapped;
    }

    function applyCommonTooltips() {
        var sc = getShortcutConfig();
        var tooltipMap = {
            highlightRed: 'Auto Red Highlight Mode [' + sc.red.toUpperCase() + ']',
            highlightGreen: 'Auto Green Highlight Mode [' + sc.green.toUpperCase() + ']',
            highlightIndigo: 'Auto Indigo Highlight Mode [' + sc.indigo.toUpperCase() + ']',
            highlightYellow: 'Auto Yellow Highlight Mode [' + sc.yellow.toUpperCase() + ']',
            highlightOff: 'Highlighting Off [' + sc.off + ']',
            underlineModeBtn: 'Switch Underline/Background [' + sc.underlineMode.toUpperCase() + ']',
            toggleHighlightsBtn: 'Hide or Show Highlights',
            clearHighlightsBtn: 'Erase All Highlights',
            floatbarCloseBtn: 'Show or Hide Floating Bar [' + sc.floatingBar.toUpperCase() + ']',
            toggleFloatbarBtn: 'Toggle Floating Control Bar [' + sc.floatingBar.toUpperCase() + ']',
            toggleAllBtn: 'Expand or Collapse All Sets [' + sc.expandAll.toUpperCase() + ']',
            toggleBookmarkPanelBtn: 'Toggle Bookmark Panel [' + sc.bookmarkPanel.toUpperCase() + ']',
            courseSelect: 'Switch Course',
            languageSelect: 'Change Language Mode',
            viewMode: 'Change View Mode',
            fontFamily: 'Change Font Family'
        };

        Object.keys(tooltipMap).forEach(function (id) {
            var node = document.getElementById(id);
            if (node) node.title = tooltipMap[id];
        });
    }

    function iconizeButton(btn, icon, keyHint) {
        if (!btn || btn.dataset.smIconized === '1') return;
        btn.dataset.smIconized = '1';
        btn.classList.add('sm-iconized');
        var sup = keyHint ? ('<sup class="sm-key-badge">' + String(keyHint).toUpperCase() + '</sup>') : '';
        btn.innerHTML = '<span class="sm-icon-main">' + icon + '</span>' + sup;
    }

    function iconizeTopControlBar() {
        var top = document.getElementById('topControls');
        if (!top) return;
        var sc = getShortcutConfig();

        iconizeButton(document.getElementById('highlightRed'), '🔴', sc.red);
        iconizeButton(document.getElementById('highlightGreen'), '🟢', sc.green);
        iconizeButton(document.getElementById('highlightIndigo'), '🔵', sc.indigo);
        iconizeButton(document.getElementById('highlightYellow'), '🟡', sc.yellow);
        iconizeButton(document.getElementById('highlightOff'), '⊙', sc.off);
        iconizeButton(document.getElementById('toggleHighlightsBtn'), '👁️', '');
        iconizeButton(document.getElementById('clearHighlightsBtn'), '🧹', '');
        iconizeButton(document.getElementById('underlineModeBtn'), '📋', sc.underlineMode);
        iconizeButton(document.getElementById('floatbarCloseBtn'), '✕', sc.floatingBar);

        var topButtons = [].slice.call(top.querySelectorAll('button'));
        topButtons.forEach(function (btn) {
            if (btn.dataset.smIconized === '1') return;
            var onclickCode = (btn.getAttribute('onclick') || '').toLowerCase();
            var txt = (btn.textContent || '').trim().toLowerCase();

            if (onclickCode.indexOf('toggletheme') !== -1 || txt.indexOf('theme') !== -1) {
                iconizeButton(btn, '🌓', sc.theme);
            } else if (onclickCode.indexOf('changefont(-1') !== -1 || txt === 'a−' || txt === 'a-') {
                iconizeButton(btn, 'A−', '');
            } else if (onclickCode.indexOf('changefont(1') !== -1 || txt === 'a+') {
                iconizeButton(btn, 'A+', '');
            } else if (onclickCode.indexOf('toggleallsets') !== -1 || onclickCode.indexOf('expandallrecursive') !== -1 || txt.indexOf('expand all') !== -1) {
                iconizeButton(btn, '📂', sc.expandAll);
            }
        });
    }

    function isTextInputFocused() {
        var active = document.activeElement;
        if (!active) return false;
        var tag = active.tagName;
        return tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA' || active.isContentEditable;
    }

    function applyHighlightMode(color) {
        if (typeof window.setHighlightMode === 'function') {
            window.setHighlightMode(color);
            return;
        }
        if (typeof window.highlightSelected === 'function') {
            window.highlightSelected(color);
        }
    }

    function universalShortcutHandler(e) {
        if (e.altKey || e.ctrlKey || e.metaKey) return;
        if (isTextInputFocused()) return;

        var sc = getShortcutConfig();
        var key = (e.key || '').toLowerCase();
        var consumed = false;

        if (key === sc.red) {
            applyHighlightMode('red');
            consumed = true;
        } else if (key === sc.green) {
            applyHighlightMode('green');
            consumed = true;
        } else if (key === sc.indigo) {
            applyHighlightMode('indigo');
            consumed = true;
        } else if (key === sc.yellow) {
            applyHighlightMode('yellow');
            consumed = true;
        } else if (key === sc.off) {
            if (typeof window.setHighlightMode === 'function') {
                window.setHighlightMode('off');
                consumed = true;
            }
        } else if (key === sc.expandAll) {
            if (typeof window.toggleAllSets === 'function') {
                window.toggleAllSets();
                consumed = true;
            }
        } else if (key === sc.underlineMode) {
            if (typeof window.toggleUnderlineMode === 'function') {
                window.toggleUnderlineMode();
                consumed = true;
            }
        } else if (key === sc.floatingBar) {
            if (typeof window.toggleFloatingBar === 'function') {
                window.toggleFloatingBar();
                consumed = true;
            }
        } else if (key === sc.addBookmark) {
            if (typeof window.addBookmarkPosition === 'function') {
                window.addBookmarkPosition();
                consumed = true;
            } else if (typeof window.toggleFloatingBar === 'function') {
                // Backward compatibility for older pages without bookmarks.
                window.toggleFloatingBar();
                consumed = true;
            }
        } else if (key === sc.prevBookmark) {
            if (typeof window.goToPreviousBookmark === 'function') {
                window.goToPreviousBookmark();
                consumed = true;
            }
        } else if (key === sc.nextBookmark) {
            if (typeof window.goToNextBookmark === 'function') {
                window.goToNextBookmark();
                consumed = true;
            }
        } else if (key === sc.bookmarkPanel) {
            if (typeof window.toggleBookmarkPanel === 'function') {
                window.toggleBookmarkPanel();
                consumed = true;
            }
        } else if (key === sc.theme) {
            if (typeof window.toggleTheme === 'function') {
                window.toggleTheme();
                consumed = true;
            }
        } else if (key === sc.search) {
            var search = document.getElementById('searchInput');
            if (search) {
                search.focus();
                consumed = true;
            }
        } else if (key === 'arrowleft') {
            if (states && states.topControls && !states.topControls.open) {
                openPanel('topControls');
                consumed = true;
            }
        } else if (key === 'arrowright') {
            if (states && states.bookmarkPanel && !states.bookmarkPanel.open) {
                openPanel('bookmarkPanel');
                consumed = true;
            }
        }
        if (consumed) {
            e.preventDefault();
            e.stopPropagation();
            if (typeof e.stopImmediatePropagation === 'function') {
                e.stopImmediatePropagation();
            }
        }
    }

    /* ===== SUPPORT CTA INJECTION ===== */
    function injectSupportCTAs() {
        var container = document.getElementById('setsContainer');
        if (!container) return;
        var cards = container.querySelectorAll('.set-card');
        cards.forEach(function(card) {
            if (card.querySelector('.sm-support-cta')) return;
            var cta = document.createElement('a');
            cta.className = 'sm-support-cta';
            cta.href = '#donationCard';
            cta.textContent = '\uD83D\uDC9A To support this project\'s development & maintenance — go to the Donate section \u2193';
            cta.addEventListener('click', function(e) {
                e.preventDefault();
                var target = document.getElementById('donationCard');
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
            card.appendChild(cta);
        });
    }

    /* ===== HEADER EXTRA BUTTONS ===== */
    function injectHeaderExtraButtons() {
        if (document.getElementById('smHeaderExtraBtns')) return;
        var controls = document.querySelector('.header .controls') || document.querySelector('.controls');
        if (!controls) return;
        var wrap = document.createElement('span');
        wrap.id = 'smHeaderExtraBtns';
        wrap.className = 'sm-header-extra-btns';
        var researchBtn = document.createElement('a');
        researchBtn.className = 'sm-hbtn';
        researchBtn.href = 'https://scholar.google.com/scholar?q=aquaculture+fish+genetics+bioprocess+engineering';
        researchBtn.target = '_blank';
        researchBtn.rel = 'noopener noreferrer';
        researchBtn.innerHTML = '\uD83D\uDD2C Research Resources';
        researchBtn.title = 'Access academic research materials';
        var studyBtn = document.createElement('button');
        studyBtn.className = 'sm-hbtn soon';
        studyBtn.type = 'button';
        studyBtn.innerHTML = '\uD83D\uDCDA Study Materials <small style="font-size:0.65rem;opacity:0.7">(Soon)</small>';
        studyBtn.title = 'Study materials — coming soon';
        wrap.appendChild(researchBtn);
        wrap.appendChild(studyBtn);
        controls.appendChild(wrap);
    }

    function initUniversalControls() {
        injectUniversalStyles();
        patchBookmarkAlertsToToast();
        ensureYellowControls();
        iconizeTopControlBar();
        enhanceToggleButtons();
        enhanceBookmarkPanelHeader();
        patchBookmarkPanelFunctions();
        patchHighlightStateUpdater();
        applyCommonTooltips();
        document.addEventListener('keydown', universalShortcutHandler, true);
        initUnifiedControlsSync();
        updateToggleLabels();
        enhanceBookmarkListItems();
        if (typeof window.updateHighlightButtons === 'function') {
            window.updateHighlightButtons();
        }
        // Inject header extra buttons
        injectHeaderExtraButtons();
        // Inject support CTAs (and re-inject on DOM changes from renderSets)
        injectSupportCTAs();
        var setsContainer = document.getElementById('setsContainer');
        if (setsContainer) {
            var obs = new MutationObserver(function() { injectSupportCTAs(); });
            obs.observe(setsContainer, { childList: true, subtree: false });
        }
        // Re-apply iconization after dynamic re-renders.
        setTimeout(iconizeTopControlBar, 120);
        setTimeout(iconizeTopControlBar, 420);
        setTimeout(injectSupportCTAs, 600);
        setTimeout(injectSupportCTAs, 1200);
    }

    window.addEventListener('load', function () {
        // Run after page-level onload handlers initialize course-specific controls.
        setTimeout(initUniversalControls, 0);
    });
})();
