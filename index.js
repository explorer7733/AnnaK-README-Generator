// Installed inquirer@8.2.4, which includes the packages needed for this application

const inquirer = require('inquirer'); //inquirer.js is a collection of common interactive command line user interfaces. We will use inquirer.prompt method
const fs = require('fs'); //fs is a nodejs library package for reading/writting files. We will use fs.writeFile() method.
const generateMarkdown = require('./utils/generateMarkdown.js')

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project's title?",
        name: "text",
    },
    {
        type: "input",
        message: "Describe your project",
        name: "text",
    },
    {
        type: "input",
        message: "What kind of license does your project have?",
        name: "text",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "text",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "text",
    },   
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, error => {
            if (error) {
                reject(error);
                return;
            }
            resolve({
                ok: true,
                message: "README file created"
            });
        });
    });
 };

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
