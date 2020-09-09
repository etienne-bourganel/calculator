// Create variables for operations called a, b, result and operator

let a, b, result, operator;

// Create functions for basic operations called add, substract, multiply and divide

function add (a,b){
    return result = a + b;
};

function substract (a,b){
    return result = a - b;
};

function multiply (a,b){
    return result = a * b;
};

function divide (a,b){
    return result = a / b;
};

// Create function for calling appropriate operations called operate:

function operate (a,b,operator){

    // If (a,b or operator are undefined), return ERROR

    if (!a || !b || !operator){
        result = 'ERROR';

    // Else if (b = 0 and operator = '/'), return ERROR

    } else if (b == 0 && operator == '/'){
        result = 'ERROR'

    // Else return result based on appropriate operation

    } else switch (operator) {
        case '+':
            add (a,b);
            break;
        case '-':
            substract(a,b);
            break;
        case '*':
            multiply(a,b);
            break;
        case '/':
            divide(a,b);
            break;
    };

    //Round result to 2 decimals

    result = Number(result.toFixed(2)); 

    // If result has more than 9 digits return result in an exponential form
    
    if (result.toString().length > 9) {
        result = result.toExponential(2);
    };

    return result;
};


// Get input from user

    //Create variables to refer to button elements from html

    // If input is (a number or comma) and (a or operator are not defined) yet, store it in a
        // Otherwise store input into b
        // a and b must contain a maximum of 9 digits including comma
        // If input is a comma, disable possibility to enter a comma until new number input (i.e. after operator has been reassigned)

    // If input is an operator and a is defined, store operator value in operator
    // Else do nothing
        
        // If b is undefined, exit function
        // Else if (a, b and operator) are defined, perform function operate and store result in a

    // If input is equal sign, perform operate function based on a, b and operator

//Create a clear function to reset all values