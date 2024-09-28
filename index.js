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

//creado la app en express, aqui se administran
//todas la solucitudes al servidor y el manejo de
//datos.
const app = express();

//numero de puerto, es decir puerta de entrada 
//al servidor
const port = 3000;

//cuando alguien dentre al servidor se le envia un mensaje, ya que
//hace un solucitud a la url '/' y se responder con 'Hello, World'
app.get('/', (req, res) => {
  res.send('Hello, World!');
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
//  -node index.js
// ir al url: http://localhost:3000

//despues solo ejecutar: node index.js e ir a la url http://localhost:3000

