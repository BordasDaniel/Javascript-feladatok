// Írj egy programot, amely bekér egy dátumot három pozitív egész számként (év, hó, nap)! A program határozza meg, hogy az adott dátum az év hányadik napja!

// Ez gyorsabb...

function calculate(year, month, day){
    let today = new Date();
    console.log(Math.ceil((today - new Date(today.getFullYear(),0,1)) / 86400000));
} // function end

/*

new Date szintaxis : new Date(year, monthIndex, day);
today.getFullYear: int-tel tér vissza (jelenlegi év).

let today = new Date();
Ezzel a sorral létrehozunk egy új Date objektumot today néven, amely a jelenlegi dátumot és időt reprezentálja.

new Date(today.getFullYear(), 0, 1)
Itt létrehozunk egy másik Date objektumot, amely a jelenlegi év első napját reprezentálja. today.getFullYear() visszaadja a jelenlegi évet, a 0 pedig januárt jelenti (a hónapokat zéróval indexeljük JavaScriptben), és a 1 pedig a hónap napját jelenti.

(today - new Date(today.getFullYear(), 0, 1))
Ez kiszámolja a jelenlegi dátum (today) és az év első napja között eltelt időt. Ennek az kivonásnak az eredménye időtartam lesz milliszekundumban.

Math.ceil((today - new Date(today.getFullYear(), 0, 1)) / 86400000);
Ez a sor kiszámolja az eltelt napok számát a jelenlegi dátum és az év első napja között.
86400000 az egy napban lévő milliszekundumok száma (24 óra * 60 perc * 60 másodperc * 1000 milliszekundum).
Az előző kivonás eredményét elosztjuk 86400000-el, hogy az időtartamot milliszekundumokból napokká alakítsuk.
Math.ceil() azt szolgálja, hogy felfelé kerekítse az osztás eredményét, hogy biztosítsa, hogy a részleges napokat is teljes napként számolja. Ez fontos, mivel a jelenlegi napot is be szeretnénk számolni.
*/





function input(){
    const year = parseInt(prompt('Let me know your year:'));
    const month = parseInt(prompt('Let me know your month:'));
    const day = parseInt(prompt('Let me know your day:'));
    return [year, month, day];
} // function end

function main() {
    const [year, month, day] = input();
    calculate(year, month, day);
} // function end

main();