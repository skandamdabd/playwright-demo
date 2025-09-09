// pages/loginPage.js
export default class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = '#username';   // change selector if needed
    this.passwordField = '#password';   // change selector if needed
    this.loginButton   = 'button:has-text("Sign In")';
    this.PIMButton="//article[normalize-space()='Nebula - PIM']";
    this.Products="//a[@href='/pim/product']";

  }

  async goto(baseURL) {
    await this.page.goto(baseURL);
  }

  async login(username, password) {
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.passwordField, password);
     await this.page.waitForTimeout(2000);
    await this.page.click(this.loginButton);
  }
  async checkbuttons(){
    await this.page.click(this.PIMButton);
    await this.page.click(this.Products);
  }
}
