const box2 = document.querySelector(".box2")
const button2 = document.querySelector(".button2")
const body = document.querySelector("body")
button2.addEventListener("click", () => {
    let code = "#" + Math.floor(Math.random()*16777215).toString(16);
    box2.innerHTML = code;
    body.style.backgroundColor = code;

})
