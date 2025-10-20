/*Ejercicio 1: Rutas GET y POST simples 
1. Objetivo: Crear un servidor con Node.js que maneje rutas GET y POST 
básicas. 
2. Instrucciones: 
o Crea un servidor usando express. 
o Define las siguientes rutas: 
▪ GET /hello: Responde con un mensaje JSON que diga: { 
message: "Hola, mundo!" }. 
▪ POST /hello: Recibe un JSON con un campo name y responde 
con: { message: "Hola, [nombre]!" }, donde [nombre] es el valor 
enviado.*/

const express = require('express');

const app = express();

app.use(express.json());

//RUTA get/hello

app.get('/hello', (req,res) => {
    res.json({message: `Hola, mundo!`})
})

app.post('/hello', (req,res) => {
   const { name } = req.body;  // tomamos el campo name del json enviado
    if (!name) {
        return res.status(400).json({error: "Falta el campo 'name' "})
    }
    res.json({message: `Hola, ${name}!`})
})

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000')
})