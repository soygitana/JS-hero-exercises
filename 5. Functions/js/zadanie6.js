// ### Zadanie 6 (~ 15min - 20min)
// Napisz funkcję ```rentCost(days)```, która będzie pobierać liczbę dni jako argument, a następnie wyliczać koszt wynajmu pokoju według podanego wzoru:
// * wynajem trwa jeden dzień, koszt pokoju 200 zł/dzień,
// * wynajem trwa od dwóch do trzech dni, koszt pokoju 180 zł/dzień,
// * wynajem trwa od czterech do siedmiu dni, koszt pokoju 160 zł/dzień,
// * wynajem trwa osiem lub więcej dni, koszt pokoju 150 zł/dzień.

// Dodatkowo za każdy pełny tydzień przysługuje 50 zł zniżki. Do wyliczenia pełnych tygodni użyj poniższego kodu:

// ```JavaScript
// var numbersOfWeeks = Math.floor(days / 7); //Math.floor jest metodą, która zaokrągla liczbę w dół.
// ```

// Przykład:
// ```JavaScript
// input -> 8
// output -> 1150
// ```

function rentCost(days) {
    var cena = 0;
    var numbersOfWeeks = Math.floor(days / 7);

    if (days === 1) {
        cena += 200;
    }
    if (days >= 2 && days <= 3) {
        cena += 180;
    }
    if (days >= 4 && days <= 7) {
        cena += 160;
    }
    if (days >= 8) {
        cena += 150;
    }
    if (numbersOfWeeks > 0) {
        cena -= 50;
    }

    console.log(`koszt pokoju to ${cena} zł za dzień`);
};

rentCost(6);