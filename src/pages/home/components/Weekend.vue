<template>
  <div class>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
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
  data() {
    return {
      recommendList: [
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1811/d4/d4a663613604238ea3.img.jpg_200x200_b412a8a2.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首张，浪漫的海洋主题乐园",
          skip: "查看详情"
        },
        {
          id: "002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1811/d4/d4a663613604238ea3.img.jpg_200x200_b412a8a2.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首张，浪漫的海洋主题乐园",
          skip: "查看详情"
        },
        {
          id: "003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1811/d4/d4a663613604238ea3.img.jpg_200x200_b412a8a2.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首张，浪漫的海洋主题乐园",
          skip: "查看详情"
        },
        {
          id: "004",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1811/d4/d4a663613604238ea3.img.jpg_200x200_b412a8a2.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首张，浪漫的海洋主题乐园",
          skip: "查看详情"
        },
        {
          id: "005",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1811/d4/d4a663613604238ea3.img.jpg_200x200_b412a8a2.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首张，浪漫的海洋主题乐园",
          skip: "查看详情"
        },
        {
          id: "006",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1811/d4/d4a663613604238ea3.img.jpg_200x200_b412a8a2.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连首张，浪漫的海洋主题乐园",
          skip: "查看详情"
        }
      ]
    };
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
    padding-bottom: 33.9%;

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
