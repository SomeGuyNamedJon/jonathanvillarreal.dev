<script>
    export default{
        props:{
            size: {type: String, required: true},
            gap: {type: String, required: true},
            color: {type: String, required: true}
        },
        computed: {
            cssVars() {
                return {
                    '--icon-size': this.size + 'px',
                    '--gap': this.gap + 'px',
                    '--color': this.color
                }
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
    .link{
        color: #f0f0f0;
        height: var(--icon-size);
        margin-inline: var(--gap);
    }
    .link:hover{
        color: var(--color);
    }
</style>