function checkAge(age) {
  if(age >= 18){
    return "You are an adult";
  } else {
    return "You are a minor";
  }
}

console.log(checkAge(20));
console.log(checkAge(15)); 