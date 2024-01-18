/* OROLOGIO STAMPATO ALL'ORARIO CORRENTE

const timerCountdown = document.getElementById('timerCountdown');

const timeNow = setInterval(function () {

    let dataAttuale = new Date();

    let ore = dataAttuale.getHours();
    let minuti = dataAttuale.getMinutes();
    let secondi = dataAttuale.getSeconds();

    ore = ore < 10 ? '0' + ore : ore;
    minuti = minuti < 10 ? '0' + minuti : minuti;
    secondi = secondi < 10 ? '0' + secondi : secondi;

    timerCountdown.innerText = `${ore} : ${minuti} : ${secondi}`;
    console.log(timerCountdown.innerText);

}, 1000);

*/

/* OROLOGIO STAMPATO A RITROSO

const timerCountdown = document.getElementById('timerCountdown');

let dataAttuale = new Date();

let ore = dataAttuale.getHours();
let minuti = dataAttuale.getMinutes();
let secondi = dataAttuale.getSeconds();

ore = ore < 10 ? '0' + ore : ore;
minuti = minuti < 10 ? '0' + minuti : minuti;
secondi = secondi < 10 ? '0' + secondi : secondi;

const timeNow = setInterval(function () {

    secondi--

    if (secondi === 0) {

        secondi = 59;
        minuti--
    }

    if (minuti === 0) {

        minuti = 59;
        ore--
    }

    timerCountdown.innerText = `${ore} : ${minuti} : ${secondi}`;
    console.log(timerCountdown.innerText);

}, 1000);

*/

const timerCountdown = document.getElementById('timerCountdown');


const timeNow = setInterval(function () {

    function calcolaTempoRimanente() {
        // Ottieni la data e l'ora correnti
        let now = new Date();

        // Imposta la data e l'ora desiderate (domani alle 9:30:00)
        let targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 9, 30, 0);

        // Calcola la differenza di tempo in millisecondi
        let tempoRimanenteMillis = targetTime - now;


        // Calcola ore, minuti e secondi dalla differenza di tempo
        let ore = Math.floor(tempoRimanenteMillis / (1000 * 60 * 60));
        let restoMillis = tempoRimanenteMillis % (1000 * 60 * 60);
        let minuti = Math.floor(restoMillis / (1000 * 60));
        restoMillis %= (1000 * 60);
        let secondi = Math.floor(restoMillis / 1000);

        return { ore, minuti, secondi };
    }

    let tempoRimanente = calcolaTempoRimanente();

    timerCountdown.innerText = `${tempoRimanente.ore} : ${tempoRimanente.minuti} : ${tempoRimanente.secondi}`;
    console.log(timerCountdown.innerText);

}, 1000);