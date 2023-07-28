// Írj egy programot, amely bekér három számot a felhasználótól és kiírja a képernyőre, hogy a számok közül bármelyik kettőnek az összege egyenlő-e a harmadik számmal! 


function search(NUMBERS){
    switch(true){
        case NUMBERS[0] + NUMBERS[1] === NUMBERS[2]:
            alert('The sum of the first and second numbers is the same as the third number.');
            break;
        case NUMBERS[1] + NUMBERS[2] === NUMBERS[0]:
            alert('The sum of the second and the last numbers is the same as the first number.');
            break;
        case NUMBERS [0] + NUMBERS[2] === NUMBERS[1]:
            alert('The sum of the first and the last numbers is the same as the second number.');
            break;
        default:
            alert('There are no two pairs of numbers whose sum is the same as the third number.');
        } // switch end

} // function end

function input(){
    const NUMBERS = new Array();
    for (let i = 0; i < 3; i++){
        integer = parseInt(prompt('Let me know your number:'));
        NUMBERS.push(integer);
    }
    return NUMBERS;
} // function end

function main(){
    const NUMBERS = input();
    search(NUMBERS);

} // function end


main();