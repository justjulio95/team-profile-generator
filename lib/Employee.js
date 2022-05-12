/* Following properties and methods
    Name (CHECK)
    id (CHECK)
    Email (CHECK)
    getName() (CHECK)
    getId() (CHECK)
    getEmail() (CHECK)
    getRole() - returns 'Employee'*/

class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName() {
        return `This employee is ${this.name}. They're happy to help!`
    }

    getId() {
        return `${this.name}'s work ID is ${this.id}`
    }

    getEmail() {
        return `${this.name}'s work email is ${this.email}`
    }

    getRole() {
        return `${this.name}'s role here is ${this.role}`
    }
}

module.exports = Employee;