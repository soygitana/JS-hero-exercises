// ### Zadanie 1 (~ 10min - 15 min)

// Napisz program, który na podstawie wartości zmiennej **n** wypisuje wszystkie liczby od zera do **n**.
// Przy każdej liczbie program ma napisać, czy  liczba jest parzysta czy nie. Np.:

// ```JavaScript
// 0 – parzysta
// 1 – nieparzysta
// 2 – parzysta
// 3 – nieparzysta
// ...
// ```


var n = 8;

for (i = 0; i <= n; i++) {
    if (i % 2 === 0) {
        console.log(`${i} ta liczba jest parzysta`)
    } else {
        console.log(`${i} ta liczaba jest nieparzysta`)
    }
}