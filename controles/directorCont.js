const { request, response } = require('express')
const Director = require('../modelos/director')

const nuevoDirector = async (req = request, res = response) => {
    try{    
        const { nombre } = req.body
        let data = {
        nombre : nombre
        }
        const direct = new Director(data)
        await direct.save()
        return res.status(201).json(direct)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({
                msj: 'Error'
            })
        }
}

const consulDirector = async (req = request, res = response) => {
    try{    
        const directorEncon = await Director.find()

        return res.json(directorEncon)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({
                msj: 'Error: no se encuentra'
            })
        }
}

const actualiDirector = async (req = request, res = response) => {
    try{    
        const { nombre } = req.body
        const id = req.params.id
        let data = {
        nombre : nombre
        }
        data.fechaActualizacion = new Date()
        const directActua = await Director.findByIdAndUpdate(id, data, {new : true})
        return res.status(201).json(directActua)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({
                msj: 'Error'
            })
        }
}

const consulDirectorPorID = async (req = request, res = response) => {
    try{    
        const id = req.params.id
        const directEnconPorID = await Director.findById(id)
        return res.json(directEnconPorID)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({
                msj: 'Error: no se encuentra el ID'
            })
        }
}

module.exports = {
    nuevoDirector,
    consulDirector,
    actualiDirector,
    consulDirectorPorID
}
