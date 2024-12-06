const { Router } = require('express')
const { verificrTok, determinarRol } = require('../middleware/autorizacion')



const { nuevoUsuario, 
        consulUsuario,
        consulGenePorID,
        actualizarUsuario,
        login } = require('../controles/usuarioCont')

const roter = Router()

roter.post('/', nuevoUsuario)

roter.get('/', consulUsuario)

roter.get('/:id', consulGenePorID)

roter.put('/:id',  actualizarUsuario)

roter.post('/login', login)

//verificrTok, determinarRol(['Administrador'])

module.exports = roter