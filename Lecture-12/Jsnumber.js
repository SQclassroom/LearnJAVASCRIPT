// Javascript Numbers
// java script number  written with and without decimals.

// {
//     let number1 = 10;  // this is decimal number
//     let number2 = 10.20 // this is noot decimal number 
// }

// javascript extra large number define with scientific notation

// {
//     let number1 = 123e5;
//     let number2 = 123e-5;
// }

// javascript floating Pricision

// {
//     let number1 = 0.1 + 0.2 ;
//     console.log(number1);
// }

// adding javascript number and string

// {
//     let number1 = 10;
//     let number2 = 20;
//     let total = number1 + number2;
//     console.log(total);
// }

// {
//     let text1 = "210";
//     let text2 = "200";
//     let total = text1 + text2;
//     console.log(total);
// }

// {
//     let number1 = 200;
//     let number2 = "200";
//     let total = number1 + number2;
//     console.log(total);
// }

// {
//     let number1 = "200";
//     let number2 = 200;
//     let total = number1 + number2;
//     console.log(total);
// }
// {
//     let number1 = 200
//     let number2 = 200;
//     let number3 = "200";
//     let total = number1 + number2 + number3;
//     console.log(total);
// }

// {
//     let number1 = 200
//     let number2 = 200;
//     let number3 = "200";
//     let total = number1 + number3 + number2;
//     console.log(total);
// }


// javascript NAN (Not A Number)

// {
//     let  text1 = 100 / "apple";
//     console.log(text1);
// }

// {
//     let text1 = 100 / "10";
//     console.log(text1);
// }

// {
//     let text1 = 100 / "apple";
//     let text2 = isNaN(text1);
//     console.log(text2);
// }

// {
//     let number1 = NaN;
//     let number2 = 10;
//     console.log(number1 + number2);
// }

// {
//     let number1 = NaN;
//     let number2 = "10";
//     console.log(number1 + number2);
// }

// {
//     let number1 = typeof NaN;
//     console.log(number1);
// }

// javascript Infinity

// {
//     let number1 = 2 / 0;
//     console.log(number1);
//     let number2 = -2 / 0;
//     console.log(number2);
// }

// {
//     let number1 = typeof Infinity;
//     console.log(number1);
// }

// javascript number as object

// {
//     let number1 = 100;
//     let number2 = new Number(100);
//     console.log(number1 == number2);
// }
// {
//     let number1  = 100;
//     let number2 = new Number(100);
//     console.log(number1 === number2);
// }


// javascript BigInt

// {
//     let bignumber1 = 123456789123456789123456789n;
//     console.log(bignumber1);
//     let bignumber2 = BigInt("123456789123456789123456789");
//     console.log(bignumber2);
// }


// javascript datatype new BigInt

// {
//     let bignumber1 = BigInt("123456789123456789123456789");
//     console.log(typeof bignumber1);
// }

// javascript Number Method

// toString() Method

// {
//     let number1 = 100;
//     let number2 = number1.toString();
//     console.log(number2);
// }

// toExponential() Method

// {
//     let number1 = 20.23658;
//     let number2 = number1.toExponential(1);
//     let number3 = number1.toExponential(2);
//     let number4 = number1.toExponential(3);
//     console.log(number2);
//     console.log(number3);
//     console.log(number4); 
// }

//  toFixed() Method

// {
//     let number1 = 20.234;
//     let number2 = number1.toFixed(1);
//     let number3 = number1.toFixed(2);
//     let number4 = number1.toFixed(6);
//     console.log(number2);
//     console.log(number3);
//     console.log(number4); 
// }

// toPricision() Method

{
    let number1 = 20.234;
    let number2 = number1.toPrecision(1);
    let number3 = number1.toPrecision(2);
    let number4 = number1.toPrecision(6);
    console.log(number2);
    console.log(number3);
    console.log(number4); 
}

// tovalueOf() Method

{
    let number1 = 20.234;
    let number2 = number1.valueOf();
    let number3 = number1.valueOf();
    console.log(number2);
    console.log(number3);
}

// Converting Variables to Numbers

// Number() Method

{
   let number1= Number(true);
   let number2= Number(false);
   let number3= Number("10");
   let number4= Number("  10");
   let number5= Number("10  ");
   let number6= Number(" 10  ");
   let number7= Number("10.33");
   let number8= Number("10,33");
   let number9= Number("10 33");
   let number10= Number("John");
   console.log(number1);
   console.log(number2);
   console.log(number3);
   console.log(number4);
   console.log(number5);
   console.log(number6);
   console.log(number7);
   console.log(number8);
   console.log(number9);
   console.log(number10);
}

// Number() use in date

{
    let number1 = new Date("1996-08-01");
    let number2 = Number(number1)
    console.log(number2);
}

// parseInt() Method

{
   let number1 = parseInt("-10");
   let number2 = parseInt("-10.33");
   let number3 = parseInt("10");
   let number4 = parseInt("10.33");
   let number5 = parseInt("10 20 30");
   let number6 = parseInt("10 years");
   let number7 = parseInt("years 10");
   console.log(number1);
   console.log(number2);
   console.log(number3);
   console.log(number4);
   console.log(number5);
   console.log(number6);
   console.log(number7);
}

// javascript number Properties

{
    let number1 =Number.EPSILON;
    console.log(number1);
}

// javascript MAX_VALUE

{
    let number1 = Number.MAX_VALUE;
    console.log(number1);
}

// javascript MIN_VALUE

{
    let number1 = Number.MIN_VALUE;
    console.log(number1);
}

// javascript MAX_SAFE_INTEGER

{
    let number1 = Number.MAX_SAFE_INTEGER;
    console.log(number1);
}

// javascript MIN_SAFE_INTEGER

{
    let number1 = Number.MIN_SAFE_INTEGER;
    console.log(number1);
}



