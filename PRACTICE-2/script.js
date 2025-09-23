const products = [
  // Electronics
  {
    name: "Wireless Mouse",
    price: 25.99,
    category: "Electronics",
    brand: "Logitech",
  },
  {
    name: "Smartphone",
    price: 699.99,
    category: "Electronics",
    brand: "Samsung",
  },
  {
    name: "LED Monitor",
    price: 129.99,
    category: "Electronics",
    brand: "Dell",
  },
  {
    name: "Bluetooth Speaker",
    price: 45.99,
    category: "Electronics",
    brand: "JBL",
  },
  {
    name: "Laptop",
    price: 999.99,
    category: "Electronics",
    brand: "Apple",
  },

  // Footwear
  {
    name: "Running Shoes",
    price: 59.99,
    category: "Footwear",
    brand: "Nike",
  },
  {
    name: "Sneakers",
    price: 75.99,
    category: "Footwear",
    brand: "Adidas",
  },
  {
    name: "Sandals",
    price: 25.99,
    category: "Footwear",
    brand: "Teva",
  },
  {
    name: "Formal Shoes",
    price: 120.0,
    category: "Footwear",
    brand: "Clarks",
  },
  {
    name: "Boots",
    price: 150.0,
    category: "Footwear",
    brand: "Timberland",
  },

  // Home Appliances
  {
    name: "Blender",
    price: 34.99,
    category: "Home Appliances",
    brand: "Oster",
  },
  {
    name: "Microwave Oven",
    price: 99.99,
    category: "Home Appliances",
    brand: "Panasonic",
  },
  {
    name: "Air Conditioner",
    price: 299.99,
    category: "Home Appliances",
    brand: "LG",
  },
  {
    name: "Vacuum Cleaner",
    price: 149.99,
    category: "Home Appliances",
    brand: "Dyson",
  },
  {
    name: "Toaster",
    price: 29.99,
    category: "Home Appliances",
    brand: "Breville",
  },

  // Stationery
  {
    name: "Notebook",
    price: 3.99,
    category: "Stationery",
    brand: "Moleskine",
  },
  {
    name: "Pen Set",
    price: 12.99,
    category: "Stationery",
    brand: "Parker",
  },
  {
    name: "Highlighters",
    price: 5.99,
    category: "Stationery",
    brand: "Sharpie",
  },
  {
    name: "Stapler",
    price: 7.99,
    category: "Stationery",
    brand: "Swingline",
  },
  {
    name: "Planner",
    price: 14.99,
    category: "Stationery",
    brand: "Erin Condren",
  },

  // Furniture
  {
    name: "Desk Chair",
    price: 89.99,
    category: "Furniture",
    brand: "Ikea",
  },
  {
    name: "Coffee Table",
    price: 129.99,
    category: "Furniture",
    brand: "West Elm",
  },
  {
    name: "Sofa",
    price: 499.99,
    category: "Furniture",
    brand: "Ashley Furniture",
  },
  {
    name: "Bookshelf",
    price: 79.99,
    category: "Furniture",
    brand: "Sauder",
  },
  {
    name: "Dining Table",
    price: 399.99,
    category: "Furniture",
    brand: "Pottery Barn",
  },

  // Fitness
  {
    name: "Yoga Mat",
    price: 19.99,
    category: "Fitness",
    brand: "Gaiam",
  },
  {
    name: "Dumbbells",
    price: 49.99,
    category: "Fitness",
    brand: "Bowflex",
  },
  {
    name: "Treadmill",
    price: 699.99,
    category: "Fitness",
    brand: "NordicTrack",
  },
  {
    name: "Resistance Bands",
    price: 14.99,
    category: "Fitness",
    brand: "Fit Simplify",
  },
  {
    name: "Exercise Bike",
    price: 299.99,
    category: "Fitness",
    brand: "Peloton",
  },

  // Kitchen Appliances
  {
    name: "Coffee Maker",
    price: 49.99,
    category: "Kitchen Appliances",
    brand: "Keurig",
  },
  {
    name: "Air Fryer",
    price: 89.99,
    category: "Kitchen Appliances",
    brand: "Ninja",
  },
  {
    name: "Stand Mixer",
    price: 199.99,
    category: "Kitchen Appliances",
    brand: "KitchenAid",
  },
  {
    name: "Refrigerator",
    price: 799.99,
    category: "Kitchen Appliances",
    brand: "Whirlpool",
  },
  {
    name: "Dishwasher",
    price: 399.99,
    category: "Kitchen Appliances",
    brand: "Bosch",
  },
];

let box = document.querySelector(".box");

function render() {
  for (let i = 0; i < products.length; i++) {
    box.innerHTML += `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${products[i].name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${products[i].price}</h6>
    <h6 class="card-subtitle mb-2 text-muted">${products[i].category}</h6>
    <h6 class="card-subtitle mb-2 text-muted">${products[i].brand}</h6>
  </div>
</div>
    `;
  }
}

render();

let filteredcategory = ["All"];
products.filter((item) => {
  if (!filteredcategory.includes(item.category)) {
    return filteredcategory.push(item.category);
  }
});


let btns = document.querySelector(".btns");



for (let i = 0; i < filteredcategory.length; i++) {
  btns.innerHTML += `<button class="btn" onclick="filteredItems(${i})">${filteredcategory[i]}</button>`;
}

function filteredItems(index) {

    console.log(index);

    box.innerHTML = " ";
    let items = products.filter((item) => {
    return item.category === filteredcategory[index];
  });

  if (index === 0) {
    render();
  } 
  else {
    for (let i = 0; i < items.length; i++) {
    box.innerHTML += `
     <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${items[i].name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${items[i].price}</h6>
    <h6 class="card-subtitle mb-2 text-muted">${items[i].category}</h6>
    <h6 class="card-subtitle mb-2 text-muted">${items[i].brand}</h6>
    </div>
    </div>
    `
  }
  }
}
