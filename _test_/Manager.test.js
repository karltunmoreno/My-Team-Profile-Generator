const Manager = require('../lib/Manager');

test('create a manager class', () => {
    const manager = new Manager('Mike','Money','MoneyMike','Number_1');

    expect(manager.name).toBe('Mike');
    expect(manager.id).toBe('Money');
    expect(manager.email).toBe('MoneyMike');
    expect(manager.officeNumber).toBe('Number_1');

});

test('get the name from the string', () => {
    const manager = new Manager ('Mike','Money','MoneyMike','Number_1');

    expect(manager.getName ()).toBe('Mike');
    expect(manager.getId ()).toBe('Money');
    expect(manager.getEmail ()).toBe('MoneyMike');
    expect(manager.getRole ()).toBe('Manager');
    expect(manager.getOfficeNumber ()).toBe('Number_1');
});