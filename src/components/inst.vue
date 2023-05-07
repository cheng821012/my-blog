<script setup>
// import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useChangePic, useAboutMe } from "@/store/index.js";
import { storeToRefs } from "pinia";
import { ref, computed, onMounted } from "vue";
import { RouterView, useRouter, useRoute } from "vue-router";

import "swiper/css";

import picA from "../assets/picture/3.jpg";
import picE from "../assets/picture/4.jpg";
import picH from "../assets/picture/5.jpg";
import picD from "../assets/picture/me.jpg";

const hh = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours();
const mm = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes();
const likes = "你和其他人都說讚";
const acc = "Dean_Chen";
const changePic = useChangePic();
const aboutMe = useAboutMe();

// const img1 = ref(null);
// const img2 = ref(null);
// const img3 = ref(null);
// const img4 = ref(null);
// const img5 = ref(null);
// const img6 = ref(null);
// const img7 = ref(null);

// const moveLeft = (el) => {
//     if (!el) return;
//     const marginLeft = parseInt(window.getComputedStyle(el).marginLeft);
//     el.style.marginLeft = `${marginLeft - 1}px`;
// };
// onMounted(() => {
//     setInterval(() => {
//         moveLeft(img1.value);
//         moveLeft(img2.value);
//         moveLeft(img3.value);
//         moveLeft(img4.value);
//         moveLeft(img5.value);
//         moveLeft(img6.value);
//         moveLeft(img7.value);
//     }, 100);
// });

const heartType = ref(false);
function toggleHeart() {
    heartType.value = !heartType.value;
    // if(heartType.value === true){
    //     heartType.value = false
    // }
    // if(heartType.value === false){
    //     heartType.value = true
    // }
}

const sendEmail = () => {
    window.location.href = "mailto:cheng821012@gmail.com";
};

const clickHandle = (idx) => {
    changePic.changePicFn(idx);
};
</script>
<template>
    <div class="phone-wrap">
        <div class="iphoneHair"></div>
        <div class="outSideLineTop">
            <div class="time">
                {{ hh + ":" + mm }}
            </div>
            <div class="firstRightIcon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-bar-chart-fill"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"
                    />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-wifi"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"
                    />
                    <path
                        d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"
                    />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-battery-full"
                    viewBox="0 0 16 16"
                >
                    <path d="M2 6h10v4H2V6z" />
                    <path
                        d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z"
                    />
                </svg>
            </div>
            <div class="myIns">MyInstgram</div>
            <div class="secLine">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi sec bi-heart"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                    />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi sec bi-messenger"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"
                    />
                </svg>
            </div>
            <div class="carouselIcon">
                <swiper
                    :slidesPerView="6"
                    :spaceBetween="10"
                    :pagination="{
                        clickable: true,
                    }"
                    class="mySwiper"
                    ref="mySwiper"
                >
                    <swiper-slide>
                        <img ref="img1" class="img1" src="../assets/picture/3.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                        <img ref="img2" class="img1" src="../assets/picture/4.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                        <img ref="img3" class="img1" src="../assets/picture/5.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                        <img ref="img4" class="img1" src="../assets/picture/6.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                        <img ref="img5" class="img1" src="../assets/picture/7.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                        <img ref="img6" class="img1" src="../assets/picture/8.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                        <img ref="img7" class="img1" src="../assets/picture/9.jpg" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="accLine">
            <img class="accPic" src="../assets/picture/me.jpg" />
            <div class="acc2">{{ acc }}</div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-three-dots"
                viewBox="0 0 16 16"
            >
                <path
                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                />
            </svg>
        </div>
        <div>
            <img class="midPic" :src="changePic.imageMap ?? picD" />
        </div>
        <div class="outSideLineMiddle">
            <!-- 空心 -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi row4 bi-heart emptyHeart"
                viewBox="0 0 16 16"
                @click="toggleHeart"
                v-if="!heartType"
            >
                <path
                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                />
            </svg>
            <!-- 實心 -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-heart-fill row4 fullHeart"
                viewBox="0 0 16 16"
                @click="toggleHeart"
                v-else
            >
                <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi row4 bi-chat"
                viewBox="0 0 16 16"
            >
                <path
                    d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi row4 bi-send"
                viewBox="0 0 16 16"
                @click="sendEmail"
            >
                <path
                    d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"
                />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="currentColor"
                class="bi row4 bi-bookmark"
                viewBox="0 0 16 16"
            >
                <path
                    d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
                />
            </svg>
            <div class="likes">{{ likes }}</div>
            <div class="acc">{{ acc }}</div>
            <div class="aboutMeText1">
                <p style="white-space: pre-line">{{ aboutMe.textMap }}</p>
            </div>
        </div>

        <div class="outSideLineUnder">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-house-door-fill"
                viewBox="0 0 16 16"
            >
                <path
                    d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"
                />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
            >
                <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-file-plus"
                viewBox="0 0 16 16"
            >
                <path
                    d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z"
                />
                <path
                    d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"
                />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-handbag"
                viewBox="0 0 16 16"
            >
                <path
                    d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"
                />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
            >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
            </svg>
        </div>
        <div class="iphoneLine"></div>
    </div>
