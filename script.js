/*referencia de los botones por medio de un Id */
const like_button = document.getElementById("like-button");
const dislike_button = document.getElementById("dislike-button")

/*funciones para hacer los cambios cuando en los emojis si se da like o dislike */
function toggleLike(button) {
    /*verifcar si tiene ya un like y agregrar la elerta liked*/
    
    /*hacer los repectivos cambios de emoji si tiene un liked o dejar
    igual en caso contrario*/
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

/*boton para deshabilitar botones */

/*funcion que deshabilita el boton al que no se realizo click */
function disable_button(clickbutton, otherbutton){
    clickbutton.disabled = false;
    otherbutton.disabled = true;
}

/*Escuchar si se da click a los botones */
like_button.addEventListener('click', () => disable_button(like_button, dislike_button));
dislike_button.addEventListener('click', () => dislike_button(dislike_button, like_button));

/*Hacer que el usuario solo pueda dar un solo like */
