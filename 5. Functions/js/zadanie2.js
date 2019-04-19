// ### Zadanie 2 (~ 5min - 10min)
// Napisz funkcję, która przyjmuje jako argument liczbę **n** i wyświetla **n** razy na stronie napis "Programowanie jest fajne!".


function myFunction(n) {
    for (i = 0; i <= n; i++) {
        console.log("Programowanie jest fajne!", i);
    }
};

console.log(myFunction(50));