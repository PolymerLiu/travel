
<template>
  <div class="icons">
    <!-- <swiper :options="swiperOption" ref="mySwiper"> -->
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index" v-if="showIcons">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["iconList"],
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination"
        // loop: true
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
    showIcons() {
      return this.iconList.length > 0;
    }
  }
};
</script>

<style lang="stylus" scoped>

@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.icons >>> .swiper-container {
  height: 0;
  overflow: hidden;
  padding-bottom: 50%;
}

.icon {
  position: relative;
  float: left;
  width: 25%;
  height: 0;
  overflow: hidden;
  padding-bottom: 25%;

  .icon-img {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0.44rem;
    box-sizing: border-box;
    padding: 0.1rem;

    .icon-img-content {
      height: 100%;
      display: block;
      margin: 0 auto;
    }
  }

  .icon-desc {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 0.44rem;
    line-height: 0.44rem;
    color: $darkTextColor;
    text-align: center;
    ellipsis();
  }
}
</style>
