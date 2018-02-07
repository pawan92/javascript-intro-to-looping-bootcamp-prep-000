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

function whileLoop(n){
  int i =n
  while(i>0){
    console.log(--n);
    
  }
  return 'done';
}