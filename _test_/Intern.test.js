const Intern = require("../lib/Intern");

test("Can create school.", () => {
  const testSchool = "University of California Berkeley";
  const employeeInstance = new Intern(
    "Madeline",
    2,
    "maddfinn@gmail.com",
    testSchool
  );
  expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
  const testSchool = "University of California Berkeley";
  const employeeInstance = new Intern(
    "Madeline",
    2,
    "maddfinn@gmail.com",
    testSchool
  );
  expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
  const returnValue = "Intern";
  const employeeInstance = new Intern(
    "Madeline",
    2,
    "maddfinn@gmail.com",
    "University of California Berkeley"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
