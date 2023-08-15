# Alquiler de Autos

## Descripción

AlquilerAutosMongo es un sistema de alquiler de autos diseñado para empresas de alquiler de autos. El objetivo principal de esta aplicación es proporcionar una solución eficiente para gestionar el alquiler de autos, mantener un registro de las transacciones y generar informes útiles. Este proyecto se centra en el desarrollo del backend utilizando Node.js, Express y una base de datos MongoDB.

## Requerimientos

El proyecto está desarrollado utilizando Node.js y MongoDB, por lo que necesitarás lo siguiente para ejecutarlo:

- Node.js ([https://nodejs.org](https://nodejs.org/)) - Verifica que la versión instalada sea compatible con las dependencias del proyecto. Se recomienda la versión 18.16.0 de Node.js.
- MongoDB Atlas (https://www.mongodb.com/cloud/atlas) - Se requiere una base de datos MongoDB en línea para almacenar la información del proyecto.

## Configuración del archivo .env

Crea un archivo `.env` en la raíz del proyecto, configura las variables de entorno necesarias y la conexión a la base de datos. Un ejemplo de cómo configurar el archivo `.env` se proporciona en el archivo `.env.example`:

```json
MY_SERVER={"hostname":"125.10.10.1", "port":"3000"}

ATLAS_USER="tu_usuario_de_MongoDB_Atlas"
ATLAS_PASSWORD="tu_contraseña_de_MongoDB_Atlas"
ATLAS_DB="nombre_de_tu_base_de_datos_en_Atlas"
```

## Instalación de Dependencias

Ejecuta el siguiente comando en la terminal para instalar las dependencias necesarias:

```
npm install
```

## Montar el Servidor

Una vez configuradas las variables de entorno, puedes iniciar el servidor con el siguiente comando:

```
npm run dev
```

## Petición

Para de interactuar con los endpoints puedes hacerlo mediante la siguiente petición GET:

```
GET http://125.10.10.1:3000/<nombre_endpoint>
```

## Endpoints Disponibles

### Empleado:

1. **Mostrar todos los empleados:**
   - Método: GET
   - Ruta: `/Empleado`
   - Descripción: Obtiene una lista de todos los empleados registrados.
2. **Obtener todos los empleados con el cargo de "Vendedor":**
   - Método: GET
   - Ruta: `/Empleado/cargo/vendedor`
   - Descripción: Obtiene una lista de todos los empleados que tienen el cargo de "Vendedor".
3. **Obtener todos los empleados con los cargos de "Gerente" o "Asistente":**
   - Método: GET
   - Ruta: `/Empleado/cargo/gerente&asistente`
   - Descripción: Obtiene una lista de todos los empleados que tienen los cargos de "Gerente" o "Asistente".
4. **Obtener detalles de un empleado por DNI:**
   - Método: GET
   - Ruta: `/Empleado/:DNI`
   - Parámetro de Ruta: `DNI` - El número de DNI del empleado.
   - Descripción: Obtiene los detalles del empleado con el DNI especificado.

### Contrato:

1. **Mostrar todos los contratos:**
   - Método: GET
   - Ruta: `/Contrato`
   - Descripción: Obtiene una lista de todos los contratos registrados.
2. **Obtener todas las reservas pendientes:**
   - Método: GET
   - Ruta: `/Contrato/reserva/pendiente`
   - Descripción: Obtiene una lista de todas las reservas pendientes.
3. **Obtener todos los alquileres activos:**
   - Método: GET
   - Ruta: `/Contrato/alquiler/activo`
   - Descripción: Obtiene una lista de todos los alquileres activos.
4. **Obtener detalles de un alquiler específico por ID:**
   - Método: GET
   - Ruta: `/Contrato/alquiler/:id`
   - Parámetro de Ruta: `id` - El ID del alquiler específico.
   - Descripción: Obtiene los detalles del alquiler correspondiente al ID proporcionado.
5. **Obtener detalles de un contrato por ID:**
   - Método: GET
   - Ruta: `/Contrato/:id`
   - Parámetro de Ruta: `id` - El ID del contrato específico.
   - Descripción: Obtiene los detalles del contrato correspondiente al ID proporcionado.
6. **Obtener detalles de un alquiler específico por la fecha '2023-07-05':**
   - Método: GET
   - Ruta: `/alquiler/fecha`
7. **Obtener detalles de los alquileres con fecha de inicio entre '2023-07-05' y '2023-07-10':**
   - Método: GET
   - Ruta: `/alquiler/Entrefecha`

### Cliente:

1. **Mostrar todos los clientes:**
   - Método: GET
   - Ruta: `/Cliente`
   - Descripción: Obtiene una lista de todos los clientes registrados.
2. **Obtener todas las reservas de un cliente:**
   - Método: GET
   - Ruta: `/Cliente/reserva`
   - Descripción: Obtiene una lista de todas las reservas realizadas por un cliente.
3. **Obtener detalles de un cliente por DNI:**
   - Método: GET
   - Ruta: `/Cliente/:DNI`
   - Parámetro de Ruta: `DNI` - El número de DNI del cliente.
   - Descripción: Obtiene los detalles del cliente con el DNI especificado.

### Automovil:

1. **Mostrar todos los automóviles:**
   - Método: GET
   - Ruta: `/Automovil`
   - Descripción: Obtiene una lista de todos los automóviles registrados.
2. **Obtener todos los automóviles disponibles para alquiler:**
   - Método: GET
   - Ruta: `/Automovil/disponible`
   - Descripción: Obtiene una lista de todos los automóviles que están disponibles para alquilar.
3. **Obtener todos los automóviles por marca y modelo:**
   - Método: GET
   - Ruta: `/Automovil/marcamodelo`
   - Descripción: Obtiene una lista de todos los automóviles ordenados por marca y modelo.
4. **Obtener todos los automóviles con capacidad mayor a 5 personas:**
   - Método: GET
   - Ruta: `/Automovil/mayor5`
   - Descripción: Obtiene una lista de todos los automóviles con una capacidad mayor a 5 personas.
5. **Obtener detalles de un automóvil por ID:**
   - Método: GET
   - Ruta: `/Automovil/:id`
   - Parámetro de Ruta: `id` - El ID del automóvil específico.
   - Descripción: Obtiene los detalles del automóvil correspondiente al ID proporcionado.

## Dependencias Utilizadas

Este proyecto utiliza diversas dependencias para su funcionamiento. A continuación, se detallan las dependencias principales y sus respectivas versiones:

- **express**: 4.18.2 Express es un marco de aplicación web rápido, minimalista y flexible para Node.js. Es utilizado en este proyecto para manejar las rutas y la lógica de la aplicación.

- **dotenv**: 16.3.1 Dotenv es una librería que permite cargar variables de entorno desde un archivo `.env`. En este proyecto, se utiliza para gestionar las configuraciones sensibles.
- **express-rate-limit**: 6.8.1 Express Rate Limit es un middleware que proporciona limitación de velocidad y control de la frecuencia de las solicitudes HTTP. Se utiliza aquí para prevenir ataques de fuerza bruta y abusos.
- **mongodb**: 5.7.0 MongoDB es una base de datos NoSQL ampliamente utilizada. En este proyecto, se usa para almacenar y recuperar datos relacionados con el alquiler de autos.
- **nodemon**: 3.0.1 Nodemon es una herramienta que ayuda en el desarrollo al reiniciar automáticamente la aplicación cuando se detectan cambios en el código fuente. Esto agiliza el proceso de desarrollo y prueba.