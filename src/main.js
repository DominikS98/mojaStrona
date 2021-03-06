import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import { library } from "@fortawesome/fontawesome-svg-core";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faX);


createApp(App)
.use(router)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')

