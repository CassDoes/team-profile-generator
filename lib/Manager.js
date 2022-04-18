const Employee = require('./Employee');


class Manager extends Employee {
    constructor(name, idNumber, email, officeNumber, company) {
        super(name, idNumber, email);
        this.officeNumber = officeNumber;
        this.company = company;
    }

    getRole() {
        return 'Manager';
    }

    
}


module.exports = Manager;