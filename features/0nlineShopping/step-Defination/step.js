const { When,Then,Given } = require("@wdio/cucumber-framework");
const LoginCls = require('../page-object/Logindata.JS');
// const product = require("../page-object/product");
const Product = require ('../page-object/product')


Given(/^I am on the home page$/,async function(){ 

    await browser.url("http://automationpractice.com/index.php")

   
})
When(/^I am on the Sign In Page$/,async function(){
    await LoginCls.signinbutton.click()
})

When(/^Login using credentials$/,async function(){
    await LoginCls.enteremail.isClickable()
    await LoginCls.enteremail.setValue("Akshay12345@gmail.com")
    await LoginCls.enterpass.setValue("Akshay@1234")
    await LoginCls.loginBtn.click()
    await browser.pause(4000)
})

When(/^I add below products to cart$/,async function(table){
    await $('//a[@title="View my customer account"]').isClickable()
    await Product.addproduct(table)
    await browser.pause(5000)
    
    
})
Then(/^I shall validate shopping cart$/,async function(){
    // await Product.btnContinueChkout.click()
    await browser.navigateTo('http://automationpractice.com/index.php?controller=order')
    await Product.verify()
    await browser.pause(5000)

})

Then(/^I shall be able to Buy the product$/,async function(){
    await browser.pause(2000)
    await Product.buyProduct();
})

Then(/^I shall be able to Buy bank wire$/,async function(){
    await Product.payment();
    // await browser.saveRecordingScreen('/Users/akshay/Desktop/wdio cucumber/screenshots')
    await browser.saveScreenshot('/Users/akshay/Desktop/wdio cucumber/screenshots/abc.png')
    await browser.pause(3000)

})
