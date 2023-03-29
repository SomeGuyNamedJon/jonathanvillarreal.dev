<script>
    import { defineAsyncComponent } from 'vue';
    import SocialLinks from '../components/SocialLinks.vue';
    const ContactForm = defineAsyncComponent(() =>
        import("../components/ContactForm.vue")
    )
    export default{
        components: {ContactForm, SocialLinks}
    }
</script>

<template>
    <ContactForm/>
    <SocialLinks size="75" gap="10" color="var(--light-purple)"/>   
</template>