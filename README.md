# bookstack-playwright-agent
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
