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
            const data = ref('')
            const loadRepo = async() => {
                try{
                    let url = props.user+'/'+props.repo
                    const response = await GithubAPI.getRepo(url)
                    data.value = response.data
                }catch(err){
                    console.log(props)
                    console.log(err)
                    data.value = 'ERR'
                }
            }

            loadRepo()

            return { data }
        },
        data(){
            return { colorsJSON: colors }
        }
    }
</script>

<template>
    <div v-if="data == 'ERR'" class="card">
        <h2 style="text-align: center; color: #f00f0f">ERROR: REPOSITORY NOT FOUND</h2>
    </div>
    <div v-else class="card">
        <a class="name" :href="data.html_url">{{ data.full_name }}</a>
        <p class="desc">{{ data.description }}</p>
        <p class="lang">
            <span class="dot" :style="'background-color: '+colorsJSON[data.language]"></span>
            {{ data.language }}
        </p>
        
        <div class="count" v-if="data.stargazers_count > 0">
            <font-awesome-icon icon="star"/> &nbsp; {{ data.stargazers_count }}
        </div>
        <div class="count" v-if="data.watchers_count > 0">
            <font-awesome-icon icon="eye"/> &nbsp; {{ data.watchers_count }}
        </div>
        <div class="count" v-if="data.forks_count > 0">
            <font-awesome-icon icon="code-fork"/> &nbsp; {{ data.forks_count }}
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
        top: 4px;
        margin-inline-end: 5px;
        height: 25px;
        width: 25px;
        border-radius: 50%;
        display: inline-block;
    }
</style>