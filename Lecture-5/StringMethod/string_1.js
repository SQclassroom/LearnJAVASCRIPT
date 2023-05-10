// javascript string method and string search method

// String length
// String slice()
// String substring()
// String substr()
// String indexOf()
// String lastIndexOf()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()
// String includes()

/*****************************/

// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()

// String length.

// {
//     let text =" this  is javascript   ";
//     let textlength = text.length;
//     console.log(textlength);
// }

// String slice()

// {
//     let fruits="apple  , mango , watermelon , strawberry";
//     let part = fruits.slice(30 , 40);
//     console.log(part);
// }

// String substring()

// {
//     let fruits="apple  , mango , watermelon , strawberry";
//                 1234567890123456789012345678901234567890
//     let part = fruits.substring(27 , 17);
//     console.log(part);
// }

// String substr()

// {
//     let fruits="apple  , mango , watermelon , strawberry , lemon";
//     let part = fruits.substr(-20 , 40);
//     console.log(part);
// }

// String replace()

// {
//     function myFunction() {
//         let text = document.getElementById("para-1").innerHTML;
//         document.getElementById("para-1").innerHTML =
//         text.replace("visit","SkillQode");
//       }
// }

// {
//     let text = "please visit visit";
//     // document.write(text + "<br>");
//     let change = text.replace("visit" , "skillqode");
//     document.write(change + "<br>");
// }

// {
//     let text = "please visit MicrasolllP Micrasolllp";
//     document.write(text + "<br>");
//     let change = text.replace (/MICRASOLLLP/i, "skillqode");
//     document.write(change + "<br>");
// }

// {
//     let text ="please visit skillqode visit and visit again";
//     document.write(text + "<br>");
//     let change= text.replace(/visit/g , "most");
//     document.write(change);
// }


// String replaceAll()

// {
//     let text ="I love cats. but Cats are very easy to love. Cats are very popular. but Cats Dangerous";
//     document.write(text + "<br>");
//     var change = text.replaceAll("cats" , "dogs");
//     var changee = text.replaceAll("Cats" , "Dogs");
//     document.write(change + "<br>");
//     document.write(changee);
// }

// String toUpperCase()

// {
//     let text = "I love cats. but Cats are very easy to love. Cats are very popular. but Cats Dangerous";
//     let text1= text.toUpperCase();
//     console.log(text1);
// }

// String toLowerCase()

// {
//     let text = "I LOVE CATS. BUT CATS ARE VERY EASY TO LOVE. CATS ARE VERY POPULAR. BUT CATS DANGEROUS";
//     let text1= text.toLowerCase();
//     console.log(text1);
// }

// String concat()

// {
//     let text1 = "this is ";
//     let text2 = "surat";
//     let text3 = text1.concat(" " , text2);
//     let text4 = text3.length;
//     let text5 = text1.length;
//     let text6 = text2.length;
//     console.log(text3);
//     console.log(text4); 
//     console.log(text5); 
//     console.log(text6); 
//     let text7 = text1+text2;
//     console.log(text7);
//     var text8 = text7.length;
//     console.log(text8);
// }

// String trim()

// {
//     let demotext="         this is javascript.      ";
//                            1234567890123456789
//     // let text = demotext.length;
//     let demo = demotext.trim();
//     let text = demo.length;
//     document.write(text);
// }

// String trimStart()

// {
//     let demotext="         this is javascript.       ";
//     // let text = demotext.length;
//     let demo=demotext.trimStart();
//     let text = demo.length;
//     console.log(text);
// }

// String trimEnd()

// {
//     let demotext ="           this is javascript.    "
//     var text = demotext.length;
//     let demo = demotext.trimEnd();
//     var text = demo.length;
//     console.log(text);
// }

// String padStart()

// {
//     let demotext = "5";
//     let demo = demotext.padStart(6 , "0");
//     console.log(demo);
// }

// String padEnd()

// {
//     let demotext="5";
//     let demo=demotext.padEnd(5 , "0");
//     console.log(demo);
// }

// String charAt()

// {
//     let demotext="this is string values";
//              //   012345678901234567890
//     let demo = demotext.charAt(10);
//     console.log(demo);
// }

// String charCodeAt()

// {
//     let demotext="this is string values";
//              //   012345678901234567890
//     let demo = demotext.charCodeAt(17);
//     console.log(demo);
// }

// String split()

    // {
    //     let text = "HelloHello";
    //     const myArr = text.split("");
        
    //     text = "";
    //     for (let i = 0; i < myArr.length; i++) {
    //       text += myArr[i] + "<br>"
    //     }
    //     document.write(text);
    // }

// String includes() , true and false

    // {
    //     let demotext="this is string values";
    //     let demo = demotext.includes("is");
    //     console.log(demo);
    // }

/*************************************************************/

//  String indexOf()

// {
//     let fruits="apple  , mango , watermelon , strawberry , lemon";
//     let part = fruits.indexOf("mango");
//     console.log(part);
// }

// {
//     let fruits="apple  , mango , watermelon , strawberry , lemon";
//     let part = fruits.indexOf("o" , 15);
//     console.log(part);
// }

//  String lastIndexOf()

// {
//     let fruits="apple  , mango , watermelon , strawberry , lemon";
//     let part = fruits.lastIndexOf("mango");
//     console.log(part);
// }

// {
//     let fruits="apple  , mango , watermelon , strawberry , lemon";
//     let part = fruits.lasIndexOf("o" , 15);
//     console.log(part);
// }


// String search()


// {
//     let fruits="javascript is 'most' populer langauage";
//     let part = fruits.search("most");
//     console.log(part);
// }
// {
//     let fruits="javascript is 'most' populer langauage";
//     let part = fruits.search(/most/);
//     console.log(part);
// }

// String match()

// {
//     let text = "this is javascript match method";
//     let part  = text.match(/is/);
//     console.log(part);
// }

// String matchall()

// {
//     let text = "this is javascript match is method";
//     let part = text.matchAll(/is/g);
//     console.log(part);
// }+

// String startsWith()

// {
//     let text = "Hello world, welcome to the universe.";
//     let part = text.startsWith("Hello");
//     console.log(part);
// }

// {
//     let text = "Hello world, welcome to the universe.";
//     let part = text.startsWith("Hello" , 1);
//     console.log(part);
// }

// String endWith()

// {
//     let text = "Hello world, welcome to the universe.";
//     let part = text.endsWith("universe.");
//     console.log(part);
// }

// {
//     let text = "Hello world, welcome to the universe.";
//     let part = text.endsWith("universe" , 36);
//     console.log(part);
// }


///  JavaScript Template Literals

// back-Tic syntex 

// {
//     let text = `hello world!`;
//     console.log(text);
// }

// quotes inside string

// {
//     let text = `He's name 'joe'`;
//     console.log(text);
// }

// allow multiline string

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




