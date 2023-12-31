require('dotenv').config()
const express = require("express")
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const db = require('./db/db')

db.authenticate().then(() => {
    console.log("Connected to DB")
}).catch(err => {
    console.log("Connection to DB failed", err)
})

app.use('/', require('./routes/login'))
app.use('/', require('./routes/install'))
app.use('/', require('./routes/dropTable'))

app.use('/', require('./routes/API/menu'))
app.use('/', require('./routes/API/funcoes/ingredientes'))
app.use('/', require('./routes/API/funcoes/receitas'))
app.use('/', require('./routes/API/admin/admins'))
app.use('/', require('./routes/API/admin/users'))


app.get('/', function (req, res) {
    res.send("README \n\n Projeto com foco em cadastro e manejamento de dados perante ao conceito de receitas e ingredientes culinários, com a capacidade de criar um menu com tempo de preparo e ingredientes");
  });

port = process.env.PORT


app.listen(port, function() {
    console.log('Server is running at port ' + port)
})

const swaggerInterface = require('swagger-ui-express')
const swaggerArquivo = require('./swagger-doc.json')

app.use('/docs', swaggerInterface.serve, swaggerInterface.setup(swaggerArquivo))


module.exports = {app, router}