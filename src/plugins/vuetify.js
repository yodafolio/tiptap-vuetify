import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";
import { TiptapVuetifyPlugin } from "tiptap-vuetify";

import "tiptap-vuetify/dist/main.css";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  icons: {
    iconfont: "md"
  }
});

Vue.use(TiptapVuetifyPlugin, {
  vuetify
  // iconsGroup: "md",
});

export default vuetify;
