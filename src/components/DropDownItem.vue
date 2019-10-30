<template>
    <div>
    <a @click="toggleVisible" class="nav-link">{{itemData.text}}</a>
        <div v-if="isVisible" class="dropdown-container">
        <span v-for="child in itemData.children" :key="child.key" class="dropdown-item">
            {{ child }}
        </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DropDownItem",
        props: {
            itemData: {
                type: Object
            },
            isVisible: {
                type: Boolean,
                default: false,
            }
        },
        methods: {
            toggleVisible: function () {
                this.isVisible = !this.isVisible
            }
        }
    }
</script>

<style scoped>
    .dropdown-container {
        position: absolute;
        background: white;
        width: 250px;
    }
</style>