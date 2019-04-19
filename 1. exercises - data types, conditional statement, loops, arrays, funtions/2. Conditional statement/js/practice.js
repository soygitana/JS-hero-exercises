// ### Losowanie &ndash;  (~ 5min - 10 min)

// Wylosuj liczbę z zakresu 1 - 100 i zapisz do zmiennej. Następnie sprawdź za pomocą instrukcji warunkowej czy liczba jest większa od 50 jeśli tak to wypisz w konsoli "Hura", w przeciwnym przypadku wypisz "liczba mniejsza niż 50".

var one = Math.floor(Math.random() * 100) + 1;

if (nr >= 50) {
    console.log("hura");
} else {
    console.log("liczba mniejsza niż 50");
}

// ### Korzystanie z prompt (~ 5min - 10 min)

// Za pomocą metody `prompt()` pobierz od użytkownika odpowiedź na pytanie "Ile masz lat?". Jeśli użytkownik jest pełnoletni - wypisz w konsoli informację "Jesteś pełnoletni", jeśli ma poniżej 18 lat - "Jesteś niepełnoletni".

var userAge = parseInt(prompt("ile masz lat?"));

if (userAge >= 18) {
    console.log("jestes pelnoletni")
} else {
    console.log("jestes niepelnoletni");
}