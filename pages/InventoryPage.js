const BasePage = require('./BasePage');

class InventoryPage extends BasePage {
  constructor(page) {
    super(page);
    this.inventory = page.locator('[data-test="inventory-container"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  addToCartButton(productSlug) {
    return this.page.locator(`[data-test="add-to-cart-${productSlug}"]`);
  }

  async addProduct(productSlug) {
    await this.addToCartButton(productSlug).click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}

module.exports = InventoryPage;
