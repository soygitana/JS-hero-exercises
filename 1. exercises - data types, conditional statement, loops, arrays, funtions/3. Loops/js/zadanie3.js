// ### Zadanie 3 (~ 15min - 20 min)

// Napisz program rysujący na podstawie wartości zmiennej **n** następujący schemat (tutaj dla ```n = 5```):

// ```  
//   *   *
// *   *   *
//   *   *  
// *   *   *
//   *   *   
// ```
// Użyj do tego pętli zagnieżdżonych, a w wewnętrznej pętli dodaj **if** sprawdzający odpowiedni warunek (jeżeli ```i + j``` jest nieparzyste, to ma być gwiazdka). Do rozwiązania zadania stwórz zmienną **result**, do której dopisuj gwiadzkę (`*`), pustą spację (` `), lub znak nowej linii (`\n`).


var n = 8;
var result = "";

for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        if ((i + j) % 2 === 0) {
            result += "*"
        } else {
            result += " ";
        }
    }
    result += "\n";
};

console.log(result);