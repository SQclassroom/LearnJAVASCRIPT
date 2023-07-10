// Javascript Array

// const fruits = [];
// fruits.push("banana", "apple", "peach");
// console.log(fruits.length);
// fruits[5] = "mango";
// console.log(fruits[5]);
// console.log(Object.keys(fruits));
// console.log(fruits.length);
// fruits.length = 10;
// console.log(fruits);
// console.log(Object.keys(fruits));
// console.log(fruits.length);
// console.log(fruits[8]);
// fruits.length = 2;
// console.log(Object.keys(fruits));
// console.log(fruits.length);



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

// let newarray = ["madhu" , "vishal" , "kishor" , "chirag"];
// console.log(newarray[3] , newarray[3]);

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

