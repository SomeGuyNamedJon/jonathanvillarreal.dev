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
        
        <span class="countBlock">
            <div class="count" v-if="repoData.stargazers_count > 0">
                <font-awesome-icon icon="star"/> &nbsp; {{ repoData.stargazers_count }}
            </div>
            <div class="count" v-if="repoData.subscribers_count > 0">
                <font-awesome-icon icon="eye"/> &nbsp; {{ repoData.subscribers_count }}
            </div>
            <div class="count" v-if="repoData.forks_count > 0">
                <font-awesome-icon icon="code-fork"/> &nbsp; {{ repoData.forks_count }}
            </div>
        </span>
    </div>
    
</template>

<style scoped>
    .card {
        text-align: left;
        background-image: linear-gradient(160deg, var(--dark-grey), var(--dark-purple));
        outline: #333 solid 5px;
        border-radius: 5px;
        margin-inline: 5%;
        margin-bottom: 50px;
        padding: 2em;
    }
    .name{
        font-family: var(--alt-font); 
    }
    .lang{
        margin: 0 auto;
        display: inline-block;
    }
    .count {
        float: right;
        margin-inline-start: 2vw;
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
        .contributorBlock, .countBlock{
            margin-block: 20px;
            display: flex;
            flex-wrap: wrap;
            width: 100%; 
        }
        .count {
            margin-inline-start: 0;
            margin-inline-end: 5vw;
        }
    }

    @media screen and (max-width: 520px) {
        .name{
            white-space: nowrap;
            text-overflow: ellipsis;
            width: 240px;
            display: block;
            overflow: hidden;
        }
    }
</style>