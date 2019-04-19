// ### Zadanie 2 (~ 10min - 15 min)
// Wylosuj liczbę z zakresu 1 - 10 i zapisz do zmiennej. Za pomocą metody `prompt()` poproś użytkownika o wpisanie liczby od 1 do 10. Jeśli użytkownik wpisał liczbę taką samą, wylosował komputer - wypisz w konsoli informacje "Brawo!", jeśli złą - "Spróbuj jeszcze raz!".

var min = 1;
var max = 10;

var result = Math.floor(Math.random() * (max - min) + min);

console.log(result);

var myNumber = parseInt(prompt("wpisz liczbe od 1 do 10"));

if (result === myNumber) {
    console.log("brawo");
} else {
    console.log("sprobuj jeszcze raz");
}