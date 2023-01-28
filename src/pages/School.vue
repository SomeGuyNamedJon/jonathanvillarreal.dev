<script>
    import json from '@/assets/json/school.json'
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
            <h2>{{ data.school }}</h2>
            <h3>{{ data.degree }}</h3>
            <p>Graduated {{ data.graduated }} | {{ data.gpa }}</p>
        </div>
        <div class="details">
            <dl>
            <div v-for="(value, name) in data.blurbs">
                <dt>{{ name }}</dt>
                <dd>{{ value }}</dd>
            </div>
            </dl> 
        </div>
    </div>
</template>

<style scoped>

</style>