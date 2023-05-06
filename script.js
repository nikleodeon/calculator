let clear = document.querySelector(".all-clear");
let deleteNum = document.querySelector(".delete");
let equal = document.querySelector(".equal");
let decimal = document.querySelector(".decimal");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operation");
let prevDisplay = document.querySelector(".prev-display");
let currDisplay = document.querySelector(".curr-display");
let operator = "";
let prevValue = "";
let currValue = "";
let firstNum = "";

numbers.forEach((number) => number.addEventListener("click", function(e) {
    displayNumber(e.target.textContent);
    currDisplay.textContent = currValue;
}))

operators.forEach((op) => op.addEventListener("click", function(e) {
    if (prevValue != "" && currValue != "") {
        operate();
        operator = op.textContent;
        prevDisplay.textContent = prevValue + " " + operator;
        currValue = "";
        if (currValue = "") {
            currDisplay.textContent = "0";
        } else {
            console.log(prevValue);
            console.log(currValue);
            currValue.toString();
            currDisplay.textContent = currValue;
        }
        console.log("please work");
    } else if (!prevValue.includes("+") && !prevValue.includes("-") && !prevValue.includes("×") && !prevValue.includes("/")) {
        displayOperator(e.target.textContent);
        prevDisplay.textContent = prevValue + " " + operator;
        currDisplay.textContent = currValue;
    }
}))

clear.addEventListener("click", function() {
    prevValue = "";
    currValue = "";
    operator = "";
    prevDisplay.textContent = "";
    currDisplay.textContent = "0";
})

equal.addEventListener("click", function() {
    calculate();
})

decimal.addEventListener("click", function() {
    addDecimal();
})

deleteNum.addEventListener("click", function() {
    removeDigit();
})

function calculate() {
    if (currValue != 0 && prevValue != "") {
        operate();
        prevDisplay.textContent = "";
        if (prevValue.length <= 5) {
            currDisplay.textContent = prevValue;
        } else {
            currDisplay.textContent = prevValue.slice(0,5);
        }
    } else if (operator === "/" && currValue === "0") {
        prevDisplay.textContent = "";
        currDisplay.textContent = "Why do that?"
        return
    } else {
        prevDisplay.textContent = "";
        currDisplay.textContent = "ERROR";
    }
}

function calculateMultiOperator() {
    operate();
    prevDisplay.textContent = "";
    if (prevValue.length <= 5) {
        currDisplay.textContent = prevValue + " " + operator;
    } else {
        currDisplay.textContent = prevValue.slice(0,5) + " " + operator;
    }
}

function displayNumber(num) {
    if (currValue.length < 6) {
        currValue += num;
    }
}

function displayOperator(op) {
    operator = op;
    prevValue = currValue;
    currValue = "";
}

function operate() {
    prevValue = Number.parseFloat(prevValue);
    currValue = Number.parseFloat(currValue);

    if (operator === "+") {
        prevValue += currValue;
    } else if (operator === "-") {
        prevValue -= currValue;
    } else if (operator === "×") {
        prevValue *= currValue;
    } else if (operator === "/") {
        prevValue /= currValue;
    }

    prevValue = prevValue.toString();
    currValue = currValue.toString();
}

function addDecimal() {
    if(!currValue.includes(".")) {
        currValue += ".";
    }
    currDisplay.textContent = currValue;
}

function removeDigit() {
    currValue = currValue.slice(0, currValue.length-1);
    if (currValue.length === 0) {
        currValue = "";
        currDisplay.textContent = "0";
    } else {
        currDisplay.textContent = currValue;
    }
}