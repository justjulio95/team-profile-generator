/* Following properties and methods
    github (CHECK)
    getGithub() (CHECK)
    getRole() - Overridden to return 'Engineer' (CHECK)*/
const Engineer = require('../lib/Engineer')

test('create the ENGINEER object', () => {
    const engineer = new Engineer('Troy', '12345', 'troy@sao.com', 'yort93')
    // ensure inheritance works as expected
    expect(engineer.name).toBe('Troy');
    expect(engineer.id).toMatch(/[0-9]+/);
    expect(engineer.email).toEqual(expect.stringContaining("@"));
    expect(engineer.email).toEqual(expect.stringContaining(".com"));
    // new test specific for engineer
    expect(engineer.github).toBe('yort93')
})

// new test specific for engineer
test('returns GITHUB value of ENGINEER', () => {
    const engineer = new Engineer('Troy', '12345', 'troy@sao.com', 'engineer', 'yort93')

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github))
})

test('returns ROLE value of ENGINEER', () => {
    const engineer = new Engineer('Troy', '12345', 'troy@sao.com', 'engineer', 'yort93')

    expect(engineer.getRole()).toBe('Engineer')
})