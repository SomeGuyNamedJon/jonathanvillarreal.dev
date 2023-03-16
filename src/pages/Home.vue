<script>
    import json from '@/assets/json/home.json'
    export default{
        data(){
            return {pageJSON: json}
        },
        methods:{
            cssVars(e){
                const {currentTarget: target} = e

                const rect = target.getBoundingClientRect(),
                        x = e.clientX - rect.left,
                        y = e.clientY - rect.top
                
                target.style.setProperty("--relative-x", x+'px')
                target.style.setProperty("--relative-y", y+'px')
            }
        }
    }
</script>

<template>
    <div class="content" v-for="(data, index) in pageJSON">
        <div class="flex-container">
        <div class="badge">
            <img :src='"/assets/images/"+data.picture' :id="data.imgID" :alt="data.imgALT" height="500">
        </div>
        <div class="details" @mouseenter="cssVars($event)" @mousemove="cssVars($event)" @touchmove="cssVars($event)" @wheel="cssVars($event)">
            <h2>{{ data.title }}</h2>
            <p>{{ data.blurb }}</p>
        </div>
        </div>
        <hr v-if="index != pageJSON.length - 1">
    </div>
</template>

<style scoped>
    .badge, .details{
        width: 50%;
    }

    img{
        max-width: 550px;
        max-height: 500px;
    }
    .badge > img{
        border-radius: 10px;
        -webkit-filter: none !important;
        filter: none !important;
    }

    #face{
        border-radius: 50%;
        position: relative;
        outline: rgba(0, 0, 0, 0.1) solid 12px;
        outline-offset: -12px;
        left: 5%;
        height: 425px;
        width: 425px;
        object-fit: cover;
        object-position: -135px;
        transition: border-radius .25s ease, width .5s ease-out;
    }
    #diploma{
        max-height: 400px;
        outline: var(--dark-purple) double 10px;
        outline-offset: -8px;
    }
    #pfetch{
        padding-top: 15px;
        padding-inline-end: 10px;
        max-height: 250px;
        outline: var(--deep-purple) solid 5px;
        background: linear-gradient(
            165deg,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(73, 36, 136, 0.6) 60%,
            var(--dark-purple) 100%
            );
    }

    @media screen and (max-width: 1150px){
        .badge{
            width: 100%;
        }
        #face {
            object-position: 0;
            border-radius: 100px;
            width: 75% !important;
        }
        #face, #diploma, #pfetch {
            position: static;
            height: auto;
            max-width: 75%;
        } 
    }
</style>