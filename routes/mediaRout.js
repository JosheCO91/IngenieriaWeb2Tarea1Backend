const { Router } = require('express')

const { nuevoMedia,
        consulMedia,
        consulMediaPorID,
        actualizarMedia } = require('../controles/mediaCont')

const roterM = Router()

roterM.post('/', nuevoMedia)

roterM.get('/', consulMedia)

roterM.get('/:id', consulMediaPorID)

roterM.put('/:id', actualizarMedia)


module.exports = roterM