const { isPasswordValid, isPasswordLengthValid, isPasswordSpecialCharValid, isPasswordContainsNumber, isPasswordNotContainIPL } = require("../src/passwordChecker");

describe("Password Validation", function() {
    it("should be at least 8 characters long", function() {
        const password = "mypassword";
        expect(isPasswordLengthValid(password)).toBe(true);
    });
    it("should be invalid if less than 8 characters long", function() {
        const password = "short";
        expect(isPasswordLengthValid(password)).toBe(false);
    });
    it("should be invalid if it does not contain a special character", function() {
        const password = "password123";
        expect(isPasswordSpecialCharValid(password)).toBe(false);
    });
    it("should be valid if it contains a special character", function() {
        const password = "password@123";
        expect(isPasswordSpecialCharValid(password)).toBe(true);
    });
    it("should be invalid if it does not contain a number", function() {
        const password = "password@";
        expect(isPasswordContainsNumber(password)).toBe(false);
    });
    it("should be valid if it contains a number", function() {
        const password = "password1@";
        expect(isPasswordContainsNumber(password)).toBe(true);
    });
    it("should be invalid if it contains 'ipl'", function() {
        const password = "passwordipl";
        expect(isPasswordNotContainIPL(password)).toBe(false);
    });
    it("should be valid if it does not contain 'ipl'", function() {
        const password = "password123";
        expect(isPasswordNotContainIPL(password)).toBe(true);
    });
    it("should be valid if all conditions are met", function() {
        const password = "Valid@123";
        expect(isPasswordValid(password)).toBe(true);
    });
    it("should be invalid if any condition is not met", function() {
        const password = "short1@";
        expect(isPasswordValid(password)).toBe(false);
    });
});