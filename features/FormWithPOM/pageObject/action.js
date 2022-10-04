const User = require("../userData");
const Locators = require("../pageObject/element");
// const element = require("../pageObject/element");
let createdusrid = "";
let createdpass = "";

const userid = User.usruserid;
const userpadd = User.usrpassword;

class Action {
  doClick = async (element) => {
    await element.waitForDisplayed();
    await element.click();
  };

  doSetValue = async function (element, value) {
    await element.waitForDisplayed();
    await element.setValue(value);
  };

  doGetText = async function (element) {
    await element.waitForDisplayed();
    return element.getText();
  };

  doIsDisplyOrNot = async function (element) {
    await element.waitForDisplayed();
    return await element.isDisplayed();
  };

  doGetPageTitile = async function () {
    return browser.getTitle();
  };

  doSelectdrop = async function (element, text) {
    // await element.click();
    return await element.selectByVisibleText(text);

    // return element.selectByVisibleText(text);
  };

  checkboxClick = async function (element) {
    await element.click();
  };

  doSignup = async function () {
    await this.doSetValue(Locators.userid, userid);
    await this.doSetValue(Locators.passw, userpadd);
    await this.doSetValue(Locators.repass, userpadd);
    await this.doSetValue(Locators.firstName, User.usrFirst_Name);
    await this.doSetValue(Locators.lastName, User.usrLast_Name);
    await this.doSetValue(Locators.mail, User.usrEmail);
    await this.doSetValue(Locators.phone, User.usrPhone);
    await this.doSetValue(Locators.add1, User.usrAdd1);
    await this.doSetValue(Locators.add2, User.usrAdd2);
    await this.doSetValue(Locators.city, User.usrCity);
    await this.doSetValue(Locators.state, User.usrstae);
    await this.doSetValue(Locators.zip, User.usrzip);
    await this.doSetValue(Locators.country, User.usrcountry);
  };

  doSelectdropDown = async function () {
    await this.doSelectdrop(
      await Locators.langPrefSelect,
      await User.LanguagePreference
    );

    await this.doSelectdrop(
      await Locators.fvrtCtogryselect,
      await User.FavouriteCategory
    );
  };

  doCheckboxClick = async function () {
    await this.checkboxClick(Locators.EnbleMyListselect);
    await this.checkboxClick(Locators.enebalemybanner);
    // console.log(createdusrid);

    await this.doClick(Locators.btnsaveAccount);
  };

  finalLoginIn = async function () {
    await this.doClick(Locators.signinOption);
    await this.doSetValue(Locators.finalUsername, userid);
    await this.doSetValue(Locators.finalPass, userpadd);
    await this.doClick(Locators.loginbutton);
  };

  asserts = async function () {
    await this.doIsDisplyOrNot(Locators.signOutButton);

    await Locators.WelcomeTxt.get;
    await browser.pause(4000);
    const wtxt = await this.doGetText(Locators.WelcomeTxt);
    expect(wtxt).toContain(User.usrFirst_Name);
  };
}

module.exports = new Action();
