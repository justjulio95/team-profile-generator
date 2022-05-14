/* Following properties and methods
    Name (CHECK)
    id (CHECK)
    Email (CHECK)
    getName() (CHECK)
    getId() (CHECK)
    getEmail() (CHECK)
    getRole() - returns 'Employee'*/

// initialize an EMPLOYEE class with general parameters that ALL employees will have
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;