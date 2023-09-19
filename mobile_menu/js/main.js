var hamburgerContainer = document.querySelector('.hamburger-container');
var menu = document.querySelector('#menu');

document.addEventListener('DOMContentLoaded', function() {

    hamburgerContainer.addEventListener('click', function() {

        if (middleBar.classList.contains('rot-45deg')) {
            topBar.classList.remove('rot45deg');
            middleBar.classList.remove('rot-45deg');
            bottomBar.classList.remove('hidden');
        } else {
            topBar.classList.add('rot45deg');
            middleBar.classList.add('rot-45deg');
            bottomBar.classList.add('hidden');
        }

        menu.classList.toggle('show');
    });

});

window.addEventListener('resize', function() {
    if (window.innerWidth > 1024) {
        menu.classList.remove('show');
        menu.style.display = '';
    }
});

var topBar = document.querySelector('.hamburger li:nth-child(1)'),
    middleBar = document.querySelector('.hamburger li:nth-child(2)'),
    bottomBar = document.querySelector('.hamburger li:nth-child(3)');