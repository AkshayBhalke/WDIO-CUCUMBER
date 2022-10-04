const { Given, When, Then } = require("@wdio/cucumber-framework");

Given(/^user open herokuapp with fileUploading$/, async function () {
  await browser.url("https://the-internet.herokuapp.com/upload");
});

When(/^user upload the file$/, async function () {
  const filepath = "/Users/akshay/Desktop/wdio cucumber/features/aaa.png";
  const remoteFilePath = await browser.uploadFile(filepath);
  await $("#file-upload").setValue(remoteFilePath);
  await $("#file-submit").click();
  await browser.pause(3000);
});

Then(/^File should be uploaded$/, async function () {
  const uploaded = await $("#uploaded-files").getText();
  expect(uploaded).toContain("aaa");
  console.log(uploaded);
});
