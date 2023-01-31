<script>
    import RepoCard from '@/components/RepoCard.vue'
    export default{
        components: {RepoCard}
    }
</script>

<template>
    <hr>
    <h2>Web Dev</h2>
    <hr>
    <RepoCard user="SomeGuyNamedJon" repo="martykitchenart"/>
    <RepoCard user="SomeGuyNamedJon" repo="PersonalPage"/>
    <RepoCard user="SomeGuyNamedJon" repo="CompanyEquipment"/>
    <RepoCard user="beastboy241" repo="hotelReservation_CS3773"/>
    <hr>
    <h2>Linux Stuff</h2>
    <hr>
    <RepoCard user="SomeGuyNamedJon" repo="barify"/>
    <RepoCard user="SomeGuyNamedJon" repo="laptop-dotfiles"/>
    <hr>
    <h2>Game Projects</h2>
    <hr>
    <RepoCard user="SomeGuyNamedJon" repo="UntitledCubeRunner"/>
    <RepoCard user="SomeGuyNamedJon" repo="UnfinishedFPS"/>
    <RepoCard user="SomeGuyNamedJon" repo="PolygonDefender"/>
    <RepoCard user="e76971072" repo="Into-the-Unlit-Game"/>  
</template>

<style scoped>

</style>