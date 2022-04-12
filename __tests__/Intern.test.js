// Parent Class with following properties and methods
//name
//id
//email
//---school
//getName()
//getId()
//getEmail()
//---getSchool()
//getRole() <--- returns `Intern`

const Intern = require('../lib/Intern.js');

test ('creates new Intern object', () => {
    const intern = new Intern();

    expect(intern.school).toEqual(expect.any(String));
});