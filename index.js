//El servicio de backend se va contruir usadon nodejs y express 
//que son herramientas populares para hacer esto.

//Nodejs permite ejecutar codigo de Javascript sin necesidad de
//utilizar un navegador, puede hacer varias tareas sin esperar
//que primero termine una para ir por la otra.

//Express es una herramienta que permita construir en nodejs
//puede hacer al servidor solucitudes como GET, POST, PUT y 
//DELETE y administra los datos entre cliente y servidor.

//importando la libreria de express
const express = require('express');

//npm install cors
const cors = require('cors') //Para permitir solucitudes de diferentes dominios

//CORS - Cross-Origin Resource Sharing es decir comparticion de recursos entre 
//origines cruzados, restringe desde que dominios se pueden hacer solicitudes HTTP. 

//creado la app en express, aqui se administran
//todas la solucitudes al servidor y el manejo de
//datos.
const app = express();

app.use(cors()); //habilitar el CORS, solo permite hacer solicitudes HTTP desde
//http://localhost:3000 no desde otro dominio como http://localhost:4000

//JSON (Javascript Object Notation): es un formato de datos que se puede
//escribir facil para humanos y tambien facil de entender para la maquinas
//Estructura de JSON: {clave: "valor"} es como un diccionario de python.

//solucitudes http
// -GET: solucitud para solicitar datos al servidor sin modificarlos y los 
// parametros se envian en la URL
// -POST: usada para enviar datos al servidor y se envia en el cuerpo de la 
// solicitud por seguridad

//permite leer y entender datos enviados en solucitudes POST. 
app.use(express.json());

//numero de puerto, es decir puerta de entrada 
//al servidor
const port = 3000;

// creacion de contador de likes y dislikes
let counters = {
    likes: 0,
    dislikes: 0,
};


//solicitud GET para ver el numero de likes y dislikes

// '/counters' es similar a decir 'http://localhost:3000/counters' asi para lo demas. 
app.get('/counters', (req, res) => {
    res.json(counters); // responder con el contador actual de likes y dislikes.
});

// contador de likes, escuchando la url /like desde donde se envia la informacion
// de likes al servidor
app.post('/like', (req, res) => { // req indica solucitud y res respuesta, es decir dar respuesta a una solicitud. 
    counters.likes += 1; // cuando se da un like se envia tal informacion por la url /like y se incremente el 
    // numero de likes
    res.json(counters); // actualizar variable de contador de likes.
});

// Contador de dislikes misma logica que el contador de likes. 
app.post('/dislike', (req, res) => {
    counters.dislikes += 1;
    res.json(counters);
});


//escuchando solucitudes al puerto 3000 indicando que esta disponible
//para recibir clientes.
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


//para correr el servidor:

//si es por primera vez: 
//  -sudo apt install nodejs
//  -sudo apt install npm
//  -npm init 
//  -npm install express
//  -npm install cors
//  -node index.js
// ir al url: http://localhost:3000

//despues solo ejecutar: node index.js e ir a la url http://localhost:3000
