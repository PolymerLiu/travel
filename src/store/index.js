import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//组件内dispatch一个action,action内再commit一个mutation
export default new Vuex.Store({
  state:{
    city:'广州'
  },
  // actions:{
       //一个mutation
  //   changeCity(ctx,city){
  //     ctx.commit('changeCity',city)
  //   }
  // },
  mutations:{
    //一个mutation
    changeCity(state,city){
      state.city = city

    }
  }
})