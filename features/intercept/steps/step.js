const { Given, When, Then } = require("@wdio/cucumber-framework");

Given("user visit reqress site", async function () {
  await browser.url("https://reqres.in/");
});

When("request the get api", async function () {
  await browser.setupInterceptor();
  await $('//li[@data-id="users"]').click();

  const respo = await browser.getRequest(
    "GET",
    "https://reqres.in/api/users/2"
  );

  console.log(respo[0].response.body);
  await browser.pause(3000);
});

Then("user get valid responce", async function () {
  //   await browser.expectRequest("GET", "/api/users?page=2", 200);
});
