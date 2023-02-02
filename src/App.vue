<script setup>
  import NavBar from '@/components/NavBar.vue'
</script>

<template>
 <div class="PageView">
  <div class="Title">
    <img id="banner" src="@/assets/images/JonathanV.png" height="100"/>
  </div>
  <NavBar/>
  <div class="RouterView">
    <RouterView/>
  </div>
 </div>
</template>

<style>
.PageView {
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 1px;
}

.Title {
  background-color: var(--deep-purple);
  padding-block: 15px;
}

body{
  background: radial-gradient(#333 2px, transparent 1px) 0 0 / 15px 15px; 
  transform-style: preserve-3d;
  transform: translateZ(-1px);
  z-index: -1;
}


</style>