// Parent Class with following properties and methods
//name
//id
//email
//getName()
//getId()
//getEmail()
//getRole() <--- returns `Employee`

const Employee = require('../lib/Employee.js');

test ('creates new employee object', () => {
    const employee = new Employee('Jane');

    expect(employee.name).toBe('Jane');
    expect(employee.idNumber).not.toBeNan;
    expect(employee.email).toEqual(expect.any(String));
});