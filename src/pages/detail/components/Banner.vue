<template>
  <div>
    <div class="banner">
      <img
        src="//img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_600x330_b5e86902.jpg"
        alt
        class="banner-img"
      >
      <div class="banner-info">
        <div class="banner-title">长隆野生动物世界(AAAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont">&#xe601;</span>
          39
        </div>
      </div>
      
      <common-gallary></common-gallary>
    </div>
  </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary";
export default {
  name: "DetailBanner",
  components: {
      CommonGallary
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;

    .banner-title {
      flex: 1;
      font-size: 0.36rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      padding: 0 0.4rem;
      line-height: 0.4rem;
      height: 0.4rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;
    }
  }
}
</style>
