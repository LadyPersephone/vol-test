// Type definitions for ProductList Test Automation Framework

declare namespace myLib {

    // Our global 'Customer' type/interface
    interface Customer Details {
        name: string;
        address: string;
        vehicle Details?: string; {
            make: string;
            model: string;
            year: number;

        }
        
    }
}