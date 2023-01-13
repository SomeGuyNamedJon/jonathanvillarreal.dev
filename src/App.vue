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

.NavBar {
  position: relative;
  width: 100vw;
  height: 2em;
  grid-area: NavBar;
  background-color: #673ab7;
  margin-bottom: 5vh;
}

.NavHeader {
  position: absolute;
  width: fit-content;
  text-align: left;
}

.NavLink {
  display: inline-block;
  text-align: center;
  color: white !important;
  font-weight: bold;
  text-decoration: none;
  width: 10vw;
  height: 100%;
  padding-top: .25em;
  border-radius: 0% 0% 10% 10%;
}

.NavLink:hover{
  background-color: #4f3789;
}

.NavLink.router-link-active {
  font-weight: bolder;
  text-shadow: 2px 2px #444;
  background-color: #845fda;
}
</style>