'use sctrict'

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

function discountPrice(products) {
    console.log(products.price - products.price * 15 / 100);
}

products.forEach(discountPrice)