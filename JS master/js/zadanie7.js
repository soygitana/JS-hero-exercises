// ### Zadanie 7
// Napisz funckję ```whatNumber(n)```, która jako argument przyjmuje liczbę ```n```.
// Funkcja **ma zwracać** informację czy podana liczba ```n``` jest liczbą doskonałą, niekompletną czy żadną z tych .
// Jeśli liczba jest doskonała zwróć -> "doskonała"
// Jeżeli liczba jest niekompletna zwróć -> "niekompletna"
// Jeżeli liczba nie jest ani doskonała ani niekompletna zwróć -> false

// *Liczba doskonała to taka liczba, która jest sumą wszystkich swoich dzielników (mniejszych od niej). Jest to np. 6:*
// ```JavaScript
// 6 = 3 + 2 + 1
// ```

// *Liczba niekompletna to taka liczba, która jest większa od sumy wszystkich swoich dzielników. Jest to np. 10:*

// ```JavaScript
// 1+2+5=8 < 10
// ```

// Przykład:
// ```JavaScript
// var n = 6;
// console.log(whatNumber(n));
// Wynik w konsoli: "doskonała"

// var n = 10;
// console.log(whatNumber(n));
// Wynik w konsoli: "niekompletna"
// ```

function whatNumber(n) {
    var sum = 0;
    for (var i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }

    if (sum === n && sum !== 0) {
        console.log("doskonala");
    } else if (sum < n && sum !== 0) {
        console.log("niekompletna");
    } else {
        return false;
    }
};

whatNumber(28);