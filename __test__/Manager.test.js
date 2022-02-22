//Importing manager constructor
//const Employee = require("./Employee");
const Manager = require("../lib/Manager");
//Manager constructor extends employee constructor

test("creates an Manager object", () => {
  const manager = new Manager("Robert", 36, "warrenrobert127@gmail.com", 4);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

//Gets role from getRole()
test("gets role of employee", () => {
  const manager = new Manager("Robert", 36, "warrenrobert127@gmail.com");

  expect(manager.getRole()).toEqual("Manager");
}); 

module.exports = Manager;
