const Employee = require('../lib/Employee');
class Manager extends Employee {
    constructor(id, email, name, officeNumber) {
        super(id, email, name);
        this.officeNumber = officeNumber;
    }
   
    getRole(){
        return "Manager";
    }
 
 } 
//To be exported 
 module.exports = Manager;