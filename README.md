# 2021-TPI-G2

## Features
##### Primera entrega TPI - Empresas del Sector Comercio 

## Technologies used
#### Express 
#### React
#### Mysql
#### Sequelize

## Instalación

1. Clonar este repositorio
2. Ubicarse en 
```console
/api
```
4. Ejecutar  
```console
npm install
```

Después, se debe crear un esquema llamado 'dacs_tpi' en MySQL
y cambiar el parámetro en el constructor de sequelize ubicado en:
```console
api/src/loaders/db/db.js
```

```javascript
const sequelize = new Sequelize('dacs_tpi','usuario','password', {
    host:'localhost',
    dialect:'mysql',
    dialectOptions: {decimalNumbers: true},
    define:{
        timestamps:false
    }
```

Ahora se puede levantar el servidor ejecutando:
```console
 npm start
```

Para correr el cliente de React, ubicarse en 
```console
client/my-app
``` 
 
y ejecutar
```console
npm install
```

Ahora se puede acceder desde el navegador
```console
localhost:3001
```
