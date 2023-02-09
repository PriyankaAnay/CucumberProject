$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/DataTableFeature.feature");
formatter.feature({
  "name": "Test the login functionality of OrangeHRM using Datatable",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test the valid Login using Datatable",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is on Loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_is_on_loginpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters credential using DataTable",
  "rows": [
    {
      "cells": [
        "admin",
        "admin123"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_credential_using_data_table(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be land on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_be_land_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/Features/LoginFeature.feature");
formatter.feature({
  "name": "Test the login functionality of OrangeHRM",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test the valid Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Loginpage",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "user should be land on homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "admin",
        "admin123"
      ]
    },
    {
      "cells": [
        "admin1",
        "admin1234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test the valid Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_is_on_loginpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters admin and admin123",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be land on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_be_land_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Test the valid Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_is_on_loginpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters admin1 and admin1234",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be land on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_be_land_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/Features/Rediff.feature");
formatter.feature({
  "name": "Validating RediffLoggingandLogOut",
  "description": "  \t\tI want to validate the login and logout of RediffMail",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "This the Login Scenario of RediffMail",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I open the ChromeBrowser",
  "keyword": "Given "
});
formatter.match({
  "location": "RediffStepDefination.i_open_the_ChromeBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Enter the url in the address bar",
  "keyword": "And "
});
formatter.match({
  "location": "RediffStepDefination.i_Enter_the_url_in_the_address_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on the signIn  link",
  "keyword": "When "
});
formatter.match({
  "location": "RediffStepDefination.i_click_on_the_signIn_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enterd the RediffMail page",
  "keyword": "And "
});
formatter.match({
  "location": "RediffStepDefination.i_enterd_the_RediffMail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter the correct Username and Password",
  "keyword": "And "
});
formatter.match({
  "location": "RediffStepDefination.i_enter_the_correct_Username_and_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on sign in button",
  "keyword": "Then "
});
formatter.match({
  "location": "RediffStepDefination.i_click_on_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I check if I an on Inbox page of Rediffmail",
  "keyword": "And "
});
formatter.match({
  "location": "RediffStepDefination.i_check_if_I_an_on_Inbox_page_of_Rediffmail()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/Features/TagsDemo.feature");
formatter.feature({
  "name": "Using of Tags in Cucumber",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Scenario1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "name": "This is Scenari1",
  "keyword": "Given "
});
formatter.match({
  "location": "TagsDemo.this_is_scenari1()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Scenario2",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "name": "This is Scenari2",
  "keyword": "Given "
});
formatter.match({
  "location": "TagsDemo.this_is_scenari2()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Scenario3",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SanityTest"
    },
    {
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "name": "This is Scenari3",
  "keyword": "Given "
});
formatter.match({
  "location": "TagsDemo.this_is_scenari3()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Scenario4",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "This is Scenari4",
  "keyword": "Given "
});
formatter.match({
  "location": "TagsDemo.this_is_scenari4()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Scenario5",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "This is Scenari5",
  "keyword": "Given "
});
formatter.match({
  "location": "TagsDemo.this_is_scenari5()"
});
formatter.result({
  "status": "skipped"
});
});