// ### Zadanie 1
// Napisz funkcje ```getSecondMaxNumber(array)```, która jako argument przyjmuje tablicę. Funkcja **ma zwrócić** drugą największą liczbę w tablicy.

// Przykład:
// ```JavaScript
// var arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
// console.log(getSecondMaxNumber(arr1));
// Wynik w consoli: 49 // Największą liczbą w tablicy jest 100, ale my szukaliśmy drugiej największej więc odpowiedzią musi być 49 w tym przypadku
// ```


var arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9];

function getSecondMaxNumber(array) {
    var firstNumber = 0;
    var secondNumber = 0;
    for (var i = 0; i < array.length; i++) {
        if (firstNumber < array[i]) {
            secondNumber = firstNumber;
            firstNumber = array[i];
        } else if (secondNumber < array[i]) {
            secondNumber = array[i];
        }
    }
    return secondNumber;
};

console.log(getSecondMaxNumber(arr1));