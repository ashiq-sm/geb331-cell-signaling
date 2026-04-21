# SM BioNotes - Advanced Content Management Guide

## Overview

The admin-powers.js system now includes comprehensive **content management features** that allow authorized administrators to edit, add, remove, and organize questions and sets directly from any course page—without touching any code or HTML files.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Features Overview](#features-overview)
3. [Step-by-Step Workflows](#step-by-step-workflows)
4. [Activity Logging](#activity-logging)
5. [Troubleshooting](#troubleshooting)
6. [Tips & Best Practices](#tips--best-practices)

---

## Quick Start

### Accessing Admin Mode

1. **Click the menu button** (≡) at the top-right corner of any course page
2. **Select "🔐 Admin Login"** (if not already logged in)
3. **Enter password**: `bismilla@1`
4. **Click "Unlock"** — you'll see the page reload with admin features enabled
5. **Click menu again** → **"👑 Admin Controls"** to start editing

### You'll See:
- **Purple gradient control bar** at the top with three buttons:
  - ➕ **Add Question** (green)
  - ➕ **Create Set** (blue)
  - 🚪 **Exit Edit Mode** (red)

---

## Features Overview

### 1. **Edit Question Titles**
- Click the **✏️ Edit** button on any question
- Modal opens with current question text
- Make changes, click **Save**, or **Cancel**
- Changes appear immediately on page

### 2. **Edit Answer Content**
- Click **✏️ Edit Answer** button on any answer paragraph
- Full modal with larger text area for detailed content
- **Markdown supported**: `**bold** *italic* # heading - list > quote`
- Click **Save** to update immediately

### 3. **Add New Questions**
- Click **➕ Add Question** button (green) in control bar
- Fill in:
  - **Question Title**: e.g., "Q1.2.3 - What is photosynthesis?"
  - **Answer**: Full answer with markdown if desired
- Click **✅ Add Question** to create and insert on page
- New question appears with edit/delete controls

### 4. **Delete Questions**
- Click **🗑️ Delete** button on any question
- Confirm deletion in popup
- Question removed from page immediately

### 5. **Create New Sets/Topics**
- Click **➕ Create Set** button (blue) in control bar
- Fill in:
  - **Set Name**: e.g., "Chapter 1 - Introduction"
  - **Description** (optional): Additional context
- New set appears with three control buttons:
  - ✏️ **Edit Set** — change name/description
  - 📋 **Duplicate** — create exact copy with "(Copy)" suffix
  - 🗑️ **Delete** — remove entire set

### 6. **Edit Sets**
- Click **✏️ Edit Set** button on any set
- Modal opens with current name and description
- Make changes, click **💾 Save**
- Changes update instantly

### 7. **Duplicate Sets**
- Click **📋 Duplicate** on any set
- Entire set cloned with "(Copy)" appended to name
- New copy inserted right after original
- All buttons work on duplicated set

### 8. **Delete Sets**
- Click **🗑️ Delete** on any set
- Confirm: "Delete this entire set and all its questions?"
- Entire set and all its questions removed

---

## Step-by-Step Workflows

### Workflow A: Correcting Multiple Question Typos

```
1. Log in via menu → "🔐 Admin Login" → password: bismilla@1
2. Click menu again → "👑 Admin Controls" to enable edit mode
3. Purple control bar appears at top
4. For each question:
   - Scroll to the question
   - Click its ✏️ Edit button
   - Fix typo in modal
   - Click Save
   - Toast notification confirms: "✅ Question updated!"
5. Exit edit mode: Click red "🚪 Exit Edit Mode" button
6. Menu closes, page returns to normal view
```

### Workflow B: Adding a New Question Set

```
1. Enable edit mode (same as above)
2. Click blue ➕ "Create Set" button
3. Enter set name (e.g., "Additional Practice Questions")
4. Optionally add description
5. Click ✅ Create Set
6. New set appears with controls:
   - ✏️ Edit Set — to rename/redescribe anytime
   - 📋 Duplicate — to create multiple similar sets
   - 🗑️ Delete — to remove if no longer needed
```

### Workflow C: Bulk Content Updates

```
1. Create a new set with ➕ Create Set
2. Click ➕ Add Question multiple times:
   - Add Q1
   - Add Q2
   - Add Q3
   - etc.
3. Edit each question as needed with ✏️ Edit buttons
4. When satisfied, exit edit mode
5. All changes logged automatically
```

### Workflow D: Duplicating and Modifying a Set

```
1. Enable edit mode
2. Scroll to set you want to duplicate
3. Click 📋 Duplicate button
4. Set is cloned with "(Copy)" in name
5. Click ✏️ Edit Set on the copy
6. Update name/description as needed
7. Click ✏️ Edit on individual questions to customize them
8. Exit when done
Result: Original set unchanged, new customized version created
```

---

## Activity Logging

All admin activities are automatically logged to browser's **localStorage** for audit purposes.

### What Gets Logged:
- **Type**: question, answer, or set
- **Action**: create, edit, delete, duplicate
- **Old Value**: Previous content
- **New Value**: Updated content
- **Timestamp**: ISO date/time of change
- **Page URL**: Which course page the edit occurred on

### Viewing the Log:
Open browser **Developer Tools** (F12):
```javascript
// View all recent activity (up to 100 entries)
JSON.parse(localStorage.getItem('adminChanges'))

// Clear all activity logs
localStorage.removeItem('adminChanges')
```

### Last 100 Changes Kept:
- Automatically limited to prevent excessive storage
- Older entries are discarded when limit reached
- Useful for tracking who made what changes and when

---

## Troubleshooting

### Problem: Buttons don't appear after login
**Solution:**
- Refresh the page: `Ctrl+R` or `Cmd+R`
- Check that password is correct: `bismilla@1`
- Clear browser cache if still issues
- Session may have expired — log out and log back in

### Problem: Edits don't save
**Solution:**
- Check browser console (F12) for JavaScript errors
- Ensure you clicked "Save" or "Add" button (not just closed modal)
- Verify page hasn't refreshed unexpectedly
- Some changes may require page refresh to fully persist

### Problem: Newly added questions disappear on refresh
**Solution:**
- This is **expected behavior** — changes are visible during session but require backend integration to persist
- For now, screenshot or note changes for manual permanent updates
- Suggestion: Save changes to a document/notes during edit session

### Problem: Control bar covers content
**Solution:**
- Click **Exit Edit Mode** button to close and continue reading
- Bar repositions itself to stay accessible
- Use scrolling to view content below bar

### Problem: Modal won't close
**Solution:**
- Click **Cancel** or **✕** button explicitly
- If stuck, reload page: `F5` or `Ctrl+R`
- Check browser console for errors

### Problem: Duplicate Set adds "(Copy)" multiple times
**Solution:**
- This is correct behavior — each duplicate adds suffix
- You can edit set name with ✏️ Edit Set to clean it up
- E.g., "Chapter 1 (Copy) (Copy)" → rename to "Chapter 1 - Version 2"

---

## Tips & Best Practices

### ✅ Do's:

- ✅ **Screenshot important changes** — for your records if persistence is needed
- ✅ **Use clear naming** — "Chapter 3 - Photosynthesis" better than "Ch3"
- ✅ **Organize with sets** — group related questions in sets for clarity
- ✅ **Markdown for formatting** — `**bold**` and `*italic*` improve readability
- ✅ **Test after major edits** — verify questions appear correctly
- ✅ **Log out when done** — click menu → **"🚪 Logout"** for security
- ✅ **Use descriptive descriptions** — helps when duplicating sets later

### ❌ Don'ts:

- ❌ **Leave admin logged in** — always logout when finished
- ❌ **Delete without confirming** — deletions are immediate
- ❌ **Share password** — `bismilla@1` is for authorized admins only
- ❌ **Expect permanent persistence** — changes are session-based without backend
- ❌ **Create excessively long answers** — consider breaking into multiple questions
- ❌ **Duplicate sets carelessly** — can create clutter; clean up unused copies
- ❌ **Use special characters in titles** — stick to alphanumeric, hyphens, spaces

### Performance Tips:

- Large answer text (1000+ characters) may slow down rendering
- Keep markdown simple; complex nested markdown may not render perfectly
- Limit to 100-200 questions per page for smooth performance
- Close edit mode when not actively editing to reduce memory usage

### Keyboard Shortcuts (When Modal Open):

- **Enter key** — Confirm save (in password field during login)
- **Tab** — Move between fields
- **Escape** — Close modal (if implemented)

---

## Advanced: Markdown Formatting Guide

When editing answers, you can use markdown for rich formatting:

| Syntax | Example | Result |
|--------|---------|--------|
| **Bold** | `**important**` | **important** |
| *Italic* | `*emphasized*` | *emphasized* |
| **_Bold Italic_** | `***both***` | ***both*** |
| # Heading | `# Title` | Large heading |
| ## Sub-heading | `## Section` | Medium heading |
| ### Sub-sub | `### Part` | Small heading |
| Bullet list | `- item 1\n- item 2` | • item 1 • item 2 |
| Numbered | `1. first\n2. second` | 1. first 2. second |
| > Quote | `> cited text` | Indented quote |
| `Code` | `` `snippet` `` | Monospace code |
| **Line break** | Double space at line end | New paragraph |

**Example Answer with Markdown:**
```
## Photosynthesis Overview

**Definition**: The process by which plants convert...

### Key Steps:
1. **Light reactions** - occur in thylakoids
2. **Calvin cycle** - occurs in stroma
3. **Glucose synthesis** - final product

> "Life depends on the sun" - Carl Sagan

Special molecules involved: `Chlorophyll`, `ATP`, `NADPH`
```

---

## Summary

| Feature | Button | Result |
|---------|--------|--------|
| Edit question title | ✏️ Edit | Modal → update → Save |
| Edit answer | ✏️ Edit Answer | Modal → update → Save |
| Add question | ➕ Add Question | Modal → fill → Save → appears |
| Delete question | 🗑️ Delete | Confirm → removed |
| Create set | ➕ Create Set | Modal → name → created |
| Edit set | ✏️ Edit Set | Modal → update → Save |
| Duplicate set | 📋 Duplicate | Clone with "(Copy)" suffix |
| Delete set | 🗑️ Delete | Confirm → removed |
| Exit edit mode | 🚪 Exit Edit Mode | Control bar closes |

---

## Questions?

For issues or feature requests:
1. Check **Troubleshooting** section above
2. Review **Browser Console** (F12) for error messages
3. Log activity via localStorage for debugging info
4. Contact admin support with specific steps to reproduce

---

**Last Updated**: December 2024  
**Version**: 3.0 (Advanced Content Management)  
**Compatibility**: All browsers with ES6+ JavaScript support
