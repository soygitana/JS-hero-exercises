// ### Zadanie 1 (~ 5min - 10min)
// - Stwórz tyle zmiennych, ile różnych znasz typów.
// - Każdą odpowiednio nazwij i wstaw do nich odpowiednie dane.
// - Następnie dodaj do siebie różne zmienne i zobacz, jakiego typu jest wynik (użyj ```typeof```).
// - Napisz w komentarzu przy każdej zmiennej jej typ.
// Wypisz każdą zmienną w konsoli.
// Zwróć uwagę, jak zmieniają się typy danych w zależności od tego, jakie typy ze sobą dodajemy. Jest to tzw. niejawna konwersja danych (silnik JavaScript bez naszego udziału zmienia typ danych).
// - Zobacz przykład w pliku zadanie4.js i rozwiązuj analogicznie.

var myNumber = 6; // type number
var myString = "Paula"; // type string 
var myLogic = true; // type boolean
var myUndefined; // type undefined
var isNothinghere = null; // type null 
var mySymbol = Symbol("p"); // type symbol

console.log(myNumber + myString, typeof 'myNumber + myString');
console.log(myNumber + myLogic, typeof 'myNumber + myLogic');
console.log(myUndefined + myString, typeof 'myUndefined + myString');
console.log(typeof 'isNothinghere + myLogic');
console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myLogic);
console.log(typeof myUndefined);
console.log(typeof isNothinghere);
console.log(typeof mySymbol);