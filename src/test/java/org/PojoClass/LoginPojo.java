package org.PojoClass;

import org.BaseClass.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPojo extends BaseClass {

	public LoginPojo(){
		
		PageFactory.initElements(d,this);
		
	}
	
	public WebElement getUser() {
		return user;
	}

	public WebElement getPass() {
		return pass;
	}

	public WebElement getLogin() {
		return login;
	}

	@FindBy(xpath="//input[@name='emil']")
	public WebElement user;
	
	@FindBy(xpath="//input[@type='password']")
	public WebElement pass;
	
	@FindBy(xpath="//button[@name='login']")
	public WebElement login;
	
	
	
	
}
