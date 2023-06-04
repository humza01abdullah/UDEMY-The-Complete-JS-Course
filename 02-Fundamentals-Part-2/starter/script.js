'use strict';

//! LECTURE 33: Functions 
console.log("%c \nLECTURE 33: Functions", "color: #ff0000");

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry('New Zealand', 5, 'Christchurch'));
console.log(describeCountry('South Africa', 55, 'Johannesburg'));
console.log(describeCountry('China', 1441, 'Beijing'));

//! LECTURE 34: Function Declarations vs. Expressions  
console.log("%c \nLECTURE 34: Function Declarations vs. Expressions", "color: #ff0000");

function percentageOfWorld1(population) {
    return ((population / 7900) * 100);
}

console.log(percentageOfWorld1(5));
console.log(percentageOfWorld1(55));
console.log(percentageOfWorld1(1441));

const percentageOfWorld2 = function (population) {
    return ((population / 7900) * 100);
}

console.log(percentageOfWorld2(5));
console.log(percentageOfWorld2(55));
console.log(percentageOfWorld2(1441));

//! LECTURE 35: Arrow Functions 
console.log("%c \nLECTURE 35: Arrow Functions", "color: #ff0000");

const percentageOfWorld3 = (population) => ((population / 7900) * 100);

console.log(percentageOfWorld3(5));
console.log(percentageOfWorld3(55));
console.log(percentageOfWorld3(1441));

//! LECTURE 36: Functions Calling Other Functions 
console.log("%c \nLECTURE 36:  Functions Calling Other Functions", "color: #ff0000");

function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`;
}

console.log(describePopulation('China', 1441));

//! LECTURE 38: Coding Challenge #1 
console.log("%c \nLECTURE 38: Coding Challenge #1 ", "color: #ff0000");

const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test Data 1
// const dolphinAVG1 = calcAverage(44, 23, 71);
// const koalaAVG1 = calcAverage(65, 54, 49);

// Test Data 2
const dolphinAVG1 = calcAverage(85, 54, 41);
const koalaAVG1 = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
    if ((avgDolphins / 2) >= avgKoalas) {
        return `🐬 🏆 (${avgDolphins} v ${avgKoalas})`;
    } else if ((avgKoalas / 2) >= avgDolphins) {
        return `🐨 🏆 (${avgKoalas} v ${avgDolphins})`;
    } else {
        return `NO TEAM WINS!`
    }
}

console.log(checkWinner(dolphinAVG1, koalaAVG1));

//! LECTURE 39: Introduction to Arrays
console.log("%c \nLECTURE 39: Introduction to Arrays", "color: #ff0000");

const populations = [5, 3, 55, 1441];

console.log(populations.length == 4);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3]),]

console.log(percentages);

//! LECTURE 40:  Basic Array Operations (Methods)
console.log("%c \nLECTURE 40:  Basic Array Operations (Methods)", "color: #ff0000");

const neighbours = ['Namibia', 'Swaziland', 'Mozambique', 'Lesotho', 'Botswana', 'Zimbabwe'];
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log(`Probably not a central European country :D`);
}

neighbours[neighbours.indexOf('Swaziland')] = 'Eswatini';
console.log(neighbours);

//! LECTURE 41: Coding Challenge #2 
console.log("%c \nLECTURE 41: Coding Challenge #2", "color: #ff0000");

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
let totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(totals);

//! LECTURE 42: Introduction to Objects 
console.log("%c \nLECTURE 42: Introduction to Objects", "color: #ff0000");

const myCountry = {
    country: "South Africa",
    capital: "Johannesburg",
    language: "English",
    population: 55,
    neighbours: ['Namibia', 'Eswatini', 'Mozambique', 'Lesotho', 'Botswana', 'Zimbabwe'],

    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },

    checkIsland: function () {
        this.isIsland = (this.neighbours.length == 0) ? true : false;
    }
};

//! LECTURE 43: Dot vs. Bracket Notation 
console.log("%c \nLECTURE 43:  Dot vs. Bracket Notation", "color: #ff0000");

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
myCountry['population'] -= 2;

//! LECTURE 44: Object Methods 
console.log("%c \nLECTURE 44:  Object Methods", "color: #ff0000");

// Create a method in myCountry object called "describe" & "checkIsland"
myCountry.describe();
myCountry.checkIsland();

//! LECTURE 45: Coding Challenge #3  
console.log("%c \nLECTURE 45: Coding Challenge #3 ", "color: #ff0000");

const personA = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    },
};

const personB = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    },
};

console.log((personA.calcBMI() > personB.calcBMI()) ? `${personA.firstName}'s BMI (${personA.bmi}) is higher than ${personB.firstName}'s (${personB.bmi})!` : `${personB.firstName}'s BMI (${personB.bmi}) is higher than ${personA.firstName}'s (${personA.bmi})!`);

//! LECTURE 46: Iteration: The for Loop 
console.log("%c \nLECTURE 46: Iteration: The for Loop ", "color: #ff0000");

for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`);
}

//! LECTURE 47: Looping Arrays, Breaking and Continuing 
console.log("%c \nLECTURE 47: Looping Arrays, Breaking and Continuing", "color: #ff0000");

let percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages);
console.log(percentages2);

//! LECTURE 48: Looping Backwards and Loops in Loops 
console.log("%c \nLECTURE 48: Looping Backwards and Loops in Loops", "color: #ff0000");

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        let currentCountry = listOfNeighbours[i][j];
        let rtnString = `${currentCountry}`;
        let multipleNeighbours = false;

        if (listOfNeighbours[i].length == 1) {
            rtnString = rtnString + ` has no neighbours.`;
        } else if (listOfNeighbours[i].length == 2) {
            rtnString = rtnString + ` neighbour is: `;
        } else {
            rtnString = rtnString + ` neighbours are: `;
            multipleNeighbours = true;
        }

        for (let k = 0; k < listOfNeighbours[i].length; k++) {
            if (listOfNeighbours[i][k] == currentCountry) {
                continue;
            } else {
                rtnString = rtnString + listOfNeighbours[i][k] + ` `;
            }
        }

        console.log(rtnString);
    }
}

//! LECTURE 49: The while Loop
console.log("%c \nLECTURE 49: The while Loop", "color: #ff0000");

let percentages3 = [];
let i = 0;

while (percentages3.length != percentages.length) {
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
}

console.log(percentages);
console.log(percentages3);

//! LECTURE 50: Coding Challenge #4
console.log("%c \nLECTURE 50: Coding Challenge #4", "color: #ff0000");

bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];

for (i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);