let a = [  
    {
    address: 'Pushkinskaya_9',
    house_size: '111',
    sold: 'false',
    price: 222,
    plot_size: `Этот двухэтажный загородный дом выполнен в современном архитектурном стиле хай-тек (минимализм) и отличается строгой геометрией линий.
Архитектура и фасад
Форма: Кубическая конструкция с плоской кровлей и четкими прямыми углами.
Цветовое решение: Контрастное сочетание темно-серого (графитового) цвета на главном фасаде и светло-серой штукатурки на боковой стене.
Материалы: Комбинация декоративной штукатурки, панорамного остекления и элементов отделки из натурального дерева (планкена) в зоне террасы и оконных проемов.
Остекление и планировка
Панорамные окна: Большие площади остекления в пол на обоих этажах обеспечивают обилие естественного света.
Терраса и балкон: На втором этаже расположен просторный открытый балкон с прозрачным стеклянным ограждением. Под ним на первом этаже обустроена крытая зона отдыха с обеденным столом.
Освещение и ландшафт
Подсветка здания: Направленные фасадные светильники мягко подсвечивают стены дома в темное время суток.
Уличный свет: Вдоль мощеных дорожек и на ухоженном зеленом газоне установлены невысокие современные светильники-столбики (болларды).
Благоустройство: Вокруг дома высажены аккуратные декоративные кустарники, а дорожки выложены крупной светлой плиткой.
`
,
    floors: 2,
    image: 'https://www.domrnr.ru/upload/resize_cache/iblock/719/1920_610_1/71914bddd7e9ac2a0ad18d109aae01f6.jpg',
    },
{
    address: 'Pushkinskaya_12',
    house_size: '300',
    sold: 'false',
    price: 2323,
    plot_size: 50,
    floors: 3,
    image: 'https://dom-tn.storage.yandexcloud.net/resize_cache/120581/df6a282dca525dff6a0386acd76cbf5c/iblock/b73/b73565637c59f7f6de75ff21fe3ffd56/72b26f38cf298426b5d742f8cf092b80.jpg',

    },

{
    address: 'Pushkinskaya',
    house_size: '90',
    sold: 'false',
    price: 500,
    plot_size: 60,
    floors: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX2WJb10v-vhncJvAtDzUHtY8ilVKFtpxUNg&s',
    },
    {
    address: 'Pushkinskaya_13',
    house_size: '400',
    sold: 'false',
    price: 200,
    plot_size: 10,
    floors: 2,
    image: 'https://postroika-doma-bani.ru/d/treugolnyj_dom_2.jpg',
    },
    {
    address: 'klop',
    house_size: '193',
    sold: 'false',
    price: 3255,
    plot_size: 40,
    floors: 3,
    image: 'https://cdn5.vedomosti.ru/crop/image/2026/1k/13moyf/original-1fcz.jpg?height=609&width=1082',
    },
]


let parametr = location.search.replace('?product=', '')

let productData

for (let index = 0; index < a.length; index++) {
    if (a[index].address === parametr){
        productData = a[index]
    }
}

let price = document.getElementById("price")
price.innerHTML = productData.price

let address = document.getElementById('address')
console.log(address)
console.log(parametr)
address.innerHTML = parametr

let plot_size = document.getElementById("plot_size")
plot_size.innerHTML = productData.plot_size
console.log(plot_size)

let image = document.getElementById("image")
image.src = productData.image
console.log(image)
