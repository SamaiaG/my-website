<template>
  <the-header />
  <MyPage/>
  <the-footer />
</template>

<script lang="ts">
import TheHeader from './components/TheHeader.vue';
import MyPage from './views/MyPage.vue';
import TheFooter from './components/TheFooter.vue';


export default {
  components: {
    TheHeader,
    MyPage,
    TheFooter
  },
};
</script>

<style>
header {
  z-index: 999;
  backdrop-filter: blur(20px);
}

footer {
  z-index: 999;
}
</style>
