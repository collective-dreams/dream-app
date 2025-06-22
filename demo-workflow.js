#!/usr/bin/env node

console.log(`
===========================================
DREAM APP - AUTOMATED TESTING WORKFLOW DEMO
===========================================

This demonstrates how Claude can:
1. Make changes to the web app
2. Write corresponding tests
3. Run tests automatically
4. Use results to refine the code

WORKFLOW EXAMPLE:
-----------------
1. You ask: "Add a button that changes the background color"

2. Claude will:
   - Update public/index.html with new button
   - Add CSS for color changes
   - Write tests that:
     * Click the button
     * Verify color changes
     * Take screenshots
   - Run the tests
   - Fix any issues found

3. The cycle continues until tests pass!

TO START:
---------
1. Run tests: npm test
2. For interactive mode: npm run test:ui
3. Ask Claude to make any change to the app!

The key is that Claude can see test results and iterate
on the code until everything works perfectly.
`);