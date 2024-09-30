const { Schema, model } = require('mongoose')

const ProductoraS = Schema({
    nombre: {type: String},
    estado: {type: Boolean},
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {type: Date},
    slogan: {type: String},
    descripcion: {type: String}

})

module.exports = model('Productora', ProductoraS)