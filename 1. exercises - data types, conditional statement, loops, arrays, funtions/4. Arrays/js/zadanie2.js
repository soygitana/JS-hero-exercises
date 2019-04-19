// ### Zadanie 2 (~ 10min - 15 min)

// Stwórz tablicę z losowymi liczbami (10 liczb) z przedziału 1-60. Wylosuj liczby za pomocą Math.random(). Następnie sprawdź każdą liczbę w tablicy i zmodyfikuj tak, aby była parzysta. Przykład:

// ```JavaScript
// Przykładowa tablica:  [4, 55, 17, 22, 1, 43, 53, 11, 9, 20];
// Zmodyfikowana tablica: [4, 56, 18, 22, 2, 44, 54, 12, 10, 20];
// ```


var arr = [];
var min = 1;
var max = 60;


for (i = 0; i < 10; i++) {
    var nr = Math.floor(Math.random() * (max - min) + min);
    arr.push(nr);
};

console.log(nr);
var newArrayEven = [];

for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        newArrayEven.push(arr[i] + 1);
    } else {
        newArrayEven.push(arr[i]);
    }
};

console.log(newArrayEven);