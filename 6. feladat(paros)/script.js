// Írj egy programot, amely bekér három egész számot a felhasználótól és kiírja a képernyőre, hogy mind a három páros szám-e (igen/nem)!


function declare(INTEGERS){
    const EVENS = new Array();
    if (INTEGERS[0] % 2 == 0){
        EVENS.push('first');
    } if (INTEGERS[1] % 2 == 0){
        EVENS.push('second');
    } if (INTEGERS[2] % 2 == 0){
        EVENS.push('third');
    } if (EVENS.length === 0){
        EVENS.push('None')
    }
    alert('The even numbers are: ' + EVENS);


} // function end

function input(){
    const INTEGERS = new Array();
    for (let i = 0; i < 3; i++){
        let integer = parseInt(prompt('Let me know your number:'));
        INTEGERS.push(integer);

    } // for end
    return INTEGERS;

} // function end

function main(){
    const INTEGERS = input();
    declare(INTEGERS);
    
} // function end


main();