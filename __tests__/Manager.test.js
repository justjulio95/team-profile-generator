/* Following properties and methods
    officeNumber
    getRole() - Overridden to return 'Manager'*/
const Manager = require('../lib/Manager')

test('creates the MANAGER object', () => {
    const manager = new Manager('Tare', '92640', 'tare@email.com', 'manager', '305-547-0000');
    //ensure inheritance works as expected
    expect(manager.name).toBe('Tare');
    expect(manager.id).toMatch(/[0-9]+/);
    expect(manager.email).toEqual(expect.stringContaining("@"));
    expect(manager.email).toEqual(expect.stringContaining(".com"));
    expect(manager.role).toBe('manager')
    // new test specific for manager
    expect(manager.officeNumber).toMatch(/[0-9]+/)
})

test('returns the OFFICENUMBER value of MANAGER', () => {
    const manager = new Manager('Tare', '92640', 'tare@email.com', 'manager', '305-547-0000');

    expect(manager.getOfficeNum()).toEqual(expect.stringContaining(manager.officeNumber))
})

test('returns the ROLE value of MANAGER', () => {
    const manager = new Manager('Tare', '92640', 'tare@email.com', 'manager', '305-547-0000');

    expect(manager.getRole()).toEqual(expect.stringContaining(manager.role))
})