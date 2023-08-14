// Írj egy programot, amelyben megadsz egy tetszőleges listát, majd a program létrehoz egy másik listát, amelynek elemei megegyeznek az előbbi lista elemeivel ismétlődések nélkül!



function duplicate(INTEGERS){
    const DUPLICATED = INTEGERS.slice();
    // vagy : const DUPLICATED = INTEGERS.concat(); // A slice gyorsabb mint a concat.
    console.log(DUPLICATED);
} // function end

function list(){
    const INTEGERS = new Array();
    let index;
    while (index !== 0){
        index = parseInt(prompt('Let me know your number:'));
        switch(true){
            case index === 0 || isNaN(index):
                continue;
            default:
                INTEGERS.push(index);
        } // switch end
    } // for end
    return INTEGERS
} // function end


function main(){
    INTEGERS = list();
    duplicate(INTEGERS);
} // function end

main();