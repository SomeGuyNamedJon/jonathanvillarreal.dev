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
  grid-template-rows: .25fr 4fr;
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
</style>