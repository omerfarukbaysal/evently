<template>
  <v-container class="mt-16 pa-0" fluid>
    <logo class="mx-8" />
    <slot />
    <footer>evently 2023</footer>
    <div class="bg-img"></div>
  </v-container>
</template>

<style>
.bg-img {
  background-color: #e5e5f7;
  opacity: 0.1;
  background-image: repeating-radial-gradient(
      circle at 0px 0px,
      transparent 0px,
      rgb(229, 229, 247) 10px
    ),
    repeating-linear-gradient(rgba(230, 239, 247, 0.2), rgba(69, 175, 247, 0.2));
  opacity: 1;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  min-height: 100%;
  z-index: -1;
}
* {
  font-size: 100%;
  font-family: "Rubik", sans-serif !important;
}
a {
  text-decoration: none;
  color: initial;
}
footer {
  display: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  padding-top: 16px;
  padding-bottom: 16px;
}
</style>
