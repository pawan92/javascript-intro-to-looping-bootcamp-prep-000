function forLoop(array){
  for(i=0;i<25;i++){
    if(i<=1)
    {
      array.push("I am 1 strange loop.");
    }
    else
    {
      array.push(`I am ${i} loop.`);
    }
    
  }
  return array;
  
}

function whileLoop(n) {
  let i = n;
 
     while (i > 0) {
       console.log(--i)
     }
     return "done";
   }