<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: ["swiperList"],
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      }
    };
  },
  computed: {
    showSwiper() {
      return this.swiperList.length > 0;
    }
  }
};
</script>

<style lang="stylus" scoped>
// 三个箭头可以使样式突破scop的限制
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  // 图片预占
  width: 100%;
  height: 0;
  overflow: hidden;
  // 根据图片原尺寸的宽高比来设置的，并不是随意设置为31.25%
  padding-bottom: 31.25%;

  .swiper-img {
    width: 100%;
  }
}
</style>
