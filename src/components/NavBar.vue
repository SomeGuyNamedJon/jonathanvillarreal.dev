<script>
    import json from '../assets/navbar.json'
    export default{
        data(){
            return{
                myJson: json
            }
        }
    }
</script>

<template>
    <div class="navBar">
        <a class="navButton" href="#" v-for="data in myJson" :id="data.name">
            <font-awesome-icon :icon="data.icon"/><br>{{data.name}}
        </a>
    </div>
</template>

<style scoped>
.navButton {
    display: inline-block;
    text-align: center;
    color: azure;
    font-weight: bold;
    text-decoration: none;
    width: 10vw;
    border-radius: 25px;
}

.navButton:hover{
    background-color: #4f3789;
}

.navBar {
    position: relative;
    text-align: center;
    background-color: #673ab7;
    border-radius: 25px;
}

.navButton.active {
    font-weight: bolder;
    text-shadow: 2px 2px #444;
    background-color: #845fda;
}
</style>
