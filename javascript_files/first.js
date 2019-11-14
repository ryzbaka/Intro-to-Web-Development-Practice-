/*basic stuff*/
const monthlyRent = 500;
console.log(monthlyRent);
const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);
function add(x, y) {
  return x + y;
}
console.log(add(2, 3));

/*strings*/
const myName = "Hamza Ali";
console.log(myName);

const firstName = "Hamza";
const lastName = "Ali";

const sentence = "Hello" + " " + firstName + " " + lastName + " !";
console.log(sentence);

const sentenceFormat = `Hello ${firstName} ${lastName} !`; //back ticks specify templates
console.log(sentenceFormat);

/*booleans*/
const lightsOn = true;
const personHappy = false;
console.log(`When the light is ${lightsOn} the people are ${personHappy}.`);

/*Conditions*/
const failCondition = false;

if (failCondition) {
  console.log("The condition did not fail");
} else {
  console.log("The condition failed!");
}

const temperature = 86;

if (temperature == 86) {
  console.log("Its pretty hot!");
}

//The difference between == and === is that == automatically does type casting
//=== however, doesn't do automatic type casting.

const someVar = 2;

if (2 == someVar) {
  console.log("This works fine");
}
if ("2" == someVar) {
  console.log("This works fine too");
}
if ("2" === someVar) {
  console.log("This gave us a false value");
} else {
  console.log("So we'll get a false value");
}

// Try and always use === instead of == to overcome coersion (type casting)

const friends = "4";

if (friends === 0) {
  console.log("I can have all the nachos too myself now.");
} else if (friends <= 4) {
  // in comparators you'll always have coersion.
  console.log("Mario Kart!");
} else {
  console.log("Turn on the dance music.");
}

//Loops
let someOtherVar = 0;

for (let i = 1; i <= 10; i++) {
  someOtherVar += i;
}
console.log(someOtherVar);

while (someOtherVar != 200) {
  someOtherVar += 1;
}
console.log(someOtherVar);

do {
  someOtherVar += 1;
} while (someOtherVar != 400);

console.log(someOtherVar);
//Do loops are almost never used. But still, whatever.
let baseValue = 2;
console.log(baseValue ** 2); //some exponent stuff

//test
const character = "f";
const timesToRepeat = 20;

for (let i = 0; i < timesToRepeat; i++) {
  console.log(`${character}-${i}`);
}

//functions

function addTwo(number) {
  return number + 2;
}

const finalResult = addTwo(67);

console.log(finalResult);
console.log(addTwo(4));

const cloneAddTwo = addTwo;
console.log(cloneAddTwo(4)); //function clone

//SCOPE
let a = 32;
function scopeFuntion() {
  console.log(a);
  a = 23;
  console.log(a);
}
scopeFuntion();
console.log(a);

//Builtins

const senetence = "ThIs iS a SeNtEnCe";
console.log(senetence.toLowerCase());
console.log(senetence.toUpperCase());
console.log(senetence.length);
console.log(senetence.charAt(2));
console.log(senetence.indexOf("s"));
console.log(senetence.substr(6, 3)); //start from 6th index and grab 3 characters
//java uses .substring by the way there the parameters are (start_index,last_index+1)
//that one works like pythonic slicing.
//Fortunately, javascript has the same.
console.log(senetence.substring(0, 4));

let sentence1 = senetence.toLowerCase();
let clean_text = "";
for (let i = 0; i < sentence1.length; i++) {
  clean_text += sentence1.charAt(i);
}
console.log(clean_text);

const mainString="this is a string"

const isPresent=mainString.search("s")//this will give a positive index value if 
//the character is present
//otherwise it will give -1

const isSubString=mainString.includes("string")//true if yes else false


console.log(Math.random());
console.log(Math.round(5.5));

//Objects and Arrays

const person = {
  name: "Brian Holt",
  city: "Seattle",
  state: "WA",
  address: {
    street: "Washington Street"
  }
}; //this is an object

console.log(person.name + ", " + person.state); //this is preferred
console.log(person["city"]);
console.log(person.address.street);
console.log(person["address"]["street"]);
//You can pass an object into a function to get some very cool uh... functionality

//objects can also include functions
const dog = {
  name: "Rex",
  speak() {
    console.log("Woof!");
  }
};
dog.speak();

//Context
const car = {
  brand: "Tesla",
  getBrand() {
    console.log(this.brand);
  }
};

car.getBrand();

//Window and Global
//console.log(window)//doesn't work in node
//console.log(window.scrollX)
//console.log(window.scrollY)
//console.log(global)//this works on node

//Arrays

const myFriends = ["Hamza", "Vaisakh", "Pranav", "Chit", "Girik", "Shreya"];

console.log(myFriends[0]);
console.log(myFriends.length);
console.log(myFriends.join(","));

myFriends.push("Madhav");
console.log(myFriends);
console.log(myFriends.pop());
console.log(myFriends);
myFriends.unshift("Madhav");
console.log(myFriends);
console.log(myFriends.reverse());
console.log(myFriends); //.reverse() reverses the original array
//console.log(myFriends.indexOf("Shreya"));
//myFriends[myFriends.indexOf["Hamza"]]="me"
myFriends[1] = "Someone";
console.log(myFriends);

//forEach
myFriends.forEach(function(aFriend,index) {//index is an inbuilt variable(kind of)
  console.log(`I am a printing ${index}-${aFriend}`);//this function is run once on every element of an array
});
//in Java foreach is written as for(<dtype> variable: array){something}
//here its array.forEach(function(variable){something})

let someCollection=["Pluto","Mars","Venus"]

someCollection.forEach(
    function(planet){
        console.log(planet)
    }
)

//Document Object Model-check index.html
//events-check index.html














