Feature: Place an chooselater order via Telefonica 


Scenario Outline: Placing an order with choose later option 
	Given user should have launched telefonica url 
	When user validate page title 
	Then User mouse hover to shop 
	And User select phones 
	Then user enters "<phoneName>" in searchbar 
	Then User validate the iphone 
	And user clicks select this plan button
	Then user select choose later button
	
	Examples:
	
	|phoneName|
	|iphone  |
	
	
    