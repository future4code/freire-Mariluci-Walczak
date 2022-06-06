```function calculaNota(ex, p1, p2) {
  let media = ((ex * 1) + (p1 * 2) + (p2 * 3)) /(1+2+3)
  if( media >= 9){
     calculaNota = "A"
  }
  
  if(media < 9){
    if(media >+ 7.5){
      calculaNota = "B"
  } }
    
  if(media < 7.5){
    if(media >= 6){
        calculaNota = "C"
  } }
    
  if(media < 6){
    calculaNota = "D"
  }           
  return calculaNota  
       
  }```