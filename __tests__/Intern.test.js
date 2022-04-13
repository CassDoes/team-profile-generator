const Intern = require('../lib/Intern.js');

test ('creates new Intern object', () => {
    const intern = new Intern('Jane', 456, 'cass@yahoo.com', 'UT Bootcamp');

    expect(intern.school).toEqual(expect.any(String));
});

test ("gets intern's role", () => {
    const intern = new Intern();

    expect(intern.getRole()).toBe('Intern');
});