// // /*
// // print statement - L29
// // CONCATENATION -  L33
// // variables - L38
// // PROMPT -L63
// // SYMBOL NAMES - L73
// // type coercion - L92
// // variable mutation - L102
// // primitives in details - numbers, strings, empty strings,undefined,null,boolean - L115
// // operators-L191 
// // control statements-L226
// // loops L258
// // arrays L309
// // JUMPING STATEMENTS L355
// // objects - L381
// // functions -L416
// // initializing objects - L529
// // objects and methods - L541
// // object oriented programming - L560
// // function constructors - L603
// // prototypes - 659
// // copying primitives - L677
//  copying objects L690
// passing variables to the functions L706
// // passing object to the functions as arguments - L718
// FIRST CLASS FUNCTIONS - L743
// passing function as arguments to another function-L745
// functions returning functions - L766
// IIFE - immediately invoked function expression L-816
// // closures L-828
// METHOD BORROWING : CALL METHOD AND BIND METHOD L-868



// // printing 
// // console.log("Hello world");

// // CONCATENATION
// // var firstName = 'Bill';
// // var lastName = 'Gates';
// // console.log(firstName + lastName);

// // variables - a variable is a container where we store data
// // rules of variables
// // you can start a variable with _ or $ or any letter
// // find the total marks of student

// var name = 'Ramesh';
// var maths = 95;
// var science = 88;
// var social = 87;
// var grade = 'A';
// var totalMarks = maths + science + social;
// var percentage = (totalMarks / 300) * 100;

// // concatenation - we use + to join string and variable
// // console.log('Hi, your son ' + name + ' got ' + totalMarks + ' marks. and his percentage is ' + percentage + ' grade is ' + grade);





// // addtion program - calculator

// var firstNumber = 5;
// var secondNumber = 6;
// var total = firstNumber / secondNumber;

// // console.log('Addition of' + firstNumber + ' and ' + secondNumber + 'is ' + total);

// // prompt - to take input from the user
// // console.log('WElcome to Facebook');

// // var name = prompt('Enter your Name')
// // var number = prompt('Enter your Number');
// // var password = prompt('Enter your password');

// // console.log('Hi' + name + 'Welcome to Facebook. Your number is ' + number + 'remember your password is ' + password);


// // SYMBOL NAMES
// // () - paranthesis
// // [] - square brackets
// // {} - curly brace
// // ;  - semi colon
// // :  - colon
// // "" - Quotations
// // .  - dot
// // @ - at the rate
// // $ - dollar
// //     & - ampersand
// //  && - logical and
// //  || - logical or
// // ! - not
// // / - forward slash
// // \ - backward slash
// // = - equal to
// // % - mod
// // `` - backticks


// // TYPE COERCION - CHANGING NUMBERS AND BOOLEN TO STRING
// // name = 'steve';
// // age = 60;
// // age = '60';
// // name = 'steve';

// // typeof() : special method used to find the data type or primitive type
// // console.log('The data type of name is ' + typeof (age));


// // variable mutation
// // able to change the value of the variables

// var name = 'bill';
// var name = 'jobs';
// var age = 30;
// var age = 40;
// var age = 20;
// // console.log('hey I am ' + name + ' and my age is ' + age);



// // primitives in details

// // in JS, we have Numbers, Strings, undefined, null,boolean
// // Numbers
// var age = 45;
// // console.log('The type of age is', typeof (age));

// // Strings
// var age = "45";
// // console.log('The type of age is', typeof (age));

// // empty string
// var age = "";
// // console.log('The type of age is', typeof (age));


// // undefined - when you are ignoring
// var steveAge;
// // console.log('The type of Steve Age is', typeof (steveAge));

// // null - when you say explicitly that you know nothing, we call it as null

// var billAge = null;
// // null is a datatype of Object
// // console.log('The type of bill Age is', typeof (billAge));

// // boolean - true or false

// // var isRaining = false;
// // console.log(isRaining);




// // control statements- if, if else,else if ladder, 

// var is_raining_today = true;
// // if else

