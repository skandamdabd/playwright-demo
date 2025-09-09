import { test } from '@playwright/test';
import environments from '../config/storeurls.js';
import LoginPage from '../Page/loginpage.js';

const envName = 'beta';
const envConfig = environments[envName];

test.describe('Login and process flow', () => {
  test('Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto(envConfig.baseURL);
    await loginPage.login(envConfig.username, envConfig.password);
    await page.screenshot({ path: 'screenshots/after-login.png' });
  });

  test('Process after login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto(envConfig.baseURL);
    await loginPage.login(envConfig.username, envConfig.password);
    await loginPage.checkbuttons();
    await page.screenshot({ path: 'screenshots/after-checkbuttons.png' });
  });
});
