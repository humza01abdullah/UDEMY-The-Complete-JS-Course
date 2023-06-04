'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millienial = true; // var declared variables are not block scoped
      const str = `Oh, and you're a millienial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        // Although in functions are block scoped. (Only in strict mode)
        return a + b;
      }
    }
    // console.log(str);
    console.log(millienial);
    // add(2, 3);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
