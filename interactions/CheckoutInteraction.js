const CheckoutPage = require('../pages/CheckoutPage');

class CheckoutInteraction {
  constructor(page) {
    this.checkoutPage = new CheckoutPage(page);
  }

  async placeOrder(firstName, lastName, postalCode) {
    await this.checkoutPage.fillCustomer(firstName, lastName, postalCode);
    await this.checkoutPage.continue();
    await this.checkoutPage.finish();
  }

  async confirmationMessage() {
    return this.checkoutPage.confirmationMessage();
  }
}

module.exports = CheckoutInteraction;
