<script>
    import {computed} from 'vue'
    import {useRoute} from 'vue-router'

    export default {
        props: {
            page: {type: String, required: true},
            icon: {type: String, required: true},
            name: {type: String, required: true},
        },
        setup(props){
            const route = useRoute()
            const isActive = computed(() => route.name === props.page)
            return {isActive}
        }
    }
</script>

<template>
    <RouterLink class="NavLink" :to="{name: page}" :class="{ active: isActive }">
            <font-awesome-icon :icon="icon"/><br>{{name}}
    </RouterLink> 
</template>