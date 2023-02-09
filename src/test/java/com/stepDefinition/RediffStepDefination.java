package com.stepDefinition;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class RediffStepDefination {

	@Given("I open the ChromeBrowser")
	public void i_open_the_ChromeBrowser() {
		System.out.println("i open the chrome browser");
	}

	@And("I Enter the url in the address bar")
	public void i_Enter_the_url_in_the_address_bar() {
		System.out.println("i enter the url");
	}

	@When("I click on the signIn  link")
	public void i_click_on_the_signIn_link() {
		System.out.println("i click on the sign in link");
	}

	@And("I enterd the RediffMail page")
	public void i_enterd_the_RediffMail_page() {
		System.out.println("i open the chrome browser");
	}

	@And("I enter the correct Username and Password")
	public void i_enter_the_correct_Username_and_Password() {
		System.out.println("I enter the correct Username and Password");
	}

	@Then("I click on sign in button")
	public void i_click_on_sign_in_button() {
		System.out.println("I click on sign in button");
	}

	@And("I check if I an on Inbox page of Rediffmail")
	public void i_check_if_I_an_on_Inbox_page_of_Rediffmail() {

		System.out.println("I check if I an on Inbox page of Rediffmail");
	}
}

