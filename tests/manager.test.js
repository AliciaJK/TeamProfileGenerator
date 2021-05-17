const Manager = require("../lib/Manager");
describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with 'id' number, 'name' string, 'email' string", () => {
      const empl = new Manager(1,"Testname", "testname@email.com", 4);
      // Verify that the new object has the correct properties
      expect(empl.id).toEqual(1);
      expect(empl.name).toEqual("Testname");
      expect(empl.email).toEqual("testname@email.com");
      expect(empl.officeNumber).toEqual(4);
    });
  });


  describe("getRole", () => {
    it("should return the Role of Engineer", () => {
      // Create new objects to test with
      const empl = new Manager(1,"Testname", "testname@email.com",5);
      // Verify that the child was added to the children array
      expect(empl.getRole()).toEqual("Manager");
    });
  });
  describe("getName", () => {
    it("should return the Name of employee", () => {
      // Create new objects to test with
      const empl = new Manager(1,"Testname", "testname@email.com",5);
      // Verify that the child was added to the children array
      expect(empl.getName()).toEqual("Testname");
    });
  });
  describe("getId", () => {
    it("should return the Id of employee", () => {
      // Create new objects to test with
      const empl = new Manager(1,"Testname", "testname@email.com",5);
      // Verify that the child was added to the children array
      expect(empl.getId()).toEqual(1);
    });
  });
  describe("getOfficeNumber", () => {
    it("should return the email of employee", () => {
      // Create new objects to test with
      const empl = new Manager(1,"Testname", "testname@email.com",5);
      // Verify that the child was added to the children array
      expect(empl.getEmail()).toEqual("testname@email.com");
    });
  });
});