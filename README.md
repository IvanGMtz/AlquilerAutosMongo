# Alquiler de Autos

## Descripción

AlquilerAutosMongo es un sistema de alquiler de autos diseñado para empresas de alquiler de autos. El objetivo principal de esta aplicación es proporcionar una solución eficiente para gestionar el alquiler de autos, mantener un registro de las transacciones y generar informes útiles. Este proyecto se centra en el desarrollo del backend utilizando Node.js, Express y una base de datos MongoDB.

## Requerimientos

El proyecto está desarrollado utilizando Node.js y MongoDB, por lo que necesitarás lo siguiente para ejecutarlo:

- Node.js ([https://nodejs.org](https://nodejs.org/)) - Verifica que la versión instalada sea compatible con las dependencias del proyecto. Se recomienda la versión 18.16.0 de Node.js.
- MongoDB Atlas (https://www.mongodb.com/cloud/atlas) - Se requiere una base de datos MongoDB en línea para almacenar la información del proyecto.

## Configuración del archivo .env

Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias, como la conexión a la base de datos y la clave privada para JWT. Un ejemplo de cómo configurar el archivo `.env` se proporciona en el archivo `.env.example`:

```
makefile
MY_SERVER={"hostname":"125.10.10.1", "port":"3000"}

ATLAS_USER="tu_usuario_de_MongoDB_Atlas"
ATLAS_PASSWORD="tu_contraseña_de_MongoDB_Atlas"
ATLAS_DB="nombre_de_tu_base_de_datos_en_Atlas"

JWT_PRIVATE_KEY="Clave_privada_para_la_creación_del_token"
```

## Instalación de Dependencias

Ejecuta el siguiente comando en la terminal para instalar las dependencias necesarias:

```

npm install
```

## Montar el Servidor

Una vez configuradas las variables de entorno, puedes iniciar el servidor con el siguiente comando:

```
arduino
npm run dev
```

## Generación del Token

Antes de interactuar con los endpoints protegidos, debes generar un token de autenticación JWT para acceder a las funcionalidades protegidas. Puedes hacerlo mediante la siguiente petición GET:

```
arduino
GET http://125.10.10.1:3000/token?tabla=<nombre_tabla>
```

Sustituye `<nombre_tabla>` por el nombre de la tabla para la cual deseas generar el token (por ejemplo, "auto").

**Se debe crear un token por cada tabla a utilizar** Los tokens deben ser ingresados como HTTP Headers de tipo Authorization.

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