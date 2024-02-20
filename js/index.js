var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}

document.getElementById('primary-container').addEventListener('wheel', function(event) {
if (event.deltaY > 0) {
    event.target.scrollBy({
    top: window.innerHeight,
    left: 0,
    behavior: 'smooth'});
} else {
    event.target.scrollBy({
    top: -window.innerHeight,
    left: 0,
    behavior: 'smooth'});
    }
});