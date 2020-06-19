// // print 2 table using for loop and then with while loop.

// var i = 1;
// while (i <= 10) {
//     console.log('2 * ' + i + ' = ' + (2 * i));
//     i++;

// }

// for (var i = 1; i <= 10; i++) {
//     console.log('19 * ' + i + ' = ' + (19 * i));

// }
// // var number = parseInt(prompt('Enter no :'));
// // for (var i = 1; i <= number; i++) {
// //     if (i % 2 === 1) {
// //         console.log(i);

// //     }
// // }

// var usernames = ['Ramesh', 'Sandeep', 'Shrikanth', 'Rahul'];
// // for (var i = 0; i < usernames.length; i++) {
// //     console.log('the length of ' + usernames[i] + ' is :' + usernames[i].length);

// // }

// for (var i = 0; i < usernames.length; i++) {
//     if (i === 1 || i === 2) {
//         continue;
//     }
//     console.log(usernames[i]);

// }


// // MDOULUS

// function mod(fn, sn) { //fn=8,sn=4
//     var q = fn / sn;
//     q = parseInt(q);
//     var mod = fn - (sn * q);
//     console.log(mod);

// }

// mod(10, 3);



// var n = parseInt(prompt('n:'));
// var a = 0;
// var b = 1;
// var c;
// for (var i = 0; i < n; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//     console.log(c);

// }



// var n = 5;
// var a = 0;
// var b = 1;



// function fibanocci(a, b, n) {
//     var c;
//     for (var i = 0; i < n; i++) {
//         c = a + b;
//         a = b;
//         b = c;
//         console.log(c);

//     }
// }

// fibanocci(a, b, n);


// factorial

var n = 4;
var m = n - 1;
for (var i = 0; i < n - 1; i++) {
    if (m === 1) {
        break;
    }
    n = n * m;
    m--;
}
console.log(n);

// recursive programs 


var Customer = function (fullname, accno, totalbal) {
    this.fullname = fullname;
    this.accno = accno;
    this.totalbal = totalbal;
}

Customer.prototype.deposit = function (dep_amount) {
    this.totalbal = this.totalbal + dep_amount;
    console.log('deposit successful and your total bal is', this.totalbal);

}

Customer.prototype.withDrawl = function (with_amount) {
    if (this.totalbal > with_amount) {
        this.totalbal = this.totalbal - with_amount;
        console.log('withdrawl successful and your remaining bal is:', this.totalbal);

    }
}


ramesh = new Customer('Ramesh Boppan', 123, 20000);
ramesh.deposit(30000);

ramesh.withDrawl(10000);


