const { Given, When, Then } = require('@wdio/cucumber-framework');
const Login = require('/Users/akshay/Desktop/wdio cucumber/features/OrangeHrm & iFrame/pageobjects/page.js')

Given(/^open the login page1$/, async () => {
    await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
});

When(/^valid \"(.*)\" and \"(.*)\" is entered$/, async (username3, password3) => {
    await Login.login(username3, password3)
    await browser.pause(3000)
    await browser.saveScreenshot('/Users/akshay/Desktop/wdio cucumber/features/aaa.png');

})
When(/^click on login button3$/, async () => {
    const button = await $('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button')
    await button.click()
    await browser.pause(2000)

})

Then(/^user can able to see dashboard4$/, async () => {
    expect(browser).toHaveTitle('The Internet');
    await Login.logout()

})
