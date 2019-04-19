// ### Zadanie 1 (~ 10min - 15 min)
// Stwórz tablicę z dowolnymi liczbami. Następnie oblicz średnią arytmetyczną z liczb znajdujących się w tej tablicy i wypisz ją w konsoli.

// ```JavaScript
// var avg = [4, 4, 1, 2, 5, 40];
// Wynik w konsoli: 9.333
// ```


var arr = [];

for (var i = 0; i < 5; i++) {
    var nr = Math.floor(Math.random() * 10 + 1);
    arr.push(nr);
};

console.log(nr);

var sum = 0;

for (var i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i], 10);
};

console.log(sum);

var avg = sum / arr.length;


console.log("The sum of all the elements is: " + sum + " The average is: " + avg);