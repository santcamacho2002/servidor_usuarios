# 🛡️ Servidor de Usuarios con Autenticación JWT y Mensajeria

Este es un servidor backend construido con **Node.js**, que incluye autenticación de usuarios mediante **JWT**, gestión de usuarios, mensajería en tiempo real mediante **WebSockets** (Socket.IO), y arquitectura modular.

Este proyecto forma parte del ecosistema de la aplicación **JaveLab**, desarrollada como trabajo de grado para Ingeniería de Sistemas en la Pontificia Universidad Javeriana.

## 🚀 Tecnologías

- **Node.js**
- **Express**
- **JWT (JSON Web Tokens)**
- **Socket.IO**
- **MongoDB + Mongoose**
- **dotenv**
- **CORS**
- **BcryptJS**

## 📁 Estructura del Proyecto

```bash
.
├── .env                        # Variables de entorno
├── .gitignore                 # Ignorados por Git
├── index.js                   # Punto de entrada del servidor
├── package.json
├── controllers/               # Lógica de negocio
│   ├── auth.js
│   ├── mensajes.js
│   ├── socket.js
│   └── usuarios.js
├── database/
│   └── config.js              # Conexión a MongoDB
├── helpers/
│   └── jwt.js                 # Generación y validación de JWT
├── middlewares/
│   ├── validar-campos.js
│   └── validar-jwt.js
├── models/
│   ├── mensaje.js
│   └── usuario.js
├── public/
│   └── index.html             # Cliente básico de prueba
├── routes/
│   ├── auth.js
│   ├── mensajes.js
│   └── usuarios.js
└── sockets/
    └── socket.js              # Configuración de WebSocket
```

## ⚙️ Instalación y Ejecución

1. Clona el repositorio:

```bash
git clone https://github.com/TU_USUARIO/servidor-usuarios.git
cd servidor-usuarios
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` en la raíz con las siguientes variables:

```env
PORT=8080
DB_CNN=mongodb+srv://<usuario>:<password>@<cluster>/<base_de_datos>?retryWrites=true&w=majority
JWT_SECRET=supersecreto123
```

4. Ejecuta el servidor:

```bash
npm start
```

> También puedes usar `nodemon` para desarrollo:
> ```bash
> npm install -g nodemon
> nodemon index.js
> ```

## 📡 Endpoints disponibles

| Método | Ruta             | Descripción                         |
|--------|------------------|-------------------------------------|
| POST   | `/api/auth`      | Login de usuario                    |
| GET    | `/api/usuarios`  | Obtener usuarios autenticados       |
| GET    | `/api/mensajes`  | Obtener mensajes de un usuario      |

Todos los endpoints protegidos requieren **JWT** en el header:  
```
Authorization: Bearer <token>
```

## 💬 Sockets

- Comunicación en tiempo real usando `Socket.IO`
- Validación de tokens JWT en la conexión
- Envío y recepción de mensajes en tiempo real

## 🧪 Test Básico

Abre `public/index.html` en tu navegador para probar la conexión socket (requiere que el servidor esté corriendo).

## 🧑‍💻 Autor

Desarrollado por el Grupo 2 de la Pontificia Universidad Javeriana:

- Santiago Alejandro Camacho Villegas

## 📜 Licencia

Este proyecto fue desarrollado exclusivamente con fines académicos. Su uso está limitado a entornos educativos o personales.
