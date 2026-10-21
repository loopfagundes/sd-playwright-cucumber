const { Given, When, Then } = require('@cucumber/cucumber');
const PurchaseTest = require('../tests/PurchaseTest');

function purchase(world) {
  if (!world.purchaseTest) {
    world.purchaseTest = new PurchaseTest(world.page);
  }
  return world.purchaseTest;
}

Given('que acesso a loja Sauce Demo', async function () {
  await purchase(this).openStore();
});

When('faço login com o usuário {string} e a senha {string}', async function (username, password) {
  await purchase(this).authenticate(username, password);
});

When('adiciono a mochila ao carrinho', async function () {
  await purchase(this).addBackpackToCart();
});

When(
  'finalizo a compra com os dados {string}, {string} e {string}',
  async function (firstName, lastName, postalCode) {
    await purchase(this).finishPurchase(firstName, lastName, postalCode);
  },
);

Then('vejo a mensagem {string}', async function (expectedMessage) {
  await purchase(this).expectConfirmation(expectedMessage);
});
