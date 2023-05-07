<script setup>
const text = "2016~2018 冷凍設備工程師";
const text2 = "2018~2021 澳洲打工-室內裝潢及肉類工廠剃骨手";
const text3 = "2022~2023 資拓宏宇國際股分有限公司-Java工程師";
</script>
<template>
    <div class="text">
        {{ text }}<br />
        <br />
        {{ text2 }}<br />
        <br />
        {{ text3 }}
    </div>
    <div class="work"><img src="@/assets/picture/work.jpg" /></div>
    <!-- <div class="text">
        2016~2018 冷凍設備工程師<br /><br />
        2018~2021 澳洲打工-室內裝潢及肉類工廠剃骨手<br /><br />
        2022~2023 資拓宏宇國際股分有限公司-Java工程師
    </div> -->
</template>

<style scoped>
@media (min-width: 1024px) {
    .text {
        text-align: left;
        margin-top: 50px;
        margin-left: -50px;
        white-space: nowrap;
    }
    .work {
        margin-top: 75px;
        margin-left: -100px;
        opacity: 0.5;
    }
}
</style>