// if (is_raining_today) {
//     console.log('take an umbrella');
// }
// else {
//     console.log('Enjoy the party');
// }

// // find even number or not

// // = assiging the value
// // == verifying values irrespective of datatype
// // === strict equal to 

// // a = 2;
// // b = '2';
// // if (a === b) {
// //     console.log('equal');

// // }
// // else {
// //     console.log('not equal');

// // }


// // var number = 5;
// // if (number % 2 === 0) {
// //     console.log('even no');
// // }
// // else {
// //     console.log('odd no');
// // }


// // OPERATORS
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

// // 
// /*
// ASSIGNEMENT OPERATORS
// =,+=,-=

// x = 2;
// x = x+2;  // x+=2;
// x= x-2; or x-=2;
// x=x*2; or x*=2
// x/=2; or x=x/2;


// COMPARISION OPERATORS
// ==,===,!=,>,<,>=,<=
// 2=="2"
// 2>3

// ARITHMETIC OPERATORS
// +,-,*,/,%,++,--,**(power)

// ++
// x =  2
// x = x+1 or x++
// -- = x-- or x = x-1


// LOGICAL OPERATORS
// //  && - logical and
// //  || - logical or


// */
// // control statements
// var fn = 4;
// var sn = 8;

// // if (fn > sn) {
// //     console.log(fn + ' is greater than ' + sn);
// // }
// // else {
// //     console.log(sn + ' is greater than ' + fn);
// // }

// // elseif ladder

// // find greatest number among three numbers

// var tn = 20;
// var frn = 30;

// // if (fn > sn && fn > tn && fn > frn) {
// //     console.log(fn + ' is greter than ' + sn + ' and ' + tn + ' and ' + frn);
// // }
// // else if (sn > fn && sn > tn && sn > frn) {
// //     console.log(sn + ' is greter than ' + fn + ' and ' + tn + ' and ' + frn);
// // }

// // else if (tn > fn && tn > sn && tn > frn) {
// //     console.log(tn + ' is greter than ' + fn + ' and ' + sn + ' and ' + frn);

// // }
// // else {
// //     console.log(frn + ' is greter than ' + fn + ' and ' + sn + ' and ' + tn);
// // }


// // LOOPS - repeating the same task

// // console.log(1);
// // console.log(2);
// // console.log(3);
// // console.log(4);
// // console.log(5);


// // while loop

// // var number = 1;
// // while (number < 6) {
// //     console.log(number);
// //     number++;
// // }

// // for (var fn = 6; fn <= 10; fn++) {
// //     console.log(fn);
// // }

// // print all even numbers < 100

// // for (var i = 0; i < 101; i++) {
// //     if (i % 2 === 0) {
// //         console.log('even number', i);

// //     }
// //     else {
// //         console.log('odd number', i);

// //     }
// // }


// // var number = 0;
// // while (number <= 100) {

// //     if (number % 2 === 0) {
// //         console.log('even number' + number);

// //     }
// //     else {
// //         console.log('odd number', +number);

// //     }

// //     number++;
// // }


// // ARRAY - list of elements

// // var name_of_student1 = 'Ramesh';
// // var name_of_student2 = 'Sandeep';
// // var name_of_student3 = 'Shrikanth';
// // var name_of_student4 = 'Rahul';

// // console.log('students list: ' + name_of_student1 + ' ' + name_of_student2);


// var whatsapp_group = ['Ramesh', 'Sandeep', 'Shrikanth', 'Rahul', 'Ramesh', 'Sandeep', 'Shrikanth', 'Rahul', 'Ramesh', 'Sandeep', 'Shrikanth', 'Rahul', 'Ramesh', 'Sandeep', 'Shrikanth', 'Rahul', 'Ramesh', 'Sandeep', 'Shrikanth', 'Rahul', 'Ramesh', 'Sandeep', 'Shrikanth', 'Rahul', 'Ramesh', 'Sandeep', 'Shrikanth', 'Rahul', 'Ramesh', 'Sandeep', 'Shrikanth', 'Rahul'];


