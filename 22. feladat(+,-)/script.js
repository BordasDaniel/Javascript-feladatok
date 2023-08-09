// Írj egy eljárást, amely paraméterként kap egy pozitív egész számot és kiír a képernyőre ennyi karaktert  úgy,  hogy minden  harmadik karakter  pluszjel  (+)  legyen  a  többi viszont  mínuszjel  (-)!  A programodban hívd is meg ezt az alprogramot!



function sort(integer){
    const list = new Array();
    for (let i = 1; i <= integer; i++){
        i % 3 === 0 ? list.push('+') : list.push('-');
    } // for end
    console.log(...list);
} // function end


function main(){
    const integer = parseInt(prompt('Let me know your number:'));
    sort(integer);
} // function end

main();