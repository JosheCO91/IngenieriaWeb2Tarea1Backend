const { Schema, model } = require('mongoose')

const DirectorS = Schema({
    nombre: {type: String},
    estado: {type: Boolean},
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {type: Date}
}) 

module.exports = model('Director', DirectorS)