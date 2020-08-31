/* Operation functions */

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

//Functions

let display = document.getElementById('display');

let inputArray = [];
let displayValue = '_';
let a;
let b;
let operator;
let result;

display.innerHTML = displayValue;

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => button.addEventListener('click', inputNumber));

function inputNumber (e){
    inputArray.push(e.target.value);
    displayValue = inputArray.join('');
    display.innerHTML = displayValue;
}

const clear = document.getElementById('clear');
clear.addEventListener('click',clearValues);

function clearValues(){
    inputArray = [];
    displayValue='_';
    display.innerHTML = displayValue;
}

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button =>button.addEventListener('click',setOperator));

function setOperator(e){
    a=parseFloat(displayValue);
    operator=e.target.value;
    clearValues();
}

const equalsButton = document.getElementById('equal');
equalsButton.addEventListener('click',preOperate);

function preOperate(){
    b=parseFloat(displayValue);
    result = operate(operator,a,b)
    console.log(result);
    display.innerHTML= result;
}
