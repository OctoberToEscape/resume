<template>
  <div class="nav">
    <ul
      :style="{width:IWidth + '%',height : IHeight + 'px',background : IBackground} "
      :class="shows?'fixed':null"
    >
      <li
        v-for="(text,index) in navText"
        :key="index"
        :style="{fontSize:ISize+ 'px'}"
        @click="setColor(index)"
        :class="{active:index == num}"
        v-text="text.text"
        :data-id="text.text"
      ></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'navs',
  props: {
    navText: {
      type: Array,
    },
    IWidth: {
      default: function () {
        return 50
      }
    },
    IHeight: {
      default: function () {
        return 80
      }
    },
    IBackground: {
      type: String,
      default: function () {
        return '#fff'
      }
    },
    ISize: {
      type: Number,
      default: function () {
        return 12
      }
    }
  },
  data() {
    return {
      num: 0,
      shows: false
    }
  },
  methods: {
    fixed() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTo;
      if (scrollTop > document.querySelector('.swiper').offsetHeight && scrollTop <= 1359) {
        let about = document.getElementById('aboutme')
        about.style.marginTop = 100 + 'px'
      } else {
        let about = document.getElementById('aboutme')
        about.style.marginTop = 0 + 'px'
      }
      if (scrollTop >= 723) {
        this.shows = true
      } else {
        this.shows = false
      }
    },
    setColor(index) {
      this.num = index
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTo;
      if (index == 0) {
        let about = document.getElementById('aboutme')
        about.style.marginTop = 0 + 'px'
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      } else if (index == 1) {
        console.log(this)
        let about = document.getElementById('aboutme')
        about.style.marginTop = 100 + 'px'
        window.scrollTo({
          top: 723,
          behavior: "smooth"
        })
      } else if (index == 2) {
        let about = document.getElementById('aboutme')
        about.style.marginTop = 0 + 'px'
        window.scrollTo({
          top: 1360,
          behavior: "smooth"
        })
      } else if (index == 3) {
        let about = document.getElementById('aboutme')
        about.style.marginTop = 0 + 'px'
        window.scrollTo({
          top: 1850,
          behavior: "smooth"
        })
      } else if (index == 4) {
        let about = document.getElementById('aboutme')
        about.style.marginTop = 0 + 'px'
        window.scrollTo({
          top: 2520,
          behavior: "smooth"
        })
      } else if (index == 5) {
        let about = document.getElementById('aboutme')
        about.style.marginTop = 0 + 'px'
        window.scrollTo({
          top: 4930,
          behavior: "smooth"
        })
      }
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.fixed, true);
  },
  destroyed() {
    window.removeEventListener('scroll', this.fixed);
  }
}
</script>
<style scoped lang="scss" scoped>
.nav {
  .fixed {
    position: fixed;
    top: 0;
    width: 100%;
  }
  ul {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 0px 25%;
    box-sizing: border-box;
    box-shadow: 3px 3px 3px #888888;
    li {
      line-height: 100px;
      padding: 0px 15px;
      color: #777;
      font-weight: bold;
      &:hover {
        color: #ef7674;
        cursor: pointer;
      }
    }
    .active {
      color: #ef7674;
    }
  }
}
</style>
