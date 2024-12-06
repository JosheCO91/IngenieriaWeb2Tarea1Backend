const { request, response } = require('express')
const Media = require('../modelos/media')
const Genero = require('../modelos/genero')
const Director = require('../modelos/director')
const Productora = require('../modelos/productora')
const Tipo = require('../modelos/tipo')

const nuevoMedia = async (req = request, res = response) => {
    try{    
        const { titulo, 
                sinopsis, 
                imagen,
                fechaEstreno, 
                genero, 
                director, 
                productora, 
                tipo} = req.body

        let data = { 
            titulo : titulo,
            sinopsis : sinopsis,
            imagen: imagen,
            fechaEstreno : fechaEstreno,
            genero: genero,
            director: director,
            productora: productora,
            tipo: tipo
        }

        const verificar = [
            Genero.findById(genero),
            Director.findById(director),
            Productora.findById(productora),
            Tipo.findById(tipo)
        ];

        const [generoExist, directorExist, productoraExist, tipoExist] = await Promise.all(verificar);

        if (!generoExist || !directorExist || !productoraExist || !tipoExist) {
            return res.status(404).json({
                msj: 'algunos atributos no existen'
            });
        }
        const med = new Media(data)

        await med.save()

        return res.status(201).json(med)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({
                msj: 'Error'
            })
        }

}

const consulMedia = async (req = request, res = response) => {
    try{    
        const mediaEncon = await Media.find(Media._id)
        .populate('genero', 'nombre') 
        .populate('director', 'nombre') 
        .populate('productora', 'nombre') 
        .populate('tipo', 'nombre');
        return res.json(mediaEncon)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({
                msj: 'Error: no se encuentra'
            })
        }
}

const actualizarMedia = async (req = request, res = response) => {
    try{    
        const { titulo, 
                sinopsis, 
                fechaEstreno, 
                genero, 
                director, 
                productora, 
                tipo} = req.body
        const id = req.params.id
        const verificar = [
            Genero.findById(genero),
            Director.findById(director),
            Productora.findById(productora),
            Tipo.findById(tipo)
        ];

        const [generoExist, directorExist, productoraExist, tipoExist] = await Promise.all(verificar);

        if (!generoExist || !directorExist || !productoraExist || !tipoExist) {
            return res.status(404).json({
                msj: 'algunos atributos no existen'
            });
        }

        let data = { 
            titulo : titulo,
            sinopsis : sinopsis,
            fechaEstreno : fechaEstreno,
            genero: genero,
            director: director,
            productora: productora,
            tipo: tipo
        }
        data.fechaActualizacion = new Date()
        const mediaActua = await Media.findByIdAndUpdate(id, data, {new : true})

        return res.status(201).json(mediaActua)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({
                msj: 'Error'
            })
        }
}

const consulMediaPorID = async (req = request, res = response) => {
    try{    
        const id = req.params.id

        const mediaEnconPorID = await Media.findById(id)
            .populate('genero', 'nombre') 
            .populate('director', 'nombre') 
            .populate('productora', 'nombre') 
            .populate('tipo', 'nombre'); 
        return res.json(mediaEnconPorID)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({
                msj: 'Error: no se encuentra el ID'
            })
        }
}

module.exports = {
    nuevoMedia,
    consulMedia,
    consulMediaPorID,
    actualizarMedia
}