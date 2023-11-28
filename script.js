
/*********************************************************************************************************************** */
                                                /*Input Variables */
/*********************************************************************************************************************** */

let variable1;
let variable2;
let operator;
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
    if (operator === '*') {
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
                updateOperand(e.target.innerText);
                updateDisplay();
            } else if (e.target.classList.contains('operatorButton')){
                console.log('operator', e);
            }
            
        }
    )}
}

clickButton();

// On click of each numberButton, concat to display value and store in variable1 or variable2


//updates display value with inputted number value
function updateOperand(number){
    if (displayValue==='0'){
        displayValue=number;
    } else if (displayValue !=='0'){
        displayValue+=number
    }
}