// // console.log('Students list : ' + whatsapp_group);
// // console.log(whatsapp_group[1]);

// // length method

// console.log('no of people in this group are:' + whatsapp_group.length);

// for (var index = 0; index < whatsapp_group.length; index++) {
//     // console.log(whatsapp_group[index]);

// }


// students_list = ['bill', 'steve', 'woz'];
// students_list.push('jack');
// console.log(students_list);

// students_list.pop();
// students_list.pop();
// console.log(students_list);



// // find odd numbers less than 10

// for (var i = 1; i < 10; i++) {
//     if (i % 2 === 1) {
//         // console.log('odd number : ', i);

//     }
// }

// // JUMPING STATEMENTS - BREAK AND CONTINUE

// // eg print 1 to 10 numers, if you get 5 stop printing

// // for (var i = 1; i < 11; i++) {
// //     if (i === 5) {
// //         break;
// //     }
// //     else {
// //         console.log(i);

// //     }
// // }

// // CONTINUE -

// // for (var i = 1; i < 11; i++) {
// //     if (i === 5) {
// //         continue;
// //     }
// //     else {
// //         console.log(i);

// //     }
// // }

// // OBJECTS - 


// var student1_name = 'Ramesh';
// var student1_no = 101;
// var student1_class = 2;


// var student2_name = 'Sandeep';
// var student2_no = 102;
// var student2_class = 3;

// // Array

var student1_details = ['Ramesh', 101, 2];
// var student2_details = ['Sandeep', 101, 3];
// console.log(student1_details[1]);



// object

// var objectname = {
//     key: value,
//     key: value,
// }


var student1_details = {
    'name': 'Ramesh',
    'id': 101,
    'classroom': 2
};

var student2_details = {
    'username': 'Rahul',
    'age': 22,
    'phone': 546546546545
};

console.log(student2_details.username);


// console.log(student1_details.name);

// console.log(rahul123);


student1_details.name = "Shrikanth";
student1_details['id'] = 103;
console.log(student1_details.id);



// objects & arrays or array in objects

var party = {
    'softdrink': ['thumbsup', 'pepsi'],
    'starters': ['chicken thandoori', 'lollipop'],
    'biryani': ['veg biryani', 'chicken biryani', 'prawn biryani'],
    'curry': ['chicken 65', 'paneer butter masala']
}

console.log(typeof (party));  // object
console.log(typeof (party.softdrink)); // array
console.log(party.softdrink[1]); // array
console.log(party.biryani[1]);
console.log(party.curry[1]);


// object in objects


var fbdatabase = {
    'ram': {
        'username': 'ramesh',
        'email': 'ramesh@gmail.com'
    },
    'rah': {
        'username': 'rahul',
        'email': 'rahul@gmail.com'
    },
    '103': {
        'username': 'shrikanth',
        'email': 'shri@gmail.com'
    },

    '104': {
        'username': 'sandeep',
        'email': 'sandeep@gmail.com'
    },
}

console.log(typeof (fbdatabase.ram));
console.log(fbdatabase['104'].email);

// var quiz = {
//     'question1': {
//         'question': 'color of sky',
//         '1': 'blue',
//         '2': 'green',
//         '3': 'red'
//     },
//     'president of usa': {
//         '1': 'donald',
//         '2': 'barack',
//         '3': 'george'
//     }
// }


// var answers = {
//     '1': 'blue',
//     '2': 'donald',
// }

// console.log(quiz.question1);


// console.log(quiz.question1.question + '?');

// answer = prompt('Enter your option ' + quiz.question1['1'] + ' ' + quiz.question1['2'] + ' ' + quiz.question1['3'])
// console.log('your option is', answer);
// console.log(typeof (answer));

// if (quiz.question1[answer] === answers[1]) {
//     console.log('your answer is correct');

// }
// else {
//     console.log('incorrect');

// }

// quiz game

// console.log('welcome to the quiz app');


// var questions = {
//     '1': 'color of sky ?',
//     '2': 'president of usa ?'
// }

