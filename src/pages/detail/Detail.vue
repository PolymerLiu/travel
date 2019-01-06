<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: "Detail",
  components:{
    DetailBanner,
    DetailHeader,
    DetailList,
  },

  methods:{
    getDetailInfo(){
      axios.get('/api/detail.json',{
        params:{
          id:this.$route.params.id
        }
      }).then((res) => {
        this.list = res.data.data.categoryList
        console.log(this.list)
      })
    }
  },
  //通过keep-alive做缓存，mounted只会执行一次
  //可以通过对keep-alive设置exclude属性不设置缓存
  mounted(){
    this.getDetailInfo()
  },
  data() {
    return {
      list:[]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.content{
  height 50rem
}

</style>
