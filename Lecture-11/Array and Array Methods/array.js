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

// javascript array fill method


{
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const newfill = fruits.fill("1"  , 2);
    console.log(newfill);
}

// javascript array copywithin() method

{
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango" , "watermelon" , "kiwi"  , "Olive"];
    const newcopy = fruits.copyWithin(2 , 4);
    console.log(newcopy);
}

// javascript valueof() method

{
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango" , "watermelon" , "kiwi"  , "Olive"];
    const newfruits = fruits.valueOf();
    console.log(newfruits);
}

// javascript flat() method

{
    const fruits = [1,2,3,[4,[5,6,[7,8,9]]]];
    const newarray1 = fruits.flat();
    const newarray2 = fruits.flat(2);
    const newarray3 = fruits.flat(3);
    const newarray4 = fruits.flat(4);
    console.log(newarray1);
    console.log(newarray2);
    console.log(newarray3);
    console.log(newarray4);
}