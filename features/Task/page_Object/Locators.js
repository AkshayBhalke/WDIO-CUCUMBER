class Locators {
  urlpage = function (location) {
    return browser.url(
      `https://qatest.commentsoldrt.com/webstore-${location}?destination=/account`
    );
  };
  get First_name() {
    return $("#customer-first-name");
  }

  get Last_name() {
    return $("#customer-last-name");
  }

  get Email() {
    return $("#customer-email");
  }

  get Password() {
    return $("#customer-password");
  }

  get CreateBtn() {
    return $(".ws-v2-button-primary.mt-2r");
  }

  get PhoneNo() {
    return $('[class="phone-input-containers"] [class="default-input"]');
  }

  get confirmBtn() {
    return $("#pink-button");
  }

  get CartValue() {
    //cart value
    return $("#cart-button");
  }

  get AddToCart() {
    return $(
      ":nth-child(11) > .info-container > .mobile-container > .add-to-cart > .desktop"
    );
  }
  get saveBtn() {
    return $("#save-button");
  }

  get DeliveryBtn() {
    return $("#one");
  }

  get DelAddFName() {
    return $('[name="firstname"]');
  }

  get DelAddLname() {
    return $('[name="lastname"]');
  }
  get DelAddLine1() {
    return $(".shipping-input-containers > :nth-child(2) > .default-input");
  }

  get DelAddLine2() {
    return $(".street-address-line-2 > .default-input");
  }
  get DelAddCity() {
    return $("#locality");
  }

  get DelState() {
    return $(".state > div > select");
  }
  get DelAddZip() {
    return $(".zip-code > .default-input");
  }
  get DelCountry() {
    return $('[autocomplete="country"]');
  }

  get DelAddSaveBtn() {
    return $("#save-button");
  }

  get CreditButton() {
    return $("#credit-card");
  }

  get CereditCrdNo() {
    return $(".InputElement.is-empty.Input.Input--empty");
  }
  get AddCredCardBtn() {
    return $("#stripe-button");
  }

  get payWithCard() {
    return $('//button[@class="_cta-button"]//img');
  }
}

module.exports = new Locators();
