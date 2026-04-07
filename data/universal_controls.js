(function () {
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
            '.highlight-underline.underline-yellow { text-decoration: underline wavy #ca8a04; background: none !important; }'
        ].join('\n');
        document.head.appendChild(style);
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
        var tooltipMap = {
            highlightRed: 'Auto Red Highlight Mode [1]',
            highlightGreen: 'Auto Green Highlight Mode [2]',
            highlightIndigo: 'Auto Indigo Highlight Mode [3]',
            highlightYellow: 'Auto Yellow Highlight Mode [4]',
            highlightOff: 'Highlighting Off [0]',
            underlineModeBtn: 'Switch Underline/Background [U]',
            toggleHighlightsBtn: 'Hide or Show Highlights',
            clearHighlightsBtn: 'Erase All Highlights',
            floatbarCloseBtn: 'Show or Hide Floating Bar [B]',
            toggleFloatbarBtn: 'Toggle Floating Control Bar [B]',
            toggleAllBtn: 'Expand or Collapse All Sets [E]',
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

        var key = (e.key || '').toLowerCase();
        var consumed = false;

        if (key === '1') {
            applyHighlightMode('red');
            consumed = true;
        } else if (key === '2') {
            applyHighlightMode('green');
            consumed = true;
        } else if (key === '3') {
            applyHighlightMode('indigo');
            consumed = true;
        } else if (key === '4') {
            applyHighlightMode('yellow');
            consumed = true;
        } else if (key === '0') {
            if (typeof window.setHighlightMode === 'function') {
                window.setHighlightMode('off');
                consumed = true;
            }
        } else if (key === 'e') {
            if (typeof window.toggleAllSets === 'function') {
                window.toggleAllSets();
                consumed = true;
            }
        } else if (key === 'u') {
            if (typeof window.toggleUnderlineMode === 'function') {
                window.toggleUnderlineMode();
                consumed = true;
            }
        } else if (key === 'b') {
            if (typeof window.toggleFloatingBar === 'function') {
                window.toggleFloatingBar();
                consumed = true;
            }
        } else if (key === 't') {
            if (typeof window.toggleTheme === 'function') {
                window.toggleTheme();
                consumed = true;
            }
        } else if (key === 'f') {
            var search = document.getElementById('searchInput');
            if (search) {
                search.focus();
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

    function initUniversalControls() {
        injectUniversalStyles();
        ensureYellowControls();
        patchHighlightStateUpdater();
        applyCommonTooltips();
        document.addEventListener('keydown', universalShortcutHandler, true);
        if (typeof window.updateHighlightButtons === 'function') {
            window.updateHighlightButtons();
        }
    }

    window.addEventListener('load', function () {
        // Run after page-level onload handlers initialize course-specific controls.
        setTimeout(initUniversalControls, 0);
    });
})();
