//GET DATA FROM DATA.JS FILE
import { saveDailyTotal } from "./data.js";
import { SAVEProductStatistics } from "./data.js";

/* control mobile navbar */
const bars_icon = document.querySelector(".open_nav");
const Close_icon = document.querySelector(".close_nav");
const navBar_List = document.querySelector(".nav_list");

function ShowNavbar() {
  bars_icon.addEventListener("click", () => {
    navBar_List.classList.remove("show_list");
    bars_icon.style.display = "none";
  });
}
ShowNavbar();

function HideNavbar() {
  Close_icon.addEventListener("click", () => {
    navBar_List.classList.add("show_list");
    bars_icon.style.display = "block";
  });
}
HideNavbar();

/* products object */
const Products = [
  {
    category: "coffee",
    img: "cafe_images/cafe products/cafe_creme.jpg",
    name: "cafe creme",
    price: "10",
    quantity: "0",
  },
  {
    category: "coffee",
    img: "cafe_images/cafe products/black-coffee.jpg",
    name: "black coffee",
    price: "10",
    quantity: "0",
  },
  {
    category: "coffee",
    img: "cafe_images/cafe products/black_coffee.jpeg",
    name: "Normal coffee",
    price: "09",
    quantity: "0",
  },
  {
    category: "coffee",
    img: "cafe_images/cafe products/milk_coffee.jpeg",
    name: "Light coffee",
    price: "10",
    quantity: "0",
  },
  {
    category: "coffee",
    img: "cafe_images/cafe products/caffe-italy.jpg",
    name: "Italian coffee",
    price: "10",
    quantity: "0",
  },
  {
    category: "coffee",
    img: "cafe_images/cafe products/cappuccino.jpeg",
    name: "cappuccino",
    price: "13",
    quantity: "0",
  },
  {
    category: "coffee",
    img: "cafe_images/cafe products/cold_coffee.jpg",
    name: "Cold coffee",
    price: "15",
    quantity: "0",
  },
  {
    category: "coffee",
    img: "cafe_images/cafe products/choclate_coffee.jpg",
    name: "Chocolate coffee",
    price: "10",
    quantity: "0",
  },
  {
    category: "coffee",
    img: "cafe_images/cafe products/Americano-coffee.jpg",
    name: "Americano Coffee",
    price: "13",
    quantity: "0",
  },
  {
    category: "coffee",
    img: "cafe_images/cafe products/espresso.jpeg",
    name: "Espresso",
    price: "13",
    quantity: "0",
  },

  {
    category: "juices",
    img: "cafe_images/cafe products/orange_jus.jpg",
    name: "orange Jus",
    price: "15",
    quantity: "0",
  },
  {
    category: "juices",
    img: "cafe_images/cafe products/banana-juice.jpg",
    name: "banana Jus",
    price: "16",
    quantity: "0",
  },
  {
    category: "juices",
    img: "cafe_images/cafe products/avocado_jus.jpeg",
    name: "Avocado Jus",
    price: "18",
    quantity: "0",
  },
  {
    category: "juices",
    img: "cafe_images/cafe products/panache_Jus.jpeg",
    name: "panache Jus",
    price: "20",
    quantity: "0",
  },
];

//GLOBAL VARIABLES
   // display variables
const product_image = document.querySelector(".product_image");
const product_name = document.querySelector(".product_name");
const product_price = document.querySelector(".product_price");
const product_quantity = document.querySelector(".product_quantity");
const noProduct = document.querySelector(".NoProductFound");
   // menu switching variables
const CoffeeTab = document.querySelector(".coffees_tab");
const coffeeMenu = document.querySelector(".coffee_products");
const JusTab = document.querySelector(".Juices_tab");
const JuicesMenu = document.querySelector(".Juices_products");
   // cancel sale variables
const cancel_sale = document.querySelector(".cancel_sale");
const product_properties = document.querySelector(".product_properties");
    // cash and calculate variables
 const cash = document.querySelector(".cash");
 const Day_End_button = document.querySelector(".Day_End");
 const total_display = document.querySelector(".total_display");

