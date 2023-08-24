const UserController = require('./controllers/UserController')
const Forecast = require('./controllers/Forecast')
module.exports = (app) => {
    //pass creat Log
    app.post('/log',
        UserController.create
    )
    //pass delete log
    app.delete('/log/:logId',
        UserController.remove
    )
    //pass get all log
    app.get('/logs',
        UserController.index
    )

    app.get('/forecast',
    Forecast.forecast)
    
}
