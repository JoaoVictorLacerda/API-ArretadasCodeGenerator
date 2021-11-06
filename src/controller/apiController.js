const { v4: uuid } = require('uuid')
const Codigo = require('../models/ModelCodigo')

exports.get =async(request, response) =>{
    try{
        const codigos = await Codigo.find();
        return response.status(200).json({codigos})

    }catch(err){
        return response.status(500).json({error: err.message})
    }
}

exports.post = async (request, response) => {
    const { codigo, key } = request.body;

    if (!codigo || key !== process.env.KEY) {
        return response.status(400).json({ error: "Missing code and key" })
    }
    const novoCodigo = new Codigo({
        _id: uuid(),
        codigo,
    })

    try {
        await novoCodigo.save();
        return response.status(201).json({ message: "Code added succesfully!" });
    } catch (err) {
        response.status(400).json({ error: err.message })
    }
}

exports.delete = async (request, response) => {

    const { codigo, key } = request.query


    if (!codigo || key !== process.env.KEY) {
        return response.status(400).json({ error: "Missing code and key" })
    }
    try {
        const result = await Codigo.deleteOne({ codigo })

        result.deletedCount == 0 ? response.status(404).json({ 'message': 'The code doesnt exist', 'type': 'error' }) : response.status(200).json({ 'message': 'Code removed succesfully!', 'type': 'sucess' })

    } catch (error) {
        return response.status(400).json({ error: error.mensage })
    }
}