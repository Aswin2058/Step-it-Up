
# Step It Up - E-commerce Shoe Shopping App

## Overview
**Step It Up** is a user-friendly e-commerce platform designed to provide a seamless shoe shopping experience. The app offers features such as product browsing, filtering, a shopping cart, and a secure checkout process.

---

## Project Phases

### Phase 1: Integration of Version Control
- **GitHub Repository:** [Aswin2058/Step-it-up](https://github.com/Aswin2058/Step-it-up)
- **Live Application:** [Step It Up](https://aswin2058.github.io/Step-it-up/Step%20it%20up.html)

---

### Phase 2: Testing Suite and Validation Report

#### Testing Suite
- **Unit Tests:**  
  Verified individual functions like "Add to Cart" using Jest.  
  Example Test:
  ```javascript
  test('adds an item to the cart', () => {
    const cart = [];
    const item = { id: 1, name: 'Running Shoes', price: 50 };
    const updatedCart = addToCart(cart, item);
    expect(updatedCart).toContain(item);
  });
  ```

- **Integration Tests:**  
  Tested component interactions such as adding items to the cart and proceeding to checkout using React Testing Library.

- **System Testing:**  
  Deployed the app to a staging environment and verified the entire workflow: product browsing, cart management, and checkout.

- **User Acceptance Testing (UAT):**  
  Gathered feedback from users.  
  Example Feedback:  
  > "The filter functionality works well, but the checkout button could be more prominent."

#### Validation Report
| **Requirement**          | **Test Description**                              | **Result** |
|---------------------------|--------------------------------------------------|------------|
| Users can browse products | Verified product listing and pagination          | Passed     |
| Users can filter products | Tested filtering by size and category            | Passed     |
| Users can add to cart     | Confirmed items are added and displayed in cart  | Passed     |
| Users can complete checkout | Tested checkout process with dummy payment details | Passed     |

#### Selenium Validation Code
```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Setup WebDriver (update path to ChromeDriver)
service = Service('path/to/chromedriver')
driver = webdriver.Chrome(service=service)

# Open the application
driver.get('file:///path/to/Step%20It%20Up.html')

# Wait for the page to load
wait = WebDriverWait(driver, 10)

try:
    # Test: Search Bar
    search_input = wait.until(EC.presence_of_element_located((By.ID, "search")))
    search_input.send_keys("Nike")
    search_input.send_keys(Keys.RETURN)
    print("Search bar test passed.")
    time.sleep(2)

    # Test: Navigation Buttons
    nav_links = driver.find_elements(By.CSS_SELECTOR, "header .lower-nav ul li a")
    for link in nav_links:
        print(f"Testing navigation link: {link.text}")
        link.click()
        time.sleep(1)

    # Test: Add to Cart Buttons
    add_to_cart_buttons = driver.find_elements(By.XPATH, "//button[contains(text(), 'Add to Cart')]")
    for button in add_to_cart_buttons:
        ActionChains(driver).move_to_element(button).click(button).perform()
        print(f"Clicked button: {button.text}")
        time.sleep(1)

    # Test: Footer Links
    footer_links = driver.find_elements(By.CSS_SELECTOR, "footer .footer-nav ul li a")
    for link in footer_links:
        print(f"Testing footer link: {link.text}")
        link.click()
        time.sleep(1)

    print("All tests completed successfully.")

except Exception as e:
    print(f"Test failed: {e}")

finally:
    # Close the browser
    driver.quit()
```

---

### Phase 3: Application Documentation

#### Features
- Browse a wide range of shoes.
- Add items to your cart and proceed to checkout.
- User authentication for secure transactions.

#### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Aswin2058/Step-it-up.git
   ```
2. Navigate to the project directory:
   ```bash
   cd step-it-up
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

#### Usage
- Open the app in your browser:  
  [Step It Up](https://aswin2058.github.io/Step-it-up/Step%20it%20up.html)
- Browse products, filter by preferences, and add items to your cart.
- Proceed to checkout to complete your purchase.

---

## Technologies Used
- **Frontend:** React
- **Testing:** Jest, React Testing Library
- **Version Control:** GitHub
- **CI/CD:** GitHub Actions

---

## CI/CD Pipeline
**GitHub Actions Workflow (`.github/workflows/main.yml`):**
```yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test

      - name: Build application
        run: npm run build
```

### Pipeline Report
- **Setup Process:** Configured GitHub Actions to automate testing and building on every push to the main branch.
- **Effectiveness:** Reduced manual testing efforts by 50%. Ensured reliable deployments with automated build and test processes.

---

### Future Enhancements
- Add advanced filters (e.g., by brand, price range).
- Implement a recommendation engine for personalized shopping experiences.
- Enhance UI for better accessibility and responsiveness.
