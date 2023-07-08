/* JAVASCRIPT STRING METHOD */

// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()

/******   String indexOf() ******/

// {
//     let fruits="apple  , mango , watermelon , strawberry , lemon";
//     let part = fruits.indexOf("go");
//     console.log(part);
// }

// {
//     let fruits="apploe  , mango , watermelon , strawberry , lemon";
//     let part = fruits.indexOf("o" , 5);
//     console.log(part);
// }

/******   String lastIndexOf() ******/

// {
//     let fruits="apple  , mango , watermelon , strawberry , lemon , mango";
//     let part = fruits.lastIndexOf("mango");
//     console.log(part);
// }

// {
//     let fruits="apple  , mango , watermelon , strawberry , lemon";
//     let part = fruits.lastIndexOf("o" , 20);
//     console.log(part);
// }


/******  String search() ******/


// {
//     let fruits="javascript is 'most' populer langauage";
//     let part = fruits.search("most");
//     console.log(part);
// }

// {
//     let fruits="javascript is 'most' populer langauage";
//     let part = fruits.search(/Most/i);
//     console.log(part);
// }

/******  String match() ******/

// {
//     let text = "this is javascript match method";
//     let part  = text.match(/j/);
//     console.log(part);
// }

/******  String matchall()/ remider with array ******/

// {
//     const regexp = /is/g;
//     const str = 'this is javascript';
//     const array = [...str.matchAll(regexp)];
//     console.log(array[0]);
//     // Expected output: Array ["test1", "e", "st1", "1"]
//     console.log(array[1]);
//     // Expected output: Array ["test2", "e", "st2", "2"]

// }

// {
//     let text = "this is javascript match is method";
//     let part = text.matchAll(/is/g);
//     console.log(part);
// }

/******  String startsWith() ******/

// {
//     let text = "Hello world, welcome to the universe.";
//     let part = text.startsWith("Hello");
//     console.log(part);
// }

// {
//     let text = "Hello world, welcome to the universe.";
//     let part = text.startsWith("Hello" , 0);
//     console.log(part);
// }

/******  String endWith() ******/

// {
//     let text = "Hello world, welcome to the universe.";
//     let part = text.endsWith(".");
//     console.log(part);
// }

// {
//     let text = "Hello world, welcome to the universe.";
//     let part = text.endsWith("universe" , 50);
//     console.log(part);
// }


/******   JavaScript Template Literals ******/

/******  back-Tic syntex ******/

// {
//     let text = `hello world!`;
//     console.log(text);
// }

/******  quotes inside string ******/

// {
//     let text = `He's name 'joe'`;
//     console.log(text);
// }

/******  allow multiline string ******/

// {
//     let  text = "this
//     is Infinite pages";
//     console.log(text);
// }

// {
//     let text = `this
//     is
//      Infinite
//       pages`;
//     console.log(text);
// }





