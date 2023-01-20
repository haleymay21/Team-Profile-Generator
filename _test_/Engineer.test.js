const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
  const testGithub = "Haley";
  const employeeInstance = new Engineer(
    "Haley",
    1,
    "haley@techbiz.com",
    testGithub
  );
  expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
  const testGithub = "GavinGetsIt";
  const employeeInstance = new Engineer(
    "Haley",
    1,
    "haley@techbiz.com",
    testGithub
  );
  expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
  const returnValue = "Engineer";
  const employeeInstance = new Engineer(
    "Haley",
    1,
    "haley@techbiz.com",
    "haleymay21"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
