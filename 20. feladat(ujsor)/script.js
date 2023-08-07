// Írj egy programot, amely bekér egy szót (sztringet) a felhasználótól és kiírja a képernyőre a szó betűit, úgy, hogy minden betű egy új sorba kerüljön!


function write(word){
    for (let i = 0; i < word.length; i++){
        console.log(word[i]);
    } // for end
} // function end

function main(){
    const word = prompt('Let me know your word:');
    alert('Look the console.');
    write(word);
} // function end

main();