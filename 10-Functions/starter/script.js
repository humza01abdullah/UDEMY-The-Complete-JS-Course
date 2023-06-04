'use strict';

/*/ /////////////////////////////////////////
// Default Parameters
/////////////////////////////////////////////

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

///////////////////////////////////////////*/

/*///////////////////////////////////////////
// How Passing Arguments Works: Value vs. Reference
/////////////////////////////////////////////

const flight = 'LH234';
const joe = {
  name: 'Joe Soap',
  passport: 1234567890,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 1234567890) {
    alert('Checked In');
  } else {
    alert('Wrong Passport');
  }
};

checkIn(flight, joe);
console.log(flight);
console.log(joe);

// // Is the same as doing
// const flightNum = flight;
// const passenger = joe;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(joe);
checkIn(flight, joe);

///////////////////////////////////////////*/

/*///////////////////////////////////////////
// Functions Accepting Callback Functions
/////////////////////////////////////////////

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher Order Functions
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

// JS uses callback functions all the time to allow for abstration
transformer('JavaScript is the best!', upperFirstWord); // second parameter is a callback function
transformer('JavaScript is the best!', oneWord);

///////////////////////////////////////////*/

/*///////////////////////////////////////////
//  Functions Returning Functions
/////////////////////////////////////////////

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Josh');

///////////////////////////////////////////*/

/*///////////////////////////////////////////
//  The call and apply methods
/////////////////////////////////////////////

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LM',
  bookings: [],

  // book: funstion () {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Harry Lewis');
lufthansa.book(635, 'Simon Minter');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// pulling out the .book from lufthansa and saving it to use elsewhere
const book = lufthansa.book;

// use .call to replace this keyword
book.call(eurowings, 23, 'Joshua Bradley'); // first argument is what the this keyword must point to
console.log(eurowings);

book.call(lufthansa, 234, 'Tobi Brown');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airlines',
  iata: 'LX',
  bookings: [],
};

book.call(swiss, 545, 'Ethan Payne');
console.log(swiss);

// Apply method
const flightData = [567, 'Max Cave'];
book.apply(swiss, flightData);
console.log(swiss);

// Bind method can preset parameters
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Benj Cave');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Callum Powell');
bookEW23('Sacha Powell');

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// when using this keyword from inside a eventlistener it points to the event listener not the object it was put in.
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

// using function returns instead
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

///////////////////////////////////////////*/

/*///////////////////////////////////////////
//  Challenge #1
/////////////////////////////////////////////

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)

2. Call this method whenever the user clicks the "Answer poll" button.

3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 

4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  displayResults: function (type = 'array') {
    if (type == 'array') {
      console.log(this.answers);
    } else if (type == 'string') {
      console.log(this.answers.join(', '));
    }
  },

  registerNewAnswer: function () {
    const answer = prompt(
      `${this.question}\n${this.options[0]}\n${this.options[1]}\n${this.options[2]}\n${this.options[3]}`
    );

    if (!['0', '1', '2', '3'].includes(answer)) {
      alert('Invalid answer, enter 0, 1, 2 or 3');
    } else {
      this.answers[Number(answer)]++;
    }

    this.displayResults();
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

///////////////////////////////////////////*/

/*///////////////////////////////////////////
//  Immediately Invoked Function Expressions (IIFE)
/////////////////////////////////////////////

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will also never run again'))();

{
  const isAlsoPrivate = 23;
  var notPrivate = 46;
}

// console.log(isAlsoPrivate);
console.log(notPrivate);

///////////////////////////////////////////*/

/*///////////////////////////////////////////
//  Closures
/////////////////////////////////////////////

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.log('before closure change');
console.dir(f);

// reassigning h()

h();
f();
console.log('after closure change');
console.dir(f);

// Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);

///////////////////////////////////////////*/

/*///////////////////////////////////////////
//  Coding challenge 2
/////////////////////////////////////////////

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

///////////////////////////////////////////*/
