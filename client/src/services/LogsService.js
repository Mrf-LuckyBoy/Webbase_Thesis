import Api from '@/services/Api'

export default{
    index (search) {
        return Api().get('logs')
    },
    show (logId){
        return Api().get('log/'+logId)
    },
    post (log){
        return Api().post('log',log)
    },
    put (log){
        return Api().put('log/'+log.id,log)
    },
    delete (log) {
        return Api().delete('log/'+log.id,log)
    },
    getarr (log) {
        return Api().get('log/'+log.key,log)
    }
}