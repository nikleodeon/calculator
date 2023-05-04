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

numbers.forEach((number) => number.addEventListener("click", function(e) {
    displayNumber(e.target.textContent);
    currDisplay.textContent = currValue;
}))

operators.forEach((op) => op.addEventListener("click", function(e) {
    if (!prevValue.includes("+") && !prevValue.includes("-") && !prevValue.includes("×") && !prevValue.includes("/")) {
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
    if (currValue != 0 && prevValue != "") {
        operate();
        prevDisplay.textContent = "";
        if (prevValue.length <= 5) {
            currDisplay.textContent = prevValue;
        } else {
            currDisplay.textContent = prevValue.slice(0,5);
        }
    }
})

decimal.addEventListener("click", function() {
    addDecimal();
})

deleteNum.addEventListener("click", function() {
    removeDigit();
})

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
    currValue = prevValue.toString();
}

function addDecimal() {
    if(!currValue.includes(".")) {
        currValue += ".";
    }
    currDisplay.textContent = currValue;
}

function removeDigit() {
    currValue = currValue.substring(0, currValue.length - 1);
    if (currValue.length === 0) {
        currValue = "";
        currDisplay.textContent = "0";
    } else {
        currDisplay.textContent = currValue;
    }
}

/* const keys = document.getElementsByTagName("button");
const display = document.getElementById("display");

function calcDisplay(e) {

}

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", e => {
        const key = e.target;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        if (key.classList.contains("number")) {
            if (displayedNum === "0") {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
        } else if (key.classList.contains("operation")) {
            display.textContent = displayedNum + " " + keyContent + " ";
            console.log("this is an operator");
        } else if (key.classList.contains("delete")) {
            console.log("this is delete");
        } else if (key.classList.contains("all-clear")) {
            console.log("this is all clear");
        } else if (key.classList.contains("equal")) {
            console.log("this is equal");
        } else if (key.classList.contains("decimal")) {
            display.textContent = displayedNum + ".";
        }
    })
} */