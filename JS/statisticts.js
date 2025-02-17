// CALL FUNCTIONS FROM DATA.JS
import { getDailyTotal } from "./data.js";
import { GETProductStatistics } from "./data.js";
import { resetQuantitiesAndTotal } from "./data.js";
////

/// DOWLAND  DOM CONTENT
document.addEventListener("DOMContentLoaded", () => {
  console.log("its work ");

  // Display the total of DAY 
  function DisplayTotal() {
    const daily_total_element = document.getElementById("daily_total_element");
    console.log("daily_total_element", daily_total_element);
    if (!daily_total_element) {
      console.error("daily_total_element not found");
      return;
    }
         //call the day total 
    const Montant = getDailyTotal();
    console.log(" total that saved on localStorage:", Montant);

    if (Montant !== null) {
      daily_total_element.innerHTML = `<h3> Daily total is: ${parseFloat(
        Montant
      ).toFixed(2)} DH </h3>`;
    } else {
      daily_total_element.innerHTML = `<h3>No sales</h3>`;
    }
  }
  DisplayTotal();


  //Display List of all Products statistics (Name , Quantity , total of sales for each product)
  function DisplayStatistics() {
    const products_statistics_element = document.querySelector(
      ".products_statistics"
    );

       //call the Statistics that saved on data.js files 
    const ProductStatistics = GETProductStatistics();

    if (ProductStatistics !== null && ProductStatistics.length > 0) {
      // Create a  HTML list for product statistics
      products_statistics_element.innerHTML = `
        <ul>
          ${ProductStatistics.map(
            (product) =>
              `<li>
              <div><strong>${product.name}</strong>  <span> Quantity: ${product.quantity}</span><span> Total: ${product.total} DH </span></div>
              </li>`
          ).join("")}
            </ul>`;
      console.log("Product statistics have been saved:", ProductStatistics);
    } else {
      products_statistics_element.innerHTML = `<h3>No product statistics available</h3>`;
    }
    
    //call the function of print
    PrintStatistics();
  }
  DisplayStatistics();
});


//Reset Products Properties(quantities & total) After Go back to PRODUCT page
function NewDay() {
  const productsTabLink = document.getElementById("product_tab_link");
  productsTabLink.addEventListener("click", () => {
    setTimeout(() => {
      window.location.href = "pruducts.html";
    }, 500);
      //call Reset function from data.js files
    resetQuantitiesAndTotal();
  });
}
NewDay();


//add current date and time to Report that printed
function GetCurrentDateAndTime() {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  return `${date} ${time}`;
}

//print statistics after click on print button
function PrintStatistics() {
  const PrintButton = document.getElementById("print_statistics");
  const StatisticsSection = document.getElementById("statistics");
  PrintButton.addEventListener("click", () => {
    const DateTime = GetCurrentDateAndTime();
    const datetimePosition = document.createElement("div");
    datetimePosition.style.textAlign = "center";
    datetimePosition.style.marginTop = "0px";
    datetimePosition.innerHTML = ` <p>${DateTime}</p>`;
    StatisticsSection.appendChild(datetimePosition);

    window.print();
    StatisticsSection.removeChild(datetimePosition);
  });
}