// var choices = {
//     '1': {
//         '1': 'red',
//         '2': 'blue',
//         '3': 'green',
//     },
//     '2': {
//         '1': 'donald',
//         '2': 'barack obama',
//         '3': 'george',
//     }


// }

// var answers = {
//     '1': 'blue',
//     '2': 'donald',
// }


// console.log(questions['1']);
// console.log(choices['1']);

// selected_option = prompt('Enter your option ')
// console.log(typeof (selected_option));

// if (choices['1'][selected_option] === answers['1']) {
//     console.log('your answer is correct');

// }
// else {
//     console.log('incorrect');

// }




console.log('welcome to the quiz app');

var score = 0;
var questionNumber = 1;

var questions = {
    '1': 'color of sky ?',
    '2': 'president of usa ?'
}

var choices = {
    '1': {
        '1': 'red',
        '2': 'blue',
        '3': 'green',
    },
    '2': {
        '1': 'donald',
        '2': 'barack obama',
        '3': 'george',
    }


}

var answers = {
    '1': 'blue',
    '2': 'donald',
}
// console.log(questions[questionNumber]);

console.log('no of questions are : ', Object.keys(questions).length);




while (true) {

    console.log(questions[questionNumber]);
    console.log(choices[questionNumber]);

    selected_option = prompt('Enter your option ')
    console.log(typeof (selected_option));

    if (choices[questionNumber][selected_option] === answers[questionNumber]) {
        score = score + 1;
        questionNumber = questionNumber + 1;

    }
    else {
        questionNumber = questionNumber + 1;
    }

    if (questionNumber > Object.keys(questions).length) {
        break;
    }


}

console.log('You got ', score);

















// // FUNCTION -A PIECE OF CODE WHERE WE CAN USE IT MULTIPLE TIMES INSTEAD OF REPEATING THE CODE

// var a = 5;
// var b = 6;
// var c = a + b;
// console.log('sum is : ', c);

// var d = 8;
// var e = 8;
// console.log('sum is :', d + e);


// function addition(firstNo, secondNo) {
//     var sum = firstNo + secondNo;
//     console.log('value of sum is :', sum);
// }

// function multiplication(fn, sn) {
//     var multiply = fn * sn;
//     console.log('value of multiplication is : ', multiply);

// }

// function subtraction(fn, sn) {
//     var sub = fn - sn;
//     console.log('value of subtraction is : ', sub);

// }

// // parseInt - converting string to integer
// // eg: '23' - 23
// // eg : 'a' - Not possible

// // var a = parseInt(prompt('Enter first number :'));
// // var b = parseInt(prompt('Enter second number :'));
// // addition(a, b);
// // multiplication(a, b);
// // subtraction(a, b);


// // four types of functions
// // 1. function with no return type

// function addition(fn, sn) {
//     console.log('sum is : ', fn + sn);

// }

// addition(3, 5);

// // 2. function with return type

// function multiplication(fn, sn) {
//     return fn * sn;
// }

// console.log(multiplication(4, 5));








// // function balance_enquiry(name) {
// //     console.log('hi ' + name + ' welcome to SBI');
// //     return 20000;

// // }

// // var remain_balance = balance_enquiry('Ramesh');
// // console.log(remain_balance);

// // console.log(5 % 2);



// // console.log('welcome to sbi');
// // function bal_enq() {
// //     choice = prompt('DO you want a receipt?');
// //     if (choice === 'y') {
// //         receipt = 2000;
// //         return receipt;
// //     }
// //     else {
// //         console.log('your balance is ', 2000);
// //         console.log('Thank you for using SBI');


// //     }
// // }

// // console.log(bal_enq());

// // whenever you return something from a function, we need to write the function call with log

// // INITIALIZING OBJECTS

var student1_details = {
    'name': 'Ramesh',
    'id': 101,
    'classroom': 2
};

// // accessing objects
// console.log(student1_details['name']);
// student1_details['name'] = 'Ramesh Kumar';
// console.log(student1_details['name']);
// console.log(student1_details.classroom);
// student1_details.classroom = 'two';
// console.log(student1_details.classroom);
// console.log(typeof (student1_details));
// // new keyword creates memory for the newly created object


