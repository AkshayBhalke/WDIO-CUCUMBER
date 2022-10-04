class LoginLocators {
  get EmailAdd() {
    return $("#email");
  }

  get Password() {
    return $("#password");
  }

  get LoginBtn() {
    return $(".ws-v2-button-primary.mt-1r");
  }

  get couponBtn() {
    //element by text have to change
    return $('//button[text()="Add Code "]');
  }

  get couponInputCOde() {
    return $('//div[@class="coupon-input-body"]//input');
  }

  get savecoupon() {
    return $("#save-button");
  }

  login = async function (email, password) {
    await this.EmailAdd.setValue(email);
    await this.Password.setValue(password);
    await this.LoginBtn.click();
  };
}

module.exports = new LoginLocators();
