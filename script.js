// =============
// Color Flipper
// =============

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

const colorFrame = document.getElementById("color-flipper")
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    var hexColor = "#";
    for (var i=0; i<6; i++) {
        let randomNumber = Math.round(15*Math.random());
        hexColor += hex[randomNumber];
    }

    color.textContent = hexColor;
    colorFrame.style.backgroundColor = hexColor;    
});

// ========
// COUNTER
// ========

var count = 0;
const numberCounted = document.getElementById("number-counted");
const decreaseButton = document.getElementById("decrease-btn");
const resetButton = document.getElementById("reset-btn");
const increaseButton = document.getElementById("increase-btn");

decreaseButton.addEventListener("click", function() {
    count--;
    numberCounted.textContent = count;
    if (count<0) {
        numberCounted.style.color = "red";
    } else if (count==0){
        numberCounted.style.color = "black"
    } else {
        numberCounted.style.color = "green"
    }
});

resetButton.addEventListener("click", function(){
    count = 0;
    numberCounted.textContent = 0;
    numberCounted.style.color = "black";
});

increaseButton.addEventListener("click", function() {
    count++;
    numberCounted.textContent = count;
    if (count<0) {
        numberCounted.style.color = "red";
    } else if (count==0){
        numberCounted.style.color = "black"
    } else {
        numberCounted.style.color = "green"
    }
});