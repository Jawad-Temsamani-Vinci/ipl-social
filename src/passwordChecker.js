function isPasswordLengthValid(password) {
    return password.length >= 8;
}

function isPasswordSpecialCharValid(password) {
    const specialChars = "!@#$%^&*()_+[]{}|;:',.<>?/~`-=";
    let containsSpecialChar = false;
    for (let char of password) {
        if (specialChars.includes(char)) {
            containsSpecialChar = true;
            break;
        }
    }
    return containsSpecialChar;
}

function isPasswordContainsNumber(password) {
    return /\d/.test(password);
}
function isPasswordNotContainIPL(password) {
    return !/ipl/i.test(password);
}

function isPasswordValid(password) {
    return isPasswordLengthValid(password) &&
           isPasswordSpecialCharValid(password) &&
           isPasswordContainsNumber(password) &&
           isPasswordNotContainIPL(password);
}

module.exports = {isPasswordLengthValid, isPasswordSpecialCharValid, isPasswordContainsNumber, isPasswordNotContainIPL, isPasswordValid};
