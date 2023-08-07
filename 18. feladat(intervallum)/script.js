// Írj egy függvényt, amely paraméterként kap 2 egész számot és visszatér a két szám által meghatározott zárt intervallumban található egész számok összegével! A programodban hívd is meg ezt az alprogramot!


function declare(MIN, MAX){
    const INTEGERS = new Array();
    for (let i = MIN; i<=MAX; i++){
        INTEGERS.push(i);
    } // for end
    const SUM = INTEGERS.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue=0);
    return SUM;
} // function end

function input(){
    const MIN = parseInt(prompt('Let me know your min number:'));
    const MAX = parseInt(prompt('Let me know your max number:'));
    return [MIN, MAX];
} // function end

function main(){
    const [MIN, MAX] = input();
    const SUM = declare(MIN, MAX);
    alert('Your intervall sum value is: '+ SUM);
} // function end

main();