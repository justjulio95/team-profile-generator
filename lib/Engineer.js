/* Following properties and methods
    github
    getGithub()
    getRole() - Overridden to return 'Engineer'*/

const Employee = require("./Employee");
//Initialize an ENGINEER class inheriting properties and methods from EMPLOYEE
class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email, role)

        this.github = github
    }

    getGithub() {
        return `${this.name}'s github user name is ${this.github}`
    }
}

module.exports = Engineer;