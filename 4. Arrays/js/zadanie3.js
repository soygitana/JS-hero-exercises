// ### Zadanie 3 (~ 15min - 20min)

// Na podstawie dwóch  tablic, wypisz w konsoli elementy, które się powtarzają w obu tablicach.
// Załóż, że porównywane tablice są równe.
// Przykład:

//  ```JavaScript
//  var arr1 = [4, 55, 17, 22, 1];
// var  arr2 = [4, 53, 11, 22, 20];

// Wynik w consoli: 4,22;
// ```



var arr1 = [4, 55, 17, 22, 1];
var arr2 = [4, 53, 11, 22, 20];


for (i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
        console.log(arr1[i]);
    }
}