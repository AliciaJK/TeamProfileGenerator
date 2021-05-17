const Intern = require("../lib/Intern");
describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with 'id' number, 'name' string, 'school' string", () => {
      const intern = new Intern(2, "Testname", "testname@email.com", "Carleton");
      // Verify that the new object has the correct properties
      expect(intern.id).toEqual(2);
      expect(intern.name).toEqual("Testname");
      expect(intern.email).toEqual("testname@email.com");
      expect(intern.school).toEqual("Carleton");
    });
  });


describe("getRole", () => {
  it("should return the Role of Intern", () => {
    // Create new objects to test with
    const intern = new Intern(2, "Testname", "testname@email.com", "Carleton");
    // Verify that the child was added to the children array
    expect(intern.getRole()).toEqual("Intern");
  });
});

describe("getName", () => {
  it("should return the Name of Intern", () => {
    // Create new objects to test with
    const empl = new Intern(1, "Testname", "testname@email.com", "Carleton");
    // Verify that the child was added to the children array
    expect(empl.getName()).toEqual("Testname");
  });
});
describe("getId", () => {
  it("should return the Id of Intern", () => {
    // Create new objects to test with
    const empl = new Intern(1, "Testname", "testname@email.com", "Carleton");
    // Verify that the child was added to the children array
    expect(empl.getId()).toEqual(1);
  });
});
describe("getSchool", () => {
  it("should return the email of Intern", () => {
    // Create new objects to test with
    const empl = new Intern(1, "Testname", "testname@email.com", "Carleton");
    // Verify that the child was added to the children array
    expect(empl.getSchool()).toEqual("Carleton");
  });
});

})