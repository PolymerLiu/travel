<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name: "Detail",
  components:{
    DetailBanner,
    DetailHeader,
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.content{
  height 50rem
}

</style>
