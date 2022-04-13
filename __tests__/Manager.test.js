const Manager = require('../lib/Manager.js');

test ('creates new Manager object', () => {
    const manager = new Manager('Jane', 456, 'cass@yahoo.com', '555-789-9349');

    expect(manager.officeNumber).toEqual(expect.any(String));
});

test ("gets manager's role", () => {
    const manager = new Manager();

    expect(manager.getRole()).toBe('Manager');
});