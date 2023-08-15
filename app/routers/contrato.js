import express from "express";
import {limitGet} from "../middlewares/limit.js";
import { getContract, getContracts, getPendingReservation, getActiveRent, getSpecificRent, getBetweenDate, getDate} from "../controllers/contrato.js"

const appcontrato = express.Router();

appcontrato.get("/", limitGet(), getContracts);

appcontrato.get("/reserva/pendiente", limitGet(), getPendingReservation);

appcontrato.get("/alquiler/activo", limitGet(), getActiveRent);

appcontrato.get("/alquiler/fecha", limitGet(), getDate);

appcontrato.get("/alquiler/Entrefecha", limitGet(), getBetweenDate);

appcontrato.get("/alquiler/:id", limitGet(), getSpecificRent);

appcontrato.get("/:id", limitGet(), getContract);

export default appcontrato;