<template>
  <div class="header">
      <div class="header-left">
          <div class="iconfont back-icon">&#xe601;</div>
      </div>
      <div class="header-input">
          <span class="iconfont">&#xe6a8;</span>
          输入城市/景点/游玩主题</div>
      <div class="header-right">
          城市
          <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>

  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header{
    display flex
    line-height .86rem
    background $bgColor
    color #fff
    height 0.86rem
    width 100%
    .header-left{
        width 0.64rem
        float left
        .back-icon{
            text-align center
            font-size .4rem
        }
    }
    .header-input{
        flex 1
        height .64rem
        line-height .64rem
        margin-top .12rem
        margin-left .2rem
        padding-left .2rem
        background #fff
        border-radius .1rem
        color #ccc
    }
    .header-right{
        width 1.24rem
        float right
        text-align center
        .arrow-icon{
            font-size .24rem
            margin-left .0.04rem
        }
    }
}

</style>
