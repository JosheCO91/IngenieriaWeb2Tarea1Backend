const { Router } = require('express')
const { verificrTok, determinarRol } = require('../middleware/autorizacion')

const { nuevaProductora,
        consulProductora,
        consulProductorasPorID,
        actualizarProductora } = require('../controles/productoraCont')

const roterP = Router()

roterP.post('/', verificrTok, determinarRol(['Administrador']), nuevaProductora)

roterP.get('/', verificrTok, determinarRol(['Docente', 'Administrador']), consulProductora)

roterP.put('/:id', verificrTok, determinarRol(['Administrador']), actualizarProductora)

roterP.get('/:id', verificrTok, determinarRol(['Administrador']), consulProductorasPorID)


module.exports = roterP