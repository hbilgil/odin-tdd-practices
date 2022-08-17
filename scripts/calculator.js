const add = function(a, b) {
    return +a + +b; //returning strings into number to prevent concat strings
};
  
const subtract = function(a, b) {
    return a - b;
};

const divide = function (a, b) {
    if(a === 0 && b === 0 || a !== 0 && b === 0) return "undefined";
    return a / b;
}

const multiply = function(a, b) {
    return a * b;
};

const calculator = {
    add,
    subtract,
    divide,
    multiply,
};

module.exports = calculator;