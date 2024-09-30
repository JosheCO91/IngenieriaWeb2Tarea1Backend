const mongoose = require('mongoose')

const conexion = async () => {
    try{   
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'peliseries'
        })
        console.log('Conectado correctamente')
    
    }catch(e){
        console.log('Error ', e)
        throw new Error ('Error de conexion')
    }
}

module.exports = { conexion }