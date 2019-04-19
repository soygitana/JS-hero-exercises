// ### Zadanie 3 (~ 5min - 10min)
// Napisz funkcję, która przyjmuje jako argumenty trzy liczby i **zwraca** największą z nich (zwraca, a nie wypisuje na ekranie). Wypisać możesz dopiero jak zwrócisz wynik z funkcji.



function myFunction(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
};

console.log(`najwieksza liczba to ${myFunction(8,9,5)}`);