function getValue(value) {
    console.log(value);
}
    
document.querySelectorAll("button").forEach(el => {
    el.addEventListener("click", () => {
        getValue(el.textContent);
    })
})