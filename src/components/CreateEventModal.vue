<template>
  <div class="modal">
    <div class="modal-content">
      <h2>Create New Event</h2>
      <form @submit.prevent="submitEvent">
        <div class="form-group">
          <label for="name">Event Name</label>
          <input type="text" id="name" v-model="form.name" required class="form-control" />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea id="description" v-model="form.description" required class="form-control"></textarea>
        </div>
        <div class="form-group">
          <label for="location">Location</label>
          <input type="text" id="location" v-model="form.location" required class="form-control" />
        </div>
        <div class="form-group">
          <label for="date">Date</label>
          <input type="datetime-local" id="date" v-model="form.date" required class="form-control" />
        </div>
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>
        <div class="form-actions">
          <button type="submit" class="btn btn-primary" :disabled="loading">
            {{ loading ? 'Creating...' : 'Create Event' }}
          </button>
          <button type="button" class="btn btn-secondary" @click="emit('close')" :disabled="loading">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const form = ref({
  name: '',
  description: '',
  location: '',
  date: '',
});

const emit = defineEmits(['close', 'submit']);
const loading = ref(false);
const errorMessage = ref('');

const submitEvent = async () => {
  loading.value = true;
  errorMessage.value = '';
  
  try {
    const response = await axios.post(
      'http://127.0.0.1:8000/api/event/',
      {
        name: form.value.name,
        description: form.value.description,
        location: form.value.location,
        date: new Date(form.value.date).toISOString(),
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: import.meta.env.VITE_API_TOKEN || 'Token ed64c119e061e220202b6fb4630f8be81e390679',
        },
      }
    );
    emit('submit', response.data);
    form.value = { name: '', description: '', location: '', date: '' };
  } catch (error) {
    console.error('Error creating event:', error);
    errorMessage.value = error.response?.data?.message || 'Failed to create event. Please try again.';
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

h2 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-control {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.error-message {
  color: #dc3545;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
}
</style>