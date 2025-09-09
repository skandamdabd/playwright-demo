// playwright.config.js
import { defineConfig, devices } from '@playwright/test';
import environments from './config/storeurls.js';

const envName = process.env.TEST_ENV || 'beta';
const envConfig = environments[envName];

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['allure-playwright', { 
      outputFolder: 'allure-report\allure-results',  // Specify output folder
      detail: true,
      suiteTitle: false 
    }],
  ],

  use: {
    baseURL: envConfig.baseURL,
    screenshot: 'on',
    video: 'on',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});