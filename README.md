# 📚 Library System – Playwright Automation Framework

End-to-end UI automation framework built using **Playwright + TypeScript**.

This project automates and validates the Login page of:

[https://frontendui-librarysystem.onrender.com/login]

---

# 🚀 Tech Stack

* Playwright
* TypeScript
* Node.js
* Page Object Model (POM)
* Layered Test Architecture (Specs → Steps → Pages)

---

# 📁 Project Structure

```
tests/
│
├── pages/
│   └── LoginPage.ts        # UI locators and detailed implementations
│
├── steps/
│   └── loginPageSteps.ts   # Business-level reusable flows
│
└── specs/
    └── login.spec
```
# 📚 Library System – Playwright Automation Framework

End-to-end UI automation framework built using **Playwright + TypeScript**.

This project automates and validates the Login page of:

[https://frontendui-librarysystem.onrender.com/login](https://frontendui-librarysystem.onrender.com/login)

---

# 🚀 Tech Stack

* Playwright
* TypeScript
* Node.js
* Page Object Model (POM)
* Layered Test Architecture (Specs → Steps → Pages)

---

# 📁 Project Structure

```
tests/
│
├── pages/
│   └── LoginPage.ts        # UI locators and detailed implementations
│
├── steps/
│   └── loginPageSteps.ts   # Business-level reusable flows
│
└── specs/
    └── login.spec.ts       # Test definitions
```

---

# 🏗 Architecture Overview

This framework follows a clean 3-layer separation of concerns:

## 1️⃣ Specs Layer (`specs/`)

* Defines what is being tested
* Contains test scenarios only
* No UI logic

## 2️⃣ Steps Layer (`steps/`)

* Business-level reusable flows
* Combines multiple page actions
* Improves readability and scalability

## 3️⃣ Pages Layer (`pages/`)

* UI element locators
* DOM interactions
* Assertions
* No business logic

---

# ✅ Automated Test Coverage

### Login Page UI Validation

* Validate Login header text
* Validate Username label text
* Validate Password label text
* Validate Login button text

### Login Functionality

* Enter username
* Enter password
* Click Login button

---

# 🔎 Selector Strategy

This framework follows Playwright best practices:

| Element | Strategy Used          |
| ------- | ---------------------- |
| Header  | `getByRole('heading')` |
| Labels  | `label[for="id"]`      |
| Inputs  | `#id`                  |
| Buttons | `getByRole('button')`  |

### Why?

* Stable selectors
* Accessibility-aligned
* Not dependent on CSS classes
* Resistant to UI styling changes

---

# ⚙️ Setup Instructions

## 1️⃣ Install dependencies

```bash
npm install
```

## 2️⃣ Install Playwright browsers

```bash
npx playwright install
```

## 3️⃣ Run all tests

```bash
npx playwright test
```

## 4️⃣ Run tests in headed mode

```bash
npx playwright test --headed
```

## 5️⃣ Open HTML report

```bash
npx playwright show-report
```

---

# 🧪 Example Test

```ts
test('Validate Login Page UI Elements', async ({ page }) => {
  const loginSteps = new LoginPageSteps(page);

  await loginSteps.navigateToLoginPage();
  await loginSteps.validateLoginPageUI();
});
```

---

# 🎯 Design Principles

* Clean separation of concerns
* Reusable business logic
* Stable selector strategy
* Auto-wait assertions using `toHaveText`
* Scalable architecture for enterprise projects

---

# 🔮 Future Improvements

* BasePage abstraction layer
* Environment-based configuration
* Custom Playwright fixtures
* Negative login test cases
* API + UI hybrid testing
* CI/CD integration (GitHub Actions)
* Docker support
* Advanced reporting (Allure)

---

# 👨‍💻 Author

Automation framework built with Playwright and TypeScript using scalable enterprise design principles.
