const { Router } = require('express')
const { verificrTok, determinarRol } = require('../middleware/autorizacion')

const { nuevoGenero, 
        consulGenero,
        consulGenePorID,
        actualizarGenero } = require('../controles/generoCont')

const roter = Router()

roter.post('/', verificrTok, determinarRol(['Administrador']), nuevoGenero)

roter.get('/', verificrTok, determinarRol(['Docente', 'Administrador']), consulGenero)

roter.put('/:id', verificrTok, determinarRol(['Administrador']), actualizarGenero)

roter.get('/:id', verificrTok, determinarRol(['Administrador']), consulGenePorID)


module.exports = roter