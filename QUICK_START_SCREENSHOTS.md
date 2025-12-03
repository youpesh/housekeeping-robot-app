# 🚀 Quick Start: Taking Screenshots

## In 3 Simple Steps:

### 1️⃣ Start Dev Server
```bash
npm run dev
```
Leave this terminal running! Note the port (usually 5176).

### 2️⃣ Run Screenshot Script
Open a **new terminal** and run:
```bash
npm run screenshots
```

### 3️⃣ Check Results
Look in the `screenshots/` folder - you should have **29 PNG files** ready for Marvel!

---

## ✅ Expected Output:
```
🚀 Starting screenshot capture...

📸 Capturing: 01-splash
   ✅ Saved: 01-splash.png
📸 Capturing: 02-home
   ✅ Saved: 02-home.png
...
📸 Capturing: 29-scheduler-edit
   ✅ Saved: 29-scheduler-edit.png

==================================================
📊 Screenshot Summary:
   ✅ Success: 29
   ❌ Failed: 0
   📁 Location: /path/to/screenshots
==================================================

🎉 Screenshots ready for Marvel!
```

---

## 🆘 If Something Goes Wrong:

**Problem:** Port error  
**Fix:** Check your dev server's port and update line 9 in `take-screenshots.mjs`:
```javascript
const APP_URL = 'http://localhost:YOUR_PORT';
```

**Problem:** Some screenshots fail  
**Fix:** Make sure your dev server is fully loaded before running the script

---

## 📤 Next: Import to Marvel

1. Go to [marvelapp.com](https://marvelapp.com)
2. Create new project
3. Upload all 29 PNG files from `screenshots/` folder
4. Link the screens together (see SCREENSHOT_GUIDE.md for details)
5. Share link with your teacher! 🎓

---

**Need detailed help?** Check `SCREENSHOT_GUIDE.md` for full instructions!




