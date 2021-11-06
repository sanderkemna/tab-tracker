import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

//AuthenicationService.register({
//  email: 'testing@gmial.com',
//  password: '12344'
//})
