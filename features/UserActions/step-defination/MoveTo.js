const { Given, When, Then } = require("@wdio/cucumber-framework");
const Move = require("../pageObject/moveto.class");

Given(/^user visit the amazon$/, async function () {
  await browser.url("https://www.amazon.com/");
});
When(/^move on at account&List$/, async function () {
  await Move.slide.moveTo();
  await browser.pause(3000);
});

Then(/^able to click on signin button$/, async function () {
  await Move.signinButton.waitForClickable();
  await Move.signinButton.click();
  await expect(await $("h1")).toBeDisplayed();
});
