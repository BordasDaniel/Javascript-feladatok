// Írj egy eljárást, amely paraméterként kap egy egész számot és kiírja a képernyőre az ennél kisebb értékű elemeit a Fibonacci sornak!


function write(integer){
     const Fibonacci = new Array();
    for (let i = integer-1; i > 0; i--){
        Fibonacci.push(i**2);
    } // for end
    console.log('Star from: ' + integer + ' end at: ' + 1);
    console.log(...Fibonacci);
} // function end

function main(){
    let integer = parseInt(prompt('Let me know your number:'));
    write(integer);
} // function end

main();