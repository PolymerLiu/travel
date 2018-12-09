<template>
  <div class="wrapper">
    <div
      class="item"
      v-for="key of letters"
      :key="key"
      @click="clickLetter"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :ref="key"
    >{{key}}</div>
  </div>
</template>

<script>
export default {
  name: "Alphabet",
  props: ["cities"],
  data() {
    return {
      status: false,
      startY: 0,
      timer: 0
    };
  },
  updated() {
    //变量存储提高效率
    //数据变化时才执行
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    clickLetter(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.status = true;
    },
    handleTouchMove(e) {
      //通过定时器进行函数节流
      if (this.status) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.status = false;
    }
  },
  computed: {
    letters() {
      let letters = [];
      for (const i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    line-height: 0.4rem;
    color: $bgColor;
    text-align: center;
  }
}
</style>
