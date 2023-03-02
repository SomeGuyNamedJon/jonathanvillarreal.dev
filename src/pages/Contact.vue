<script>
    import ContactForm from '@/components/ContactForm.vue'
    import SocialLinks from '../components/SocialLinks.vue';
    export default{
        components: {ContactForm, SocialLinks}
    }
</script>

<template>
    <ContactForm/>
    <SocialLinks size="75" gap="10"/>   
</template>