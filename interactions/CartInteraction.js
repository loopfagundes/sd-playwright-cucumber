const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');

class CartInteraction {
  constructor(page) {
    this.inventoryPage = new InventoryPage(page);
    this.cartPage = new CartPage(page);
  }

  async addProduct(productSlug) {
    await this.inventoryPage.addProduct(productSlug);
  }

  async goToCheckout() {
    await this.inventoryPage.openCart();
    await this.cartPage.checkout();
  }
}

module.exports = CartInteraction;
