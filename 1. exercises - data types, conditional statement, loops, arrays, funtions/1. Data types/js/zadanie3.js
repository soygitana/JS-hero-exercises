// ### Zadanie 3 (~ 5min - 10 min)

// Wylosuj liczę z zakresu 5-100 i wypisz ją w konsoli.
// Skorzystaj ze wzoru:


// ```JavaScript
//  Math.random() * (max - min) + min
//  ```

var max = 100;
var min = 5;


var result = Math.floor(Math.random() * (max - min) + min);

console.log(result);