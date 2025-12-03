# 📸 Marvel App Screenshot Guide

## Overview
Your app is **95% Marvel-ready**! Here's everything you need to know to capture perfect screenshots for Marvel.

## ✅ What Makes It Marvel-Friendly

1. **No Animations** - All screens are static (no hover effects, no auto-animations)
2. **Mobile-First Design** - Fixed 430px width, perfect for phone mockups
3. **Clean Navigation** - Clear buttons and flow
4. **Professional Design** - Consistent colors and styling
5. **All Screens Accessible** - Every screen can be reached via navigation

## 📋 Screenshot Checklist (14 Screens Total)

### Main Flow
1. ✅ **Splash Screen** (tap to start)
2. ✅ **Home** - Main menu with 2 buttons

### House Setup Feature (3 screens)
3. ✅ **Floor Plan Upload** - Shows upload UI
4. ✅ **Room Selection** - Shows floor plan with rooms (capture with 2-3 rooms selected)
5. ✅ **House Setup Complete** - Confirmation screen

### Floor/Surface Cleaning Feature (9 screens)
6. ✅ **Floor Type Selection** - Capture with one type selected (e.g., Hardwood)
7. ✅ **Method Selection** - Capture with 1-2 methods selected (varies by floor type)
8. ✅ **Surface Cleaning** - Capture with 2-3 surfaces selected
9. ✅ **Cleaning Level Presets** - Capture with one level selected (Light/Medium/Deep)
10. ✅ **Tidy Up Option** - Capture "Yes" selected
11. ✅ **Product Selection** - Capture with 3-4 products selected
12. ✅ **Review & Confirm** - Shows summary of all selections
13. ✅ **Progress** - See special instructions below ⚠️
14. ✅ **Completion** - Success screen with stats

### Additional Screen
15. ✅ **Cancel Confirmation** - Navigate from Progress screen

## ⚠️ Special Instructions

### Progress Screen (Screen 13)
The progress bar auto-advances. To capture at different stages:

**Option 1: Capture at Start (0-10%)**
1. Navigate to Progress screen
2. Quickly screenshot before it advances

**Option 2: Use Demo Mode (Recommended)**
1. Open `src/screens/Progress.tsx`
2. Find line 26: `const DEMO_MODE = false`
3. Change to: `const DEMO_MODE = true`
4. Find line 27: `const DEMO_PROGRESS = 45`
5. Set any value 0-100 (e.g., 45 for mid-progress)
6. Take screenshot
7. Change back to `false` when done

**Capture Multiple Progress Screenshots:**
- 0% - Just started
- 25% - Early progress
- 50% - Mid-progress ⭐ (most common)
- 75% - Almost done
- 100% - Complete (but use Completion screen instead)

### Room Selection (Screen 4)
Capture with 2-3 rooms highlighted (click rooms to select them before screenshot)

### Variable State Screens
These screens look different based on selections:
- **Method Selection** - Changes based on floor type selected
- **Review & Confirm** - Shows all your previous selections

**Tip:** Do a complete walkthrough and screenshot at each step to ensure consistency!

## 📱 How to Take Screenshots

### Recommended Method: Browser DevTools
1. Open app in browser: `npm run dev`
2. Press F12 (or Cmd+Option+I on Mac)
3. Click device toolbar icon (or Cmd+Shift+M)
4. Select "iPhone 14 Pro" or set custom: 430px width
5. Navigate through the app
6. Use browser screenshot tool or:
   - Mac: Cmd+Shift+4, then select area
   - Windows: Win+Shift+S

### Quick Tips
- Take screenshots in order (1-15) for easy organization
- Name files clearly: `01-splash.png`, `02-home.png`, etc.
- Keep browser zoom at 100%
- Include the entire mobile container (white area with shadow)

## 🎯 Marvel Import Order

Import screenshots in this order for logical flow:

**Splash → Home**

**Path 1: House Setup**
Home → Floor Plan → Room Selection → Setup Complete → Home

**Path 2: Start Cleaning**  
Home → Floor Type → Methods → Surfaces → Level → Tidy → Products → Review → Progress → Completion → Home

**Path 3: Cancel Flow**
Progress → Cancel Confirm → Home

## 🔗 Suggested Hotspots for Marvel

### Splash
- Tap anywhere → Home

### Home
- "House Setup" button → Floor Plan Upload
- "Start Cleaning" button → Floor Type Selection

### Floor Plan Upload
- Back arrow → Home
- Upload area → Room Selection
- "Use Sample Floor Plan" button → Room Selection

### Room Selection
- Back arrow → Floor Plan Upload
- Any room (interactive area) → stays on same screen (just visual change)
- "Confirm Selection" button → House Setup Complete

### House Setup Complete
- "Start Cleaning Now" button → Floor Type Selection
- "Back to Home" button → Home

### Floor Type Selection
- Back arrow → Home
- Any floor type card → (visual selection, stays on screen)
- "Next" button → Method Selection

### Method Selection
- Back arrow → Floor Type
- Any method card → (visual selection)
- "Next" button → Surface Cleaning

### Surface Cleaning
- Back arrow → Method Selection
- Any surface card → (visual selection)
- "Continue" button → Cleaning Level
- "Skip This Step" button → Cleaning Level

### Cleaning Level Presets
- Back arrow → Surface Cleaning
- Any level card → (visual selection)
- "Next" button → Tidy Up Option

### Tidy Up Option
- Back arrow → Cleaning Level
- "Yes" card → (visual selection)
- "No" card → (visual selection)
- "Next" button → Product Selection

### Product Selection
- Back arrow → Tidy Up
- Any product card → (visual selection)
- "Continue" button → Review & Confirm

### Review & Confirm
- Back arrow → Product Selection
- "Start Cleaning" button → Progress
- "Cancel" button → Home
- Edit icons (optional) → back to respective screens

### Progress
- Pause button → stays on screen (or link to same screen)
- Cancel button → Cancel Confirm

### Completion
- "Back to Home" button → Home
- "Save as Preset" button → stays on screen (alert)
- "Schedule Next Clean" button → stays on screen (alert)

### Cancel Confirm
- "Go Back to Cleaning" button → Progress
- "Yes, Cancel Cleaning" button → Home

## ✅ Final Checklist Before Submission

- [ ] All 14 screens captured
- [ ] Screenshots are 430px width
- [ ] All images named consistently
- [ ] Captured screens show proper state (selections visible)
- [ ] Progress screen captured at desired percentage
- [ ] Files organized in order
- [ ] Ready to import to Marvel!

## 🎨 Design Notes

- Primary color: Indigo (#6366f1)
- Secondary colors: Purple, Blue, Green
- Clean, modern UI with no gradients
- Professional icons from Lucide React
- Mobile-optimized at 430px max-width

---

**Good luck with your Marvel prototype!** 🚀




