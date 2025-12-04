# Laundry Assistant - Feedback Analysis

## Key Feedback Requirement for Laundry

### ❌ **MISSING: Confirmation Screen with Actual Information**

**Feedback Quote:** "Your confirmation screens should have actual information in it (not filler text) to make the user feel like they are actually using the app."

**Current Issue:**
- Laundry flow goes: Collect → Sorting → Wash Settings → Detergent → Additives → Dry → Timer → Store → **Completion**
- **NO REVIEW/CONFIRMATION SCREEN** before starting laundry task
- Goes directly from LaundryStore to `/completion`
- Missing the confirmation step that shows all selected laundry settings

**What Should Be Added:**
1. **Laundry Review/Confirm Screen** (similar to ReviewConfirm for cleaning)
   - Show collection location
   - Show sorting options (by color, by type)
   - Show wash settings (temperature, load size)
   - Show detergent type
   - Show additives selected
   - Show dry settings (drying setting, timer)
   - Show storage location
   - Show estimated time
   - "Start Laundry" button → Progress screen
   - "Cancel" button → Home

## Current Laundry Flow Analysis

### ✅ What's Working:
1. ✅ All 8 steps implemented correctly
2. ✅ Progress indicators on all screens
3. ✅ No scrolling required (screens split appropriately)
4. ✅ All HTA requirements met (2.4.1-2.4.5)
5. ✅ Clear navigation with back buttons and home buttons

### ❌ What's Missing (Per Feedback):
1. ❌ **Review/Confirmation Screen** - Laundry flow skips this step
2. ❌ **Progress Screen** - Laundry doesn't have a progress screen (goes to completion)
3. ❌ **Estimated Time Display** - No time estimate shown for laundry tasks

## Comparison with Cleaning Flows

**Cleaning Flow:**
- Room Selection → ... → Product Selection → **ReviewConfirm** → Progress → Completion

**Laundry Flow (Current):**
- Collect → Sorting → ... → Store → **Completion** ❌ (Missing ReviewConfirm and Progress)

**Laundry Flow (Should Be):**
- Collect → Sorting → ... → Store → **LaundryReviewConfirm** → **Progress** → Completion

## Required Fixes

1. **Add LaundryReviewConfirm Screen**
   - Display all laundry selections
   - Show estimated time
   - "Start Laundry" button
   - "Cancel" button

2. **Update LaundryStore Navigation**
   - Change from `navigate('/completion')` to `navigate('/laundry-review')`

3. **Add Laundry Progress Screen** (or reuse existing Progress screen with laundry context)
   - Show laundry progress
   - Show current task (collecting, washing, drying, storing)
   - Timer and progress bar

4. **Update ReviewConfirm to Handle Laundry** (Alternative approach)
   - Add laundry case to existing ReviewConfirm screen
   - Show laundry-specific information when `state.taskType === 'laundry'`

