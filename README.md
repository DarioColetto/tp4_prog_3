# TP4 - Proyecto Fullstack

Este proyecto consiste en una aplicación con backend en Express y frontend en React.

## Estructura del proyecto

- `/backend`: Código del backend con la API REST.
  - `app.js`: Punto de entrada del servidor Express.
  - `package.json`: Dependencias y scripts del backend.
  - `/controllers`: Lógica de controladores (por ahora solo `personaController.js`).
  - `/models`: Modelos de datos (por ahora solo `personaModel.js`).
  - `/routes`: Definición de rutas (por ahora solo `personaRoutes.js`).
- `/frontend`: Código del frontend en React.
  - `index.html`: HTML principal.
  - `package.json`: Dependencias y scripts del frontend.
  - `styles.css`: Estilos globales.
  - `/src`: Código fuente de React.
    - `App.jsx`: Componente principal.
    - `main.jsx`: Punto de entrada de React.
    - `/components`: Componentes reutilizables (`ListaTarjetas.jsx`, `TarjetaPersona.jsx`, `TraerPersonas.jsx`, `componentStyles.css`).

## Requisitos

- Node.js instalado
- npm 

## Cómo correr el proyecto

### Backend

1. Entrar a la carpeta backend:
    - cd backend

2. Instalar dependencias:
    - npm i

3. Iniciar el servidor:
    - npm run dev

El backend correrá en `http://localhost:3000`.

### Frontend

1. Entrar a la carpeta frontend:
    - cd frontend

2. Instalar dependencias:
    - npm i

3. Iniciar la aplicación:
    - npm run dev

El frontend correrá en `http://localhost:5173` (o el puerto que use Vite).

## Endpoints de la API

- `GET /personas`: Devuelve la lista de personas en formato JSON.

## Notas

- El backend tiene habilitado CORS para que el frontend pueda consumir la API.
- La API expone el endpoint `/personas` para obtener la lista de personas.
- Para desarrollo, ambos servidores deben estar corriendo al mismo tiempo.

## Scripts útiles

### Backend

- `npm run dev`: Inicia el backend con nodemon para recarga automática.
- `npm start`: Inicia el backend en modo producción.

### Frontend

- `npm run dev`: Inicia el frontend en modo desarrollo.
- `npm run build`: Genera la versión de producción del frontend.
- `npm run preview`: Previsualiza el build de producción.

## Autor

- Dario Coletto# tp4_prog_3
