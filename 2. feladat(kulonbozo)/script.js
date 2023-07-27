// Írj egy programot, amely bekér három számot a felhasználótól és kiírja a képernyőre, hogy három különböző értéket kapott-e!


function input(){
    let list = [];
    let i = 0;
    while (list.length !== 3){
        let user = parseInt(prompt('Please give me the ' + (i+1) + 'th number!'));
        if (typeof user === 'number' && !Number.isNaN(user)){
            list.push(user);
            i++;
        } else {
            alert("It wasn't an integer!")
        }
    } 
    return list;
}

function declare(list){
    let seen = [];
    let duplicate = []
    for (let i = 0; i < list.length; i++){
        if (seen.includes(list[i]) && !duplicate.includes(list[i])){
            console.log('Found duplicate: ' + list[i]);
            duplicate.push(list[i]);
        } else {
            seen.push(list[i]);
        }
    }
    console.log(seen, duplicate);
    return duplicate;
}

function main(){
    let list = input();
    let duplicate = declare(list);
    console.log('Found duplicates: ' + (duplicate.length !== 0 ? duplicate : "There aren't any duplicates"));
}


main();