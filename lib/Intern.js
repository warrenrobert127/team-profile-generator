const Employee = require('./Employee.js')
class Intern extends Employee {
    constructor(id, email, name, schoolName) {
        super(id, email, name)
        this.schoolName = schoolName
    }
   
    getRole(){
        return "Intern"
    }
    getGithub() {
        return this.schoolName
    }
 }

 module.exports = Intern