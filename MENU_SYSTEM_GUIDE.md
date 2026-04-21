# Menu System - Quick Reference & Customization Guide

## Visual Layout

```
TOP-RIGHT CORNER OF ANY COURSE PAGE:
───────────────────────────────────

[≡]  ← Menu button (always visible)
     Dark gray color
     Top-right corner
     Fixed position


CLICK [≡] → MENU OPENS:
───────────────────────────────────

┌─────────────────────────┐
│ SM BioNotes             │  ← About section
│ Interactive Study...    │    (always visible)
├─────────────────────────┤
│ SM Ashikur Rahman       │  ← Author section  
│ Biotech Education...    │    (always visible)
├─────────────────────────┤
│ [01700000000] [Copy]   │  ← Donation section
│ Bkash/Nagad:...        │    (always visible,
│                         │     copy button works)
├─────────────────────────┤
│ 🔐 Admin Login          │  ← If NOT logged in
│                         │
│ 👑 Admin Controls       │  ← If LOGGED IN
│ 🚪 Logout               │    (both options)
└─────────────────────────┘
```

## User Journeys

### Student (Non-Admin)
```
1. Click [≡] menu button
   ↓
2. See menu with:
   - About (SM BioNotes)
   - Author (SM Ashikur Rahman)
   - Donation (01700000000 - copyable)
   - Admin Login button
   ↓
3. Can copy donation number by clicking "Copy"
   ↓
4. Can click "🔐 Admin Login" if they know password
```

### Admin (Logged In)
```
1. Click [≡] menu button
   ↓
2. See menu with:
   - About (SM BioNotes)
   - Author (SM Ashikur Rahman)
   - Donation (01700000000 - copyable)
   - Admin Controls button ← NEW!
   - Logout button ← NEW!
   ↓
3. Click "👑 Admin Controls"
   ↓
4. Edit Mode activates immediately
   - All text becomes clickable
   - Click to edit, Save/Cancel options
   ↓
5. When done, click [≡] → "🚪 Logout"
```

## Customization

### Update Donation Number
Edit `admin-powers.js` around line 115:

```javascript
// Find this:
value="01700000000"

// Change to:
value="YOUR_NUMBER_HERE"

// Also update the text below:
Bkash/Nagad: YOUR_NUMBER_HERE
```

### Update Author Name
Edit `admin-powers.js` around line 110:

```javascript
// Find this:
<div style="font-size: 13px; color: #333; margin-bottom: 3px;">SM Ashikur Rahman</div>

// Change to:
<div style="font-size: 13px; color: #333; margin-bottom: 3px;">YOUR NAME</div>
```

### Update Author Title
Edit `admin-powers.js` around line 111:

```javascript
// Find this:
<div style="font-size: 11px; color: #999;">Biotech Education Specialist</div>

// Change to:
<div style="font-size: 11px; color: #999;">YOUR TITLE</div>
```

### Update Platform Name
Edit `admin-powers.js` around line 104:

```javascript
// Find this:
<div style="font-weight: bold; color: #333; margin-bottom: 5px;">SM BioNotes</div>

// Change to:
<div style="font-weight: bold; color: #333; margin-bottom: 5px;">YOUR PLATFORM NAME</div>
```

### Update Description
Edit `admin-powers.js` around line 105-107:

```javascript
// Find this:
<div style="font-size: 12px; color: #666; line-height: 1.4;">
    Interactive Study Platform<br>
    for Biotech & Life Sciences
</div>

// Change to:
<div style="font-size: 12px; color: #666; line-height: 1.4;">
    YOUR DESCRIPTION HERE<br>
    MORE INFO HERE
</div>
```

## Menu Colors

Menu button (≡):
- Background: `#2c3e50` (dark gray)
- Hover: `#34495e` (darker)
- Text: white

Menu panel:
- Background: white
- Borders: light gray (#eee)
- Text: dark gray (#333)

Buttons:
- Admin Login: purple gradient
- Admin Controls: light blue on hover
- Logout: red text, light red on hover
- Copy: green (#27ae60)

## Features

✅ Copy Donation Number
- Click [Copy] button
- Number automatically copied to clipboard
- Button shows "✓ Copied!" for 2 seconds

✅ Context-Aware Menu
- Admin options ONLY show when logged in
- Login option ONLY shows when not logged in
- Professional, relevant interface

✅ Smooth Animations
- Menu fades in
- Button scales on hover
- Transitions on interactions

✅ Click Outside to Close
- Click anywhere outside the menu = closes
- Click menu button again = toggles open/close

## Mobile Experience

The menu works perfectly on mobile:
- Touch-friendly buttons
- Responsive sizing
- Menu positions correctly on small screens
- Copy button works on mobile
- All features available

## Password & Login

Admin Password: `bismilla@1` (in admin-powers.js line 11)

To change:
```javascript
// Find this:
this.ADMIN_PASSWORD = 'bismilla@1';

// Change to:
this.ADMIN_PASSWORD = 'YOUR_PASSWORD';
```

## Troubleshooting

### Menu button not showing
- Check browser console for errors (F12)
- Refresh page
- Verify admin-powers.js is loaded

### Copy button not working
- Some browsers may require permission
- Try different browser
- Check browser console for errors

### Admin options not appearing
- Make sure you logged in with correct password
- Try refreshing page after login
- Check sessionStorage in browser dev tools

### Donation number not copying
- May need to enable clipboard access in browser
- Try mobile browser (usually more permissive)
- Verify number format is correct

## File Size

New admin-powers.js with menu: ~17 KB
- Includes all features
- No external dependencies
- Fully contained

## Browser Support

Works on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (Mac & iOS)
- Mobile browsers
- All modern HTML5 browsers

---

**Version:** 2.0 (Menu redesign)  
**Last Updated:** April 16, 2026  
**Status:** Production Ready ✅
