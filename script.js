const keys = document.getElementsByTagName("button");
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
            console.log("this is a number");
        } else if (key.classList.contains("operation")) {
            console.log("this is an operator");
        } else if (key.classList.contains("delete")) {
            console.log("this is delete");
        } else if (key.classList.contains("all-clear")) {
            console.log("this is all clear");
        } else if (key.classList.contains("equal")) {
            console.log("this is equal");
        } else if (key.classList.contains("decimal")) {
            console.log("this is decimal");
        }
    })
}
