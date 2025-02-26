<template>
  <div class="modal-overlay" @click="emit('close')">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h2>{{ event.name }}</h2>
        <button class="close-btn" @click="emit('close')">&times;</button>
      </div>
      <div class="modal-body">
        <div class="event-detail">
          <span class="label">Date:</span>
          <span class="value">{{ formatDate(event.date) }}</span>
        </div>
        <div class="event-detail">
          <span class="label">Description:</span>
          <p class="value description">{{ event.description }}</p>
        </div>
        <div class="event-detail">
          <span class="label">Location:</span>
          <span class="value">{{ event.location }}</span>
        </div>
        <div class="event-detail">
          <span class="label">Creator:</span>
          <span class="value">{{ event.creator }}</span>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" @click="emit('close')">Close</button>
        <button v-if="canEdit" class="btn btn-primary" @click="emit('edit')">Edit</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
  currentUser: {
    type: String,
    default: '',
  }
});

const emit = defineEmits(['close', 'edit']);

/**
 * Check if the current user can edit this event
 */
const canEdit = computed(() => {
  return props.currentUser === props.event.creator;
});

/**
 * Format date for human readability
 */
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
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
}

.modal-header h2 {
  color: #ff6b6b;
  margin: 0;
  font-size: 1.75rem;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.75rem;
  cursor: pointer;
  color: #888;
  transition: color 0.2s;
}

.close-btn:hover {
  color: #ff6b6b;
}

.modal-body {
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.event-detail {
  margin-bottom: 1rem;
  display: flex;
}

.label {
  font-weight: bold;
  color: #54a0ff;
  min-width: 100px;
}

.value {
  flex: 1;
}

.description {
  white-space: pre-line;
  margin-top: 0;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.btn {
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.btn-primary {
  background-color: #54a0ff;
  color: white;
}

.btn-primary:hover {
  background-color: #2e86de;
}

.btn-secondary {
  background-color: #eee;
  color: #333;
}

.btn-secondary:hover {
  background-color: #ddd;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .modal-content {
    width: 95%;
    padding: 1.5rem;
  }
  
  .event-detail {
    flex-direction: column;
  }
  
  .label {
    margin-bottom: 0.25rem;
  }
}
</style>