
Feature: some test cases

Background: Given User is going to be on Tek School of America Website
						When User is going to click on Test Environment Link
						Then User will be on Test Environment Page
  @SDET-3
  Scenario: Users should be able to log in to Test environment
 
    When User is going to click on log in option
    And User is entering username and password
    And User again clicks on log in
    Then User shuould be able log in the system
    


 