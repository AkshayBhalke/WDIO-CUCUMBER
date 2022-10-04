const { Given, When, Then } = require("@wdio/cucumber-framework");

Given(/^user visit on amazon Site$/, async function () {
  await browser.url("https://www.amazon.com/");
});

When(/^enter a iphone in search box$/, async function () {
  await (await $("#twotabsearchtextbox")).setValue("iphone");
  const elements = await $$(
    '//div[@class="s-suggestion s-suggestion-ellipsis-direction"]//span'
  );
  await elements.forEach(async function (el) {
    await el.waitForDisplayed();
    const text = await el.getText("aria-label");
    console.log(text);

    if ((await text.trim()) == "13 pro case") {
      el.click();
      return false;
    }
  });
  await browser.pause(3000);
});
When(/^click on iphone 13 case$/, async function () {});

Then(/^results visible related to 13$/, async function () {});
