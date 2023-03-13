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
    <div v-if="repoData == 'ERR'" class="card-dull">
        <h2 style="text-align: center; color: #f00f0f">ERROR: REPOSITORY NOT FOUND</h2>
    </div>
    <div v-else>
        <a :href="repoData.html_url" target="_blank">
            <div class="card">
            <p class="name">{{ repoData.full_name }}</p>

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
                    <font-awesome-icon icon="fa-regular fa-star"/> &nbsp; {{ repoData.stargazers_count }}
                </div>
                <div class="count" v-if="repoData.subscribers_count > 0">
                    <font-awesome-icon icon="fa-regular fa-eye"/> &nbsp; {{ repoData.subscribers_count }}
                </div>
                <div class="count" v-if="repoData.forks_count > 0">
                    <font-awesome-icon icon="code-fork"/> &nbsp; {{ repoData.forks_count }}
                </div>
            </span>
            </div>
        </a>
    </div>
    
</template>

<style scoped>
    .card, .card-dull {
        width: 500px;
        height: 100%;
        position: relative;
        outline: rgba(0, 0, 0, 0.25) solid 6px;
        outline-offset: -6px;
        background-color: rgba(0, 0, 0, 0.45);
        text-align: left;
        border-radius: 10px;
        margin-inline: 5%;
        margin-bottom: 50px;
        padding: 2em;
        overflow: hidden;
        transition: all 150ms ease;
    }
    .card:before{
        content: "";
        border-radius: inherit;
        background-image: linear-gradient(
            165deg,
            transparent 0% 65%,
            var(--purple) 100%
            );
        background-position: 0% 0%;
        background-size: 300% 300%;
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0px;
        top: 0px;
        transition: background-position 350ms ease;
        z-index: -1;
    }
    .card:hover {
        margin-inline: 4.8%;
        padding-block: 2.2em; 
    }
    .card:hover > .name {
        text-decoration: underline;
    }
    .card:hover:before {
        background-position: 90% 90%;
        transform: scale(1.5, 1.5);
    }

    a{
        text-decoration: none !important;
    }
    .name{
        font-size: 1.2em;
        display: inline-block;
        margin: 0 auto;
    }
    .desc{
        color: #f0f0f0 !important;
        margin-inline-end: 1%;
    }
    .lang{
        color: #f0f0f0 !important;
        margin: 0 auto;
        display: inline-block;
    }
    .count {
        float: right;
        color: #f0f0f0 !important;
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

    @media screen and (max-width: 1220px) {
        .card, .card-dull, .card:hover{
            width: 70vw;
            margin-inline: auto;
        } 
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
            overflow: hidden;
        }
    }
</style>