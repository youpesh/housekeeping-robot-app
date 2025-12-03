import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const APP_URL = 'http://localhost:5176'; // Update if your port is different
const SCREENSHOT_DIR = join(__dirname, 'screenshots');
const VIEWPORT = { width: 430, height: 932 }; // iPhone 14 Pro Max dimensions

// Create screenshots directory
try {
  mkdirSync(SCREENSHOT_DIR, { recursive: true });
  console.log(`📁 Screenshots will be saved to: ${SCREENSHOT_DIR}\n`);
} catch (err) {
  console.error('Error creating screenshots directory:', err);
}

// Screenshot configurations for all screens
const screenshots = [
  // 1. SPLASH & HOME
  { name: '01-splash', path: '/', wait: 500 },
  { name: '02-home', path: '/home', wait: 500 },

  // 2. HOUSE SETUP FLOW
  { name: '03-floor-plan-upload', path: '/floor-plan', wait: 500 },
  { name: '04-room-selection', path: '/room-selection', wait: 500, description: 'No rooms selected' },
  { 
    name: '05-room-selection-partial', 
    path: '/room-selection', 
    wait: 500,
    action: async (page) => {
      // Select 2 rooms
      const checkboxes = await page.$$('input[type="checkbox"]');
      if (checkboxes.length >= 2) {
        await checkboxes[0].click();
        await page.waitForTimeout(200);
        await checkboxes[1].click();
        await page.waitForTimeout(200);
      }
    },
    description: '2 rooms selected'
  },
  { 
    name: '06-room-selection-all', 
    path: '/room-selection', 
    wait: 500,
    action: async (page) => {
      // Select all rooms
      const checkboxes = await page.$$('input[type="checkbox"]');
      for (const checkbox of checkboxes) {
        await checkbox.click();
        await page.waitForTimeout(150);
      }
    },
    description: 'All rooms selected'
  },
  { name: '07-house-setup-complete', path: '/house-setup-complete', wait: 500 },

  // 3. CLEANING MENU & FLOOR/SURFACE CLEANING
  { name: '08-cleaning-menu', path: '/cleaning-menu', wait: 500 },
  
  // Floor Type Selection - Closed & Open
  { 
    name: '09-floor-type-closed', 
    path: '/floor-type', 
    wait: 500,
    description: 'Dropdown closed'
  },
  { 
    name: '10-floor-type-open', 
    path: '/floor-type', 
    wait: 500,
    action: async (page) => {
      // Click the dropdown to open it
      await page.click('button:has-text("Select a floor type")');
      await page.waitForTimeout(300);
    },
    description: 'Dropdown open'
  },
  { 
    name: '11-floor-type-hardwood', 
    path: '/floor-type', 
    wait: 500,
    action: async (page) => {
      await page.click('button:has-text("Select a floor type")');
      await page.waitForTimeout(300);
      await page.click('button:has-text("Hardwood")');
      await page.waitForTimeout(300);
    },
    description: 'Hardwood selected'
  },
  { 
    name: '12-floor-type-laminate', 
    path: '/floor-type', 
    wait: 500,
    action: async (page) => {
      await page.click('button:has-text("Select a floor type")');
      await page.waitForTimeout(300);
      await page.click('button:has-text("Laminate")');
      await page.waitForTimeout(300);
    },
    description: 'Laminate selected'
  },
  { 
    name: '13-floor-type-tile', 
    path: '/floor-type', 
    wait: 500,
    action: async (page) => {
      await page.click('button:has-text("Select a floor type")');
      await page.waitForTimeout(300);
      await page.click('button:has-text("Tile")');
      await page.waitForTimeout(300);
    },
    description: 'Tile selected'
  },
  { 
    name: '14-floor-type-carpet', 
    path: '/floor-type', 
    wait: 500,
    action: async (page) => {
      await page.click('button:has-text("Select a floor type")');
      await page.waitForTimeout(300);
      await page.click('button:has-text("Carpet")');
      await page.waitForTimeout(300);
    },
    description: 'Carpet selected'
  },
  { 
    name: '15-floor-type-deep-pile', 
    path: '/floor-type', 
    wait: 500,
    action: async (page) => {
      await page.click('button:has-text("Select a floor type")');
      await page.waitForTimeout(300);
      await page.click('button:has-text("Deep-Pile Carpet")');
      await page.waitForTimeout(300);
    },
    description: 'Deep-Pile Carpet selected'
  },
  
  // Method Selection
  { name: '16-method-selection', path: '/method-selection', wait: 500 },
  { 
    name: '17-method-selection-checked', 
    path: '/method-selection', 
    wait: 500,
    action: async (page) => {
      // Check some checkboxes
      await page.click('input[type="checkbox"]', { timeout: 1000 }).catch(() => {});
      await page.waitForTimeout(300);
    },
    description: 'With selections'
  },

  // Surface Cleaning
  { name: '18-surface-cleaning', path: '/surface-cleaning', wait: 500 },
  { 
    name: '19-surface-cleaning-checked', 
    path: '/surface-cleaning', 
    wait: 500,
    action: async (page) => {
      await page.click('input[type="checkbox"]', { timeout: 1000 }).catch(() => {});
      await page.waitForTimeout(300);
    },
    description: 'With selections'
  },

  // Cleaning Level
  { name: '20-cleaning-level', path: '/cleaning-level', wait: 500 },

  // Tidy Up
  { name: '21-tidy-up', path: '/tidy-up', wait: 500 },

  // Product Selection
  { name: '22-product-selection', path: '/product-selection', wait: 500 },
  { 
    name: '23-product-selection-checked', 
    path: '/product-selection', 
    wait: 500,
    action: async (page) => {
      await page.click('input[type="checkbox"]', { timeout: 1000 }).catch(() => {});
      await page.waitForTimeout(300);
    },
    description: 'With selections'
  },

  // Review & Confirm
  { name: '24-review-confirm', path: '/review', wait: 500 },

  // Progress
  { name: '25-progress', path: '/progress', wait: 500 },

  // Cancel Confirmation
  { name: '26-cancel-confirm', path: '/cancel-confirm', wait: 500 },

  // Completion
  { name: '27-completion', path: '/completion', wait: 500 },

  // 4. LAUNDRY MENU (main menu only, no placeholders)
  { name: '28-laundry-menu', path: '/laundry', wait: 500 },

  // 5. SCHEDULER MENU (main menu only, no placeholders)
  { name: '29-scheduler-menu', path: '/scheduler', wait: 500 },
];

