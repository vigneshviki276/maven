package org.SetDefinition;

import org.BaseClass.BaseClass;
import org.PojoClass.LoginPojo;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class SetDefinition extends BaseClass {

	@Given("user should be in facebook login credential page")
	public void user_should_be_in_facebook_login_credential_page() {

		chromeBrowser();
		url("https://www.facebook.com/");

	}

	@When("user have to enter username")
	public void user_have_to_enter_username() {
		LoginPojo l = new LoginPojo();
		fillTextBox(l.getUser(), "vikimass");

	}

	@And("user have to enter password")
	public void user_have_to_enter_password() {
		LoginPojo l = new LoginPojo();
		fillTextBox(l.getPass(), "kanndipa");
	}

	@When("user have to click login")
	public void user_have_to_click_login() throws InterruptedException {
		LoginPojo l = new LoginPojo();
		click(l.getLogin());
		Thread.sleep(3000);
	}

	@Then("user should be in invalid credential page")
	public void user_should_be_in_invalid_credential_page() {
    String cu = d.getCurrentUrl();
		
    if (cu.contains("privacy_mutation_token=")) {
		System.out.println("user is in invalid credential page");
	}
    
	}

}
