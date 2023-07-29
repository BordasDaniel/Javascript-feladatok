// Írj egy programot, amely bekér egy pozitív egész számot a felhasználótól és kiírja a képernyőre azokat a pozitív hárommal osztható számokat, amelyek kisebbek az adott számnál!



function declare(integer){
    const DEVIDEABLE = new Array();
    for (let i = 1; i <= integer; i++){
        if (i % 3 == 0) DEVIDEABLE.push(i);
    } // for end

    if (DEVIDEABLE.length === 0) DEVIDEABLE.push('None');
    alert('The devideable numbers between 1 and ' +  integer + ' are: ' + DEVIDEABLE);
    console.log(...DEVIDEABLE);
} // function end


function main(){
    let integer = parseInt(prompt('Let me know your number:'));
    declare(integer);

} // function end


main();