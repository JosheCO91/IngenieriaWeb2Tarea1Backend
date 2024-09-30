const { Router } = require('express')

const { nuevaProductora,
        consulProductora,
        consulProductorasPorID,
        actualizarProductora } = require('../controles/productoraCont')

const roterP = Router()

roterP.post('/', nuevaProductora)

roterP.get('/', consulProductora)

roterP.get('/:id', consulProductorasPorID)

roterP.put('/:id', actualizarProductora)


module.exports = roterP