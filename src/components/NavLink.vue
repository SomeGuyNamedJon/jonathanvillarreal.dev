<script>
    export default {
        props: {
            page: {type: String, required: true},
            icon: {type: String, required: true},
            name: {type: String, required: true},
        }
    }
</script>

<template>
    <RouterLink class="navLink" :to="{name: page}">
            <font-awesome-icon class="icon" :icon="icon"/> {{name}}
    </RouterLink> 
</template>