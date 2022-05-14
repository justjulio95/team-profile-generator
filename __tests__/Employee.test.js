/* Following properties and methods
    Name (CHECK)
    id (CHECK)
    Email (CHECK)
    getName() (CHECK)
    getId() (CHECK)
    getEmail() (CHECK)
    getRole() - returns 'Employee'*/

const Employee = require('../lib/Employee')

test('creates an EMPLOYEE object', () => {
    const employee = new Employee('Shawn', '22611', 'shawn@sao.com')

    expect(employee.name).toBe('Shawn');
    expect(employee.id).toMatch(/[0-9]+/);
    expect(employee.email).toEqual(expect.stringContaining("@"));
    expect(employee.email).toEqual(expect.stringContaining(".com"));
})

test('returns the NAME value of EMPLOYEE', () => {
    const employee = new Employee('Shawn');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name))
})

test('returns the ID value of EMPLOYEE', () => {
    const employee = new Employee('Shawn', '22611')

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id))
})

test('returns the EMAIL value of EMPLOYEE', () => {
    const employee = new Employee('Shawn', '22611', 'shawn@sao.com')

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email))
})

test('returns the ROLE value of EMPLOYEE', () => {
    const employee = new Employee('Shawn', '22611', 'shawn@sao.com')

    expect(employee.getRole()).toBe('Employee')
})