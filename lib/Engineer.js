const Employee = require('./Employee.js')
class Engineer extends Employee {
    constructor(id, email, name, github) {
        //Calling employee constructor
        super(id, email, name)
        this.github = github
    }
   
    getRole(){
        return "Engineer";
    }
    //Returning github from input
    getGithub() {
        return this.github;
    }
 }

 module.exports = Engineer