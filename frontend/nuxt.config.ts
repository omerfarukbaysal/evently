import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_BACKEND_URL,
    }
  },
    css: [
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css',
    ],
    app: {
      head:{
        "title":"Evently",
        meta:[
          {"description":"Discover unlimited online and offline events that you want to join!"}
        ],
        link:[{
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Rubik&display=swap",
        }]
      },
    },
    build: {
      transpile: ['vuetify'],
    },
    vite: {
      define: {
        'process.env.DEBUG': false,
      },
    },
  })
