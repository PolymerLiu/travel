
<template>
  <div class="icons">
    <!-- <swiper :options="swiperOption" ref="mySwiper"> -->
    <swiper ref="mySwiper" >
        <swiper-slide v-for= "(page,index) of pages" :key="index">
          <div class="icon"  v-for="item of page" :key="item.id">
            <div class="icon-img">
              <img  class="icon-img-content" :src="item.imgUrl">
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      iconList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '广州必游'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc: '动植物园'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
        desc: '游乐场'
      }, {
        id: '005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
        desc: '珠江夜游'
      }, {
        id: '006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
        desc: '泡温泉'
      }, {
        id: '007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      }, {
        id: '008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/5e/c640ec3b7d7ae802.png',
        desc: '打卡圣地'
      }, {
        id: '009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
        desc: '玩转长隆'
      }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
    height 0
    overflow hidden
    padding-bottom 50%
.icon{
    position relative
    float left
    width 25%
    height 0
    overflow hidden
    padding-bottom 25%
    .icon-img{
      position absolute
      left 0
      right 0
      top 0
      bottom .44rem
      box-sizing border-box
      padding 0.1rem
      .icon-img-content{
        height 100%
        display block
        margin 0 auto
      }
    }
    .icon-desc{
      position absolute
      left 0
      bottom 0
      right 0
      height 0.44rem
      line-height .44rem
      color $darkTextColor
      text-align center
      ellipsis()
    }
}
</style>
