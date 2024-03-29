const inquirer = require('inquirer');
const fs = require('fs');

const employeeCards = require('./src/page-template.js');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//team member array
const teamDataArr = [];

//Initial prompts begin with Manager questions here
const promptManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'company',
            message: "Please enter the name of your company.",
            validate: companyName => {
                if (companyName) {
                    return true;
                } else {
                    return false;
                }
            }
            
        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter the Team Manager's first and last name.",
            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'idNumber',
            message: "Enter Team Manager's ID number.",
            validate: valid => {
                if (!isNaN(valid)) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter Team Manager's email (must be valid).",
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
            name: 'officeNumber',
            message: "Enter Team Manager's office phone number in the following format (555-555-5555).",
            validate: officeNumber => {
                valid = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/.test(officeNumber)
                if (valid) {
                    return true;
                } else {
                    return false;
                }
            }
        },
    ])

    //add manager profile to team member array
    .then(managerCard => {
        const { name, idNumber, email, officeNumber, company } = managerCard;
        const manager = new Manager (name, idNumber, email, officeNumber, company);
        
        teamDataArr.push(manager);
        //console.log(manager);

        return teamDataArr;
    });
};


//prompt for Engineer questions
const promptEngineer = () => {
    return inquirer.prompt ([
        {
            type: 'confirm',
            name: 'confirmAddEngineer',
            message: "Would you like to add additional ENGINEERS to your contact page?",
            default: false
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter Engineer's first and last name.",
            when: (response) => response.confirmAddEngineer === true,
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
            message: "Enter Engineer's ID number.",
            when: ({ name }) => {
                if (name) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: valid => {
                if (!isNaN(valid)) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter Engineer's email address.",
            when: ({ idNumber }) => {
                if (idNumber) {
                    return true;
                } else {
                    return false;
                }
            },
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
            message: "Enter Engineer's GitHub profile (username only).",
            when: ({ email }) => {
                if (email) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: engineerGithub => {
                if (engineerGithub) {
                    return true;
                } else {
                    return false;
                }
            }
        },
    ])

    .then(engineerCard => {
        const { name, idNumber, email, github } = engineerCard;
        const engineer = new Engineer(name, idNumber, email, github)

        if (engineerCard.github) {
            teamDataArr.push(engineer);
            //console.log(engineer);
            return promptEngineer(teamDataArr)
        } else {
            return teamDataArr;
        }
    });
};

//prompt for INTERN questions
const promptIntern = () => {
    return inquirer.prompt ([
        {
            type: 'confirm',
            name: 'confirmAddIntern',
            message: "Would you like to add additional INTERNS to your contact page?",
            default: false
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter Interns's first and last name.",
            when: (response) => response.confirmAddIntern === true,
            validate: internName => {
                if (internName) {
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
            when: ({ name }) => {
                if (name) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: valid => {
                if (!isNaN(valid)) {
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
            when: ({ idNumber }) => {
                if (idNumber) {
                    return true;
                } else {
                    return false;
                }
            },
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
            when: ({ email }) => {
                if (email) {
                    return true;
                } else {
                    return false;
                }
            },
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

        if (internCard.school) {
            teamDataArr.push(intern);
            //console.log(intern);
            return promptIntern(teamDataArr);
        } else {
            return teamDataArr;
        }
    });
};


promptManager()
    .then(promptEngineer)
    .then(promptIntern)
    .then(teamDataArr => {

    const data = employeeCards(teamDataArr);
        
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Page creation successful!')
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
              console.log(err);
              return;
            };
          });
    });
})