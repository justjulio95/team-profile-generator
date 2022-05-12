/* Following properties and methods
    school (CHECK)
    getSchool()
    getRole() - Overridden to return 'Intern'*/
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern')

test('create the INTERN object', () => {
    const intern = new Intern('Tate', '56290', 'tate@random.com', 'intern', 'UAB');
    //ensure inheritance works as expected
    expect(intern.name).toBe('Tate');
    expect(intern.id).toMatch(/[0-9]+/);
    expect(intern.email).toEqual(expect.stringContaining("@"));
    expect(intern.email).toEqual(expect.stringContaining(".com"));
    expect(intern.role).toBe('intern')
    // new test specific for intern
    expect(intern.school).toBe('UAB')
})

test('returns the SCHOOL value of INTERN', () => {
    const intern = new Intern('Tate', '56290', 'tate@random.com', 'intern', 'UAB');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
})

test('returns the ROLE value of INTERN', () => {
    const intern = new Intern('Tate', '56290', 'tate@random.com', 'intern', 'UAB');

    expect(intern.getRole()).toEqual(expect.stringContaining(intern.role))
})