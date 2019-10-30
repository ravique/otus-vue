<template>
    <div id="app">
        <Header/>
        <Banner
                title="Чесалка для кошки. Закажи сейчас."
                subline="Высокосоростная инновационная чесалка для кошки всего за $19.99"
                button-text="Заказать сейчас"
                href="#order"
        />
        <a name="mission"></a>
        <Mission/>
        <a name="benefits"></a>
        <BenefitsContainer :benefits="benefits"/>
        <a name="responses"></a>
        <Slider :slides="slides"/>
        <Products/>
        <a name="order"></a>
        <Form/>
    </div>
</template>

<script>
    import './__mocks__'

    import Header from './components/Header.vue'
    import Banner from './components/Banner.vue'
    import Mission from './components/Mission.vue'
    import BenefitsContainer from './components/BenefitsContainer.vue'
    import Slider from './components/Slider.vue'
    import Products from './components/Products.vue'
    import Form from './components/Form.vue'

    const benefits = [
        {
            'header': 'Single Elite',
            'text': 'Сплав традиций и инноваций: хорошо знакомая классика в революционном формате',
            'imageUrl': '/images/se.jpg'
        },
        {
            'header': 'Набор Elite V.I.P.',
            'text': 'Исчерпывающий комплект на все случаи жизни. Выбери цвет настроения!',
            'imageUrl': '/images/evip.jpg'
        },
        {
            'header': 'Galvanic',
            'text': 'Передовая разработка от мирового производителя',
            'imageUrl': '/images/galvanic.jpg'
        }
    ];

    const slides = [
        {
            'title': 'Искала качественную чесалку для моего мурылки. Друг посоветовал Single Elite. Все понравилось - и цена, и качество, и рабочие при установке. Теперь дома светло, свежо и уютно. ',
            'author': 'Пульхерия Модестовна, 23 года',
            'avatarUrl': '/images/modestovna.jpeg'
        },
        {
            'title': 'सर्वश्रेष्ठ विक्रेता। उत्तम गुणवत्ता। अच्छा विकल्प',
            'author': 'Билиал Раджа, 47 лет',
            'avatarUrl': '/images/bilial.jpeg'
        },

    ];

    export default {
        name: 'app',
        components: {
            Header,
            Banner,
            Mission,
            BenefitsContainer,
            Slider,
            Products,
            Form
        },
        data() {
            return {
                benefits,
                slides
            }
        }
    }


</script>
