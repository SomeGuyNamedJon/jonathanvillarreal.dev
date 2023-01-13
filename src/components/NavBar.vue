
<script>
    import json from '@/assets/navbar.json'
    import NavLink from '@/components/NavLink.vue'
    
    export default{
        data(){
            return{
                navJSON: json
            }
        }, 
        components: { NavLink }
    }
</script>

<template>
    <div class="NavBar">
        <div class="NavHeader">Jonathan Villarreal</div>
        <NavLink v-for="data in navJSON" :page="data.page" :icon="data.icon" :name="data.name"/>
    </div>
</template>


