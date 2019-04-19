// ### Zadanie 4

// Napisz funkcję ```getFibonacciNumbers(n)```, która przyjmuje jako argument liczbę ```n```.
// Funkcja **ma zwrócić** tablicę wypełnioną  ciągiem **n** liczb Fibonacciego.

// *Ciąg Fibonacciego to ciąg liczb, gdzie każda liczba to suma dwóch poprzednich.
// Jeśli n będzie równe 0 zwróć 0, Jeśli n będzie równe 1 zwróć 1
// W przeciwnym przypadku zobacz przykład niżej:*

// Przykład:
// ```JavaScript
// var n = 9;
// console.log(getFibonacciNumbers(n));
// Wynik w consoli: [0, 1, 1, 2, 3, 5, 8, 13, 21]
// ```


var n = 9;


function getFibonacciNumbers(n) {
    var x = 0;
    var y = 1;
    var arr1 = [0, 1];

    for (i = y; i < n; i++) {
        y += x;
        x = y - x;
        arr1.push(y);
    }
    return arr1;
};

console.log(getFibonacciNumbers(n))