// var s = {
//     name: 'shrikanth',
//     no: 101
// }

// console.log(s);
// console.log(typeof (s));

// var s1 = new Object();
// s1.name = 'sandeep'
// s1.no = 202
// console.log(s1);
// console.log(typeof (s1));


// var s2 = {
//     name: 'rahul',
//     dob: 1995,
//     age: function (name) {
//         console.log(name);

//         return 2020 - this.dob


//     }
// }

// console.log(s2.age('asdf'))

// // OOP


// var steve = {
//     name: 'stevejobs',
//     accno: 12345,
//     bal: 10000
// };

// var bill = {
//     name: 'billgates',
//     accno: 987456,
//     bal: 20000
// };

// var jack = {
//     name: 'jack dorsey',
//     accno: 654123,
//     bal: 30000
// };


// console.log('welcome to SBI');
// console.log('create your online account today');

// var NewCustomerAccount = function (name, accno, bal) {
//     this.cname = name;
//     this.caccno = accno;
//     this.cbal = bal;
// }

// var elon = new NewCustomerAccount('Elonmusk', 698745, 50000);
// var mark = new NewCustomerAccount('mark cuban', 789456, 40000);
// console.log(elon);

// console.log(elon.caccno);
// console.log(mark.cname);



// var credentials = {
//     username: 'sandeep',
//     password: 'banglore',

// }

// console.log('WElcome to facebook');

// var VerifyLogin = function (username, password) {
//     this.username = username;
//     this.password = password;

//     if (this.username === credentials.username && this.password === credentials.password) {
//         console.log("Good Evening " + this.username + " , welcome to facebook");

//     }
//     else {
//         console.log('your credentials are wrong');

//     }
// }

// var newobject = new VerifyLogin('sandeep', 'banglore')

// console.log(newobject.username);


// group = []

// while (true) {
//     name = prompt('Enter your name : ')

//     if (name === 'exit') {
//         break;
//     }
//     else {
//         group.push(name)
//     }
// }

// console.log('Group memebers are :', group);



// prototypes

var Employee = function (fullname, yearOfBirth, job) {
    this.fullname = fullname;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this.company = 'Google';
}

Employee.prototype.calculateAge = function () {
    console.log(2020 - this.yearOfBirth);
}


rahul = new Employee('rahulpanda', 2000, 'software engineer');
sandeep = new Employee('sandeepbobba', 1995, 'software engineer');
ramesh = new Employee('rameshboppan', 1994, 'software engineer');
shrikanth = new Employee('shrikanthsri', 1998, 'software engineer');
console.log(rahul.calculateAge());


// PROTOTYPES
// Employee.prototype.calculateAge = function () {
//     console.log(2020 - this.yearOfBirth);
// }
// Employee.prototype.company = 'Google';


console.log('Welcome to WhatsApp Group');
var name = prompt('Enter your Group Name : ');
var numberOfPeople = parseInt(prompt('How many people you want to add to this group ? '));

var person = 0;
groupmemebers = []

while (true) {
    if (person === numberOfPeople) {
        break
    }
    else {
        contactName = prompt('Add contact' + (person + 1))
        groupmemebers.push(contactName);
        person++;

    }
}
// while (person < numberOfPeople) {
// contactName = prompt('Add contact' + (person + 1))
// groupmemebers.push(contactName);
// person++;
// }





console.log('Your Group has been created : ', groupmemebers);








