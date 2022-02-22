
//Importing Employee constructor 

const Employee = require('./Employee.js')
class Intern extends Employee {
  constructor(id, email, name, schoolName) {
    super(id, email, name);
    this.schoolName = schoolName;
  }
  //Override employee role to intern
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.schoolName;
  }
}

 module.exports = Intern;