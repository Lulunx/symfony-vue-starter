export const routes = [
    {
        path: "/",
        name: "login",
        component: require("../views/Login.vue").default
    },
    {
        path: "/auth/reset-password",
        name: "resetPwd",
        component: require("../views/ResetForm.vue").default
    }
];
