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
const Products = [
    {category:"coffee", img: src = "cafe_images/cafe products/cafe_creme.jpg", name: "cafe creme", price: "10dh", quantity: "0" },
    {category:"coffee", img: src = "cafe_images/cafe products/black-coffee.jpg", name: "black coffee", price: "10dh", quantity: "0" },
    {category:"coffee", img: src = "cafe_images/cafe products/black_coffee.jpeg", name: "Normal coffee", price: "09dh", quantity: "0" },
    {category:"coffee", img: src = "cafe_images/cafe products/milk_coffee.jpeg", name: "Light coffee", price: "10dh", quantity: "0" },
    {category:"coffee", img: src = "cafe_images/cafe products/caffe-italy.jpg", name: "Italian coffee", price: "10dh", quantity: "0" },
    {category:"coffee", img: src = "cafe_images/cafe products/cappuccino.jpeg", name: "cappuccino", price: "13dh", quantity: "0" },
    {category:"coffee",img: src = "cafe_images/cafe products/cold_coffee.jpg", name: "Cold coffee", price: "15dh", quantity: "0" },
    {category:"coffee", img: src = "cafe_images/cafe products/choclate_coffee.jpg", name: "Chocolate coffee", price: "10dh", quantity: "0" },
    {category:"coffee", img: src = "cafe_images/cafe products/Americano-coffee.jpg", name: "Americano Coffee", price: "13dh", quantity: "0" },
    
    {category:"juices", img: src = "cafe_images/cafe products/orange_jus.jpg", name: "orange Jus", price: "15dh", quantity: "0" },
    {category:"juices", img: src = "cafe_images/cafe products/banana-juice.jpg", name: "banana Jus", price: "16dh", quantity: "0" },
    {category:"juices", img: src = "cafe_images/cafe products/avocado_jus.jpeg", name: "Avocado Jus", price: "18dh", quantity: "0" },
    {category:"juices", img: src = "cafe_images/cafe products/panache_Jus.jpeg", name: "panache Jus", price: "20dh", quantity: "0" }
];



const Product_card = document.querySelectorAll(".product_card");
const product_properties = document.querySelector(".product_properties");
const Product_sale = document.querySelector(".product_sale");
const product_image = document.querySelector(".product_image");
const product_name = document.querySelector(".product_name");
const product_price = document.querySelector(".product_price");
const product_quantity = document.querySelector(".product_quantity");
const Day_End_button = document.querySelector(".day_End");
const cancel_sale = document.querySelector(".cancel_sale")
const total_display = document.querySelector(".total_display");


const CoffeeTab = document.querySelector(".coffees_tab")
const coffeeMenu = document.querySelector(".coffee_products");
const JusTab = document.querySelector(".Juices_tab");
const JuicesMenu = document.querySelector(".Juices_products");

function SwitchMenuTabs() {
    CoffeeTab.addEventListener('click', () => {
        coffeeMenu.classList.remove("menu_visibility");
        JuicesMenu.classList.add("menu_visibility");
        CoffeeTab.classList.add("active_tab");
        JusTab.classList.remove("active_tab");
        Product_sale.classList.add("sale_hide");
    });
    JusTab.addEventListener('click', () => {
        coffeeMenu.classList.add("menu_visibility");
        JuicesMenu.classList.remove("menu_visibility");
        JusTab.classList.add("active_tab");
        CoffeeTab.classList.remove("active_tab");
        Product_sale.classList.add("sale_hide");
    });
}
SwitchMenuTabs();

function AddToSales() {

    product_image.innerHTML = "";
    product_name.innerHTML = "";
    product_price.innerHTML = "";
    product_quantity.innerHTML = "";
    
    
    Products.forEach((product) => {
        if (product.quantity > 0) {
            product_image.innerHTML += `<img src=" ${product.img}"/>`
            product_name.innerHTML += `<h3> ${product.name}</h3>`
            product_price.innerHTML += `<h3> ${product.price}</h3>`
            product_quantity.innerHTML += `<h3> ${product.quantity}</h3>`
        
        }

    });

}
function CancelSale(index) {
    const product = Products[index];
    if (!product || !cancel_sale || !product_properties) return;

    const UpdateCancelButton = () => {
        if (product.quantity > 0) {
            cancel_sale.classList.remove("cancel_btn_visibility");
        } else {
            cancel_sale.classList.add("cancel_btn_visibility");
        };
    };

    product_properties.onclick = () => {
        UpdateCancelButton();
    }

    cancel_sale.onclick = () => {
        if (product.quantity > 0) {
            const confirmCancel = confirm("Are You sure to cancel");
            if (confirmCancel) {

                product.quantity--;
            }
        }
        else if(Products.every(product=> product.quantity===0) ){
            Product_sale.classList.add("sale_hide");
        }
        AddToSales();
        UpdateCancelButton();
    }
}

function UpgradeQuantity() {

    Product_card.forEach((Product_card, index) => {
        Product_card.addEventListener('click', () => {
            const product = Products[index];
            product.quantity++;
            if (product.quantity > 0) {
                Product_sale.classList.remove("sale_hide");
            } 
            CancelSale(index);
            AddToSales();
        });

    });

}
UpgradeQuantity();



function CalculateTotalDay() {
    Day_End_button.addEventListener('click', () => {
        let day_total = 0;
        Products.forEach(product => {
            const price = parseFloat
                (product.price.replace("dh", "").trim());
                    day_total += price * product.quantity;
                });
                total_display.innerHTML = `<h3>Total : ${day_total.toFixed(2)} DH </h3>`
    });
}
CalculateTotalDay();

