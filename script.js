let variable1;
let variable2;
let operator;



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