Feature: Orange Hrm Site1

  Scenario Outline: login1
    Given open the login page1
    When valid "<username3>" and "<password3>" is entered
    When click on login button3
    Then user can able to see dashboard4


    Examples:
      | username3 | password3 |
      | Admin    | admin123 |
      | Admin    | admin123 |
