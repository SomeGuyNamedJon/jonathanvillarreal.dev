<script>
    import json from '@/assets/json/work.json'
    export default{
        data(){
            return {pageJSON: json}
        }
    }
</script>

<template>
    <div v-for="(data, index) in pageJSON">
        <div class="grid-container">
        <div class="company">
            <img :src='"/src/assets/images/"+data.logo' height="100">
            <h2>{{ data.company }}</h2>
            <p>{{ data.startdt }} - {{ data.enddt }} | {{ data.location }}</p>
        </div>
        <div class="details">
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
    .details {
        margin-right: 35%;
    }
    @media screen and (max-width: 750px){
        .details {
            margin-inline: 5%;
        }
    }
</style>