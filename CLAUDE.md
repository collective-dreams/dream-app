<<<<<<< HEAD
# Dream App - T3 + Solito v4 + Supabase Stack

## Project Transformation (Session Date: June 22, 2025)
Transforming from visual testing demo to full-stack T3 + Solito v4 app with Supabase and Prisma.

## Tech Stack
- **Solito v4**: React Native + Next.js unified navigation
- **T3 Stack**: TypeScript, tRPC, Prisma
- **Supabase**: Database & Auth
- **Playwright**: Visual testing (preserved from previous setup)
- **Argos CI**: Visual regression testing

## Project Structure
```
dream-app/
├── apps/
│   ├── next/           # Next.js web app
│   └── expo/           # React Native app
├── packages/
│   ├── app/            # Shared screens & components
│   └── db/             # Prisma database layer
├── tests/              # Playwright E2E tests
└── screenshots/        # Visual test outputs
```

## Preserved Patterns from Previous Setup

### Visual Testing & Screenshot Workflow (KEEP THIS!)
The visual testing workflow is extremely valuable for ensuring UI consistency across web and mobile.

### Argos CI Integration (Visual Regression)
- **Account**: mthomas100
- **Project**: dream-app  
- **Dashboard**: https://app.argos-ci.com/mthomas100/dream-app
- **Token**: Set in `.env` file (argos_1fc3a4d7478b92b9c36b28b6f181f9d53e)

#### Configuration Files:
**.argos.json**
```json
{
  "owner": "mthomas100",
  "project": "dream-app",
  "uploadToArgos": true
}
```

**playwright.config.ts** (with Argos integration)
```typescript
use: {
  baseURL: 'http://localhost:3000',
  trace: 'on-first-retry',
  screenshot: 'only-on-failure',
},
```

#### Visual Verification Workflow
1. Make the requested change
2. Capture a screenshot: `npm test -- tests/visual-check.spec.ts --project=chromium`
3. Verify the screenshot using Read tool
4. Analyze and respond with specific observations
5. Iterate if needed

#### Critical Visual Checks to Always Perform:

When implementing any UI changes, ALWAYS proactively test these states:

1. **Interactive States Testing**
   - **Hover states**: Check contrast, readability, and visual hierarchy
   - **Focus states**: Ensure keyboard navigation is visible
   - **Active/pressed states**: Verify feedback is clear
   - **Disabled states**: Must be obviously non-interactive
   - **Loading states**: Clear indication something is happening

2. **Accessibility Checks**
   - **Color contrast**: Text must meet WCAG standards (4.5:1 for normal text, 3:1 for large)
   - **Hover contrast**: Often overlooked - hover states MUST maintain readability
   - **Focus indicators**: Visible for keyboard users
   - **Touch targets**: Minimum 44x44px on mobile
   - **Color blindness**: Don't rely solely on color for meaning

3. **Cross-State Verification**
   - Test all states in both light AND dark mode
   - Check responsive behavior at all breakpoints
   - Verify animations don't break layouts
   - Ensure text remains readable during transitions

4. **Common Pitfalls to Check**
   - Gradient overlays reducing text contrast
   - Hover effects that obscure content
   - Animations that cause layout shift
   - State changes that lose visual hierarchy
   - Background changes that make text unreadable

5. **Testing Approach**
   ```typescript
   // Always test these combinations:
   - Normal state → screenshot → verify
   - Hover state → screenshot → verify contrast
   - Active state → screenshot → verify feedback
   - Dark mode + all above states
   - Mobile + all above states
   ```

### What Makes This Flow Particularly Effective:

1. **Iterative Visual Feedback Loop**
   - Make change → Screenshot → Analyze → Adjust → Repeat
   - Each iteration builds on visual learnings from the previous one
   - Can catch subtle issues that wouldn't be obvious from code alone

2. **Specific Visual Issues to Check For**
   - **Spacing/Alignment**: Uneven padding, cramped layouts, misaligned headings
   - **Readability**: Font sizes too small, poor line height, insufficient contrast
   - **Visual Hierarchy**: Elements competing for attention, unclear importance
   - **Responsive Behavior**: How layouts break at different sizes
   - **Interactive States**: Hover effects, focus states, transitions

3. **Common LLM Blind Spots (that visual verification catches)**
   - Grid layouts that look good in code but cramped visually
   - Text that's technically readable but uncomfortably small
   - Spacing that's mathematically consistent but visually imbalanced
   - Color combinations that work in theory but clash in practice

4. **Best Practices Learned**
   - Start with an intentionally imperfect implementation to demonstrate the value
   - Take screenshots after each significant change, not just at the end
   - Describe what you see in detail - this helps identify issues systematically
   - Be specific about what "looks wrong" and why (e.g., "cards feel cramped" → "15px gap is too tight for cards this size")

