/* Input variables */

let variable1;
let variable2;
let operator;
let displayValue = '0';

/* Calculator layout variables */

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
    nButton.className = `numButton ${n}`;
    numButtons.appendChild(nButton);
});
numberButtons.append(numButtons)

// add document fragment to the button field


operators.forEach(o => {
    const oButton = document.createElement('span');
    oButton.textContent = o;
    oButton.className = `operatorButton ${o}`;
    oButtons.appendChild(oButton);
});

operatorButtons.append(oButtons)



/*Calculator functions */

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


// On click of each numberButton, concat to display value and store in variable1 or variable2

// for (let i in buttonField){
//     console.log('hi');
// }


//function that stores the values of the buttons pressed in variable1 and variable2

numberButtons.addEventListener('click', e => {
    if(variable1 === undefined && variable2 === undefined){
        variable1 = e.target.innerText;
    } else if (variable1 !== undefined && variable2 === undefined) {
        variable2 = e.target.innerText;
    } else if (variable1 !== undefined && variable2 !== undefined){
        variable1 = e.target.innerText;
    }
});

// function that stores the value of the operator button pressed

operatorButtons.addEventListener('click', e => {
    operator = e.target.innerText;
})

// function that calculates on the press of an operator

operatorButtons.addEventListener('click', e => {
    let answer;
    if (variable1 === undefined && variable2 === undefined) {
        return;
    } else if (variable1 !== undefined) {
        answer = operate(operator, Number(variable1), Number(variable2));
        console.log(answer)
    }
})




