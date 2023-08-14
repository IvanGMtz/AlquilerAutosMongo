import express from "express";
import {limitGet} from "../middlewares/limit.js";
import { getContract, getContracts, getPendingReservation, getActiveRent, getSpecificRent} from "../controllers/contrato.js"

const appcontrato = express.Router();

appcontrato.get("/", limitGet(), getContracts);

appcontrato.get("/reserva/pendiente", limitGet(), getPendingReservation);

appcontrato.get("/alquiler/activo", limitGet(), getPendingReservation);

appcontrato.get("/alquiler/:id", limitGet(), getSpecificRent);

appcontrato.get("/:id", limitGet(), getContract);

export default appcontrato;