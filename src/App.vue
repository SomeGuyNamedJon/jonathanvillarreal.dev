<script setup>
  import NavBar from '@/components/NavBar.vue'
</script>

<template>
 <div class="PageView">
  <div class="PageTitle">
    <h1>Jonathan Villarreal</h1>
  </div>
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
  grid-template-rows: .5fr .25fr 4fr;
  grid-template-columns: 1fr;
  grid-template-areas: 
    "PageTitle"
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
  width: 100vw;
  grid-area: NavBar;
  display: block;
  background-color: #673ab7;
  border-radius: 25px;
}

.NavLink {
  display: inline-block;
  text-align: center;
  color: white !important;
  font-weight: bold;
  text-decoration: none;
  width: 10vw;
  padding: .125vw;
  margin-inline-end: .5vw;
  border-radius: 25px;
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