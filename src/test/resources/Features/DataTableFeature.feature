Feature: Test the login functionality of OrangeHRM using Datatable

  Scenario: Test the valid Login using Datatable
    Given User is on Loginpage
    When user enters credential using DataTable
          | admin    | admin123  | 
    And Click on Login button
    Then user should be land on homepage

    
 