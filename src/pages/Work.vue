<script>
    import json from '@/assets/json/work.json'
    export default{
        data(){
            return {pageJSON: json}
        }
    }
</script>

<template>
    <div class="grid-container" v-for="data in pageJSON">
        <div class="company">
            <img :src='"/src/assets/images/"+data.logo' height="100">
            <h2>{{ data.company }}</h2>
            <p>{{ data.startdt }} - {{ data.enddt }} | {{ data.location }}</p>
        </div>
        <div class="details">
            <dl v-for="(value, name) in data.blurbs">
                <dt>{{ name }}</dt>
                <dd>{{ value }}</dd>
            </dl>
        </div>
    </div>
</template>

<style scoped>

</style>