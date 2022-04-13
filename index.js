

const inquirer = require('inquirer');
const fs = require('fs');
const templateData = require('./src/page-template.js');

//const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');


// function Prompt() {
//     this.manager;
//     this.engineer;
//     this.intern;
// }

function promptManager(managerStuff) {
    if (!managerStuff.managerArr) {
        managerStuff.managerArr = [];
    }
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the team manager's first and last name. (Input Required)",
        },
        {
            type: 'input',
            name: 'idNumber',
            message: "What is the their ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email? (Input Required)",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's phone number? (Input Required)",
        },
        {
            type: 'list',
            name: 'confirmAddEmployee',
            message: "Pleaseselect if you want to add an Intern, Engineer, or if you are done adding team members.",
            choices: ['Intern', 'Engineer', "I'm done adding team members"],
            default: 2
        },

    ])

    .then(managerData => {
        managerStuff.managerArr.push(managerData);
        if (managerData.confirmAddEmployee == 'Intern') {
            return promptManager(managerStuff);
        } else if (managerData.confirmAddEmployee == 'Engineer') {
            return promptManager(managerStuff);
        } else {
            return managerData;
        }
    })
    // console.log(managerData);
};

// Prompt.prototype.promptId = function() {
//     inquirer
//     .prompt({
//         type: 'text',
//         name: 'idNumber',
//         message: "What is the their ID number?"
//     })

//     .then(({ }) => {
//         this.manager.getId();
//         this.promptEmail();
//     })

// };

// Prompt.prototype.promptEmail = function() {
//     inquirer
//     .prompt({
//         type: 'input',
//         name: 'email',
//         message: "What is their email address? (Input Required)",
//     })

//     .then(({ }) => {
//         this.manager.getEmail();
//         // this.promptEmail();
//     })

// };

new promptManager();