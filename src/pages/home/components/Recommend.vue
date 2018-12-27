<template>
  <div class>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item" 
        v-for="item of recommendList" 
        :key="item.id" 
        :to="'/detail/' + item.id" 
        v-if="showRecommend"
      >
        <img :src="item.imgUrl" alt class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">{{item.skip}}</button>
        </div>
      </router-link>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: ["recommendList"],
  data() {
    return {};
  },
  computed: {
    showRecommend() {
      return this.recommendList.length > 0;
    }
  }
};
</script>

<style lang="stylus" scoped>
.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
    }

    .item-button {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      background: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>
