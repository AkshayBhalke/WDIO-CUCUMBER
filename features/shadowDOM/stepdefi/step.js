// Given open bookspawkit Site
// When User entering the shadow Dom
// Then User can enter Text in InputBox

//***not working  */

const { Given, When, Then } = require("@wdio/cucumber-framework");

Given(/^open qavbox Site$/, async function () {
  await browser.url("https://qavbox.github.io/demo/shadowDOM/");
});

When(/^User entering the shadow Dom$/, async function () {
  await browser.pause(2000);
  const main = await $("my-open-component");
  await main.shadow$("input").setValue("aaaaa");
  await browser.pause(2000);
});
Then(/^User can enter Text in InputBox$/, async function () {
  await console.log("worked");
});
