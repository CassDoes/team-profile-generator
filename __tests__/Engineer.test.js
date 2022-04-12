// Parent Class with following properties and methods
//name
//id
//email
//--- github <--- GitHub username
//getName()
//getId()
//getEmail()
//---getGithub()
//getRole() <--- returns `Engineer`

const Engineer = require('../lib/Engineer.js');
const Employee = require('../lib/Employee.js');

test ('creates new engineer object', () => {
    const engineer = new Engineer();

    expect(engineer.github).toEqual(expect.any(String));
});