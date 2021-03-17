$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/SAMIKSHYA DASH/eclipse-workspace/com.naveenproject/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Place an chooselater order via Telefonica",
  "description": "",
  "id": "place-an-chooselater-order-via-telefonica",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Placing an order with choose later option",
  "description": "",
  "id": "place-an-chooselater-order-via-telefonica;placing-an-order-with-choose-later-option",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user should have launched telefonica url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user validate page title",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User mouse hover to shop",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User select phones",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enters \"\u003cphoneName\u003e\" in searchbar",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User validate the iphone",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks select this plan button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select choose later button",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "place-an-chooselater-order-via-telefonica;placing-an-order-with-choose-later-option;",
  "rows": [
    {
      "cells": [
        "phoneName"
      ],
      "line": 16,
      "id": "place-an-chooselater-order-via-telefonica;placing-an-order-with-choose-later-option;;1"
    },
    {
      "cells": [
        "iphone"
      ],
      "line": 17,
      "id": "place-an-chooselater-order-via-telefonica;placing-an-order-with-choose-later-option;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Placing an order with choose later option",
  "description": "",
  "id": "place-an-chooselater-order-via-telefonica;placing-an-order-with-choose-later-option;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user should have launched telefonica url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user validate page title",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User mouse hover to shop",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User select phones",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enters \"iphone\" in searchbar",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User validate the iphone",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks select this plan button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select choose later button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginstepDefination.user_should_have_launched_telefonica_url()"
});
formatter.result({
  "duration": 28424111699,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefination.user_validate_page_title()"
});
formatter.result({
  "duration": 30686299,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefination.user_mouse_hover_to_shop()"
});
formatter.result({
  "duration": 462209000,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefination.user_select_phones()"
});
formatter.result({
  "duration": 6241441000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iphone",
      "offset": 13
    }
  ],
  "location": "LoginstepDefination.user_enters_phoneName_in_searchbar(String)"
});
formatter.result({
  "duration": 22332034000,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefination.user_validate_the_iphone()"
});
formatter.result({
  "duration": 8128446300,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefination.user_clicks_select_this_plan_button()"
});
formatter.result({
  "duration": 12299839600,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefination.user_select_choose_later_button()"
});
formatter.result({
  "duration": 186293700,
  "status": "passed"
});
});