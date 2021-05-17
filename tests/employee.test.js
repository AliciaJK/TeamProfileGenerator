const Employee = require("../Employee");
describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with 'id' number, 'name' string, 'email' string", () => {
      const empl = new Employee(1,"Testname", "testname@email.com", 4);
      // Verify that the new object has the correct properties
      expect(empl.id).toEqual(1);
      expect(empl.name).toEqual("Testname");
      expect(empl.email).toEqual("testname@email.com");
      expect(empl.officeNumber).toEqual(4);
    });
    it("should throw an error if provided no arguments", () => {
        // Wrap the object initialization in a callback function that Jest will run
        const empl = () => new Employee();
        // Verify that an error was thrown in the callback function
        expect(empl).toThrow();
      });
  });
})