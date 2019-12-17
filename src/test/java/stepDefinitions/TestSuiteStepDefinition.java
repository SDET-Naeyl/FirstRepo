package stepDefinitions;

import core.Base;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.TestSuitePageObject;

public class TestSuiteStepDefinition {

	TestSuitePageObject tekSchoolElements = new TestSuitePageObject();
	
	@Given("^User is going to be on Tek School of America Website$")
	
	public void user_is_on_MainPage() {
		
		Base.initializeDriver();
		
	}
	
	@When("^User is going to click on Test Environment Link$")
	public void user_is_going_to_click_on_Test_Environment_Link() throws Throwable {
		
		tekSchoolElements.clickOnTestLink();
	}

	@Then("^User will be on Test Environment Page$")
	public void user_will_be_on_Test_Environment_Page() throws Throwable {

		tekSchoolElements.clickOnTestLink();
	
	
	}
	
	
	
	@When("^User is going to click on log in option$")
	public void user_is_going_to_click_on_log_in_option() throws Throwable {

		tekSchoolElements.clickOnMyAccount();
		tekSchoolElements.clickOnLogin();
	
	}

	@When("^User is entering username and password$")
	public void user_is_entering_username_and_password(String email, String password) throws Throwable {

		tekSchoolElements.enterEmailAddress(email);
		tekSchoolElements.enterPassword(password);
	
	
	
	}

	@When("^User again clicks on log in$")
	public void user_again_clicks_on_log_in() throws Throwable {

		tekSchoolElements.clickOnLoginButton();

	}

	@Then("^User shuould be able log in the system$")
	public void user_shuould_be_able_log_in_the_system() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
