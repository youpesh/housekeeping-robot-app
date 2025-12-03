# 📸 Screenshot Guide for Marvel

This guide will help you capture all screens and import them into Marvel for your prototype.

## 🚀 Quick Start

### Step 1: Start Your Dev Server
```bash
npm run dev
```

**Important:** Note the port number (usually `http://localhost:5176` or `5173`)

### Step 2: Update Port (if needed)
If your dev server is on a different port, edit `take-screenshots.mjs`:
```javascript
const APP_URL = 'http://localhost:YOUR_PORT'; // Update this line
```

### Step 3: Run Screenshot Script
In a **new terminal** (keep dev server running):
```bash
npm run screenshots
```

### Step 4: Check Results
Screenshots will be saved in the `screenshots/` folder with names like:
- `01-splash.png`
- `02-home.png`
- `03-floor-plan-upload.png`
- etc.

---

## 📱 What Gets Captured

The script captures **29 screens** total:

### Main Flow (20 screens):
1. **Splash** - Welcome screen
2. **Home** - Main menu (4 features)
3. **House Setup Flow** (3 screens)
   - Floor plan upload
   - Room selection
   - Setup complete
4. **Cleaning Flow** (13 screens)
   - Cleaning menu
   - Floor type (closed & open dropdown)
   - Method selection (empty & checked)
   - Surface cleaning (empty & checked)
   - Cleaning level
   - Tidy up option
   - Product selection (empty & checked)
   - Review & confirm
   - Progress
   - Cancel confirmation
   - Completion

### Additional Features (9 screens):
5. **Laundry Menu** + 4 sub-screens
6. **Scheduler Menu** + 3 sub-screens

---

## 🎨 Special Screenshots

### Dropdown States
- **07-floor-type-closed.png** - Dropdown not clicked
- **08-floor-type-open.png** - Dropdown expanded (shows all options)

### Checkbox States
- **Empty** - Shows unchecked state
- **Checked** - Shows selected state (demonstrates multi-select)

---

## 📤 Importing to Marvel

### 1. Create Marvel Account
Go to [marvelapp.com](https://marvelapp.com) and sign up (free)

### 2. Create New Project
- Click "Create new project"
- Choose "Import screens"
- Select all PNG files from `screenshots/` folder
- Upload all at once (Marvel accepts batch uploads)

### 3. Link Screens
Marvel will auto-detect tap areas. Link buttons to next screens:

**Main Flow Navigation:**
```
Splash → Home
Home → House Setup (Floor Plan Upload)
Home → Floor & Surface Cleaning (Cleaning Menu)
Home → Laundry (Laundry Menu)
Home → Scheduler (Scheduler Menu)

House Setup:
Floor Plan → Room Selection → Setup Complete → Home

Cleaning Flow:
Cleaning Menu → Floor Type → Method Selection → Surface Cleaning 
→ Cleaning Level → Tidy Up → Product Selection → Review 
→ Progress → Completion → Home

Cancel Flow:
Progress → Cancel Confirm → Home

Laundry/Scheduler:
Each menu → Sub-screens → Back to menu
```

### 4. Set Mobile Device
In Marvel project settings:
- Device: **iPhone 14 Pro Max** (430×932)
- Or **Android** (similar size)

---

## 🔧 Troubleshooting

### Problem: Screenshots are blank
**Solution:** Make sure dev server is running on port 5176
```bash
# Check if server is running
curl http://localhost:5176
```

### Problem: Script fails on some screens
**Solution:** Some screens might load slowly. Increase wait time:
```javascript
{ name: '...', path: '/...', wait: 1000 }, // Increase from 500 to 1000
```

### Problem: Port is different
**Solution:** Check terminal where `npm run dev` is running, update `APP_URL` in script

### Problem: Dropdown not opening
**Solution:** The dropdown screenshot uses automation to click it. If it fails, you can:
1. Take manual screenshot: Open browser to `http://localhost:5176/floor-type`
2. Click dropdown
3. Take screenshot (Cmd+Shift+4 on Mac, Snipping Tool on Windows)
4. Save as `08-floor-type-open.png`

---

## 📊 Expected Results

After running the script successfully:
```
📊 Screenshot Summary:
   ✅ Success: 29
   ❌ Failed: 0
   📁 Location: /path/to/screenshots
```

All 29 PNG files should be in the `screenshots/` folder, ready to upload to Marvel!

---

## 🎯 Tips for Marvel

1. **Naming Convention:** Files are numbered (01, 02, 03...) so they appear in order in Marvel
2. **Interactions:** You can add:
   - Tap anywhere → Next screen
   - Button tap → Specific screen
   - Back button → Previous screen
3. **Presentation:** Marvel generates a shareable link you can submit to your teacher
4. **Screenshots Needed:** Your teacher expects 50-100 screenshots. With variations (dropdown open/closed, checkboxes checked/unchecked), you can easily reach 50+ by taking multiple states of each screen

---

## 🆘 Need More Screenshots?

To reach 50-100 screenshots, consider capturing:
- **Different selections** on each multi-choice screen
- **Error states** (try selecting nothing and clicking Continue)
- **Loading states** (if applicable)
- **Success messages**
- **Different cleaning levels** (light, medium, deep variations)

You can modify `take-screenshots.mjs` to add more variations!

---

## ✅ Checklist

- [ ] Dev server running (`npm run dev`)
- [ ] Correct port in `take-screenshots.mjs`
- [ ] Run `npm run screenshots`
- [ ] Check `screenshots/` folder has 29 PNG files
- [ ] Upload to Marvel
- [ ] Link screens together
- [ ] Test prototype
- [ ] Get shareable link
- [ ] Submit to teacher 🎉




