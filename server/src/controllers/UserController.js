const {Log, User,sequelize} = require('../models')

module.exports = {
    // get all log //pass
    async index (req, res) {
        try{
            const logs = await Log.findAll()
            res.send(logs)
        } catch (err){
            res.status(500).send({
                error: 'log info was incorrect'
            })
        }
    },
    // get all user //pass
    async indexUser (req, res) {
        try{
            const users = await User.findAll()
            res.send(users)
        } catch (err){
            res.status(500).send({
                error: 'user info was incorrect'
            })
        }
    },
    // create log // pass
    async create (req,res){
        try{
            const log = await Log.create(req.body)
            res.send(log.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Log incorrect'
            })
        }
    },
    // create user // pass
    async createUser (req,res){
        try{
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create User incorrect'
            })
        }
    },
    //edit user // didn't pass
    async put (req, res){
        try{
            await User.update(req.body,{
                where: {
                    id: req.params.userId
                }
            })
        } catch (err) {
            res.status(500).send({
                error: 'Update User fail'
            })
        }
    },
    //delete log // didn't pass
    async remove (req,res) {
        try{
            const log = await Log.findOne({
                where: {
                    id: req.params.logId
                }
            })

            if(!log){
                return res.status(403).send({
                    error: 'The log info was incorrect 403 '
                })
            }

            await json_remove(log)
            res.send(log)
        } catch (err) {
            res.status(500).send({
                error: 'The log info was incorrect 500'
            })
        }
    },
    // del user //didn't pass
    async removeUser (req,res) {
        try{
            const user = await User.findOne({
                where: {
                    id: req.params.userId
                }
            })

            if(!user){
                return res.status(403).send({
                    error: 'The user info was incorrect 403'
                })
            }

            await json_remove(user)
            res.send(user)
        } catch (err) {
            res.status(500).send({
                error: 'The user info was incorrect 500'
            })
        }
    },
    //get user by id // pass
    async show (req,res){
        try{
           const user = await User.findByPk(req.params.userId)
            res.send(user)
        } catch (err) {
            req.status(500).send({
                error: 'The user info was incorrect 500'
            })
        }
    },
}