// // // var years = [1998, 2005, 1997, 1960];

// // // function calculate(yearsArray, myfun) {
// // //     var result = [];
// // //     for (var i = 0; i < yearsArray.length; i++) {
// // //         result.push(myfun(yearsArray[i]));
// // //     }
// // //     return result;

// // // }

// // // function calculateAge(element) {
// // //     return 2020 - element;
// // // }

// // // console.log(calculate(years, calculateAge));



// // // functions returning functions
// // // interview program - ask questions based on the job.

// // function interviewQuestion(job) {
// //     if (job === 'designer') {
// //         return function (name) {
// //             console.log('hey ' + name + ', Define Design');

// //         }
// //     }

// //     else if (job === 'teacher') {
// //         return function (name) {
// //             console.log('hey ' + name + ' , Why do you want to teach?');

// //         }
// //     }

// //     else if (job === 'software engineer') {
// //         return function (name) {
// //             console.log('hey ' + name + ' , How do you define primitives?');

// //         }
// //     }
// //     else {
// //         return function (name) {
// //             console.log('hey ' + name + ', what do you do for living?');

// //         }
// //     }
// // }


// // var teacherQuestion = interviewQuestion('teacher');

// // teacherQuestion('Rahul');


// // var c = 2;
// // var d = 2;


// // function addition(a, b) {
// //     if ((a + b) === 2) {
// //         return multiply(a, b);
// //     }
// //     else {
// //         return division(a, b);
// //     }
// // }

// // function division(a, b) {
// //     return (a / b);
// // }

// // function multiply(a, b) {
// //     return (a * b);
// // }




// // console.log(addition(c, d));

// (function () {
//     var name = 'Shrikanth';
//     console.log('inside', name);

// })();

// console.log('hi my name is outside', name);

// var b = 30;
// function es5scope() {
//     var a = 10;
//     console.log('inside', a);
// }
// console.log('outside b', b);

// console.log('outside', a);
// es5scope();


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
// shrikanth.presentation('kids', 'Morning');



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


shrikanth.presentation.call(Rahul, 'students', 'Evening');




// shrikanth.presentation.call(Rahul, 'kids', 'Evening');
// var rameshPresentation = shrikanth.presentation.bind(Ramesh, 'students', 'Evening');
// rameshPresentation();


// var Sandeep = {
//     name: 'Sandeep Bobba',
//     age: 24,
//     job: 'Data Analyst'
// }

// var sandeepPresentation = shrikanth.presentation.bind(Sandeep, 'kids');

// sandeepPresentation('Morning')

// function addition(a, b) {
//     console.log(a + b);

// }

// var myfun = addition;
// myfun(2, 6);

var a = 4#

console.log(a);

