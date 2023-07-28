// Írj egy programot, amely bekér egy dolgozat pontszámot (x) a felhasználótól és kiír egy érdemjegyet az alábbiak szerint! 1: x<50; 2: 50<=x<60; 3: 60<=x<70; 4: 70<=x<85; 5: x>=85.


function evaluation(points){
    switch(true){
        case points < 50:
            alert('Your result: 1');
            break;
        case 50 <= points && points < 60:
            alert('Your result: 2');
            break;
        case 60 <= points && points < 70:
            alert('Your result: 3');
            break;
        case 70 <= points && points< 85:
            alert('Your result: 4');
            break;
        case points >= 85:
            alert('Your result: 5');
            break;
    }
}

function main(){
    let points = parseInt(prompt('Let me know your earned points:'));
    evaluation(points);
}


main();