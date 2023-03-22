<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator color="#1eadef" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import axios from "axios";
const config = useRuntimeConfig();
axios.defaults.baseURL = config.apiUrl;
axios.defaults.headers.post["Content-Type"] = "application/json";
</script>
