const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, idNumber, email, school) {
        super(name, idNumber, email);
        this.school = school;
    }

    getRole() {
        return 'Intern';
    }

}   

module.exports = Intern;