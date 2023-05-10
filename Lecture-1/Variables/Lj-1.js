// JavaScript Variable

// Examples,

// declaration Var()

{
    var names=vivek=box="parimal";
    console.log(names);

    var x = "a";
    var foo_fa1=2 + "4";
    console.log(foo_fa1);

    // NaN :- not a number
    
    //incorrect declaired
    
    var ff123=50;
    var aa=50;
    console.log(x);
    console.log(foo_fa1);

    // NaN :- not a number
}   

{
    // var a = "Rahul";
    // var b = "40";
    // console.log(a - b);
}

// declaration Let()

{

    {  
         let num=10;
        //calling the function inside block
        console.log(num);
    }
    let num=20;
    //calling the function outside block throws a Error
    document.write(num);
}

{
    // let num=10;
    // console.log(num);
    // function fun(){
    //     document.write(num);
    // }
    // fun(); // calling the function
}

{
    // function fun(){
    //     let num=10;
    //     console.log(num);
    // }
    // fun(); //  calling the function
    // console.log(num);
}

{
    // let x = 25;
    // {
    //     let x = 77;
    //     {
    //         let x = 23;
    //         console.log(x);
    //     }
    //     console.log(x);
    // }
    // console.log(x);
}

{   
    // let x=77;
    // {
    //     let x=23; // legal
    //     // console.log(x);
    //     // document.write(x);
    // }
    // let x=67;// illegal
    // console.log(x);
}

{
    // x=12;
    // console.log(x);
    // let x;  
}

// declaration Const()

{
    // const x = 12;
    // x = 13;
    // x += 1;
}

{
    // const x = 22;
    // {
    //     const x = 90;
    //     console.log(x);
  
    //     {
    //         const x = 77;
    //         console.log(x);
    //     }
    //     {
    //         const x = 45;
    //         console.log(x);
    //     }
    // }
    // console.log(x);
}

{
    // const x;
    // x = 12;
    // console.log(x);
}

{
     // Changing the content of array is
    // possible in cost array
    // const arr1 = ["pankaj", "sumit", "chandan", "ajay"];
      
    // console.log(arr1.toString());
      
    // arr1[2] = "Narayan"; // possible
      
    // console.log(arr1.toString());
}

{
    // const person = {
    //     first_name: "Pankaj",
    //     last_name: "Singh",
    //     Age: 20,
    //     About: "Web Developer and Competitive Programmer"
    // };
      
    // console.log(person);
      
    // // It is possible
    // person.first_name = "Aryan";
    // person.last_name = "Yadav";
    // person.Age = 22;
    // person.About = "Commerce undergraduate";
      
    // console.log(person);
      
    // it is not possible
    // const person={
    // "first_name":"Aryan",
    // "last_name":"Yadav",
    // "Age":22,
    // "About":"Commerce undergraduate"
    // }
}

// string with quotes

{
    let x = "wor'ld";
    let y = 'wor"ld';
    let z = "wor\"ld";
    document.write(x + "<br>" + y + "<br>" + z);
    console.log(y + "<br>");
}

// types of variables

{
    // var myInteger = 12; // 32-bit number (from -2,147,483,648 to 2,147,483,647)
    // var myLong = 9310141419482; // 64-bit number (from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
    // var myFloat = 5.5; // 32-bit floating-point number (decimal)
    // var myDouble = 9310141419482.22; // 64-bit floating-point number
    // var myBoolean = true; // 1-bit true/false (0 or 1)
    // var myBoolean2 = false;
    // var myNotANumber = NaN;
    // var NaN_Example = 0/0; // NaN: Division by Zero is not possible
    // var notDefined; // undefined: we didn't define it to anything yet
    // window.alert(aRandomVariable); // undefined
    // var myNull = null; // null
    // etc...
}




         

         
            