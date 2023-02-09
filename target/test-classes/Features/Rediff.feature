
Feature: Validating RediffLoggingandLogOut
  		I want to validate the login and logout of RediffMail

  Scenario: This the Login Scenario of RediffMail
    Given I open the ChromeBrowser
    And I Enter the url in the address bar
    When I click on the signIn  link
    And I enterd the RediffMail page
    And I enter the correct Username and Password
    Then I click on sign in button
    And I check if I an on Inbox page of Rediffmail

  