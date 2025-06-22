# Dream App - T3 + Solito v4 + Supabase Stack

## Project Transformation (Session Date: June 22, 2025)
Transforming from visual testing demo to full-stack T3 + Solito v4 app with Supabase and Prisma.

## Tech Stack
- **Solito v4**: React Native + Next.js unified navigation
- **T3 Stack**: TypeScript, tRPC, Prisma
- **Supabase**: Database & Auth
- **Playwright**: Visual testing (preserved from previous setup)

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

## Git Commit Instructions

### IMPORTANT: Commit Early and Often! 🚀
**Repository**: https://github.com/collective-dreams/dream-app

**Commit after EVERY meaningful change** - we want a detailed record of all development steps.

### Commit Frequency Guidelines
1. **Commit after each file creation or deletion**
2. **Commit after each successful feature implementation**
3. **Commit after each bug fix attempt** (even if unsuccessful)
4. **Commit before starting any major refactoring**
5. **Commit after updating dependencies**
6. **Commit after configuration changes**
7. **Commit after writing tests**
8. **Commit when switching between tasks**
9. **Commit before taking a break**
10. **Commit after debugging sessions**

### Commit Workflow
```bash
# Review changes before committing
git status
git diff

# Stage and commit with descriptive messages
git add .
git commit -m "feat: add dark mode toggle with smooth transitions"

# Push frequently to maintain remote backup
git push origin main
```

### Commit Message Format
Use conventional commits for clear history:
- `feat:` - New features (e.g., "feat: add responsive navigation menu")
- `fix:` - Bug fixes (e.g., "fix: correct button alignment in dark mode")
- `test:` - Test additions or updates (e.g., "test: add visual regression tests for homepage")
- `style:` - CSS/styling changes (e.g., "style: update button colors to match brand")
- `refactor:` - Code improvements (e.g., "refactor: simplify event handler logic")
- `docs:` - Documentation updates (e.g., "docs: update setup instructions")
- `chore:` - Maintenance tasks (e.g., "chore: update dependencies")
- `wip:` - Work in progress (e.g., "wip: debugging tRPC connection issues")
- `config:` - Configuration changes (e.g., "config: disable Argos CI integration")

### Examples of Frequent Commits:
```bash
# Creating new files
git add packages/app/src/screens/home.tsx
git commit -m "feat: create shared home screen component"

# Debugging attempts
git add apps/next/src/app/api/trpc/[trpc]/route.ts
git commit -m "wip: add superjson import to tRPC route handler"

# Configuration changes
git add playwright.config.ts
git commit -m "config: remove Argos reporter from Playwright"

# Failed attempts (still commit!)
git add tests/debug-trpc.spec.ts
git commit -m "test: add debug test for tRPC connection issues"

# Documentation updates
git add CLAUDE.md
git commit -m "docs: add frequent commit guidelines"

# Multiple related changes
git add apps/next/src/utils/api.tsx apps/next/src/app/layout.tsx
git commit -m "fix: wrap app with tRPC provider"
```

### Commit Checklist
Before moving to the next task, ask yourself:
- [ ] Have I committed my current changes?
- [ ] Is my commit message descriptive?
- [ ] Have I pushed to remote?
- [ ] Does the commit represent one logical change?

### Important Notes:
- **Never batch multiple unrelated changes** in one commit
- **Commit even failed attempts** - they provide valuable history
- **Use WIP commits** when debugging or experimenting
- **Push after every 2-3 commits** to maintain backup
- Write messages in present tense ("add" not "added")
- Include context when helpful (e.g., "fix: prevent form submission when fields are empty")

## Preserved Patterns from Previous Setup

### Visual Testing & Screenshot Workflow (KEEP THIS!)
The visual testing workflow is extremely valuable for ensuring UI consistency across web and mobile.

### Visual Verification Workflow
1. Make the requested change
2. Capture a screenshot: `npm test -- tests/visual-check.spec.ts --project=chromium`
3. Verify the screenshot using Read tool
4. Analyze and respond with specific observations
5. Iterate if needed

### Critical Visual Checks to Always Perform:

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

### Testing Commands
```bash
# Visual testing with screenshots
npm test -- tests/visual-check.spec.ts --project=chromium

# Run specific tests
npm test -- tests/app.spec.ts --project=chromium

# Open screenshots on Mac
open screenshots/visual-check.png

# Run all tests
npm test

# Debug test with console output
npm test -- tests/debug-trpc.spec.ts --project=chromium
```

### Screenshot Testing Files

#### tests/visual-check.spec.ts (Quick Visual Verification)
```typescript
import { test } from '@playwright/test'

test('visual check', async ({ page }) => {
  await page.goto('/')
  await page.waitForTimeout(1000)
  await page.screenshot({ path: 'screenshots/visual-check.png', fullPage: true })
})
```

## New Stack Setup Process

### 1. Solito v4 Setup
- ✅ Monorepo structure with apps/ and packages/
- ✅ Unified navigation with Link component (not hooks)
- ✅ React Native Web integration

### 2. T3 Stack Integration
- ✅ tRPC for type-safe APIs
- ✅ Prisma ORM configured
- ✅ Next.js App Router support
- 🔧 Debugging tRPC client-server connection

### 3. Supabase Integration
- ✅ Prisma schema configured for PostgreSQL
- ⏳ Supabase MCP for database management
- ⏳ Real database credentials needed
- ⏳ Auth with Supabase

### 4. Testing Setup
- ✅ Playwright for E2E tests
- ✅ Visual regression tests
- ✅ Argos CI integration removed for cleaner test output

## Development Workflow

### Local Development
```bash
# Web development
npm run web         # or npm run dev

# Mobile development
npm run native

# Run tests
npm test

# Visual check
npm run test:visual
```

### Database Commands
```bash
# Push schema to database
npm run db:push

# Open Prisma Studio
npm run db:studio

# Generate Prisma client
npm run db:generate
```

## Current Issues Being Fixed
1. ✅ NextRouter was not mounted error - Fixed by using Link component
2. 🔧 tRPC "Unable to transform response from server" - Debugging superjson config
3. ⏳ Supabase connection needs real credentials
4. ⏳ Mobile app (Expo) needs testing

## Important Configuration Changes Made
1. **playwright.config.ts**: Removed Argos reporter for cleaner output
2. **Solito navigation**: Changed from useLink/useRouter hooks to Link component
3. **tRPC context**: Temporarily disabled database import
4. **Dependencies**: Installed @argos-ci/playwright

## Next Session Quick Start
1. Navigate to project: `cd /Users/matthewthomas/repos/dream-app`
2. Start dev server: `npm run web`
3. Run tests: `npm test`
4. Check visual output: `open screenshots/visual-check.png`

## Key Learnings
- Solito v4 with Next.js App Router requires Link component, not hooks
- tRPC with Next.js App Router needs careful configuration
- Visual testing remains crucial for cross-platform UI consistency
- Frequent commits provide valuable development history