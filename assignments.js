// print 2 table using for loop and then with while loop.

var i = 1;
while (i <= 10) {
    console.log('2 * ' + i + ' = ' + (2 * i));
    i++;

}

for (var i = 1; i <= 10; i++) {
    console.log('19 * ' + i + ' = ' + (19 * i));

}
// var number = parseInt(prompt('Enter no :'));
// for (var i = 1; i <= number; i++) {
//     if (i % 2 === 1) {
//         console.log(i);

//     }
// }

var usernames = ['Ramesh', 'Sandeep', 'Shrikanth', 'Rahul'];
// for (var i = 0; i < usernames.length; i++) {
//     console.log('the length of ' + usernames[i] + ' is :' + usernames[i].length);

// }

for (var i = 0; i < usernames.length; i++) {
    if (i === 1 || i === 2) {
        continue;
    }
    console.log(usernames[i]);

}


// MDOULUS

function mod(fn, sn) { //fn=8,sn=4
    var q = fn / sn;
    q = parseInt(q);
    var mod = fn - (sn * q);
    console.log(mod);

}

mod(10, 3);

