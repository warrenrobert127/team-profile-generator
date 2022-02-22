const Employee = require('../lib/Employee');


class Engineer extends Employee {
    constructor(id, email, name, github) {
        //Calling employee constructor
        super(id, email, name)
        this.github = github;
    }
   
    getRole(){
        return "Engineer";
    }
    //Returning github from input
    getGithub() {
        return this.github;
    }
 }
//to be exported
 module.exports = Engineer;