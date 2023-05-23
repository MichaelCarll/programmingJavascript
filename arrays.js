//This is an example of an array for a train to hold product
var train1 = ["Wheat","Barley","Potato","Salt","Rocks"];

console.log(train1[2]); //This will return Potato

//See functions.js for an extended example of an array inside a function

//Using the push and pop methods
var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']

fruits.pop();
console.log(fruits); // ['apple']

//Use this to build on a function to add to an array
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

arrayBuilder('apple', 'pear', 'plum'); // ['apple', 'pear', 'plum']

var simpleArr = arrayBuilder('apple', 'pear', 'plum');
console.log(simpleArr); // ['apple','pear','plum']

//More practice with arrays
var clothes = []
clothes.push("hat","tshirt","pants","socks","sunglasses")
clothes.pop(4)
clothes.push("necklace")
console.log(clothes[2])

var favCar = {}

favCar.color = "Red"
favCar.convertible = false

console.log(favCar)