import { getDailyTotal } from "./data.js";
document.addEventListener("DOMContentLoaded", () => {
    console.log("its work ")
    
     const daily_total_element = document.getElementById("daily_total_element");
     console.log("daily_total_element" , daily_total_element);
     if (!daily_total_element) {
       console.error("daily_total_element not found");
       return;
     }
   
     const Montant = getDailyTotal();
     console.log(" total that saved on localStorage:", Montant);
   
     if (Montant !== null) {
       daily_total_element.innerHTML = `<h3> Daily total is: ${parseFloat(Montant).toFixed(2)} DH </h3>`;
     } else {
       daily_total_element.innerHTML = `<h3>No sales</h3>`;
     }
   });