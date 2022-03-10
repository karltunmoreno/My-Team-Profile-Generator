const Engineer = require('../lib/Engineer');

test('create an engineer class', () => {
    const engineer = new Engineer('Slater','J','Garry','Garryhub');

    expect(engineer.name).toBe('Slater');
    expect(engineer.id).toBe('J');
    expect(engineer.email).toBe('Garry');
    expect(engineer.github).toBe('Garryhub');

});

test('get the name from the string', () => {
    const engineer = new Engineer ('Slater','J','Garry','Garryhub');

    expect(engineer.getName ()).toBe('Slater');
    expect(engineer.getId ()).toBe('J');
    expect(engineer.getEmail ()).toBe('Garry');
    expect(engineer.getRole ()).toBe('Engineer');
    expect(engineer.getGithub ()).toBe('Garryhub');

});