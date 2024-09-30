const dotenv = require('dotenv')
const express = require('express')
const app = express()
dotenv.config()
const { conexion } = require('./databases/conf')
conexion()

const cors = require('cors')

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cors({
    origin : '*'
}))

const generos = require('./routes/generoRout')
const directores = require('./routes/directorRout')
const productoras = require('./routes/productoraRout')
const tipos = require('./routes/tipoRout')
const medias = require('./routes/mediaRout')

app.use('/api/v1/generos', generos)
app.use('/api/v1/directores', directores)
app.use('/api/v1/productoras', productoras)
app.use('/api/v1/tipos', tipos)
app.use('/api/v1/medias', medias)

module.exports = app 