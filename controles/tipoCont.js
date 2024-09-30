const { request, response } = require('express')
const Tipo = require('../modelos/tipo')

const nuevoTipo = async (req = request, res = response) => {
    try{    
        const { nombre, descripcion } = req.body

        let data = {
        nombre : nombre, 
        descripcion : descripcion
        }
        const tipp = new Tipo(data)
        await tipp.save()
        return res.status(201).json(tipp)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({msj: 'Error'})
        }

}

const consulTipo = async (req = request, res = response) => {
    try{    

        const tipoEncon = await Tipo.find()

        return res.json(tipoEncon)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({
                msj: 'Error: no se encuentra'
            })
        }
}

const actualizarTipo = async (req = request, res = response) => {
    try{    
        const { nombre, descripcion } = req.body
        const id = req.params.id
        let data = {
        nombre : nombre, 
        descripcion : descripcion
        }
        data.fechaActualizacion = new Date()
        const tipoActua = await Tipo.findByIdAndUpdate(id, data, {new : true})
        return res.status(201).json(tipoActua)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({msj: 'Error'})
        }
}

const consulTipoPorID = async (req = request, res = response) => {
    try{    
        const id = req.params.id

        const tipoEnconPorID = await Tipo.findById(id)

        return res.json(tipoEnconPorID)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({msj: 'Error: no se encuentra el ID'})
        }
}

module.exports = {
    nuevoTipo,
    consulTipo,
    consulTipoPorID,
    actualizarTipo
}