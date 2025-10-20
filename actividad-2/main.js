/*Ejercicio 2: Ruta con parámetros dinámicos 
1. Objetivo: Crear una ruta que utilice parámetros de la URL. 
2. Instrucciones: 
o Define la ruta GET /greet/:name que reciba un parámetro name en la 
URL y responda con un mensaje como: { message: "Hola, [nombre]!" 
}. 
3. Pasos para probar con Postman: 
o Haz una solicitud GET a http://localhost:3000/greet/Ana y verifica 
que la respuesta sea: { message: "Hola, Ana!" }. 
o Cambia el parámetro en la URL (por ejemplo, /greet/Juan) y prueba. */

const express = require('express');

const app = express();

app.use(express.json());


// 2️⃣ Definir la ruta con parámetro dinámico ":name"
app.get('/greet/:name', (req, res) => {
  // 3️⃣ Obtener el parámetro desde la URL
  const name = req.params.name;

  // 4️⃣ Responder con un JSON
  res.json({ message: `Hola, ${name}!` });
});


app.listen(3080, () => {
    console.log('Servidor corriendo en http://localhost:3080')
})