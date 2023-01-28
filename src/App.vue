<script setup>
  import NavBar from '@/components/NavBar.vue'
</script>

<template>
 <div class="PageView">
  <NavBar/>
  <div class="RouterView">
    <RouterView/>
  </div>
 </div>
</template>

<style>
.PageView {
  box-sizing: border-box;
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: 
    "NavBar"
    "RouterView";
}

.RouterView {
  grid-area: RouterView;
}

.PageTitle {
  grid-area: PageTitle;
  color:#4f3789;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-gap: 9px;
  padding: 9px;
}
.details{
  text-align: justify;
  margin-inline: 5%;
}

@media screen and (max-width: 640px) {
  .grid-container{
    grid-template-columns: 1fr;
  }
}
</style>