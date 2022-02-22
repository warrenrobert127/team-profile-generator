
//Importing Employee constructor 
const Employee = require('../lib/Employee');
class Intern extends Employee {
  constructor(id, email, name, school) {
    super(id, email, name);
    this.school = school;
  }
  //Override employee role to intern
  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

 module.exports = Intern;