// tests/login.spec.js
import { test, expect } from '@playwright/test';
import environments from '../config/storeurls.js';
import LoginPage from '../Page/loginpage.js';

// 🔹 Pick environment manually (dev, beta, prod)
const envName = 'beta';  
const envConfig = environments[envName];

test(`Login test on dev`, async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Navigate to the environment base URL
  await loginPage.goto(envConfig.baseURL);

  // Perform login
  await loginPage.login(envConfig.username, envConfig.password);

});
