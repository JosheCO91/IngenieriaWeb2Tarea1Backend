const { request, response } = require('express')
const Productora = require('../modelos/productora')

const nuevaProductora = async (req = request, res = response) => {
    try{    
        const { nombre, descripcion, slogan} = req.body
        let data = {
        nombre : nombre,
        slogan: slogan, 
        descripcion : descripcion
        }

        const prod = new Productora(data)
        await prod.save()
        return res.status(201).json(prod)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({msj: 'Error'})
        }

}

const consulProductora = async (req = request, res = response) => {
    try{    
        const prodEncon = await Productora.find()
        return res.json(prodEncon)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({
                msj: 'Error: no se encuentra'
            })
        }
}

const actualizarProductora = async (req = request, res = response) => {
    try{    
        const { nombre, descripcion } = req.body
        const id = req.params.id
        let data = {
        nombre : nombre,
        slogan: slogan, 
        descripcion : descripcion
        }
        data.fechaActualizacion = new Date()
        const prodActua = await Productora.findByIdAndUpdate(id, data, {new : true})
        return res.status(201).json(prodActua)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({msj: 'Error'})
        }
}

const consulProductorasPorID = async (req = request, res = response) => {
    try{    
        const id = req.params.id

        const prodEnconPorID = await Productora.findById(id)

        return res.json(prodEnconPorID)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({msj: 'Error: no se encuentra el ID'})
        }
}

module.exports = {
    nuevaProductora,
    consulProductora,
    consulProductorasPorID,
    actualizarProductora
}