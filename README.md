# Dream App - T3 Stack + Solito v4 + Supabase

A modern, full-stack monorepo combining the T3 Stack with Solito v4 for unified React Native and Next.js development.

## Tech Stack

- **Solito v4** - Unified navigation for React Native + Next.js
- **T3 Stack** - TypeScript, tRPC, Prisma
- **Supabase** - PostgreSQL database & authentication
- **Playwright** - E2E testing with visual regression
- **Tailwind CSS** - Utility-first CSS (web)
- **React Native** - Native mobile development

## Project Structure

```
dream-app/
├── apps/
│   ├── next/        # Next.js web app
│   └── expo/        # React Native app
├── packages/
│   ├── app/         # Shared screens & components
│   └── db/          # Prisma database layer
└── tests/           # Playwright E2E tests
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Fill in your Supabase credentials

4. Push database schema:
   ```bash
   npm run db:push
   ```

5. Start development:
   ```bash
   # Web development
   npm run dev

   # Mobile development
   npm run native
   ```

## Development Commands

- `npm run dev` - Start Next.js development server
- `npm run native` - Start Expo development server
- `npm test` - Run Playwright tests
- `npm run test:visual` - Run visual regression tests
- `npm run db:studio` - Open Prisma Studio
- `npm run db:push` - Push schema changes to database

## Testing

The project includes comprehensive Playwright tests with visual regression capabilities:

```bash
# Run all tests
npm test

# Run visual checks
npm run test:visual

# View test report
npx playwright show-report
```

## Database Schema

The project includes example models for users and dreams:

- **User** - Basic user model with email authentication
- **Dream** - Example feature model with user relations
- **Example** - Simple example model for testing

## Adding Dependencies

### Pure JavaScript dependencies
```bash
cd packages/app
npm install [package-name]
```

### Native dependencies (React Native)
```bash
cd apps/expo
npm install [package-name]
```

### Web-only dependencies
```bash
cd apps/next
npm install [package-name]
```

## Architecture Decisions

1. **Monorepo Structure** - Enables code sharing between web and mobile
2. **Solito v4** - Provides unified navigation with App Router support
3. **tRPC** - Type-safe API layer shared between platforms
4. **Prisma + Supabase** - Type-safe database with real-time capabilities
5. **Playwright** - Cross-browser testing with visual regression

## Next Steps

- [ ] Add authentication with Supabase Auth
- [ ] Implement real-time features
- [ ] Add more tRPC procedures
- [ ] Set up CI/CD pipeline
- [ ] Add unit tests
- [ ] Implement shared design system

## License

MIT