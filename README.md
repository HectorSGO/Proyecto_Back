# Entegable 2.
### Descripción
En este repositorio se encuentran los temas relacionados a las semanas 3, 4, 5 y 6.

+ Javascript
+ Angular
+ NodeJS
+ CleanCode

## Requerimientos

+ npm install
+ npm install axios
+ npm install mongoose
+ Importar la coleccion users.json ubicada en la carpeta raiz de este proyecto.

Se adjunta imagen de la configuracion de la base de datos:
+ https://raw.githubusercontent.com/HectorSGO/Proyecto_Back/main/assets/config.png

De lo contrario crear una base de datos con las siguientes configuraciones:
+ https://raw.githubusercontent.com/HectorSGO/Proyecto_Back/main/assets/config.png

Correr el proyecto
+ npm run start

Y posterior utilizar el siguiente endpoint:

curl --location 'http://localhost:3000/signup' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "mentor@email.com",
    "password": "password123"
}'
## Comandos de ejecucion:

+ npm run start
+ docker-compose up

## URL del inicio del servidor

+ http://localhost:3000

## Accesos para la interfaz http://localhost:4200/login

+ {
    "email": "mentor@email.com",
    "password": "password123"
}

+ {
    "email": "usuario1@email.com",
    "password": "password123"
}