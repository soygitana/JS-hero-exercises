// ## Zadania do samodzielnego wykonania

// ### Zadanie 1 (~ 5min - 10min)
// Napisz funkcję miksującą o nazwie ```miksowanie```, która jako argument będzie przyjmowała napis.
// Zadaniem funkcji **jest zwrócenie** tego napisu, ale poprzedzonego słowem ```zmiksowana ```. Funkcja ma zwracać nowo powstały napis (poprzez ```return```).
// Następnie wypisz w konsoli to, co zwróciła funkcja.

// Przykład:
// ```
// input -> "marchewka"
// output -> "zmiksowana marchewka"
// ```



function miksowanie(napis) {
    var newTxt = napis += " zmiksowana";
    return newTxt;
};

console.log(miksowanie("Paula"));