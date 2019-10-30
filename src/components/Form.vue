<template>
    <div class="container checkout-form">
        <div class="row">
            <h2>Заказать сейчас!</h2>
        </div>

        <div v-if="!isLoading && !ready" class="row">
            <div class="col-6">
                <div class="form-group">
                    <label for="first_name">Имя</label>
                    <input type="text" class="form-control" name="first_name" v-model="firstName"/>
                </div>
                <div class="form-group">
                    <label for="email">Почта</label>
                    <input type="email" class="form-control" name="email" v-model="email"/>
                </div>
                <div class="form-group">
                    <label for="range">Количество: {{quantity}}</label>
                    <input type="range" value="0" class="form-control-range" @input="priceCalc($event)"/>
                </div>
            </div>

            <div class="col-6">
                <span class="price d-block">Цена: ${{fullPrice}}</span>
                <button class="btn-danger btn-lg" @click="submitOrder">Заказать!</button>
                <span class="price d-block">{{errors}}</span>
            </div>
        </div>

        <div v-if="isLoading" class="row justify-content-center align-items-center spinner">
            <div class="text-center">
                <h1 v-if="isLoading">Загружается!</h1>
            </div>
        </div>

        <Video v-if="ready"/>
    </div>
</template>

<script>

    import axios from 'axios'
    import Video from './Video.vue'

    export default {
        name: "Form",
        data() {
            return {
                quantity: 0,
                firstName: null,
                email: null,
                fullPrice: 0,
                status: false,
                isLoading: false,
                errors: null,
                ready: false
            }
        },
        components: {
            Video,
        },
        methods: {
            priceCalc: function ({target: {value}}) {
                this.fullPrice = (value * 19.99).toFixed(2);
                this.quantity = value;
            },
            submitOrder: function () {
                if (!this.firstName || !this.email || this.quantity === 0) {
                    this.errors = 'Введите правильные имя и почту и укажите количество!'
                } else {
                    this.fullPrice += 10000;
                    this.isLoading = true;

                    axios.post('/checkout', {
                        'order': {
                            'firstName': this.firstName,
                            'email': this.email,
                            'fullPrice': this.fullPrice
                        }
                    }).then(
                        () => {
                            this.isLoading = false;
                            this.ready = true
                        }
                    )
                }
            }
        }
    }
</script>

<style scoped>
    .price {
        margin: 15px 0;
        color: red;
    }

    .spinner {
        height: 870px;
    }

    .checkout-form {
        height: 870px;
    }
</style>