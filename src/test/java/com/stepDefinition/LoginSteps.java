package com.stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginSteps {
	WebDriver driver;

	@Given("User is on Loginpage")
	public void user_is_on_loginpage() {
		System.out.println("Step1: User is on Login page");
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();

		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

		driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

	}

	@When("^user enters (.*) and (.*)$")
	public void user_enters_username_and_password(String uname, String pwd) {
		System.out.println("Step2: User Enters Username and Password");	
		driver.findElement(By.xpath("//input[@name=\"username\"]")).sendKeys("uname");
		driver.findElement(By.xpath("//input[@type=\"password\"]")).sendKeys("pwd");
	}

	@And("Click on Login button")
	public void click_on_login_button() {
		System.out.println("Step3: User is clicking on Login Button");
		driver.findElement(By.xpath("//*[@id=\"app\"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button")).click();
	}

	@Then("user should be land on homepage")
	public void user_should_be_land_on_homepage() {
		System.out.println("Step4: User lands on home page");
		driver.close();
	}

}
