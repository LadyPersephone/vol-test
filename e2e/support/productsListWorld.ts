import {World} from "cucumber";

declare module "cucumber" {

    // Enforces the format of our test data
    
    // A template for 'Customer Details' test data
    interface World {
        customer: myLib.CustomerDetails;
    }
}