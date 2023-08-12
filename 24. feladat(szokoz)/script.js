// Írj  egy  Python  programot,  amely  bekér  a  felhasználótól  egy  sztringet  és  ezt  úgy  íratja  ki,  hogy  a szóköz karaktereket kihagyja!


function write(SENTENCE){
    console.log(SENTENCE.replace(/ /gi, ""));
    // vagy:
    /*
const SENTECE_EXTRACTED = new Array();
    for (let i = 0; i <= SENTENCE.length; i++){
        if (SENTENCE[i] !== ' ') SENTECE_EXTRACTED.push(SENTENCE[i]);
    } // for end
    console.log(SENTECE_EXTRACTED.join('')); 
    */
} // function


function main(){
    const SENTENCE = prompt('Let me know your sentence:');
    write(SENTENCE);
} // function end


main();

