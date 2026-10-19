const BASE_URL = 'https://www.saucedemo.com/';

function isHeadless() {
  return process.env.HEADLESS !== 'false';
}

module.exports = {
  BASE_URL,
  isHeadless,
};
