// happy coding 👻
function fibonacci(n:number):number {
    if (n==0||n==1){
        return 1;
    }else {
        return fibonacci(n-1) + fibonacci(n-2)
    }
}
let sum = 0;
for (let i = 0; i <10 ; i++) {
    console.log(fibonacci(i));
    sum+= fibonacci(i)
}
console.log(sum);