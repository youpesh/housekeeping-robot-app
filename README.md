# 🤖 CleanMate - Housekeeping Robot Mobile App

A beautiful, mobile-first prototype for controlling a housekeeping robot. Built with React, TypeScript, Tailwind CSS, and Vite.

## 📱 Features

This prototype implements all required features from the Housekeeping Robot project:

### ✅ Implemented Screens (13 total)

1. **Home Screen** - Main menu with non-linear navigation
2. **Floor Plan Upload** - Upload or use sample floor plan
3. **Room Selection** - Interactive floor plan with room highlighting
4. **Floor Type Selection** - Choose from 5 floor types (Hardwood, Laminate, Tile, Carpet, Deep-Pile)
5. **Method Selection** - Branching cleaning methods based on floor type
6. **Surface Cleaning** - Select surfaces to clean (tables, counters, desks, etc.)
7. **Cleaning Level Presets** - Light, Medium, or Deep clean (user-defined/customizable)
8. **Tidy Up Option** - Yes/No toggle for tidying before cleaning
9. **Product Selection** - Choose tools and products with icons
10. **Review & Confirm** - Summary of all selections with Edit/Cancel options
11. **Progress Screen** - Live progress bar with ETA and task list
12. **Completion Screen** - Feedback with save preset and schedule options
13. **Cancel Confirm** - Confirmation dialog for canceling

## 🎨 Design Features

- **Mobile-First Design** - Optimized for phone screens (max-width: 430px)
- **Beautiful UI** - Modern gradients, smooth animations, and transitions
- **Professional Icons** - Lucide React icon library for clean, scalable icons
- **Interactive Elements** - Room selection with visual highlighting, progress tracking
- **Accessibility** - Large buttons, clear icons, readable fonts
- **Consistent Design** - Unified color scheme and component styling

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📸 Taking Screenshots for Marvel

The app is designed to be viewed at mobile dimensions (430px width). To take screenshots:

### Option 1: Browser DevTools
1. Open the app in your browser
2. Open DevTools (F12 or Cmd+Option+I)
3. Click the device toolbar icon (or Cmd+Shift+M)
4. Select "iPhone 14 Pro" or set custom dimensions (430px width)
5. Take screenshots of each screen

### Option 2: Window Resizing
1. Resize your browser window to ~430px width
2. The app will display in mobile view with a shadow
3. Take screenshots of each screen

## 🔄 User Flow

The complete flow through the app:

```
Home → Upload Floor Plan → Select Rooms → Floor Type → 
Cleaning Methods (branched) → Surface Cleaning → 
Cleaning Level → Tidy Up? → Product Selection → 
Review & Confirm → Progress → Completion → Home

(Cancel flow available from Progress screen)
```

## 📋 Project Requirements Coverage

### ✅ Must-Have Features (All Implemented)

- [x] Floor plan upload with interactive room selection
- [x] Visual room highlighting on tap
- [x] Non-linear navigation from home screen
- [x] 5 floor types (Hardwood, Laminate, Tile, Carpet, Deep-Pile)
- [x] Branching cleaning methods by floor type
- [x] Surface cleaning (light surfaces only)
- [x] User-defined cleaning level presets (Light/Medium/Deep)
- [x] Tidy-up Yes/No option
- [x] Product/tool selection with images
- [x] Confirmation screen with summary
- [x] Progress indicator with ETA
- [x] Completion/feedback screen
- [x] Cancel flow with confirmation

### 🚫 Excluded (As Required)

- No login/signup screens
- No supply/quantity tracking
- No robot physical attributes
- No error handling (normal path only)
- No actual AI/automation

## 🎯 Screen Checklist for Screenshots

Take screenshots in this order for your Marvel import:

1. ✅ Home (Main Menu)
2. ✅ Floor Plan Upload
3. ✅ Room Selection (with rooms highlighted)
4. ✅ Floor Type Selection
5. ✅ Method Selection (shows branching)
6. ✅ Surface Cleaning
7. ✅ Cleaning Level Presets (show customization)
8. ✅ Tidy Up Option
9. ✅ Product Selection (with icons)
10. ✅ Review & Confirm (summary)
11. ✅ Progress (with progress bar at ~50%)
12. ✅ Completion (success screen)
13. ✅ Cancel Confirmation

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **React Router 6** - Navigation
- **Tailwind CSS 3** - Styling
- **Lucide React** - Icon library
- **Vite** - Build tool

## 📱 Mobile-First Design

The app is contained in a `.mobile-container` class that:
- Max width: 430px
- Simulates a phone screen
- Includes shadow effect on desktop
- Responsive on actual mobile devices

## 🎨 Color Scheme

- **Primary**: Indigo (#6366f1) to Purple (#8b5cf6) gradients
- **Success**: Green (#10b981)
- **Warning**: Amber/Yellow
- **Danger**: Red (#ef4444)
- **Background**: Soft gradients with white cards

## 📝 Notes for Marvel Import

1. All screens are self-contained and ready for screenshots
2. Navigation is functional - click through the entire flow
3. Interactive elements (room selection, product selection) work
4. Progress bar auto-advances and completes
5. All text is readable and buttons are easily tappable

## 🏆 Project Compliance

This prototype meets all requirements from the course module:
- All required features implemented
- No prohibited features included
- Mobile-first design
- Clear, intuitive UI/UX
- Consistent design language
- Accessible interface

## 📄 License

This is a student project for educational purposes.

---

**Built by:** [Your Name]  
**Course:** HCI - Housekeeping Robot Project  
**Date:** October 2025



I will act as your client this semester.  Your job is to create a working prototype of an interface that controls a robot based on my requests.   

This is an individual project.  You will select one of two projects ideas in the discussion forum.  Toward the end of the semester, you will work with a student who has created the other project to perform testing for them.  

Please plan to include the following in your app:

• A splash/welcome screen
• Main menu (contains links to all features)
• Menu and Supporting screens for each function (this will be the bulk of your app)
• Confirmation and feedback screens


Things you should NOT do:

DO NOT INCLUDE USER SETUP, LOGIN, PRICING, OR PAYMENT SCREENS – THESE ARE RARELY ORIGINAL AND DO NOT DEMONSTRATE ORGINALITY OR INNOVATION!

DO NOT REUSE WORK FROM OTHER CLASSES – THIS WILL BE CAUGHT BY TURNITIN AND WILL RESULT IN A 0 FOR THE DELIVERABLE.

DO NOT INCLUDE ANY PHYSICAL CUSTOMIZATION OF THE ROBOT (HEIGHT, GENDER, VOICE, ETC.) OR SETTINGS (CONNECTIVITY, BATTERY LIFE, DISPLAY OPTIONS, ETC,).

DO NOT COPY EXISTING APPS.

THE ABOVE ACTIONS MAY RESULT IN: LOST POINTS, ACADEMIC MISCONDUCT, CHARGES OF PLAGIARISM, 0 POINTS FOR A DELIVERABLE AND/OR FAILURE OF THE CLASS.

Housekeeping Robot Features
 Floor and Surface Cleaning
 Laundry Assistance
 Task Scheduler



Listen

