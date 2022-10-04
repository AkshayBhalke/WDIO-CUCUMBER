const { Given, When, Then } = require("@wdio/cucumber-framework");
// const { button } = require('../pageobjects/page');
const Login = require("../pageobjects/page");

Given(/^open the login page$/, async () => {
  await browser.url(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
});

When(/^enter the username and password$/, async () => {
  await Login.username1.setValue("Admin");
  await Login.password.setValue("admin123");
});
When(/^click on login button$/, async function () {
  await $("//div//button").click();
});

Then(/^user can able to see the dashboard$/, async () => {
  expect(browser).toHaveTitle("OrangeHRM");
});
