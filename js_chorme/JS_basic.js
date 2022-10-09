console.log(5+2);
console.log(5/2);
console.log(5-2);

const a = 8;
console.log(a + 2);
console.log(a / 2);
console.log(a - 2);

const b = 2;
console.log(a + b);
console.log(a / b);
console.log(a - b);

let myName = "Yedam";
console.log(myName);

myName = "KimYedam";
console.log('Your New Name Is ' + myName);

// array

const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
console.log(daysOfWeek);
console.log(daysOfWeek[3]);

daysOfWeek.push('sun');
console.log(daysOfWeek);

// object

const player = {
    name: "nico",
    points: 10,
    handsome: true,
};

console.log(player);
console.log(player.name);
console.log(player['name']);

player['name'] = 'Yedam';
console.log(player);

player['lastName'] = 'Kim';
console.log(player);

player['points'] = player['points'] + 10;
console.log(player);

// function

function sayHello() {
    console.log("Hello!")
};

sayHello();

function HelloFrom(name){
    console.log("Hello my name is " + name)
};

HelloFrom('Yedam');

function Introduce(name, age){
    console.log("Hello my name is " + name +
    " and I'm " + age + " years old.")
};

Introduce("Yedam", 25);

function plus(a, b){
    console.log(a + b)
};

plus(3, 8);

function divide(a, b){
    console.log(a / b)
};

divide(124, 4);

// object with function

const playeris = {
    name: "Yedam",
    age: 25,
    Greeting: function (to){
        console.log("Hello, " + to + '!');
    }
}
playeris['Greeting']("You");
playeris.Greeting("You");

// recap

const calculator = {
    add: function(a, b){
        console.log(a+b)
    },
    subtract: function(a, b){
        console.log(a-b)
    },
    multiply: function(a, b){
        console.log(a*b)
    },
    powerof: function(a, b){
        console.log(a**b)
    }
};

calculator.add(5, 2);
calculator.subtract(5, 2);
calculator.multiply(5, 2);
calculator.powerof(5, 2);

// returns

function krAge(age){
    return age + 1
};

console.log("lectureReturns")
krAge(25);
console.log(krAge(25));
console.log(krAge(10)+10)

// conditions

/* const age = prompt("How old are YOU?");
console.log(age);
console.log(typeof(age));

const intAge = parseInt(prompt("How old are you?"));
console.log(intAge);
console.log(typeof(intAge));

const Age = parseInt(prompt("How old are you?"));
console.log(isNaN(Age));

const age = prompt("How old are you?");
console.log(isNaN(age));

if(isNaN(age)){
    console.log("Please write a number.");
} else if (age < 18) {
    console.log("You are too yong to drink.");
} else {
    console.log("Welcome, you can drink.");
} 
*/

const age = prompt("How old are you?");
console.log(isNaN(age));

if(isNaN(age) || age < 0){
    console.log("Please write a real positive number.");
} else if (age >= 18 && age <=80) {
    console.log("Welcome, you can drink.");
} else if (age < 18 || age > 80) {
    console.log("You can't drink.");
} 



