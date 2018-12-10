<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" 
            v-for="item of hotCities" 
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(alpha,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="item of alpha" :key="item.id" @click="handleCityClick(item.name)" >
          <div class="item border-bottom">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "",
  props: ["hotCities", "cities", "letter"],
  data() {
    return {};
  },
  methods:{
    handleCityClick(city){
      //vuex dispatch一个事件，然后再commit一个mutations去改变store的数据
      // this.$store.dispatch('changeCity',city)
      //或者我们可以绕过dispatch，直接commit一个mutations去改变store的数据
      this.$store.commit('changeCity',city)
      this.$router.push('/')
    }
  },
  mounted() {
    console.log("==========", this.hotCities);
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
  watch: {
    letter() {
      const element = this.$refs[this.letter][0];
      // console.log('==========',element);
      this.scroll.scrollToElement(element);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  position: absolute;
  overflow: hidden;
  top: 1.58rem;
  left: 0;
  bottom: 0;
  right: 0;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.24rem;
  }

  .button-list {
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    overflow: hidden;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.54rem;
      color: #666;
      padding-left: 0.2rem;
    }
  }
}
</style>
