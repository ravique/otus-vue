<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
            <a class="navbar-brand" href="#">Чесалка для кошки</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <MainMenu :menuItems="menuItems"/>
            </div>
        </nav>
    </div>
</template>

<script>

    import MainMenu from './MainMenu.vue'
    import axios from 'axios'

    export default {
        name: 'Header',
        props: {
            msg: null,
        },
        components: {
            MainMenu
        },
        beforeMount() {
            axios.get('/menu_items').then(({data}) => {
                this.menuItems = data['menuItems'];
            }).catch()
        },
        data() {
            return {
                menuItems: []
            }
        }
    }
</script>