<template>
  <div class="event-item">
    <h3>{{ event.name }}</h3>
    <p><strong>Date:</strong> {{ formatDate(event.date) }}</p>
    <p><strong>Description:</strong> {{ event.description }}</p>
    <p><strong>Location:</strong> {{ event.location }}</p>
    <p><strong>Creator:</strong> {{ event.creator }}</p>
    <button @click="viewDetails(event.id)">View Details</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

// Props for event data
const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});

// Format the event date
const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Date(date).toLocaleDateString(undefined, options);
};

// Handle view details click
const viewDetails = (eventId: number) => {
  alert(`Viewing details for event ID: ${eventId}`); // Placeholder for detail navigation
};
</script>
  
<style scoped>

</style>