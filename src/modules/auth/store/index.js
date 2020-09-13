import state from './state'
import mutations from './mutations'
import * as actions from './actions'

export default {
    state,
    actions,
    mutations,
    namespaced: true
    //namespaced true garante que o modulo auth tenha um prefixo chamado auth
}