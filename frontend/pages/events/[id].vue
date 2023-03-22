<script setup>
const config = useRuntimeConfig();
const route = useRoute();
const { data: fetchedData } = await useFetch(
  `${config.apiUrl}/events/${route.params.id}`
);
const event = fetchedData.value;
if (!event) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}
useHead({
  titleTemplate: event?.title + " | Evently",
});
</script>
<template>
  <v-container fluid>
    <v-row class="ml-22 my-2">
      <div class="event-title-section">
        <div class="text-h4">{{ event.title }}</div>
        <div>{{ event.place }}</div>
      </div>
    </v-row>
    <v-row class="mx-16 event-row">
      <v-col cols="12" md="8">
        <v-row class="mx-4 my-2">
          <article>{{ event.description }}</article>
        </v-row>
      </v-col>
      <v-col cols="12" md="4">
        <v-img :src="event.picture"></v-img>
        <v-table class="my-4">
          <thead>
            <tr>
              <th class="text-left">Date</th>
              <th class="text-left">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ formatDate(event.startDate) }}</td>
              <td>{{ formatTime(event.startDate) }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.ml-22 {
  margin-left: 90px;
}
@media screen and (max-width: 960px) {
  .event-row {
    flex-direction: column-reverse;
  }
  .event-title-section {
    display: block;
  }
}
@media screen and (min-width: 961px) {
  .event-title-section {
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: flex-end;
  }
}
</style>
