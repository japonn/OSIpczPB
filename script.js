// Piotr Barański 136727 Informatyka NST 3 rok 5 semestr gr.1
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Dziękujemy za wysłanie wiadomości! Skontaktujemy się z Tobą wkrótce.");
    document.getElementById('contact-form').reset();
});


window.onscroll = function() {
    stickyHeader()
};

var header = document.querySelector('header');
var sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


