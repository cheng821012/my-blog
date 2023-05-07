import { defineStore } from "pinia";
import { computed, ref } from "vue";

import picA from "../assets/picture/3.jpg";
import picE from "../assets/picture/4.jpg";
import picH from "../assets/picture/5.jpg";
import picD from "../assets/picture/me.jpg";

//option API
// export const useChangePic = defineStore({
//     id: "changePic",
//     state: () => ({
//         picNum: ref(0),
//     }),

//     actions: {
//         changePicFn(idx) {
//             this.picNum = idx;
//         },
//     },
//     return: { picNum, changePicFn },
// });

//composition API
export const useChangePic = defineStore("changePic", () => {
    const picNum = ref();
    const imageMap = computed(() => {
        switch (picNum.value) {
            case 0:
                return picA;
            case 1:
                return picE;
            case 2:
                return picH;
            default:
                return picD;
        }
    });

    function changePicFn(num) {
        picNum.value = num;
    }

    return { picNum, imageMap, changePicFn };
});

export const useAboutMe = defineStore("aboutME", () => {
    const textNum = ref(0);
    const textMap = computed(() => {
        switch (textNum.value) {
            case 0:
                return "　 　我出生於1993年，花蓮人，2016年，我畢業於東南科技大學，性格活潑開朗，喜愛嘗試新事物，勇於挑戰自己。在我的眼裡，每個挑戰都是成長的機會，因此我總是勇於嘗試新的事情，無論是學習新技能，還是探索新的領域，我總是樂於嘗試。相信這種積極進取的態度將會伴隨我一生，幫助我不斷成長和進步。";
            case 1:
                return "2016~2018 冷凍設備工程師 \n 2018~2021 澳洲打工-室內裝潢及肉類工廠剃骨手 \n 2022~2023 資拓宏宇國際股分有限公司-Java工程師";

            case 2:
                return "　 　我的興趣包括各式球類、喜愛大自然及海邊。另外，從國中時期開始接觸街舞至今已經15年，曾經拿過許多大小獎項，這項活動一直是我生命中的熱情所在。每當跳舞時，我感到身心愉悅，不論是練習還是表演，我總是充滿熱忱與專注。";
            default:
                return "載入錯誤";
        }
    });

    function changeTextFn(num) {
        textNum.value = num;
    }

    return { textNum, textMap, changeTextFn };
});
