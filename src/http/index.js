import Vue from 'vue'
import VueResource from 'vue-resource'
import services from './services'

Vue.use(VueResource)

const http = Vue.http

http.options.root = 'https://guarded-headland-11685.herokuapp.com'

// pega as chaves, que no caso é a autenticacao auth, mas em breve pode ter mais

Object.keys(services).map(service => {
    services[service] = Vue.resource('', {}, services[service])
    // isso faz com que ele pegue as configurações do modules/auth/services.js e vai jogar na configuração do
    // Vue resource, vai criar uma requisição literalmente http pra ele, colocando todas as configs necessárias
})

export { http }
export default services
