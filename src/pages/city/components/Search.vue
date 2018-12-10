<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" placeholder="请输入城市名或拼音">
    </div>
    <div class="search-content" ref="search"  v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="showNoMatch">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "CitySearch",
  props: ["cities"],
  computed:{
    showNoMatch(){
      return !this.list.length
    }
  },
  methods:{
    handleCityClick(city){
      this.$store.commit('changeCity',city)
      this.$router.push('/')
    }
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (const i in this.cities) {
          this.cities[i].forEach(element => {
            if (
              element.spell.indexOf(this.keyword) > -1 ||
              element.name.indexOf(this.keyword) > -1
            ) {
              result.push(element);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;

  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    padding: 0 0.1rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
    border: none;
  }
}

.search-content {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: #eee;
}

.search-item {
  line-height: 0.62rem;
  padding-left: 0.2rem;
  color: #666;
  background: #fff;
}
</style>
