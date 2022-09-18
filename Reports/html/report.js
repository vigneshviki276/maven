$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:FeatureFile/Login.feature");
formatter.feature({
  "name": "User have to login faceBook Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user have to login Facebook Application on chromeBrowser",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user should be in facebook login credential page",
  "keyword": "Given "
});
formatter.match({
  "location": "SetDefinition.user_should_be_in_facebook_login_credential_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to enter username",
  "keyword": "When "
});
formatter.match({
  "location": "SetDefinition.user_have_to_enter_username()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027emil\u0027]\"}\n  (Session info: chrome\u003d105.0.5195.127)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-VRK5SO4\u0027, ip: \u0027192.168.214.133\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.2.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.127, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\vignesh\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:4690}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b37b4251396dbaf89e37298c04e3a459\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027emil\u0027]}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy19.sendKeys(Unknown Source)\r\n\tat org.BaseClass.BaseClass.fillTextBox(BaseClass.java:24)\r\n\tat org.SetDefinition.SetDefinition.user_have_to_enter_username(SetDefinition.java:24)\r\n\tat ✽.user have to enter username(file:FeatureFile/Login.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user have to enter password",
  "keyword": "And "
});
formatter.match({
  "location": "SetDefinition.user_have_to_enter_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user have to click login",
  "keyword": "And "
});
formatter.match({
  "location": "SetDefinition.user_have_to_click_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be in invalid credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "SetDefinition.user_should_be_in_invalid_credential_page()"
});
formatter.result({
  "status": "skipped"
});
});