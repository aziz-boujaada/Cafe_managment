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
    quantity:Product.quantity,
    total:parseFloat(prod)
  }));
}

export function GETProductStatistics(){
  const product_statistics = localStorage.getItem("ProductStatistics")
  if(product_statistics==null){
    return null
  }
  return product_statistics;
}
