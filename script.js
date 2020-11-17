// =============
// Color Flipper
// =============

var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

var btn = document.querySelector(".btn");
var color = document.querySelector(".color");

btn.addEventListener("click", function() {
    var hexColor = "#";
    for (var i=0; i<6; i++) {
        let randomNumber = Math.round(15*Math.random());
        hexColor += hex[randomNumber];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;    
});