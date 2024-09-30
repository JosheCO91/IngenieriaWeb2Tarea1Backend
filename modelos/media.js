const { Schema, model } = require('mongoose')

const MediaS = Schema({
    titulo: {type: String},
    sinopsis: {type: String},
    url: {type: String,
        unique: true,
    },
    imagen: {type: String},
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {type: Date},
    fechaEstreno: {type: Date},
    genero: {
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        require: true
    },
    director: {
        type: Schema.Types.ObjectId,
        ref: 'Director',
        require: true
    },
    productora: {
        type: Schema.Types.ObjectId,
        ref: 'Productora',
        require: true
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        require: true
    }
})

module.exports = model('Media', MediaS)