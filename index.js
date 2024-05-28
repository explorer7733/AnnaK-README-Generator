// Installed inquirer@8.2.4, which includes the packages needed for this application

const inquirer = require('inquirer'); //inquirer.js is a collection of common interactive command line user interfaces. We will use inquirer.prompt method
const fs = require('fs'); //fs is a nodejs library package for reading/writting files. We will use fs.writeFile() method.
const generateMarkdown = require('./utils/generateMarkdown.js')

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project's title?",
        name: "title",
    },
    {
        type: "input",
        message: "Describe your project:",
        name: "description",
    },
    {
        type: "input",
        message: "Describe an installation process, if applicable:",
        name: "installation",
    },
    {
        type: "input",
        message: "What does user needs to know about using the README Generator?",
        name: "usage",
    },
    {
        type: "list",
        message: "What kind of license does your project have?",
        choices: ['MIT', 'GPLv3', 'Apache 2.0','None'],
        name: "license",
    },
    {
        type: "input",
        message: "List the technologies used, additional resources:",
        name: "contributing",
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
];

//Create a function to write README file
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

//Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers);
            return generateMarkdown(answers);
        })
        .then(pageMarkdown => {
            writeToFile('README.md', pageMarkdown);
            console.log('README.md created');
        })
        .catch((error) => {
            console.log(error);
        });
}

// Function call to initialize app
init();
