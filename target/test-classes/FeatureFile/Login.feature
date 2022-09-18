Feature: User have to login faceBook Application 

Scenario: user have to login Facebook Application on chromeBrowser

Given user should be in facebook login credential page

When  user have to enter username

And user have to enter password

And user have to click login 

Then user should be in invalid credential page 