// var student2_details = new Object();
// student2_details.age = 23;
// student2_details.name = 'mohammed';
// console.log(student2_details['name']);

// console.log(typeof (student2_details));



// // objects and functions/methods


// var student2_details = {
//     'name': 'Ramesh',
//     'id': 101,
//     'classroom': 2,
//     'dob': 1998,
//     'calculateAge': function () {
//         return 2020 - this.dob;

//     }

// };

// var age = student2_details.calculateAge();
// console.log(age);


// // OBJECT ORIENTED PROGRAMMING

// // var jimmy = {
// //     dob: 2010,
// //     color: 'black',
// //     breed: 'lab',
// //     age: function () {
// //         console.log(2020 - this.dob);

// //     }
// // }

// // jimmy.age();





// // var tomy = {
// //     dob: 2017,
// //     color: 'brown',
// //     breed: 'gs',
// //     age: function () {
// //         console.log(2020 - this.dob);

// //     }
// // }

// // var gani = {
// //     dob: 2015,
// //     color: 'white',
// //     breed: 'lab',
// //     age: function () {
// //         console.log(2020 - this.dob);

// //     }
// // }

// // gani.age();



// // OBJECT ORIENTED PROGRAMMIG APPROACH
// // 1.CREATE A BLUEPRINT using Function Constructor (constructor is a special which will be invoked directly)
// // 2. INITIALIZE OBJECT

var Dog = function (dob, color, breed) {
    this.dateob = dob;
    this.dcolor = color;
    this.dbreed = breed;
}

var jimmy = new Dog(2015, 'black', 'lab');
var tomy = new Dog(2017, 'white', 'german shephard');
jimmy.dcolor = 'white';
console.log(jimmy);



// console.log('dob of jimmy is:', jimmy.dateob);
// console.log('color of tomy is', tomy.dcolor);

// // employees example
// // var sandeep = {
// //     fullname: 'sandeep bobba',
// //     yearOfBirth: 1995,
// //     job: 'teacher',
// //     // calculateAge: function () {
// //     //     // console.log('age is', 2020 - this.yearOfBirth);
// //     //     // return 2020 - this.yearOfBirth;
// //     //     this.age = 2020 - this.yearOfBirth;

// //     // },
// // }

// // var shrikanth = {
// //     fullname: 'shrikanth bobba',
// //     yearOfBirth: 1997,
// //     job: 'Software Engineer',
// // calculateAge: function () {
// //     // console.log('age is', 2020 - this.yearOfBirth);
// //     // return 2020 - this.yearOfBirth;
// //     this.age = 2020 - this.yearOfBirth;

// // },
// // }



// // console.log(sandeep);
// // sandeep.calculateAge();
// // console.log('age is', sandeep.age);


// var Employee = function (fullname, yearOfBirth, job) {
//     this.fullname = fullname;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     // this.company = 'Google';

// }
// // PROTOTYPES
// Employee.prototype.calculateAge = function () {
//     console.log(2020 - this.yearOfBirth);
// }
// Employee.prototype.company = 'Google';




// // var sandeep = new Employee('Sandeep Bobba', 1995, 'teacher');
// // var ramesh = new Employee('Ramesh Bobba', 1995, 'Freelancer');
// // var shrikanth = new Employee('Shrikanth Bobba', 1995, 'Scientist');
// // var rahul = new Employee('Rahul Bobba', 1998, 'Software Enginner');

// // shrikanth.calculateAge();
// // console.log(rahul.company);


// // COPYING PRIMITIVES 
// var a = 20;
// var b = a; //20
// a = 45;
// b = a;
// a = 60;


// console.log(a); // 45
// console.log(b); // 20


// // coplying objects - referencing

// var a = {
//     name: 'steve',
//     age: 25
// };

// var b = a;
// var c = b;
// c.name = 'billgates'
// console.log(a);
// console.log(b);
// console.log(c);


// passing variables to the functions as arguments

// function addition(a, b) {
//     console.log(a + b);

// }

