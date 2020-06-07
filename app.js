// /*
// print statement - L29
// CONCATENATION -  L33
// variables - L38
// PROMPT -L63
// SYMBOL NAMES - L73
// type coercion - L92
// variable mutation - L102

// primitives in details - numbers, strings, empty strings,undefined,null,boolean - L115

// control statements & operators - L105
// loops
// variables in detail - primitives
// difference between primitives
// == and ===
// arrays
// objects
// initializing objects
// objects and functions
// object oriented programming
// function constructors
// prototypes
// inheritance
// functions in details - passing functions
// IIFE's - immediately invoked functions
// closures



// printing 
// console.log("Hello world");

// CONCATENATION
// var firstName = 'Bill';
// var lastName = 'Gates';
// console.log(firstName + lastName);

// variables - a variable is a container where we store data
// rules of variables
// you can start a variable with _ or $ or any letter
// find the total marks of student

var name = 'Ramesh';
var maths = 95;
var science = 88;
var social = 87;
var grade = 'A';
var totalMarks = maths + science + social;
var percentage = (totalMarks / 300) * 100;

// concatenation - we use + to join string and variable
// console.log('Hi, your son ' + name + ' got ' + totalMarks + ' marks. and his percentage is ' + percentage + ' grade is ' + grade);





// addtion program - calculator

var firstNumber = 5;
var secondNumber = 6;
var total = firstNumber / secondNumber;

// console.log('Addition of' + firstNumber + ' and ' + secondNumber + 'is ' + total);

// prompt - to take input from the user
// console.log('WElcome to Facebook');

// var name = prompt('Enter your Name')
// var number = prompt('Enter your Number');
// var password = prompt('Enter your password');

// console.log('Hi' + name + 'Welcome to Facebook. Your number is ' + number + 'remember your password is ' + password);


// SYMBOL NAMES
// () - paranthesis
// [] - square brackets
// {} - curly brace
// ;  - semi colon
// :  - colon
// "" - Quotations
// .  - dot
// @ - at the rate
// $ - dollar
//     & - ampersand
// ! - not
// / - forward slash
// \ - backward slash
// = - equal to
// % - mod


// TYPE COERCION - CHANGING NUMBERS AND BOOLEN TO INTEGERS
// name = 'steve';
// age = 60;
// age = '60';
// name = 'steve';

// typeof() : special method used to find the data type or primitive type
// console.log('The data type of name is ' + typeof (age));


// variable mutation
// able to change the value of the variables

var name = 'bill';
var name = 'jobs';
var age = 30;
var age = 40;
var age = 20;
// console.log('hey I am ' + name + ' and my age is ' + age);



// primitives in details

// in JS, we have Numbers, Strings, undefined, null,boolean
// Numbers
var age = 45;
// console.log('The type of age is', typeof (age));

// Strings
var age = "45";
// console.log('The type of age is', typeof (age));

// empty string
var age = "";
// console.log('The type of age is', typeof (age));


// undefined - when you are ignoring
var steveAge;
// console.log('The type of Steve Age is', typeof (steveAge));

// null - when you say explicitly that you know nothing, we call it as null

var billAge = null;
// null is a datatype of Object
// console.log('The type of bill Age is', typeof (billAge));

// boolean - true or false

// var isRaining = false;
// console.log(isRaining);




// control statements- if, if else,else if ladder, 

var is_raining_today = true;
// if else

if (is_raining_today) {
    console.log('take an umbrella');
}
else {
    console.log('Enjoy the party');
}

// find even number or not

// = assiging the value
// == verifying values irrespective of datatype
// === strict equal to 

// a = 2;
// b = '2';
// if (a === b) {
//     console.log('equal');

// }
// else {
//     console.log('not equal');

// }


// var number = 5;
// if (number % 2 === 0) {
//     console.log('even no');
// }
// else {
//     console.log('odd no');
// }

var fn = 4;
var sn = 8;

if (fn > sn) {
    console.log(fn + ' is greater than ' + sn);
}
else {
    console.log(sn + ' is greater than ' + fn);
}


