// Írj egy logikai értékkel visszatérő függvényt, amely paraméterként kap három számot és eldönti, hogy az összes paramétere pozitív-e! A programodban hívd is meg ezt az alprogramot!


function input(){
    const INTEGERS = new Array();
    for (let i = 0; i < 3; i++){
        let user = parseInt(prompt('Let me know your number:'));
        INTEGERS.push(user);
    } // for end
    return INTEGERS;
} // function end

function judgement(INTEGERS){
    for (let i = 0; i < INTEGERS.length; i++){
        if (!(INTEGERS[i]>=0)){
            alert('Found negative number: ' + INTEGERS[i]);
            return false;
        } else{
            continue;
        } // if end
    } // for end
    return true;
} // function end

function main(){
    const INTEGERS = input();
    const JUDGE = judgement(INTEGERS);
    alert('All of your numbers were positive: ' + JUDGE);

} // function end

main();