// Írj egy programot, amely bekér egy 20-nál nem nagyobb pozitív egész számot a felhasználótól és kiírja a képernyőre a START szót úgy, hogy előtte annyi szóköz legyen amennyi a megadott szám értéke!


function input(){
    let integer;
    while (typeof(integer) === 'undefined'){
        let user = parseInt(prompt('Let me know your number:'));
        if (user < 20 && user > 0){
            integer = user;
        }
    } // while end
    return integer;
} // function end

function write(START, spaces){
    const PLACEHOLDER = [START];
    for (let i = 0; i < spaces; i++){
        PLACEHOLDER.unshift(' ');
    } // for end
    console.log(...PLACEHOLDER);
} // function end


function main(){
    const START = 'START';
    let spaces = input();
    write(START, spaces);
} // function end


main();