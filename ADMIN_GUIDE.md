# 🛠️ SM NextGen BioNotes - Admin & Moderator Guide

## ✨ Welcome to the Admin Dashboard!

This comprehensive admin panel allows you to manage all course content, edit questions, add new materials, and maintain the entire SM NextGen BioNotes platform without touching any code.

---

## 🔐 Accessing the Admin Panel

### URL
```
/admin.html
```

### Login Credentials
- **Password**: `bismilla@1`

⚠️ **IMPORTANT**: Change this password immediately in the admin settings after first login!

---

## 📊 Dashboard Overview

The admin dashboard provides a complete bird's-eye view of your platform:

### Key Metrics
- **Total Courses**: Number of course modules available
- **Total Sets/Topics**: Number of topic groups across all courses
- **Total Questions**: Complete question count
- **Last Edit**: Timestamp of most recent modification
- **Activity Log**: Real-time log of all admin actions

---

## 🎓 Managing Courses

### View All Courses
1. Click **"Manage Courses"** in the sidebar
2. See complete list with:
   - Course Code (GEB###)
   - Course Name
   - Number of sets
   - Last modification date

### Edit a Course
1. Find the course in the list
2. Click **"✏️ Edit"** button
3. Update:
   - Course Code
   - Course Name
   - Description
4. Click **"💾 Save Changes"**

### Delete a Course
1. Click **"🗑️ Delete"** on the course
2. Confirm the deletion
3. ⚠️ **WARNING**: This permanently deletes the entire course and all its content!

### Create a New Course
1. Click **"+ New Course"** in the sidebar
2. Fill in:
   - **Course Code**: e.g., GEB350
   - **Course Name**: e.g., Advanced Genetics
   - **Semester**: Select academic year/semester
   - **Course Icon**: Single emoji (e.g., 🧬)
   - **Description**: Brief overview
3. Click **"✅ Create Course"**

---

## 📂 Managing Sets / Topics

Sets are groupings of related questions within a course.

### View Sets for a Course
1. Click **"Manage Sets"** in the sidebar
2. Select a course from dropdown
3. View all sets with question count

### Edit a Set
1. Find the set in the list
2. Click **"✏️ Edit"**
3. Update:
   - Set Title
   - Content (Markdown supported)
4. Save changes

### Create a New Set
1. Click **"+ New Set"** in the sidebar
2. Select target course
3. Enter:
   - **Set Title**: e.g., "Set 1: Introduction & Basics"
   - **Set Content**: Full markdown content with headlines
4. Click **"✅ Create Set"**

### Delete a Set
1. Click **"🗑️ Delete"** on the set
2. Confirm deletion
3. ⚠️ All questions in the set will be deleted!

---

## ❓ Managing Questions

Questions are individual Q&A items within sets.

### View Questions in a Set
1. Click **"Manage Questions"** in the sidebar
2. Select a course from first dropdown
3. Select a set from second dropdown
4. View all questions in that set

### Edit a Question
1. Find the question in the list
2. Click **"✏️ Edit"**
3. Update the complete question markdown
4. Save changes

### Add a New Question
1. Click **"+ New Question"** in the sidebar
2. Select:
   - **Course**: Destination course
   - **Set**: Which set to add to
3. Enter:
   - **Question Title**: e.g., "Q1.2.1 - What is photosynthesis?"
   - **Answer/Content**: Detailed answer (supports Markdown)
4. Click **"✅ Add Question"**

### Delete a Question
1. Click **"🗑️ Delete"** on the question
2. Confirm deletion
3. ⚠️ This action cannot be undone!

---

## 📝 Content Formatting Guide

All answers and set content support **Markdown**:

### Markdown Syntax

```markdown
# Heading 1 (don't use - reserved)
## Heading 2 
### Heading 3
#### Heading 4

**Bold text**
*Italic text*
***Bold and italic***

- Bullet point 1
- Bullet point 2
  - Nested point
  
1. Numbered list
2. Second item

| Header 1 | Header 2 |
|----------|----------|
| Content  | Content  |

**Q1.2.3 - Question Title**
- First point
- Second point

> Blockquote
```

### Example Question Format

```markdown
### Q1.2.1 - Define Photosynthesis

**Definition**: Photosynthesis is the process where plants convert light energy 
into chemical energy (glucose) using water and CO2.

**Key Steps**:
1. Light-dependent reactions (in thylakoids)
2. Light-independent reactions - Calvin Cycle

**Equation**: 6CO₂ + 6H₂O + Light → C₆H₁₂O₆ + 6O₂

| Stage | Location | Products |
|-------|----------|----------|
| Light reactions | Thylakoid | ATP, NADPH |
| Calvin Cycle | Stroma | Glucose |

**Significance**: 
- Primary producer of oxygen
- Base of food chains
- Carbon cycle regulation
```

---

## 💾 Data Backup & Restoration

### Create a Backup
1. Click **"⚙️ Admin Settings"** in sidebar
2. In "Data Management" section
3. Click **"Backup (JSON)"** button
4. JSON file downloads to your computer
5. Filename: `bionotes-backup-YYYY-MM-DD.json`

### Restore from Backup
1. Click **"⚙️ Admin Settings"**
2. Click **"Restore from Backup"**
3. Select previously downloaded JSON file
4. Confirm restoration
5. ⚠️ This overwrites current data!

### Backup Contents
- Complete course structure
- All question and set data
- Activity logs
- Timestamps

---

## 📋 Activity Logging

All admin actions are automatically logged:

- Create/edit/delete operations
- Timestamp of each action
- Last 50 actions are stored
- Visible in Dashboard

**Activity Log** shows:
- ⏱️ When action occurred
- 📝 What action was performed

---

## ⚙️ Admin Settings

### Change Admin Password
⚠️ **Note**: Server-side implementation required for security. Currently shows placeholder.

### Danger Zone
1. **Clear ALL Data**: Permanent deletion of entire database
   - Requires double confirmation
   - Cannot be recovered without backup
   - Use only if starting fresh

---

## 🔄 Live Editing Workflow

### Typical Content Update Process

**Scenario**: Fix typo in GEB334 Question 1.2.1

1. Navigate to **"Manage Questions"**
2. Select "GEB334 - Oncology and Virology"
3. Select the relevant set
4. Find Q1.2.1
5. Click **"✏️ Edit"**
6. Fix the typo in the modal
7. Click **"💾 Save Changes"**
8. Changes are **live immediately** ✅

### Adding New Course Material

**Scenario**: Add new set to GEB335

1. Click **"+ New Set"** in sidebar
2. Select "GEB335 - Fermentation Technology"
3. Title: "Set 5: Advanced Fermentation Processes"
4. Paste markdown content
5. Click **"✅ Create Set"**
6. Set appears in course immediately ✅

### Creating Multiple Questions Quickly

1. Click **"+ New Question"**
2. Select course and set
3. Add first question
4. Page returns to form automatically
5. Add next question (repeat)
6. All questions saved to storage

---

## 📱 Mobile Access

The admin panel is **fully responsive**:
- Works on tablets and phones
- Touch-friendly buttons
- Optimized sidebar navigation
- Full functionality on all screen sizes

---

## 🚨 Important Safety Notes

### Data Storage
- All edits stored in **browser's localStorage**
- Data persists across sessions
- Not backed up automatically
- **Always create regular backups!**

### Before Major Changes
1. ✅ Create a backup first
2. ✅ Test in one course
3. ✅ Verify changes are correct
4. ✅ Roll back if needed using backup

### Password Security
- Never share your admin password
- Change default password immediately
- Use strong, unique password
- Don't store password in plain text

---

## 🆘 Troubleshooting

### Can't Login
- ✅ Verify password: `bismilla@1`
- ✅ Check browser console for errors
- ✅ Clear browser cache and cookies
- ✅ Try different browser

### Changes Not Saving
- ✅ Check browser storage quota
- ✅ Verify localStorage is enabled
- ✅ Check browser console for errors
- ✅ Try exporting backup (auto-saves)

### Lost Data
- ✅ Check if backup file exists
- ✅ Use "Restore from Backup" feature
- ✅ Check browser's localStorage data
- ✅ Recover from history/cache

### Slow Performance
- ✅ Reduce number of questions per set
- ✅ Clear activity log periodically
- ✅ Split courses into multiple sets
- ✅ Clear browser cache

---

## 📞 Support & Contact

For technical issues or questions about the admin panel:

- **Repository**: GitHub source code
- **Contact**: SM Ashikur Rahman (Developer)
- **Documentation**: See project README

---

## ✅ Quick Checklist for New Admins

- [ ] Change default admin password
- [ ] Test editing a single question
- [ ] Create test backup
- [ ] Try restoring backup
- [ ] Test adding new question
- [ ] Verify changes appear live
- [ ] Create regular backup schedule
- [ ] Bookmark admin.html URL
- [ ] Document any custom workflows
- [ ] Share access with team

---

## 🎯 Common Tasks Cheat Sheet

| Task | Steps |
|------|-------|
| **Fix typo** | Manage Questions → Edit → Save |
| **Add question** | + New Question → Fill form → Create |
| **Add set** | + New Set → Select course → Create |
| **Add course** | + New Course → Fill details → Create |
| **Delete question** | Manage Questions → Delete → Confirm |
| **Backup data** | Settings → Data Management → Backup |
| **Restore data** | Settings → Data Management → Restore |
| **View activity** | Dashboard → Recent Activity |
| **Change password** | Settings → Change Password |
| **Clear all data** | Settings → Danger Zone → Clear |

---

**Last Updated**: April 2026  
**Admin Panel Version**: 1.0  
**Password**: bismilla@1 (change this!)

Happy editing! 🎉
