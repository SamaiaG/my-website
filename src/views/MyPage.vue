<template>
    <base-card>
        <div class="content">
            <img src="../assets/circles.png" alt="circles" class="circles">
            <div class="name-and-position">
                <h1>Samaia <br> Gahramanov</h1>
                <h3 class="position">newbie developer lalalallalaal</h3>
            </div>
        </div>
    </base-card>
    <base-card class="skills">
        <h2>Skills</h2>
        <div class="skills-charts">
            <donut-chart id="myChart" :type="type" :data="data1" :labels="labels1" :color="color1" :options="options"></donut-chart>
            <donut-chart id="myChart" :type="type" :data="data2" :labels="labels2" :color="color2" :options="options"></donut-chart>
            <donut-chart id="myChart" :type="type" :data="data3" :labels="labels3" :color="color3" :options="options"></donut-chart>
            <donut-chart id="myChart" :type="type" :data="data4" :labels="labels4" :color="color4" :options="options"></donut-chart>
        </div>
    </base-card>
    <base-card>
    <h2>My works/CSS</h2>

    <div  class="experience">
        <div class="projects">
            <div class="pro p1">
                <a href="/picture1"> <img src="../assets/pictures/fishes.png" class="pic"></a>
                <a href="/picture1"> <img src="../assets/pictures/fishes.png" class="pic"></a>
            </div>
            <div class="pro p2"></div>
        </div>
        <div class="css-fun">
            <div class="pic c1">
                <a href="/picture1"> <img src="../assets/pictures/fishes.png" class="pic"></a>
            </div>
            <div class="pic c2">
                <a href="/picture1"> <img src="../assets/pictures/sunset.png" class="pic"></a>
            </div>
            <div class="pic c3">
                <a href="/picture1"> <img src="../assets/pictures/elephant.png" class="pic"></a>
            </div>
            <div class="pic c4">
                <a href="/picture1"> <img src="../assets/pictures/egg.png" class="pic"></a>
            </div>
        </div>
    </div>
    </base-card>
    <base-card>
        <h2>Hobbies</h2>
        <h2>Languages</h2>
        <h2>Contact</h2>
    </base-card>
    <base-card>
        <h2>Suggestions</h2>
    </base-card>
</template>

<script setup lang="ts">
    import type Chart from 'chart.js/auto';

    import DonutChart from '../components/charts/DonutChart.vue';
    import { plugins } from 'chart.js/auto';

    let type='doughnut'
    let labels1 = ['HTML', 'CSS', 'JavaScript'];
    let data1 = [40, 40, 20];
    let color1 =['#C5425F', '#4F6A92', '#7A9971'];

    let labels2 = ['Vue.js', 'Tailwind', 'Bootstrap', 'Chart.js'];
    let data2 = [25, 25, 25, 25];
    let color2 =['#CEEAC5', '#ACC7EE',  '#F5A6B8', '#FCDBBE'];

    let labels3 = ['Git / GitHub', 'Jira', 'Postman', 'Confluence'];
    let data3 = [40, 20, 20, 20];
    let color3 =['#4F6A92', '#CCD3CA',  '#BB7E4A', '#B1CAEE'];

    let labels4 = ['Figma', 'Adobe XD'];
    let data4 = [75, 25];
    let color4 =['#C5425F', '#B1CAEE'];

    let options =  {
        responsive: false,
        aspectRatio: 2,
        plugins: {
            legend: {
                display: false
            }
        }
      }
</script>

<style>
.content{
    display: flex;
    justify-content: space-between;
}

.circles {
    width: 400px;
}

h1{
    font-size: 72px;
    background: -webkit-linear-gradient(#4F6A92, #ACC7EE);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
.position {
    color: #C5425F;
    position: relative;
    top: -2rem;
}

.skills{
    align-items: center;
    gap: 3rem
}
.skills-charts{
    display: grid;
    grid-template-columns: auto auto auto auto;
    
}

.experience{
    display: flex;
}
.css-fun, .projects{
    display: grid;
    grid-template-columns: 20rem 20rem;
    gap: 2rem;
    row-gap: 2rem;
    width: 45%;
    position: relative;
}


.pic{
    width: 20rem;
    height: 13rem;
    object-fit: fill
}
</style>
