<template>
  <div class="">
    <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'home',
  components: {
    HomeHeader
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

</style>
