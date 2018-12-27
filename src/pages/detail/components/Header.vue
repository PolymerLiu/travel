<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont back-icon">&#xe601;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      景点选择
      <div class="iconfont header-fixed-back">&#xe601;</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailHeader",
    data() {
      return {
        showAbs: true,
        opacityStyle: {
          opacity: 0
        },

      };
    },
    methods: {
      handleScroll() {
        let top = document.documentElement.scrollTop
        if (top > 60) {
          let opacity = top /140
          opacity = opacity > 1 ? 1 : opacity
          this.opacityStyle = {opacity},
          this.showAbs = false
        } else {
          this.showAbs = true
        }
      }
    },
    activated() {
      window.addEventListener('scroll', this.handleScroll)
    }
  };
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header-abs {
    position absolute
    left 0.2rem
    top 0.2rem
    width 0.8rem
    height 0.8rem
    line-height .8rem
    text-align center
    border-radius .4rem
    background rgba(0, 0, 0, .8)
    font-size .4rem
  }

  .header-fixed {
    width 100%
    position: fixed;
    left 0
    top 0
    overflow: hidden;
    height: $headerHeight;
    line-height: $headerHeight;
    text-align: center;
    color: #fff;
    font-size: 0.32rem;
    background: $bgColor;

    .header-fixed-back {
      width: 0.64rem;
      text-align: center;
      font-size: 0.4rem;
      position: absolute;
      top: 0;
      left: 0;
      color: #fff;
    }
  }
</style>
