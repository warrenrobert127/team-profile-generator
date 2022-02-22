const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

test("creates a Engineer object", () => {
  const engineer = new Engineer("Robert", 36, "warrenrobert127gmail.com");

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github) .toEqual(expect.any(String));
});

//Gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Robert", 36, "warrenrobert127gmail.com');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

//Gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Robert", 36, "warrenrobert127gmail.com');

    expect(engineer.getRole()).toEqual("Engineer");
});
