const templateHTML = require('./src/page-template.js');

const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//team member array
const teamArr = [];

//Initial prompts begin with manager questions here
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
    ])

    //add manager profile to team member array
    .then(managerContact => {
        const { name, idNumber, email, officeNumber } = managerContact;
        const manager = new Manager (name, idNumber, email, officeNumber);
        
        teamArr.push(manager);
        //console.log(manager);

    })
};


//prompt for `Engineer` and `Intern` questions
const promptTeamMember = () => {

    return inquirer.prompt ([

        {
            type: 'list',
            name: 'role',
            message: "Please select if you want to build either an 'Engineer' or an 'Intern' contact.",
            choices: ['Engineer', 'Intern'],
            default: 0
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter team member's first and last name.",
            validate: memberName => {
                if (memberName) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'idNumber',
            message: "Enter team member's ID number.",
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
            when: (response) => response.role === 'Engineer',
            validate: engineerGithub => {
                if (engineerGithub) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter school that team member currently attends.",
            when: (response) => response.role === 'Intern',
            validate: internSchool => {
                if (internSchool) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddTeam',
            message: "Would you like to add another team member?",
            default: false
        },

    ])

    .then(createCard => {
        let { name, idNumber, email, role, github, school } = createCard;
        let teamMember;

        if (role === 'Engineer') {
            teamMember = new Engineer (name, idNumber, email, github);
        } else if (role === 'Intern') {
            teamMember = new Intern (name, idNumber, email, school);
        }

        teamArr.push(teamMember);
        //console.log(teamMember);

        if (teamMember.confirmAddTeam) {
            return promptTeamMember(teamArr);
        } else {
            return teamArr;
        }
    });

};

promptManager()
    .then(promptTeamMember)
    .then(teamArr => {

    const data = templateHTML(teamArr);
        
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Page creation successful!')
    });
})