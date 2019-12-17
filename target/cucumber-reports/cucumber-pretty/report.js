$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/TestSuite.feature");
formatter.feature({
  "line": 2,
  "name": "some test cases",
  "description": "",
  "id": "some-test-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13344608500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Given User is going to be on Tek School of America Website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is going to click on Test Environment Link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User will be on Test Environment Page",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSuiteStepDefinition.user_is_going_to_click_on_Test_Environment_Link()"
});
formatter.result({
  "duration": 30462612200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Test Environment\u0027]\"}\n  (Session info: chrome\u003d78.0.3904.108)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027LAPTOP-GG03COHD\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.108, chrome: {chromedriverVersion: 78.0.3904.105 (60e2d8774a81..., userDataDir: C:\\Users\\Naeyl\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61618}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 576a87c5803d94a1f961795a90179d2a\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Test Environment\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.sendKeys(Unknown Source)\r\n\tat pageObjects.TestSuitePageObject.clickOnTestLink(TestSuitePageObject.java:180)\r\n\tat stepDefinitions.TestSuiteStepDefinition.user_is_going_to_click_on_Test_Environment_Link(TestSuiteStepDefinition.java:24)\r\n\tat ✽.When User is going to click on Test Environment Link(Features/TestSuite.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TestSuiteStepDefinition.user_will_be_on_Test_Environment_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 8,
  "name": "Users should be able to log in to Test environment",
  "description": "",
  "id": "some-test-cases;users-should-be-able-to-log-in-to-test-environment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@SDET-3"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User is going to click on log in option",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User is entering username and password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User again clicks on log in",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User shuould be able log in the system",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSuiteStepDefinition.user_is_going_to_click_on_log_in_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSuiteStepDefinition.user_is_entering_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSuiteStepDefinition.user_again_clicks_on_log_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSuiteStepDefinition.user_shuould_be_able_log_in_the_system()"
});
formatter.result({
  "status": "skipped"
});
