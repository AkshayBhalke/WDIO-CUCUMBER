const { Given, When, Then } = require("@wdio/cucumber-framework");
const Locators = require("../pageObject/element");
const User = require("../userData");
const Action = require("../pageObject/action");

Given(/^user open the url of register form$/, async function () {
  await browser.url(
    "https://petstore.octoperf.com/actions/Account.action?newAccountForm="
  );
  const titile = await Locators.getpageTitile();
  await expect(titile).toEqual("JPetStore Demo");
});

When(/^Enter the all details in form and click on submit$/, async function () {
  await Action.doSignup();
  await Action.doSelectdropDown();
  await Action.doCheckboxClick();
});

When(/^user will get login page$/, async function () {
  await Action.doIsDisplyOrNot(Locators.signinOption);
});

When(/^user can login with created credential$/, async function () {
  await Action.finalLoginIn();
});

Then(/^User can see signout option$/, async function () {
  await Action.asserts();
});
