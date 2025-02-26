<template>
  <div class="app-container">
    <header class="app-header">
      <div class="logo">
        <h1>Event App</h1>
      </div>
      <nav>
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/dashboard" class="nav-link">Dashboard</RouterLink>
        <!-- These links are for future development -->
        <!-- <RouterLink :to="{ name: 'login' }" class="nav-link">Login</RouterLink>
        <RouterLink :to="{ name: 'register' }" class="nav-link">Sign up</RouterLink> -->
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
    <footer class="app-footer">
      <p>&copy; {{ currentYear }} Event Admin App. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

// Computed property for current year in the footer
const currentYear = computed(() => new Date().getFullYear());
</script>

<style>
/* Global CSS Variables */
:root {
  --primary-color: #ff6b6b;
  --secondary-color: #feca57;
  --accent-color: #54a0ff;
  --text-color: #2c3e50;
  --bg-color: #f8f9fa;
  --header-height: 60px;
  --footer-height: 60px;
}

/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
  background-color: var(--bg-color);
}

/* Main layout container */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header styling */
.app-header {
  height: var(--header-height);
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.logo h1 {
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: bold;
}

/* Navigation styling */
nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem;
  transition: color 0.3s;
  position: relative;
}

.nav-link:hover {
  color: var(--primary-color);
}

.nav-link.router-link-active {
  color: var(--primary-color);
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
}

/* Main content area */
main {
  flex: 1;
  margin-top: var(--header-height);
  margin-bottom: var(--footer-height);
}

/* Footer styling */
.app-footer {
  height: var(--footer-height);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.05);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.app-footer p {
  color: #666;
  font-size: 0.9rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .app-header {
    padding: 0 1rem;
    flex-direction: column;
    height: auto;
    padding: 1rem;
  }
  
  nav {
    margin-top: 1rem;
  }
  
  main {
    margin-top: 100px;
  }
}
</style>
