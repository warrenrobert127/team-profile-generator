const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

test("creates a Engineer object", () => {
  const engineer = new Engineer('Robert', '36', 'warrenrobert127gmail.com', 'warrenrobert127')

  
  expect(engineer.github) .toEqual(expect.any(String));
});

//Gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Robert', 36, 'warrenrobert127gmail.com',"warrenrobert127")

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

//Gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Robert', 36, 'warrenrobert127gmail.com', 'warrenrobert127')

    expect(engineer.getRole()).toEqual("Engineer");
});
