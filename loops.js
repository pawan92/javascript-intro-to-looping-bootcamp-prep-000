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
   
function doWhileLoop(array){
  function maybeTrue() {
  return Math.random() >= 0.5
}
 
do {
  array.pop();
} while (array.length > 0 && maybeTrue());
  
  return array;
  
}