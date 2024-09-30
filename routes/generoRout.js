const { Router } = require('express')

const { nuevoGenero, 
        consulGenero,
        consulGenePorID,
        actualizarGenero } = require('../controles/generoCont')

const roter = Router()

roter.post('/', nuevoGenero)

roter.get('/', consulGenero)

roter.get('/:id', consulGenePorID)

roter.put('/:id', actualizarGenero)


module.exports = roter