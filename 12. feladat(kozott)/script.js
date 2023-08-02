// Írj egy programot, amely először bekér egy kisebb majd egy nagyobb pozitív valós számot a felhasználótól és kiírja a képernyőre azokat az egész számokat, amelyek a megadott értékek között  helyezkednek el!

function input(){
    let MIN = parseInt(prompt('Let me know your min number:'));
    let MAX = parseInt(prompt('Let me know your max number:'));
    return [MIN, MAX];
} // function end

function write(MIN, MAX){
    const INTEGERS = new Array();
    for (let i = MIN+1; i < MAX; i++){
        INTEGERS.push(i);
    } // for end
    console.log(INTEGERS);
} // function end


function main(){
    const [MIN, MAX] = input();
    write(MIN, MAX);
} // function end


main();