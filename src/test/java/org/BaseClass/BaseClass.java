package org.BaseClass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {
	
	public static WebDriver d;

	public static void chromeBrowser() {
		WebDriverManager.chromedriver().setup();
		d = new ChromeDriver();

	}

	public static void url(String s) {
		d.get(s);
	}

	public static void fillTextBox(WebElement w, String s) {
		w.sendKeys(s);

	}

	public static void click(WebElement w) {
		w.click();
	}

	
	
	
}
