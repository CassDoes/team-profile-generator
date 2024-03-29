const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, idNumber, email, github) {
        super(name, idNumber, email);
        this.github = github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;

