<template>
    <div class="container banner">
        <div class="row justify-content-center align-items-center">
            <div class="text-center">
                <h1>{{ title }}</h1>
                <h2>{{ subline }}</h2>
                <a class="btn btn-primary btn-lg" v-bind:href="href">{{ buttonText }}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Banner",
        props: ['title', 'subline', 'buttonText', 'href']
    }
</script>

<style scoped>
    .banner {
        background: url("/images/banner.jpg");
        background-size: cover;
        height: 50vh;
    }

    .row {
        height: 50vh;
    }

    h1, h2 {
        color: aliceblue;
    }

    h1 {
        padding: 20px 0;
    }

</style>