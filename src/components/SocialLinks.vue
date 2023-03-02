<script>
    export default{
        props:{size: {type: Number, required: true}},
        computed: {
            cssVars() {
                return {'--icon-size': this.size + 'px'}
            }
        }
    }
</script>

<template>
    <a href="https://www.github.com/SomeGuyNamedJon" target="_blank">
        <font-awesome-icon class="link" icon="fa-brands fa-github" :style="cssVars"/>
    </a>
    <a href="https://www.linkedin.com/in/jonathan-villarreal-3a5a73136/" target="_blank">
        <font-awesome-icon class="link" icon="fa-brands fa-linkedin" :style="cssVars"/>
    </a>
    <a href="https://mastodon.social/@someguynamedjon" target="_blank">
        <font-awesome-icon class="link" icon="fa-brands fa-mastodon" :style="cssVars"/>
    </a>
</template>

<style scoped>
    a {
        color: #f0f0f0
    }
    a:hover{
        color: #a0a0a0;
    }
    .link{
        height: var(--icon-size);
        margin-inline: 3px;
    }
</style>