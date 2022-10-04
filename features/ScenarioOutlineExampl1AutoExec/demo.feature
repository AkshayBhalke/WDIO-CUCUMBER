Feature: login multiple user


    Scenario Outline: passing multiple user from feature file
    Given User visit the login page of Automation site
    When user valid "<username1>" and "<password1>" is entered1
    When click on login button1
    Then he will get dashboard

    Examples:
        | username1                  |password1|
        | akshay.s.bhalke@gmail.com | Akshay@123|
        | akshay1.s.bhalke@gmail.com | Akshay@123|
       
