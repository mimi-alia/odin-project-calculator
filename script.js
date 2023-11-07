/* Input variables */

let variable1;
let variable2;
let operator;


/* Calculator layout variables */

const buttonField = document.querySelector('.buttons');
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
    nButton.className = 'numButton';
    numberButtons.appendChild(nButton);
});

// add document fragment to the button field

buttonField.append(numButtons);

operators.forEach(o => {
    const oButton = document.createElement('span');
    oButton.textContent = o;
    oButton.className = 'operatorButton';
    oButtons.appendChild(oButton);
});

operatorButtons.append(oButtons)



/*Calculator functions */

const add = function(...nums){
    return nums.reduce((init, acc) => init + acc);
};

const subtract = function(...nums){
    return nums.reduce((init, acc) => init - acc);
};


const multiply = function(...nums){
    return nums.reduce((init, acc) => init * acc);
};

const divide = function(...nums){
    return nums.reduce((init, acc) => init / acc);
};

const operate = function(operator){
    if (operator === '+') {
        add(variable1, variable2);
    };
    if (operator === '-') {
        subtract(variable1, variable2);
    };
    if (operator === '*') {
        multiply(variable1, variable2);
    };
    if (operator === '/') {
        divide(variable1, variable2);
    };
};