const { Router } = require('express')
const { verificrTok, determinarRol } = require('../middleware/autorizacion')

const { nuevoMedia,
        consulMedia,
        consulMediaPorID,
        actualizarMedia } = require('../controles/mediaCont')

const roterM = Router()

roterM.post('/', verificrTok, determinarRol(['Administrador']), nuevoMedia)

roterM.get('/', verificrTok, determinarRol(['Docente', 'Administrador']), consulMedia)

roterM.put('/:id', verificrTok, determinarRol(['Administrador']), actualizarMedia)

roterM.get('/:id', verificrTok, determinarRol(['Administrador']), consulMediaPorID)


module.exports = roterM