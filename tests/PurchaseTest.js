const { expect } = require('@playwright/test');
const LoginInteraction = require('../interactions/LoginInteraction');
const CartInteraction = require('../interactions/CartInteraction');
const CheckoutInteraction = require('../interactions/CheckoutInteraction');

const BACKPACK_SLUG = 'sauce-labs-backpack';

class PurchaseTest {
  constructor(page) {
    this.login = new LoginInteraction(page);
    this.cart = new CartInteraction(page);
    this.checkout = new CheckoutInteraction(page);
  }

  async openStore() {
    await this.login.openStore();
  }

  async authenticate(username, password) {
    await this.login.login(username, password);
  }

  async addBackpackToCart() {
    await this.cart.addProduct(BACKPACK_SLUG);
  }

  async finishPurchase(firstName, lastName, postalCode) {
    await this.cart.goToCheckout();
    await this.checkout.placeOrder(firstName, lastName, postalCode);
  }

  async expectConfirmation(expectedMessage) {
    await expect.poll(async () => this.checkout.confirmationMessage()).toBe(expectedMessage);
  }
}

module.exports = PurchaseTest;
