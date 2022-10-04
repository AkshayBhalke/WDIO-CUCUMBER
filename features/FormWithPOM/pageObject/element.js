const Action = require("../pageObject/action");

class Locators {
  get userid() {
    return $('//td//input[@name="username"]');
  }

  get passw() {
    return $('//td//input[@name="password"]');
  }

  get repass() {
    return $('//td//input[@name="repeatedPassword"]');
  }

  get firstName() {
    return $('//input[@name="account.firstName"]');
  }
  get lastName() {
    return $('//input[@name="account.lastName"]');
  }
  get mail() {
    return $('//input[@name="account.email"]');
  }
  get phone() {
    return $('//input[@name="account.phone"]');
  }
  get add1() {
    return $('//input[@name="account.address1"]');
  }
  get add2() {
    return $('//input[@name="account.address2"]');
  }
  get city() {
    return $('//input[@name="account.city"]');
  }
  get state() {
    return $('//input[@name="account.state"]');
  }
  get zip() {
    return $('//input[@name="account.zip"]');
  }
  get country() {
    return $('//input[@name="account.country"]');
  }
  get langPrefSelect() {
    return $('//select[@name="account.languagePreference"]');
  }
  get fvrtCtogryselect() {
    return $('//select[@name="account.favouriteCategoryId"]');
  }
  get EnbleMyListselect() {
    return $('//input[@name="account.listOption"]');
  }
  get btnsaveAccount() {
    return $('//input[@name="newAccount"]');
  }
  get enebalemybanner() {
    return $('//input[@name="account.bannerOption"]');
  }

  get finalUsername() {
    return $('//input[@name="username"]');
  }

  get finalPass() {
    return $('//input[@name="password"]');
  }

  get loginbutton() {
    return $('//input[@name="signon"]');
  }
  get signinOption() {
    return $('//a[text()="Sign In"]');
  }

  get signOutButton() {
    return $('//a[text()="Sign Out"]');
  }

  get WelcomeTxt() {
    return $('//div[@id="WelcomeContent"]');
  }

  getpageTitile = async function () {
    return await Action.doGetPageTitile();
  };

  isSignupBtnExist = async function () {
    return await Action.doIsDisplyOrNot(this.btnsaveAccount);
  };
}

module.exports = new Locators();
