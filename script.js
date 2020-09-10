// Create variables for operations called a, b, result, operator and input variable

let a, b, result, operator;
let inputArray = [];

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

// Get input from user

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const comma = document.getElementById('comma');
let button;

buttons.forEach(button => button.addEventListener('click', getButton));

window.addEventListener('keydown', inputKey);


function getButton(e){
    button = e.target;
    inputInfo(button);
};

function inputKey(e){
    button = document.querySelector(`button[data-key="${e.keyCode}"]`);
    inputInfo(button);
};
    

function inputInfo(button){

    switch (button.className) {
        case 'number':
            numberInput(button);
            break;

        case 'operator':
            operatorInput(button);
            break;

        case 'result':
            operate();
            break;

        case 'clear':
            clear();
            break;
    };

    consoleLog();
};

function numberInput(button){

    // Update the values of the agurments based on input

    if (inputArray.length>=9) {
        return;
    };
                                            
    inputArray.push(button.value);

    if (!operator){
        a = Number(inputArray.join(''));
        updateDisplay(a);        
    } 
        else if (operator){
            b = Number(inputArray.join(''));
            updateDisplay(b);
        };
    
    if ((button.id) == 'comma'){
        comma.disabled = true;
    };
};

function operatorInput(button){

    // Update the operator based on input and makes the operation if there are 2 arguments

    if (a && b) {
        a = operate (a,b,operator);
        operator = button.value;
        b = undefined;
        inputArray = [];
        updateDisplay(a);

    } else if (a) {
        operator = button.value;
        inputArray = [];
    }; 

    comma.disabled = false;
};

function operate (){

    // Returns 'ERROR' if not enough arguments or if division by zero

    if ((!a || !b || !operator) || (b == 0 && operator == '/')){
        result = 'ERROR';
        updateDisplay('ERROR');
        return;

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

    // Round result to 2 decimals and return result in an exponential form if result has more than 9 digits 

    result = Number(result.toFixed(2)); 

    if (result.toString().length > 9) {
        result = result.toExponential(2);
    };

    comma.disabled = false;
    updateDisplay(result);

    return result;
};

// Create a clear function to reset all values

function clear(){
    a = b = result = operator = undefined;
    inputArray = [];
    comma.disabled = false;
    updateDisplay(0);
};

function updateDisplay(x){
    display.innerHTML = x;
};

function consoleLog(){
    console.log('a: ' + a);
    console.log('b: ' + b);
    console.log('operator: ' + operator);
    console.log('result: ' + result);
    console.log('******************');
};