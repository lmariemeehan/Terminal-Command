
// you're requiring or importing the my-library module, which you previously exported here

const myLibrary = require('./my-library');
const uuid = require('uuid');
const newUuid = uuid();
const terminalCommands = require('./terminal-commands')
// execute my-library here
myLibrary.myFirstMethod();
console.log(`your new Universally unique identifier is ${newUuid}`);
terminalCommands.ls();
