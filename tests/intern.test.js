const Intern = require("../lib/Intern");
describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with 'id' number, 'name' string, 'school' string", () => {
      const intern = new Intern(2,"Testname", "testname@email.com", "Carleton");
      // Verify that the new object has the correct properties
      expect(intern.id).toEqual(2 );
      expect(intern.name).toEqual("Testname");
      expect(intern.email).toEqual("testname@email.com");
      expect(intern.school).toEqual("Carleton");
    });
    it("should throw an error if provided no arguments", () => {
        // Wrap the object initialization in a callback function that Jest will run
        const empl = () => new Intern();
        // Verify that an error was thrown in the callback function
        expect(empl).toThrow();
      });
  });
})



describe("getRole", () => {
  it("should return the Role of Manager", () => {
    // Create new objects to test with
    const intern = new Intern(2,"Testname", "testname@email.com", "Carleton");
    // Verify that the child was added to the children array
    expect(intern.getRole()).toEqual("Intern");
  });
});
