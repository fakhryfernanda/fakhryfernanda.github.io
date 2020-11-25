// Navigation Bar Background Change when Scrolled 

const navBar = document.getElementById("nav-bar");
const navMenu = document.getElementById("nav-menu");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navBar.style.background = "linear-gradient(to right, #FDFBFB, #EBEDEE 70%";
        navBar.style.boxShadow = "1px 0px 8px rgba(0,0,0,0.4)"
        navMenu.style.color = "black"
    } else {
        navBar.style.background = "none"; 
        navBar.style.boxShadow = ""      
        navMenu.style.color = "white" 
    };
};

// Slideshow

var modal = document.getElementById("slide-modal");
var img = document.querySelectorAll(".slide-image");
var modalImg = document.getElementsByClassName("modal-content")[0];
var link = document.getElementsByClassName("direct-link")[0];

img.forEach(function(image,index){
    image.addEventListener("click", function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        link.href = this.alt;
        link.target = "_blank";
    });
});

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

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
const countButton = document.querySelectorAll(".count-btn");

countButton.forEach(function(btn, index) {
    btn.addEventListener("click", function() {
        switch (index) {
            case 0:
                count--;
                numberCounted.textContent = count;
                break;
            case 1:
                count=0;
                numberCounted.textContent = 0;
                break;
            case 2:
                count++;
                numberCounted.textContent = count;
                break;
        };

        if (count<0) {
            numberCounted.style.color = "red";
        } else if (count==0){
            numberCounted.style.color = "black"
        } else {
            numberCounted.style.color = "green"
        };
    });
});