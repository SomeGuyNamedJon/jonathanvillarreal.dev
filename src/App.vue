<script setup>
  import NavBar from '@/components/NavBar.vue'
</script>

<template>
 <div class="PageView">
  <h1 class="Title">Jonathan Villarreal</h1>
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
  grid-template-rows: min-content min-content 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "Title" 
    "NavBar"
    "RouterView";
}

.Title {
  grid-area: Title;
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
  margin-right: 20%;
}
.school{
  padding-left: 10%;
}
.company{
  padding-left: 25%;
}

@media screen and (max-width: 750px) {
  .details{
    margin-inline: 5%;
  }
  .school, .company{
    padding-left: 0;
  }
  .grid-container{
    grid-template-columns: 1fr;
  }
}
</style>