//! LECTURE 10: Values and Variables
console.log("%c LECTURE 10: Values and Variables", "color: #ff0000");

const country = "New Zealand";
const continent = "Oceania";
let population = 4;

console.log(country)
console.log(continent)
console.log(population)

//! LECTURE 12: Data Types
console.log("%c \nLECTURE 12: Data Types", "color: #ff0000");

const isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//! LECTURE 13: let, const and var

language = "English";
// Changed variables "country, continent & isIsland" from let to const

//! LECTURE 14: Basic Operators
console.log("%c \nLECTURE 14: Basic Operators", "color: #ff0000");

console.log(population / 2);
console.log(++population);
console.log(6 < population);
console.log(33 > population);

let description = country + " is in " + continent + ", and its " + population + " million people speak " + language + ".";
console.log(description);

//! LECTURE 16: Coding Challenge #1
console.log("%c \nLECTURE 16: Coding Challenge #1", "color: #ff0000");

// Test Data 1
// let markWeight = 78;
// let markHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;

// Test Data 2
let markWeight = 95;
let markHeight = 1.88;
let johnWeight = 85;
let johnHeight = 1.76;

function calculateBMI(weight, height) {
    return (weight / (height ** 2));
}

let markBMI = calculateBMI(markWeight, markHeight);
let johnBMI = calculateBMI(johnWeight, johnHeight);

let markHigherBMI = (markBMI > johnBMI);

console.log(markBMI, johnBMI, markHigherBMI);

//! LECTURE 17: Strings and Template Literals 
console.log("%c \nLECTURE 17: Strings and Template Literals", "color: #ff0000");

description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;

console.log(description);

//! LECTURE 18: Taking Decisions: if / else Statements 
console.log("%c \nLECTURE 18: Taking Decisions: if / else Statements", "color: #ff0000");

function isPopulationAverage(population) {
    if (population > 33) {
        console.log(`${country}'s population is above average`);
    } else {
        console.log(`${country}'s population is ${33 - population} below average`);
    }
}

isPopulationAverage(population);
isPopulationAverage(13);
isPopulationAverage(130);

//! LECTURE 19: Coding Challenge #2
console.log("%c \nLECTURE 19: Coding Challenge #2", "color: #ff0000");

if (markHigherBMI == true) {
    console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})!`);
} else {
    console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's (${markBMI.toFixed(2)})!`);
}

//! LECTURE 20: Type Conversion and Coercion
console.log("%c \nLECTURE 20: Type Conversion and Coercion", "color: #ff0000");

// Comment here what you expect the output to be
console.log('9' - '5');                 //? 4
console.log('19' - '13' + '17');        //? '617'
console.log('19' - '13' + 17);          //? 23
console.log('123' < 57);                //? false
console.log(5 + 6 + '4' + 9 - 4 - 2);   //? 1143

//! LECTURE 22: Equality Operators: == vs. ===
console.log("%c \nLECTURE 22: Equality Operators: == vs. ===", "color: #ff0000");

// const numNeighbours = Number(prompt(`How many neighbour countries does your country have?`)); // Note that the prompt function returns a string

// if (numNeighbours === 1) {
//     console.log(`Only 1 border!`);
// } else if (numNeighbours > 1) {
//     console.log(`More than 1 border`);
// } else {
//     console.log(`No borders`);
// }

console.log(`%c Commented out to stop prompt`, `color: #00aa55`);

//! LECTURE 24: Logical Operators
console.log("%c \nLECTURE 24: Logical Operators", "color: #ff0000");

if ((language === `English`) && (population < 50) && !isIsland) {
    console.log(`You should live in ${country} 😊`);
} else {
    console.log(`${country} does not meet your criteria 😞`);
}

//! LECTURE 25: Coding Challenge #3
console.log("%c \nLECTURE 25: Coding Challenge #3", "color: #ff0000");

// Test Data 1
const dolphinsData = [96, 108, 89];
const koalasData = [88, 91, 110];

// Test Data 2
// const dolphinsData = [97, 112, 101];
// const koalasData = [109, 95, 123];

// Test Data 3
// const dolphinsData = [97, 112, 101];
// const koalasData = [109, 95, 106];

function avg(arr) {
    return ((arr[0] + arr[1] + arr[2]) / 3)
}

dolphinsAVG = avg(dolphinsData);
koalasAVG = avg(koalasData);

console.log(`🐬: ${dolphinsAVG}\n🐨: ${koalasAVG}`);

if ((dolphinsAVG === koalasAVG) && (dolphinsAVG > 100) && (koalasAVG > 100)) {
    console.log(`DRAW`);
} else if ((dolphinsAVG > koalasAVG) && (dolphinsAVG > 100)) {
    console.log(`🐬 WIN!`);
} else if ((dolphinsAVG < koalasAVG) && (koalasAVG > 100)) {
    console.log(`🐨 WIN!`);
} else {
    console.log(`Niether team gets the trophy.`);
}

//! LECTURE 26: The switch Statement
console.log("%c \nLECTURE 26: The switch Statement", "color: #ff0000");

language = `english`;

switch (language) {
    case `chinese`:
    case `mandarin`:
        console.log(`MOST number of native speakers!`);
        break;
    case `spanish`:
        console.log(`2nd place in number of native speakers`);
        break;
    case `english`:
        console.log(`3rd place`);
        break;
    case `hindi`:
        console.log(`Number 4`);
        break;
    case `arabic`:
        console.log(`5th most spoken language`);
        break;
    default:
        console.log(`Great language too 😊`);
}

//! LECTURE 28: The Conditional (Ternary) Operator
console.log("%c \nLECTURE 28: The Conditional (Ternary) Operator", "color: #ff0000");

population > 33 ? console.log(`${country}'s population is 📈above average`) : console.log(`${country}'s population is 📉below average`);

//! LECTURE 29: Coding Challenge #4
console.log("%c \nLECTURE 29: Coding Challenge #4", "color: #ff0000");

// const billValue = 275
const billValue = 40
// const billValue = 430

const tip = (billValue >= 50 && billValue <= 300) ? 0.15 * billValue : 0.2 * billValue;

console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`);