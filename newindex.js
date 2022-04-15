//node modules
// const inquirer = require('inquirer');
// const fs = require('fs');

// //where page is created
// const templateData = require('./src/page-template.js');

// //classes for team member cards
// const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');

//team member array
const teamProfileArr = [];


//Initial prompts begin with Manager questions here
const promptManager = () => {

    return inquirer.prompt ([
        
        {
            type: 'input',
            name: 'name',
            message: "Please enter the team manager's first and last name.",
        },
        {
            type: 'input',
            name: 'idNumber',
            message: "Enter team manager's ID number."
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter team manager's email.",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter team manager's office phone number.",
        },
        {
            type: 'list',
            name: 'confirmAddTeam',
            message: "Please select if you want to build either an 'Engineer' or an 'Intern' contact, or if you have completed adding your team.",
            choices: ['Engineer', 'Intern', "I'm done adding team members."],
            default: 2
        },
    ])

    //add manager profile to team member array
    .then(managerCard => {
        const { name, idNumber, email, officeNumber } = managerCard;
        const manager = new Manager (name, idNumber, email, officeNumber);
        
        teamProfileArr.push(manager);
        console.log(manager);

        if (managerCard.confirmAddTeam === 'Engineer') {
            return promptEngineer(teamProfileArr)
        }
         else if (managerCard.confirmAddTeam === 'Intern') {
            return promptIntern(teamProfileArr)
        } else {
            return teamProfileArr;
        }

    });
};


//prompt for Engineer questions
const promptEngineer = () => {

    inquirer
    .prompt([
        
        {
            type: 'input',
            name: 'name',
            message: "Enter engineer's first and last name.",
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'idNumber',
            message: "Enter engineer's ID number.",
            validate: employeeIdNumber => {
                if (employeeIdNumber) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter team member's email address.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter team member GitHub profile (username only).",
            validate: engineerGithub => {
                if (engineerGithub) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'confirmAddTeam',
            message: "Please select if you want to build either an 'Engineer' or an 'Intern' contact, or if you have completed adding your team.",
            choices: ['Engineer', 'Intern', "I'm done adding team members."],
            default: 2
        },

    ])

    .then(engineerCard => {
        const { name, idNumber, email, github } = engineerCard;
        const engineer = new Engineer(name, idNumber, email, github)

        teamProfileArr.push(engineer);
        console.log(engineer);

        if (engineerCard.confirmAddTeam === 'Engineer') {
            return promptEngineer(teamProfileArr)
        }
         else if (engineerCard.confirmAddTeam === 'Intern') {
            return promptIntern(teamProfileArr)
        } else {
            return teamProfileArr;
        }
    });

};

//prompt for Engineer questions
const promptIntern = () => {

    inquirer
    .prompt([
        
        {
            type: 'input',
            name: 'name',
            message: "Enter Interns's first and last name.",
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'idNumber',
            message: "Enter Intern's ID number.",
            validate: employeeIdNumber => {
                if (employeeIdNumber) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter Intern's email address.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter name of school Intern currently attends.",
            validate: internSchool => {
                if (internSchool) {
                    return true;
                } else {
                    return false;
                }
            }
        },

    ])

    .then(internCard => {
        const { name, idNumber, email, school } = internCard;
        const intern = new Intern(name, idNumber, email, school)

        teamProfileArr.push(intern);
        console.log(intern)

        if (internCard.confirmAddTeam === 'Engineer') {
            return promptEngineer(teamProfileArr)
        }
         else if (internCard.confirmAddTeam === 'Intern') {
            return promptIntern(teamProfileArr)
        } else {
            return teamProfileArr;
        }
    });
};


promptManager();


// promptManager()
//     .then(promptEngineer)
//     .then(promptIntern)
//     .then(teamProfileArr => {

//     const data = templateData(teamProfileArr);
        
//     fs.writeFile('./dist/index.html', data, err => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log('Page creation successful!')
//     });
// })


// function to generate HTML page
// const writeFile = data => {
//     fs.writeFile('./dist/index.html', data, err => {
//         if (err) {
//             console.log(err);
//             return;
//         } else {
//             console.log("Page creation successful!")
//         }
//     })
// };

// promptManager()
//     .then(promptEngineer)
//     .then(promptIntern)
//     .then(teamProfileArr => {
//         return templateData(teamProfileArr);
//     })
//     .then(pageHTML => {
//         return writeFile(pageHTML);
//     })
//     .catch(err => {
//         console.log(err);
//     });