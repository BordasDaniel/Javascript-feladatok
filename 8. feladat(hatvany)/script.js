// Írj egy programot, amely bekér egy valós (A) és egy egész (K) számot  a felhasználótól és kiírja a képernyőre az AK hatvány értékét anélkül, hogy használnád a ** operátort! 


function main(){
    let A = parseInt(prompt('Let me know you number:'));
    let K = parseInt(prompt('Let me know you number:'));
    alert('Your number is: ' + Math.pow(A, K));
} // function end

main();