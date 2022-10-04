const { When, Given, Then } = require("@wdio/cucumber-framework");

Given(/^open an herokuapp$/, async function () {
  await browser.url("https://the-internet.herokuapp.com/iframe");
});

When(/^user enter the text in input box$/, async function () {
  await browser.switchToFrame(await $('[class="tox-edit-area"] iframe'));
  // await $("#tinymce").clearValue();
  await $("#tinymce").waitForEnabled();
  await $("#tinymce").click();
  await browser.keys(["Meta", "a"]);
  await browser.keys("Delete");
  // await $('#tinymce').keys(['Meta', 'a'])
  // await $('#tinymce').keys(['Meta', 'x'])

  await $("#tinymce").setValue("hello");
  await browser.pause(5000);
});

Then(/^assert the h3 tag$/, async function () {
  const result = await $("#tinymce > p").getText();
  await expect(result).toEqual("hello");
  await browser.switchToParentFrame();
  await $(".tox-tbtn__select-label").click();
  const heading = await $("div h3").getText();
  expect(heading).toEqual("An iFrame containing the TinyMCE WYSIWYG Editor");
});
