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
            <img :src='"/assets/images/"+data.logo'>
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
        max-height: 250px;
        max-width: 250px;
    }
</style>