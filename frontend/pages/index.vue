<template>
  <v-row class="mx-8">
    <v-col cols="12" md="8">
      <v-container>
        <v-row>
          <template v-for="event in eventList">
            <v-col cols="12" md="6">
              <event-card :event="event" />
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-col>
    <v-col cols="12" md="4">
      <v-sheet class="pa-2 ma-2 mt-4 highlight-container">
        <div class="text-blue-grey-darken-3">Today's Highlights</div>
        <template v-for="event in highlightedEventList">
          <template v-if="highlightedEventList.length > 0">
            <event-highlight-card :event="event" />
          </template>
          <template v-else> <span>Not Found</span> </template>
        </template>
      </v-sheet>
    </v-col>
  </v-row>
  <v-btn icon color="primary" class="add-btn" @click="openDrawer">
    <v-icon icon="mdi-plus"></v-icon>
  </v-btn>
  <event-create-form ref="drawerComponent" @event-updated="prependEvent" />
</template>

<script>
import axios from "axios";
export default {
  async setup() {
    useHead({
      titleTemplate: "Explore | Evently",
    });
    const config = useRuntimeConfig();
    let eventList = ref([]);
    let highlightedEventList = ref([]);

    // Get Events
    try {
      const { data } = await axios.get(`${config.apiUrl}/events`);
      eventList = ref(data);
    } catch (err) {}

    // function to add a new event to the beginning of the event list
    const prependEvent = (newEvent) => {
      eventList.value = [newEvent, ...eventList.value];
    };

    // Get Highlighted Events
    try {
      const { data } = await axios.get(
        `${config.apiUrl}/events?highlighted=true`
      );
      highlightedEventList = ref(data);
    } catch (err) {}

    const drawerComponent = ref(null);
    const openDrawer = () => {
      drawerComponent.value.openDrawer();
    };
    return {
      prependEvent,
      eventList,
      highlightedEventList,
      openDrawer,
      drawerComponent,
    };
  },
};
</script>

<style>
.add-btn {
  position: fixed;
  bottom: 16px;
  right: 16px;
}
.highlight-container {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
</style>