5. **Hot Reload Integration**
   - Using live-server means changes appear instantly in the browser
   - User can watch the improvements happen in real-time
   - Creates a collaborative feel - "we're designing this together"

### Testing Commands (Preserved)
```bash
# Visual testing with screenshots
npm test -- tests/visual-check.spec.ts --project=chromium

# Run tests with Argos upload
export ARGOS_TOKEN=argos_1fc3a4d7478b92b9c36b28b6f181f9d53e && npm test

# Run specific tests
npm test -- tests/hello-world.spec.ts --project=chromium

# Open screenshots on Mac
open screenshots/visual-check.png
```

### Screenshot Testing Files to Create

#### tests/visual-check.spec.ts (Quick Visual Verification)
```typescript
import { test } from '@playwright/test'

test('visual check', async ({ page }) => {
  await page.goto('/')
  await page.waitForTimeout(1000)
  await page.screenshot({ path: 'screenshots/visual-check.png', fullPage: true })
})
```

#### tests/hover-visual-check.spec.ts (Hover State Testing)
```typescript
import { test } from '@playwright/test'

test('visual check of card hover states', async ({ page }) => {
  await page.goto('/')
  await page.waitForTimeout(1000)
  
  // Normal state
  await page.screenshot({ path: 'screenshots/cards-normal.png', fullPage: false })
  
  // Hover on first card
  await page.locator('.dream-card').first().hover()
  await page.waitForTimeout(500)
  await page.screenshot({ path: 'screenshots/cards-with-hover.png', fullPage: false })
  
  // Dark mode hover
  await page.locator('#theme-toggle').click()
  await page.waitForTimeout(300)
  
  await page.locator('.dream-card').first().hover()
  await page.waitForTimeout(500)
  await page.screenshot({ path: 'screenshots/cards-dark-hover.png', fullPage: false })
})
```

#### tests/responsive-check.spec.ts (Responsive Testing)
```typescript
import { test } from '@playwright/test'

test('responsive design check', async ({ page }) => {
  const viewports = {
    'mobile': { width: 375, height: 667 },
    'tablet': { width: 768, height: 1024 },
    'desktop': { width: 1440, height: 900 }
  }
  
  for (const [name, viewport] of Object.entries(viewports)) {
    await page.setViewportSize(viewport)
    await page.goto('/')
    await page.waitForTimeout(1000)
    await page.screenshot({ 
      path: `screenshots/${name}-view.png`, 
      fullPage: true 
    })
  }
})
```

### Design System Patterns (Worth Preserving)
```css
/* Gradient system */
--primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);

/* Shadow system */
--shadow-soft: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-medium: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-large: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

/* Dark mode implementation */
body.dark-mode {
  /* CSS variables approach for theming */
}
```

### Micro-interactions (Worth Preserving)
- Ripple effects on click
- Sparkle animations
- Smooth transitions
- Progress animations
- Confetti for achievements

## New Stack Setup Process

### 1. Solito v4 Setup
- ✅ Monorepo structure with apps/ and packages/
- ✅ Unified navigation with useLink and useRouter
- ✅ React Native Web integration

### 2. T3 Stack Integration
- ✅ tRPC for type-safe APIs
- ✅ Prisma ORM configured
- ✅ Next.js App Router support

### 3. Supabase Integration
- ✅ Prisma schema configured for PostgreSQL
- ⏳ Supabase MCP for database management
- ⏳ Auth with Supabase

### 4. Testing Setup
- ✅ Playwright for E2E tests
- ✅ Visual regression tests
- ✅ Argos CI integration preserved

## Git Commit Instructions (IMPORTANT - COMMIT FREQUENTLY!)

**Repository**: https://github.com/collective-dreams/dream-app

### ALWAYS Commit Changes After Making Them
After making any significant changes to files, create descriptive commits immediately. Don't wait until the end of a session!

### Commit Workflow
```bash
# Review changes before committing
git status
git diff

# Stage and commit with descriptive messages
git add .
git commit -m "feat: add dark mode toggle with smooth transitions"

# Push to GitHub
git push origin main
```

### Commit Message Format
- `feat:` - New features (e.g., "feat: add responsive navigation menu")
- `fix:` - Bug fixes (e.g., "fix: correct button alignment in dark mode")
- `test:` - Test additions or updates (e.g., "test: add visual regression tests for homepage")
- `style:` - CSS/styling changes (e.g., "style: update button colors to match brand")
- `refactor:` - Code improvements (e.g., "refactor: simplify event handler logic")
- `docs:` - Documentation updates (e.g., "docs: update setup instructions")
- `chore:` - Maintenance tasks (e.g., "chore: update dependencies")

