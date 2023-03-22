<template>
  <v-card
    variant="tonal"
    :subtitle="
      formatDate(event.startDate) + ' @ ' + formatTime(event.startDate)
    "
    color="text-blue-grey-darken-3"
  >
    <v-img :src="event.picture" height="200px" cover alt="Picture"></v-img>
    <v-sheet position="absolute" class="share-btn w-4 h-4">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" icon color="primary">
            <v-icon icon="mdi-share-variant"></v-icon>
          </v-btn>
        </template>
        <v-list class="pa-0">
          <v-list-item class="pa-0 card-list-item">
            <v-btn
              prepend-icon="mdi-twitter"
              color="#1da1f2"
              class="share-btn-item"
              :href="`https://twitter.com/share?url=${hostname}events/${event.id}`"
              target="_blank"
            >
              Tweet
            </v-btn>
            <v-btn
              prepend-icon="mdi-facebook"
              color="#3b5998"
              class="share-btn-item"
              :href="`https://facebook.com/sharer/sharer.php?u=${
                encodeURI(`${hostname}events/${event.id}`) +
                ('&t=' + encodeURIComponent(event.title))
              }`"
              target="_blank"
            >
              Share
            </v-btn>
            <v-btn
              prepend-icon="mdi-email"
              color="blue-grey-darken-3"
              class="share-btn-item"
              :href="`mailto:?subject=Hey%20check%20this%20out&body=${hostname}events/${event.id}`"
              target="_blank"
            >
              Email
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-sheet>
    <h6 class="text-blue-grey-darken-3 pl-4 mt-4">
      {{ event.title }}
    </h6>
    <v-card-actions>
      <v-btn color="primary" :to="`/events/${event.id}`" nuxt>View</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  computed: {
    hostname() {
      return window.location.href;
    },
  },
  props: ["event"],
};
</script>

<style>
.share-btn {
  border-radius: 9999px;
  top: 16px;
  right: 16px;
}
.share-btn-item {
  color: #fff;
  text-transform: capitalize;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  border-radius: 0;
}
.card-list-item {
  display: flex;
  flex-direction: column;
}
.v-list-item__content {
  display: flex;
  flex-direction: column;
}
</style>
