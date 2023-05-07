<script setup>
const midPic = document.getElementById("midPic111");
let rotationAngle = 0;
const rotationSpeed = 1 / 60; // 每秒旋轉x度

setInterval(() => {
    rotationAngle += rotationSpeed;
    midPic111.style.transform = `rotate(${rotationAngle}deg)`;
}, 1);
</script>

<template>
    <!-- <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-interval="3000"
        data-bs-ride="carousel"
        data-bs-wrap="true"
    > -->
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="../assets/picture/1.png" alt="無" />
        </div>
        <div class="carousel-item">
            <img src="../assets/picture/2.png" alt="..." />
        </div>
        <div class="carousel-item">
            <img src="../assets/picture/3.jpg" alt="..." />
        </div>
        <div class="carousel-item">
            <img src="../assets/picture/4.jpg" alt="..." />
        </div>
        <div class="carousel-item">
            <img src="../assets/picture/5.jpg" alt="..." />
        </div>
        <div class="carousel-item">
            <img src="../assets/picture/6.jpg" alt="..." />
        </div>
    </div>
    <!-- </div> -->

    <br />
    <br />
    <br />
    <br />
</template>

<style scoped>
@media (min-width: 1024px) {
    .carousel-inner {
        width: 100%;
        position: relative;
        margin-left: 20%;
    }
    .midPic {
        position: relative;
        margin-top: 100px;
        margin-left: 18%;
        z-index: -1;
    }
}
</style>
