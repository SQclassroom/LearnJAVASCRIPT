// JavaScript Functions

/*
    NAMED FUNCTIONS
    ANONYMOUS FUNCTION
    

*/

{
    // function functionName(){  
    //     code to be executed   
    //    }  
}

// function msg(){
//   var a=50;
//   document.getElementById("demo1").innerHTML=a;
// }


// JavaScript Function Example

{
    // function msg(){  
    //         var newelement=document.createElement("q");
    //         newelement.textContent="this is q tag";
    //         document.body.appendChild(newelement);
    //     }  
}

// JavaScript Function with Arguments

{
    // function getcube(number){  
    //   document.getElementById("demo2").innerHTML=getcube;
    //   alert(number*number*number);  
    //     } 
}
{
    // function getcube(number){  
    //     return(number*number*number);  
    //     } 

        /* reminder return problems */
}

// Function with Return Value

{
    function getInfo(){ 
       document.getElementById("demo3").innerHTML=a;  
    }  

    //     var a=20;
    //     var a=30;
} 

// JavaScript Function Object

 //   new Function ([arg1[, arg2[, ....argn]],] functionBody)  

 // Parameter

 // arg1, arg2, .... , argn - It represents the argument used by function.

 // functionBody - It represents the function definition.

//apply() It is used to call a function contains this value and a single array of arguments.

//bind()It is used to create a new function.

//call()It is used to call a function contains this value and an argument list.

//toString()It returns the result in a form of a string.

// JavaScript Function Object Examples

// Let's see an example to display the sum of given numbers.

{
    // var add=new Function("num1","num2","num3","return num1*num2-num3");
    // document.getElementById("demo3").innerHTML=(add(10,10,200));
}


// Let's see an example to display the power of provided value.

{
    // var pow=new Function("num1","num2","return Math.pow(num1,num2)");
    // document.getElementById("demo4").innerHTML=(pow(10,3));
}



// {
//     var a=10;
//     var b=20;
//     document.getElementById("demo3").innerHTML=a+b;

//     var a=20;
//     var b=30;
//     document.getElementById("demo4").innerHTML=a*b;

// }


// apply() method / call() method

{
    // object definition
const personName = {
    firstName: "Taylor",
    lastName: "Jackson",
  };
  
  // function definition
  function greet(wish, message) {
    return `${this.firstName}, ${wish}. ${message}`;
  }
  
  // calling greet() function by passing two arguments
  let result = greet.apply(personName, ["Good morning", "How are you?"]);
  
  console.log(result);
}
{
// bind method()

    // object definition
// const student1 = {
//     name: "Jack",
//     grade: "5",
    
//     // document.getElementById("demo5").innerHTML=student1.name;
//     console.log(student1.name);

//     introduction: function () {
//       console.log(student1.name + "studies in grade" + student1.grade + ".");
      
//     },
    
}

{
 // object definition
 const student2 = {name: "Jimmy ", grade: " 6"};

// introduction: function (){
//         console.log(student1.name + "studies in grade" + student1.grade + ".");
// }
}

// the object student2 is borrowing introduction method from student1
// let result= student1.introduction.bind(student2);

// invoking introduction() function
// result();

// Output:
// Jimmy studies in grade 6.


{
  let a=70;
  console.log(a);
}

{

}

