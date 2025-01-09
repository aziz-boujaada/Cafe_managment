/* control mobile navbar */
const bars_icon = document.querySelector(".open_nav");
const Close_icon = document.querySelector(".close_nav");
const navBar_List = document.querySelector(".nav_list");

function ShowNavbar() {
    bars_icon.addEventListener('click', () => {
        navBar_List.classList.remove("show_list");
        bars_icon.style.display = "none";

    });
}
ShowNavbar();

function HideNavbar() {
    Close_icon.addEventListener('click', () => {
        navBar_List.classList.add("show_list");
        bars_icon.style.display = "block";
    });
}
HideNavbar();

/* click on the products to add to sales */
const products = [
    { img: src = "cafe_images/cafe products/cafe_creme.jpg", name: "cafe creme", price: "10dh", quantity: "0" },
    { img: src = "cafe_images/cafe products/black-coffee.jpg", name: "black coffee", price: "10dh", quantity: "0" },
    { img: src = "cafe_images/cafe products/black_coffee.jpeg", name: "Normal coffee", price: "09dh", quantity: "0" },
    { img: src = "cafe_images/cafe products/milk_coffee.jpeg", name: "Light coffee", price: "10dh", quantity: "0" },
    { img: src = "cafe_images/cafe products/caffe-italy.jpg", name: "Italian coffee", price: "10dh", quantity: "0" },
    { img: src = "cafe_images/cafe products/cappuccino.jpeg", name: "cappuccino", price: "13dh", quantity: "0" },
    { img: src = "cafe_images/cafe products/cold_coffee.jpg", name: "Cold coffee", price: "15dh", quantity: "0" },
    { img: src = "cafe_images/cafe products/choclate_coffee.jpg", name: "Chocolate coffee", price: "10dh", quantity: "0" }
];

const Product_card = document.querySelectorAll(".product_card");
const Product_sale = document.querySelector(".product_sale");
const product_image = document.querySelector(".product_image");
const product_name = document.querySelector(".product_name");
const product_price = document.querySelector(".product_price");
const product_quantity = document.querySelector(".product_quantity");
const Day_End_button = document.querySelector(".day_End");
const cancel_sale = document.querySelector(".cancel_sale")
const total_display = document.querySelector(".total_display");


function AddToSales() {

    product_image.innerHTML = "";
    product_name.innerHTML = "";
    product_price.innerHTML = "";
    product_quantity.innerHTML = "";


    products.forEach((product) => {
        if (product.quantity > 0) {
            product_image.innerHTML += `<img src=" ${product.img}"/>`
            product_name.innerHTML += `<h3> ${product.name}</h3>`
            product_price.innerHTML += `<h3> ${product.price}</h3>`
            product_quantity.innerHTML += `<h3> ${product.quantity}</h3>`
        }


    });

}
function CancelSale(index) {

    cancel_sale.onclick = () => {
        const product=products[index];
        if (product.quantity > 0) {
            product.quantity--;
            AddToSales();
            
        }
    };

}




function UpgradeQuantity() {

    Product_card.forEach((Product_card, index) => {


        Product_card.addEventListener('click', () => {
            const product = products[index];
            product.quantity++;
            Product_sale.classList.remove("sale_show");
            CancelSale(index);
            AddToSales();


        });

    });

}
UpgradeQuantity();



function CalculateTotalDay() {
    Day_End_button.addEventListener('click', () => {
        let day_total = 0;
        products.forEach(products => {

            const price = parseFloat
            (products.price.replace("dh" , "").trim());
            day_total += price * products.quantity;
        });
        total_display.innerHTML = `<h3>Total : ${day_total.toFixed(2)} DH </h3>`


    });
}
CalculateTotalDay();

