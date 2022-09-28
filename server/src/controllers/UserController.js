const {Log, sequelize} = require('../models')
module.exports = {
    // pass
    //get all log
    async index (req, res) {
        try{
            const logs = await Log.findAll()
            res.send(logs)
        } catch (err){
            res.status(500).send({
                error: 'The Log info was incorrect'
            })
        }
    },
    // pass
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
    //pass
    //edit log , suspend , active
    async put (req, res){
        try{
            await Log.update(req.body,{
                where: {
                    id: req.params.logId
                }
            })
        } catch (err) {
            res.status(500).send({
                error: 'Update log'
            })
        }
    },
    //error
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
                    error: 'The log info was incorrect'
                })
            }

            await json_remove(log)
            res.send(log)
        } catch (err) {
            res.status(500).send({
                error: 'The log info was incorrect'
            })
        }
    },
    //get log by id
    async show (req,res){
        try{
           const log = await Log.findByPk(req.params.logId)
            res.send(log)
        } catch (err) {
            req.status(500).send({
                error: 'The user info was incorrect'
            })
        }
    },
}