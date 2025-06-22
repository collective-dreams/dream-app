# Development & Testing Workflow

## Overview
This workflow demonstrates how Claude can make changes to the web app and automatically test them using Playwright.

## The Workflow

### 1. Start the Development Server
```bash
npm run dev
```
This starts the web app at http://localhost:3000

### 2. Run Tests in Watch Mode
In a separate terminal:
```bash
npm run test:ui
```
This opens Playwright's UI mode where you can see tests run in real-time.

### 3. Make Changes & Test Cycle

When you ask Claude to make changes, here's what happens:

1. **Request a Change**: "Add a new button that shows the date"
2. **Claude Updates Code**: Modifies public/index.html
3. **Claude Updates Tests**: Adds new test cases in tests/hello-world.spec.ts
4. **Claude Runs Tests**: Executes `npm test` to verify changes work
5. **Visual Regression**: Screenshots are captured for comparison

### 4. Example Change Request

"Add a counter button that increments a number each time it's clicked"

Claude will:
1. Add HTML for the counter display and button
2. Add JavaScript to handle the increment
3. Write a test that:
   - Clicks the button multiple times
   - Verifies the counter increments
   - Takes screenshots of different states
4. Run the test to ensure it passes

## Benefits

- **Immediate Feedback**: Tests run automatically after changes
- **Visual Validation**: Screenshots catch UI regressions
- **Iterative Development**: Claude can refine based on test results
- **Full Coverage**: Both functionality and visuals are tested

## Commands Summary

```bash
# Development
npm run dev          # Start local server

# Testing
npm test            # Run all tests
npm run test:ui     # Interactive UI mode
npm run test:headed # See browser during tests
npm run test:debug  # Debug failing tests
npm run test:report # View test results
```