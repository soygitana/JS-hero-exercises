// ### Zadanie 8 (~ 15min - 20min)
// Napisz funkcję ```calculateTip(amount, raiting)```, która będzie przyjmować dwa argumenty:
// * kwotę do zapłaty,
// * opis słowny obsługi.
// Jeśli opis jest taki jak zdefiniowano poniżej, funkcja ma zwracać kwotę napiwku, jeśli opis jest nieznany &ndash; funkcja powinna zwracać napis "Opis nieczytelny".

// Opis może przyjmować następujące wartości:
// "Bardzo dobra obsluga" => 25% napiwku,
// "Dobra obsluga" => 20% napiwku,
// "Srednia obsluga" =>15% napiwku,
// "Zla obsluga" => 0% napiwku.

// Przykład:
// ```JavaScript
// input -> 100, "Bardzo dobra obsluga"
// output -> 25
// ```

function calculateTip(amount, raiting) {
    var tip = 0;
    var unknown = "";
    if (raiting === "Bardzo dobra obsluga") {
        tip = amount / 4;
        return tip;
    }
    if (raiting === "Dobra obsluga") {
        tip = amount / 5;
        return tip;
    }
    if (raiting === "Srednia obsluga") {
        tip = amount / 6;
        return tip;
    }
    if (raiting === "Zla obsluga") {
        tip = 0;
        return tip;
    } else {
        unknown += "Opis nieczytelny";
        return unknown;
    }
};


console.log(calculateTip(100, "Dobra obsluga"));