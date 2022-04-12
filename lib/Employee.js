const inquirer = require('inquirer');
const fs = require('fs');
//const generateHTML = require('./src/generateHTML.js');

function Employee(name = '') {
    this.name = name;

    this.idNumber = Number.isNan;
    this.email = ('');
}

module.exports = Employee;

//class constructor to combine the following
//name
//id
//email
//getName()
//getId()
//getEmail()
//getRole() <--- Not sure about this one yet?

//questions for employee
// const promptUser = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'Please enter first and last name of employee. (Input Required)',
//             validate: employeeName => {
//                 if (employeeName) {
//                     return true;
//                 } else {
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'idNumber',
//             message: "What is the employee's ID number? (Input Required)",
//             validate: employeeIdNumber => {
//                 if (employeeIdNumber) {
//                     return true;
//                 } else {
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: "What is the employee's email? (Input Required)",
//             validate: employeeEmail => {
//                 if (employeeEmail) {
//                     return true;
//                 } else {
//                     return false;
//                 }
//             }
//         },
//     ])
// };