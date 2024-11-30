# Proyecto de Aplicación para Votar por tu Personaje Favorito, utilizando Node.js, React y Mongo Atlas

Este es un proyecto de aplicación web donde los usuarios pueden votar por sus personajes favoritos de diferentes series. El proyecto está compuesto por dos partes:

- **Frontend (React)**: La interfaz de usuario donde los usuarios pueden interactuar con la aplicación.
- **Backend (Node.js)**: El servidor que maneja las solicitudes de los usuarios y conecta con la base de datos.

## Requisitos Previos

Antes de comenzar, asegúrate de tener los siguientes programas instalados en tu computadora:

1. **[Node.js](https://nodejs.org/)**: Node.js es un entorno de ejecución para JavaScript. Incluye npm (Node Package Manager), que es necesario para gestionar las dependencias del proyecto.

   - Para verificar si Node.js está instalado, abre la terminal (CMD o PowerShell en Windows, Terminal en macOS o Linux) y ejecuta el siguiente comando:
     ```bash
     node --version
     ```
     Si Node.js está instalado correctamente, verás un número de versión (por ejemplo, `v16.13.0`). Si no está instalado, visita [la página oficial de Node.js](https://nodejs.org/) para descargarlo.

2. **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)**: El proyecto usa **MongoDB Atlas** como base de datos en la nube. No necesitas tener MongoDB instalado localmente, solo debes crear una cuenta en MongoDB Atlas y obtener la URL de conexión a tu base de datos. Esta conexión está configurada en el archivo `.env` del proyecto.

## Pasos para Ejecutar el Proyecto

### 1. Descargar el Proyecto

1. **Clonar el repositorio**: 
   - Abre la terminal en tu computadora, esto lo puedes hacer oprimiendo la tecla windows(lo mantienes oprimida) y
     oprimes la tecla R de tu computador, esto te abre una ventana negra, no te asustes, esa es la ventana CMD que necesitamos
   - Navega a la carpeta donde deseas guardar el proyecto, una vez descargues el repositorio obtienes la ruta de la carpeta y tecleas el siguiente comando en la cmd(la ventana negra que abriste hace un rato)
   - CD la_direccion_que_obtuviste_de_la_carpeta
   - Ejecuta el siguiente comando para clonar el repositorio desde GitHub:
     ```bash
     git clone https://github.com/erick-jimenez-riano/LIKE-DISLIKE-APP.git
     ```

2. **Navegar al directorio del proyecto**:
   Una vez que el repositorio esté clonado, navega a la carpeta `repositorio` que contiene las subcarpetas `frontend` y `backend`:
   ```bash
   cd tu_repositorio

3. **Porterior a esto debes ejecutar el siguiente codigo enla CMD(la ventanita negra que habias abierto hace un rato)
    npm run start-all si estoy no funciona debes ejecutar el codigo "npm start"
4.  Eso abrirá tu navegador con la aplicacion, si no te abre automaticamente en tu navegador de preferencia pondras la sigueinte direccion http://localhost:3000/ y se ejecutara la aplicación

Comparte y disfruta con aprecio Erick Jimenez 
