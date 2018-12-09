<template>
  <div class="header">城市选择
    <router-link to="/">
      <div class="iconfont city-back">&#xe601;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CityHeader",
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  position: relative;
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  font-size: 0.32rem;
  background: $bgColor;

  .city-back {
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
