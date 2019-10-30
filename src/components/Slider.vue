<template>
    <div class="container">
        <hooper class="text-center">
            <slide v-for="s in slides" v-bind:key="s.id">
                <img class="avatar" :src="s.avatarUrl"/>
                <h4>{{ s.title }}</h4>
                <span class="author">{{ s.author }}</span>
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
    </div>
</template>

<script>
    import {Hooper, Slide, Navigation as HooperNavigation} from 'hooper';
    import 'hooper/dist/hooper.css';

    export default {
        name: "Slider",
        components: {
            Hooper,
            Slide,
            HooperNavigation
        },
        props: ['slides']
    }
</script>

<style scoped>
    .hooper {
        height: 450px;
    }

    .author {
        color: blue;
    }

    .avatar {
        width: 250px;
        border-radius: 1000px;
        margin: 0 0 35px 0;
    }
</style>