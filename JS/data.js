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
