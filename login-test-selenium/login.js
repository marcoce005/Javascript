// bisogna installare il pacchetto prima

//npm install selenium-webdriver

const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://www.google.com');
    await driver.findElement(By.id('ft_un')).sendKeys('marco.cellini');
    await driver.findElement(By.id('ft_pd')).sendKeys('PippoPluto', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();
