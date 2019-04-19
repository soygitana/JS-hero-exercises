// zadanie 1

var numberFirst = 8;
var numberSecond = 5;

if (numberFirst > numberSecond) {
    console.log(numberFirst + " " + "jest wiekszy niz" + " " + numberSecond);
} else {
    console.log(numberSecond + " " + "jest wiekszy niz" + " " + numberFirst);
}

// zadanie 2

var numberThird = 2;
var numberForth = 3;
var numberFifth = 4;

if (numberThird > numberForth && numberThird > numberFifth) {
    console.log("najwieksza liczba to" + " " + numberThird);
} else if (numberForth > numberThird && numberForth > numberFifth) {
    console.log("najwieksza liczba to" + " " + numberForth);
} else {
    console.log("najwieksza liczba to" + " " + numberFifth);
}

// zadanie 3

for (var i = 0; i <= 9; i++) {
    console.log("Lubie JavaScript")
}

// zadanie 4

var result = 0;

for (var i = 1; i <= 10; i++) {
    var result = result + i;
}

console.log(result);

// zadanie 5

var n = 5;

for (i = 0; i <= n; i++) {
    if (i % 2 === 0) {
        console.log(i + "-" + "parzysta");
    } else {
        console.log(i + "-" + "nieparzysta");
    }
}

// zadanie 6

for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 2; j++) {
        console.log("i=" + i + ", j=" + j);
    }
}

// Zadanie 7

/*
 Pętla zewnętrzna z licznikiem o zmiennej ```i``` zajmuje się
wierszami, a pętla wewnętrzna z licznikiem o zmiennej ```j``` zajmuje się kolumnami.
Zaczynamy od lewej górnej gwiazdki i przemieszczamy się w prawo będąc w pierwszym wierszu.
Kiedy pętla wewnętrzna dojdzie do ostatniej kolumny, kończy działanie. Wtedy pętla zewnętrzna
zwiększa licznik o 1 (przechodzi do kolejnego wiersza) i tak dalej.
*/

//Zmienna, przechowująca wielkość naszego kwadratu
var size = 5;

//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = "";

for (var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
    lineOfStars = "";
    for (var j = 0; j < size; j++) {
        //Do zmiennej lineOfStars dodaje gwiazdkę
        lineOfStars = lineOfStars + "*";
    }
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log(" ");

    //Wypisuje w konsoli zmienną lineOfStars (jej zawartość - dlatego jest bez cudzysłosów)
    console.log(lineOfStars);
}

// zadanie 8

var sizeSecond = 5;

var lineOfStarsSecond = "";

console.log(lineOfStarsSecond);

for (var i = 0; i < sizeSecond; i++) {
    lineOfStars = "";
    lineOfStarsSecond = lineOfStarsSecond + "*";
    console.log(" ");

    console.log(lineOfStarsSecond);
}