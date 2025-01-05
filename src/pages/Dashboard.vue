<template>
  <div class="dashboard">
    <!-- Header -->
    <header class="dashboard-header">
      <h1>Welcome to Your Dashboard, {{ username }}</h1>
    </header>

    <!-- Main Content -->
    <section class="main-content">
      <h2>Upcoming Events</h2>
      <!-- Display message if no events exist -->
      <p v-if="events.length === 0">No upcoming events found.</p>

      <!-- List of events -->
      <div v-else class="event-list">
        <EventItem
          v-for="event in events"
          :key="event.id"
          :event="event"
        />
      </div>

      <!-- Button to create a new event -->
      <button @click="showCreateEventModal = true" class="btn-create-event">
        Create a New Event
      </button>
    </section>

    <!-- Modal for creating new events -->
    <CreateEventModal
      v-if="showCreateEventModal"
      @close="showCreateEventModal = false"
      @submit="handleNewEvent"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import EventItem from '@/components/EventItem.vue';
import CreateEventModal from '@/components/CreateEventModal.vue';

// Username for display
const username = 'John Doe'; // Replace with actual username from state or API

// State for events
const events = ref([]);

// Modal visibility state
const showCreateEventModal = ref(false);

// Fetch events from backend
const fetchEvents = async () => {
  try {
    const response = await axios.get('your_url', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token your_token_here',
      },
    });
    events.value = response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};

// Handle adding a new event
const handleNewEvent = (newEventData) => {
  const newId = events.value.length + 1;
  events.value.push({ id: newId, ...newEventData });
  showCreateEventModal.value = false; // Close modal
};

// Fetch events on mount
onMounted(() => {
  fetchEvents();
});
</script>

<style scoped>
@import '@/styles/dashboard.css';
</style>