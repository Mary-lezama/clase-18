/*Ejercicio 4: CRUD básico (solo parte inicial) 
1. Objetivo: Implementar las rutas iniciales de un CRUD para gestionar 
usuarios. 
2. Instrucciones: 
o Define las siguientes rutas: 
▪ GET /users: Responde con una lista de usuarios (puede ser un 
array estático). 
▪ POST /users: Recibe un JSON con id, name y email, y responde 
con { message: "Usuario creado", user: [datos del usuario] }. 
3. Pasos para probar con Postman: 
o Haz una solicitud GET a /users para obtener la lista de usuarios. 
o Haz una solicitud POST a /users enviando un JSON como: 
{ 
"id": 1, 
"name": "Ana", 
"email": "ana@example.com" 
} 
Verifica que la respuesta incluya el mensaje y los datos enviados.*/

const express = require('express');
const app = express();

app.use(express.json()); // para poder leer JSON en el body

// 🔹 Array estático de ejemplo
let users = [
  { id: 1, name: "Juan", email: "juan@example.com" },
  { id: 2, name: "María", email: "maria@example.com" }
];

// 🔸 GET /users → devuelve la lista de usuarios
app.get('/users', (req, res) => {
  res.json(users);
});

// 🔸 POST /users → recibe un nuevo usuario y lo agrega
app.post('/users', (req, res) => {
  const { id, name, email } = req.body;

  // Validación simple
  if (!id || !name || !email) {
    return res.status(400).json({ error: "Todos los campos son obligatorios." });
  }

  const newUser = { id, name, email };
  users.push(newUser); // lo agrega al array

  res.json({
    message: "Usuario creado",
    user: newUser
  });
});

// --- 🚨 Manejo de rutas no encontradas (404) ---
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada." });
});


// 🔸 Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
