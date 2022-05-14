/* Following properties and methods
    officeNumber
    getRole() - Overridden to return 'Manager'*/

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNum() {
        return `If you need any help, ${this.name} can be reached at ${this.officeNumber}`
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager