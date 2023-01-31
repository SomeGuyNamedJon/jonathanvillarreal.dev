<script>
    import colors from '@/assets/json/colors.json'
    import { ref } from 'vue'
    import GithubAPI from '@/services/GithubAPI'
    export default {
        props: {
            user: {type: String, required: true},
            repo: {type: String, required: true}
        },
        setup(props){
            const repoData = ref('')
            const contributorData = ref('')
            const url = props.user+'/'+props.repo

            const loadRepo = async() => {
                try{
                    const response = await GithubAPI.getRepo(url)
                    repoData.value = response.data
                }catch(err){
                    console.log(err)
                    repoData.value = 'ERR'
                }
            }

            const loadContributors = async() => {
                try{
                    const response = await GithubAPI.getContributors(url)
                    contributorData.value = response.data
                }catch(err){
                    console.log(err)
                }
            }

            loadRepo()
            loadContributors()

            return { repoData, contributorData }
        },
        data(){
            return { colorsJSON: colors }
        }
    }
</script>

<template>
    <div v-if="repoData == 'ERR'" class="card">
        <h2 style="text-align: center; color: #f00f0f">ERROR: REPOSITORY NOT FOUND</h2>
    </div>
    <div v-else class="card">
        <a class="name" :href="repoData.html_url" target="_blank">{{ repoData.full_name }}</a>

        <div class="contributorBlock">
        <a v-for="contributor in contributorData" :href="contributor.html_url" target="_blank">
            <img class="dot contributor" :src="contributor.avatar_url" :title="contributor.login"/>
        </a>
        </div>

        <p class="desc">{{ repoData.description }}</p>
        <p class="lang">
            <span class="dot" :style="'background-color: '+colorsJSON[repoData.language]"></span>
            {{ repoData.language }}
        </p>
        
        <div class="count" v-if="repoData.stargazers_count > 0">
            <font-awesome-icon icon="star"/> &nbsp; {{ repoData.stargazers_count }}
        </div>
        <div class="count" v-if="repoData.watchers_count > 0">
            <font-awesome-icon icon="eye"/> &nbsp; {{ repoData.watchers_count }}
        </div>
        <div class="count" v-if="repoData.forks_count > 0">
            <font-awesome-icon icon="code-fork"/> &nbsp; {{ repoData.forks_count }}
        </div>
    </div>
    
</template>

<style scoped>
    .card {
        text-align: left;
        background-color: #1a1a1a;
        border-radius: 5px;
        margin-inline: 50px;
        margin-bottom: 50px;
    }
    .lang{
        margin: 0 auto;
        display: inline-block;
    }
    .count {
        float: right;
        margin-inline-start: 3vw;
    }
    .dot {
        position: relative;
        margin-inline-end: 5px;
        height: 25px;
        width: 25px;
        border-radius: 50%;
        display: inline-block;
    }
    .lang > .dot{
        top: 4px;
    }

    .contributorBlock {
        float: right;
    }

    .contributor:hover{
        outline: #a0a0a0 solid 2px;
    }

    @media screen and (max-width: 640px) { 
        .contributorBlock{
            margin-block: 20px;
            display: flex;
            flex-wrap: wrap;
            width: 100%; 
        }
    }
</style>