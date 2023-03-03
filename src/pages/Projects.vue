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
        <div class="content" v-for="repo in data.repos">
            <div class="flex-container">
                <div class="about">PLACEHOLDER</div>
                <RepoCard :user="repo.user" :repo="repo.name"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .about{
        width: 25vw;
    }

    @media screen and (max-width: 850px){
        .about{
            width: 75vw;
            padding-bottom: 25px;
        }
    }
</style>