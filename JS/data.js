export function getDailyTotal(){
    const Montant = JSON.parse(localStorage.getItem("daily_total")) ;
    if(Montant==null){
        return null;
    }
    return Montant;
}

export function saveDailyTotal(day_total){
  localStorage.setItem("daily_total" , JSON.stringify(day_total));
}


export function SAVEProductStatistics(Products){
  const ProductsData = Products.map(Product =>({
    name:Product.name,
    quantity:parseInt(Product.quantity),
    total: (parseFloat(Product.price) * parseInt(Product.quantity)).toFixed(2),
  }));
  localStorage.setItem("Products" , JSON.stringify(ProductsData));

 
  console.log("Product statistics have been saved:", ProductsData);
}

export function GETProductStatistics(){
  const ProductsData = JSON.parse(localStorage.getItem("Products"));
  if(ProductsData==null){
    return null
  }
  return ProductsData;
}





