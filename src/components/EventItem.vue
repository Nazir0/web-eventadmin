<template>
  <div class="event-item">
    <div class="event-header">
      <h3>{{ event.name }}</h3>
    </div>
    <div class="event-body">
      <p><strong>Date:</strong> {{ formatDate(event.date) }}</p>
      <!-- On affiche seulement la description tronquée dans la carte -->
      <p><strong>Description:</strong> {{ truncatedDescription }}</p>
      <p><strong>Location:</strong> {{ event.location }}</p>
      <p><strong>Creator:</strong> {{ event.creator }}</p>
    </div>
    <div class="event-footer">
      <button @click="showDetails = true">View Details</button>
    </div>
    
    <!-- Use the new DetailedEventModal component -->
    <DetailedEventModal 
      v-if="showDetails" 
      :event="event" 
      :current-user="currentUser"
      @close="showDetails = false"
      @edit="$emit('edit', event)" 
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref } from 'vue';
import DetailedEventModal from '@/components/DetailedEventModal.vue';

const showDetails = ref(false);
const emit = defineEmits(['edit']);

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

/**
 * Tronquer la description si elle dépasse 100 caractères
 */
const truncatedDescription = computed(() => {
  const desc = props.event.description || '';
  return desc.length > 100 
    ? desc.slice(0, 100) + '...' 
    : desc;
});

/**
 * Formater la date avec Intl.DateTimeFormat
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
.event-item {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  border-radius: 30px;
  background-color: #fff;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s; 
}

/* Quand on survole la carte */
.event-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.event-header {
  /* Hauteur fixe pour le titre */
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0.5rem;
}

.event-header h3 {
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.2;
  color: #54a0ff; /* Couleur d’accentuation */
  /* Pour couper le texte sur plusieurs lignes si besoin */
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: center;
}

.event-body {
  flex: 1;
  overflow: hidden;
}

/* Pour séparer la partie pied de la carte */
.event-footer {
  margin-top: 1rem;
  text-align: center;
}

/* Styles du bouton principal */
.event-footer button {
  background-color: #feca57; /* Couleur du bouton */
  color: #2d3436;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.event-footer button:hover {
  background-color: #ffd686;
}

/* Styles de la modale (inspiré de CreateEventModal) */
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
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.modal-header h2 {
  color: #ff6b6b;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
}

.modal-body {
  line-height: 1.6;
}
</style>