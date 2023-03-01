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
            <img :src='"/assets/images/"+data.logo' height="200">
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
    .badge{
        z-index: 10;
    }
    .details {
        width: 75%;
    }
    @media screen and (max-width: 850px){
        .badge, .details {
            margin-inline: 5%;
            width: auto;
        }
        img{
            height: 200px;
            padding-bottom: 25px;
        }
    }
</style>