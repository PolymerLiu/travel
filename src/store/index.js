import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)


//组件内dispatch一个action,action内再commit一个mutation
export default new Vuex.Store({
  state,
  // actions:{
       //一个actions
  //   changeCity(ctx,city){
  //     ctx.commit('changeCity',city)
  //   }
  // },
  mutations,
  //getters的作用类似于组件中的computed
  getters:{
    doubleCity(state){
      return state.city + '-' + state.city
    }
  }
})