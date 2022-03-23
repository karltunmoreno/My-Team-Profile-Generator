const Engineer = require('../lib/Engineer');

// test('create an engineer class', () => {
//     const engineer = new Engineer ('Slater','J','Garryhub','Garry');

//     expect(engineer.name).toBe('Slater');
//     expect(engineer.id).toBe('J');
//     expect(engineer.email).toBe('Garryhub');
//     expect(engineer.github).toBe('Garry');

// });

test('get the name from the string', () => {
    const engineer = new Engineer ('Slater');

    expect(engineer.getName ()).toBe('Slater');
    //expect(engineer.getId ()).toBe('J');
    // expect(engineer.getEmail ()).toBe('Garryhub');
    // expect(engineer.getRole ()).toBe('Engineer');
    // expect(engineer.getGithub ()).toBe('Garry');

});