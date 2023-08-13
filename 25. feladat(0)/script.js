// Írj egy programot, amely a felhasználótól pozitív számokat kér be mindaddig, amíg a felhasználó nullát nem ad be! A program az összes értéket tárolja egy listában, majd írja ki a képernyőre a lista elemeit fordított sorrendben!


function input(){
    const INTEGERS = new Array();
    let integer;
    while(!(integer === 0)){
        integer = parseInt(prompt('Let me know your number:'));
        switch(true){
            case isNaN(integer):
                alert('Incorrect input.');
                break;
            case integer < 0:
                alert('The given number is lower than 0.');
                break;
            case integer > 0 && !(integer === 0):
                INTEGERS.push(integer);
                break;
        } // switch end
    } // while end
    return INTEGERS;
} // function end

function main(){
    const INTEGERS = input();
    console.log(INTEGERS);
} // function end

main();