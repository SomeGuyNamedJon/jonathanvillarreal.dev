<script setup>
  import NavBar from '@/components/NavBar.vue'
</script>

<template>
 <div class="PageView">
  <div class="Title">
    <img id="banner" src="@/assets/images/JonathanV.png" height="150"/>
  </div>
  <NavBar/>
  <div class="RouterView">
    <RouterView/>
  </div>
 </div>
</template>

<style>
.Title {
  background-color: var(--deep-purple);
  padding-block: 15px;
}
</style>