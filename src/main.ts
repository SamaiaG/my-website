import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import axios from 'axios';

import BaseCard from './components/BaseCard.vue';
import TheCircles from './components/TheCircles.vue';
import DonutChart from './components/charts/DonutChart.vue';
import ChartNoVue from './components/charts/ChartNoVue.vue'

const app = createApp(App);
app.config.globalProperties.$axios = axios;

app.component('base-card', BaseCard);
app.component('the-circles', TheCircles);
app.component('donut-chart', DonutChart);
app.component('chart-no-vue', ChartNoVue)
app.use(createPinia());

app.mount('#app');
