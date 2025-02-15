// Save daily total in localStorage
export function saveDailyTotal(day_total){
  localStorage.setItem("daily_total" , JSON.stringify(day_total));
}

//Get Daily total from localStorage
export function getDailyTotal(){
    const Montant = JSON.parse(localStorage.getItem("daily_total")) ;
    if(Montant==null){
        return null;
    }
    return Montant;
  }

  //Save Product statistics in Localstorage
export function SAVEProductStatistics(Products){
       //get old data to change & updating it after each sale
  let NewProductData = localStorage.getItem("Products");
  if(!NewProductData){
    NewProductData = [];
  }else{
    try{
      NewProductData = JSON.parse(NewProductData)

    }catch (error){
       console.error("data not valid ")
       NewProductData = [];
    }
  }
    // push new Data to New Sale
    // NB: old data of product saving in storage (we added new data to old )
   Products.forEach(Product => {
    
        //when product has find
    let newData= NewProductData.find(P=> P.name === Product.name);
    if(newData){
      newData.quantity+= parseInt(Product.quantity);
      newData.total = (parseFloat(newData.total) + (parseFloat(Product.price)) * (parseFloat(Product.quantity)));
       
      //when product has not find we create new product
    }else
       NewProductData.push({
      name:Product.name,
      quantity:parseInt(Product.quantity),
      total: (parseFloat(Product.price) * parseInt(Product.quantity)).toFixed(2),

    });
  });
  localStorage.setItem("Products" , JSON.stringify(NewProductData));
  console.log("Product statistics have been saved:", NewProductData);
}

// Get the  product statistic 
export function GETProductStatistics(){
  let ProductsData =localStorage.getItem("Products");
  ProductsData = JSON.parse(ProductsData)
  if(ProductsData){
    return ProductsData;
  }
  return [];
}

// Reset products properties to stared enw day
export function resetQuantitiesAndTotal(){
  let ProductsData = localStorage.getItem("Products");
  ProductsData = JSON.parse(ProductsData);
  if(ProductsData){
    ProductsData.forEach(Product=>{
      Product.quantity=0;
      Product.total=0;
    });
  }else{
    ProductsData = [];
  }
  localStorage.setItem("Products" , JSON.stringify(ProductsData));
  console.log("quantities has been reset");
}





