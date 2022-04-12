// Parent Class with following properties and methods
//name
//id
//email
// --- officeNumber
//getName()
//getId()
//getEmail()
//getRole() <--- returns `Manager`

const Manager = require('../lib/Manager.js');

test ('creates new Manager object', () => {
    const manager = new Manager();

    expect(manager.number).not.toBeNan;
});