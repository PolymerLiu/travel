<template>
  <div class>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of weekendList" :key="item.id" v-if="showWeekend">
        <div class="img-wrapper">
          <img :src="item.imgUrl" alt class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props:[
    'weekendList'
  ],
  data() {
    return {};
  },
  computed:{
      showWeekend(){
          return this.weekendList.length>0
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
  .img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;

    .item-img {
      width: 100%;
    }
  }

  .item-info {
    padding: 0.1rem;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
    }
  }
}
</style>
