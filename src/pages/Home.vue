<script>
    import json from '@/assets/json/home.json'
    export default{
        data(){
            return {pageJSON: json}
        }
    }
</script>

<template>
    <div class="content" v-for="(data, index) in pageJSON">
        <div class="flex-container">
        <div class="badge">
            <img :src='"/assets/images/"+data.picture' :id="data.imgID">
        </div>
        <div class="details">
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
        outline: var(--dark-grey) solid 5px;
    }
    #pfetch{
        padding-top: 15px;
        padding-inline-end: 10px;
        max-width: 475px !important;
        background: linear-gradient(
            165deg,
            transparent 0% 0%,
            rgba(14, 14, 14, 0.75) 30%,
            rgba(26, 14, 43, 0.80) 60%,
            var(--deep-dark-purple) 100%
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