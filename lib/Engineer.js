const Employee = require('./Employee.js')
class Engineer extends Employee {
    constructor(id, email, name, github) {
        super(id, email, name)
        this.github = github
    }
   
    getRole(){
        return "Engineer"
    }
    getGithub() {
        return this.github
    }
 }

 module.exports = Engineer