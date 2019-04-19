// ### Zadanie 5
// Napisz funckję ```isPrimeNumber(n)```, która jako argument przyjmuje liczbę ```n```.
// Funkcja **ma zwrócić** wartość true lub false, w zależności od tego czy liczba ```n``` jest liczbą pierwszą czy nie.

// *Liczba pierwsza to liczba podzielna przez jeden i samą siebie.*

// *Zastosuj algorytm **brute force**. Jest to najprostsza &ndash; a zarazem najbardziej czasochłonna metoda wyznaczania liczb pierwszych.
// Polega na tym, aby sprawdzić wszystkie potencjalne dzielniki danej liczby &ndash; jeżeli dana liczba nie dzieli się przez żadną inną liczbę (oprócz jeden i samej siebie), to jest ona oznaczana jako pierwsza.
// W celu optymalizacji algorytmu sprawdza się wszystkie potencjalne dzielniki nie większe niż pierwiastek z samej sprawdzanej liczby.  Większe wartości nie mogą być już dzielnikami.
// W celu otrzymania reszty z dzielenia użyj operatora **%** (modulo),* np.

// ```JavaScript
// 12 % 5 = 2
// ```


var n = 9;

function isPrimeNumber(n) {
    var sqrt = Math.floor(Math.sqrt(n));
    var prime = n != 1;
    for (var i = 2; i < sqrt + 1; i++) {
        if (n % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

console.log(isPrimeNumber(n));