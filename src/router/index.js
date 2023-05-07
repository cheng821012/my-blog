import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "Login",
            component: () => import("../views/login.vue"),
        },
        {
            path: "/lobby",
            name: "ReadMore",
            component: () => import("../views/lobby.vue"),
            children: [
                {
                    path: "aboutMe",
                    name: "aboutMe",
                    component: () => import("../views/aboutMe.vue"),
                },
                {
                    path: "myExperience",
                    name: "myExperience",
                    component: () => import("../views/myExperience.vue"),
                },
                {
                    path: "myHobbit",
                    name: "myHobbit",
                    component: () => import("../views/myHobbit.vue"),
                },
            ],
        },
        {
            path: "/:pathMath(.*)*",
            name: "Not Found",
            component: () => import("../views/404.vue"),
        },
    ],
});

export default router;
