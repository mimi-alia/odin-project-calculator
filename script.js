let variable1;
let variable2;
let operator;

const buttonField = document.querySelector('.buttons');
const numButtons = new DocumentFragment;
const operatorButtons = new DocumentFragment;
let numList = [];
const operators = ['/', 'x', '-', '+', '='];

for (let i = 0; i < 10; i++){
    numList.push(i);
}

numList.forEach(n => {
    const nButton = document.createElement('span');
    nButton.textContent = n;
    nButton.className = 'numButton';
    numButtons.appendChild(nButton);
});

buttonField.append(numButtons);

operators.forEach(o => {
    const oButton = document.createElement('span');
    oButton.textContent = o;
    oButton.className = 'operatorButton';
    operatorButtons.appendChild(oButton);
});

buttonField.append(operatorButtons)


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