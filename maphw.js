// Observe the list of people below
const people = [ { name: "John Doe", age: 16 },
                 { name: "Thomas Calls", age: 19 },
                 { name: "Liam Smith", age: 20 },
                 { name: "Jessy Pinkman", age: 18 }
                ];
​
// Observe the coffeeLovers list containing people who are coffee lovers
const coffeeLovers = ["John Doe", "Liam Smith", "Jessy Pinkman"];
​
// use map, filter, and reduce to do the following:
/*
1. Filter all people above the age of 18 (use a function called ageAbove18)
2. Transform the people array so all people in the array who are in coffeeLovers have a property
   in their object called coffeeLover, set either to true or false. (Use a function called addCoffeeLoverProperty)
3. Get the total summed age of all people who are coffee lovers and above the age of 18 (Use a function called ageReducer)
*/
​
// const ageAbove18 = () => {
 
// }
    
// ​ageAbove18();
const ageAbove18=people.filter(people => people.age>18).map(people => people.name)
console.log(ageAbove18)

// const addCoffeeLoverProperty = () => {};

const coffeeName=coffeeLover.map(coffeeLovers=>coffeeLovers)
const addCoffeeLoverProperty=people.map((a)=>{a.coffeeLover="True or false"})

// const ageReducer = () => {};

const age = people.map (people => people.age)
const ageReducer = (accumulator, age) => accumulator + age
const total = age.reduce(ageReducer, 0)
console.log(total)​

//const coffeeLoversAbove18 = people.filter(<someFunc1>).map(<someFunc2>);

const coffeeLoversAbove18 = people.filter(people => people.age>18).map(people => people.coffeeLover);

// const totalAgeOfCoffeeLoversAbove18 = coffeeLoversAbove18.reduce(<someFunc3>);

const ageAbove18CoffeeLover=coffeeLoversAbove18.map(coffeeLoversAbove18 =>coffeeLoversAbove18.age)
const ageAbover18ClReducer= (accumulator, ageAbove18CoffeeLover) => accumulator + ageAbove18CoffeeLover
const totalAgeOfCoffeeLoversAbove18 = coffeeLoversAbove18.reduce(ageAbover18ClReducer,0);
 
 console.log(totalAgeOfCoffeeLoversAbove18);