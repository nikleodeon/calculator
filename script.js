let memory;

function getValue(value) {
    let display = document.getElementById("screen");
    display.textContent = value;
}

function displayValue() {
    
}
    
document.querySelectorAll("button").forEach(element => {
    element.addEventListener("click", () => {
        getValue(element.textContent);
    })
});