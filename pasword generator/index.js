let btn = document.querySelector("button");
let h2 = document.querySelector("#genpas"); 
let slider = document.querySelector("#vr"); 
let x = document.querySelector("p");


let up = document.getElementById("uppercase");
let down = document.getElementById("lowercase");
let number = document.getElementById("numbers");
let symbol = document.getElementById("symbols");

x.textContent = slider.value;

slider.addEventListener("input", (i) => {
    x.textContent = i.target.value;
});

btn.addEventListener("click", () => {
    let capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let small = 'abcdefghijklmnopqrstuvwxyz';
    let num = '0123456789';
    let sym = '!@#$%^&*()-_{}[]><?/~';
    
    let finalstr = ''; 

    if (up.checked) {
        finalstr += capital; 
    }
    if (down.checked) {
        finalstr += small;
    }
    if (number.checked) {
        finalstr += num;
    }
    if (symbol.checked) {
        finalstr += sym;
    }

    
    if (finalstr === '') {
        alert("Please select at least one character type!");
        return; 
    }

    let latest = '';
    
    for (let i = 0; i < slider.value; i++) {
        let ran = Math.floor(Math.random() * finalstr.length);
        latest += finalstr[ran];
    }

    h2.textContent = latest;
});