<script setup>
  import NavBar from '@/components/NavBar.vue'
  import SocialLinks from '@/components/SocialLinks.vue'
</script>

<template>
 <div class="PageView">
  <div class="Title">
    <img id="banner" src="@/assets/images/JonathanV.png" height="100"/>
    <span class="Social"><SocialLinks size="25" gap="3"/></span>
  </div>
  <NavBar/>
  <div class="RouterView">
    <RouterView/>
  </div>
  <div class="Footer">
    <p><font-awesome-icon icon="fa-regular fa-copyright" style="height: .9em;"/> 2023 Jonathan Villarreal</p>
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

#banner {
  position: relative;
  left: 3%;
}

.Social {
  width: fit-content;
  position: relative;
  left: 3%;
}

.Footer {
  background-color: var(--purple);
  margin-top: 2%;
}

.Footer > p {
  margin-bottom: 0 !important;
  font-weight: 500;
  padding: 5px;
}

body{
  background: radial-gradient(#333 2px, transparent 1px) 0 0 / 15px 15px; 
  transform-style: preserve-3d;
  transform: translateZ(-1px);
  z-index: -1;
}

@media screen and (max-width: 550px){
  .Social {
    position: static;
    display: inline-block;
  }
  #banner{
    position: static;
    height: auto;
    width: 90vw;
  }
}

</style>