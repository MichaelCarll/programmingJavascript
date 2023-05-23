//This is an example of how to use a function to add two numbers passed in as arguments
function addTwoNums (a,b) {
    var c = a + b ;
    console.log(c);
}

addTwoNums();

//function that takes an array as input and display all items of this array
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i])
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);

/* I can use this in place of the above if I want the count to start at 1 when displayed instead of 0
function listArrayItems(arr) { 
    for (var i = 0; i < arr.length; i++) {
        console.log(i+1, arr[i])
    }
}*/
/* I can use this in place of above if I want to add another condition to display a seperate name depending on the array value
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, arr[i])
        }
    }
}*/

//This function which will be able to take a word and locate the position of a chosen letter in that given word. 
function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test", "t")