// ### Zadanie 3 (~ 10min - 15 min)
// Niektórzy ludzie wierzą, że rok życia ludzkiego to siedem lat przeżytych przez psa.
// Stwórz zmienną ```menAge```, której ustaw wartość na 30, oraz zmienną ```pet``` przechowującą nazwę jakiegoś domowego zwierzaka np. "pies" lub "kot".

// Następnie za pomocą znanej Ci instrukcji warunkowej sprawdź jakiego zwierzaka wybrał użytkownik i w przypadku jeśli to jest pies oblicz ile ma lat względem człowieka.

var menAge = 30;
var pet = "pies";


var petChoosen = prompt("wybierz zwierze");

if (pet === petChoosen) {
    var petAge = menAge / 7;
    console.log("pies ma" + " " + Math.floor(menAge / 7) + " " + "lata");
} else {
    console.log("wybierz psa! :)");

}