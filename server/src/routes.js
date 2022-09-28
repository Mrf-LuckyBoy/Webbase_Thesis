const UserController = require('./controllers/UserController')
module.exports = (app) => {
    app.post('/log',
        UserController.create
    )
    app.put('/log/:logId',
        UserController.put
    )
    app.delete('/log/:logId',
        UserController.remove
    )
    app.get('/log/:logId',
        UserController.show
    )
    app.get('/logs',
        UserController.index
    )
}
