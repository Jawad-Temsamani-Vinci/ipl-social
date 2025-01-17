const { isPasswordValid } = require ("../src/passwordChecker");

describe("Password Validation", function() {
    it("should be at least 8 characters long", function() {
        const password = "mypassword";
        expect(isPasswordValid(password)).toBe(true);
    });
    it("should be invalid if less than 8 characters long", function() {
        const password = "short";
        expect(isPasswordValid(password)).toBe(false);
    });
});