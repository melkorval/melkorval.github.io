
function toggleLike(button) {
    button.classList.toggle('liked');
    if (button.classList.contains('liked')) {
        button.textContent = '❤️';
    } else {
        button.textContent = '👍';
    }
}

function toggledisLike(button) {
    button.classList.toggle('liked');
    if (button.classList.contains('liked')) {
        button.textContent = '💔';
    } else {
        button.textContent = '👎';
    }
}

/*una vez dado un like o dislike bloquear el otro boton*/
