<script setup>
import { RouterView, RouterLink, useRouter } from "vue-router";

const { push } = useRouter();
const redirectPage = () => {
    push("/lobby");
};
</script>

<template>
    <div>
        <div class="login">
            <div>
                <div class="inst">instagram</div>
                <input
                    class="inputText"
                    type="text"
                    placeholder="手機號碼、用戶名稱或電子郵件地址"
                    style="font-size: 12px"
                />
                <br />
                <input class="inputText" type="text" placeholder="密碼" style="font-size: 12px" />
                <br />

                <button type="button" class="btn btn-primary" @click="redirectPage">登入</button>
            </div>
            <br />

            <div class="fbLogin">
                <div class="or">或</div>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-facebook"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                        />
                    </svg>
                    <a class="afbLogin" href="https://www.facebook.com/">使用Facebook帳號登入</a>
                </div>

                <a class="forgetPass" href="https://i.instagram.com/accounts/password/reset/?hl=zh-tw" target="_blank"
                    >忘記密碼</a
                >
            </div>
        </div>
    </div>
</template>

<style scoped>
body {
    background-color: #fff;
}
.login {
    align-items: center;
    border-style: solid;
    border-color: #cdc9c9;
    border-width: 1px;
    border-radius: 1px;
    width: 30%;
    height: 400px;
    padding: 110px;
    margin: 50px auto 0 auto;
}
.inputText {
    margin-top: 10px;
    margin-left: -10px;
    border-radius: 3px 3px 3px 3px;
    border-color: #cdc9c9;
    border-width: 1px;
    width: 12.5rem;
}
.btn {
    width: 115%;
    margin-top: 10px;
    margin-left: -3px;
}

.inst {
    font-family: "forIns";
    font-size: xxx-large;
    margin-top: -60px;
    margin-left: 20px;
}
.forgetPass {
    margin-left: 65px;
    text-decoration: none;
    font-size: x-small;
}
.line {
    margin-top: 50px;
    width: 50px;
    border-width: 1px;
    border-style: solid;
    border-color: #cdc9c9;
}
.bi-facebook {
    white-space: nowrap;
    color: rgb(73, 73, 131);
}
.fbLogin {
    width: 195px;
    margin-top: 20px;
}
.afbLogin {
    text-decoration: none;
}
.or {
    margin-left: 82px;
}
</style>
