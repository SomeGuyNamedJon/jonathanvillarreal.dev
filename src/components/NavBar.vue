
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
    <div class="navContainer" :class="{shown: checked}">
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
.navContainer{
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 999;
}

.navBar {
    width: 100vw;
    height: 2em;
    grid-area: NavBar;
    background-color: var(--purple);
    margin-bottom: 5vh;
}

.navLink {
    display: inline-block;
    text-align: center;
    color: white !important;
    font-weight: bold;
    text-decoration: none;
    min-width: fit-content;
    height: 100%;
    padding-top: .35em;
    padding-inline: 1em;
}

.navLink:hover{
    background-color: var(--dark-purple);
}

.navLink.router-link-active {
    font-weight: bolder;
    background-color: var(--deep-purple);
}
.coverBar {
    display: flex;
    background-color: var(--deep-purple);
    flex-direction: row;
    justify-content: space-between;
    height: 0px;
    visibility: collapse;
    width: 100vw;
}
.currentPage {
    position: relative;
    left: 15px;
    padding-top: 3px;
    color: var(--off-white) !important;
    font-size: larger;
    font-weight: bold;
    line-height: 30px;
    float: center;
}
.hamburgerMenu {
    background-color: var(--dark-purple);
    position: relative;
    left: 50px;
    margin-left: auto;
    font-size: 20px;
    color: var(--off-white);
    line-height: 30px;
    cursor: pointer;
    display: none;
    border-radius: 100px;
    width: 100px;
    height: 30px;
}
#MenuIcon {
    position: relative;
    right: 25%;
    padding-top: 4px;
}
#check{
    display: none;
}

@media screen and (max-width: 825px) {
    .coverBar{
        visibility: visible;
        height: 30px;
        padding-block: 5px;
    }
    .navBar {
        visibility: collapse;
        height: 0px;
    }
    .navLink {
        display: flex;
        text-align: justify;
        padding-inline-start: 0%;
        padding-block: 5px;
        visibility: collapse;
        flex-direction: row;
    }
    .hamburgerMenu{
        display: block;
        position: relative;
        top: 5px;
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
    .icon{
        min-width: 45px;
    } 
}
</style>
