/*Ejercicio 3: Validación de datos 
1. Objetivo: Validar datos enviados a través de POST. 
2. Instrucciones: 
o Crea la ruta POST /register. 
o Recibe un JSON con los campos username y password. 
o Si alguno de los campos está vacío, responde con un error 400 y el 
mensaje { error: "Todos los campos son obligatorios." }. 
o Si los datos son válidos, responde con: { message: "Usuario 
registrado con éxito!" }. 
3. Pasos para probar con Postman: 
o Envía un body válido: 
{ 
"username": "usuario1", 
"password": "123456" 
} 
Verifica que el servidor responda correctamente. 
o Envía un body con un campo vacío y verifica el error. */

const express = require('express');
const app = express();

// Middleware para poder leer JSON en el body
app.use(express.json());

// Ruta POST /register
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Validación: campos vacíos
  if (!username || !password) {
    return res.status(400).json({
      error: "Todos los campos son obligatorios."
    });
  }

  // Si todo está bien
  res.json({
    message: "Usuario registrado con éxito!"
  });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
