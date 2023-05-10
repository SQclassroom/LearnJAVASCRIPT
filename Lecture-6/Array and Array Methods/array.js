// Javascript Array

// let name1 = "madhu";
// let name2 = "vishal";
// let name3 = "kishor";
// let name4 = "chirag";

// console.log(name1);
// console.log(name4);

//index 0 start

// let newarray = ["madhu" , "vishal" , "kishor" , "chirag"];
// console.log(newarray[3] , newarray[3]);

// array length properties
// Accessing the First Array Element
// Accessing the Last Array Element
// Adding Array Elements
// Converting Arrays to Strings

/*

Array indexes start with 0:

[0] is the first array element
[1] is the second 
[2] is the third ...

*/

// {
//     const newarrrays = [
//         "one" ,
//          "two" ,
//           "three" ,
//            "four"];  // javascript arrays
    
//     newarrrays[1] = "five"; // changing arrays element
    
//     console.log(newarrrays);
// }

// array length properties

// {
//     const newarrrays = [
//         "one" ,
//          "two" ,
//           "three" ,];  // javascript arrays
          
//     console.log(newarrrays.length); // array length
// }


// Accessing the First Array Element

// {
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     console.log(fruits[0]);
// }

// Accessing the Last Array Element

// {
//     var fruits = ["Banana", "Orange", "Apple", "Mango"];
//     document.getElementById("demo").innerHTML = fruits[fruits.length-3];
// }

// Adding Array Elements

// {
//     const fruits = ["Banana", "Orange", "Apple"];
//     document.getElementById("demo").innerHTML = fruits;
    
//     function myFunction() {
//         fruits.push("Lemon");
//         document.getElementById("demo-1").innerHTML = fruits;
//     }
// }

// The length property provides an easy way to append new elements to an array without using the push() method.

// {
//     const fruits = ["Banana", "Orange", "Apple"];
//     document.getElementById("demo").innerHTML = fruits;

//     function myFunctionn() {
//     fruits[fruits.length] = "Lemon";
//     document.getElementById("demo-1").innerHTML = fruits;
//     }
// }

// Adding elements with high indexes can create undefined "holes" in an array.

// {
//     const fruits = ["Banana", "Orange", "Apple"];
//     fruits[6] = "Lemon";
//     console.log(fruits);

//     let fLen = fruits.length;
//     let text = "";
//     for (i = 0; i < fLen; i++) {
//     text += fruits[i] + "<br>";
//     }

//     document.getElementById("demo").innerHTML = text;
// }

// Array Methods

// Converting Arrays to Strings

// {
//     const fruits = ["Banana", "Orange", "Apple"];
//     console.log(fruits.toString());
// }

// The join() method also joins all array elements into a string.

// {
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     document.getElementById("demo").innerHTML = fruits.join(" ' ");
// }

// Popping and Pushing

// {
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     document.getElementById("demo").innerHTML = fruits;
//     fruits.pop();
//     fruits.pop();
//     fruits.pop();
//     document.getElementById("demo-1").innerHTML = fruits;
// }

// The pop() method returns the value that was "popped out"

// {
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     document.getElementById("demo").innerHTML = fruits.pop();
//     document.getElementById("demo-1").innerHTML = fruits;
// }

// JavaScript Array push()
//The push() method adds a new element to an array (at the end)

// {
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     document.getElementById("demo").innerHTML = fruits;
//     fruits.push("Kiwi");
//     document.getElementById("demo-1").innerHTML = fruits;
// }

// The push() method returns the new array length

// {
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     document.getElementById("demo").innerHTML = fruits.push("Kiwi");
//     document.getElementById("demo-1").innerHTML = fruits.length;
// }

//Shifting Elements
//JavaScript Array shift()

//The shift() method removes the first array element and "shifts" all other elements to a lower index

// {
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     document.getElementById("demo").innerHTML = fruits;
//     fruits.shift();
//     fruits.shift();
//     document.getElementById("demo-1").innerHTML = fruits;
// }

// The shift() method returns the value that was "shifted out"

// {
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     document.getElementById("demo").innerHTML = fruits.shift();
//     document.getElementById("demo-1").innerHTML = fruits;
// }

// JavaScript Array unshift()
//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements

// {
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     document.getElementById("demo").innerHTML = fruits;
//     fruits.unshift("Lemon");
//     document.getElementById("demo-1").innerHTML = fruits;
// }

