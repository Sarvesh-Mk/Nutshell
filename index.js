
let divElement = document.getElementsByClassName("rectangle")[0];
let isClicked = false;

divElement.addEventListener("click", function() {
    isClicked = true;
    window.location.href = "trunk.html"
});