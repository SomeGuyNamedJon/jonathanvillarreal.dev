<script setup>
  import NavBar from '@/components/NavBar.vue'
  import SocialLinks from '@/components/SocialLinks.vue'
</script>

<template>
  <div class="background-overlay" ref="target" :style="'--mouse-x: '+x+'px; --mouse-y: '+y+'px'"></div>
  <div class="PageView">
    <div class="Title">
      <img id="banner" src="@/assets/images/JonathanV.png" height="100"/>
      <span class="Social"><SocialLinks size="25" gap="3" color="var(--light-purple)"/></span>
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
  position: relative;
  padding-block: 15px;
  background-image: linear-gradient(
            180deg,
            rgba(0,0,0,0.25) 0% 0%,
            var(--deep-purple) 95%
            );
}

.Title::before {
  content: "";
  position: absolute;
  height: 10px;
  width: 100%;
  background-color: var(--deep-purple);
  top: 95%;
  left: 0;
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
  -webkit-mask-image: radial-gradient(circle at var(--mouse-x) var(--mouse-y), black, transparent 100px, transparent);
  mask-image: radial-gradient(circle at var(--mouse-x) var(--mouse-y), black, transparent 100px, transparent);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat; 
  background: radial-gradient(var(--deep-purple) 3px, transparent 1px) 0 0 / 15px 15px; 
  transform-style: preserve-3d;
  transform: translateZ(-1px);
  z-index: -2;
}

.contact-form, .details{
  position: relative;
  border-radius: 10px;
  outline: rgba(0, 0, 0, 0.25) solid 6px;
  outline-offset: -6px;
  background-color: rgba(0, 0, 0, 0.45);
}

.contact-form::before, .details::before{
  --size: 100%;
  opacity: 0;
  transition: opacity 500ms;
  content: "";
  height: 100%;
  width: 100%;
  left: 0px;
  top: 0px;
  position: absolute;
  background: radial-gradient(circle at var(--relative-x) var(--relative-y), rgba(103, 58, 183, .75), transparent var(--size));
  z-index: -5;
  border-radius: inherit;
}

.contact-form::before{
  --size: 50% !important;
}

.contact-form:hover::before, .details:hover::before{
  opacity: .25 !important;
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