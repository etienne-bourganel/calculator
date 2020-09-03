/* Basic operation functions */

function add(a,b){
    return a+b;
};

function substract (a,b){
    return a-b;
};

function multiply (a,b){
    return a*b;
};

function divide (a,b){
    return a/b;
};

function operate (operator,a,b){
    if (operator == '+'){
        return add(a,b);
    };
    if (operator == '-'){
        return substract(a,b);
    };
    if (operator == '*'){
        return multiply(a,b);
    };
    if (operator == '/'){
        return divide(a,b);
    };
};

//Variables initialization

let display = document.getElementById('display');
let inputArray = [];
let inputString;
let a;
let b;
let operator;
let result;
const comma = document.querySelector('#comma');

display.innerHTML = '_';

//Add the value of a button to the inputArray and display the corresponding string

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => button.addEventListener('click', inputNumber));

function inputNumber (e){
    inputArray.push(e.target.value);
    inputString = inputArray.join('');

    if (inputString.includes('.')){
        comma.disabled = true;
    };

    if (a) {
        b = Number(inputString);
    }

    display.innerHTML = inputString;
};

//Defines operators from buttons and set corresponding operator value

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button =>button.addEventListener('click',setOperator));

function setOperator(e){

if ((a && b == 0) && (operator == '/')){
    display.innerHTML = "Error";
} else if (b){
    result = operate(operator,a,b);
    display.innerHTML = parseFloat(result.toFixed(2));
    a = result;

    } else {
        a = parseFloat(inputString);
        };

    operator=e.target.value;
    inputArray = [];
    comma.disabled = false;
    };

//Makes the whole calculation based on previous values

const equalsButton = document.getElementById('equal');
equalsButton.addEventListener('click',preOperate);

function preOperate(){

    comma.disabled = false;

    if (operator == '/' && b == 0){
        display.innerHTML = 'Error';
    } else if (a && b && operator){
        result = operate(operator,a,b);
        display.innerHTML = parseFloat(result.toFixed(2));
    } else {
        clearValues();
        display.innerHTML = "Error";
    };
    
};

//Defines the Clear function by erasing display and unset variables

const clear = document.getElementById('clear');
clear.addEventListener('click',clearValues);

function clearValues(){
    inputArray = [];
    a = undefined;
    b = undefined;
    operator = undefined;
    result = undefined;
    display.innerHTML = '_';
    comma.disabled = false;
};