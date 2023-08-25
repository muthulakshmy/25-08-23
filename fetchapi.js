
const url = 'https://fakestoreapi.com/products';
const shop = document.getElementById('shop');

fetch(url)
    .then(response => response.json())
    .then(async data => {
        data.map(value => {
            const image = document.createElement('img');
            image.src = value.image;
            shop.appendChild(image);
        });
    })
    .catch(error => {
        console.error(error);
    });
