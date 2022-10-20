const UserController = require('./controllers/UserController')
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
    //pass creatreUser
    app.post('/user',
        UserController.createUser
    )
    //pass update user
    app.put('/user/:userId',
        UserController.put
    )
    //pass delete user by Id
    app.delete('/user/:userId',
        UserController.removeUser
    )
    //pass get user by ID
    app.get('/user/:userId',
        UserController.show
    )
    //pass get all user
    app.get('/users',
        UserController.indexUser
    )
}
