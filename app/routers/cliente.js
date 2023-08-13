import express from "express";
import {limitGet} from "../middlewares/limit.js";
import {getClient, getClients, getClientReservation} from "../controllers/cliente.js"

const appcliente = express.Router();

appcliente.get("/", limitGet(), getClients);

appcliente.get("/reserva", limitGet(), getClientReservation);

appcliente.get("/:DNI", limitGet(), getClient);

export default appcliente;