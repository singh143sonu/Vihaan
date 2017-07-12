$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "github login",
  "description": "",
  "id": "github-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "login without username and password",
  "description": "",
  "id": "github-login;login-without-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on github homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on Sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user is displayed login screen",
  "keyword": "Then "
});
formatter.match({
  "location": "GitHubLoginSD.user_is_on_github_homepage()"
});
formatter.result({
  "duration": 11489761025,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to find width field\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027JYOYSNA-PC\u0027, ip: \u002710.30.96.63\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\Jyoysna\\AppData\\Local\\Temp\\rust_mozprofile.Wn0ChociUReM, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, platform\u003dANY, specificationLevel\u003d0.0, moz:accessibilityChecks\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d54.0, platformVersion\u003d6.1, moz:processID\u003d1940.0, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dwindows_nt}]\nSession ID: 4e12efad-308f-4f9d-a8aa-7b06b6af1352\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:925)\r\n\tat Common.SelFunction.createDriver(SelFunction.java:24)\r\n\tat StepDefinitions.GitHubLoginSD.user_is_on_github_homepage(GitHubLoginSD.java:17)\r\n\tat ✽.Given user is on github homepage(Login.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GitHubLoginSD.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GitHubLoginSD.user_is_displayed_login_screen()"
});
formatter.result({
  "status": "skipped"
});
});