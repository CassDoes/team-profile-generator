const Engineer = require('../lib/Engineer.js');

test ('creates new engineer object', () => {
    const engineer = new Engineer('Jane', 456, 'cass@yahoo.com', 'cassdoes');

    expect(engineer.name).toEqual(expect.any(String));
});

test ("gets engineer's role", () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe('Engineer');
});