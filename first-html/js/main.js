let button = document.querySelector('.button');

button.addEventListener('click', function(event) {
    let text = document.querySelector('.text');
    // text.innerHTML = `<span>${text.textContent.trim().split('').join('</span><span>')}</span>`;

    if (!button.classList.contains('delete')) {
        button.classList.add('delete');

        setTimeout(function() { // async
            button.classList.remove('delete');
        }, 2200); // ms
    }

    event.preventDefault();
});