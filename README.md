# Vite JS och TypeScript

<details>
<summary>Table of content</summary>

- [Node JS](#node-js)

  - [Key features of Node](#key-features-of-node)

- [NVM _( Node Version Manager )_](#nvm)

  - [Installing NVM](#installing-nvm)

- [Vite JS](#vite-js)

- [TypeScript](#typescript)
  - [ What problems does TypeScript solves?](#what-problems-does-typescript-solves)
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
