/* Input variables */

let variable1;
let variable2;
// let operator;


/* Calculator layout variables */

const buttonField = document.querySelector('.buttons');
const numberButtons = document.querySelector('.num-buts');
let operatorButtons = document.querySelector('.operator-buts');
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


// function that takes an operator and performs calculation based on it
const operate = function(operator, n1, n2){
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


// function that takes variable and performs calculation

operatorButtons.addEventListener('click', (event)=> {
    console.log(event.target);
})

