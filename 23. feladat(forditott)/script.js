// Írj egy programot, amely bekér a felhasználótól egy mondatot (sztringet) és ennek szavait (szóközzel elválasztott részsztringjeit) fordított sorrendben kiírja a képernyőre!


function extract(SENTENCE){
    const EXTRACTED_SENTENCE = SENTENCE.split(" ");
    console.log(EXTRACTED_SENTENCE.reverse());
    } // function end


function main(){
    const SENTENCE = prompt('Let me know your sentence:');
    extract(SENTENCE);
} // function end

main();