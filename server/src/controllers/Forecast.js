const ARIMA = require('arima')
const {Log, User,sequelize} = require('../models')
const config = require('../config/config')

module.exports = {
    async forecast(req, res){
        try{
            const logs = await Log.findAll()
            const pac = []
            for(let i=0;i<logs.length;i++){
                pac.push(logs[i].Pac_W)
            }
            const sarima = new ARIMA({
                p: 2,
                d: 2,
                q: 1,
                P: 0,
                D: 0,
                Q: 0,
                s: 13,
                verbose: false
              }).train(pac.slice(-943))
              const [pred, errors] = sarima.predict(12)
              for(let i=0;i<12;i++){
                pred[i] = Math.abs(pred[i])
                pred[i] = Math.ceil(pred[i])
              }
            res.send(pred)
        }catch(err){
            res.status(500).send({
                error: 'error na ja'
            })
        }
    }
}