async function takeScreenshots() {
  console.log('🚀 Starting screenshot capture...\n');
  
  // Launch browser
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 2, // Retina display for crisp screenshots
  });
  const page = await context.newPage();

  let successCount = 0;
  let failCount = 0;

  // Take screenshots
  for (const config of screenshots) {
    try {
      const url = `${APP_URL}${config.path}`;
      console.log(`📸 Capturing: ${config.name}${config.description ? ` (${config.description})` : ''}`);
      
      // Navigate to page
      await page.goto(url, { waitUntil: 'networkidle', timeout: 10000 });
      
      // Wait for specified time
      await page.waitForTimeout(config.wait);
      
      // Perform any custom actions (like opening dropdown)
      if (config.action) {
        await config.action(page);
      }
      
      // Take screenshot
      const screenshotPath = join(SCREENSHOT_DIR, `${config.name}.png`);
      await page.screenshot({ 
        path: screenshotPath,
        fullPage: false // Only capture viewport (mobile screen)
      });
      
      console.log(`   ✅ Saved: ${config.name}.png`);
      successCount++;
      
    } catch (error) {
      console.error(`   ❌ Failed: ${config.name} - ${error.message}`);
      failCount++;
    }
  }

  await browser.close();

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log(`📊 Screenshot Summary:`);
  console.log(`   ✅ Success: ${successCount}`);
  console.log(`   ❌ Failed: ${failCount}`);
  console.log(`   📁 Location: ${SCREENSHOT_DIR}`);
  console.log('='.repeat(50));
  
  if (successCount > 0) {
    console.log('\n🎉 Screenshots ready for Marvel!');
    console.log('\n💡 Next steps:');
    console.log('   1. Go to https://marvelapp.com');
    console.log('   2. Create a new project');
    console.log('   3. Upload all screenshots from the screenshots/ folder');
    console.log('   4. Link the screens together based on the flow');
  }
}

// Run the script
takeScreenshots().catch(console.error);

