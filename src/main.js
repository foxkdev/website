import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import VueGtag from "vue-gtag-next"

import App from './App.vue'
import router from './router'
import store from './store'

import en from './locales/en'

const messages = {
  en
}
const i18n = createI18n({
  locale: 'en',
  messages
})

const app = createApp(App)
app.use(router)
app.use(store)
app.use(i18n)

app.use(VueGtag, {
  property: {
    id: import.meta.env.VITE_GA_ID
  }
})

app.mount('#app')
window.$app = app
