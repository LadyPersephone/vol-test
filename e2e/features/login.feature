Feature: Login to VOL

    Rules:
    1. You must be able to successfully login to VOL

    Background: Ensure the username and password is correct.
        Given it is the correct login
        

    Scenario:  You are successfully logged into VOL.  The Home page loads.
        When I enter user details
        Then I am logged in