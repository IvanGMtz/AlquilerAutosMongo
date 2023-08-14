import express from "express";
import {limitGet} from "../middlewares/limit.js";
import { getEmployee, getEmployees, getSellerEmployee, getManagerAssistantEmployees } from "../controllers/empleado.js"

const appemployee = express.Router();

appemployee.get("/", limitGet(), getEmployees);

appemployee.get("/cargo/vendedor", limitGet(), getSellerEmployee);

appemployee.get("/cargo/gerente&asistente", limitGet(), getManagerAssistantEmployees);

appemployee.get("/:DNI", limitGet(), getEmployee);

export default appemployee;