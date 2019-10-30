<template>
    <div class="container">
        <iframe src="//coub.com/embed/isy15?muted=false&autostart=true&originalSize=false&startWithHD=false"
                allowfullscreen allow="autoplay" frameborder="0" @load="setHeight"
                :height="containerHeight">

        </iframe>
    </div>
</template>

<script>
    export default {
        name: "Video",

        data() {
            return {
                containerHeight: 0
            }
        },
        methods: {
            setHeight(event) {
                let iFrame = event.target;
                this.containerHeight = iFrame.clientWidth * 0.8;

            }
        },
    }
</script>

<style scoped>
    iframe {
        width: 100%;
    }
</style>

