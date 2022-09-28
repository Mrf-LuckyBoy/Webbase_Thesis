let express = require('express')
let bodyParse = require('body-parser')
let cors = require('cors')
const {sequelize} = require('./models')

const config = require('./config/config')

const app = express()

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended: true}))
app.use(cors())

require('./routes')(app)

let port = process.env.PORT || config.port

sequelize.sync({force: false}).then(()=> {
    app.listen(port, function () {
        console.log('Server running on ' + port)
    })
})
