Book Management – Playwright Automation
This project contains automated UI tests for a Book Management web application using Playwright + TypeScript.
The goal of this project is to demonstrate a clean, scalable automation framework using:
    • Page Object Model (POM)
    • Step Layer abstraction
    • Reusable BasePage utilities
    • Stable locator strategy
    • Clean test structure


🧱 Project Structure

tests/
│
├── pages/        → Page Object classes
├── steps/        → Business logic layer
├── specs/        → Test cases
│
├── BasePage.ts   → Common reusable methods
└── playwright.config.ts

Architecture Overview
    • Specs contain test scenarios only
    • Steps contain test flow logic
    • Pages contain UI interaction methods
    • BasePage contains reusable helpers (header validation, row search, etc.)
This keeps the tests readable and easy to maintain.


🚀 Technologies Used
    • Playwright
    • TypeScript
    • Node.js


git clone <your-repo-url>
npm install
npx playwright install

⚙️ Installation

Clone the repository:

git clone <your-repo-url>
cd library-playwright-ts-automation

**Node.js Version:**
This project requires **Node.js 18 or higher**. Use [nvm](https://github.com/nvm-sh/nvm) to manage Node versions:

    nvm install 18
    nvm use 18

The required version is also specified in the `.nvmrc` file:

    nvm use

Install dependencies:

    npm install

Install Playwright browsers:

    npx playwright install

If you see a message about Playwright requiring a newer Node.js version, make sure you are using Node 18+ (see above).

▶️ Running Tests
Run all tests:

npx playwright test
Run in headed mode:

npx playwright test --headed
Run in debug mode:

npx playwright test --debug
Open HTML report:

npx playwright show-report

🧪 Test Coverage
Currently implemented scenarios:
    • ✅ Add new book
    • ✅ Edit existing book
    • ✅ Validate header visibility
    • ✅ Row search and interaction
    • ⏳ Delete book (optional / future enhancement)

🏗 Design Decisions
1️⃣ ID-Based Locators
Where possible, input fields use unique IDs for stable and reliable selectors.
Example:

this.page.locator('#title')
This avoids brittle text-based selectors.

2️⃣ Separation of Concerns
Instead of writing UI actions directly inside tests:
    • Tests describe what
    • Pages implement how
This keeps the test cases clean and readable.

3️⃣ Explicit Page Validation
Before interacting with forms, the framework validates that the correct page header is visible.
This prevents flaky timing issues during navigation.

📌 Example Test

test('Edit existing book successfully', async ({ page }) => {
  const booksSteps = new BooksPageSteps(page);
await page.goto('http://localhost:3000/books');
await booksSteps.editBookFlow(
    'Atomic Habits',
    'Atomic Habits - Updated',
    '35.99'
  );
});

🔮 Future Improvements
Possible enhancements:
    • Data-driven testing
    • API mocking
    • CI/CD integration (GitHub Actions)
    • Environment configuration support
    • Dockerized test execution

