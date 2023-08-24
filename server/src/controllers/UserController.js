// const {Log, User,sequelize} = require('../models')
const {Log} = require('../models')
module.exports = {
    // get all log 
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
    // get all user 
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
    // create log
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
    // create user 
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
    //edit user 
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
    //delete log 
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
            await log.destroy()
            res.send(log)
        } catch (err) {
            res.status(500).send({
                error: 'The log info was incorrect 500'
            })
        }
    },
    // del user 
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
            await user.destroy()
            res.send(user)
        } catch (err) {
            res.status(500).send({
                error: 'The user info was incorrect 500'
            })
        }
    },
    //get user by id 
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