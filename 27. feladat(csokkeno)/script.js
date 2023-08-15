// Írj egy programot, amelyben megadsz egy tetszőleges egészeket tartalmazó listát, majd a lista elemeit csökkenő sorrendbe rendezed anélkül, hogy használnád a sort() metódust.


function list_output(INTEGERS){
    const INTEGERS_COPY = INTEGERS.slice();
    const INTEGERS_SORTED = new Array();
    while (INTEGERS.length !== 0){
        let index = INTEGERS.indexOf(Math.max(...INTEGERS));
        let element = INTEGERS.splice(index, 1)[0];
        INTEGERS_SORTED.push(element);
    } // while end
    return [INTEGERS_COPY, INTEGERS_SORTED];
} // function end


function list_input(){
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
    } // while end
    return INTEGERS
} // function end


function main(){
    const INTEGERS = [2, 3, 4, 4, 22, 6, 1, 0, -1];
    const [INTEGERS_COPY, INTEGERS_SORTED] = list_output(INTEGERS);
    console.log('Eredeti: ' + INTEGERS_COPY);
    console.log('Csökkenő: ' + INTEGERS_SORTED);
} // function end


main();
