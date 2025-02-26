<template>
  <div class="dashboard">
    <header class="dashboard-header">
      <h1>Welcome to Your Dashboard, {{ username }}</h1>
    </header>

    <section class="main-content">
      <div class="section-header">
        <h2>Upcoming Events</h2>
        <button @click="showCreateEventModal = true" class="btn-create-event">
          Create a New Event
        </button>
      </div>

      <!-- Loading state -->
      <div v-if="isLoading" class="loading-container">
        <div class="loading-spinner"></div>
        <p>Loading events...</p>
      </div>

      <!-- Error state -->
      <div v-else-if="error" class="error-container">
        <p>{{ error }}</p>
        <button @click="fetchEvents" class="btn-retry">Retry</button>
      </div>

      <!-- Empty state -->
      <p v-else-if="events.length === 0" class="empty-state">
        No upcoming events found. Create your first event by clicking the button above!
      </p>
      
      <!-- Events list -->
      <div v-else class="event-list">
        <EventItem
          v-for="event in events"
          :key="event.id"
          :event="event"
          :current-user="currentUser"
          @edit="handleEditEvent"
        />
      </div>
    </section>

    <!-- Create event modal -->
    <CreateEventModal
      v-if="showCreateEventModal"
      @close="showCreateEventModal = false"
      @submit="handleNewEvent"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import EventItem from '@/components/EventItem.vue';
import CreateEventModal from '@/components/CreateEventModal.vue';

// Ideally, this would come from a user state/auth system
const currentUser = ref('Nazir');
const events = ref([]);
const isLoading = ref(true);
const error = ref('');
const showCreateEventModal = ref(false);

// Computed property for displaying user name
const username = computed(() => currentUser.value || 'Guest');

// API base URL - ideally from env variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';
const API_TOKEN = import.meta.env.VITE_API_TOKEN || 'Token ed64c119e061e220202b6fb4630f8be81e390679';

/**
 * Fetch all events from the API
 */
const fetchEvents = async () => {
  isLoading.value = true;
  error.value = '';
  
  try {
    const response = await axios.get(`${API_BASE_URL}/event/${currentUser.value}/`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: API_TOKEN,
      },
    });
    events.value = response.data;
  } catch (err) {
    console.error('Error fetching events:', err);
    error.value = 'Failed to load events. Please try again.';
  } finally {
    isLoading.value = false;
  }
};

/**
 * Handle new event creation
 */
const handleNewEvent = (newEventData) => {
  // Refresh the events list instead of manually adding to ensure we have the correct data
  fetchEvents();
  showCreateEventModal.value = false;
};

/**
 * Handle event edit (to be implemented)
 */
const handleEditEvent = (event) => {
  console.log('Edit event:', event);
  // Future implementation: Show edit modal
};

// Load events on component mount
onMounted(() => {
  fetchEvents();
});
</script>

<style scoped>
@import '@/styles/dashboard.css';
</style>