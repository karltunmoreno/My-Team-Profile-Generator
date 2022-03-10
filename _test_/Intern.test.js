const Intern = require('../lib/Intern');

test('create an intern class', () => {
    const intern = new Intern('Tammy','K','KTammy','UM');

    expect(intern.name).toBe('Tammy');
    expect(intern.id).toBe('K');
    expect(intern.email).toBe('KTammy');
    expect(intern.school).toBe('UM');
});

test('get the name from the string', () => {
    const intern = new Intern ('Tammy','K','KTammy','UM');
    expect(intern.getName ()).toBe('Tammy');
    expect(intern.getId ()).toBe('K');
    expect(intern.getEmail ()).toBe('KTammy');
    expect(intern.getRole ()).toBe('Intern');
    expect(intern.getSchool()).toBe('UM');
});