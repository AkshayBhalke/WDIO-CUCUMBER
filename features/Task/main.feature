Feature: Automating for purchase scenario
@sample
Scenario: Creating User and Purchase one product with credit card

Given User visit the site and open the registration form
When User fill all data and create the acount
When User select the item and purchase that with filling address and using credit card
Then User get confirmation massage on page and logout

@sample
Scenario: Login with created user and purchase item using credit card and coupon apply

Given User visit site for login
When User enter created user credential and click on login 
Then user get user name with welcome text
When select the product and apply coupon purchase product
Then User get confirmation massage on page and logout



