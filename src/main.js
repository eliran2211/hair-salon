import './index.css'
import { addIcons } from "oh-vue-icons"
import { CoHamburgerMenu, IoCloseOutline } from "oh-vue-icons/icons"

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

const app = createApp(App)
addIcons(CoHamburgerMenu, IoCloseOutline )
app.use(router)

app.mount("#app")
