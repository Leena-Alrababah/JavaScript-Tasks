/*
let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 
*/

let x = 250;
let Zakat = (x * 2.5) / 100;
// console.log(`The Zakat for ${x} is ${Zakat}`);
console.log(Zakat);

/*
Array Tasks : 
1
Correct the syntax error
[ 1,7  9  45, ]

["Str" "alex","moh"

'the','fox' 'over' lazy, 'dog',  ]

*/
const array1 = [1, 7, 9, 45];
console.log(array1);

const array22 = ["Str", "alex", "moh"];
console.log(array22);

const array3 = ['the', 'fox', 'over', 'lazy', 'dog'];
console.log(array3);



/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/

var fruits = ["Tomato", "Banana", "Watermelon"];
console.log("index of banana " + fruits.indexOf("Banana"));
console.log("index of tomato " + fruits.indexOf("Tomato"));

/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/
const Favorites = {
    food: ["Yalanje" , "Mansaf"] ,
    sport: ["tennis", "Football", "running"],
    movie: ["shawshank redemption", "The Last"] ,
};
console.log(Favorites);


/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

let arrayy = [1,4,5];
console.log (arrayy [0]);

// const Name = ["rama", "lena", "rania", "razan"];
// const firstElement = Name[0];
// console.log("first elemnt of array is " + firstElement);


/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/


const girls = ["rama", "lena", "rania", "razan"];
const lastElement = girls[(girls.length)-1];
console.log("first elemnt of array is " + lastElement);
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

var array = [0,5,7,9];
array.push (10);
array.shift ();
array.shift ();
array.shift ();
array.unshift(8);
array.unshift(6);
array.unshift(4);
array.unshift(3);
array.unshift(1);
console.log (array);


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5, 9, -7, 3.5];

array2.push(100);
console.log(array2);

array2.unshift(10);
console.log(array2);

array2.shift();
console.log(array2);

array2.pop();
console.log(array2);
/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
// var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
// arr1.sort((a, b) => a - b);
// console.log(arr1);

// var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// console.log (arr1.sort());

var arr = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
//arr.sort(); -> -3,-4,1,2,3,5,6,7,8 

arr.sort(function (a, b) {
    return a - b;
});
console.log(arr);