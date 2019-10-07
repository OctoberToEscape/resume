<template>
  <div class="gotop">
    <div class="go" @click="goTop" v-show="isActive">返回</div>
  </div>
</template>
<style scoped lang="scss" scoped>
.go {
  width: 50px;
  height: 50px;
  background: rgba($color: #000000, $alpha: 0.8);
  color: #fff;
  text-align: center;
  line-height: 50px;
  position: fixed;
  right: 10px;
  bottom: 30px;
  cursor: pointer;
}
</style>
<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    goTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    handleScroll() {
      //获取滚动距顶部的距离，显示
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTo;
      if (scrollTop > 720) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>