// Írj egy logikai értékkel visszatérő függvényt, amely paraméterként kap egy egész számot és eldönti a számról, hogy osztható-e 2-vel és 3-mal is egyszerre! A programodban hívd is meg ezt az alprogramot!



function judgement(INTEGER){
    return INTEGER %2 === 0 && INTEGER %3 === 0 ? true : false;
} // function end


function main(){
    const INTEGER = parseInt(prompt('Let me know your number:'));
    const JUDGE = judgement(INTEGER);
    alert('The number can be devided by 2 and 3 at the same time: ' + JUDGE);
} // function end

main();