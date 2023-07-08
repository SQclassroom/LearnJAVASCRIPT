/*

Maths Object
The JavaScript Math object allows you to perform mathematical tasks on numbers.

Example:-
Math.PI;	
The Math object is static.
All methods and properties can be used without creating a Math object first.
Math Properties(Constants):-
The syntax for any Math property is : Math.property
JavaScript provides 8 mathematical constants that can be accessed as Math properties. 

*/

/*

Example:-

Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
Math Methods
The syntax for Math any methods is : Math.method(number)

*/

//Math.round():-

//Math.round(x) returns the nearest integer.
//Example:-

		// let math1 = Math.round(4.5);		// 5
		// console.log(math1);
		// let math2 = Math.round(4.4);		// 4
		// console.log(math2);

//Math.ceil():-

//Math.ceil(x) returns the value of x rounded up to its nearest integer.
//Example:-

		// let math3 = Math.ceil(4.9);		// 5
		// console.log(math3);
		// let math3_1 = Math.ceil(3.8);	
		// console.log(math3_1)	         // 4
		// let math3_2 = Math.ceil(-4.3);	// -4
		// console.log(math3_2);

//Math.floor():-

//Math.floor(x) returns the value of x rounded down to its nearest integer.
//Example:-

	// let math4 =	Math.floor(4.9);		// 4
	// console.log(math4);
	// Math.floor(4.2);		// 4
	// Math.floor(-4.3);		// -5

//Math.trunc():-

//Math.trunc(x) returns the integer part of x.
//Example:-

		// let math5 = Math.trunc(5.9);		// 5
		// console.log(math5);
		// Math.trunc(4.2);		// 4

//Math.sign():-

//Math.sign(x) returns  if x is negative, null or positive.
//Example:-

		// let math6 = Math.sign(15);		// 1
		// console.log(math6);	
		// let math6_1 = Math.sign(-180);
		// console.log(math6_1);
		// let math6_2 = Math.sign(0);
		// console.log(math6_2);

//Math.pow():-

//Math.pow(x, y) returns the value of x to the power of y.
//Example:-

		// let math7 = Math.pow(5, 5);		// 243 //3x3x3x3x3
		// console.log(math7);
		// Math.pow(8, 10);		// 64

//Math.sqrt():-

//Math.sqrt(x) returns the square root of x.
//Example:-

		// let math8 = Math.sqrt(64);		// 8
		// console.log(math8);
		// Math.sqrt(121);		// 11

//Math.abs():-

//Math.abs(x) returns the absolute (positive) value of x.
//Example:-

		// let math9 = Math.abs(-6);		// 6
		// console.log(math9);
		// let math9_1 = Math.abs(1.2);		// 1.2
		// console.log(math9_1);

//Math.min() and Math.max():-

//Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments.
//Example:-

		// let math10 = Math.min(0, 150, 30, 20, -8, -200 , -250);	// -250
		// console.log(math10);
		// let math11 = Math.max(0, 150, 30, 20, -8, -200 , 500);	// 500
		// console.log(math11);

//Math.random():-

//Math.random() returns a random number between 0 (inclusive), and 1 (exclusive).
//Example:-

		// let  math12 = Math.random();
		// console.log(math12);
		// console.log(math12);
		// console.log(math12);


//Math.sin():-

//Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).
//If you want to use degrees instead of radians, you have to convert degrees to radians:
//	Angle in radians = Angle in degrees x PI / 180.
//Example:-

		// let math13 = Math.sin(270 * Math.PI / 180); //  1 (the sine of 90 degrees)
		// console.log(math13);
		// Math.sin(30 * Math.PI / 180); //  0.5 (the sine of 30 degrees)

//Math.cos():-

//Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).
//If you want to use degrees instead of radians, you have to convert degrees to radians:
//	Angle in radians = Angle in degrees x PI / 180.
//Example:-

		// let math13_1 = Math.cos(270 * Math.PI / 180); //  1 (the cos of 0 degrees)
		// console.log(math13_1);
		// Math.cos(60 * Math.PI / 180); //  0.5 (the cos of 60 degrees)


//Math.log():-

//Math.log(x) returns the natural logarithm of x.
//The natural logarithm returns the time needed to reach a certain level of growth.
//Example:-

		// let math14 = Math.log(15);	//  0 
		// console.log(math14);
		// Math.log(2);	//  0.6931471805599453
		// Math.log(10);	//  2.302585092994046

//Math.log2():-

//Math.log2(x) returns the base 2 logarithm of x.
//Example:-

		// let math15 = Math.log2(20);	
		// console.log(math15);

//Math.log10():-

//Math.log10(x) returns the base 10 logarithm of x.
//Example:-

		// let math16 = Math.log10(20);
		// console.log(math16);