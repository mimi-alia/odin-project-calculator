
/*********************************************************************************************************************** */
                                                /*Input Variables */
/*********************************************************************************************************************** */

let variable1;
let variable2;
let operatorVar;
let answer;
let displayValue = '0';


/*********************************************************************************************************************** */
                                                /*Calculator Variables */
/*********************************************************************************************************************** */

const calcScreen = document.querySelector('.calc-screen');
const buttonField = document.querySelector('.button-field');
const numberButtons = document.querySelector('.num-buts');
const operatorButtons = document.querySelector('.operator-buts');
const numButtons = new DocumentFragment;
const oButtons = new DocumentFragment;
let numList = [];
const operators = ['/', 'x', '-', '+', '='];



// create list of numbers to populate number buttons

for (let i = 0; i < 10; i++){
    numList.push(i);
}

// add numbers from list to document fragment

numList.forEach(n => {
    const nButton = document.createElement('span');
    nButton.textContent = n;
    nButton.className = `button numButton ${n}`;
    numButtons.appendChild(nButton);
});
numberButtons.append(numButtons)


// add document fragment to the button field


operators.forEach(o => {
    const oButton = document.createElement('span');
    oButton.textContent = o;
    oButton.className = `button operatorButton ${o}`;
    oButtons.appendChild(oButton);
});

operatorButtons.append(oButtons)

const allButtons = document.querySelectorAll('.button');

/*********************************************************************************************************************** */
                                                /*Calculator functions */
/*********************************************************************************************************************** */


function add(...nums){
    return nums.reduce((init, acc) => init + acc);
};

function subtract(...nums){
    return nums.reduce((init, acc) => init - acc);
};


function multiply(...nums){
    return nums.reduce((init, acc) => init * acc);
};

function divide(...nums){
    return nums.reduce((init, acc) => init / acc);
};


// function that takes an operator and performs calculation based on it
function operate(operator, n1, n2){
    if (operator === '+') {
        return add(n1, n2);
    };
    if (operator === '-') {
        return subtract(n1, n2);
    };
    if (operator === 'x') {
        return multiply(n1, n2);
    };
    if (operator === '/') {
        return divide(n1, n2);
    };
};

// function that populates the display with value stored in displayValue

function updateDisplay(){
    calcScreen.innerText = displayValue;

}

updateDisplay();

//on click of each button in the allButtons nodelist, do related function

function clickButton() {
    for(let button of allButtons) {
        button.addEventListener('click', e => {
            if (e.target.classList.contains('numButton')) {
                console.log('number', e.target.innerText);
                updateDisplayValue(e.target.innerText);
                updateDisplay();
            } else if (e.target.classList.contains('operatorButton')){
                console.log('operator', e);
                updateVariables(e.target.innerText);
            }
            
        }
    )}
}

clickButton();

// On click of each numberButton, concat to display value and store in variable1 or variable2


//updates display value with inputted number value
function updateDisplayValue(number){
    if (displayValue==='0'){
        displayValue=number;
    } else if (displayValue !=='0'){
        displayValue+=number  
    }
}

// adds display value to variable1 / variable2

function updateVariables(operator){
    // if both variables and operators or empty, on click of an operator, store the numbers in v1 and operator in op1, then clear
    // display value
    if (operatorVar === undefined){
        variable1 = displayValue;
        operatorVar= operator;
        displayValue = '';

    } else {
            // save display value to second variable for calculation
            variable2 = displayValue;
            answer = operate(operatorVar,Number(variable1), Number(variable2));
            // save calculated answer to variable1 to be used in next calculation
            variable1 = answer;
            // display the answer on the screen
            displayValue = answer;
            updateDisplay();
            // save the most recently pressed operator to the operator variable
            operatorVar = operator;
            // clear display
            displayValue = '';
    }
}    