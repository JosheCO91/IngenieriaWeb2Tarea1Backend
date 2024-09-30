const { Router } = require('express')

const { nuevoTipo,
        consulTipoPorID,
        consulTipo,
        actualizarTipo } = require('../controles/tipoCont')

const roterT = Router()

roterT.post('/', nuevoTipo)

roterT.get('/', consulTipo)

roterT.get('/:id', consulTipoPorID)

roterT.put('/:id', actualizarTipo)


module.exports = roterT