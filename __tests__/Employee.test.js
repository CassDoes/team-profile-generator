
const Employee = require('../lib/Employee.js');

test('creates new employee object', () => {
    const employee = new Employee('Jane', 456, 'cass@yahoo.com');

    expect(employee.name).toBe('Jane');
    expect(employee.idNumber).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name", () => {
    const employee = new Employee('Jane', 456, 'cass@yahoo.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test("gets employee's ID number", () => {
    const employee = new Employee('Jane', 456, 'cass@yahoo.com');
    
    expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets employee's email", () => {
    const employee = new Employee('Jane', 456, 'cass@yahoo.com');
    
    expect(employee.getEmail()).toEqual(expect.any(String));
});

test("gets employee's role", () => {
    const employee = new Employee('Jane', 456, 'cass@yahoo.com');
    
    expect(employee.getRole()).toBe('Employee');
});
