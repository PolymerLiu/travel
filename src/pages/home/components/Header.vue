<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe601;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe6a8;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <!-- {{this.$store.state.city}} -->
        <!-- {{this.city}} -->
        {{this.doubleCity}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState ,mapGetters} from 'vuex'
export default {
  name: "HomeHeader",
  computed:{
    // ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  },
  data() {
    return {};
  },
  props: ["city"]
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  display: flex;
  line-height: $headerHeight;
  background: $bgColor;
  color: #fff;
  height: 0.86rem;
  width: 100%;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }

  .header-right {
    min-width: 1.24rem;
    padding 0 .1rem
    float: right;
    text-align: center;
    color: #fff;

    .arrow-icon {
      font-size: 0.24rem;
      margin-left: 0 0.04rem;
    }
  }
}
</style>
