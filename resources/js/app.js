require('./bootstrap');

window.Vue = require('vue').default;
window.axios = require('axios');

import Vue from 'vue';
import VTooltip from 'v-tooltip';
import vuetify from './vuetify/vuetify';
import ExampleComponent from "./components/ExampleComponent";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
import VueVideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css'
import VueHtml2pdf from 'vue-html2pdf'

Vue.use(VueHtml2pdf)

Vue.use(VTooltip);

Vue.use(VueSweetalert2);

Vue.use(VueVideoPlayer);

export const bus = new Vue();

const admin = new Vue({
    el: '#app',
    vuetify,
    render: h => h(ExampleComponent)
});
