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
        return result = 'ERROR';

    // Else if (b = 0 and operator = '/'), return ERROR

    } else if (b == 0 && operator == '/'){
        return result = 'ERROR'

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

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', inputInfo));

let inputArray = [];

function inputInfo(e){

    if ((e.target.className == 'number') && (inputArray.length<9)) {
                                            
        inputArray.push(e.target.value);

        if (!operator){
            a = Number(inputArray.join(''));        
        } 
            else if (operator){
                b = Number(inputArray.join(''));
            };
    }

    else if ((e.target.className == 'operator') && (a) && (b)){
        a = operate (a,b,operator);
        operator = e.target.value;
        b = undefined;
        inputArray = [];
    }

    else if ((e.target.className == 'operator') && (a)){
        operator = e.target.value;
        inputArray = [];
    } 

    // If input is equal sign, perform operate function based on a, b and operator
    
    else if (e.target.id == 'equal'){
        operate(a,b,operator);
    }

    console.log('a: ' + a);
    console.log('b: ' + b);
    console.log('optr: ' + operator);
    console.log('res: ' + result);

};

//Create a clear function to reset all values