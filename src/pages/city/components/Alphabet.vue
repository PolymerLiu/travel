<template>
  <div class="wrapper">
    <div class="item" v-for="(item,key) of cities" :key="key">{{key}}</div>
  </div>
</template>

<script>
export default {
  name: "Alphabet",
  props: ["cities"],
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.wrapper {
  display flex
  flex-direction column
  justify-content center
  align-items center
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width 0.4rem
  .item{
    line-height 0.4rem
    color $bgColor
    text-align center
    }
}
</style>
