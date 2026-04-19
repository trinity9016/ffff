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
    house_size: '111',
    sold: 'false',
    price: 222,
    plot_size: 23,
    floors: 2,
    image: 'https://www.domrnr.ru/upload/resize_cache/iblock/719/1920_610_1/71914bddd7e9ac2a0ad18d109aae01f6.jpg',
    },

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
    house_size: '111',
    sold: 'false',
    price: 222,
    plot_size: 23,
    floors: 2,
    image: 'https://www.domrnr.ru/upload/resize_cache/iblock/719/1920_610_1/71914bddd7e9ac2a0ad18d109aae01f6.jpg',
    },
    {
    address: 'Pushkinskaya 13',
    house_size: '111',
    sold: 'false',
    price: 222,
    plot_size: 23,
    floors: 2,
    image: 'https://www.domrnr.ru/upload/resize_cache/iblock/719/1920_610_1/71914bddd7e9ac2a0ad18d109aae01f6.jpg',
    },
]

let market = document.getElementById('market')

for (let i = 0; i < a.length; i++){
    let object = a[i]
    market.innerHTML = market.innerHTML + `
    <div class="card">
            <img class="rr" src="${object.image}" alt="">
            <h1>${object.name}</h1>
            <p>${object.material}</p>
            <p>${object.price}$</p>
            <button>buy</button>
        </div>
    `
}