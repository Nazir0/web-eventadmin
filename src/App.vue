<template>
  <LandingPage />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Home from "@/pages/LandingPage.vue";
import AppNavigation from "@/components/AppNavigation.vue";
import LandingPage from "@/pages/LandingPage.vue";
@Options({
  components: {
    LandingPage,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
