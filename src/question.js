//MANAGER
const promptManager = managerInfo => {
    if (!managerInfo.managerContact) {
        managerInfo.managerContact = [];
    }

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the team manager's first and last name. (Input Required)",
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
            message: "What is the team manager's ID number? (Input Required)",
            validate: managerIdNumber => {
                if (managerIdNumber) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email? (Input Required)",
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'number',
            message: "What is the team manager's office number? (Input Required)",
            validate: managerNumber => {
                if (managerNumber) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: "Would you like to add additional team members?",
            validate: confirmEmployee => {
                if (confirmEmployee) {
                    return true;
                } else {
                    return false;
                }
            }
        },
    ])

    

    .then(managerCard => {
        managerInfo.managerContact.push(managerCard);
        if (managerCard.confirmAddEmployee) {
            return promptManager(managerInfo);
        } else {
            return managerInfo;
        }
    });
};

//ENGINEER
const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter engineer's first and last name. (Input Required)",
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
            message: "What is engineer's ID number? (Input Required)",
            validate: engineerIdNumber => {
                if (engineerIdNumber) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is engineer's email? (Input Required)",
            validate: engineerEmail => {
                if (engineerEmail) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is engineer's GitHub username? (Input Required)",
            validate: engineerGithub => {
                if (engineerGithub) {
                    return true;
                } else {
                    return false;
                }
            }
        },
    ])
};

//INTERN
const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter intern's first and last name. (Input Required)",
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
            message: "What is intern's ID number? (Input Required)",
            validate: internIdNumber => {
                if (internIdNumber) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is intern's email? (Input Required)",
            validate: internEmail => {
                if (internEmail) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does intern currently attend? (Input Required)",
            validate: internSchool => {
                if (internSchool) {
                    return true;
                } else {
                    return false;
                }
            }
        },
    ])
};