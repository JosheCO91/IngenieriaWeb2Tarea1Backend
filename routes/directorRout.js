const { Router } = require('express')
const { verificrTok, determinarRol } = require('../middleware/autorizacion')

const { nuevoDirector,
        consulDirector,
        actualiDirector,
        consulDirectorPorID } = require('../controles/directorCont')

const roterD = Router()

roterD.post('/', verificrTok, determinarRol(['Administrador']), nuevoDirector)

roterD.get('/', verificrTok, determinarRol(['Docente', 'Administrador']), consulDirector)

roterD.put('/:id', verificrTok, determinarRol(['Administrador']), actualiDirector)

roterD.get('/:id', verificrTok, determinarRol(['Administrador']), consulDirectorPorID)

module.exports = roterD