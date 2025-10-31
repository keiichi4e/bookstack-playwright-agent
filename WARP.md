# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Playwright Test project for generating and running UI tests against BookStack, an open-source wiki and documentation platform.

## Development Commands

Since this is a new project, these commands will need to be set up:

```bash
# Install dependencies (once package.json is created)
npm install

# Run all tests
npm test

# Run tests in UI mode for debugging
npx playwright test --ui

# Run a specific test file
npx playwright test tests/[filename].spec.ts

# Run tests in headed mode (see browser)
npx playwright test --headed

# Generate Playwright code from browser interactions
npx playwright codegen [bookstack-url]

# Show test report
npx playwright show-report
```

## Architecture Notes

### Target Application
- **BookStack**: The system under test is BookStack, a PHP-based wiki/documentation platform
- Tests should target typical BookStack workflows: authentication, page creation, book organization, search, permissions

### Test Organization
When structuring tests, organize by:
- User flows (e.g., authentication, content creation, navigation)
- User roles (e.g., admin, editor, viewer)
- Feature areas (e.g., books, pages, shelves, search)

### Playwright Best Practices for This Project
- Use Page Object Model (POM) pattern for BookStack UI components
- Store BookStack instance URL and credentials in environment variables or `.env` file
- Create fixtures for common test setup (authentication state, test data)
- Use `test.describe` blocks to group related BookStack feature tests
- Tag tests with `@smoke`, `@regression`, etc. for selective test execution
- Use `test.beforeEach` for authentication to avoid repeated login flows

### Environment Setup
- BookStack instance must be accessible (local Docker, test environment, etc.)
- Consider using `@playwright/test` API for managing authentication state
- Store test user credentials securely (never commit to git)

## File Structure Conventions

```
tests/
  ├── auth/           # Authentication-related tests
  ├── books/          # Book creation, editing, deletion
  ├── pages/          # Page management tests
  ├── search/         # Search functionality tests
  └── admin/          # Admin panel tests
fixtures/
  └── bookstack.ts    # Custom fixtures for BookStack setup
page-objects/
  ├── login.page.ts
  ├── book.page.ts
  └── page.page.ts    # BookStack Page entity
```

## Testing Strategy

### Priority Test Scenarios
1. User authentication (login/logout)
2. CRUD operations for Books, Pages, and Chapters
3. Content search and navigation
4. Permission-based access control
5. Markdown/WYSIWYG editor functionality

### Test Data Management
- Use Playwright's `test.beforeEach` and `test.afterEach` for setup/teardown
- Consider BookStack API for test data setup (if available)
- Clean up test artifacts after test runs to avoid pollution

## AI Agent Guidance

When generating tests:
- Always use TypeScript for type safety
- Prefer `page.getByRole()` and `page.getByLabel()` over CSS selectors for better maintainability
- Include proper waiting strategies (`waitForLoadState`, `waitForSelector`)
- Add descriptive test names that explain the user scenario
- Include assertions that verify both UI state and data persistence
- Handle BookStack-specific UI patterns (modal dialogs, toasts, WYSIWYG editor)
