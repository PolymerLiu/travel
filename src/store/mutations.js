export default{
  //一个mutation
  changeCity(state,city){
    state.city = city
    try {
      if (localStorage) {
        localStorage.city = city
      }
    } catch (error) {
      console.log('==========',error);
    }
  }
}