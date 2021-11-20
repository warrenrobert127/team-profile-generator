class Employee {
    constructor(id, email, name) {
        this.id = id
        this.email = email
        this.name = name
    }
    getId(){
        return this.id
    }
    getRole(){
        return "Employee"
    }
    getName() {
        return this.name
    }
    getEmail() {
        return this.email
    }
 }

 module.exports = Employee