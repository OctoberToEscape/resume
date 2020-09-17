<template>
    <div class="nav" ref="nav">
        <ul
            :style="{
                width: IWidth + '%',
                height: IHeight + 'px',
                background: IBackground,
            }"
            :class="shows ? 'fixed' : null"
        >
            <li
                v-for="(text, index) in navText"
                :key="index"
                :style="{ fontSize: ISize + 'px' }"
                @click="setColor(index)"
                :class="{ active: index == num }"
                v-text="text.text"
                :data-id="text.text"
            ></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "navs",
    props: {
        navText: {
            type: Array,
            default: () => {
                return [];
            },
        },
        IWidth: {
            type: String | Number,
            default: () => {
                return 50;
            },
        },
        IHeight: {
            type: String | Number,
            default: () => {
                return 50;
            },
        },
        IBackground: {
            type: String,
            default: () => {
                return "#fff";
            },
        },
        ISize: {
            type: Number,
            default: () => {
                return 12;
            },
        },
    },
    data() {
        return {
            num: 0,
            shows: false,
        };
    },
    mounted: function () {
        window.addEventListener("scroll", this.handleScroll, true);
    },
    methods: {
        handleScroll() {
            var top = this.$refs.nav.getBoundingClientRect().top;
            this.shows = top <= 0 ? true : false;
            this.$emit("scroll", this.shows);
        },
        setColor(index) {
            this.num = index;
            this.$emit("_click", this.num);
        },
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
};
</script>
<style lang="scss" scoped>
.nav {
    .fixed {
        position: fixed;
        top: 0;
        width: 100%;
    }
    ul {
        min-width: 1337px;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        padding: 0 15%;
        box-sizing: border-box;
        box-shadow: 3px 3px 3px #888888;
        li {
            line-height: 60px;
            padding: 0px 15px;
            box-sizing: border-box;
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
