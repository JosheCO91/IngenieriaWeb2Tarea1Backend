const { Router } = require('express')
const { verificrTok, determinarRol } = require('../middleware/autorizacion')

const { nuevoTipo,
        consulTipoPorID,
        consulTipo,
        actualizarTipo } = require('../controles/tipoCont')

const roterT = Router()

roterT.post('/', verificrTok, determinarRol(['Administrador']), nuevoTipo)

roterT.get('/', verificrTok, determinarRol(['Docente', 'Administrador']), consulTipo)

roterT.put('/:id', verificrTok, determinarRol(['Administrador']), actualizarTipo)

roterT.get('/:id', verificrTok, determinarRol(['Administrador']), consulTipoPorID)


module.exports = roterT