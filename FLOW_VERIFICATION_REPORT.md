# Flow Verification Report - Against HTA Requirements

## Issues Found

### 1. ❌ FLOOR CLEANING FLOW ORDER (HTA 2.2)

**HTA Required Order:**
1. 2.2.1 Select floor type
2. 2.2.2 Select cleaning method
3. 2.2.3 Choose level of cleaning
4. 2.2.4 Define any extra actions
5. 2.2.5 Select cleaning product
6. 2.2.6 Confirm Selections

**Current Implementation Order:**
1. ✅ Select floor type
2. ✅ Select cleaning method
3. ❌ **Extra Actions** (should be step 4)
4. ❌ **Cleaning Level** (should be step 3)
5. Tidy Up (not in HTA for floor cleaning)
6. ✅ Select cleaning product
7. ✅ Confirm Selections

**FIX NEEDED:** Move Cleaning Level BEFORE Extra Actions

---

### 2. ❌ SURFACE CLEANING FLOW ORDER (HTA 2.3)

**HTA Required Order:**
1. 2.3.1 Select area type
2. 2.3.2 Select cleaning depth (light, medium, deep)
3. 2.3.4 Choose cleaning method
4. 2.3.5 Choose cleaning product
5. 2.3.6 Choose whether to tidy
6. 2.3.7 Confirm Choices

**Current Implementation Order:**
1. ✅ Select area type
2. ❌ **Select Surfaces** (NOT in HTA - extra step)
3. ❌ **Cleaning Method** (should be step 3, but comes after depth)
4. ❌ **Cleaning Level** (should be step 2, BEFORE methods)
5. ✅ Tidy Up
6. ✅ Select cleaning product
7. ✅ Confirm Choices

**FIXES NEEDED:**
- Remove "Select Surfaces" step OR make it optional/skip
- Move Cleaning Level to come BEFORE Method Selection
- Order should be: Area Type → Cleaning Level → Method → Product → Tidy → Confirm

---

### 3. ✅ LAUNDRY FLOW (HTA 2.4) - CORRECT

**HTA Required Order:**
1. 2.4.1 Define Collection ✅
2. 2.4.2 Define Sorting ✅
3. 2.4.3 Configure Wash Cycle ✅
   - Temperature ✅
   - Load Size ✅
   - Detergent ✅
   - Additives ✅
4. 2.4.4 Configure Dry Cycle ✅
   - Drying Setting ✅
   - Timer ✅
5. 2.4.5 Define Post-Wash ✅

**Current Implementation:** All steps present and in correct order

---

### 4. ✅ SCHEDULER FLOW (HTA 4.1-4.2) - CORRECT

**HTA Requirements:**
- 4.1 Define User Routines (Light/Medium/Deep presets) ✅
- 4.2 Schedule Tasks ✅
  - Set frequency ✅
  - Create queue/list ✅

**Current Implementation:** All requirements met

---

## Summary of Required Fixes

### Priority 1: Fix Floor Cleaning Flow Order
- Move Cleaning Level to come BEFORE Extra Actions
- Current: Floor Type → Method → **Extra Actions** → **Cleaning Level** → Tidy → Product → Confirm
- Should be: Floor Type → Method → **Cleaning Level** → **Extra Actions** → Tidy → Product → Confirm

### Priority 2: Fix Surface Cleaning Flow Order
- Remove or make optional the "Select Surfaces" step (not in HTA)
- Move Cleaning Level to come BEFORE Method Selection
- Current: Area Type → **Select Surfaces** → **Method** → **Cleaning Level** → Tidy → Product → Confirm
- Should be: Area Type → **Cleaning Level** → **Method** → Product → Tidy → Confirm

### Priority 3: Verify Tidy Up Placement
- HTA 2.3.6 says "Choose whether to tidy" - this is correct for surface cleaning
- For floor cleaning, Tidy Up is not explicitly mentioned in HTA 2.2, but it's reasonable to include

---

## Navigation Paths to Update

### Floor Cleaning:
1. MethodSelection → should go to CleaningLevel (not ExtraActions)
2. CleaningLevel → should go to ExtraActions (not TidyUp)
3. ExtraActions → should go to TidyUp (or ProductSelection if no TidyUp for floor)

### Surface Cleaning:
1. AreaTypeSelection → should go to CleaningLevel (not SurfaceCleaning)
2. SurfaceCleaning → should be removed or made optional
3. CleaningLevel → should go to SurfaceMethodSelection (not TidyUp)
4. SurfaceMethodSelection → should go to ProductSelection (not CleaningLevel)

