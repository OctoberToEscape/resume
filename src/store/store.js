import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// 关于我图片引入
import svg1 from "../assets/i_age.svg";
import svg2 from "../assets/i_edu.svg";
import svg3 from "../assets/i_site.svg";
import svg4 from "../assets/i_status.svg";

export default new Vuex.Store({
    state: {
        imgs: [
            { src: require("../assets/header-bg1.jpg") },
            { src: require("../assets/header-bg2.jpg") },
            { src: require("../assets/header-bg3.jpg") },
            { src: require("../assets/header-bg4.jpg") }
        ],
        navText: [
            { text: "首页", id: "#home" },
            { text: "关于我", id: "aboutme" },
            { text: "技能", id: "skill" },
            { text: "经历", id: "experience" },
            { text: "项目", id: "project" },
            { text: "联系我", id: "touch" }
        ],
        aboutMeList: [
            {
                src: svg1,
                title: "24岁"
            },
            {
                src: svg2,
                title: "大专"
            },
            {
                src: svg3,
                title: "北京"
            },
            {
                src: svg4,
                title: "寻找机遇"
            }
        ]
    },
    mutations: {},
    actions: {}
});
