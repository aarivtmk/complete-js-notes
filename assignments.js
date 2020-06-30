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
ramesh.fullname = 'Shrikanth'
ramesh.deposit(30000);

ramesh.withDrawl(10000);
console.log(ramesh);


// patterns
n = 3;
for (var i = 1; i < 4; i++) {
    for (var j = 1; j <= i; j++) {
        console.log('Ramesh');

    }
    console.log('\n');

}


// gmail login with email and password and forgot password

var users = [
    {
        id: 101,
        name: 'steve',
        email: 'stevejobs@gmail.com',
        password: 'jobs@apple',
        phone: '9874563214',
    },
    {
        id: 102,
        name: 'jack',
        email: 'jackdorsey@gmail.com',
        password: 'dorsey@twitter',
        phone: '9874563212',

    },

];

var login = function (email, password) {

    for (var i = 0; i < users.length; i++) {
        result = {};
        if (email === users[i].email && password === users[i].password) {
            console.log('yes');
            result = users[i];

            break;
        }
        else {
            console.log('user not exists')
        }
    }
    return result;

}

var sendOtp = function (id, phone) {
    otp = 
}

var forgotPassword = function (email) {
    for (var i = 0; i < users.length; i++) {
        if (email === users[i].email) {
            // console.log('email exists', users[i]);
            var phone = prompt('Enter your phone number which ends with', users[i].phone.slice(6, 10));
            if (phone === users[i].phone) {
                console.log('Thank you for verifying phone number,OTP has been sent to you');
                sendOtp(users[i].id, phone);

            }

        }
        else {
            console.log('not exists');

        }
    }

}

var userprofile = login('stevejobs@gmail.com', 'jobs@apple');
console.log('welcome to Facebook', userprofile.name);
console.log('Login successful');
console.log(userprofile);


forgotPassword('jackdorsey@gmail.com');