<script>
    import { ref } from 'vue'
    import GithubAPI from '@/services/GithubAPI'
    export default {
        setup(){
            const data = ref('')
            const loadRepo = async() => {
                try{
                    const response = await GithubAPI.getRepo('/laptop-dotfiles')
                    data.value = response
                }catch(err){
                    console.log(err)
                }
            }

            loadRepo()

            return { data }
        }
    }
</script>

<template>
    <p>{{ data }}</p>
</template>

<style scoped>

</style>