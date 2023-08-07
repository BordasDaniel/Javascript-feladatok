// Írj egy programot, amely bekér két szót (sztringet) a felhasználótól és kiírja a képernyőre, hogy van-e olyan betű, amelyik mind a kettőben előfordul!


function declare(WORD1_EXTRACTED, WORD2_EXTRACTED){
    const JOINT = new Array();

    for (let i = 0; i < WORD1_EXTRACTED.length; i++){
        if (WORD2_EXTRACTED.includes(WORD1_EXTRACTED[i]) && !(JOINT.includes(WORD1_EXTRACTED[i])) ){
            JOINT.push(WORD1_EXTRACTED[i]);
        } else {
            continue;
        }// if end
    } // for end

    for (let i = 0; i < WORD2_EXTRACTED.length; i++){
        if (WORD1_EXTRACTED.includes(WORD2_EXTRACTED[i]) && !(JOINT.includes(WORD2_EXTRACTED[i]))){
            JOINT.push(WORD2_EXTRACTED[i]);
        } else {
            continue;
        } // if end
    } // for end
    console.log(JOINT);
    return JOINT.length > 0 ? JOINT : 'None';

} // function end

function extract(WORD1, WORD2){
    const WORD1_EXTRACTED = new Array();
    const WORD2_EXTRACTED = new Array();
    console.log(WORD1_EXTRACTED, WORD2_EXTRACTED);

    for (let i = 0; i< WORD1.length; i++){
        WORD1_EXTRACTED.push(WORD1[i]);
    } // for end
    
    for (let i = 0; i < WORD2.length; i++){
        WORD2_EXTRACTED.push(WORD2[i]);
    } // for end

    return [WORD1_EXTRACTED, WORD2_EXTRACTED];
} // function end


function input(){
    const WORD1 = prompt('Let me know your first word:');
    const WORD2 = prompt('Let me know your second word:');
    return [WORD1, WORD2];
} // function end

function main(){
    const [WORD1, WORD2] = input();
    const [WORD1_EXTRACTED, WORD2_EXTRACTED] = extract(WORD1, WORD2);
    const LETTERS = declare(WORD1_EXTRACTED, WORD2_EXTRACTED);
    alert('Found letter(s): ' + LETTERS);
} // function end

main();
