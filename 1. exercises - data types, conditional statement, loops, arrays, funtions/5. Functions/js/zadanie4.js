// ### Zadanie 4 (~ 10min - 15min)
// Stwórz funkcję, która **będzie zwracała** (poprzez ```return```) sumę liczb z tablicy. Tablica powinna być przekazana do funkcji jako argument.

// Przykład:
// ```JavaScript
// input -> [1,2,3]
// output -> 6
// ```

var arr = [5, 8, 8];

function myFunction(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(myFunction(arr));