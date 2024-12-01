// Sample car data in JSON format
const carData = [
    {
        "name": "Retro Zaporozhets",
        "price": "RS1500/Day",
        "discount": "20% Off",
        "details": "Diesel, 5,000 Miles, Family, Manual",
        "available": "AVAILABLE",
        "image": "retro.png"
    },
    {
        "name": "Black Nissan GT-R",
        "price": "RS5000/Day",
        "discount": "15% Off",
        "details": "Diesel, 3,000 Miles, Sport, Automatic",
        "available": "AVAILABLE",
        "image": "nissan.png"
    },
    {
        "name": "Volkswagen Passat",
        "price": "RS2000/Day",
        "discount": "10% Off",
        "details": "Diesel, 7,000 Miles, Family, Automatic",
        "available": "AVAILABLE",
        "image": "volkswagen.png"
    },
    {
        "name": "Brilliance Junjie FRV",
        "price": "RS2500/Day",
        "discount": "20% Off",
        "details": "Diesel, 6,000 Miles, Family, Manual",
        "available": "AVAILABLE",
        "image": "brilliance.png"
    }
];

// // Function to render cars with a fade-in effect
// function fetchCars() {
//     const carContainer = document.getElementById("cars");
//     carContainer.innerHTML = ""; // Clear previous content

//     carData.forEach((car, index) => {
//         const carBox = document.createElement("div");
//         carBox.className = "car-box hidden"; // Initially hidden for fade-in effect

//         carBox.innerHTML = `
//             <img src="${car.image}" alt="${car.name}">
//             <div class="car-info">
//                 <p class="price">${car.price}</p>
//                 <p class="discount">${car.discount}</p>
//                 <h4>${car.name}</h4>
//                 <p>${car.details}</p>
//                 <p class="available">${car.available}</p>
//                 <a href="#" class="book-now" onclick="bookNow('${car.name}')">Book Now →</a>
//             </div>
//         `;

//         carContainer.appendChild(carBox);

//         // Delay the appearance of each car for the fade-in effect
//         setTimeout(() => {
//             carBox.classList.remove("hidden");
//         }, index * 200); // Increase delay for each car
//     });
// }

// // Function to show alert on booking
// function bookNow(carName) {
//     alert(`You have selected to book the ${carName}!`);
// }

// // Trigger car loading animation on page load
// window.onload = fetchCars;


// Function to render cars from JSON data
function fetchCars() {
    const carContainer = document.getElementById("cars");
    carContainer.innerHTML = ""; // Clear previous content

    carData.forEach(car => {
        const carBox = document.createElement("div");
        carBox.className = "car-box";

        carBox.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <div class="car-info">
                <p class="price">${car.price}</p>
                <p class="discount">${car.discount}</p>
                <h4>${car.name}</h4>
                <p>${car.details}</p>
                <p class="available">${car.available}</p>
                <a href="#" class="book-now">Book Now →</a>
            </div>
        `;

        carContainer.appendChild(carBox);
    });
    
}