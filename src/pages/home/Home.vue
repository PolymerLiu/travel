<template>
  <div class>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  computed: {
    ...mapState(["city"])
  },
  data() {
    return {
      lastCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },

  methods: {
    getData() {
      axios.get(`/api/index.json?city=${this.city}`).then(res => {
        let data = res.data;
        if (data.resultCode === 0) {
          this.swiperList = data.swiperList;
          this.iconList = data.iconList;
          this.recommendList = data.recommendList;
          this.weekendList = data.weekendList;
        }
      });
    }
  },
  mounted() {
    this.lastCity = this.city;
    //页面初次挂载的时候执行
    this.getData();
  },
  activated() {
    //页面被重新显示的时候执行
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getData();
    }
  }
};
</script>

<style scoped>
</style>
