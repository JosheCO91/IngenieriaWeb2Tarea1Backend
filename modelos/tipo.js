const { Schema, model } = require('mongoose')

const TipoS = Schema({
    nombre: {type: String},
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {type: Date},
    descripcion: {type: String}
})

module.exports = model('Tipo', TipoS)