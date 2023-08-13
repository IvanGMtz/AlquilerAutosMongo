import {con} from "../../config/connection.js";

const getCars = async (req, res)=>{
    if (!req.rateLimit) return;
    let db = await con();
    let automovil = db.collection("Automovil");
    let result = await automovil.find({}).toArray();
    res.send(result);
}

const getCar= async(req, res)=>{
    if (!req.rateLimit) return;
    let id = Number(req.params.id)
    let db = await con();
    let automovil = db.collection("Automovil");
    let result = await automovil.find({"ID":id},{}).toArray();
    res.send(result);
}

const getDisponibles= async(req, res)=>{
    if (!req.rateLimit) return;
    console.log("Hola");
    let db = await con();
    let automovil = db.collection('Contrato');
    let automovilDisponible = await automovil.aggregate([
        {
            $match: {Estado:{$eq:"Disponible"}}
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
            $unwind: '$Carro'
        },
        {
            $group: {
              _id: "$ID",
              Carro: {
                $push: "$Carro"
              }
            }
        },
        {
            $project: {
              "Carro._id":0
            }
        }
    ]).toArray();
    res.send(automovilDisponible);
}

const getMarcaModelo= async(req, res)=>{
    if (!req.rateLimit) return;
    let db = await con();
    let automovil = db.collection("Automovil");
    let result = await automovil.find().sort({ Marca: 1, Modelo: 1 }).toArray();
    res.send(result);
}

const getMayor5= async(req, res)=>{
    if (!req.rateLimit) return;
    let db = await con();
    let automovil = db.collection("Automovil");
    let result = await automovil.aggregate([
        {
            $match: { Capacidad: { $gte: 5 } }
        },
        {
            $project: {
                _id: 0
            }
        }
    ]).toArray();
    res.send(result);
}

export{getCar, getCars, getDisponibles, getMarcaModelo, getMayor5}