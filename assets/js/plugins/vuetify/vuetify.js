import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import fr from "vuetify/es5/locale/fr";
import en from "vuetify/es5/locale/en";

Vue.use(Vuetify);

const opts = {
    lang: { locales: { fr, en }, current: "fr" },
    theme: {
        themes: {
            light: {
                primary: "#0B61B4"
            }
        }
    }
};

export default new Vuetify(opts);
