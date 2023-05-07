<template>
    <div class="slideshow">
        <span>
            <img src="../assets/picture/1.png" id="pic1" alt="無" />
        </span>
        <span>
            <img src="../assets/picture/2.png" id="pic2" alt="無" />
        </span>
        <span>
            <img src="../assets/picture/3.jpg" id="pic3" alt="無" />
        </span>
        <span>
            <img src="../assets/picture/4.jpg" id="pic4" alt="無" />
        </span>
        <span>
            <img src="../assets/picture/5.jpg" id="pic5" alt="無" />
        </span>
        <span>
            <img src="../assets/picture/6.jpg" id="pic6" alt="無" />
        </span>
    </div>
</template>

<script setup>
window.onload = () => {
    //window.onload()事件監聽器，當頁面載入完成後再運行mouseOverPic()
    const mousePic1 = document.getElementById("pic1");
    const whenMouseOverPic1 = document.getElementById("slideshow");
    mousePic1.addEventListener("mouseover", () => {
        whenMouseOverPic1.style.animation = "";
    });
};
</script>

<style scoped>
img {
    width: 15%;
    height: 15%;
    /* margin: -500px; */
}
.slideshow {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
}

.slideshow img {
    display: inline-block;
    width: 100 / 6;
    animation: slideshow 10s infinite;
    margin: 5px;
}

@keyframes slideshow {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}
</style>
