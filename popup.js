document.addEventListener('DOMContentLoaded', function () {
    const generate = document.getElementById('generate');
    generate.addEventListener('click', generatePassword);
});

document.addEventListener('DOMContentLoaded', function () {
    const copy = document.getElementById('copy');
    copy.addEventListener('click', returnPassword);
});


function returnPassword (){
    const textarea = document.createElement("textarea");
    const password = result.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    const btnCopty = document.getElementById('copy');
    btnCopty.innerText = "Copied!"
}


function generatePassword() {
    const result = document.getElementById("result");
    const lenght = document.getElementById("lenght");
    const upper = document.getElementById("upper");
    const lower = document.getElementById("lower");
    const number = document.getElementById("number");
    const symbol = document.getElementById("symbol");

    const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+=";

    if(!upper.checked && !lower.checked && !number.checked && !symbol.checked){
        result.innerText = 'Select one!';
        return;
    }

    let password = "";

    if (upper.checked) {
        password += getUppercase();
    }

    if (lower.checked) {
        password += getLowercase();
    }

    if (number.checked) {
        password += getNumber();
    }

    if (symbol.checked) {
        password += getSymbol();
    }

    for (let i = password.length; i < lenght.value; i++) {
        const x = generateX();
        password += x;
    }

    result.innerText = password;


    function getLowercase() {
        return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
    }
    
    function getUppercase() {
        return upperLetters[Math.floor(Math.random() * upperLetters.length)];
    }
    
    function getNumber() {
        return numbers[Math.floor(Math.random() * numbers.length)];
    }
    
    function getSymbol() {
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    function generateX() {
        const xs = [];
        if (upper.checked) {
            xs.push(getUppercase());
        }
    
        if (lower.checked) {
            xs.push(getLowercase());
        }
    
        if (number.checked) {
            xs.push(getNumber());
        }
    
        if (symbol.checked) {
            xs.push(getSymbol());
        }
    
        if (xs.length === 0) return "";
    
        return xs[Math.floor(Math.random() * xs.length)];
    }
}




