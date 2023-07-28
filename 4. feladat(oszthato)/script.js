// Írj egy programot, amely bekér egy egész számot a felhasználótól és kiírja a képernyőre, hogy osztható-e (igen/nem) a szám 3-mal vagy 5-tel!

function devision(integer){
    let canBeDividedBy = new Array();
    if (integer % 3 == 0){
        canBeDividedBy.push(3);
    } if (integer % 5 == 0){
        canBeDividedBy.push(5);
    }
    switch(true){
        case canBeDividedBy.includes(3) && canBeDividedBy.includes(5):
            alert('The number can be divided by: 3 and 5');
            break;
        case canBeDividedBy.includes(3):
            alert('The number can be divided by: 3');
            break;
        case canBeDividedBy.includes(5):
            alert('The number can be divided by: 5');
            break;
        default:
            alert('Your number cannot be devided by: 3 or 5');
    } // switch end

} // function end

function main(){
    let integer = parseInt(prompt('Let me know your number:'));
    devision(integer);

} // function end

main();