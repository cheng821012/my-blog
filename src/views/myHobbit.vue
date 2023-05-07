<script setup>
const text =
    "　 　我的興趣包括各式球類、喜愛大自然及海邊。另外，從國中時期開始接觸街舞至今已經15年，曾經拿過許多大小獎項，這項活動一直是我生命中的熱情所在。每當跳舞時，我感到身心愉悅，不論是練習還是表演，我總是充滿熱忱與專注。";
</script>
<template>
    <div class="text">{{ text }}</div>
    <div class="view"><img src="@/assets/picture/view.jpg" /></div>

    <!-- <div class="text">
        &emsp;&emsp;我的興趣包括各式球類、喜愛大自然及海邊。另外，從國中時期開始接觸街舞至今已經15年，曾經拿過許多大小獎項，這項活動一直是我生命中的熱情所在。每當跳舞時，我感到身心愉悅，不論是練習還是表演，我總是充滿熱忱與專注。
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
    .view {
        margin-top: 75px;
        margin-left: -100px;
        opacity: 0.5;
    }
}
</style>
