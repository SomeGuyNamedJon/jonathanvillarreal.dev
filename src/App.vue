<script setup>
  import NavBar from '@/components/NavBar.vue'
  import SocialLinks from '@/components/SocialLinks.vue'
</script>

<template>
  <div class="background-overlay" ref="target" :style="'--mouse-x: '+x+'px; --mouse-y: '+y+'px'"></div>
  <div class="PageView">
    <div class="Title">
      <img id="banner" src="@/assets/images/JonathanV.png" height="100"/>
      <span class="Social"><SocialLinks size="25" gap="3" color="#a0a0a0"/></span>
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

<script>
  import { useMouseInElement } from '@vueuse/core'
  import { ref } from 'vue'

  const target = ref(null)
  const {x, y} = useMouseInElement(target)
</script>

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

.background-overlay{
  position: absolute;
  width: 100vw;
  height: 100vh;
  -webkit-mask-image: radial-gradient(circle at var(--mouse-x) var(--mouse-y), black, transparent 10%, transparent);
  mask-image: radial-gradient(circle at var(--mouse-x) var(--mouse-y), black, transparent 10%, transparent);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat; 
  background: radial-gradient(var(--deep-purple) 3px, transparent 1px) 0 0 / 15px 15px; 
  transform-style: preserve-3d;
  transform: translateZ(-1px);
  z-index: -2;
}

.contact-form, .details{
  position: relative;
}

.contact-form::before, .details::before{
  opacity: 0;
  transition: opacity 500ms;
  content: "";
  height: 100%;
  width: 100%;
  left: 0px;
  top: 0px;
  position: absolute;
  background: radial-gradient(circle at var(--relative-x) var(--relative-y), var(--grey), transparent);
  z-index: -5;
}

.contact-form:hover::before, .details:hover::before{
  opacity: 1 !important;
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