
let a = [  
    {
    address: 'Pushkinskaya 13',
    house_size: '111',
    sold: 'false',
    price: 222,
    plot_size: 23,
    floors: 2,
    image: 'https://www.domrnr.ru/upload/resize_cache/iblock/719/1920_610_1/71914bddd7e9ac2a0ad18d109aae01f6.jpg',
    },
{
    address: 'Pushkinskaya 13',
    house_size: '300',
    sold: 'false',
    price: 2323,
    plot_size: 50,
    floors: 3,
    image: 'https://dom-tn.storage.yandexcloud.net/resize_cache/120581/df6a282dca525dff6a0386acd76cbf5c/iblock/b73/b73565637c59f7f6de75ff21fe3ffd56/72b26f38cf298426b5d742f8cf092b80.jpg',
    },

{
    address: 'Pushkinskaya 13',
    house_size: '90',
    sold: 'false',
    price: 500,
    plot_size: 60,
    floors: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX2WJb10v-vhncJvAtDzUHtY8ilVKFtpxUNg&s',
    },
    {
    address: 'Pushkinskaya 13',
    house_size: '400',
    sold: 'false',
    price: 200,
    plot_size: 10,
    floors: 2,
    image: 'https://postroika-doma-bani.ru/d/treugolnyj_dom_2.jpg',
    },
    {
    address: 'Pushkinskaya 13',
    house_size: '193',
    sold: 'false',
    price: 3255,
    plot_size: 40,
    floors: 3,
    image: 'https://cdn5.vedomosti.ru/crop/image/2026/1k/13moyf/original-1fcz.jpg?height=609&width=1082',
    },
]

let parametr = location.search.replace('?product=', '')

let address = document.getElementById('address')
address.innerHTML = parametr