# Dream App

A modern web application with automated testing workflow using Playwright.

## Features

- **Interactive Hello World App**: Simple web interface with interactive buttons
- **Automated Testing**: Comprehensive Playwright test suite with visual regression testing
- **Live Development**: Hot-reload development server
- **Visual Testing**: Screenshot comparison with Argos CI integration

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to see the app

3. **Run tests**:
   ```bash
   # Headless testing
   npm test
   
   # Interactive test UI
   npm run test:ui
   
   # Watch mode with UI
   npm run test:watch
   ```

## Development Workflow

This project demonstrates an automated development workflow where:

1. **Make Changes**: Modify the web app code
2. **Write Tests**: Create corresponding Playwright tests
3. **Run Tests**: Automatically verify functionality
4. **Visual Regression**: Capture screenshots for comparison
5. **Iterate**: Refine code based on test results

### Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm test` - Run all tests headlessly
- `npm run test:ui` - Run tests with interactive UI
- `npm run test:headed` - Run tests in headed mode (visible browser)
- `npm run test:debug` - Debug tests
- `npm run test:report` - Show test report
- `npm run test:watch` - Watch mode with UI

## Project Structure

```
dream-app/
├── public/
│   └── index.html          # Main web application
├── tests/
│   ├── hello-world.spec.ts # App-specific tests
│   └── example.spec.ts     # Example Playwright tests
├── playwright.config.ts    # Playwright configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## Testing Stack

- **[Playwright](https://playwright.dev/)**: Modern web testing framework
- **[Argos CI](https://argos-ci.com/)**: Visual regression testing
- **Cross-browser testing**: Chrome, Firefox, Safari, and Mobile

## Configuration

### Argos CI Setup (Optional)

For visual regression testing in CI:

1. Create account at [argos-ci.com](https://argos-ci.com)
2. Copy your token and create `.env` file:
   ```
   ARGOS_TOKEN=your-token-here
   ```
3. Update `.argos.json` with your username

## Contributing

1. Make changes to the web app
2. Write corresponding tests
3. Run tests to verify functionality
4. Submit pull request

## License

MIT License