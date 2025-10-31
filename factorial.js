function factorial(n){
    if (n==1||n==0){
        return 1;
    }
    else{
       let result = 1;
       for(i=n; i>=1; i--){
           result=result*i;
       }
       return result;
    }
}
console.log(factorial(5));

function factorial(n){
    if (n=1 || n==0){

    }
}
function addition(n){
    let sum=0;
    for(let i=1; i<=n; i++ ){
        sum=sum+i;
    }
    return sum;
}
console.log(addition(14));
 
function addition(n){
    let sum=0;
    let i=1;
    while(i<=n){
      sum=sum+i;
        i++;
    }
    return sum;
}
console.log(addition(6));

function whileloop(n){
    let result=1;
 if (n==1 || n==0){
    return result;
 }
 let i=1;
 while(i<=n){
  result = result*i;
  i++;
 }
 return result;
}
console.log(whileloop(5));










