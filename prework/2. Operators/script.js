// zadanie 1

var isChecked = true;
var isAccepted = false;

console.log(isChecked == isAccepted);
//konsola zwraca false 

// zadanie 2

var firstNumber = 6;
var secondNumber = 12;
var resultModulo = 0;

resultModulo = firstNumber % secondNumber;

console.log(resultModulo);

// zadanie 3

var firstString = "Paula";
var secondString = "Warsaw";
var joinedString = "";

joinedString = firstString + secondString;

console.log(joinedString);

// zadanie 4

var myNumber = 4;
var myString = "4";

console.log(myNumber == myString);
// true, ponieważ ta sama wartość, różne typy - operator porównania == dopuszcza różne typy 
console.log(myNumber === myString);
// false, bo typy zmiennych są różne, pomimo tej samej wartości

// zadanie 5

var counter = 145;

console.log(counter);

counter--;
console.log(counter);

counter++;
console.log(counter);

// zadanie 6

var numberThird = 6;
var numberForth = 7;
var result = null;

result = numberThird > numberForth;
console.log(result);