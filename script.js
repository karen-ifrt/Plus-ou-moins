let number = document.querySelector("#number");
let play = document.querySelector("#play");
let reponse = document.querySelector("#reponse");

let replay = document.querySelector("#replay");


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let trueNumber = getRandomInt(100);
let compt = 0;

function compare() {

    compt++;

    if (compt < 5) {
        if (number.value <= 100 && number.value >= 0 && number.value !="") {

            if (number.value < trueNumber) {
                reponse.innerHTML = "C'est plus";
            }

            else if (number.value > trueNumber) {
                reponse.innerHTML = "C'est moins";
            }

            else if (number.value == trueNumber) {
                reponse.innerHTML = "Bravo, le nombre est bien " + trueNumber;
            }
        }

        else {
            alert('Choisissez un nombre entre 0 et 100');
        }
    }

    else {
        alert('Game Over ! Le nombre était ' + trueNumber);
        number.classList.add("disabled");
        play.classList.add("disabled");
        replay.style.opacity = 1;
    }

}

function reload() {
    replay.style.opacity = 0;
    document.location.reload(true);
}