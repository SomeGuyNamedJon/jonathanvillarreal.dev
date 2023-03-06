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
            <img :src='"/assets/images/"+data.picture' :id="data.imgID">
        </div>
        <div class="details" @mouseenter="cssVars($event)" @mousemove="cssVars($event)" @wheel="cssVars($event)">
            <h2>{{ data.title }}</h2>
            <p>{{ data.blurb }}</p>
        </div>
        </div>
        <hr v-if="index != pageJSON.length - 1">
    </div>
</template>

<style scoped>
    #face{
        position: relative;
        left: 5%;
    }

    #face, #diploma, #pfetch{
        border-radius: 5px;
    }
    #pfetch{
        padding-top: 15px;
        padding-inline-end: 10px;
        max-width: 475px;
        outline: var(--deep-purple) solid 3px;
        background: linear-gradient(
            165deg,
            transparent 0% 0%,
            rgba(14, 14, 14, 0.2) 30%,
            rgba(73, 36, 136, 0.4) 60%,
            var(--dark-purple) 100%
            );
    }

    .badge, .details{
        width: 50%;
    }

    img{
        max-width: 550px;
        max-height: 400px;
    }
    
    @media screen and (max-width: 1150px){
        .badge{
            width: 100%;
        }
        #face, #diploma, #pfetch {
            position: static;
            height: auto;
            max-width: 75%;
        } 
    }
</style>