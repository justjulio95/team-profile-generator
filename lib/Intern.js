/* Following properties and methods
    school (CHECK)
    getSchool()
    getRole() - Overridden to return 'Intern'*/

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role)

        this.school = school
    }

    getSchool() {
        return `${this.name} is an ${this.role} helping us from ${this.school}`;
    }
}

module.exports = Intern;