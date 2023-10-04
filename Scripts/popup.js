// define the Pop Up
var popup = document.getElementById("popup");
// define the button that opens the Pop Up
var btn = document.getElementById("join");
// define the <span>element that closes the Pop Up
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the pop up with tahnk you message
btn.onclick = function () {
    popup.style.display = "block";
}
// When the user clicks on close, close the modal
span.onclick = function () {
    popup.style.display = "none";
}
// When the user clicks outside of the Pop up, close it
window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}
