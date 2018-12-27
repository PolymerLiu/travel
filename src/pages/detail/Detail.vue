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
export default {
  name: "Detail",
  components:{
    DetailBanner,
    DetailHeader,
    DetailList,
  },
  data() {
    return {
      list:[
        {
          title:'成人票',
          children:[
            {
              title:'成人三馆联票',
              children:[
                {title:'成人三馆联票1号馆',}
                ]
            },
            {title:'成人五馆联票'},
            {title:'成人六馆联票'},
            ]
        },
        {title:'儿童票'},
        {title:'学生票'},
        {title:'特惠票'},
      ]
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
