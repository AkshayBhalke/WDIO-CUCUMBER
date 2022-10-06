Feature: Orange Hrm Site

  Scenario: login
    Given open the login page
    When enter the username and password
    And click on login button
    Then user can able to see dashboard
  
  # Examples:
  #     | username | password             | message                        |
  #     | tomsmith | SuperSecretPassword! | You logged into a secure area! |
  #     | foobar   | barfoo               | Your username is invalid!      |