// The unshift() method returns the new array length

// {
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     document.getElementById("demo").innerHTML = fruits.unshift("Lemon");
//     document.getElementById("demo-1").innerHTML = fruits;
// }

//  Changing Elements

// {
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     document.getElementById("demo").innerHTML = fruits;
//     fruits[1] = "Kiwi";
//     document.getElementById("demo-1").innerHTML = fruits;
// }

//JavaScript Array add element

// {
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     document.getElementById("demo").innerHTML = fruits;
//     fruits[fruits.length] = "Kiwi";
//     document.getElementById("demo-1").innerHTML = fruits;
// }

//JavaScript Array delete()

//Array elements can be deleted using the JavaScript operator delete.

//Using delete leaves undefined holes in the array.

//Use pop() or shift() instead.

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];

    // document.getElementById("demo").innerHTML =fruits;

    // delete fruits[2];

    // fruits[2] = "kiwi";

    // document.getElementById("demo-1").innerHTML =fruits;
}

//Merging (Concatenating) Arrays

// {
//     const myGirls = ["Cecilie", "Lone"];
//     const myboys1 = ["Emil", "Tobias", "Linus"];
//     const myboys2 = ["ajay" ,"vijay" ,"sunjay"];
//     const myChildren = myGirls.concat(myboys1 , myboys2);

//     document.getElementById("demo").innerHTML = myChildren;
//     console.log(myChildren);
// }

//The concat() method does not change the existing arrays. It always returns a new array.

//Splicing and Slicing Arrays

//JavaScript Array splice()

// {
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     document.getElementById("demo").innerHTML = fruits;

//     fruits.splice(0 , 3, "Lemon", "Kiwi" , "Watermelon");
//     document.getElementById("demo-1").innerHTML = fruits;
// }

// {
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     document.getElementById("demo").innerHTML = "Original Array:<br> " + fruits;
//     let removed = fruits.splice(2, 2, "Lemon", "Kiwi"); 
//     document.getElementById("demo-1").innerHTML = "New Array:<br>" + fruits;
//     document.getElementById("demo-2").innerHTML = "Removed Items:<br> " + removed; 
// }

// Using splice() to Remove Elements

// {
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     document.getElementById("demo-1").innerHTML = fruits;
//     fruits.splice(0, 1);
//     document.getElementById("demo-2").innerHTML = fruits;
// }

// JavaScript Array slice()

// {
//     const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//     const newremove = fruits.slice(1);
//     document.getElementById("demo").innerHTML = fruits + "<br><br>" + newremove;
// }

// Array.isArray

// {
//     let book = ["math"  , "chemistry"  , "physics" , "bio"];
//     let books = "string";
//     console.log(Array.isArray(book));
// }

// javascript Sorting Array

// {
//     let book = ["math"  , "chemistry"  , "physics" , "bio" , "amazon"];
//     let books = book.sort();
//     console.log(books);
// }

// Reversing array

// {
//     let book = ["math"  , "chemistry"  , "physics" , "bio"];
//     console.log(book);
//     let bookss = book.reverse();
//     console.log(bookss);
//     let books =book.sort();
//     console.log(books);
// }

// Number Sort

// {
//     const number1 = [40, 12, 15, 81 ,150 ,200];
//     console.log(number1);
//     const number2 = number1.sort(function(a , b){return a - b});
//     console.log(number2);
// }

// Javascript Array Iteration

// {
//     const number1 = [45 , 56 , 78 , 23 , 96];
//     let number2 = "";
//     number1.forEach(myFunction);

//     document.write(number2);
//     function myFunction(value, index, array){
//         number2 += value * 2 + "<br>";
//     }

// }


// javascript array map()

// {
//     const number1 = [56 , 798 , 345  ,35];
//     const number2 = number1.map(myFunction);

//     console.log(number2);
//     function myFunction(value , index  , array){
//         return value * 2;
//     }
// }


// javascript Array flatMap()

// {
//     const myarr = [1, 2, 3, 4, 5, 6];
//     const newarr = myarr.flatMap((x) => x*2);
//     console.log(newarr);
// }

// javascript array filter()

// {
//     const number1  =[45, 17 , 2, 46 , 78 , 15];
//     const number2 = number1.filter(myFunction);

//     function myFunction(age){
//         return age <= 100;
//     }
//     console.log(number2);
// }


