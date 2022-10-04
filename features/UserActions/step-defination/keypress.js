const { Given, Then, When } = require("@wdio/cucumber-framework");
const Key = require("../pageObject/keyPressclass");

Given(/^user open internetHerokuAppKeypress$/, async function () {
  await browser.url("https://the-internet.herokuapp.com/key_presses");
});

When(/^Enter the key in input box$/, async function () {
  await Key.enterSearch("Tab");
});

Then(/^he gets entered key info$/, async function () {
  const res = await Key.getResultLableText();
  await browser.pause(3000);
  await console.log(res);
  await expect(res).toEqual("You entered: TAB");
});
