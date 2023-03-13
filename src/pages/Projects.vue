<script>
    import json from '@/assets/json/projects.json'
    import RepoCard from '@/components/RepoCard.vue'
    export default{
        components: {RepoCard},
        data(){
            return {pageJSON: json}
        }
    }
</script>

<template>
    <div v-for="data in pageJSON">
        <h2>{{ data.title }}</h2>
        <hr>
        <div class="card-container">
        <div class="flex-container">
        <div v-for="repo in data.repos">
            <RepoCard :user="repo.user" :repo="repo.name"/>
        </div>
        </div>
        </div>
    </div>
</template>

<style scoped>
    .card-container{
        position: relative;
        right: 30px;
    }
    .flex-container{
        gap: 50px;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 1220px){
        .card-container{
            position: static;
        }
        .flex-container{
            gap: 0;
            flex-wrap: nowrap;
            flex-direction: column !important;
        }
    }
</style>