</template>

<style scoped>
.outSideLineTop {
    margin-top: 50px;
    margin-left: 50px;
    width: 100%;
    height: 170px;
    border-style: solid;
    border-color: rgb(223, 223, 223);
    border-radius: 40px 40px 0 0;
}
.accLine {
    width: 100%;
    height: 50px;
    border-color: rgba(223, 223, 223, 0) rgb(223, 223, 223) rgba(223, 223, 223, 0) rgb(223, 223, 223);
    margin-left: 50px;
    margin-top: -2px;
    border-radius: 0 0 0 0;
    border-style: solid;
}
.outSideLineMiddle {
    width: 100%;
    height: 300px;
    margin-left: 50px;
    border-style: solid;
    border-color: rgb(223, 223, 223) rgb(223, 223, 223) rgba(216, 21, 21, 0) rgb(223, 223, 223);
    border-radius: 0 0 0 0;
}
.outSideLineUnder {
    position: relative;
    width: 100%;
    height: 60px;
    margin-left: 50px;
    border-style: solid;
    border-color: rgba(223, 223, 223, 0) rgb(223, 223, 223) rgb(223, 223, 223) rgb(223, 223, 223);
    border-radius: 0 0 40px 40px;
    margin-top: -3px;
}
.outSideLineUnder > .bi {
    position: absolute; /* 子元素設置為絕對定位 */
    left: 27px; /* 將子元素左邊緣定位在父元素的左邊緣 */
    top: 0; /* 將子元素頂部定位在父元素的頂部 */
    margin: 60px;
    margin-top: 10px;
    margin-left: 17px;
    position: relative;
}

.time {
    font-weight: 800;
    margin-left: 20px;
    margin-top: 10px;
}
.firstRightIcon {
    margin-top: -25px;
    margin-left: 410px;
}
.firstRightIcon > .bi {
    margin: 3px;
}
.midPic {
    margin-top: -2px;
    width: 100%;
    margin-left: 50px;
    z-index: 1;
}
.myIns {
    font-size: x-large;
    font-family: "forIns";
    margin-top: 10px;
    margin-left: 10px;
}
.secLine {
    margin-top: -30px;
    margin-left: 400px;
}
.row4 {
    margin: 10px;
}
.carouselIcon {
    margin-top: -10px;
    margin-left: 10px;
}

.bi-chat {
    margin-top: 8px;
}
.sec {
    margin: 11px;
}
.img1 {
    border-radius: 100%; /* 將容器的邊框半徑設置為50% */
    overflow: hidden; /* 隱藏圓形容器中圖像的部分 */
    border-style: outset;
    border-color: rgb(244, 8, 133);
    border-width: 5px;
    width: 60px; /* 設置圖像的寬度為100% */
    height: 60px; /* 自動計算圖像的高度 */
    margin: 10px;
    padding: 2px;
}
.bi-bookmark {
    margin-left: 455px;
    margin-top: -60px;
}
.likes {
    font-weight: 700;
    margin-top: -25px;
    margin-left: 10px;
}
.acc {
    font-weight: 700;
    margin-left: 10px;
}

.acc2 {
    margin-top: -20px;
    margin-left: 45px;
    font-weight: 900;
    font-size: x-small;
}
.accPic {
    border-radius: 50%; /* 將容器的邊框半徑設置為50% */
    overflow: hidden; /* 隱藏圓形容器中圖像的部分 */
    width: 5.5%; /* 設置圖像的寬度為100% */
    height: 27px; /* 自動計算圖像的高度 */
    display: flex; /*使用 Flexbox 佈局 */
    align-items: center; /*垂直居中 */
    justify-content: center; /*水平居中*/
    margin-top: 10px;
    margin-left: 10px;
}
.bi-three-dots {
    margin-top: -45px;
    margin-left: 455px;
}
.bi-dash-lg {
    margin-left: 20%;
}
.iphoneLine {
    width: 15%;
    height: 0px;
    border-style: solid;
    border-color: black;
    border-width: 3px;
    border-radius: 40px 40px 40px 40px;
    bottom: 0;
    position: absolute;
    left: 41%;
    width: 35%;
}
.iphoneHair {
    position: absolute; /* 子元素設置為絕對定位 */
    left: 41%; /* 將子元素左邊緣定位在父元素的左邊緣 */
    top: 50px; /* 將子元素頂部定位在父元素的頂部 */
    width: 38%;
    height: 20px;
    border-style: solid;
    border-color: black;
    border-width: 15px;
    border-radius: 0 0 40px 40px;
}
.aboutMeText1 {
    width: 490px;
    margin-top: 5px;
    margin-left: 10px;
}
.fullHeart {
    color: red;
    margin-left: 10px;
    position: relative;
}
.emptyHeart,
.fullHeart,
.bi-send {
    cursor: pointer;
}
.phone-wrap {
    width: 40%;
    position: relative;
}
</style>
