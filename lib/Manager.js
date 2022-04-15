const Employee = require('./Employee');


class Manager extends Employee {
    constructor(name, idNumber, email, officeNumber) {
        super(name, idNumber, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }

    
}


module.exports = Manager;