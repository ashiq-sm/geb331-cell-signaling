/**
 * ADMIN POWERS MODULE - Universal Admin Editing for All Course Pages
 * Provides live editing capabilities directly within course pages
 * Include this script in any course HTML file to enable admin powers
 * 
 * Usage: <script src="admin-powers.js"></script>
 */

class AdminPowers {
    constructor() {
        this.ADMIN_PASSWORD = 'bismilla@1';
        this.ADMIN_SESSION_KEY = 'sm_bioNotes_adminSession';
        this.isAdminMode = false;
        this.init();
    }

    init() {
        // Check if already logged in
        this.checkAdminSession();
        
        // Add options menu to page
        this.addOptionsMenu();
        
        // Add support button
        this.addSupportButton();
        
        // Auto Theme based on time
        this.initAutoTheme();
        
        // If admin, enable editing buttons
        if (this.isAdminMode) {
            this.enableAdminMode();
        }

        // Hide floating buttons on scroll down, show on scroll up
        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            const isMobile = window.innerWidth <= 768;
            
            // Toggle body class for mobile reading mode
            if (currentScrollY > 150) {
                document.body.classList.add('body-scrolled');
            } else {
                document.body.classList.remove('body-scrolled');
            }
            
            const rightEls = [
                document.getElementById('main-menu-btn'),
                document.querySelector('.toggle-bookmark-panel-btn'),
                document.getElementById('rightHintHandle')
            ];
            
            const leftEls = [
                document.querySelector('.toggle-floatbar-btn'),
                document.getElementById('leftHintHandle')
            ];
            
            const bottomEls = [
                document.getElementById('support-project-btn')
            ];
            
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down -> Hide
                rightEls.forEach(el => el && el.classList.add('hide-on-scroll-right'));
                leftEls.forEach(el => el && el.classList.add('hide-on-scroll-left'));
                bottomEls.forEach(el => el && el.classList.add('hide-on-scroll-bottom'));
            } else {
                // Scrolling up -> Show
                rightEls.forEach(el => el && el.classList.remove('hide-on-scroll-right'));
                leftEls.forEach(el => el && el.classList.remove('hide-on-scroll-left'));
                bottomEls.forEach(el => el && el.classList.remove('hide-on-scroll-bottom'));
            }
            lastScrollY = currentScrollY;
        }, { passive: true });

        // Global Keyboard Shortcuts
        window.addEventListener('keydown', (e) => {
            // Avoid triggering when typing in inputs or editable areas
            if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName) || document.activeElement.isContentEditable) {
                return;
            }

            const key = e.key.toLowerCase();

            // 'M' - Toggle Main Menu
            if (key === 'm') {
                e.preventDefault();
                this.showTopMenu();
            } 
            // 'E' - Expand/Collapse All
            else if (key === 'e') {
                if (typeof window.toggleAllSets === 'function') {
                    e.preventDefault();
                    window.toggleAllSets();
                    this.showToast('📂 Section Toggled', 'Expanding or collapsing all course modules.');
                }
            }
            // 'B' - Add Bookmark
            else if (key === 'b') {
                if (typeof window.addBookmarkPosition === 'function') {
                    e.preventDefault();
                    window.addBookmarkPosition();
                    this.showToast('🔖 Bookmark Saved', 'Your current reading position has been recorded.');
                }
            }
            // 'Esc' - Close All
            else if (key === 'escape') {
                const menu = document.getElementById('top-menu');
                if (menu) {
                    menu.remove();
                    this.showToast('✖️ Menu Closed', 'Returning to distraction-free mode.');
                }
                
                if (window.UniversalControlsInstance) {
                    const states = window.UniversalControlsInstance.getStates();
                    if (states && (states.topControls.pinned || states.bookmarkPanel.pinned)) {
                        states.topControls.pinned = false;
                        states.bookmarkPanel.pinned = false;
                        window.UniversalControlsInstance.initiateCloseTimer('topControls');
                        window.UniversalControlsInstance.initiateCloseTimer('bookmarkPanel');
                        this.showToast('🧹 Panels Collapsed', 'Clearing the reading area.');
                    }
                }
            }
        });
    }

    initAutoTheme() {
        const hour = new Date().getHours();
        const isNight = hour >= 18 || hour < 7;
        const targetTheme = isNight ? 'dark' : 'light';
        const currentTheme = document.documentElement.getAttribute('data-theme') || localStorage.getItem('sm-theme');
        
        // If the current theme doesn't match the time-based theme, and user hasn't manually overridden in this session
        if (currentTheme !== targetTheme && !sessionStorage.getItem('sm-theme-manual-override')) {
            document.documentElement.setAttribute('data-theme', targetTheme);
            localStorage.setItem('sm-theme', targetTheme);
            
            // Show hint toast
            setTimeout(() => {
                this.showToast(
                    isNight ? "🌙 Night mode enabled auto-magically!" : "☀️ Day mode enabled auto-magically!",
                    "Changing automatically based on local time (7am/6pm). Manual control in ≡ Menu."
                );
            }, 2000);
        }
    }

    showToast(title, message) {
        const toast = document.createElement('div');
        toast.className = 'sm-toast';
        toast.innerHTML = `
            <i class="fas fa-magic"></i>
            <div>
                <div style="font-size: 0.95rem;">${title}</div>
                <div style="font-size: 0.75rem; opacity: 0.8; font-weight: normal;">${message}</div>
            </div>
        `;
        document.body.appendChild(toast);
        
        // Trigger animation
        setTimeout(() => toast.classList.add('show'), 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 500);
        }, 6000);
    }

    checkAdminSession() {
        const session = sessionStorage.getItem(this.ADMIN_SESSION_KEY);
        if (session) {
            this.isAdminMode = true;
        }
    }

    addOptionsMenu() {
        if (document.getElementById('main-menu-btn')) return;
        // Create top-right menu button (always visible)
        const menuBtn = document.createElement('button');
        menuBtn.id = 'main-menu-btn';
        menuBtn.innerHTML = '≡';
        menuBtn.title = 'Main Menu & Options';
        menuBtn.onclick = (e) => {
            e.stopPropagation();
            this.showTopMenu(menuBtn);
        };
        document.body.appendChild(menuBtn);
    }

    addSupportButton() {
        if (document.getElementById('support-project-btn')) return;
        // Create support button for course pages
        const supportBtn = document.createElement('button');
        supportBtn.id = 'support-project-btn';
        supportBtn.title = 'Found this helpful? Support the project!';
        supportBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9996;
            padding: 12px 18px;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            font-weight: bold;
            font-size: 14px;
            box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
            backdrop-filter: blur(10px);
        `;
        supportBtn.innerHTML = '💚 Found this helpful?';

        supportBtn.onmouseover = () => {
            supportBtn.style.transform = 'translateY(-3px) scale(1.05)';
            supportBtn.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.6)';
        };

        supportBtn.onmouseout = () => {
            supportBtn.style.transform = 'translateY(0) scale(1)';
            supportBtn.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.4)';
        };

        supportBtn.onclick = () => this.showSupportModal();

        document.body.appendChild(supportBtn);
    }

    showSupportModal() {
        if (typeof window.showDonateModal === 'function') {
            window.showDonateModal('bKash, Nagad & Rocket', '01773971905', 100);
            return;
        }
        // Fallback for pages without the donation widget (like landing page if not loaded)
        const modal = document.createElement('div');
        modal.id = 'support-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10001;
            backdrop-filter: blur(5px);
        `;

        modal.innerHTML = `
            <div style="
                background: white;
                border-radius: 1.5rem;
                padding: 2.5rem;
                max-width: 500px;
                width: 90%;
                box-shadow: 0 20px 50px rgba(0,0,0,0.4);
                text-align: center;
            ">
                <button onclick="document.getElementById('support-modal').remove()" style="
                    position: absolute;
                    top: 15px;
                    right: 20px;
                    background: none;
                    border: none;
                    font-size: 1.8rem;
                    cursor: pointer;
                    color: #666;
                ">×</button>
                
                <h2 style="color: #059669; margin-bottom: 1rem; font-size: 1.8rem;">💚 Support This Project</h2>
                <p style="color: #555; margin-bottom: 1.5rem; font-size: 1rem;">
                    If SM BioNotes has been helpful to you, consider supporting the project with a small donation.
                </p>
                
                <div style="background: #f0fdf4; border: 2px solid #10b981; border-radius: 1rem; padding: 1.5rem; margin-bottom: 1.5rem;">
                    <p style="color: #666; font-size: 0.9rem; margin-bottom: 0.5rem;">Support via Bkash, Nagad, or Rocket</p>
                    <div style="display: flex; align-items: center; gap: 10px; justify-content: center;">
                        <input type="text" value="01773971905" readonly style="
                            flex: 1;
                            padding: 12px;
                            border: 2px solid #10b981;
                            border-radius: 8px;
                            font-size: 1.1rem;
                            font-weight: bold;
                            font-family: monospace;
                            color: #059669;
                            text-align: center;
                            background: white;
                        ">
                        <button onclick="copyNumber(this)" style="
                            padding: 12px 16px;
                            background: #10b981;
                            color: white;
                            border: none;
                            border-radius: 8px;
                            cursor: pointer;
                            font-weight: bold;
                            font-size: 0.95rem;
                            transition: all 0.2s;
                        " onmouseover="this.style.background='#059669'" onmouseout="this.style.background='#10b981'">
                            📋 Copy
                        </button>
                    </div>
                </div>
                
                <p style="color: #999; font-size: 0.85rem;">
                    Every contribution helps keep this project alive and helps more students! 🙏
                </p>
                <button onclick="document.getElementById('support-modal').remove()" style="
                    width: 100%;
                    padding: 12px;
                    background: #e5e7eb;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: bold;
                    color: #333;
                    margin-top: 1rem;
                ">Close</button>
            </div>
        `;

        document.body.appendChild(modal);
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };
    }

    showTopMenu(triggerBtn) {
        // Close if already open
        const existing = document.getElementById('top-menu');
        if (existing) {
            existing.remove();
            return;
        }

        const menu = document.createElement('div');
        menu.id = 'top-menu';

        // Check which page we are on
        const isCoursePage = document.getElementById('setsContainer') !== null;
        
        let menuHTML = `
            <div class="menu-header">
                <div class="menu-label" style="margin-bottom: 0;">Main Menu</div>
                <button class="menu-close-btn" onclick="document.getElementById('top-menu').remove()">×</button>
            </div>
            <div class="menu-section">
                <div class="menu-label">Platform Settings</div>
                <button class="menu-item" onclick="if(typeof toggleTheme === 'function') toggleTheme()">
                    🌓 Toggle Theme (Dark/Light)
                </button>
            </div>
        `;

        if (isCoursePage) {
            menuHTML += `
                <div class="menu-section">
                    <div class="menu-label">Reading Controls</div>
                    <div class="menu-grid">
                        <div class="menu-grid-item" onclick="if(typeof changeFont === 'function') changeFont(-1)">A− Smaller</div>
                        <div class="menu-grid-item" onclick="if(typeof changeFont === 'function') changeFont(1)">A+ Larger</div>
                    </div>
                    <select class="menu-select" onchange="if(typeof applyFontFamily === 'function') applyFontFamily(this.value)">
                        <option value="'Inter', 'Noto Sans Bengali'">👁️ Eye Saver (Inter)</option>
                        <option value="'Outfit', 'Noto Sans Bengali'">✨ Premium (Outfit)</option>
                        <option value="'Roboto Slab', 'Noto Sans Bengali'">📖 Academic (Slab)</option>
                    </select>
                </div>
                <div class="menu-section">
                    <div class="menu-label">Language & View</div>
                    <select class="menu-select" onchange="if(typeof changeLanguage === 'function') changeLanguage(this.value)">
                        <option value="en" selected>🌐 English (Academic)</option>
                        <option value="bn">🌐 Smart Mix (Bilingual)</option>
                    </select>
                    <select class="menu-select" style="margin-top: 10px;" onchange="if(typeof applyViewMode === 'function') applyViewMode(this.value)">
                        <option value="auto">🖥️ Auto View</option>
                        <option value="mobile">📱 Mobile</option>
                        <option value="desktop">💻 Desktop</option>
                    </select>
                </div>
                <div class="menu-section">
                    <div class="menu-label">Quick Actions</div>
                    <button class="menu-item" onclick="if(typeof toggleAllSets === 'function') toggleAllSets()">
                        📂 Expand/Collapse All
                    </button>
                    <button class="menu-item" onclick="if(typeof exportToPDF === 'function') exportToPDF()">
                        🖨️ Export as PDF
                    </button>
                </div>
            `;
        }

        menuHTML += `
            <div class="menu-section">
                <div class="menu-label">Admin & Support</div>
                ${this.isAdminMode ? 
                    `<button class="menu-item" onclick="AdminPowersInstance.showAdminMenu()">👑 Admin Controls</button>
                     <button class="menu-item" style="color: #e74c3c;" onclick="sessionStorage.removeItem('sm_bioNotes_adminSession'); location.reload();">🚪 Logout</button>` :
                    `<button class="menu-item" onclick="AdminPowersInstance.showLoginModal()">🔐 Admin Login</button>`
                }
                <button class="menu-item" onclick="AdminPowersInstance.showSupportModal()">💚 Support This Project</button>
            </div>
            <div class="menu-section" style="background: var(--nav-pill-bg); text-align: center; padding: 1.5rem 1rem;">
                <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 0.8rem; font-size: 1.2rem;">
                    <a href="https://www.linkedin.com/in/sm-ashikur-rahman/" target="_blank" style="color: #0077b5;"><i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/ashiq-sm" target="_blank" style="color: var(--text-color); opacity: 0.8;"><i class="fab fa-github"></i></a>
                    <a href="https://www.youtube.com/@smashiqurrahman8150" target="_blank" style="color: #ff0000;"><i class="fab fa-youtube"></i></a>
                    <a href="https://t.me/sm_ash1q" target="_blank" style="color: #0088cc;"><i class="fab fa-telegram"></i></a>
                </div>
                <div style="font-size: 0.7rem; opacity: 0.6; margin-bottom: 0.3rem;">SM NextGen BioNotes v4.0</div>
                <a href="https://www.linkedin.com/in/sm-ashikur-rahman/" target="_blank" style="font-size: 0.85rem; font-weight: 700; color: var(--accent-color); text-decoration: none;">
                    by SM Ashikur Rahman
                </a>
            </div>
        `;

        menu.innerHTML = menuHTML;
        document.body.appendChild(menu);

        // Close menu when clicking outside
        setTimeout(() => {
            const closeMenu = (e) => {
                if (!e.target.closest('#top-menu') && !e.target.closest('#main-menu-btn')) {
                    if (document.getElementById('top-menu')) {
                        document.getElementById('top-menu').remove();
                    }
                    document.removeEventListener('click', closeMenu);
                }
            };
            document.addEventListener('click', closeMenu);
        }, 100);
    }

    showLoginModal() {
        const modal = document.createElement('div');
        modal.id = 'admin-login-modal';
        modal.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.7);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
            ">
                <div style="
                    background: white;
                    padding: 40px;
                    border-radius: 12px;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
                    min-width: 350px;
                    text-align: center;
                ">
                    <h2 style="margin: 0 0 20px 0; color: #333;">🔐 Admin Login</h2>
                    <p style="color: #666; margin-bottom: 20px;">Enter admin password to unlock editing</p>
                    
                    <input 
                        type="password" 
                        id="admin-password-input" 
                        placeholder="Enter password..." 
                        style="
                            width: 100%;
                            padding: 12px;
                            margin-bottom: 20px;
                            border: 2px solid #ddd;
                            border-radius: 6px;
                            font-size: 14px;
                            box-sizing: border-box;
                            transition: border-color 0.3s;
                        "
                        onkeypress="if(event.key==='Enter') document.getElementById('admin-login-btn').click()"
                    />
                    
                    <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                        <button id="admin-login-btn" style="
                            flex: 1;
                            padding: 12px;
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: white;
                            border: none;
                            border-radius: 6px;
                            cursor: pointer;
                            font-weight: bold;
                            font-size: 14px;
                            transition: transform 0.2s;
                        ">Unlock</button>
                        
                        <button id="admin-cancel-btn" style="
                            flex: 1;
                            padding: 12px;
                            background: #e0e0e0;
                            color: #333;
                            border: none;
                            border-radius: 6px;
                            cursor: pointer;
                            font-weight: bold;
                            font-size: 14px;
                        ">Cancel</button>
                    </div>
                    
                    <p id="admin-error-msg" style="color: #e74c3c; margin: 0; font-size: 13px; display: none;"></p>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        document.getElementById('admin-login-btn').onclick = () => {
            const password = document.getElementById('admin-password-input').value;
            if (password === this.ADMIN_PASSWORD) {
                sessionStorage.setItem(this.ADMIN_SESSION_KEY, 'true');
                this.isAdminMode = true;
                modal.remove();
                location.reload();
            } else {
                document.getElementById('admin-error-msg').textContent = '❌ Incorrect password';
                document.getElementById('admin-error-msg').style.display = 'block';
                document.getElementById('admin-password-input').value = '';
            }
        };

        document.getElementById('admin-cancel-btn').onclick = () => modal.remove();

        // Focus on input
        setTimeout(() => document.getElementById('admin-password-input').focus(), 100);
    }

    showAdminMenu() {
        // When Edit Mode is clicked from menu, directly enable edit mode
        this.enableEditMode();
    }

    enableAdminMode() {
        // Add edit buttons to all sections
        this.addEditButtons();
    }

    enableEditMode() {
        // Show toast notification
        this.showToast('✏️ Advanced Edit Mode - Manage Questions & Sets & Solutions', 'success');
        
        // Add admin controls bar at top
        this.addAdminControlsBar();
        
        // Add edit buttons to questions and sets
        this.addContentManagementButtons();
        
        // Add delete buttons to set headers
        this.addSetManagementControls();
        
        // Add solution management
        this.addSolutionManagementControls();
    }

    addSetManagementControls() {
        // Find all set headers (h1, h2 that look like set titles)
        const headers = document.querySelectorAll('h1, h2, h3');
        headers.forEach((header, index) => {
            // Skip if already has controls
            if (header.parentElement.querySelector('.set-delete-btn-admin')) return;
            
            // Only process headers that might be section titles
            const text = header.textContent.trim();
            if (text.length > 0 && text.length < 200) {
                const container = document.createElement('div');
                container.style.cssText = `
                    display: flex;
                    gap: 8px;
                    margin-top: 8px;
                    flex-wrap: wrap;
                `;
                
                // Delete set button
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'set-delete-btn-admin';
                deleteBtn.style.cssText = `
                    padding: 6px 12px;
                    background: #e74c3c;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 12px;
                    font-weight: bold;
                `;
                deleteBtn.textContent = '🗑️ Delete Section';
                deleteBtn.onclick = (e) => {
                    e.stopPropagation();
                    if (confirm('Delete this entire section?')) {
                        let element = header.parentElement;
                        // Find the next section header or go up to parent container
                        let sibling = header.nextSibling;
                        while (sibling) {
                            if (sibling.nodeType === 1 && (sibling.tagName.match(/^H[1-6]$/))) {
                                break;
                            }
                            let toRemove = sibling;
                            sibling = sibling.nextSibling;
                            toRemove.remove && toRemove.remove();
                        }
                        header.remove();
                        this.showToast('✅ Section deleted!', 'success');
                    }
                };
                
                container.appendChild(deleteBtn);
                header.parentElement.insertBefore(container, header.nextSibling);
            }
        });
    }

    addSolutionManagementControls() {
        // Find all solution/answer paragraphs
        const answers = document.querySelectorAll('p');
        answers.forEach((para) => {
            // Skip if already has solution controls
            if (para.parentElement.querySelector('.solution-controls-admin')) return;
            
            const text = para.textContent.trim();
            // Look for paragraphs that might be solutions (longer text)
            if (text.length > 50 && text.length < 5000 && !para.parentElement.querySelector('.solution-controls-admin')) {
                const controls = document.createElement('div');
                controls.className = 'solution-controls-admin';
                controls.style.cssText = `
                    display: flex;
                    gap: 6px;
                    margin-top: 6px;
                    flex-wrap: wrap;
                `;
                
                // Delete solution button
                const deleteBtn = document.createElement('button');
                deleteBtn.style.cssText = `
                    padding: 4px 10px;
                    background: #e67e22;
                    color: white;
                    border: none;
                    border-radius: 3px;
                    cursor: pointer;
                    font-size: 11px;
                    font-weight: bold;
                `;
                deleteBtn.textContent = '❌ Delete';
                deleteBtn.onclick = (e) => {
                    e.stopPropagation();
                    if (confirm('Delete this content?')) {
                        para.remove();
                        controls.remove();
                        this.showToast('✅ Content deleted!', 'success');
                    }
                };
                
                controls.appendChild(deleteBtn);
                para.parentElement.insertBefore(controls, para.nextSibling);
            }
        });
    }

    addAdminControlsBar() {
        // Check if already exists
        if (document.getElementById('admin-controls-bar')) {
            return;
        }

        const bar = document.createElement('div');
        bar.id = 'admin-controls-bar';
        bar.style.cssText = `
            position: fixed;
            top: 60px;
            left: 20px;
            right: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
            z-index: 9997;
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
        `;

        bar.innerHTML = `
            <span style="color: white; font-weight: bold; flex: 1;">👑 Admin Edit Mode</span>
            <button id="add-question-btn" style="
                padding: 8px 12px;
                background: #27ae60;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 12px;
                font-weight: bold;
                transition: background 0.2s;
            ">+ Question</button>
            <button id="add-section-btn" style="
                padding: 8px 12px;
                background: #9b59b6;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 12px;
                font-weight: bold;
                transition: background 0.2s;
            ">+ Section</button>
            <button id="add-solution-btn" style="
                padding: 8px 12px;
                background: #f39c12;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 12px;
                font-weight: bold;
                transition: background 0.2s;
            ">+ Solution</button>
            <button id="create-set-btn" style="
                padding: 8px 12px;
                background: #3498db;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 12px;
                font-weight: bold;
                transition: background 0.2s;
            ">+ Create Set</button>
            <button id="close-edit-mode-btn" style="
                padding: 8px 12px;
                background: #e74c3c;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 12px;
                font-weight: bold;
                transition: background 0.2s;
            ">Exit</button>
        `;

        document.body.appendChild(bar);

        // Button interactions
        document.getElementById('add-question-btn').onclick = () => this.showAddQuestionModal();
        document.getElementById('add-section-btn').onclick = () => this.showAddSectionModal();
        document.getElementById('add-solution-btn').onclick = () => this.showAddSolutionModal();
        document.getElementById('create-set-btn').onclick = () => this.showCreateSetModal();
        document.getElementById('close-edit-mode-btn').onclick = () => {
            bar.remove();
            this.showToast('Edit mode closed', 'info');
        };
    }

    addContentManagementButtons() {
        // Find all question containers
        const questions = document.querySelectorAll('[class*="question"], [class*="Question"], .qna-item, .card, h4, h3');
        
        questions.forEach((question, index) => {
            if (question.querySelector('.admin-content-controls')) return; // Already has controls

            const text = question.innerText || question.textContent;
            if (text && text.length > 10 && !question.querySelector('button')) {
                this.addControlsToElement(question, index);
            }
        });

        // Also add controls to answer elements
        const answers = document.querySelectorAll('p, [class*="answer"], [class*="Answer"]');
        answers.forEach((answer) => {
            if (answer.querySelector('.admin-content-controls')) return;
            if (answer.style.display === 'none') return;

            const text = answer.innerText || answer.textContent;
            if (text && text.length > 20) {
                this.addAnswerControls(answer);
            }
        });
    }

    addControlsToElement(element, index) {
        const controls = document.createElement('div');
        controls.className = 'admin-content-controls';
        controls.style.cssText = `
            display: flex;
            gap: 5px;
            margin-top: 8px;
            padding: 8px;
            background: rgba(102, 126, 234, 0.1);
            border-radius: 4px;
            border-left: 3px solid #667eea;
        `;

        controls.innerHTML = `
            <button class="edit-content-btn" style="
                padding: 6px 10px;
                background: #3498db;
                color: white;
                border: none;
                border-radius: 3px;
                cursor: pointer;
                font-size: 11px;
            ">✏️ Edit</button>
            <button class="delete-content-btn" style="
                padding: 6px 10px;
                background: #e74c3c;
                color: white;
                border: none;
                border-radius: 3px;
                cursor: pointer;
                font-size: 11px;
            ">🗑️ Delete</button>
        `;

        controls.querySelector('.edit-content-btn').onclick = (e) => {
            e.stopPropagation();
            this.editQuestion(element);
        };

        controls.querySelector('.delete-content-btn').onclick = (e) => {
            e.stopPropagation();
            if (confirm('Delete this question? This cannot be undone.')) {
                element.remove();
                this.showToast('Question deleted', 'success');
            }
        };

        element.appendChild(controls);
    }

    addAnswerControls(element) {
        if (element.querySelector('.answer-controls')) return;

        const controls = document.createElement('div');
        controls.className = 'answer-controls';
        controls.style.cssText = `
            display: flex;
            gap: 5px;
            margin-top: 6px;
            padding: 6px;
            background: rgba(52, 152, 219, 0.1);
            border-radius: 3px;
        `;

        controls.innerHTML = `
            <button class="edit-answer-btn" style="
                padding: 4px 8px;
                background: #3498db;
                color: white;
                border: none;
                border-radius: 2px;
                cursor: pointer;
                font-size: 10px;
            ">✏️ Edit Answer</button>
        `;

        controls.querySelector('.edit-answer-btn').onclick = (e) => {
            e.stopPropagation();
            this.editAnswer(element);
        };

        element.appendChild(controls);
    }

    editQuestion(element) {
        const originalText = element.innerText;
        
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10001;
        `;

        modal.innerHTML = `
            <div style="
                background: white;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 8px 32px rgba(0,0,0,0.3);
                max-width: 500px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
            ">
                <h3 style="margin-top: 0; color: #333;">Edit Question Title</h3>
                <textarea id="question-edit-input" style="
                    width: 100%;
                    padding: 12px;
                    border: 2px solid #667eea;
                    border-radius: 4px;
                    font-size: 14px;
                    font-family: inherit;
                    min-height: 120px;
                    resize: vertical;
                    box-sizing: border-box;
                " placeholder="Enter question text...">${originalText}</textarea>
                
                <p style="font-size: 12px; color: #666; margin: 10px 0;">
                    💡 Markdown supported: **bold**, *italic*, # headings, - lists
                </p>
                
                <div style="display: flex; gap: 10px; margin-top: 20px;">
                    <button id="save-question-btn" style="
                        flex: 1;
                        padding: 12px;
                        background: #27ae60;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-weight: bold;
                        font-size: 14px;
                    ">💾 Save</button>
                    <button id="cancel-question-btn" style="
                        flex: 1;
                        padding: 12px;
                        background: #e0e0e0;
                        color: #333;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-weight: bold;
                        font-size: 14px;
                    ">✕ Cancel</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        const textarea = document.getElementById('question-edit-input');
        setTimeout(() => textarea.focus(), 100);

        document.getElementById('save-question-btn').onclick = () => {
            const newText = textarea.value;
            element.innerText = newText;
            modal.remove();
            this.showToast('✅ Question updated!', 'success');
            this.logActivity('question', 'edit', originalText.substring(0, 50), newText.substring(0, 50));
        };

        document.getElementById('cancel-question-btn').onclick = () => modal.remove();
    }

    editAnswer(element) {
        const originalText = element.innerText;
        
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10001;
        `;

        modal.innerHTML = `
            <div style="
                background: white;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 8px 32px rgba(0,0,0,0.3);
                max-width: 600px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
            ">
                <h3 style="margin-top: 0; color: #333;">Edit Answer</h3>
                <textarea id="answer-edit-input" style="
                    width: 100%;
                    padding: 12px;
                    border: 2px solid #3498db;
                    border-radius: 4px;
                    font-size: 14px;
                    font-family: inherit;
                    min-height: 150px;
                    resize: vertical;
                    box-sizing: border-box;
                " placeholder="Enter answer...">${originalText}</textarea>
                
                <p style="font-size: 12px; color: #666; margin: 10px 0;">
                    💡 Use markdown: **bold**, *italic*, # title, - list, > quote, \`code\`
                </p>
                
                <div style="display: flex; gap: 10px; margin-top: 20px;">
                    <button id="save-answer-btn" style="
                        flex: 1;
                        padding: 12px;
                        background: #27ae60;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-weight: bold;
                        font-size: 14px;
                    ">💾 Save</button>
                    <button id="cancel-answer-btn" style="
                        flex: 1;
                        padding: 12px;
                        background: #e0e0e0;
                        color: #333;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-weight: bold;
                        font-size: 14px;
                    ">✕ Cancel</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        const textarea = document.getElementById('answer-edit-input');
        setTimeout(() => textarea.focus(), 100);

        document.getElementById('save-answer-btn').onclick = () => {
            const newText = textarea.value;
            element.innerText = newText;
            modal.remove();
            this.showToast('✅ Answer updated!', 'success');
            this.logActivity('answer', 'edit', originalText.substring(0, 50), newText.substring(0, 50));
        };

        document.getElementById('cancel-answer-btn').onclick = () => modal.remove();
    }

    showAddQuestionModal() {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10002;
        `;

        modal.innerHTML = `
            <div style="
                background: white;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 8px 32px rgba(0,0,0,0.3);
                max-width: 600px;
                width: 90%;
                max-height: 85vh;
                overflow-y: auto;
            ">
                <h3 style="margin-top: 0; color: #333;">➕ Add New Question</h3>
                
                <label style="display: block; margin-bottom: 15px;">
                    <div style="font-weight: bold; color: #333; margin-bottom: 5px;">Question Title</div>
                    <input type="text" id="new-question-title" placeholder="e.g., Q1.2.3 - What is photosynthesis?" style="
                        width: 100%;
                        padding: 10px;
                        border: 2px solid #667eea;
                        border-radius: 4px;
                        font-size: 14px;
                        box-sizing: border-box;
                    ">
                </label>

                <label style="display: block; margin-bottom: 15px;">
                    <div style="font-weight: bold; color: #333; margin-bottom: 5px;">Answer (supports markdown)</div>
                    <textarea id="new-question-answer" placeholder="Enter detailed answer..." style="
                        width: 100%;
                        padding: 10px;
                        border: 2px solid #667eea;
                        border-radius: 4px;
                        font-size: 14px;
                        font-family: inherit;
                        min-height: 150px;
                        box-sizing: border-box;
                    "></textarea>
                </label>

                <p style="font-size: 11px; color: #999; margin: 10px 0;">
                    Format guide: **bold** *italic* # heading - list > quote \`code\`
                </p>

                <div style="display: flex; gap: 10px; margin-top: 20px;">
                    <button id="add-q-save-btn" style="
                        flex: 1;
                        padding: 12px;
                        background: #27ae60;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-weight: bold;
                        font-size: 14px;
                    ">✅ Add Question</button>
                    <button id="add-q-cancel-btn" style="
                        flex: 1;
                        padding: 12px;
                        background: #e0e0e0;
                        color: #333;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-weight: bold;
                        font-size: 14px;
                    ">✕ Cancel</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        const titleInput = document.getElementById('new-question-title');
        setTimeout(() => titleInput.focus(), 100);

        document.getElementById('add-q-save-btn').onclick = () => {
            const title = titleInput.value;
            const answer = document.getElementById('new-question-answer').value;

            if (!title.trim()) {
                alert('Please enter a question title');
                return;
            }

            // Create question element and add to page
            const questionContainer = document.createElement('div');
            questionContainer.style.cssText = `
                background: #f8f9fa;
                padding: 15px;
                margin: 15px 0;
                border-radius: 6px;
                border-left: 4px solid #667eea;
            `;

            questionContainer.innerHTML = `
                <h4 style="margin: 0 0 10px 0; color: #333;">${title}</h4>
                <p style="margin: 0; color: #666; line-height: 1.6;">${answer}</p>
            `;

            // Add controls to new question
            const controls = document.createElement('div');
            controls.className = 'admin-content-controls';
            controls.style.cssText = `
                display: flex;
                gap: 5px;
                margin-top: 8px;
                padding: 8px;
                background: rgba(102, 126, 234, 0.1);
                border-radius: 4px;
            `;

            controls.innerHTML = `
                <button class="edit-content-btn" style="
                    padding: 6px 10px;
                    background: #3498db;
                    color: white;
                    border: none;
                    border-radius: 3px;
                    cursor: pointer;
                    font-size: 11px;
                ">✏️ Edit</button>
                <button class="delete-content-btn" style="
                    padding: 6px 10px;
                    background: #e74c3c;
                    color: white;
                    border: none;
                    border-radius: 3px;
                    cursor: pointer;
                    font-size: 11px;
                ">🗑️ Delete</button>
            `;

            questionContainer.appendChild(controls);
            document.body.insertBefore(questionContainer, document.getElementById('admin-controls-bar')?.nextSibling || document.body.firstChild);

            // Add event handlers
            controls.querySelector('.edit-content-btn').onclick = (e) => {
                e.stopPropagation();
                this.editQuestion(questionContainer.querySelector('h4'));
            };

            controls.querySelector('.delete-content-btn').onclick = (e) => {
                e.stopPropagation();
                if (confirm('Delete this question?')) {
                    questionContainer.remove();
                    this.showToast('Question deleted', 'success');
                }
            };

            modal.remove();
            this.showToast('✅ Question added!', 'success');
            this.logActivity('question', 'create', title, answer);
        };

        document.getElementById('add-q-cancel-btn').onclick = () => modal.remove();
    }

    showAddSectionModal() {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10002;
        `;

        modal.innerHTML = `
            <div style="
                background: white;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 8px 32px rgba(0,0,0,0.3);
                max-width: 600px;
                width: 90%;
            ">
                <h3 style="margin-top: 0; color: #333;">➕ Add New Section</h3>
                
                <label style="display: block; margin-bottom: 15px;">
                    <div style="font-weight: bold; color: #333; margin-bottom: 5px;">Section Title</div>
                    <input type="text" id="new-section-title" placeholder="e.g., Topic 1 - Introduction" style="
                        width: 100%;
                        padding: 10px;
                        border: 2px solid #9b59b6;
                        border-radius: 4px;
                        font-size: 14px;
                        box-sizing: border-box;
                    ">
                </label>

                <div style="display: flex; gap: 10px; margin-top: 20px;">
                    <button id="add-section-save-btn" style="
                        flex: 1;
                        padding: 12px;
                        background: #9b59b6;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-weight: bold;
                        font-size: 14px;
                    ">✅ Add Section</button>
                    <button id="add-section-cancel-btn" style="
                        flex: 1;
                        padding: 12px;
                        background: #e0e0e0;
                        color: #333;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-weight: bold;
                        font-size: 14px;
                    ">✕ Cancel</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        const titleInput = document.getElementById('new-section-title');
        setTimeout(() => titleInput.focus(), 100);

        document.getElementById('add-section-save-btn').onclick = () => {
            const title = titleInput.value.trim();
            if (!title) {
                alert('Please enter a section title');
                return;
            }

            // Create section heading
            const section = document.createElement('h2');
            section.style.cssText = `
                margin-top: 2rem;
                margin-bottom: 1rem;
                color: #333;
                border-bottom: 3px solid #9b59b6;
                padding-bottom: 10px;
            `;
            section.textContent = title;
            document.body.insertBefore(section, document.getElementById('admin-controls-bar')?.nextSibling || document.body.firstChild);

            modal.remove();
            this.showToast('✅ Section added!', 'success');
            this.logActivity('set', 'create', title, 'new section');
        };

        document.getElementById('add-section-cancel-btn').onclick = () => modal.remove();
    }

    showAddSolutionModal() {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10002;
        `;

        modal.innerHTML = `
            <div style="
                background: white;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 8px 32px rgba(0,0,0,0.3);
                max-width: 600px;
                width: 90%;
                max-height: 85vh;
                overflow-y: auto;
            ">
                <h3 style="margin-top: 0; color: #333;">➕ Add New Solution/Content</h3>
                
                <textarea id="new-solution-text" placeholder="Enter solution, explanation, or content here..." style="
                    width: 100%;
                    padding: 10px;
                    border: 2px solid #f39c12;
                    border-radius: 4px;
                    font-size: 14px;
                    font-family: inherit;
                    min-height: 200px;
                    box-sizing: border-box;
                    margin-bottom: 15px;
                "></textarea>

                <p style="font-size: 11px; color: #999; margin: 10px 0;">
                    Format guide: **bold** *italic* # heading - list > quote \`code\`
                </p>

                <div style="display: flex; gap: 10px; margin-top: 20px;">
                    <button id="add-solution-save-btn" style="
                        flex: 1;
                        padding: 12px;
                        background: #f39c12;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-weight: bold;
                        font-size: 14px;
                    ">✅ Add Solution</button>
                    <button id="add-solution-cancel-btn" style="
                        flex: 1;
                        padding: 12px;
                        background: #e0e0e0;
                        color: #333;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-weight: bold;
                        font-size: 14px;
                    ">✕ Cancel</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        const textInput = document.getElementById('new-solution-text');
        setTimeout(() => textInput.focus(), 100);

        document.getElementById('add-solution-save-btn').onclick = () => {
            const text = textInput.value.trim();
            if (!text) {
                alert('Please enter solution content');
                return;
            }

            // Create solution paragraph
            const solution = document.createElement('p');
            solution.style.cssText = `
                margin: 1rem 0;
                color: #444;
                line-height: 1.6;
                padding: 1rem;
                background: #f8f9fa;
                border-left: 4px solid #f39c12;
                border-radius: 4px;
            `;
            solution.textContent = text;
            document.body.insertBefore(solution, document.getElementById('admin-controls-bar')?.nextSibling || document.body.firstChild);

            modal.remove();
            this.showToast('✅ Content added!', 'success');
            this.logActivity('solution', 'create', text, 'new content');
        };

        document.getElementById('add-solution-cancel-btn').onclick = () => modal.remove();
    }

    showCreateSetModal() {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10002;
        `;

        modal.innerHTML = `
            <div style="
                background: white;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 8px 32px rgba(0,0,0,0.3);
                max-width: 500px;
                width: 90%;
            ">
                <h3 style="margin-top: 0; color: #333;">➕ Create New Set/Topic</h3>
                
                <label style="display: block; margin-bottom: 15px;">
                    <div style="font-weight: bold; color: #333; margin-bottom: 5px;">Set Name</div>
                    <input type="text" id="set-name-input" placeholder="e.g., Chapter 1 - Introduction" style="
                        width: 100%;
                        padding: 10px;
                        border: 2px solid #3498db;
                        border-radius: 4px;
                        font-size: 14px;
                        box-sizing: border-box;
                    ">
                </label>

                <label style="display: block; margin-bottom: 20px;">
                    <div style="font-weight: bold; color: #333; margin-bottom: 5px;">Description (optional)</div>
                    <textarea id="set-description-input" placeholder="Optional description..." style="
                        width: 100%;
                        padding: 10px;
                        border: 2px solid #3498db;
                        border-radius: 4px;
                        font-size: 14px;
                        font-family: inherit;
                        min-height: 80px;
                        box-sizing: border-box;
                    "></textarea>
                </label>

                <div style="display: flex; gap: 10px;">
                    <button id="create-set-save-btn" style="
                        flex: 1;
                        padding: 12px;
                        background: #3498db;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-weight: bold;
                        font-size: 14px;
                    ">✅ Create Set</button>
                    <button id="create-set-cancel-btn" style="
                        flex: 1;
                        padding: 12px;
                        background: #e0e0e0;
                        color: #333;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-weight: bold;
                        font-size: 14px;
                    ">✕ Cancel</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        const nameInput = document.getElementById('set-name-input');
        setTimeout(() => nameInput.focus(), 100);

        document.getElementById('create-set-save-btn').onclick = () => {
            const setName = nameInput.value;
            const setDescription = document.getElementById('set-description-input').value;

            if (!setName.trim()) {
                alert('Please enter a set name');
                return;
            }

            // Create set element
            const setContainer = document.createElement('div');
            setContainer.style.cssText = `
                background: #ecf0f1;
                padding: 20px;
                margin: 20px 0;
                border-radius: 8px;
                border-top: 4px solid #3498db;
            `;

            setContainer.innerHTML = `
                <h2 style="margin: 0 0 10px 0; color: #2c3e50;">${setName}</h2>
                ${setDescription ? `<p style="margin: 0 0 15px 0; color: #666; font-style: italic;">${setDescription}</p>` : ''}
                <div style="display: flex; gap: 8px; margin-bottom: 15px;">
                    <button class="set-edit-btn" style="
                        padding: 8px 12px;
                        background: #3498db;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 12px;
                        font-weight: bold;
                    ">✏️ Edit Set</button>
                    <button class="set-duplicate-btn" style="
                        padding: 8px 12px;
                        background: #9b59b6;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 12px;
                        font-weight: bold;
                    ">📋 Duplicate</button>
                    <button class="set-delete-btn" style="
                        padding: 8px 12px;
                        background: #e74c3c;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 12px;
                        font-weight: bold;
                    ">🗑️ Delete</button>
                </div>
                <div class="set-questions-container" style="margin-top: 15px;"></div>
            `;

            document.body.insertBefore(setContainer, document.getElementById('admin-controls-bar')?.nextSibling || document.body.firstChild);

            // Set event handlers
            setContainer.querySelector('.set-edit-btn').onclick = () => this.editSet(setContainer, setName);
            setContainer.querySelector('.set-duplicate-btn').onclick = () => this.duplicateSet(setContainer);
            setContainer.querySelector('.set-delete-btn').onclick = () => {
                if (confirm('Delete this entire set and all its questions?')) {
                    setContainer.remove();
                    this.showToast('Set deleted', 'success');
                }
            };

            modal.remove();
            this.showToast('✅ Set created!', 'success');
            this.logActivity('set', 'create', setName, setDescription);
        };

        document.getElementById('create-set-cancel-btn').onclick = () => modal.remove();
    }

    editSet(setElement, setName) {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10002;
        `;

        const heading = setElement.querySelector('h2');
        const description = setElement.querySelector('p');

        modal.innerHTML = `
            <div style="
                background: white;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 8px 32px rgba(0,0,0,0.3);
                max-width: 500px;
                width: 90%;
            ">
                <h3 style="margin-top: 0; color: #333;">✏️ Edit Set</h3>
                
                <label style="display: block; margin-bottom: 15px;">
                    <div style="font-weight: bold; color: #333; margin-bottom: 5px;">Set Name</div>
                    <input type="text" id="edit-set-name" value="${heading?.innerText || ''}" style="
                        width: 100%;
                        padding: 10px;
                        border: 2px solid #3498db;
                        border-radius: 4px;
                        font-size: 14px;
                        box-sizing: border-box;
                    ">
                </label>

                <label style="display: block; margin-bottom: 20px;">
                    <div style="font-weight: bold; color: #333; margin-bottom: 5px;">Description</div>
                    <textarea id="edit-set-desc" style="
                        width: 100%;
                        padding: 10px;
                        border: 2px solid #3498db;
                        border-radius: 4px;
                        font-size: 14px;
                        font-family: inherit;
                        min-height: 80px;
                        box-sizing: border-box;
                    ">${description?.innerText || ''}</textarea>
                </label>

                <div style="display: flex; gap: 10px;">
                    <button id="edit-set-save" style="
                        flex: 1;
                        padding: 12px;
                        background: #27ae60;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-weight: bold;
                    ">💾 Save</button>
                    <button id="edit-set-cancel" style="
                        flex: 1;
                        padding: 12px;
                        background: #e0e0e0;
                        color: #333;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-weight: bold;
                    ">✕ Cancel</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        document.getElementById('edit-set-save').onclick = () => {
            const newName = document.getElementById('edit-set-name').value;
            const newDesc = document.getElementById('edit-set-desc').value;

            if (newName.trim()) {
                heading.innerText = newName;
                if (description) {
                    description.innerText = newDesc;
                }
                modal.remove();
                this.showToast('✅ Set updated!', 'success');
                this.logActivity('set', 'edit', setName, newName);
            }
        };

        document.getElementById('edit-set-cancel').onclick = () => modal.remove();
    }

    duplicateSet(setElement) {
        const clone = setElement.cloneNode(true);
        const heading = clone.querySelector('h2');
        
        if (heading) {
            heading.innerText = heading.innerText + ' (Copy)';
        }

        document.body.insertBefore(clone, setElement.nextSibling);

        // Re-attach event handlers
        const editBtn = clone.querySelector('.set-edit-btn');
        if (editBtn) editBtn.onclick = () => this.editSet(clone, heading.innerText);

        const dupBtn = clone.querySelector('.set-duplicate-btn');
        if (dupBtn) dupBtn.onclick = () => this.duplicateSet(clone);

        const delBtn = clone.querySelector('.set-delete-btn');
        if (delBtn) delBtn.onclick = () => {
            if (confirm('Delete this set?')) {
                clone.remove();
                this.showToast('Set deleted', 'success');
            }
        };

        this.showToast('✅ Set duplicated!', 'success');
        this.logActivity('set', 'duplicate', heading.innerText, '');
    }

    logActivity(type, action, oldValue, newValue) {
        const changeLog = JSON.parse(localStorage.getItem('adminChanges') || '[]');
        changeLog.push({
            type: type,
            action: action,
            oldValue: oldValue,
            newValue: newValue,
            timestamp: new Date().toISOString(),
            pageURL: window.location.href
        });
        localStorage.setItem('adminChanges', JSON.stringify(changeLog.slice(-100))); // Keep last 100
    }

    addEditButtons() {
        // Add inline edit buttons to courses (if in a course listing page)
        const courseCards = document.querySelectorAll('[data-course-id], .course-card, .course-item');
        courseCards.forEach(card => {
            this.addEditButtonToElement(card, 'course');
        });

        // Add edit buttons to sets/topics
        const setHeadings = document.querySelectorAll('h3, h4, [data-set-id]');
        setHeadings.forEach(heading => {
            if (heading.textContent.trim() && !heading.querySelector('.admin-edit-btn')) {
                this.addEditButtonToElement(heading, 'set');
            }
        });
    }

    addEditButtonToElement(element, type) {
        if (element.querySelector('.admin-edit-btn')) return;

        const editBtn = document.createElement('button');
        editBtn.className = 'admin-edit-btn';
        editBtn.innerHTML = '✏️';
        editBtn.title = `Edit ${type}`;
        editBtn.style.cssText = `
            display: inline-block;
            margin-left: 8px;
            padding: 4px 8px;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
            opacity: 0.7;
            transition: opacity 0.2s;
        `;

        editBtn.onmouseover = () => editBtn.style.opacity = '1';
        editBtn.onmouseout = () => editBtn.style.opacity = '0.7';

        editBtn.onclick = (e) => {
            e.stopPropagation();
            this.startEditing(element, type);
        };

        element.appendChild(editBtn);
    }

    startEditing(element, type) {
        const originalContent = element.innerText;
        const container = document.createElement('div');
        container.style.cssText = `
            display: flex;
            gap: 8px;
            align-items: center;
            margin: 10px 0;
        `;

        const textarea = document.createElement('textarea');
        textarea.value = originalContent;
        textarea.style.cssText = `
            flex: 1;
            padding: 8px;
            border: 2px solid #667eea;
            border-radius: 4px;
            font-family: inherit;
            font-size: 14px;
            min-height: 80px;
            resize: vertical;
        `;

        const saveBtn = document.createElement('button');
        saveBtn.textContent = '💾 Save';
        saveBtn.style.cssText = `
            padding: 8px 12px;
            background: #27ae60;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            white-space: nowrap;
        `;

        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = '✕ Cancel';
        cancelBtn.style.cssText = `
            padding: 8px 12px;
            background: #e74c3c;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            white-space: nowrap;
        `;

        container.appendChild(textarea);
        container.appendChild(saveBtn);
        container.appendChild(cancelBtn);

        element.replaceWith(container);

        saveBtn.onclick = () => {
            element.innerText = textarea.value;
            this.saveChanges(element, type, textarea.value);
            container.replaceWith(element);
            this.showToast('✅ Changes saved!', 'success');
        };

        cancelBtn.onclick = () => {
            container.replaceWith(element);
        };

        textarea.focus();
    }

    makeElementsEditable() {
        // Find all editable content sections
        const editableSections = document.querySelectorAll(
            'h2, h3, h4, p, li, .question-text, .answer-text, [contenteditable], .content'
        );

        editableSections.forEach(section => {
            if (!section.classList.contains('no-edit')) {
                section.style.cursor = 'pointer';
                section.style.position = 'relative';

                // Highlight on hover
                section.onmouseover = () => {
                    if (section.offsetHeight > 20) {
                        section.style.background = 'rgba(102, 126, 234, 0.1)';
                        section.style.padding = '5px';
                        section.style.borderLeft = '3px solid #667eea';
                    }
                };

                section.onmouseout = () => {
                    section.style.background = 'transparent';
                    section.style.borderLeft = 'none';
                };

                section.onclick = (e) => {
                    e.stopPropagation();
                    this.startEditing(section, 'content');
                };
            }
        });

        this.showToast('📝 Click any content to edit it in-place', 'info');
    }

    saveChanges(element, type, newContent) {
        // Store in localStorage with timestamp
        const changeLog = JSON.parse(localStorage.getItem('adminChanges') || '[]');
        changeLog.push({
            type: type,
            oldContent: element.innerText,
            newContent: newContent,
            timestamp: new Date().toISOString(),
            pageURL: window.location.href
        });
        localStorage.setItem('adminChanges', JSON.stringify(changeLog.slice(-50))); // Keep last 50
    }

    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 15px 20px;
            background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
            color: white;
            border-radius: 6px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10001;
            animation: slideIn 0.3s ease;
            font-weight: 500;
        `;
        toast.textContent = message;
        document.body.appendChild(toast);

        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);

        setTimeout(() => toast.remove(), 3000);
    }
}

// Helper function for copying support number
function copyNumber(btn) {
    const number = '01773971905';
    navigator.clipboard.writeText(number).then(() => {
        const originalText = btn.textContent;
        btn.textContent = '✅ Copied!';
        btn.style.background = '#059669';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '#10b981';
        }, 2000);
    }).catch(err => {
        alert('Failed to copy: ' + err);
    });
}

// Initialize once
(function() {
    function init() {
        if (window.adminPowersInitialized) return;
        window.adminPowersInitialized = true;
        window.AdminPowersInstance = new AdminPowers();
    }
    
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        init();
    } else {
        document.addEventListener('DOMContentLoaded', init);
    }
})();
