<script>
    import { ref } from 'vue'
    import GithubAPI from '@/services/GithubAPI'
    export default {
        props: {
            repo: {type: String, required: true}
        },
        setup(props){
            const data = ref('')
            const loadRepo = async() => {
                try{
                    const response = await GithubAPI.getRepo(props.repo)
                    data.value = response.data
                }catch(err){
                    console.log(props)
                    console.log(err)
                }
            }

            loadRepo()

            return { data }
        }
    }
</script>

<template>
    <img :src="data.owner.avatar_url" height="100"/>
    <p>{{ data.full_name }}</p>
    <p>{{ data.description }}</p>
</template>

<style scoped>

</style>