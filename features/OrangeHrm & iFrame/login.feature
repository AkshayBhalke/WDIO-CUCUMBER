Feature: Orange Hrm Site sample
  
  Scenario: login
    Given open the login page
    When enter the username and password
    When click on login button
    Then user can able to see the dashboard
  


  Scenario: iframe

  Given open an herokuapp
  When user enter the text in input box
  Then assert the h3 tag