const { Given,When,Then } = require("@wdio/cucumber-framework");



Given (/^User visit the login page of Automation site$/,async function(){
    await browser.url("https://www.automationexercise.com/login")
})
When (/^user valid \"(.*)\" and \"(..*)\" is entered1$/,async function(username1,password1){

    await $('form[action="/login"] input[type="email"]').isClickable()
    await $('form[action="/login"] input[type="email"]').setValue(username1)
    await $('form[action="/login"] input[type="password"]').setValue(password1)
})
When (/^click on login button1$/,async function(){

    await $('form[action="/login"] button[type="submit"]').click()      
 
})
Then (/^he will get dashboard$/,async function(){

    const logout= await $('a[href="/logout"]')
    await logout.isClickable()
    await logout.click()
    await browser.saveScreenshot('/Users/akshay/Desktop/wdio cucumber/features/aaa.png');
 

})