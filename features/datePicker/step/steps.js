const { Given, When, Then } = require("@wdio/cucumber-framework");

Given(/^user visit on automationtesting Site$/, async function () {
  await browser.url("https://demo.automationtesting.in/Datepicker.html");
});

When(/^click on perticular date$/, async function () {
  let date2 = await new Date();
  await date2.setDate((await date2.getDate()) + 100);
  let month = await date2.toLocaleString("default", { month: "long" });
  let year = await date2.getFullYear();
  let date = await date2.getDate();
  console.log(date, month, year);
  await $("#datepicker1").click();
  getMonthYear = async function () {
    const yr = await $('//span[@class="ui-datepicker-year"]').getText();
    const mt = await $('//span[@class="ui-datepicker-month"]').getText();
    if (yr === year) {
      console.log("that are same");
    } else {
      await $(".ui-datepicker-year").click();
      getMonthYear();
    }
  };
  await getMonthYear();
  await browser.pause(3000);
});

Then(/^Selected date should be visible$/, async function () {});
