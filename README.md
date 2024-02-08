# Vite JS och TypeScript

<details>
<summary>Table of content</summary>

- [Node JS](#node-js)

  - [Key features of Node](#key-features-of-node)

- [NVM _( Node Version Manager )_](#nvm)

  - [Installing NVM](#installing-nvm)

- [Vite JS](#vite-js)

- [TypeScript](#typescript)

  - [What problems does TypeScript solves?](#what-problems-does-typescript-solves)
  - [Variables](#variables)
  - [Arrays](#arrays)
  - [Objects](#objects)
  - [Interfaces](#interfaces)
  - [Functions](#functions)
  - [Functions in interfaces](#functions-in-interfaces)
  - [Union Types](#union-types)

  </details>

## Node JS

Before we can use Vite JS we first need something called Node JS. Vite relies on Node for tasks such as installing dependencies, running the development server, and building the project for production. But Node in itself is also a very powerful developing tool that every frontend developer should have installed on the computer.

Node is an open-source, cross-platform JavaScript runtime environment. It allows developers to run JavaScript code on the server side, outside of a web browser.

[Node JS Homepage](https://nodejs.org/en)

[Back to top](#vite-js-och-typescript)

### Key features of Node

There are a lot of key features and use cases for Node, but here is a few:

1. **Server-Side JavaScript:** Node.js enables the execution of JavaScript code on the server, allowing developers to use a single language (JavaScript) for both client-side and server-side development. This unification simplifies the development process and promotes code reuse.

2. **Package Manager:** Node.js comes with `npm` _( Node Package Manager )_, which is a powerful package manager used to install, manage, and share reusable JavaScript code and libraries. `npm` is one of the largest package ecosystems in the world, and it greatly facilitates the development and distribution of Node.js modules.

3. **Single Page Applications _( SPAs )_:** With the rise of client-side frameworks like React, Angular, and Vue.js, Node.js is often used as a backend to serve APIs and handle server-side rendering for SPAs.

4. **Web Servers:** Node.js is commonly used to build lightweight and fast web servers. Frameworks like Express.js provide a streamlined way to develop server-side applications, APIs, and microservices using Node.js.

5. and many more...

However, the feature about `npm` is the one that is most important from us if we want to use `Vite`. So, we need to install node on your computers.

[Back to top](#vite-js-och-typescript)

## NVM

`nvm` stands for Node Version Managar and it is a tool that allows you to easily install and manage multiple versions of Node.js on a single machine. The primary purpose of `nvm` is to simplify the process of switching between different versions of Node.js, which is particularly useful when working on projects that may require a specific version of Node.js.

We need nvm for easy management of node. It also has a lot of features but we don't need to know about them at this stage. Let's just say that it makes life easier for us.

[Back to top](#vite-js-och-typescript)

### Installing NVM

Down below is some links for installation of nvm, remember, if you have node already on your computer, you must uninstall that before installing `nvm` in order to avoid future errors when using different node versions and installing packages from the npm registry.

Here is how you check if you have node on your computer:

```bash
node --version
```

If a version comes up, you have it and you need to uninstall it. If something like `"nodes is not recognized.."`, you don't and can move on to install `nvm`.

Different sites that offes instruction on how to uninstall node on windows:

- [Uninstall node on windows - geeksforgeeks](https://www.geeksforgeeks.org/how-to-completely-remove-node-js-from-windows/)

- [Uninstall node on windows - codedamn](https://codedamn.com/news/nodejs/how-to-uninstall-node-js)

- [Uninstall node on windows - stackoverflow](https://stackoverflow.com/questions/20711240/how-to-completely-remove-node-js-from-windows)

Uninstall node on mac:

- [Uninstall node on mac - stackabuse](https://stackabuse.com/how-to-uninstall-node-js-from-mac-osx/)

- [Uninstall node on mac - imymac](https://www.imymac.com/powermymac/uninstall-node-mac.html)

Install nvm and then node:

- [Install nvm on windows 10](https://www.freecodecamp.org/news/nvm-for-windows-how-to-download-and-install-node-version-manager-in-windows-10/)

- [Install nvm on windows 11](https://realworlddev.hashnode.dev/installing-nvm-on-windows-11)

- [Install nvm on Mac](https://tecadmin.net/install-nvm-macos-with-homebrew/)

[Back to top](#vite-js-och-typescript)

## Vite JS

Now we with `nvm` and `node` taken care of we can move on the fun part. What is `Vite`?

Vite.js is a build tool for modern web development that focuses on providing a fast development experience. It is particularly well-suited for building web applications using modern JavaScript frameworks like Vue.js, React, and others. Vite.js is designed to leverage the native ES module system and provides a development server with features like hot module replacement (HMR) to enhance the development workflow.

ES moduels is a new term for you, read more about them here:

[Introduction to ES Modules](https://flaviocopes.com/es-modules/)

[ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)

[Vite JS Homepage](https://vitejs.dev/)

`vite` is usually directly comapared to webpack which is also a build tool used in frontend development, but I am not going to go through and compare them here. If you are interested there are countless articles on the web about it. But I can say that `Vite` is designed to provide a faster and more streamlined development experience then webpack.

To start a `Vite` project you just have to open up a terminal in the folder where you want to place your project and type in this command:

```bash
npm create vite@latest
```

Then just follow the prompts, it's going to ask you for some options, among other what framework you want to use. In the react segment of the course we are going for
React Typescript of course but for now `Vanilla` and then `Typescript` is what we want.

Then cd in to your project, install the dependencies with `npm install` and then type `npm run dev` to start ypur development server.

[Back to top](#vite-js-och-typescript)

## Typescript

TypeScript is a superset of JavaScript that adds static typing to the language. It was created to address several challenges and issues that developers commonly face in large and complex JavaScript codebases. It is not an entirely new programming language, since any valid JavaScript code is also valid TypeScript code, but it extends JavaScript by adding optional static typing and additional features that aid in the development of large-scale and maintainable applications.

[TypeScript Homepage](https://www.typescriptlang.org/)

[Back to top](#vite-js-och-typescript)

### What problems does TypeScript solves?

1. **Static Typing:**

- **Problem in JavaScript:** JavaScript is a dynamically-typed language, which means variable types are determined at runtime. This lack of static typing can lead to runtime errors and make it harder for developers to catch certain types of bugs during development.
- **Solution in TypeScript:** TypeScript introduces static typing, allowing developers to define and enforce types for variables, function parameters, and return values. This helps catch type-related errors early in the development process and provides better tooling support for code editors.

2. **Code Maintainability:**

- **Problem in JavaScript:** In large and complex codebases, understanding and maintaining code can become challenging, especially when dealing with untyped or loosely typed code.
- **Solution in TypeScript:** With static typing, TypeScript provides better code documentation and readability. Developers can understand the types of variables and functions just by looking at the code, making it easier to maintain and refactor.

3. **Tooling and IDE Support:**

- **Problem in JavaScript:** JavaScript lacks comprehensive tooling support due to its dynamic nature. IDEs may have limited capabilities in terms of autocompletion, type checking, and refactoring.
- **Solution in TypeScript:** TypeScript comes with a rich set of tooling features. IDEs can offer intelligent autocompletion, real-time error checking, and enhanced refactoring support because TypeScript provides clear type information.

4. **Enhanced Developer Experience:**

- **Problem in JavaScript:** Developers often rely on runtime checks and debugging to identify type-related issues in JavaScript, which can be time-consuming.
- **Solution in TypeScript:** TypeScript allows developers to catch and fix errors at compile-time rather than runtime. This results in a more pleasant development experience with fewer surprises during execution.

5. **Interfaces and Type Annotations:**

- **Problem in JavaScript:** JavaScript lacks built-in constructs for defining interfaces and complex types explicitly.
- **Solution in TypeScript:** TypeScript introduces interfaces and type annotations, allowing developers to define custom types, structures, and contracts. This promotes better code organization, documentation, and collaboration.

6. **Code Quality and Readability:**

- **Problem in JavaScript:** Without type information, it can be challenging to ensure that functions are used correctly, leading to potential bugs.
- **Solution in TypeScript:** TypeScript helps improve code quality by providing a mechanism for expressing and enforcing contracts between different parts of the code. This can lead to more robust and reliable applications.

[Back to top](#vite-js-och-typescript)

### Variables

Variabels is really simple to type up in TS, just add a colon and the specific type after the variable name.

```ts
let age: number;
```

This tells TS that the variabel `age` is a variable that will contain a value of type number in the future. TS will then prevent you from assigning any other type of value to that variable.

```ts
age = 10; // Works
age = "14"; // Won't work
```

Same with strings and booleans

```ts
let firstName: string = "Niklas";
firstName = "Henrik"; // Works
firstName = true; // Won't work

let isEducated: boolean = true;
isEducated = false; // Works
isEducated = "true"; // Won't work
isEducated = 1; //Won't work
```

In the above example we declare and assign a value to the variables straight away. We add the specific type as well.

On thing to think about is that TS can infer types depending on the code you write.

```ts
let name = "Niklas";
name = 10; // Won't work
name = "Henrik"; // Works
```

In this case we have created a variable but not restricted it to a type, but we have given it a value. Here TS will read that value and set that to the allowed type on that variable. It infers it in other words.

[Back to top](#vite-js-och-typescript)

### Arrays

Arrays work in the same way as variables but here you use a combination of the type and square brackets. Like this:

```ts
const arr: string[] = ["Niklas", "Henrik", "Sofia"];

arr.push("Erik"); // Works
arr.push(true); // Won't work
```

The `string[]` says to TS that this variable can only be an array containing of string values. It works the same way if it was a `number[]` or `boolean[]` array as well.

[Back to top](#vite-js-och-typescript)

### Objects

Objects are a little bit more complex to type up, we need another tool, but more about that later. Let's just create an object.

```ts
const car = {
  color: "red",
};
```

This is a car, it has one attribute that is the color of the car and that value is of type string. If I try to add some other attribute to the car in the code, it won't work.

```ts
car.color = "green"; // Works
car.make = "Volvo"; // Won't work
```

Above we can see that changing the value of color is fine. We expected that, but we can't create the make-attribute? That's because TS infers the type on this object when we create it, and since we only added one attribute we can only have that particular attribute on our object and its value has to be a string. We could add the make-attribute to the declaration but the issue still remains. If we create an object with a set amount of attributes, then those are the only ones allowed in there. This is actually a good thing because we don't want developers or users to just add random values to our objects. That could result in very strange behaviours in our application.

We do however want more control on this. That TS infers types for us is nice, but we would like to do that on our own. Enter interfaces.

[Back to top](#vite-js-och-typescript)

### Interfaces

Interfaces is a special kind tool in TS that allows us to restrict the shape and size of an object. We can with an interface tell TS exactly how many attributes on what data types those value should have beforehand. Let's create an interface for our car from previous example.

```ts
interface ICar {
  color: string;
  make: string;
  model: string;
  year: number;
  manual: boolean;
}
```

Creating an interface is really easy. Just a keyword, a name and then brackets. The naming convention here on the name is a captial "I" in the beginning denoting an Interface and then `PascalCase` on the rest of the name.

In the interface we have decided to only allow five different attributes with set data types for each attribute. Some string, a number and an boolean. To apply this interface to oour object we use colon in just the same way as with variables and arrays.

```js
const car: ICar = {
  color: "red",
  make: "Saab",
  manual: false,
  model: "95",
  year: 2005,
};
```

The good thing here is that VSC will aid us in what attributes that goes in to this object. Just click `ctrl+space` _( on windows )_ inside the object to get the suggestions. We don't need to remember what goes in there because TS will do that for us. It will also restrict the possibility to add new attributes on the fly or change the data type of the values, but that's all good and something that we want.

[More on interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces)

[Back to top](#vite-js-och-typescript)

### Functions

On functions there exists two typing possibilities. One for typing up the arguments and one for typing up the return value. These two mustn't be the same of course, your are free to return any type from any set of arguments.

Typing functions though, is not always necessary since TS will always infer the type depending on the arguments that you pop in _( provided that they are properly typed )_. But good convention is to always type these up yourself.

Function with return value:

```js
// Void as return value (nothing is returned)
function greeting(): void {
  console.log("Hello there!");
}

// String as return value
function sayAName(): string {
  return "I am saying your name";
}
```

Function with arguments and return value:

```js
// Takes two numbers as arguments and return a number
function addNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

// Arrow function alternative
const addNumbers = (num1: number, num2: number): number => {
  return num1 + num2;
};

// Takes a string array as argument and returns a string array
function sortStringsArray(arr: string[]): string[] {
  return arr.sort();
}

// Arrow function alternative
const sortStringsArray = (arr: string[]): string[] => {
  return arr.sort();
};
```

Just type the arguments as you would variables and don't forget the return value. If it returns nothing, add `void` to the return type.

[Back to top](#vite-js-och-typescript)

### Functions in interfaces

If you want methods in your objects you also need to add them to the interface.

Take this object for instance:

```ts
const car: ICar = {
  make: "Saab",
  model: "95",
  tankCurrentLitres: 12,
  tankMax: 60,
  start: () => {
    console.log(`${this.make} ${this.model} is firing up!`);
  },
  refuel: (litresOfPetrol: number): null | number => {
    const litresInTank = this.tankCurrentLitres + litresOfPetrol;
    if (litresInTank > this.tankMax) {
      console.error("You can't fill it up above tankMax");
      return null;
    }
    return litresInTank;
  },
};
```

The interface for this object would look like this:

```ts
interface ICar {
  make: string;
  model: string;
  tankCurrentVolume: number;
  tankMaxVolume: number;
  start: () => void;
  refuel: (litresOfPetrol: number) => null | number;
}
```

The method `start` only executes some code, it has no arguments and no return value, so that's the type for the method. If we would have arguments they would go in the parenthesis like a normal function and the return type is what comes straight after the arrow.

[Back to top](#vite-js-och-typescript)

### Union Types

The other method, the `refuel` is slightly more complex but still the arguments in the parenthesis and return value after the arrow. Only here we have a "|" between null and number? What does that mean? It's a union of two types. It can either return null or number and this cna be used on every previous example.
