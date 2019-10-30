<template>
    <div class="container">
        <div class="row justify-content-around">
            <Benefit v-for="benefit in benefits" v-bind:title="benefit.header" v-bind:text="benefit.text" v-bind:image-url="benefit.imageUrl"
                     v-bind:key="benefit.id"/>
        </div>
    </div>
</template>

<script>

    import Benefit from './Benefit.vue'

    export default {
        name: "BenefitsContainer",
        props: ['benefits'],
        components: {
            Benefit
        }
    }
</script>

<style scoped>

</style>