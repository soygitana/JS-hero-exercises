// ### Zadanie 5 (~ 5min - 10min)

// Stwórz funkcję anonimową i przypisz ją do zmiennej. Zadaniem funkcji jest wypisanie dziesięć razy: "Gdy piszę kod zawsze i wszędzie używam funkcji oraz nie tworzę zmiennych globalnych".


var myFunction = function () {
    for (i = 0; i < 10; i++) {
        console.log(`Gdy piszę kod zawsze i wszędzie używam funkcji oraz nie tworzę zmiennych globalnych`, i);
    }
};

myFunction();