/*referencia de los botones por medio de un Id */
const like_button = document.getElementById("like-button");
const dislike_button = document.getElementById("dislike-button")

//Hacer referencia a los elementos HTML donde parece el conteo de likes y dislikes 
const like_count_display = document.getElementById("like-count");
const dislike_count_display = document.getElementById("dislike-count");

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

//hacer solicitudes al backend

//funcion para enviar al servidor cuando se da like al video
function handleLike() {
    //Enviar al servidor a la url http://localhost:3000/like el like al 
    //video esto se hace en una solicitud POST por que se envian datos
    //al servidor.
    fetch('http://localhost:3000/like', {
        method: 'POST'
    })
    .then(response => response.json()) // Enviar la informacion en un formato de 
    // documento JSON
    .then(data => {
        // Actualizar el contador de like y dislikes para mostrar en HTML.
        like_count_display.textContent = `${data.likes}`;
        dislike_count_display.textContent = `${data.dislikes}`;
    })
    .catch(error => console.error('Error:', error)); //notificar cualquier error.
}

// Function to handle Dislike button click
function handleDislike() {
    // Send a POST request to the /dislike endpoint
    fetch('http://localhost:3000/dislike', {
        method: 'POST'
    })
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
        // Update the dislike count display with the new count from the server
        like_count_display.textContent = `${data.likes}`;
        dislike_count_display.textContent = `${data.dislikes}`;
    })
    .catch(error => console.error('Error:', error));
}

// Escuchar se da click a los botones de likes y dislikes y en tal caso 
// enviar la informacion en solicitudes POST. 
like_button.addEventListener('click', handleLike);
dislike_button.addEventListener('click', handleDislike);

/*Escuchar si se da click a los botones */
like_button.addEventListener('click', () => disable_button(like_button, dislike_button));
dislike_button.addEventListener('click', () => dislike_button(dislike_button, like_button));

/*Hacer que el usuario solo pueda dar un solo like */
