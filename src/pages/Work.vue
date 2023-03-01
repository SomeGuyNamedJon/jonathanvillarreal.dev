<script>
    import json from '@/assets/json/work.json'
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
            <img :src='"/assets/images/"+data.logo' width="250">
        </div>
        <div class="details">
            <h2>{{ data.company }}</h2>
            <p>{{ data.startdt }} - {{ data.enddt }} | {{ data.location }}</p>
            <dl>
                <dt>{{ data.title }}</dt>
                <dd>{{ data.duties }}</dd>
            </dl>
        </div>
        </div>
        <hr v-if="index != pageJSON.length - 1">
    </div>
</template>

<style scoped>
    img {
        -webkit-filter: drop-shadow(5px 5px 0 var(--dark-grey));
        filter: drop-shadow(5px 5px 0 var(--dark-grey));
    }
    .badge{
        z-index: 10;
    }
    .details {
        width: 75%;
    } 
    @media screen and (max-width: 850px){
        .badge, .details {
            margin-inline: 5%;
            width: auto;
        }
        img{
            padding-bottom: 25px;
        }
    }
</style>