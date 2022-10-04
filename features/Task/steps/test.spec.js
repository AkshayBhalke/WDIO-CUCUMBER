const { Given, When, Then } = require("@wdio/cucumber-framework");
const Locators = require("../page_Object/Locators");
const LoginLocators = require("../page_Object/LoginLocators");
const { user, CrediCard, Coupon } = require("../page_Object/userData");

const mail = user.email;

Given(
  /^User visit the site and open the registration form$/,
  async function () {
    await Locators.urlpage("register");
  }
);

When(/^User fill all data and create the acount$/, async function () {
  await (await Locators.First_name).setValue(user.Fname);
  await (await Locators.Last_name).setValue(user.Lname);
  await (await Locators.Email).setValue(mail);
  await (await Locators.Password).setValue(user.Pass);
  await Locators.CreateBtn.click();
  await browser.pause(1500);
  await Locators.confirmBtn.click();
});

When(
  /^User select the item and purchase that with filling address and using credit card$/,
  async function () {
    await browser.pause(5000);
    await $(".title-container").scrollIntoView();
    // await Locators.AddToCart.click();
    await (
      await $(
        '//*[@id="vue-app-account"]/div/div[3]/div[2]/div[10]/div[2]/div[2]/div[2]/div[2]'
      )
    ).click();
    //dress selection
    // await $(".vs__search").click();
    // await $(`#vs1__option-${user.DressSize}`).click();
    //socks selection
    // await $(`:nth-child(${user.size}) > #save-button`).click();

    await Locators.saveBtn.click();
    await browser.pause(2000);
    await Locators.DeliveryBtn.click();
    await browser.pause(3000);

    await (await Locators.DelAddLine1).setValue(user.addLine1);
    await browser.pause(1600);
    await (await Locators.DelAddLine2).setValue(user.addLine2);
    await (await Locators.DelAddCity).setValue(user.city);
    await (await Locators.DelState).selectByVisibleText(user.state);
    await (await Locators.DelAddZip).setValue(user.zip);
    await (await Locators.DelCountry).selectByVisibleText(user.country);
    await Locators.DelAddSaveBtn.click();
    await browser.pause(3000);
    await Locators.CreditButton.click();
    await browser.pause(3000);
    await browser.switchToFrame(await $("//div//iframe"));
    await $('//input[@name="cardnumber"]').waitForEnabled();
    await (await $('//input[@name="cardnumber"]')).setValue(CrediCard.cardNO);
    await (await $('//input[@name="exp-date"]')).setValue(CrediCard.expDate);
    await (await $('//input[@name="cvc"]')).setValue(CrediCard.cvv);
    await (await $('//input[@name="postal"]')).setValue(user.zip);
    await browser.switchToParentFrame();
    await Locators.AddCredCardBtn.click();
    await browser.pause(2000);
    await (await Locators.payWithCard).waitForClickable();
    await (await Locators.payWithCard).click();
    await browser.pause(7000);
  }
);

Then(/^User get confirmation massage on page and logout$/, async function () {
  const welcmtxt = await $('//div[@class="modal-body"]//div//h1').getText();
  await expect(welcmtxt).toEqual("Thank you for your order!");
  //   await console.log(welcmtxt);
  await browser.pause(3000);
  await $('//button[@id="back"]').click();
  await browser.pause(3000);
  await $('//div[@class="main-sub red"]//span').scrollIntoView();
  await $('//div[@class="main-sub red"]//span').click();
  //   await browser.pause(3000);
  //   //     //asserting the url after logout
  expect(browser).toHaveUrlContaining("login");
  await browser.pause(3000);
});

Given(/^User visit site for login$/, async function () {
  await Locators.urlpage("login");
});

When(
  /^User enter created user credential and click on login$/,
  async function () {
    await LoginLocators.login(mail, user.Pass);
  }
);

Then(/^user get user name with welcome text$/, async function () {
  //     // assering the welcome text after successfull login

  const userWelComeMssg = await $('//div[@class="welcome"]').getText();
  //   console.log(userWelComeMssg);
  //   expect(userWelComeMssg).toEqual(`Welcome Back, ${user.Fname}`);
  await browser.pause(5000);
});

When(
  /^select the product and apply coupon purchase product$/,
  async function () {
    await browser.pause(5000);
    await $(".title-container").scrollIntoView();
    // await Locators.AddToCart.click();
    await (
      await $(
        '//*[@id="vue-app-account"]/div/div[3]/div[2]/div[10]/div[2]/div[2]/div[2]/div[2]'
      )
    ).click();
    //dress selection
    // await $(".vs__search").click();
    // await $(`#vs1__option-${user.DressSize}`).click();
    //socks selection
    // await $(`:nth-child(${user.size}) > #save-button`).click();

    await Locators.saveBtn.click();
    await browser.pause(2000);
    await LoginLocators.couponBtn.click();
    await browser.pause(2000);
    await LoginLocators.couponInputCOde.setValue(Coupon.twentyPer);
    await browser.pause(3000);
    await LoginLocators.savecoupon.click();
    await browser.pause(5000);
    await (await Locators.payWithCard).isClickable();
    await (await Locators.payWithCard).click();
    await browser.pause(6000);
  }
);
