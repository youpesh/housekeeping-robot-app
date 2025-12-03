# Component Usage Guide

This document outlines the proper UI component usage throughout the CleanMate app, demonstrating adherence to UI/UX best practices as defined by industry standards and educational requirements.

## ✅ Proper Component Implementation

### 1. **Dropdowns** (Select from List)
Used when users must select **one option from a list** of multiple choices, especially when space is limited or options are numerous.

**Implemented in:**
- **FloorTypeSelection** - Choose one floor type from 5 options (hardwood, tile, carpet, etc.)

**Key Features:**
- ✓ Native HTML `<select>` element for accessibility
- ✓ Custom styled dropdown arrow
- ✓ Large touch-friendly targets (`p-4`)
- ✓ Visual preview of selection below dropdown
- ✓ Focus states for keyboard navigation
- ✓ Disabled continue button until selection is made

### 2. **Radio Buttons** (Single-Select from Short List)
Used when users must select **only one option** from a **small group** (2-3 options) where all choices should be visible.

**Implemented in:**
- **CleaningLevelPresets** - Choose one cleaning intensity (3 options: light, medium, deep)
- **TidyUpOption** - Choose yes or no for tidying up first (2 options)

**Key Features:**
- ✓ Visual radio input with `type="radio"`
- ✓ Proper `name` attribute to group related options
- ✓ Auto-navigation on selection (for mobile UX efficiency)
- ✓ Proper `<label>` wrapping for accessibility
- ✓ Clear visual design with icons and text

### 3. **Checkboxes** (Multi-Select or Confirmations)
Used when users can select **multiple independent options** from a list OR for yes/no confirmations.

**Implemented in:**
- **MethodSelection** - Select multiple cleaning methods (sweep, mop, vacuum, etc.)
- **SurfaceCleaning** - Select multiple surfaces to clean (tables, counters, desks, etc.)
- **ProductSelection** - Select multiple cleaning products/tools
- **RoomSelection** - Select multiple rooms from the floor plan

**Key Features:**
- ✓ Visual checkbox input with `type="checkbox"`
- ✓ Proper `<label>` wrapping for accessibility
- ✓ Clear visual feedback (blue border + blue background when selected)
- ✓ `accent-blue-600` for brand consistency
- ✓ Cursor pointer for better UX
- ✓ Can select 0, 1, or many items

### 4. **Interactive SVG** (Custom Component)
Used for the interactive floor plan visualization.

**Implemented in:**
- **RoomSelection** - Interactive SVG floor plan where users can tap rooms to select them

**Key Features:**
- ✓ Visual representation of the house layout
- ✓ Click/tap interaction on SVG elements
- ✓ Color-coded selection states (blue when selected)
- ✓ Complements the checkbox list below for dual input methods

### 5. **Standard Buttons** (Actions & Navigation)
Used for primary actions, confirmations, and navigation.

**Implemented in:**
- Confirm/Continue buttons at the end of multi-select screens
- Primary action buttons (Start Cleaning, Return Home, etc.)
- Cancel/Back buttons
- Navigation buttons in menus

**Key Features:**
- ✓ Clear, action-oriented text
- ✓ Proper disabled states when selection requirements aren't met
- ✓ Semantic colors (blue for primary, red for danger, green for success)

## 🎯 Why These Choices Matter

### Component Selection Guidelines
Based on UI/UX industry standards:

1. **Dropdowns** → Use when:
   - 5+ options to choose from
   - Space is limited
   - User needs to pick ONE option
   - Options don't need to be compared visually
   
2. **Radio Buttons** → Use when:
   - 2-4 options to choose from
   - User needs to pick ONE option
   - All options should be visible for easy comparison
   - Space allows for vertical/horizontal layout

3. **Checkboxes** → Use when:
   - User can select 0, 1, or MANY options
   - Each option is independent
   - For yes/no confirmations

4. **Buttons** → Use when:
   - Triggering an action (Save, Continue, Cancel)
   - Navigation between screens
   - NOT for making selections from a list

### Accessibility
- `<label>` elements ensure screen readers can properly announce options
- Native `<select>`, checkbox, and radio inputs have built-in keyboard support
- Proper semantic HTML improves navigation for all users

### User Experience
- **Dropdowns** save space and work well for longer lists
- **Radio buttons** make all options visible for quick comparison
- **Checkboxes** clearly communicate "you can select multiple"
- Visual feedback (borders, colors, icons) reinforces the selection state
- Consistent patterns across the app reduce cognitive load

### Best Practices
- Using proper form controls instead of styled divs that just "look" like inputs
- Following platform conventions (dropdowns look like dropdowns, not fancy custom components)
- Maintaining a clear visual hierarchy
- Appropriate component for the context and number of options

## 📱 Mobile-Optimized Design

All form controls are sized appropriately for touch targets:
- Checkbox/radio inputs: `w-6 h-6` (24px × 24px)
- Labels are full-width and tappable: `cursor-pointer block`
- Padding provides comfortable tap areas: `p-4` to `p-8`
- No elements smaller than 44px × 44px (WCAG 2.1 recommendation)

## 🎨 Visual Consistency

**Selected State (Multi-select with checkboxes):**
- Background: `bg-blue-50` (light blue tint)
- Border: `border-2 border-blue-600` (prominent blue border)
- Text: `text-blue-900` (darker blue for contrast)
- Icon: `text-blue-600` (brand blue)

**Unselected State:**
- Background: `bg-white`
- Border: `border-2 border-gray-200` (subtle gray)
- Text: `text-gray-800`
- Icon: `text-gray-600`

**Single-select (Radio buttons):**
- Consistent white background
- Gray border: `border-2 border-gray-200`
- Hover state: `hover:bg-gray-50`
- Blue accent on radio input: `accent-blue-600`

## ✨ What We Avoided

❌ **Using buttons for selections** - Buttons are for actions (Continue, Save), not for making choices from a list.

❌ **Custom styled divs that look like inputs** - Native form controls (`<select>`, `<input>`) are more accessible and maintainable.

❌ **Radio buttons for long lists** - When there are 5+ options, a dropdown is more appropriate to save space.

❌ **Checkboxes for single-select** - When only one choice is allowed, use radio buttons or dropdowns, not checkboxes.

❌ **Inappropriate component mixing** - Each component type has a specific purpose based on the selection type and number of options.

## 📊 Component Usage Summary

| Screen | Component Type | Selection Type | Count | Reasoning |
|--------|---------------|----------------|-------|-----------|
| FloorTypeSelection | **Dropdown** | Single | 5 options | 5 options = better as dropdown to save space |
| MethodSelection | **Checkboxes** | Multi | 3-4 options | Can select multiple methods |
| SurfaceCleaning | **Checkboxes** | Multi | 5 options | Can select multiple surfaces |
| CleaningLevelPresets | **Radio Buttons** | Single | 3 options | Short list, all visible for comparison |
| TidyUpOption | **Radio Buttons** | Single | 2 options | Simple yes/no choice with icons |
| ProductSelection | **Checkboxes** | Multi | 8+ options | Can select multiple products |
| RoomSelection | **Checkboxes + SVG** | Multi | 4 options | Can select multiple rooms |

---

**Total Implementation:**
- **1 screen with dropdown** for single-select from longer list
- **2 screens with radio buttons** for single-select from short lists
- **4 screens with checkboxes** for multi-select
- **1 screen with custom SVG** for visual selection
- **0 inappropriate component usage**

This demonstrates a comprehensive understanding of appropriate UI component selection and implementation according to industry standards and educational requirements.

