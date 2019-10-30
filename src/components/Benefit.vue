<template>
    <div class="benefit shadow p-3 mb-5 bg-white rounded">
        <img v-if="imageUrl" v-bind:src="imageUrl" class="w-100">
        <h3>{{ title }}</h3>
        <span>{{ text }}</span>
    </div>
</template>

<script>
    export default {
        name: "Benefit",
        props: ['title', 'text', 'imageUrl']
    }
</script>

<style scoped>
    .benefit {
        width: calc(33% - 10px);
        border: 1px solid saddlebrown;
        padding: 20px 0;
    }
</style>