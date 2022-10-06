const { Given, When, Then } = require('@wdio/cucumber-framework');


Given ("open the login page",async () => {
        await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    });

When("enter the username and password",async () => {
        await $('input[name="username"]').setValue("admin")
        await $('input[name="password"]').setValue("Admin123")
    })
When("click on login button",async () => {
        const button= await $('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button')
        await button.click()
    })

Then("user can able to see dashboard",async () => {
    expect(browser).toHaveTitle('The Internet');

    })
