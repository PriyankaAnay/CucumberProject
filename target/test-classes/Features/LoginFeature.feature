Feature: Test the login functionality of OrangeHRM

  Scenario Outline: Test the valid Login
    Given User is on Loginpage
    When user enters <username> and <password>
    And Click on Login button
    Then user should be land on homepage

    Examples: 
      | username | password  |
      | admin    | admin123  |
      | admin1   | admin1234 |
