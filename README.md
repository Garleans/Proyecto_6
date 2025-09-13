# 📚 Proyecto 6 - API REST para Gestión de Usuarios y Productos

Este desarrollo corresponde a lo solicitado para el proyecto 6 del bootcamp fullstack UDD
Se dejan los endpoints solicitados, rutas y ejemplos.
El proyecto se subió a Render, según lo visto en clases.

---

## 👤 Endpoints para Usuario

| Descripción | Método | Endpoint | Caso de uso | Ruta completa | Ejemplo JSON |
|-------------|--------|----------|-------------|----------------|---------------|
| Registrar un usuario | POST | `/api/user/register` | Como usuario, quiero registrarme en la plataforma proporcionando mi nombre, correo electrónico y una contraseña. | `https://proyecto-6-juan-opazo.onrender.com/api/v1/users/register` | `{ "username": "usuario_prueba", "email": "prueba@example.com", "password": "lamassegura14" }` |
| Iniciar sesión | POST | `/api/user/login` | Como usuario, quiero iniciar sesión en la plataforma utilizando mi correo electrónico y contraseña. | `https://proyecto-6-juan-opazo.onrender.com/api/v1/users/login` | `{ "email": "prueba@example.com", "password": "lamassegura14" }` |
| Verificar token | GET | `/api/user/verifytoken` | Como usuario, quiero que mi sesión se mantenga abierta y que la plataforma recuerde mi estado de inicio de sesión. | `https://proyecto-6-juan-opazo.onrender.com/api/v1/users/verify-user` | *(Requiere token en headers)* |
| Actualizar usuario | PUT | `/api/user/update` | Como usuario, quiero actualizar mi información de perfil. | `https://proyecto-6-juan-opazo.onrender.com/api/v1/users/update` | `{ "username": "usuario_updateado", "email": "updated@example.com" }` |


****

## 📚 Endpoints para Producto

| Descripción | Método | Endpoint | Caso de uso | Ruta completa | Ejemplo JSON |
|-------------|--------|----------|-------------|----------------|---------------|
| Crear producto | POST | `/api/product/create` | Como vendedor, quiero agregar un nuevo producto al catálogo. | `https://proyecto-6-juan-opazo.onrender.com/api/v1/books` | `{ "name": "Dune", "author": "Frank Herbert", "price": 17990 }` |
| Leer todos los productos | GET | `/api/product/readall` | Como comprador, quiero ver todos los productos disponibles. | `https://proyecto-6-juan-opazo.onrender.com/api/v1/books` | *(Sin body)* |
| Leer un producto específico | GET | `/api/product/readone/:id` | Como comprador, quiero ver los detalles de un producto específico. | `https://proyecto-6-juan-opazo.onrender.com/api/v1/books/readone/:id` | *(Sin body)* |
| Actualizar producto | PUT | `/api/product/update/:id` | Como vendedor, quiero actualizar los detalles de un producto. | `https://proyecto-6-juan-opazo.onrender.com/api/v1/books/:id` | `{ "name": "Dune - Edición Especial", "author": "Frank Herbert", "price": 19990 }` |
| Eliminar producto | DELETE | `/api/product/delete/:id` | Como vendedor, quiero eliminar un producto del catálogo. | `https://proyecto-6-juan-opazo.onrender.com/api/v1/books/:id` | *(Sin body)* |
