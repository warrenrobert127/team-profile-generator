// employee constructor

class Employee {
  constructor(id, email, name) {
    this.id = id;
    this.email = email;
    this.name = name;
  }
  // returning ID from input
  getId() {
    return this.id;
  }
  // returning employee type
  getRole() {
    return "Employee";
  }
  // returning name from input
  getName() {
    return this.name;
  }
  // returning email from input
  getEmail() {
    return this.email;
  }
}

module.exports = Employee;
