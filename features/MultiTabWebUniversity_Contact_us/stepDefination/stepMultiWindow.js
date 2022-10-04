
const {When, Then,Given} =require ('@wdio/cucumber-framework')
const contactus = require("../pageobject/classMultiwindoe")
// const url='http://www.webdriveruniversity.com/'
// const newUrl='http://www.webdriveruniversity.com/Contact-Us/contactus.htm'


Given('open the webuniversity page',async function(){
    await browser.url('http://www.webdriveruniversity.com/')

})
When('click on contact us',async function(){
    await contactus.contactlink.click()

   
})
When('entering all data',async function(){
    await contactus.fillData("akshay","b","ak@gmail.com","abcd")
    await browser.switchWindow('http://www.webdriveruniversity.com/Contact-Us/contactus.html')


})

When('clicking on submit button',async function(){
    await contactus.submitbtn.click()
    await browser.pause(8000)

})

Then('user can see Thank you text',async function(){
   
     const text1= await contactus.welcomeTxt
    expect (text1).toHaveText("Thank You for your Message!")
  
    


})