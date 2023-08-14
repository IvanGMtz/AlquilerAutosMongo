import {con} from "../../config/connection.js";

const getEmployees = async (req, res)=>{
    if (!req.rateLimit) return;
    let db = await con();
    let collection = db.collection("Empleado");
    let result = await collection.find({}).toArray();
    res.send(result);
}

const getEmployee= async(req, res)=>{
    if (!req.rateLimit) return;
    let DNI = req.params.DNI;
    let db = await con();
    let collection = db.collection("Empleado");
    let result = await collection.find({"DNI":DNI},{}).toArray();
    res.send(result);
}

const getSellerEmployee= async(req, res)=>{
    if (!req.rateLimit) return;
    let db = await con();
    let collection = db.collection("Empleado");
    let result = await collection.find({Cargo:"Vendedor"},{}).toArray();
    res.send(result);
}

const getManagerAssistantEmployees= async(req, res)=>{
    if (!req.rateLimit) return;
    let db = await con();
    let collection = db.collection("Empleado");
    let result = await collection.find({ Cargo: { $in: ["Gerente", "Asistente"] } },{}).toArray();
    res.send(result);
}

export { getEmployee, getEmployees, getSellerEmployee, getManagerAssistantEmployees}