// switch between Menu categories
function SwitchMenuTabs() {

  CoffeeTab.addEventListener("click", () => {
    coffeeMenu.classList.remove("menu_visibility");
    JuicesMenu.classList.add("menu_visibility");
    CoffeeTab.classList.add("active_tab");
    JusTab.classList.remove("active_tab");
  });
  JusTab.addEventListener("click", () => {
    coffeeMenu.classList.add("menu_visibility");
    JuicesMenu.classList.remove("menu_visibility");
    JusTab.classList.add("active_tab");
    CoffeeTab.classList.remove("active_tab");
  });
}
SwitchMenuTabs();

//cancel sale a product
function CancelSale(index) {

  const product = Products[index];
  if (!product || !cancel_sale || !product_properties) return;

  const UpdateCancelButton = () => {
    if (product.quantity > 0) {
      cancel_sale.classList.remove("cancel_btn_visibility");
    } else {
      cancel_sale.classList.add("cancel_btn_visibility");
    }
  };

  product_properties.onclick = () => {
    UpdateCancelButton();
  };

  cancel_sale.addEventListener("click", () => {
    if (product.quantity > 0) {
      const confirmCancel = confirm(`Are You sure to cancel ${product.name}`);
      if (confirmCancel) {
        product.quantity--;
        AddToSales();
        UpdateCancelButton();
      }
    }
  });
}

//upgrade quantity of each product when clicked on his card
function UpgradeQuantity() {

  let Product_card = Array.from(document.querySelectorAll(".product_card"));
  Product_card.forEach((card, index) => {
    card.addEventListener("click", () => {
      const product = Products[index];
      product.quantity++;
      if (product.quantity > 0) {
        AddToSales();
        CancelSale(index);
      }
    });
  });
}

// no product message in sales area
function NoProductMsg() {
  noProduct.innerHTML = "No Products found";
}

// Display of Sale Zone
function AddToSales() {
  product_image.innerHTML = "";
  product_name.innerHTML = "";
  product_price.innerHTML = "";
  product_quantity.innerHTML = "";
  let hasProduct = false;

  Products.forEach((product) => {
    if (product.quantity > 0) {
      hasProduct = true;
      product_image.innerHTML += `<img src=" ${product.img}"/>`;
      product_name.innerHTML += `<h3> ${product.name}</h3>`;
      product_price.innerHTML += `<h3> ${product.price} dh</h3>`;
      product_quantity.innerHTML += `<h3> ${product.quantity}</h3>`;
      noProduct.innerHTML = "";
    }
  });
  if (!hasProduct) {
    NoProductMsg();
  }
}

// Function to calculate the total day
let day_total = 0;
function CalculateTotalDay() {
 
  if (!total_display || !Day_End_button || !Array.isArray(Products)) {
    console.error("elements not found");
    return;
  }
  // calculate after click on cash button
  cash.addEventListener("click", () => {
    let totalForTheDay = 0;
    Products.forEach((product) => {
      const price = parseFloat(product.price);
      totalForTheDay += price * product.quantity;
    });
    day_total += totalForTheDay; // add total of old sales to new sales after clear display
    //Saving Day Total
    console.log("Saving daily total:", day_total);
    saveDailyTotal(day_total); //saving in Data.js File
      
    // message after saving day total 
    const message = document.createElement("div")
    message.classList.add("message_success")
    message.innerHTML = `SALES TOTAL : ${day_total} DH HAS BEEN SAVED SUCCESSFULLY`;
    document.body.appendChild(message);
    setTimeout(() => message.remove() ,5000);
    

    //display total 
    total_display.innerHTML = `<h3>Total : ${totalForTheDay.toFixed(
      2
    )} DH </h3>`;
    SAVEProductStatistics(Products); //saving in data.js fle
    ResetDisplay();
    NoProductMsg();
  });

  // going to statistics page after click on DAY END button
  Day_End_button.addEventListener("click", () => {
    const GoToSatistics = confirm(
      ` Are You share to Save Total and GO to Statistics page ${day_total.toFixed(
        2
      )}DH`
    );
    if (GoToSatistics) {
      setTimeout(() => {
        window.location.href = "statistics.html";
      }, 500);
    }
  });
}

//  Reset display function
function ResetDisplay() {
  Products.forEach((product) => {
    product.quantity = 0;
  });
  AddToSales();
}

//General Functions
UpgradeQuantity();
AddToSales();
CalculateTotalDay();
