<script>
    import RepoCard from '@/components/RepoCard.vue'
    export default{
        components: {RepoCard}
    }
</script>

<template>
    <h2>Web Development</h2>
    <hr>
    <RepoCard user="SomeGuyNamedJon" repo="someguynamedjon.github.io"/>
    <RepoCard user="SomeGuyNamedJon" repo="martykitchenart"/>
    <RepoCard user="SomeGuyNamedJon" repo="PersonalPage"/>
    <RepoCard user="SomeGuyNamedJon" repo="CompanyEquipment"/>
    <RepoCard user="beastboy241" repo="hotelReservation_CS3773"/>
    <h2>Linux Stuff</h2>
    <hr>
    <RepoCard user="SomeGuyNamedJon" repo="barify"/>
    <RepoCard user="SomeGuyNamedJon" repo="laptop-dotfiles"/>
    <h2>Game Projects</h2>
    <hr>
    <RepoCard user="SomeGuyNamedJon" repo="PyngPong"/>
    <RepoCard user="SomeGuyNamedJon" repo="UntitledCubeRunner"/>
    <RepoCard user="SomeGuyNamedJon" repo="UnfinishedFPS"/>
    <RepoCard user="SomeGuyNamedJon" repo="PolygonDefender"/>
    <RepoCard user="e76971072" repo="Into-the-Unlit-Game"/>  
</template>