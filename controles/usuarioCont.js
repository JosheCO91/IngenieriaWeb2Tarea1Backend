const { request, response } = require('express')
const Usuario = require('../modelos/usuario')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const nuevoUsuario = async (req = request, res = response) => {
    try{    
        const { nombre, email, estado, password, rol} = req.body

        let data = {
        nombre : nombre, 
        email : email,
        estado : estado,
        password : password,
        rol: rol

        }

        const usua = new Usuario(data)

        await usua.save()

        return res.status(201).json(usua)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({
                msj: 'Error'
            })
        }

}

const login = async (req = request, res = response) => {
    try {
      const { email, password } = req.body;
  
      const usuario = await Usuario.findOne({ email });
      if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado.' });
      }
  
      const passwordValido = await bcrypt.compare(password, usuario.password);
      if (!passwordValido) {
        return res.status(401).json({ message: 'Contraseña incorrecta.' });
      }
  
      const token = jwt.sign(
        { id: usuario._id, rol: usuario.rol },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
  
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al autenticar.' });
    }
  }

const consulUsuario = async (req = request, res = response) => {
    try{    

        const usuarioEncon = await Usuario.find()

        return res.json(usuarioEncon)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({
                msj: 'Error: no se encuentra'
            })
        }
}

const actualizarUsuario = async (req = request, res = response) => {
    try{    
        const { nombre, email, estado, password, rol } = req.body
        const id = req.params.id
        let data = {
            nombre : nombre, 
            email : email,
            estado : estado,
            password : password,
            rol: rol
        }
        data.fechaActualizacion = new Date()
        const usuaActua = await Usuario.findByIdAndUpdate(id, data, {new : true})

        return res.status(201).json(usuaActua)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({
                msj: 'Error'
            })
        }
}

const consulGenePorID = async (req = request, res = response) => {
    try{    
        const id = req.params.id

        const usuarioEnconPorID = await Usuario.findById(id)

        return res.json(usuarioEnconPorID)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({
                msj: 'Error: no se encuentra el ID'
            })
        }
}

module.exports = {
    nuevoUsuario,
    consulUsuario,
    consulGenePorID,
    actualizarUsuario,
    login
}