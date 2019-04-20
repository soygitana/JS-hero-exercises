## JS hero - exercises
### various exercises for JS practice

##### 1. PREWORK
* task 1
* task 2
* task 3
* task 4
* task 5
* task 6
* task 7
* task 8


#### Prework 


##### Task 1 

Napisz funkcje ```getSecondMaxNumber(array)```, która jako argument przyjmuje tablicę. Funkcja **ma zwrócić** drugą największą liczbę w tablicy.

##### Task 2 

Napisz funkcje ```getNegativeNumbers(array)```, która jako argument przyjmuje tablicę. Tablica może zawierać liczby ujemne. Funkcja **ma zwrócić** nową tablicę wypełnioną tylko ujemnymi liczbami.

##### Task 3 

Napisz funkcję ```getEvenSum(n)```, która jako argument przyjmuje liczbę. Funkcja ma zwrócić sumę liczb parzystych od ```i = 1``` do ```n```.

##### Task 4 

Napisz funkcję ```getFibonacciNumbers(n)```, która przyjmuje jako argument liczbę ```n```.
Funkcja **ma zwrócić** tablicę wypełnioną  ciągiem **n** liczb Fibonacciego.

*Ciąg Fibonacciego to ciąg liczb, gdzie każda liczba to suma dwóch poprzednich.
Jeśli n będzie równe 0 zwróć 0, Jeśli n będzie równe 1 zwróć 1*

##### Task 5

Napisz funckję ```isPrimeNumber(n)```, która jako argument przyjmuje liczbę ```n```.
Funkcja **ma zwrócić** wartość true lub false, w zależności od tego czy liczba ```n``` jest liczbą pierwszą czy nie.

*Liczba pierwsza to liczba podzielna przez jeden i samą siebie.*

*Zastosuj algorytm **brute force**. Jest to najprostsza &ndash; a zarazem najbardziej czasochłonna metoda wyznaczania liczb pierwszych.
Polega na tym, aby sprawdzić wszystkie potencjalne dzielniki danej liczby &ndash; jeżeli dana liczba nie dzieli się przez żadną inną liczbę (oprócz jeden i samej siebie), to jest ona oznaczana jako pierwsza.
W celu optymalizacji algorytmu sprawdza się wszystkie potencjalne dzielniki nie większe niż pierwiastek z samej sprawdzanej liczby.  Większe wartości nie mogą być już dzielnikami.
W celu otrzymania reszty z dzielenia użyj operatora **%** (modulo)* 

##### Task 6

Napisz funckję ```getPi(n)```, która jako argument przyjmuje liczbę ```n```, oznaczającą liczbę iteracji.
Funkcja **ma zwracać** wartość liczby **Pi**. Użyj następującej formuły: pi = 4 * ((1/1 - 1/3) + (1/5 - 1/7) + (1/9 - 1/11) + ...)

##### Task 7

Napisz funckję ```whatNumber(n)```, która jako argument przyjmuje liczbę ```n```.
Funkcja **ma zwracać** informację czy podana liczba ```n``` jest liczbą doskonałą, niekompletną czy żadną z tych .
Jeśli liczba jest doskonała zwróć -> "doskonała"
Jeżeli liczba jest niekompletna zwróć -> "niekompletna"
Jeżeli liczba nie jest ani doskonała ani niekompletna zwróć -> false

*Liczba doskonała to taka liczba, która jest sumą wszystkich swoich dzielników (mniejszych od niej). Jest to np. 6:*
*Liczba niekompletna to taka liczba, która jest większa od sumy wszystkich swoich dzielników. Jest to np. 10:*

##### Task 8

Napisz funkcję ```mySin(x, iterNum)``` i ```myCos(x, iterNum)```, która **ma zwracać** aproksymacje funkcji ```sinus``` i ```cosinus```, użyj następujących wzorów:

sin(x) = (x^1)/1! - (x^3)/3! + (x^5)/5! - (x^7)/7! + (x^9)/9! - (x^11)/11! + ...
cos(x) = (x^0)/0! - (x^2)/2! + (x^4)/4! - (x^6)/6! + (x^8)/8! - (x^10)/10! + ...

important! ```0! = 1```
Najpierw napisz funkcję do wyliczania silni, potem do wyliczania potęgi, a na koniec połącz je w całość.


Copyright © Coders Lab
