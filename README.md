# bookstack-playwright-agent
<<<<<<< HEAD

Playwright Test Agent-generated UI tests for BookStack

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

3. Configure environment:
```bash
cp .env.example .env
# Edit .env with your BookStack instance URL and credentials
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in UI mode (interactive)
npm run test:ui

# Run tests in headed mode (see browser)
npm run test:headed

# Debug tests
npm run test:debug

# Run specific test file
npx playwright test tests/auth/login.spec.ts

# Show test report
npm run test:report
```

## Generate Tests

Use Playwright's codegen to record interactions:
```bash
npm run codegen http://your-bookstack-url
```

## Project Structure

```
tests/
  ├── auth/           # Authentication tests
  ├── books/          # Book CRUD tests
  ├── pages/          # Page management tests
  ├── search/         # Search functionality tests
  └── admin/          # Admin panel tests
page-objects/         # Page Object Model classes
fixtures/             # Custom Playwright fixtures
```

## Requirements

- Node.js 18+
- A running BookStack instance
=======
Playwright Test Agent-generated UI tests for Bookstack

## Quickstart

1. Install browsers required by Playwright (one-time):

	```bash
	npx playwright install
	```

2. Run the tests:

	```bash
	npm test
	```

3. To view the HTML report after a run (if generated):

	```bash
	npm run test:ui
	```

The repo includes a minimal `playwright.config.ts` and a sample test in `tests/example.spec.ts`.
>>>>>>> setup-playwright
