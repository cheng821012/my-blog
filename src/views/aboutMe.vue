<script setup>
const text =
    "　 　我出生於1993年，花蓮人，2016年，我畢業於東南科技大學，性格活潑開朗，喜愛嘗試新事物，勇於挑戰自己。在我的眼裡，每個挑戰都是成長的機會，因此我總是勇於嘗試新的事情，無論是學習新技能，還是探索新的領域，我總是樂於嘗試。相信這種積極進取的態度將會伴隨我一生，幫助我不斷成長和進步。";
</script>

<template>
    <div class="text">{{ text }}</div>
    <div class="hualien">
        <img src="@/assets/picture/hualien.jpg" />
    </div>
    <!-- <div class="text">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我出生於1993年，花蓮人，2016年，我畢業於東南科技大學，性格活潑開朗，喜愛嘗試新事物，勇於挑戰自己。在我的眼裡，每個挑戰都是成長的機會，因此我總是勇於嘗試新的事情，無論是學習新技能，還是探索新的領域，我總是樂於嘗試。相信這種積極進取的態度將會伴隨我一生，幫助我不斷成長和進步。
    </div> -->
</template>

<style scoped>
@media (min-width: 1024px) {
    .text {
        width: 510px;
        margin-top: 50px;
        margin-left: -50px;
        text-align: left;
    }
    .hualien {
        margin-top: 50px;
        margin-left: -100px;
        opacity: 0.5;
    }
}
</style>
