<template>
    <div class="swiper">
        <div
            class="contain"
            :style="{ width: imgWidth + '%', height: imgHeight + 'vh' }"
        >
            <!-- 图片盒子 -->
            <ul class="ul">
                <li
                    class="items"
                    v-for="(img, index) in imgs"
                    :key="index"
                    :class="index == showIndex ? 'items_active' : 'items'"
                >
                    <img :src="img.src" alt="轮播图" />
                </li>
            </ul>
        </div>
        <div class="swiperText">
            <h2>我叫何琪</h2>
            <p>
                前端开发工程师一枚,三年开发经验的前端，乐于尝试新技术，学习能力强。
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "swiper",
    created() {
        this.timer = setInterval(() => {
            this.next();
        }, this.delay);
    },
    beforeDestroy() {
        clearInterval(this.timer);
    },
    props: {
        imgs: {
            type: Array,
            required: true,
        },
        delay: {
            type: Number,
            default: () => {
                return 2000;
            },
        },
        imgWidth: {
            type: String | Number,
            default: () => {
                return 100;
            },
        },
        imgHeight: {
            type: String | Number,
            default: () => {
                return 100;
            },
        },
    },
    data() {
        return {
            showIndex: 0, //显示第几个图片
            timer: null, // 定时器
            show: false, // 前后按钮显示
        };
    },
    methods: {
        next() {
            if (this.showIndex >= this.imgs.length - 1) this.showIndex = 0;
            else this.showIndex++;
        },
    },
};
</script>

<style scoped lang="scss" scoped>
.swiper {
    position: relative;
    .contain {
        position: relative;
        top: 50%;
        left: 50%;
        transition: all 0.8s;
        transform: translateX(-50%);
        color: #fff;
        overflow: hidden;
        cursor: pointer;
        .ul {
            height: 100%;
            list-style: none;
            .items {
                position: absolute;
                top: 0px;
                width: 100%;
                height: 100%;
                opacity: 0;
                transition: opacity 2s;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .items_active {
                position: absolute;
                top: 0px;
                width: 100%;
                height: 100%;
                opacity: 1;
                transition: opacity 2s;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .dots {
            position: absolute;
            left: 50%;
            bottom: 30px;
            height: 10px;
            transform: translateX(-50%);
            li {
                float: left;
                width: 10px;
                height: 10px;
                margin: 0px 5px;
                border-radius: 50%;
                transition: all 0.3s;
                background-color: antiquewhite;
                list-style: none;
            }
            .active {
                background-color: blue;
            }
        }
        .control {
            .left {
                position: absolute;
                top: 50%;
                left: 10px;
                padding: 5px;
                transform: translateY(-50%);
                font-size: 20px;
                cursor: pointer;
                &:hover {
                    background-color: rgba($color: #000000, $alpha: 0.3);
                }
            }
            .right {
                position: absolute;
                top: 50%;
                right: 10px;
                padding: 5px;
                transform: translateY(-50%);
                font-size: 20px;
                cursor: pointer;
                &:hover {
                    background-color: rgba($color: #000000, $alpha: 0.3);
                }
            }
        }
    }
    .swiperText {
        position: absolute;
        top: 45%;
        left: 0%;
        width: 100%;
        transform: translateY(-50%);
        margin: auto;
        h2 {
            color: #fff;
            font-size: 48px;
            text-align: center;
        }
        p {
            color: #fff;
            font-size: 18px;
            text-align: center;
        }
    }
}
</style>
