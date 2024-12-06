const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');


const UsuarioS = Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  estado: { type: String, required: true, enum: ['Activo', 'Inactivo'] },
  password: { type: String, required: true },
  rol: { type: String, required: true, enum: ['Administrador', 'Docente'] },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date },
});


UsuarioS.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});


module.exports = model('Usuario', UsuarioS)
