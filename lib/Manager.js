/* Following properties and methods
    officeNumber
    getRole() - Overridden to return 'Manager'*/

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email, role);

        this.officeNumber = officeNumber;
    }

    getOfficeNum() {
        return `If you need any help, ${this.name} can be reached at ${this.officeNumber}`
    }
}

module.exports = Manager