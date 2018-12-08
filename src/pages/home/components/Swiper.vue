<template>
  <div class="wrapper">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="item of swiperList" :key="item.id">
            <img  class="swiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/b7/1e9c4ca462741f02.jpg_750x200_842d5261.jpg'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/75/3e6cf7021a277b02.jpg_750x200_f749bbee.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
//三个箭头可以使样式突破scop的限制
.wrapper >>> .swiper-pagination-bullet-active{
    background #fff
}
.wrapper {
    //图片预占
    width 100%
    height 0
    overflow hidden
    //根据图片原尺寸的宽高比来设置的，并不是随意设置为31.25%
    padding-bottom 31.25%
  .swiper-img {
    width: 100%;
  }
}
</style>
