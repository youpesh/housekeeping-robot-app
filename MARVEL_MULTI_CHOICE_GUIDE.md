# 🎭 Multi-Choice Screens in Marvel - Complete Guide

## The Challenge
Marvel is a static prototype tool - it links screenshots together but doesn't have dynamic state. For multi-choice screens (like selecting multiple cleaning methods), you need to simulate the selection process with multiple screenshots.

## 📋 Your Multi-Choice Screens
1. **Room Selection** (6 rooms)
2. **Method Selection** (3-4 methods depending on floor type)
3. **Surface Cleaning** (5 surfaces)
4. **Product Selection** (varies, ~7-8 products)

---

## 🎯 Strategy 1: Simple Path (Recommended for 50-75 screenshots)

**Show 2-3 states per multi-choice screen:**

### Example: Method Selection (Hardwood)
- **Screenshot 1**: No methods selected (disabled Continue button)
- **Screenshot 2**: 2 methods selected (Sweep + Mop highlighted in green)
- **Screenshot 3**: (optional) All 3 methods selected

### How to Link in Marvel:
```
Screenshot 1 (none selected):
  → Click "Sweep" area → Goes to Screenshot 2 (Sweep selected)
  → Click "Mop" area → Goes to Screenshot 2 (Mop selected)
  → "Continue" button → Nowhere (or show alert)

Screenshot 2 (2 selected):
  → Click "Continue" button → Next screen (Surface Cleaning)
```

**Pro:** Simple, clear, manageable
**Con:** Doesn't show every possible combination

---

## 🎯 Strategy 2: Realistic Selection Flow (For 75-100 screenshots)

**Show progressive selection states:**

### Example: Surface Cleaning (5 surfaces)
- **Screenshot 1**: None selected
- **Screenshot 2**: 1 surface selected (Furniture)
- **Screenshot 3**: 2 surfaces selected (Furniture + Countertops)
- **Screenshot 4**: 3 surfaces selected (Furniture + Countertops + Desks)
- **Screenshot 5**: (skip) or add "Skip" path

### How to Link in Marvel:
```
Screenshot 1 (none):
  → Click "Furniture" hotspot → Screenshot 2
  → Click "Countertops" hotspot → Screenshot 2 (alternative)
  → "Skip This Step" button → Next screen

Screenshot 2 (1 selected):
  → Click another surface → Screenshot 3
  → "Continue" button → Next screen

Screenshot 3 (2 selected):
  → Click another surface → Screenshot 4
  → "Continue" button → Next screen

Screenshot 4 (3 selected):
  → "Continue" button → Next screen
```

**Pro:** More realistic, shows selection process
**Con:** More screenshots needed per screen

---

## 🎯 Strategy 3: Key States Only (For exactly 50 screenshots)

**Show only the most important states:**

### For Each Multi-Choice Screen:
- **State 1**: Empty state (nothing selected)
- **State 2**: Final state with selections made

### Example: Product Selection
- **Screenshot 1**: No products selected
- **Screenshot 2**: 4 products selected (final choice)

### How to Link:
```
Screenshot 1 (none):
  → Click any product area → Screenshot 2
  → "Continue" disabled → Nowhere

Screenshot 2 (final):
  → "Continue" button → Next screen
```

**Pro:** Minimal screenshots
**Con:** Skips the selection process

---

## 📊 Recommended Approach by Target Count

### For 50 Screenshots: Strategy 3
- 1 empty state + 1 final state per multi-choice screen
- **4 multi-choice screens × 2 states = 8 screenshots**

### For 75 Screenshots: Strategy 2 (Recommended)
- 3-4 progressive states per multi-choice screen
- **4 multi-choice screens × 3 states = 12 screenshots**

### For 100 Screenshots: Strategy 2 + Variations
- 4-5 progressive states per multi-choice screen
- Multiple paths showing different combinations
- **4 multi-choice screens × 5 states = 20 screenshots**

---

## 🛠️ Practical Implementation

### Step 1: Take Screenshots in Sequence

**Example: Room Selection Flow**
1. Navigate to Room Selection screen
2. Screenshot 1: No rooms selected
3. Click "Living Room"
4. Screenshot 2: 1 room selected (Living Room highlighted)
5. Click "Bedroom"
6. Screenshot 3: 2 rooms selected (Living Room + Bedroom)
7. Click "Kitchen"
8. Screenshot 4: 3 rooms selected
9. (Optional) Continue until all 6 selected

**File Naming:**
```
16-room-selection-none.png
17-room-selection-1-living.png
18-room-selection-2-living-bed.png
19-room-selection-3-living-bed-kitchen.png
```

### Step 2: Create Hotspots in Marvel

In Marvel, for each screenshot:

1. **On selectable items (not yet selected):**
   - Draw hotspot over item area
   - Link to next state showing that item selected

