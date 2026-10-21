const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');

class LoginInteraction {
  constructor(page) {
    this.loginPage = new LoginPage(page);
    this.inventoryPage = new InventoryPage(page);
  }

  async openStore() {
    await this.loginPage.open();
  }

  async login(username, password) {
    await this.loginPage.fillUsername(username);
    await this.loginPage.fillPassword(password);
    await this.loginPage.submit();
    await this.inventoryPage.inventory.waitFor();
  }
}

module.exports = LoginInteraction;
