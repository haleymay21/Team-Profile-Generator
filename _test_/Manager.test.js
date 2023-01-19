const Manager = require("../lib/Manager");

test("Can create an office number.", () => {
  const testOfficeNumber = 10;
  const employeeInstance = new Manager(
    "Harry",
    10,
    "harry_p@techbiz.com",
    testOfficeNumber
  );
  expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
  const testOfficeNumber = 10;
  const employeeInstance = new Manager(
    "Harry",
    10,
    "harry_p@techbiz.com",
    testOfficeNumber
  );
  expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
  const returnValue = "Manager";
  const employeeInstance = new Manager("Harry", 10, "harry_p@techbiz.com", 10);
  expect(employeeInstance.getRole()).toBe(returnValue);
});
