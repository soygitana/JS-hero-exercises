// ### Zadanie 8
// Napisz funkcję ```mySin(x, iterNum)``` i ```myCos(x, iterNum)```, która **ma zwracać** aproksymacje funkcji ```sinus``` i ```cosinus```, użyj następujących wzorów:
// ```JavaScript
// sin(x) = (x^1)/1! - (x^3)/3! + (x^5)/5! - (x^7)/7! + (x^9)/9! - (x^11)/11! + ...
// cos(x) = (x^0)/0! - (x^2)/2! + (x^4)/4! - (x^6)/6! + (x^8)/8! - (x^10)/10! + ...
// ```
// Pamiętaj, że ```0! = 1```.
// Najpierw napisz funkcję do wyliczania silni, potem do wyliczania potęgi, a na koniec połącz je w całość.


function myFactorial(n) {
    if ((n == 0) || (n == 1))
        return 1
    else {
        var result = (n * myFactorial(n - 1));
        return result
    }
};

function mySin(x, iterNum) {
    var sine = 0;
    for (i = 0; i < iterNum; i++) {
        sine = sine + ((Math.pow(-1, i)) * (Math.pow(x, (2 * i) + 1))) / myFactorial((2 * i) + 1);
    }
    return sine;
};

console.log(mySin(18, 100));


function myCos(x, iterNum) {
    var cos = 0;
    for (i = 0; i < iterNum; i++) {
        cos = cos + ((Math.pow(-1, i)) * (Math.pow(x, (2 * i))) / myFactorial(2 * i));
    }
    return cos;
};


console.log(myCos(18, 100));