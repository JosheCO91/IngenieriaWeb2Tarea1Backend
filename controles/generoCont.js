const { request, response } = require('express')
const Genero = require('../modelos/genero')

const nuevoGenero = async (req = request, res = response) => {
    try{    
        const { nombre, descripcion} = req.body

        let data = {
        nombre : nombre, 
        descripcion : descripcion
        }

        const gener = new Genero(data)

        await gener.save()

        return res.status(201).json(gener)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({
                msj: 'Error'
            })
        }

}

const consulGenero = async (req = request, res = response) => {
    try{    

        const generoEncon = await Genero.find()

        return res.json(generoEncon)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({
                msj: 'Error: no se encuentra'
            })
        }
}

const actualizarGenero = async (req = request, res = response) => {
    try{    
        const { nombre, descripcion } = req.body
        const id = req.params.id
        let data = {
        nombre : nombre, 
        descripcion : descripcion
        }
        data.fechaActualizacion = new Date()
        const generActua = await Genero.findByIdAndUpdate(id, data, {new : true})

        return res.status(201).json(generActua)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({
                msj: 'Error'
            })
        }
}

const consulGenePorID = async (req = request, res = response) => {
    try{    
        const id = req.params.id

        const generoEnconPorID = await Genero.findById(id)

        return res.json(generoEnconPorID)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({
                msj: 'Error: no se encuentra el ID'
            })
        }
}

module.exports = {
    nuevoGenero,
    consulGenero,
    consulGenePorID,
    actualizarGenero
}