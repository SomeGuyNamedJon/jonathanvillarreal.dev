<script>
    import json from '@/assets/json/school.json'
    export default{
        data(){
            return {pageJSON: json}
        },
        methods:{
            cssVars(e){
                const {currentTarget: target} = e

                const rect = target.getBoundingClientRect(),
                        x = e.clientX - rect.left,
                        y = e.clientY - rect.top
                
                target.style.setProperty("--relative-x", x+'px')
                target.style.setProperty("--relative-y", y+'px')
            }
        }
    }
</script>

<template>
    <div class="content" v-for="(data, index) in pageJSON">
        <div class="flex-container">
        <div class="badge">
            <img :src='"/assets/images/"+data.logo'>
        </div>
        <div class="details" @mouseenter="cssVars($event)" @mousemove="cssVars($event)" @wheel="cssVars($event)">
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
        max-width: 350px;
        max-height: 200px;
    }
</style>