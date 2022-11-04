import Api from '@/services/Api'

export default{
    forecast(search){
        return Api().get('forecast')
    }
}