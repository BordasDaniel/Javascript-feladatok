// Írj egy programot, amely bekér egy pozitív egész számot a felhasználótól és kiírja a képernyőre azt a számot, amely az ennél a számnál nem nagyobb pozitív egész számok összege!



function write(integer){
    let equal = 0;
     for (let i = 0; i < integer; i++){
        equal += i;
     } // for end
     alert(equal);

} // function end

function main(){
    let integer = parseInt(prompt('Let me know your number:'));
    write(integer);

} // function end


main();