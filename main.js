const restaurants = [
    { name: 'Azizbek', price: 25, address: 'Pyatiy' },
    { name: 'Best', price: 30, address: 'Jorabayeva' },
    { name: 'Lola', price: 4, address: 'Yubileyniy' },
    { name: 'Uchrashuv', price: 20, address: 'Port' },
    { name: 'Dasturxon', price: 22, address: 'Pyatiy' },
    { name: 'Baliq', price: 20, address: 'Uchqizil' },
    { name: 'Afrodita', price: 30, address: 'Yubileyniy' },
    { name: 'Oxus', price: 40, address: 'Uchqizil' },
    { name: 'Nur', price: 15, address: 'Jorabayeva' },
    { name: 'Manti', price: 10, address: 'Devyatka' },
    { name: 'Burger', price: 20, address: 'Yubileyniy' },
    { name: 'Somsa', price: 10, address: 'Zelyoniy' },
    { name: 'Tandir', price: 35, address: 'Jorabayeva' },
    { name: 'Uzmir', price: 10, address: '75' },
    { name: 'American', price: 20, address: 'Yubileyniy' },
];

const form = document.querySelector('.form');
const asos = document.querySelector('.asos');
const addressInput = document.querySelector('#addressInput');

function displayRestaurants(restaurantsList) {
    const mappedRestaurants = restaurantsList.map(restaurant => {
        return `<div class="katta">
            <h1 class="name">${restaurant.name}</h1>
            <p class="price">${restaurant.price} USD</p>
            <p class="address">${restaurant.address}</p>
        </div>`;
    });
    asos.innerHTML = mappedRestaurants.join('');
}


displayRestaurants(restaurants);
JG 
form.addEventListener('submit', function(event) {
    
    event.preventDefault();
    
    const filterText = addressInput.value.toLowerCase();
    
    const filteredRestaurants = restaurants.filter(restaurant => 
        restaurant.address.toLowerCase().includes(filterText)
    );
    
    displayRestaurants(filteredRestaurants);
});
