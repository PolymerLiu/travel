<template>
  <div class="">
      <div class="title">热销推荐</div>
      <ul>
          <li class="item" v-for="item of recommendList" :key="item.id">
              <img :src="item.imgUrl" alt="" class="item-img">
              <div class="item-info">
                  <p class="item-title">{{item.title}} </p>
                  <p class="item-desc">{{item.desc}}</p>
                  <button class="item-button">{{item.skip}}</button>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/d4/d4a663613604238ea3.img.jpg_200x200_b412a8a2.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首张，浪漫的海洋主题乐园',
        skip: '查看详情'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/d4/d4a663613604238ea3.img.jpg_200x200_b412a8a2.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首张，浪漫的海洋主题乐园',
        skip: '查看详情'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/d4/d4a663613604238ea3.img.jpg_200x200_b412a8a2.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首张，浪漫的海洋主题乐园',
        skip: '查看详情'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/d4/d4a663613604238ea3.img.jpg_200x200_b412a8a2.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首张，浪漫的海洋主题乐园',
        skip: '查看详情'
      }, {
        id: '005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/d4/d4a663613604238ea3.img.jpg_200x200_b412a8a2.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首张，浪漫的海洋主题乐园',
        skip: '查看详情'
      }, {
				id: '006',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/d4/d4a663613604238ea3.img.jpg_200x200_b412a8a2.jpg',
				title: '大连圣亚海洋世界',
				desc: '浪漫大连首张，浪漫的海洋主题乐园',
				skip: '查看详情'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.title{
    margin-top 0.2rem
    line-height 0.8rem
    background #eee
    text-indent .2rem
}
.item{
    overflow hidden
    display flex
    height 1.9rem
    .item-img{
        width 1.7rem
        height 1.7rem
        padding .1rem
    }
    .item-info{
            flex 1
            padding .1rem
            .item-title{
                line-height .54rem
                font-size .32rem
            }
            .item-desc{
                line-height .4rem
                color #ccc
            }
            .item-button{
                line-height .44rem
                margin-top 0.16rem
                background #ff9300
                padding 0 .2rem
                border-radius .06rem
                color #fff
            }
        }
}
</style>
