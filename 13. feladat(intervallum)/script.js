// Írj egy Python programot, amely bekér két pozitív egész számot a felhasználótól és kiírja a képernyőre azokat a páros számokat, amelyek  a  két  adott  érték  közötti  zárt  intervallumban találhatóak!


function input(){
    let MIN = parseInt(prompt('Let me know your number:'));
    let MAX = parseInt(prompt('Let me know your number:'));
    return [MIN, MAX];
} // function end

function write(MIN, MAX){
    const INTEGERS = new Array();
    for (let i = MIN; i <= MAX; i++){
        if (i % 2 == 0){
            INTEGERS.push(i);
        } // if end
    } // for end
    console.log(...INTEGERS);
} // function end

function main(){
    const [MIN, MAX] = input();
    write(MIN, MAX);
} // function end


main();