# Laundry Menu Flow Issue

## Current Problem

**LaundryMenu has broken routes:**
1. "Collect Laundry" → `/laundry-collect` ✅ (correct)
2. "Wash Settings" → `/laundry-wash` ❌ (route doesn't exist, should be `/laundry-wash-settings`)
3. "Dry Settings" → `/laundry-dry` ❌ (skips: sorting, wash settings, detergent, additives, timer)
4. "Storage Options" → `/laundry-store` ❌ (skips everything)

**This allows users to jump to any step, breaking the sequential flow!**

## Comparison with Cleaning Flow

**Cleaning Flow (CORRECT):**
- Home → Cleaning Menu → Choose Floor OR Surface → **Goes directly into flow**
- CleaningMenu just selects task type, then starts the sequential flow

**Laundry Flow (BROKEN):**
- Home → Laundry Menu → **Can jump to any step** ❌
- This breaks the HTA sequential flow requirement

## HTA Requirement (2.4)

The HTA shows a **sequential flow**, not a menu:
1. 2.4.1 Define Collection
2. 2.4.2 Define Sorting
3. 2.4.3 Configure Wash Cycle
4. 2.4.4 Configure Dry Cycle
5. 2.4.5 Define Post-Wash

**Users should go through steps in order, not jump around!**

## Teacher Feedback Context

Based on feedback about cleaning flows:
- "Room selection should happen in the feature, not setup"
- Sequential flow is required
- No jumping around between steps

## Solution

**Option 1: Remove LaundryMenu, go directly to flow (RECOMMENDED)**
- Home → Laundry Assistance → `/laundry-collect` (start flow immediately)
- Matches CleaningMenu pattern (just selects type, then starts flow)

**Option 2: Fix LaundryMenu to only have "Start Laundry" button**
- Home → Laundry Menu → "Start Laundry" → `/laundry-collect`
- Similar to CleaningMenu (just a selection screen, not a jump menu)

**Option 3: Keep menu but fix routes and make it informational only**
- Not recommended - breaks sequential flow requirement

## Recommended Fix

**Remove LaundryMenu entirely** and go directly from Home to `/laundry-collect`:
- Home → Laundry Assistance → `/laundry-collect` → Sorting → Wash Settings → ...

This matches:
- ✅ Cleaning flow pattern
- ✅ HTA sequential requirement
- ✅ Teacher feedback about linear flows

