const add = (step) => {
    let numberElement = document.getElementById("number");
    let number = parseInt(numberElement.innerText);
    numberElement.innerText = number + step;
};

const minus = (step) => {
    console.log("minus function was run");
    let numberElement = document.getElementById("number");
    let number = parseInt(numberElement.innerText);
    console.log(number);
    numberElement.innerText = number - step;
};  

const clear = () => {
    let numberElement = document.getElementById("number");
    numberElement.innerText = 0;
};