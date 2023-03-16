<script>
    import json from '@/assets/json/work.json'
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
            <img :src='"/assets/images/"+data.logo' :alt="data.imgALT" height="500">
        </div>
        <div class="details" @mouseenter="cssVars($event)" @mousemove="cssVars($event)" @touchmove="cssVars($event)" @wheel="cssVars($event)">
            <h2>{{ data.company }}</h2>
            <p>{{ data.startdt }} - {{ data.enddt }} | {{ data.location }}</p>
            <dl>
                <dt>{{ data.title }}</dt>
                <dd>{{ data.duties }}</dd>
            </dl>
        </div>
        </div>
        <hr v-if="index != pageJSON.length - 1">
    </div>
</template>

<style scoped>
    img {
        max-height: 250px;
        max-width: 300px;
        object-fit: contain;
    }
</style>