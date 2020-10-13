
var modal = document.getElementById('modal');
var close = document.getElementsByClassName('close');
function myFunction() {
    modal.style.display = 'block';
}
function closeModal() {
    modal.style.display = 'none';
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.onkeydown = function (evt) {
    if (evt && evt.key === "Escape" || evt && evt.key === "Esc") {
        modal.style.display = "none"

    }
}
