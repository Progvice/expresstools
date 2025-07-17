# Expresstools

Expresstools is Javascript CLI tool that I started creating because I wanted to automate some parts of creating code. 

There are many elements that can be easily be built with automated steps, but there aren't any tools for that. That
is why I decided to create this tool. It automates creation of Express routes and controllers. It creates basic CRUD routes.

This repository is skeleton Express.js application that can be extended further. CLI tool is built with Javascript, but
skeleton is built with Typescript.

Reason why I decided to build the tool with Javascript because I wanted to avoid all the obstacles that Typescript makes.
Don't get me wrong - Typescript is generally good tool for developing typesafe code and it maintains data integrity really well.
But for this tool it was not worth it to start building it in Typescript because typesafety is not really needed on this tool itself.
It just automates code creation and most of this is just making templates of controllers and routes. 

## How to use

At the moment this tool does not have many functionalities. However there are these functionalities

### How to create new route?

    node cli.js route:create students

This command creates new controller and route called "students", and then adds route automatically to routes.ts file. 

### How to remove routes?

    node cli.js route:remove students

This command removes the controller and route called "students", and then removes route automatically from routes.ts file. 

I don't have any plans for this project in the future, but if I feel like developing it further I will develope it and add some functionalities to it. 
