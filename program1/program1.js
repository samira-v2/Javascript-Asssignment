// created by Samira Arte
const num = parseInt(prompt("enter a value"));
let text;
if (isNaN(num) || num < 1) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
console.log(text);
console.log('the prime numbers are');
for(let i=0;i<=num;i++){
    let c=0;
    for(let j=0;j<=num;j++){
        if(i%j==0){
            c++;
        }
    }
    if(c==2)
    {
        console.log(i);
    }
}