
//Create an HTML button and use an anonymous function to change the button text on click.
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function() {
    btn1.textContent = "Clicked!";
});
//JavaScript does not support function overloading natively, but implement a function add that can take either two or three arguments and performs addition accordingly.

function add() {
  if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  } else if (arguments.length === 3) {
    return arguments[0] + arguments[1] + arguments[2];
  } else {
    console.log("add() expects 2 or 3 arguments");
  }
}
console.log(add(2, 3));      
console.log(add(1, 2, 3));   

//Change Text Content
let myText = document.getElementById("myText");
window.onload = function() {
    myText.textContent = "Hello JavaScript!";
}
//Input and Display

let inputField = document.getElementById("inputField");
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function() {
    let display = document.getElementById("div1");
    display.textContent = inputField.value;
});

//Toggle Visibility
let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function() {
    let paragraph = document.getElementById("paragraph");
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});

//Background Color Changer
let div2 = document.getElementById("div2");
div2.addEventListener("click", function() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);    
    let b = Math.floor(Math.random() * 256);
    let randomColor = `rgb(${r}, ${g}, ${b})`;
    div2.style.backgroundColor = randomColor;
});

//calculator

let expression = "";

    function append(value) {
      expression += value;
      document.getElementById("display").textContent = expression;
    }

    function clearDisplay() {
      expression = "";
      document.getElementById("display").textContent = "";
    }

    function calculate() {
      try {
        const result = eval(expression);
        document.getElementById("display").textContent = result;
        expression = result.toString();
      } catch (error) {
        document.getElementById("display").textContent = "Error";
        expression = "";
      }
    }

//Countdown Timer

let countdownDisplay = document.getElementById("countDisplay");
let countdownButton = document.getElementById("countbtn");
let count = 1;
countdownButton.addEventListener("click", function() {
    if(count > 10) count = 0;
    countdownDisplay.textContent = count;
    count++;
});

//Password Show/Hide
let passwordField = document.getElementById("passwordField");
let checkbox = document.getElementById("showPassword");
checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});