### Examples:
```bash
# After setting up project structure
git add .
git commit -m "feat: initialize T3 + Solito v4 monorepo structure"

# After adding tRPC
git add .
git commit -m "feat: add tRPC with basic hello world procedures"

# After creating test files
git add tests/
git commit -m "test: add visual regression test suite with hover and responsive checks"

# After fixing issues
git add .
git commit -m "fix: resolve Next.js module resolution for shared packages"
```

### Important Git Rules:
1. **Commit frequently** - After each logical unit of work
2. **Keep commits focused** - One logical change per commit
3. **Write clear messages** - Future you will thank you
4. **Test before committing** - Ensure changes work properly
5. **Push regularly** - Keep GitHub repo up to date

## Development Workflow

### Local Development
```bash
# Web development
npm run dev

# Mobile development (iOS)
npm run native

# Run tests
npm test

# Visual check
npm run test:visual
```

### Testing
```bash
# Run all tests
npm test

# Visual regression tests
npm run test:visual

# Open test report
npx playwright show-report
```

## Important Notes
- Always test on both web and mobile platforms
- Use visual verification workflow for UI changes
- Ensure tRPC procedures are type-safe
- Keep Prisma schema in sync with Supabase
- Test authentication flows thoroughly

## Current Issues to Fix
1. Next.js app not loading properly - need to debug module resolution
2. tRPC integration needs testing
3. Supabase connection needs real credentials
4. Mobile app (Expo) needs testing

## Commands to Remember
```bash
# Database
npm run db:push        # Push schema to database
npm run db:studio      # Open Prisma Studio

# Development
npm run dev           # Start Next.js
npm run native        # Start Expo

# Testing
npm test              # Run all tests
npm run test:visual   # Visual check only
```
=======
# Dream App - Browser Testing Setup with Playwright MCP and Visual Regression

## RESTART CONTEXT - EVERYTHING IS SET UP! 🎉

### What We Built
Successfully created a complete browser automation testing setup with visual regression capabilities:
- **Playwright** for browser automation (clicking, typing, navigating)
- **Argos CI** for visual regression (screenshot comparison)
- **MCP Integration** for AI-powered test creation

### Completed Setup ✅
1. **Project Structure Created**:
   ```
   dream-app/
   ├── tests/example-visual.spec.ts    # Example tests with screenshots
   ├── playwright.config.ts            # Full Playwright + Argos config
   ├── package.json                    # Scripts configured
   ├── README.md                       # User documentation
   ├── CLAUDE.md                       # This file
   └── .gitignore                      # Proper ignores
   ```

2. **Dependencies Installed**:
   - @playwright/test
   - playwright  
   - @argos-ci/playwright
   - All Playwright browsers (Chromium, Firefox, WebKit)
   - @upstash/context7-mcp (globally)

3. **MCP Servers Configured** in `~/.claude_code/settings.json`:
   ```json
   {
     "mcpServers": {
       "context7": {
         "command": "npx",
         "args": ["@upstash/context7-mcp"]
       },
       "playwright": {
         "command": "npx", 
         "args": ["@playwright/mcp@latest"]
       }
     }
   }
   ```

4. **Test Scripts Ready** in package.json:
   ```bash
   npm test          # Run all tests
   npm run test:ui   # Interactive UI mode
   npm run test:headed # See browser while testing
   npm run test:debug  # Debug mode
   npm run test:report # View HTML report
   ```

### How It Works
- **Automated Testing**: Playwright clicks through pages, fills forms, navigates
- **Visual Testing**: argosScreenshot() captures screenshots at key points
- **Regression Detection**: Argos CI compares screenshots to detect UI changes
- **MCP Integration**: Natural language commands for browser automation

### Example Test Features (in tests/example-visual.spec.ts)
- Full page screenshots
- Element-specific screenshots  
- Responsive design testing (desktop/tablet/mobile)
- Interactive element testing
- Form interaction with visual verification

### User's Goal Achieved ✅
User wanted: "clicking through doing [actions] but also the screenshot aspect"
We delivered: Automated browser interactions + screenshot capture + visual regression

### Next Steps After Restart
1. Run `npm test` to see the tests in action
2. Use MCP commands to create new tests via natural language
3. Set up Argos CI account for cloud-based visual regression

### Important Notes
- MCP servers should be available after Claude Code restart
- All dependencies are installed and ready
- Tests work with real websites (example.com, playwright.dev)
- Visual regression compares screenshots automatically
>>>>>>> 2407b51d83cb362756fdc4e93e892e1b273a8997
