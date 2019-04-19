// ## Zadanie 7 (~ 15min - 20min)
// Napisz funkcję ```rockPaperScissors(player1, player2)```, która będzie pobierać dwa napisy i na ich podstawie zwracać informacje, kto wygrał. Poprawne napisy przyjmowane przez funkcję to: papier, nozyce, kamien.

// Funkcja ma zwracać jeden z czterech napisów:
// * "Gracz 1 wygrał",
// * "Gracz 2 wygrał",
// * "Remis",
// * "Błędne informacje".

// Przykład:
// ```JavaScript
// input -> "papier", "nozyce"
// output -> "Gracz 2 wygrał"



function rockPaperScissors(player1, player2) {
    var correct = ["papier", "nozyce", "kamien"];

    if (player1 === "papier" && player2 === "papier" || player1 === "kamien" && player2 === "kamien" || player1 === "nozyce" && player2 === "nozyce") {
        return 'remis';
        console.log(`remis`);
    } else if ((player1 === "papier" && player2 === "kamien") || (player1 === "kamien" && player2 === "nozyce") || (player1 === "nozyce" && player2 === "papier")) {
        return 'wygral gracz 1';
        console.log(`wygral gracz 1`);
    } else {
        return 'wygral gracz 2';
        console.log(`wygral gracz 2`);
    }
};

console.log(rockPaperScissors("papier", "kamien"));