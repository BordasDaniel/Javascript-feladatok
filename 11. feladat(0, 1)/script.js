// Írj egy programot, amely bekér egy pozitív egész számot a felhasználótól és kiírja a képernyőre felváltva a 0 és 1 számjegyeket úgy, hogy a számjegyek együttes darabszáma pontosan a megadott szám legyen!

function write(integer){
    const INTEGERS = new Array();
    for (let i = 0; i < integer; i++){
        if (i%2 == 0){
            INTEGERS.push(0);
        } else{
            INTEGERS.push(1);
        } // if end
    } // for end
    console.log(...INTEGERS);
    console.log('The length of the INTEGERS array is: '+ INTEGERS.length);
} // function end


function main(){
    let integer = parseInt(prompt('Let me know your number:'));
    write(integer);

} // function end

main();