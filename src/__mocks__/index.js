import MockAdapter from 'axios-mock-adapter';
import axios from 'axios'

let mock = new MockAdapter(axios,
    {delayResponse: 3000}
);


mock.onGet('/menu_items').reply(
    200, {
        'menuItems': [
            {'href': 'mission', 'text': 'Миссия'},
            {'href': 'benefits', 'text': 'Преимущества'},
            {'href': 'responses', 'text': 'Отзывы'},
            {'href': 'order', 'text': 'Заказать'},
            {'dropdown': true, 'text': 'Бесполезный дроп-даун', 'children': ['Один', 'Два', 'Три']},
        ]
    });

mock.onPost('/checkout').reply(
    200,
    {'message': 'Наш оператор никогда с вами не свяжется'}
);