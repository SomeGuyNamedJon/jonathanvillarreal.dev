
<script>
    import json from '@/assets/json/navbar.json'
    import NavLink from '@/components/NavLink.vue'
    import { computed } from '@vue/reactivity'
    import { useRoute } from 'vue-router'
    
    export default{
        setup(){
            const route = useRoute();
            const currentPage = computed(() => route.name);
            const pages = Object.keys(json);
            return {currentPage, pages}
        },
        data(){
            return{
                navJSON: json,
                checked: ''
            }
        }, 
        components: { NavLink }
    }
</script>

<template>
    <div :class="{shown: checked}">
    <div class="coverBar">
        <div v-if="!checked" class="currentPage">
            <div v-if="currentPage && pages.includes(currentPage)">
            <font-awesome-icon :icon="navJSON[currentPage].icon"/> &nbsp; {{navJSON[currentPage].name}}
            </div>
            <div v-else-if="!pages.includes(currentPage)">
                Uh oh! @.@"
            </div>
            <div v-else>
            <font-awesome-icon :icon="navJSON['home'].icon"/> &nbsp; {{navJSON['home'].name}}
            </div>
        </div>
        
        <input v-model="checked" type="checkbox" id="check"/>
        <label for="check" class="hamburgerMenu">
            <font-awesome-icon id="MenuIcon" icon="chevron-left"/>
        </label>
    </div>
    <div class="navBar">
        <NavLink v-for="data in navJSON" :page="data.page" :icon="data.icon" :name="data.name"/>
    </div>
    </div>
</template>

<style>
.navBar {
    width: 100vw;
    height: 2em;
    grid-area: NavBar;
    background-color: #673ab7;
    margin-bottom: 5vh;
}

.navLink {
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

.navLink:hover{
    background-color: #4f3789;
}

.navLink.router-link-active {
    font-weight: bolder;
    text-shadow: 2px 2px #444;
    background-color: #845fda;
}
.coverBar {
    display: flex;
    background-color: #673ab7;
    flex-direction: row;
    justify-content: space-between;
    height: 0px;
    visibility: collapse;
    width: 100vw;
}
.currentPage {
    position: relative;
    left: 5%;
    color:#f0f0f0 !important;
    font-size: larger;
    font-weight: bold;
    line-height: 30px;
    float: center;
}
.hamburgerMenu {
    position: relative;
    left: 50px;
    margin-left: auto;
    font-size: 20px;
    color: #f0f0f0;
    line-height: 30px;
    cursor: pointer;
    display: none;
    border-radius: 100px;
    width: 100px;
    height: 30px;
    background-color: var(--darkred);
}
#MenuIcon {
    position: relative;
    right: 25%;
}
#check{
    display: none;
}

@media screen and (max-width: 640px) {
    .coverBar{
        visibility: visible;
        height: 30px;
    }
    .navBar {
        visibility: collapse;
        height: 0px;
    }
    .navLink {
        display: flex;
        text-align: justify;
        padding-inline-start: 5%;
        visibility: collapse;
        flex-direction: row;
    }
    .hamburgerMenu{
        display: block;
    }
    #MenuIcon {
        transition: all .5s;
    }
    .shown #MenuIcon {
        rotate: -90deg;
    }

    .shown .navLink {
        width: 100%;
        font-size: larger;
        visibility: visible;
    }
    .shown .coverBar {
        height: 0px;
    }
    .shown .navBar {
        display: block;
        height: max-content;
        padding: 0px 0 0px 0;
        visibility: visible;
    }
    .shown.navContainer{
        height: max-content;
    } 
}
</style>
