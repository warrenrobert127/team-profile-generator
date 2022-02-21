const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

test("creates a Engineer object", () => {
  const ngineer = new Engineer("Robert", 36, "warrenrobert127gmail.com");

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
});
