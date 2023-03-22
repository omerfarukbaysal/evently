<template>
  <v-layout>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
      class="nav-drawer"
    >
      <v-list-item title="Create Event" class="my-2"></v-list-item>
      <v-btn
        icon
        class="nav-drawer-close-btn"
        rounded="0"
        variant="plain"
        @click="drawer = false"
      >
        <v-icon icon="mdi-close-box" size="48"></v-icon>
      </v-btn>
      <v-divider></v-divider>
      <v-sheet class="ma-4">
        <v-form validate-on="submit" @submit.prevent="submit">
          <v-text-field
            label="Title"
            v-model="title"
            :rules="rules"
          ></v-text-field>
          <v-textarea
            label="Description"
            v-model="description"
            :rules="rules"
          ></v-textarea>
          <label for="event-date">Date: </label>
          <input
            type="datetime-local"
            v-model="startDate"
            id="event-date"
            name="startDate"
            :min="new Date().toISOString().slice(0, 16)"
            class="mb-4"
            required
            :rules="rules"
          />
          <v-text-field
            label="Place"
            v-model="place"
            :rules="rules"
          ></v-text-field>
          <v-text-field
            label="Picture URL"
            v-model="picture"
            :rules="rules"
          ></v-text-field>
          <v-btn variant="tonal" type="submit" block> Save </v-btn>
        </v-form>
      </v-sheet>
    </v-navigation-drawer>
    <v-snackbar
      v-model="snackbar"
      timeout="2000"
      location="top"
      :color="snackbarColor"
    >
      {{ snackbarText }}
      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="snackbar = false">
          <v-icon icon="mdi-close"></v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-layout>
</template>

<script>
import axios from "axios";
export default {
  setup() {
    const drawer = ref(false);
    const openDrawer = () => {
      drawer.value = true;
    };
    return {
      openDrawer,
      drawer,
    };
  },
  data() {
    return {
      title: "",
      description: "",
      startDate: "",
      place: "",
      picture: "",
      snackbar: false,
      snackbarText: "Processing...",
      snackbarColor: "",
      rules: [
        (value) => {
          if (value) return true;
          return "This field is required.";
        },
      ],
    };
  },
  methods: {
    async submit(event) {
      const results = await event;
      if (results.valid && this.startDate) {
        try {
          let date = new Date(this.startDate).toISOString(); // the date input is not in iso format, so convert it
          const res = await axios.post("/events", {
            title: this.title,
            description: this.description,
            startDate: date,
            place: this.place,
            picture: this.picture,
          });
          this.updateEvent(res.data);
          this.drawer = false;

          // show success message
          this.snackbarColor = "green";
          this.snackbarText = "Success!";
          this.snackbar = true;

          // reset inputs
          this.title = null;
          this.description = null;
          this.startDate = null;
          this.place = null;
          this.picture = null;
        } catch (err) {
          this.drawer = false;
          this.snackbarColor = "red";
          this.snackbarText = "An error has occurred.";
          this.snackbar = true;
        }
      } else {
        this.snackbarColor = "warning";
        this.snackbarText =
          "Please make sure all fields are filled in correctly.";
        this.snackbar = true;
      }
    },
    updateEvent(newEvent) {
      this.$emit("event-updated", newEvent);
    },
  },
};
</script>

<style>
.nav-drawer-close-btn {
  position: absolute;
  top: 4px;
  right: 4px;
  z-index: 100;
}
.v-navigation-drawer__scrim {
  position: fixed !important;
}
@media screen and (max-width: 960px) {
  .nav-drawer {
    width: 100% !important;
  }
}
@media screen and (min-width: 961px) {
  .nav-drawer {
    width: 30% !important;
  }
}
</style>
