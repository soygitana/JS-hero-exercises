// ### Zadanie 3
// Napisz funkcję ```getEvenSum(n)```, która jako argument przyjmuje liczbę. Funkcja ma zwrócić sumę liczb parzystych od ```i = 1``` do ```n```.
// **Funkcja ma zwracać wynik**. Wynik możesz wypisać na konsoli.


// Przykład:
// ```JavaScript
// var n = 5;
// console.log(getEvenSum(n));
// Wynik w consoli:  6 // (bo 2 + 4 = 6)
// ```


var n = 7;

function getEvenSum(n) {
    var evenSum = 0;
    for (i = 1; i < n; i++) {
        if (i % 2 === 0) {
            evenSum += i;
        }
    }
    return evenSum;
};

console.log(getEvenSum(n))