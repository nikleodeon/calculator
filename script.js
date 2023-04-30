const keys = document.getElementsByTagName("button");

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", e => {
        const key = e.target;
        if (key.classList.contains("number")) {
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
