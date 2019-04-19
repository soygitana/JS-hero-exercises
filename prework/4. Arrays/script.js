// zadanie 1

var myArray = [1, 2, 3];

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);

// zadanie 2

var myFruits = ["banana", "pineapple", "apple"];

console.log(myFruits[0]);
console.log(myFruits.length - 1);
console.log(myFruits.length);

// zadanie 3

var myArraySecond = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;

for (i = 0; i <= myArraySecond.length; i++) {
    var sum = sum + i;
}

console.log(sum);

// zadanie 4

var myArrayThird = [2, 6, 3, 8, 23, 9, 1, 4, 7, 11];
var numbers = 0;

for (i = 0; i <= myArrayThird.length; i++) {
    if (myArrayThird[i] % 2 === 0) {
        console.log("liczba o indeksie" + " " + [i] + " " + "jest parzysta");
    }
}

// zadanie 5

var myArrayForth = [4, 8, 7, 6, 5, 99, 87, 2, 34, 55];
var max = 0;


for (i = 0; i < myArrayForth.length; i++) {
    if (myArrayForth[i] > max) {
        max = myArrayForth[i];

    }
}
console.log(max);

// zadanie 6

var arrWithnumbers = [2, 4, 5, 2, 3, 5, 1, 2, 4];
var firstIndex = -1;

for (var i = 0; i < arrWithnumbers.length; i++) {
    for (var j = i + 1; j < arrWithnumbers.length; j++) {
        if (arrWithnumbers[i] === arrWithnumbers[j]) {
            firstIndex = i;
            break;
        }
    }
    if (firstIndex > -1) break;
}
console.log(firstIndex);

// zadanie 7

var myArrayFifth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = myArrayFifth.length - 1; i >= 0; i--) {
    console.log(myArrayFifth[i]);
}