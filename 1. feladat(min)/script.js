// Írj egy programot, amely bekér három számot a felhasználótól és kiírja a képernyőre a legkisebb értéket ezek közül!


function main(){
    let list = []
    for (let i = 1; i <= 3; i++){
        let user = parseInt(prompt('Add meg a(z) ' + i +'. számot!'));
        list.push(user);
    }
    const MINIMUM = Math.min(... list);
    console.log(MINIMUM);
}

main();