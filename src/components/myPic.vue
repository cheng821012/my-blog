<script setup>
import { onMounted } from "vue";

onMounted(() => {
    const pic = document.querySelector(".pic");
    const pic2 = document.querySelector(".pic2");
    // const title = document.querySelector(".title");
    // title.style.opacity = 0;
    pic.style.opacity = 0;
    pic.style.transform = "translateX(100%)";
    pic.style.transition = "transform 1500ms";

    setTimeout(() => {
        pic.style.transform = "translateX(0)";
        pic.style.opacity = 0.5;
    }, 500);
    // var opacity = 0;

    //先延遲一秒 讓照片先從右邊滑過 再慢慢讓文字淡入
    // setTimeout(() => {
    //     var intervalContent = setInterval(() => {
    //         opacity += 0.01;
    //         title.style.opacity = opacity;
    //         if (opacity >= 1) {
    //             clearInterval(intervalContent);
    //         }
    //     }, 20);
    // }, 2000);
});

const hh = new Date().getHours();
const mm = new Date().getMinutes();
</script>

<template>
    <div>
        <img class="pic" src="../assets/picture/me.jpg" />
        <span> </span>
        <!-- <span><img class="pic2" src="../assets/picture/me2.jpg" /></span> -->
        <!-- <span class="title">Welcome to my website</span> -->
    </div>
    <!-- <nav>
        <RouterLink to="/aboutMe"> 關於我 </RouterLink>
        <RouterLink to="/myExperience"> 工作經驗 </RouterLink>
        <RouterLink to="/myHobbit"> 我的興趣 </RouterLink>
        <RouterView />
    </nav> -->
</template>

<style scoped>
.pic {
    margin-top: 5px;
    margin-left: 10%;
    width: 40%;
}
.pic2 {
    margin-top: 5px;
    width: 49%;
}

.title {
    margin-left: 150px;
    margin-top: 100px;
    font-size: xx-large;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>
