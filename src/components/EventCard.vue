<template>
  <router-link
    class="event-link"
    :to="{ name: 'EventDetails', params: { id: event.id } }"
  >

      <div class="event-card">
          <h5 class="card-title">
            ❝ {{ event.name }} {{ event.surname }} ❞
          </h5>
          <p class="card-text">Age: {{ event.age }}</p>
        </div>

  </router-link>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
/* Add a hover effect (blue shadow) */
img:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
.row{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
}
.card {
  background-color: #ffe89b;
  color: #000000;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-radius: 10px;
}
.card:hover {
  background-color: #ebb813;
}
.event-card {
  background-color: #ffe89b;
  color: #000000;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  border: 1px solid #ff7f08;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
