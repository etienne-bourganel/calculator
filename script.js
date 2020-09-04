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
let inputDigits = 0;
const comma = document.querySelector('#comma');


display.innerHTML = '_';


//Keyboard support

function keyboardInput(e){
    
    const button = document.querySelector(`button[data-key="${e.keyCode}"]`);
    
    if (button.className == "number"){

        inputDigits ++;
        if (inputDigits <=9){
            inputArray.push(button.value);
            inputString = inputArray.join('');
            }

        if (inputString.includes('.')){
            comma.disabled = true;
        };

        if (a && operator) {
            b = Number(inputString);
        } else a = Number(inputString);

        display.innerHTML = inputString;
    };

    if (button.className == "operator"){
        operator = button.value;
        setOperator();
    }

    if (button.className == 'result'){
        preOperate();
    }

    if (button.className == 'clear'){
        clearValues();
    }
    updateValues();
};

window.addEventListener('keydown', keyboardInput);

//Add the value of a button to the inputArray and display the corresponding string

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => button.addEventListener('click', inputNumber));

function inputNumber (e){
    
    inputDigits ++;
    if (inputDigits <=9){
        inputArray.push(e.target.value);
        inputString = inputArray.join('');
        }

    if (inputString.includes('.')){
        comma.disabled = true;
    };

    if (a && operator) {
        b = Number(inputString);
    } else a = Number(inputString);

    updateValues();
    display.innerHTML = inputString;
    
};

//Defines operators from buttons and set corresponding operator value

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => button.addEventListener('click',setOperator));

function setOperator(e){

    inputDigits = 0;

    if ((a && b == 0) && (operator == '/')){
        clearValues();
        display.innerHTML = "Error";
        updateValues();

    } else if (b){
        result = operate(operator,a,b);

        let resultDigits = result.toString().length; //Counts numbers of digits in result
            if (resultDigits > 9){
                display.innerHTML = parseFloat(result.toFixed(2)).toExponential(2);
            } else display.innerHTML = parseFloat(result.toFixed(2));

        a = result;
        b = undefined;

        } //else {
           //a = Number(inputString);
        //};
        if (!operator){
            operator=e.target.value;
        };

        inputArray = [];
        comma.disabled = false;
        updateValues();
        
    };

//Makes the whole calculation based on previous values

const equalsButton = document.getElementById('equal');
equalsButton.addEventListener('click',preOperate);

function preOperate(){

    comma.disabled = false;

    if (operator == '/' && b == 0){
        clearValues();
        display.innerHTML = 'Error';
    } else if (a && b && operator){
        result = operate(operator,a,b);
        let resultDigits = result.toString().length; //Counts numbers of digits in result
        if ((resultDigits > 9)&&((result>999999999)||(result<-999999999))){
            display.innerHTML = parseFloat(result.toFixed(2)).toExponential(2);
        } else display.innerHTML = parseFloat(result.toFixed(2));
    } else {
        clearValues();
        display.innerHTML = "Error";
    };
    updateValues();
    
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
    inputDigits = 0;
    updateValues();
};

const values = document.getElementById('values');

function updateValues(){
values.innerHTML = ('a = ' + a + "<br />" + 
                    'b = ' + b + "<br />" + 
                    'operator = ' + operator + "<br />" +
                    'result = ' + result + "<br />");
};