const Employee = require('./Employee.js')
class Manager extends Employee {
    constructor(id, email, name, officeNumber) {
        super(id, email, name)
        this.officeNumber = officeNumber
    }
   
    getRole(){
        return "Manager"
    }
 /*    getGithub() {
        return this.officeNumber
    } */
 } 
//To be exported 
 module.exports = Manager