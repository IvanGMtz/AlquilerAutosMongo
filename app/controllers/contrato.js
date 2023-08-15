import {con} from "../../config/connection.js";

const getContracts = async (req, res)=>{
    if (!req.rateLimit) return;
    let db = await con();
    let collection = db.collection("Contrato");
    let result = await collection.find({}).toArray();
    res.send(result);
}

const getContract= async(req, res)=>{
    if (!req.rateLimit) return;
    let id = Number(req.params.id);
    let db = await con();
    let collection = db.collection("Contrato");
    let result = await collection.find({"ID":id},{}).toArray();
    res.send(result);
}

const getPendingReservation= async(req, res)=>{
    if (!req.rateLimit) return;
    let db = await con();
    let collection = db.collection("Contrato");
    let result = await collection.aggregate([
        {
            $match: {Estado:{$eq:"Pendiente"}}
        },
        {
            $lookup: {
              from: "Cliente",
              localField: "ID_Cliente",
              foreignField: "ID",
              as: "Cliente"
            }
        },
        {
            $lookup: {
                from: "Automovil",
                localField: "ID_Automovil",
                foreignField: "ID",
                as: "Carro"
              }
        },
        {
            $project: {
              _id:0,
              ID_Cliente:0,
              "Cliente._id":0,
              "Carro._id":0
            }
        }
    ]).toArray();
    res.send(result);
}

const getActiveRent= async(req, res)=>{
    if (!req.rateLimit) return;
    let db = await con();
    let collection = db.collection("Contrato");
    let result = await collection.aggregate([
        {
            $match: {Estado:{$eq:"Activo"}}
        },
        {
            $lookup: {
              from: "Cliente",
              localField: "ID_Cliente",
              foreignField: "ID",
              as: "Cliente"
            }
        },
        {
            $project: {
              _id:0,
              ID_Cliente:0,
              "Cliente._id":0
            }
        }
    ]).toArray();
    res.send(result);
}

const getSpecificRent= async(req, res)=>{
    if (!req.rateLimit) return;
    let id = Number(req.params.id);
    let db = await con();
    let collection = db.collection("Contrato");
    let result = await collection.find({"ID":id, Tipo:"Alquiler"}).toArray();
    res.send(result);
}

const getDate= async(req, res)=>{
    if (!req.rateLimit) return;
    let id = Number(req.params.id);
    let db = await con();
    let collection = db.collection("Contrato");
    let result = await collection.aggregate([
        {
            $match: { Fecha_Inicio: new Date('2023-07-05') }
        },
        {
            $project : {
                _id : 0
                
            }
        }
    ]).toArray();
    res.send(result);
}

const getBetweenDate= async(req, res)=>{
    if (!req.rateLimit) return;
    let id = Number(req.params.id);
    let db = await con();
    let collection = db.collection("Contrato");
    let result = await collection.aggregate([
        {
            $match: {
                Fecha_Inicio: { $gte: new Date('2023-07-05'), $lte: new Date('2023-07-10') },
                Tipo: 'Alquiler'
            }
        },
        {
            $project : {
                _id : 0
                
            }
        }
    ]).toArray();
    res.send(result);
}

export { getContract, getContracts, getPendingReservation, getActiveRent, getSpecificRent, getDate, getBetweenDate}