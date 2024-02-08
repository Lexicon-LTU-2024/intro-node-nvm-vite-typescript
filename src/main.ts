// ########## Variables ##########

// You set the type by adding the type after a colon next to the variable.

let age: number;

// JS lets us reassign values to different data types. TypeScript does not
age = 10;
age = "14"; // Not allowed

console.log(age);

let firstName: string = "Niklas";
firstName = "Henrik"; // Works
firstName = true; // Not allowed.

console.log(firstName);

// Remember that TS in vanilla doesn't restrict us from running the faulty code in the browser. But it gives help when developing.

let isEducated: boolean = true;
isEducated = false; // Works
isEducated = "true"; // Doesn't work.
isEducated = 1;

// Const variables always need a value, can't be just a declaration, needs assignment as well.
const lastName = "Erik";

// If we create a variable without the type declaration but we give it a value, TS will infer the type to us and restrict that variable based on that.
let fullname = "Fahnrich";
fullname = 10; // This won't work since TS inferred the type on the variable

// ########## Arrays ##########

// Typing arrays is very similar to variables. Here you use a combination of the data type and square brackets.
let numbers: number[]; // This will declare a variable that can only be an array with numbers.

numbers = [];
numbers.push(5);
numbers.push(19);
numbers.push("Niklas"); // Wrong type that you are trying to push.

console.log(numbers);

const names: string[] = ["Niklas", "Henrik"];
names.push("Peter");
names.push(2100); // Won't work.

// If you want to be able to add more types in an array you can do that but you must tell TS that. You do that with a union type. To add a union type ypu use the "|" character/

const ids: (number | string)[] = [];
ids.push(10);
ids.push("randomId");
console.log(ids);

// Same with variables
let id: number | string = 10;
id = "hkjasdh-asdjfkl";
id = true;

// ########## Objects ##########

// Typing objects is more complex. But if we create an object, TS will infer the type to us.

const car = {
  color: "red",
};

// The object above is an object containg only one attribute that is called color and have the value of a string.

car.color = "green";
car.make = "Volvo"; // Won't work since it doesn't exist on the declaration of the object.

// Depending on what we put in the object, TS will enforce that on the object variable. Meaning we can't add attributes later as we can in JS.

// How to we fix this? We use something called interfaces.

// ########## Interface ##########

// Interfaces is used to restrict objects, the tell us what we can put inside an object. The naming convention is that interface names starts with a capital "I" and then PascalCase on the rest of the name.

interface ICar {
  color: string;
  make: string;
  model: string;
  year: number;
  manual: boolean;
}

const anotherCar: ICar = {
  color: "red",
  make: "Saab",
  manual: false,
  model: "95",
  year: 2005,
};

// In the example above TS will tell us if we are missing an attribute or not. It will also help us to remember which attributes that was needed. By pressing ctrl+space on windows you get this help. What if we want to work with optional objects?

interface ICarAlt {
  color: string;
  make: string;
  model: string;
  year: number;
  manual?: boolean;
}

const altCar: ICarAlt = {
  color: "red",
  make: "Saab",
  model: "95",
  year: 2005,
};

// By adding a question mark to the attribute we make it optional, which means that TS allows undefined values on it.

// ########## Functions ##########

// Return value of functions is added after the parenthesis with a colon. the value void means that it has no return value (undefined). To retunr a string, you just add a string after the colon, and so on.

// No return value
function greeting(): void {
  console.log("Hello there!");
}

// String as return value
function sayAName(): string {
return "I am saying your name"; 
}

const text = sayAName();
console.log(text);

// String array as return value
function sayANameAsArray(): string[] {
  // return ["say", 10, "name"]; // Will not work, since only strings are allwed
  return ["say", "your", "name"];
}

// Numbers as return value, but also two arguments that both are of data type number.
function addNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

const sum = addNumbers(19, 27);
console.log(sum);
