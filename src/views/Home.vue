<template>
    <div class="home">
        <!-- 轮播图 -->
        <section>
            <Swiper
                :imgs="imgs"
                :delay="2500"
                :imgWidth="100"
                :imgHeight="100"
                :dotWidth="0"
            />
        </section>

        <!-- 导航 -->
        <Nav
            :navText="navText"
            :IWidth="100"
            :IHeight="60"
            IBackground="#fff"
            :ISize="18"
            @scroll="scroll"
            @_click="onClick"
        />
        <!-- 关于我 -->
        <section id="aboutme" :style="{ paddingTop: show ? '60px' : '0' }">
            <div class="content">
                <h3>关于我</h3>
                <ul>
                    <li v-for="(item, index) in aboutMeList" :key="index">
                        <div class="imgbox">
                            <img :src="item.src" alt="关于我" />
                        </div>
                        <p v-text="item.title"></p>
                    </li>
                </ul>
                <div class="aboutMeText">
                    <p v-for="(item, index) in data.aboutme" :key="index">
                        {{ item }}
                    </p>
                </div>
            </div>
        </section>
        <!-- 技能 -->
        <section id="skill">
            <div class="content">
                <h3>技能</h3>
                <p>{{ data.skillText }}</p>
                <ul>
                    <li v-for="(item, index) in data.skill" :key="index">
                        {{ item }}
                    </li>
                </ul>
            </div>
        </section>
        <!-- 经历 -->
        <section id="experience">
            <div class="content">
                <h3>经历</h3>
                <p>{{ data.experienceText }}</p>
                <div class="conbox">
                    <div class="timebox">
                        <span class="bagin">{{
                            data.experience[0].beginTime
                        }}</span>
                        <span class="end">{{
                            data.experience[0].endTime
                        }}</span>
                    </div>
                    <div class="companybox">
                        <div class="pic"></div>
                        <div class="title">
                            <h4>{{ data.experience[0].company }}</h4>
                            <h5>{{ data.experience[0].job }}</h5>
                            <p>{{ data.experience[0].reap }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- 项目 -->
        <section id="project">
            <div class="content">
                <h3>项目</h3>
                <div
                    class="projectbox"
                    v-for="(item, index) in data.project"
                    :key="index"
                >
                    <div class="protime">
                        <span class="bagin">{{ item.beginTime }}</span>
                        <span class="end">{{ item.endTime }}</span>
                    </div>
                    <div class="expbox">
                        <div class="pic"></div>
                        <div class="title">
                            <h4>{{ item.proName }}</h4>
                            <h5>项目周期：{{ item.period }}</h5>
                            <p>{{ item.describe }}</p>
                            <p class="lis">
                                <span>
                                    <p
                                        v-for="(ele, index) in item.science"
                                        :key="index"
                                    >
                                        {{ ele }}
                                    </p>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- 联系我 -->
        <section id="touch">
            <div class="content">
                <h3>联系我</h3>
                <ul>
                    <li v-for="(item, index) in data.touch" :key="index">
                        {{ item }}
                    </li>
                </ul>
                <p v-for="(item, index) in data.inf" :key="index">
                    {{ item }}
                </p>
                <p class="github-link" @click="handleGithub">GiuHub地址</p>
            </div>
        </section>

        <!-- 返回顶部 -->
        <Gotop />
    </div>
</template>

<script>
// @ is an alias to /src
import Swiper from "../components/Swiper";
import Nav from "../components/Nav";
import Gotop from "../components/Gotop";

// 数据引入
import data from "../json/json";
import { mapState } from "vuex";
export default {
    name: "home",
    components: {
        Swiper,
        Nav,
        Gotop,
    },

    data() {
        return {
            data,
            show: false,
        };
    },
    computed: {
        ...mapState(["imgs"]),
        ...mapState(["navText"]),
        ...mapState(["aboutMeList"]),
    },
    methods: {
        scroll(val) {
            this.show = val;
        },
        onClick(val) {
            var course = document.querySelectorAll("section");
            course[val].scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
        },
        handleGithub() {
            window.location.href = "https://github.com/OctoberToEscape";
        },
    },
};
</script>
<style scoped lang="scss" scoped>
.home {
    min-width: 1337px;
    #aboutme {
        width: 100%;
        background: #f3f2f3;
        display: block;
        .content {
            padding-top: 90px;
            padding-bottom: 90px;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
            text-align: center;
            h3 {
                font-size: 36px;
                line-height: 38px;
                padding-bottom: 0px;
                font-weight: 400;
                text-transform: uppercase;
                margin: 0px;
                border-bottom: #ef7674 6px solid;
                padding-bottom: 9px;
                display: inline-block;
            }
            ul {
                max-width: 800px;
                margin: 0 auto;
                display: flex;
                justify-content: center;
                align-items: center;
                justify-content: space-around;
                li {
                    width: 25%;
                    height: 150px;
                    margin: 40px auto;
                    padding: 0px 15px;
                    .imgbox {
                        box-sizing: border-box;
                        height: 100px;
                        width: 100px;
                        margin: 0 auto;
                        background-color: #ef7674;
                        border-radius: 50%;
                        padding: 10px;
                        img {
                            display: block;
                            width: 100%;
                        }
                    }
                }
            }
            .aboutMeText {
                text-align: left;
                color: #897f8a;
                line-height: 27px;
                max-width: 1100px;
                margin: 0 auto;
            }
        }
    }
    #skill {
        width: 100%;
        background: #fff;
        display: block;
        .content {
            padding-top: 90px;
            padding-bottom: 90px;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
            text-align: center;
            h3 {
                font-size: 36px;
                line-height: 38px;
                padding-bottom: 0px;
                font-weight: 400;
                text-transform: uppercase;
                margin: 0px;
                border-bottom: #ef7674 6px solid;
                padding-bottom: 9px;
                display: inline-block;
            }
            p {
                max-width: 1100px;
                margin: 0 auto;
                font-size: 16px;
                line-height: 27px;
                font-weight: 400;
                color: #897f8a;
                padding-top: 26px;
                padding-bottom: 45px;
            }
            ul {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                justify-content: space-around;
                flex-wrap: wrap;
                li {
                    width: 33%;
                    height: 30px;
                    padding-bottom: 6px;
                    flex-shrink: 0;
                    font-size: 19px;
                    line-height: 24px;
                    color: #5b4c5c;
                    font-weight: bold;
                }
            }
        }
    }

    #experience {
        width: 100%;
        background: #f3f2f3;
        display: block;
        .content {
            padding-top: 90px;
            padding-bottom: 90px;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
            text-align: center;
            h3 {
                font-size: 36px;
                line-height: 38px;
                padding-bottom: 0px;
                font-weight: 400;
                text-transform: uppercase;
                margin: 0px;
                border-bottom: #ef7674 6px solid;
                padding-bottom: 9px;
                display: inline-block;
            }
            p {
                max-width: 1100px;
                margin: 0 auto;
                font-size: 16px;
                line-height: 27px;
                font-weight: 400;
                color: #897f8a;
                padding-top: 26px;
                padding-bottom: 45px;
            }
            .conbox {
                width: 100%;
                display: flex;
                .timebox {
                    width: 16.66666667%;
                    span {
                        display: block;
                        font-size: 18px;
                        padding: 0 21px;
                        white-space: nowrap;
                        float: right;
                        margin-bottom: 2px;
                        margin-right: 28px;
                        font-weight: bold;
                        color: #fff;
                        line-height: 40px;
                    }
                    .bagin {
                        background-color: #ef7674;
                    }
                    .end {
                        background-color: #483c49;
                    }
                }
                .companybox {
                    border-left: dashed 1px #897f8a;
                    padding: 0px 15px;
                    .pic {
                        margin-left: -26px;
                        margin-top: 32px;
                        float: left;
                        width: 22px;
                        height: 22px;
                        background: url("../assets/arrow-left.png") no-repeat 0
                            0 #f8f7f8;
                    }
                    .title {
                        padding: 0 47px 6px 70px;
                        h4 {
                            margin: 0;
                            text-align: left;
                            color: #5b4c5c;
                            padding-bottom: 1px;
                            font-size: 19px;
                        }
                        h5 {
                            margin: 0;
                            text-align: left;
                            font-size: 16px;
                            line-height: 24px;
                            padding-bottom: 6px;
                            font-weight: 400;
                            color: #5b4c5c;
                            padding-bottom: 11px;
                            margin-top: 10px;
                        }
                        p {
                            text-align: left;
                        }
                    }
                }
            }
        }
    }

    #project {
        width: 100%;
        background: #fff;
        display: block;
        .content {
            padding-top: 90px;
            padding-bottom: 90px;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
            text-align: center;
            h3 {
                font-size: 36px;
                line-height: 38px;
                padding-bottom: 0px;
                font-weight: 400;
                text-transform: uppercase;
                margin: 0px;
                border-bottom: #ef7674 6px solid;
                padding-bottom: 9px;
                display: inline-block;
            }
            .projectbox {
                width: 100%;
                display: flex;
                padding-top: 45px;
                .protime {
                    width: 16.66666667%;
                    span {
                        display: block;
                        font-size: 18px;
                        padding: 0 21px;
                        white-space: nowrap;
                        float: right;
                        margin-bottom: 2px;
                        margin-right: 28px;
                        font-weight: bold;
                        color: #fff;
                        line-height: 40px;
                    }
                    .bagin {
                        background-color: #ef7674;
                    }
                    .end {
                        background-color: #483c49;
                    }
                }
                .expbox {
                    border-left: dashed 1px #897f8a;
                    padding: 0px 15px;
                    .pic {
                        margin-left: -26px;
                        margin-top: 32px;
                        float: left;
                        width: 22px;
                        height: 22px;
                        background: url("../assets/arrow-left.png") no-repeat 0
                            0 #f8f7f8;
                    }
                    .title {
                        padding: 0 47px 6px 70px;
                        h4 {
                            margin: 0;
                            text-align: left;
                            color: #5b4c5c;
                            padding-bottom: 1px;
                            font-size: 19px;
                        }
                        h5 {
                            margin: 0;
                            text-align: left;
                            font-size: 16px;
                            line-height: 24px;
                            padding-bottom: 6px;
                            font-weight: 400;
                            color: #5b4c5c;
                            padding-bottom: 11px;
                            margin-top: 10px;
                        }
                        p {
                            text-align: left;
                        }
                        .lis {
                            color: rgb(58, 54, 54);
                        }
                    }
                }
            }
        }
    }

    #touch {
        width: 100%;
        background: #f3f2f3;
        display: block;
        .content {
            padding-top: 90px;
            padding-bottom: 90px;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
            text-align: center;
            h3 {
                font-size: 36px;
                line-height: 38px;
                padding-bottom: 0px;
                font-weight: 400;
                text-transform: uppercase;
                margin: 0px;
                border-bottom: #ef7674 6px solid;
                padding-bottom: 9px;
                display: inline-block;
            }
            ul {
                padding-top: 45px;
                li {
                    font-size: 16px;
                    padding-bottom: 10px;
                    color: #5b4c5c;
                    transition: color 0.15s ease-in;
                    width: 20%;
                    margin: auto;
                    &:hover {
                        color: orangered;
                        cursor: pointer;
                    }
                }
            }
            p {
                color: rgb(241, 71, 28);
                font-size: 20px;
                font-weight: bold;
            }
            .github-link {
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
}
</style>
