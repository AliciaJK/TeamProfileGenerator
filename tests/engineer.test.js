const Engineer = require("../lib/Engineer");
describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with 'id' number, 'name' string, 'email' string", () => {
      const empl = new Engineer(1,"Testname", "testname@email.com", "aliciajk");
      // Verify that the new object has the correct properties
      expect(empl.id).toEqual(1);
      expect(empl.name).toEqual("Testname");
      expect(empl.email).toEqual("testname@email.com");
      expect(empl.gitHub).toEqual("aliciajk");
    });
  });


// describe("getRole", () => {
//     it("should return the Role of Engineer", () => {
//       // Create new objects to test with
//       const engineer = new Engineer(2, "Testname", "testname@email.com", "aliciajk");
//       // Verify that the child was added to the children array
//       expect(engineer.getRole()).toEqual("Engineer");
//     });
//   });
  
  describe("getName", () => {
    it("should return the Name of Engineer", () => {
      // Create new objects to test with
      const empl = new Engineer(1, "Testname", "testname@email.com", "aliciajk");
      // Verify that the child was added to the children array
      expect(empl.getName()).toEqual("Testname");
    });
  });
  describe("getId", () => {
    it("should return the Id of Engineer", () => {
      // Create new objects to test with
      const empl = new Engineer(1, "Testname", "testname@email.com", "aliciajk");
      // Verify that the child was added to the children array
      expect(empl.getId()).toEqual(1);
    });
  });


  describe("getGitHub", () => {
    it("should return the email of Engineer", () => {
      // Create new objects to test with
      const empl = new Engineer(1, "Testname", "testname@email.com", "aliciajk");
      // Verify that the child was added to the children array
      expect(empl.getGitHub()).toEqual("aliciajk");
    });
  });
})