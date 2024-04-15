<template>
  <Doughnut :type="chartType" :data="chartData" :options="doughnutOptions" :plugins="doughnutPlugins"></Doughnut>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Doughnut } from 'vue-chartjs';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const props = defineProps(['type', 'labels', 'data', 'color', 'options', 'plugins']);

const chartType = props.type;
const chartData = ref({
  labels: props.labels,
  datasets: [
    {
      backgroundColor: props.color,
      data: props.data,
    },
  ],
});

const doughnutOptions = props.options;
const doughnutPlugins = props.plugins;
</script>