// c = 2;
// d = 3;
// addition(c, d)

// // passing object to the functions as arguments
// var student1 = {
//     name: 'steve',
//     city: 'USA'
// }

// function change_Student_Details(student_object) {
//     console.log('details before chnaging', student_object);


//     student_object.name = 'Jack';
//     console.log('details after change', student_object);


// }


// change_Student_Details(student1);
// console.log(student1);


// FIRST CLASS FUNCTIONS
// passing function as arguments to another function
// program : based on yearofbirh

var years = [1998, 2005, 1997, 1960];

function calculate(yearsArray, myfun) {
    var result = [];
    for (var i = 0; i < yearsArray.length; i++) {
        result.push(myfun(yearsArray[i]));
    }
    return result;

}

function calculateAge(element) {
    return 2020 - element;
}

console.log(calculate(years, calculateAge));

// functions returning functions
// interview program - ask questions based on the job.

function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log('hey ' + name + ', Define Design');

        }
    }

    else if (job === 'teacher') {
        return function (name) {
            console.log('hey ' + name + ' , Why do you want to teach?');

        }
    }

    else if (job === 'software engineer') {
        return function (name) {
            console.log('hey ' + name + ' , How do you define primitives?');

        }
    }
    else {
        return function (name) {
            console.log('hey ' + name + ', what do you do for living?');

        }
    }
}


var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('Rahul');



function addition(a, b) {
    return a + b;
}


// console.log(addition(2, 5));

// var sum = addition(8, 8);
// console.log(sum);



// IIFE - immediately invoked function expression 
// iife has no need to call explicitly. it will call itself
// why: data privacy

(function () {
    var name = 'Shrikanth';
    console.log('inside', name);

})();

console.log('hi my name is outside', name);

// closures
// es5 : scope of es6 is function scoped

function es5scope() {
    var a = 10;
    console.log('inside', a);
}
// console.log('outside', a);
es5scope();

// CLOSURE DEF

// inner function will always  have access to variables and parameters of the outer function.
//  evern after 
// the outer function returned.

// find years remain to retirement

// outerfunction : retirement
// outerfunction parameter : retirementAge

// innerfunction : anonymous function

function retirement(retirementAge) {
    var s = 'years remain to retire';
    return function (yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + s);

    }
}

var retirementIndian = retirement(60);
retirementIndian(1980);


var retirementAmerican = retirement(70);
retirementAmerican(1995);


// METHOD BORROWING : CALL METHOD AND BIND METHOD

// CALL METHOD : IT DIRECTLY CALLS METHOD 
// BIND METHOD : IT COPIES THE METHOD TO A VARIABLE

// program: shrikanth and ramesh are invited for their school celebration to give guidance to the school kids and college students

var shrikanth = {
    name: 'Shrikanth Vattikutti',
    age: 22,
    job: 'Software Engineer',

    presentation: function (studenttype, timeOftheDay) {
        if (studenttype === 'kids') {
            console.log('Hi kids, Good' + timeOftheDay + ', My name is ' + this.name);
        }
        else {
            console.log('Hi Students, Good' + timeOftheDay + ', I am ' + this.name + ' and I am a' + this.job);

        }
    }


}

var Ramesh = {
    name: 'Ramesh Singh',
    age: 25,
    job: 'Data Scientist',
}

var Rahul = {
    name: 'Rahul Panda',
    age: 22,
    job: 'Systems Engineer'
}



shrikanth.presentation('kids', 'Morning');

// ramesh is borrowing presentation from shrikanth using call method

shrikanth.presentation.call(Ramesh, 'students', 'Evening');

shrikanth.presentation.call(Rahul, 'kids', 'Afternoon');


// bind method :

// with bind we cannot call method directly so we have to copy
//  function to another variable

var Sandeep = {
    name: 'Sandeep Bobba',
    age: 24,
    job: 'Data Analyst'
}

var SandeepPresentation = shrikanth.presentation.bind(Sandeep);

SandeepPresentation('kids', 'Evening');
SandeepPresentation('Students', 'Morning');
















