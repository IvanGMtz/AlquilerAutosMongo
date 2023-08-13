import express from "express";
import {limitGet} from "../middlewares/limit.js";
import {getCar, getCars, getDisponibles, getMarcaModelo, getMayor5} from "../controllers/automovil.js"

const appAutomovil = express.Router();

appAutomovil.get("/", limitGet(), getCars);

appAutomovil.get("/disponible", limitGet(), getDisponibles);

appAutomovil.get("/marcamodelo", limitGet(), getMarcaModelo);

appAutomovil.get("/mayor5", limitGet(), getMayor5);

appAutomovil.get("/:id", limitGet(), getCar);

export default appAutomovil;