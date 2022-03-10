const Employee = require('../lib/Employee');

test('create and employee class', () => {
    const employee = new Employee('Karltun','KM','Gmail');

    expect(employee.name).toBe('Karltun');
    expect(employee.id).toBe('KM');
    expect(employee.email).toBe('Gmail');

});

test('get the name from the string', () => {
    const employee = new Employee ('Karltun','KM','Gmail');

    expect(employee.getName ()).toBe('Karltun');
    expect(employee.getId ()).toBe('KM');
    expect(employee.getEmail ()).toBe('Gmail');
    expect(employee.getRole ()).toBe('Employee')

});