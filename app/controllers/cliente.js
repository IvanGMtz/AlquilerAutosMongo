import {con} from "../../config/connection.js";

const getClients = async (req, res)=>{
    if (!req.rateLimit) return;
    let db = await con();
    let automovil = db.collection("Cliente");
    let result = await automovil.find({}).toArray();
    res.send(result);
}

const getClient= async(req, res)=>{
    if (!req.rateLimit) return;
    let DNI = req.params.DNI
    let db = await con();
    let automovil = db.collection("Cliente");
    let result = await automovil.find({"DNI":DNI},{}).toArray();
    res.send(result);
}

const getClientReservation= async(req, res)=>{
    if (!req.rateLimit) return;
    let db = await con();
    let automovil = db.collection("Contrato");
    let result = await automovil.aggregate([
        {
            $lookup: {
                from: 'Cliente',
                localField: 'ID_Cliente',
                foreignField: 'ID',
                as: 'cliente_alquiler'
            }
        },
        {
            $match: { Tipo: { $eq: 'Alquiler' } }
        },
        {
            $unwind: '$cliente_alquiler'
        },
        {
            $project: {
                Fecha_Fin: 0,
                Fecha_Inicio: 0,
                ID_Automovil : 0,
                Estado : 0,
                Costo_Total : 0,
                _id: 0, 
                'cliente_alquiler._id': 0 
            }
        }
    ]).toArray();
    res.send(result);
}

export { getClient, getClients, getClientReservation}