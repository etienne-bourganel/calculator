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
let displayValue = '_';
let a;
let b;
let operator;
let result;

display.innerHTML = displayValue;

//Add the value of a button to the inputArray and display the corresponding string

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => button.addEventListener('click', inputNumber));

function inputNumber (e){
    inputArray.push(e.target.value);
    displayValue = inputArray.join('');
    display.innerHTML = displayValue;
}

//Defines the Clear function by erasing display and unset a & b

const clear = document.getElementById('clear');
clear.addEventListener('click',clearValues);

function clearValues(){
    inputArray = [];
    displayValue='_';
    a = undefined;
    b = undefined;
    display.innerHTML = displayValue;
}

//Defines operators from buttons and set corresponding operator value

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button =>button.addEventListener('click',setOperator));

function setOperator(e){
    display.innerHTML = '_';
    inputArray = [];
    a=parseFloat(displayValue);
    operator=e.target.value;
}

//Makes the whole calculation based on previous values

const equalsButton = document.getElementById('equal');
equalsButton.addEventListener('click',preOperate);

function preOperate(){
    b=parseFloat(displayValue);
    result = operate(operator,a,b)
    console.log(result);
    display.innerHTML= result;
}
