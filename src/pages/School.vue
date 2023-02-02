<script>
    import json from '@/assets/json/school.json'
    export default{
        data(){
            return {pageJSON: json}
        }
    }
</script>

<template>
    <div v-for="(data, index) in pageJSON">
        <div class="grid-container">
        <div class="badge">
            <img :src='"/src/assets/images/"+data.logo' height="100">
            <h2>{{ data.school }}</h2>
            <h3>{{ data.degree }}</h3>
            <p>Graduated {{ data.graduated }} | {{ data.gpa }}</p>
        </div>
        <div class="details">
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
    .grid-container {
        margin-inline: 10%;
        border-radius: 5px;
        outline: var(--dark-grey) solid 5px;
        background-color: rgba(0, 0, 0, 0.26);
    }
    .badge{
        position: relative;
        left: 1%;
        top: 7%;
    }
    .details {
        position: relative;
        right: 5%;
        margin-right: 20%;
    }
    @media screen and (max-width: 850px){
        .badge, .details {
            position: static;
            margin-inline: 5%;
        }
    }
</style>