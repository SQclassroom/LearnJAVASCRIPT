
/* javascript while loop

The JavaScript while loop iterates the elements for the infinite number of times. It should be used if number of iteration is not known.

while (condition)  
{  
    code to be executed  
}  

*/

// {
//     let counter = 0; 

//     while(counter < 13){  

//     document.write("Hello" + "<br/>");
//     counter++;  
//     }  
// }

{
    // let counter = 0;
    // let sum = 0;

    // while(counter <= 8){
    //         if(counter % 2 == 0){
    //                 sum = sum + counter ;
    //             }
    //             counter++;
    //         }
    //         document.write(sum);
}

/* JavaScript Do while loop

The JavaScript do while loop iterates the elements for the infinite number of times like while loop. But, code is executed at least once whether condition is true or false. 

do{  
    code to be executed  
}while (condition);  

*/

// {
//     let counter = 1;
//     do{  
//         document.write("hello" + "<br/>");  
//         counter++;      

//     } while (counter < 12);  
// }

/* javascript for loop

The JavaScript for loop iterates the elements for the fixed number of times. It should be used if number of iteration is known. 

*/

/*

for (initialization; condition; increment)  
{  
    code to be executed  
}  

for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement

*/

// {
//     for (i=0; i<=10; i++){  
//     document.write("hello" + "<br/>")  ;
//     }  
// }

// {
//     for (let i= 0; i<=5 ; i++) {
//         // Runs 5 times, with values of step 0 through 4.
//         document.write('Walking east one step' + "<br>");
//       }
// }


// The For In Loop

for (key in object) {
    // code block to be executed
  }

{
    const person = {fname:"John", lname:"Doe", age:25}; 
  
    let txt = "";
    for (let x in person) {
      txt += person[x] + " ";
    }
    
    document.getElementById("demo").innerHTML = txt;
}

{
    const numbers = [45, 4, 9, 16, 25];

    let txt = "";
    for (let x in numbers) {
    txt += numbers[x] + "<br>"; 
    }

    document.getElementById("demo").innerHTML = txt;
}

// Do not use for in over an Array if the index order is important.

// The index order is implementation-dependent, and array values may not be accessed in the order you expect.

// It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.


// Array.forEach()  

{
    const numbers = [45, 4, 9, 16, 25];

    let txt = "";
    numbers.forEach(myFunction);
    document.getElementById("demo").innerHTML = txt;

    function myFunction(value, index, array) {
    txt += value + "<br>"; 
    }
}

// The For Of Loop

for (variable of iterable) {
    // code block to be executed
  }

//   variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.

//   iterable - An object that has iterable properties.
  
{
    const cars = ["BMW", "Volvo", "Mini"];

    let text = "";
    for (let x of cars) {
    text += x + "<br>";
    }

    document.getElementById("demo").innerHTML = text;
}

// Comparing For and While

{
    const cars = ["BMW", "Volvo", "Saab", "Ford"];

    let i = 0;
    let text = "";
    for (;cars[i];) {
    text += cars[i] + "<br>";
    i++;
    }

    document.getElementById("demo").innerHTML = text;
}

{
    const cars = ["BMW", "Volvo", "Saab", "Ford"];

    let i = 0;
    let text = "";
    while (cars[i]) {
    text += cars[i] + "<br>";
    i++;
    }

    document.getElementById("demo").innerHTML = text;
}
