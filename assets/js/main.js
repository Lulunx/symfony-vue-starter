import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import httpClient from "./plugins/http"
import vuetify from './plugins/vuetify/vuetify'


import 'material-icons/iconfont/material-icons.css'

import 'prismjs'
import 'prismjs/themes/prism.css'
import ErrorMessage from "./components/Dialog/ErrorMessage.vue";
import Layout from "./components/Layout.vue";

import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

Vue.component("error-message", ErrorMessage);
Vue.component("layout", Layout);


Vue.config.productionTip = false

Vue.use(httpClient, { store, router })

/**
 * Register global mixins
 */
Vue.mixin({
    methods: {
        isInvalidField(field) {
            return {
                "v-input--is-focused error--text":
                    Array.isArray(this.errors[field]) &&
                    this.errors[field].length > 0
            };
        }
    }
});

// SCSS styles
require('./assets/scss/style.scss')

new Vue({
    router,
    store,
    vuetify,
    render: function (h) { return h(App) }
}).$mount('#app')