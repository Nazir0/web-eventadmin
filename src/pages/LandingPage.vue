<template>
  <div class="home-page">
    <main>
      <section class="hero">
        <h2>Organize Your Events with Ease</h2>
        <p>Streamline your event planning process with our powerful and intuitive app.</p>
        <button>Get Started</button>
      </section>

      <section id="features" class="features">
        <h2>Key Features</h2>
        <div class="feature-list">
          <div class="feature-item">
            <h3>Easy Scheduling</h3>
            <p>Create and manage events effortlessly.</p>
          </div>
          <div class="feature-item">
            <h3>Guest Management</h3>
            <p>Keep track of RSVPs and attendees.</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LandingPage'
}
</script>

<style scoped>
@import '@/styles/style.css';
</style>