2. **On "Continue" button:**
   - If selections made: Link to next screen
   - If no selections: No link (or link to same screen with shake)

3. **On "Back" button:**
   - Link to previous screen

---

## 🎨 Visual Examples

### Method Selection (Hardwood - 3 options)

**Minimal Approach (3 screenshots):**
```
Screenshot 22: Method-Hardwood-None
  ├─ Click Sweep → Screenshot 23
  ├─ Click Mop → Screenshot 23
  └─ Click Polish → Screenshot 23

Screenshot 23: Method-Hardwood-2-Selected (Sweep + Mop)
  └─ Continue button → Surface Cleaning

Screenshot 24: Method-Hardwood-All (all 3)
  └─ Continue button → Surface Cleaning
```

**Detailed Approach (5 screenshots):**
```
Screenshot 22: Method-Hardwood-None
  ├─ Click Sweep → Screenshot 23
  ├─ Click Mop → Screenshot 23
  └─ Click Polish → Screenshot 23

Screenshot 23: Method-Hardwood-1-Sweep
  ├─ Click Mop → Screenshot 24
  ├─ Click Polish → Screenshot 24
  └─ Continue button → Surface Cleaning

Screenshot 24: Method-Hardwood-2-Sweep-Mop
  ├─ Click Polish → Screenshot 25
  └─ Continue button → Surface Cleaning

Screenshot 25: Method-Hardwood-2-Mop-Polish
  ├─ Click Sweep → Screenshot 26
  └─ Continue button → Surface Cleaning

Screenshot 26: Method-Hardwood-All
  └─ Continue button → Surface Cleaning
```

---

## 💡 Pro Tips

### 1. Hotspot Placement
- Make hotspots cover the entire selectable card/button
- For selected items, you can add "deselect" hotspots that go back to fewer selections
- Keep hotspot areas consistent across states

### 2. Alternative: Use "Regions"
Instead of showing every combination, show key paths:
- **Path A**: User selects 2-3 items (most common)
- **Path B**: User selects everything (edge case)
- **Path C**: User skips (if available)

### 3. Simplify with Assumptions
For your teacher, it's acceptable to show:
- "This is the state after selecting"
- Skip intermediate steps for less critical screens
- Focus detail on the most important feature screens

### 4. Add Notes in Marvel
In Marvel, you can add notes explaining:
- "User can select multiple items here"
- "In a real app, each tap would toggle selection"
- "Showing common selection pattern (2-3 items)"

---

## 📝 Recommended Multi-Choice Screenshot Plan

### For Your App (75 screenshots total):

#### Room Selection (4 screenshots)
- None selected
- 2 rooms selected
- 4 rooms selected
- All 6 rooms selected

#### Method Selection - Hardwood (3 screenshots)
- None selected
- 2 methods (Sweep + Mop)
- All 3 methods

#### Method Selection - Carpet (4 screenshots)
- None selected
- 1 method (Vacuum)
- 2 methods (Vacuum + Spot Clean)
- All 4 methods

#### Surface Cleaning (4 screenshots)
- None selected
- 1 surface
- 3 surfaces (common choice)
- All 5 surfaces

#### Product Selection - Hardwood Path (3 screenshots)
- None selected
- 3 products
- 5+ products

**Total Multi-Choice Screenshots: ~18**

---

## 🎬 Marvel Linking Strategy

### Simple Pattern for All Multi-Choice Screens:

```
State 0 (None):
  Each selectable item → State 1 or State 2
  Continue button → No link (disabled appearance)
  Back button → Previous screen

State 1 (Some selected):
  Other items → State 2
  Continue button → Next screen
  Back button → Previous screen

State 2 (More selected):
  Continue button → Next screen
  Back button → Previous screen
```

### Alternative: "Fast Path"
For less critical multi-choice screens, skip intermediate states:
```
State 0 (None):
  Any item → State Final
  
State Final (Some selected):
  Continue button → Next screen
```

---

## ✅ Final Checklist

- [ ] Identify which multi-choice screens are most important
- [ ] Decide on 2-4 states per screen based on total screenshot budget
- [ ] Take screenshots systematically (none → few → more → all)
- [ ] Name files clearly with selection state
- [ ] In Marvel, add hotspots covering entire clickable areas
- [ ] Link each hotspot to appropriate next state
- [ ] Test the flow by clicking through in Marvel
- [ ] Add explanatory notes where helpful

---

## 🎯 Bottom Line

**You don't need to show every possible combination!**

Your teacher wants to see:
- ✅ You understand multi-select UI patterns
- ✅ The flow makes logical sense
- ✅ Users can see what happens when they select items
- ✅ The prototype demonstrates the complete feature

**A few well-chosen states showing progression (none → some → more) is better than trying to capture every possible combination.**

Focus on making the flow clear and logical rather than comprehensive! 🚀




