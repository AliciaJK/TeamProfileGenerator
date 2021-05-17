const Employee = require("../lib/employee.js");
describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with 'id' number, 'name' string, 'email' string", () => {
      const empl = new Employee(1,"Testname", "testname@email.com");
      // Verify that the new object has the correct properties
      expect(empl.id).toEqual(1);
      expect(empl.name).toEqual("Testname");
      expect(empl.email).toEqual("testname@email.com");
    });
  });

describe("getName", () => {
  it("should return the Name of Employee", () => {
    // Create new objects to test with
    const empl = new Employee(1, "Testname", "testname@email.com", 5);
    // Verify that the child was added to the children array
    expect(empl.getName()).toEqual("Testname");
  });
});

describe("getId", () => {
  it("should return the Id of Employee", () => {
    // Create new objects to test with
    const empl = new Employee(1, "Testname", "testname@email.com", 5);
    // Verify that the child was added to the children array
    expect(empl.getId()).toEqual(1);
  });
});

})