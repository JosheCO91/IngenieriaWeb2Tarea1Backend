const app = require('./app')

app.set('port', process.env.PORT)

app.get('*', (req, res) => {
    return res.status(404).json({msj: "Not Found"})
})

app.listen(app.get('port'), () => {
    console.log(`Arranque en el puerto: ${app.get('port')}`)
})