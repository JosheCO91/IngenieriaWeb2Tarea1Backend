const { Schema, model } = require('mongoose')

const GeneroS = Schema({
    nombre: {type: String},
    estado: {type: Boolean},
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {type: Date},
    descripcion: {type: String}

})

module.exports = model('Genero', GeneroS)