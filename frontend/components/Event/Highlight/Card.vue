<template>
  <v-card variant="tonal" class="card-container my-4">
    <v-img
      :src="event.picture"
      :width="64"
      :height="64"
      aspect-ratio="1/1"
      cover
      alt="Picture"
      class="highlight-card-img"
    ></v-img>
    <div class="highlight-card-content">
      <NuxtLink :to="`/events/${event.id}`" class="highlight-card-link">{{
        event.title
      }}</NuxtLink>
      <span class="card-date text-blue-grey-darken-3 text-caption">{{
        formatDate(event.startDate)
      }}</span>
      <div>{{ event.description.substring(0, 60) }}...</div>
    </div>
  </v-card>
</template>
<script>
export default {
  props: ["event"],
};
</script>

<style>
.card-container {
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  padding: 8px;
}
.highlight-card-img {
  border-radius: 9999px;
  max-width: 64px;
}
.highlight-card-content {
  display: flex;
  flex-direction: column;
}
.highlight-card-link {
  font-weight: 700;
}
.card-date {
  position: absolute;
  right: 16px;
  top: 10px;
}
</style>
