<template>
      <header>
      <h1>Event App</h1>
      <nav>
        <!-- Login link
        <RouterLink :to="{ name: 'login' }">Login</RouterLink>
        
        <RouterLink :to="{ name: 'register' }">Sign up</RouterLink>
         Sign up link -->
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
      </nav>
    </header>
  <RouterView />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { RouterLink, RouterView } from 'vue-router'
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import Dashboard from "@/pages/Dashboard.vue";
import LandingPage from "@/pages/LandingPage.vue";


@Options({
  components: {
    LandingPage,
    Dashboard,
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
