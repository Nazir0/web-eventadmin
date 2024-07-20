<template>
  <div class="topnav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/login">Log in</RouterLink>
    <RouterLink to="/register">Sign up</RouterLink>
  </div>
</template>


<script setup lang="ts">
import type { RouteParams } from 'vue-router';
import { computed } from 'vue'
import type {AppRouteNames} from "src/router";
interface NavLink {
  name: AppRouteNames
  params?: Partial<RouteParams>
  title: string
  icon?: string
}
const allNavLinks = computed<NavLink[]>(() => [
  {
    name: 'global-feed',
    title: 'Home',
  },
  {
    name: 'login',
    title: 'Sign in',
  },
  {
    name: 'register',
    title: 'Sign up',
  },
])
const navLinks = computed(() => allNavLinks.value
)
</script>

<style>
.topnav {
  position: fixed; /* Fixed positioning to keep it at the top */
  top: 0;          /* Aligns the navigation to the top edge of the viewport */
  width: 100%;     /* Forces the nav to extend full width of the viewport */
  z-index: 1000;
  background-color: #f8f9fa; /* Light background color */
  overflow: hidden;
  border-bottom: 1px solid #ddd; /* Add a border bottom similar to Conduit */
}

/* ... other styles ... */

.topnav .nav-item.active {
  background-color: #5cb85c; /* Conduit uses a green color for active state */
  color: white;
}
</style>