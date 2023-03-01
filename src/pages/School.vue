<script>
    import json from '@/assets/json/school.json'
    export default{
        data(){
            return {pageJSON: json}
        }
    }
</script>

<template>
    <div class="content" v-for="(data, index) in pageJSON">
        <div class="flex-container">
        <div class="badge">
            <img :src='"/assets/images/"+data.logo'>
        </div>
        <div class="details">
            <h2>{{ data.school }}</h2>
            <h3>{{ data.degree }}</h3>
            <p>Graduated {{ data.graduated }} | {{ data.gpa }}</p>
            <dl v-for="(value, name) in data.blurbs">
                <dt>{{ name }}</dt>
                <dd>{{ value }}</dd>
            </dl>
        </div>
        </div>
        <hr v-if="index != pageJSON.length - 1">
    </div>
</template>

<style scoped>
    img {
        -webkit-filter: drop-shadow(5px 5px 0 var(--dark-grey));
        filter: drop-shadow(5px 5px 0 var(--dark-grey));
        max-width: 350px;
        max-height: 200px;
    }
</style>