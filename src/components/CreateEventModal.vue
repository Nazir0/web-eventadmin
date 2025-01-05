<template>
    <div class="modal">
      <div class="modal-content">
        <h2>Create Event</h2>
  
        <label>
          Name:
          <input
            type="text"
            v-model="newEvent.name"
          />
        </label>
        
        <label>
          Date:
          <input
            type="date"
            v-model="newEvent.date"
          />
        </label>
  
        <div class="modal-buttons">
          <button @click="submitForm">Submit</button>
          <button @click="$emit('close')">Cancel</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineEmits } from 'vue';
  
  // Emit events to parent: 'close' to close, 'submit' to send data
  const emit = defineEmits(['close', 'submit']);
  
  // Local state for new event form
  const newEvent = ref({ name: '', date: '' });
  
  const submitForm = () => {
    if (!newEvent.value.name || !newEvent.value.date) {
      alert('Please fill in all fields'); // Basic validation
      return;
    }
  
    // Emit the new event data
    emit('submit', newEvent.value);
  
    // Reset the form
    newEvent.value = { name: '', date: '' };
  };
  </script>
  
  <style scoped>

  </style>