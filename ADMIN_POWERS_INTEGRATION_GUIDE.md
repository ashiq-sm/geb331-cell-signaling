# Admin Powers Integration Guide

## Overview
The `admin-powers.js` module provides live editing capabilities directly within any course page. No per-page setup needed - it works universally!

## Integration (One Line!)

Add this single line to your course HTML file, just before the closing `</body>` tag:

```html
<script src="admin-powers.js"></script>
```

That's it! The script will:
- Add an "⚙️ Options" button in the top-right corner
- Handle admin login with password (bismilla@1)
- Enable live editing when logged in
- Work across all course pages

---

## How It Works

### For Students (Non-Admin)
1. See "⚙️ Options" button in top-right corner
2. Button does nothing without admin password
3. View course normally

### For Admins (After Login)
1. Click "⚙️ Options" button
2. Enter password: `bismilla@1`
3. Button changes to "👑 Admin" (pink/red gradient)
4. Click "👑 Admin" button to see menu:
   - **✏️ Edit Mode** - Enable live content editing
   - **🚪 Logout** - Exit admin mode

### Edit Mode Features
- Click any text content to edit it
- Highlighted with blue background on hover
- Full markdown support
- Save/Cancel buttons appear inline
- Changes logged to browser localStorage
- Real-time updates on page

---

## Technical Details

### How It Stores Changes
- **Session**: Stored in `sessionStorage` (survives page refresh, clears on browser close)
- **Local Changes Log**: Stored in `localStorage` under `adminChanges` key
- **Automatic Backup**: Last 50 edits kept for reference

### Password Management
- **Default Password**: `bismilla@1`
- **Location**: In the script (`this.ADMIN_PASSWORD`)
- **To Change**: Edit line in `admin-powers.js`:
  ```javascript
  this.ADMIN_PASSWORD = 'your-new-password';
  ```

### Session Keys
- `sm_bioNotes_adminSession` - Tracks login state per browser session

---

## Where to Add the Script

### Example for GEB335_FERMENTATION_TECH_INTERACTIVE.html

Find the line before `</body>`:
```html
    </div>
    <!-- Add admin powers here -->
    <script src="admin-powers.js"></script>
</body>
```

### Example for All Course Pages

Just add one line before the final `</body>` tag in each:
- GEB331_MASTER_EXAM_PREP_INTERACTIVE_v4_FINAL.html
- GEB334_ONCOLOGY_VIROLOGY_INTERACTIVE.html
- GEB335_FERMENTATION_TECH_INTERACTIVE.html
- GEB341_AQUACULTURE_INTERACTIVE.html
- GEB343_BIOPROCESS_INTERACTIVE_v1.html

---

## Features

✅ **Password Protected**
- Secure admin login with custom password
- Session-based authentication
- Clear logout function

✅ **Live Editing**
- Edit content directly on course page
- No page reload needed for changes
- Markdown formatting supported

✅ **Universal**
- Single script works across all pages
- No per-course setup scripts needed
- Scales with new courses automatically

✅ **User Friendly**
- Visual feedback with toast notifications
- Confirmation on destructive actions
- Undo/Cancel functionality

✅ **Activity Tracking**
- All edits logged with timestamps
- View in localStorage: `adminChanges`
- Helpful for auditing changes

✅ **Responsive Design**
- Works on desktop, tablet, mobile
- Fixed positioning for button visibility
- Touch-friendly interface

---

## Edit Workflow Examples

### Fix a Typo (30 seconds)
1. Login via Options menu
2. Find typo in course content
3. Click text to edit
4. Fix typo
5. Click "💾 Save"
6. ✅ Done!

### Add/Edit Question Answer
1. Scroll to question
2. Click answer text
3. Add/modify markdown
4. Save changes
5. Changes appear immediately

### Edit Multiple Items
1. Login once
2. Edit as many items as needed
3. Each gets timestamped in activity log
4. Logout when done

---

## Important Notes

⚠️ **Browser-Based Storage**
- Changes stored in browser localStorage
- Max ~5-10MB per browser
- Should backup regularly via admin.html

⚠️ **Session Duration**
- Stays logged in until browser closes
- Refresh page keeps admin session active
- Each browser/device is separate

⚠️ **Multi-User Access**
- All admins share same password
- Consider changing password per session
- Track changes with timestamp in activity log

---

## Troubleshooting

### "Options button not showing"
- Check script is loaded: Open browser console, type `window.AdminPowers`
- Verify file path to admin-powers.js is correct
- Check for JavaScript errors in console

### "Edit mode not working"
- Ensure logged in (button should show "👑 Admin")
- Try refreshing page
- Check browser console for errors

### "Changes not saving"
- Check localStorage is enabled
- Try incognito/private browsing to test
- Check browser console for error messages

### "Password not working"
- Default is `bismilla@1` (exact match, case-sensitive)
- Check for extra spaces in password input
- Verify password in script hasn't been changed

---

## Activity Log

All changes are stored in `localStorage.getItem('adminChanges')` as JSON:

```json
[
  {
    "type": "content",
    "oldContent": "Original text",
    "newContent": "Modified text",
    "timestamp": "2026-04-16T10:30:45.123Z",
    "pageURL": "https://..."
  }
]
```

### View Activity Log in Console
```javascript
JSON.parse(localStorage.getItem('adminChanges')).forEach(log => {
  console.log(log.timestamp, log.newContent);
});
```

---

## Integration Checklist

- [ ] Copy `admin-powers.js` to project folder
- [ ] Add `<script src="admin-powers.js"></script>` to each course HTML
- [ ] Test on each course page:
  - [ ] Options button appears
  - [ ] Can login with password
  - [ ] Can edit content
  - [ ] Changes save properly
  - [ ] Mobile view works
- [ ] Update course file list documentation
- [ ] Train admin team on usage

---

## File Locations

```
/home/sm/Documents/3.2/cell signal/exports/
├── admin-powers.js                          ← Universal admin script
├── admin.html                                ← Separate admin dashboard (optional)
├── ADMIN_GUIDE.md                           ← Full admin documentation
├── GEB335_FERMENTATION_TECH_INTERACTIVE.html
├── GEB341_AQUACULTURE_INTERACTIVE.html
└── ... (other course pages)
```

---

## Quick Start Summary

1. **Add one line to each course HTML:**
   ```html
   <script src="admin-powers.js"></script>
   ```

2. **Click "⚙️ Options" in any course**

3. **Login with password:** `bismilla@1`

4. **Click content to edit**

5. **Changes saved instantly!**

---

## Support

For issues or questions:
- Check browser console for errors
- Review this guide's Troubleshooting section
- Check ADMIN_GUIDE.md for general admin help
- Verify script syntax in admin-powers.js

---

**Version:** 1.0  
**Last Updated:** April 16, 2026  
**Compatible With:** All HTML5 course pages  
**Dependencies:** None (vanilla JavaScript)
