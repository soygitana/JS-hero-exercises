// ### Zadanie 6 
// Napisz funckję ```getPi(n)```, która jako argument przyjmuje liczbę ```n```, oznaczającą liczbę iteracji.
// Funkcja **ma zwracać** wartość liczby **Pi**. Użyj następującej formuły:

// ```JavaScript
// pi = 4 * ((1/1 - 1/3) + (1/5 - 1/7) + (1/9 - 1/11) + ...)
// ```
// Zobacz, jak zmienia się precyzja wyniku w zależności od liczby iteracji pętli.

// Przykład:
// ```JavaScript
// var n = 9;
// console.log(getPi(n));
// Wynik w konsoli: xxx
// ```

function getPi(n) {

    var Pi = 0;

    for (i = 0; i <= n; i++) {
        Pi = Pi + 4 * ((Math.pow(-1, i)) / ((2 * i) + 1))
    }

    return Pi;
};
console.log(getPi(10000));

// większa iteracja - wynik bardziej precyzyjny.