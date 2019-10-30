<template>
    <ul class="navbar-nav ml-auto">
        <li class="nav-item" v-for="item in menuItems" :key="item.key">
            <a v-if="!item.dropdown" class="nav-link" :href="'#' + item.href">{{ item.text }}</a>
            <DropDownItem v-if="item.dropdown" :itemData="item"/>
        </li>
    </ul>
</template>

<script>
    import DropDownItem from "./DropDownItem";

    export default {
        name: "Menu",
        components: {
            DropDownItem
        },
        props: ['menuItems'],
    }
</script>

<style scoped>

</style>