const { Router } = require('express')

const { nuevoDirector,
        consulDirector,
        actualiDirector,
        consulDirectorPorID } = require('../controles/directorCont')

const roterD = Router()

roterD.post('/', nuevoDirector)

roterD.get('/', consulDirector)

roterD.put('/:id', actualiDirector)

roterD.get('/:id', consulDirectorPorID)

module.exports = roterD