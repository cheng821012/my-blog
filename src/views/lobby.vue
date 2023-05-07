<script setup>
import { RouterView, useRouter, useRoute, RouterLink } from "vue-router";
import { ref, onMounted, computed } from "vue";
import { useChangePic, useAboutMe } from "@/store/index.js";
import headerColumn from "@/components/headerColumn.vue";
import myPic from "@/components/myPic.vue";
import router from "@/router";
import Inst from "@/components/inst.vue";
import black from "@/components/black.vue";
import picA from "@/assets/picture/3.jpg";
import picE from "@/assets/picture/4.jpg";
import picH from "@/assets/picture/5.jpg";
import picD from "@/assets/picture/me.jpg";

const showImg = ref(false);
const { push } = useRouter();
const { path } = useRoute();

const welcome = ref(null);
const readMore = ref(null);
// FIXME
onMounted(() => {
    setTimeout(() => {
        welcome.value.style.opacity = 1;
        readMore.value.style.opacity = 1;
    }, 1000);
});

// 判斷有沒有點過, 沒點過就用router跳轉path
function readMoreHandler() {
    if (showImg.value) return;
    showImg.value = true;
}

// 畫面初始化的時候 push到/
onMounted(() => {
    push("/lobby");
});

const changePic = useChangePic();
const aboutMe = useAboutMe();

const clickHandle = (idx) => {
    changePic.changePicFn(idx);
    aboutMe.changeTextFn(idx);
};
</script>

<template>
    <header>
        <headerColumn />
    </header>

    <main>
        <div class="content">
            <Inst />
            <div class="phoneAndText">
                <nav class="text">
                    <div class="welcome" ref="welcome"><h1>Welcome my website</h1></div>
                    <div @click="readMoreHandler" ref="readMore" class="readMore">Read more</div>
                    <!-- <img class="readMoreBackSide" src="./assets/picture/me2.jpg" /> -->
                    <div v-if="showImg" class="link-wrap">
                        <RouterLink @click="clickHandle(0)" to="/aboutMe"> About me</RouterLink>
                        <RouterLink @click="clickHandle(1)" to="/myExperience"> Experience </RouterLink>
                        <RouterLink @click="clickHandle(2)" to="/myHobbit"> Hobbit </RouterLink>
                        <RouterView />
                    </div>
                </nav>
            </div>
        </div>
    </main>
    <div class="black"><black /></div>
</template>

<style scoped>
@media (min-width: 1024px) {
    nav {
        /* margin-left: 420px; */
        margin-top: 50px;
    }
    a {
        font-family: "Gill Sans", "Gill Sans MT", "Trebuchet MS", sans-serif;
        margin-right: 70px;
        text-decoration: none; /*去除a元素底線 */
        white-space: nowrap;
    }
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
        border-bottom: 2px solid white;
        box-shadow: 2px 2px 5px rgba(92, 90, 90, 0.2);
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
    nav {
        width: 50%;
        font-size: 20px;
        text-align: center;
        margin-top: 9rem;
    }
    body {
        background-color: white;
    }
    nav > a {
        text-decoration: none; /*去除a元素底線 */
        font-style: oblique;
        font-family: "Gill Sans", "Gill Sans MT", "Trebuchet MS", sans-serif;
        color: darkslategrey;
        margin: 10px;
    }
    .text {
        /* position: absolute;
        top: 315px;
        left: 300px; */
    }

    .readMore {
        cursor: pointer;
        white-space: nowrap;
        border-style: solid;
        border-color: black;
        width: 120px;
        opacity: 0;
        transition: opacity 1s;
        margin-left: 55%;
        margin-top: 30%;
    }
    .readMoreBackSide {
        opacity: 0.1;
        width: 50%;
        height: 1210px;
        margin-left: 600px;
        margin-top: -1220px;
        position: relative;
        z-index: -9999;
    }
    .welcome {
        /* margin-top: -150px;
        margin-left: 445px;
        position: absolute; */
        white-space: nowrap;
        font-family: "-webkit-body";
        opacity: 0;
        transition: opacity 1s;
    }

    /*  new */
    .content {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 1280px;
        margin: 0 auto;
    }
    .phoneAndText {
        width: 40%;
    }
    .link-wrap {
        margin-top: 10%;
    }
}
</style>
