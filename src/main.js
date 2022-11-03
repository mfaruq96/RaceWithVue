import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueGeolocation from 'vue-browser-geolocation'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import VueTabs from 'vue-nav-tabs'

// import VueTabs from 'vue-nav-tabs'
// import 'vue-nav-tabs/themes/vue-tabs.css'
// Vue.use(VueTabs)


// css
import '../public/frontend/vendor/fontawesome-free/css/all.min.css'
import '../public/frontend/css/sb-admin-2.min.css'
import '@/assets/css/style.css'
// import 'vue-nav-tabs/themes/vue-tabs.css'

// datatables
import 'datatables.net-bs4'
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css'
import 'jszip'
import 'pdfmake'
import 'datatables.net-buttons-bs4/js/buttons.bootstrap4'
import 'datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css'
import 'datatables.net-buttons/js/buttons.colVis'
import 'datatables.net-buttons/js/buttons.flash'
import 'datatables.net-buttons/js/buttons.html5'
import 'datatables.net-buttons/js/buttons.print'

// bootstrap
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// bootstrap
// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

// Vue.use(VueTabs)

Vue.use(VueGeolocation);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC_O0-LKyAboQn0O5_clZnePHSpQQ5slQU',
    // key: 'AIzaSyBkBuf2Vt0c9ZqpzLRwYwMXXhwQbWTg76Y',
    // libraries: 'places',
    // callback: 'initAutocomplete'
  },
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
