var password = require('./password.js');

describe("Test cases", function () {
    test ("password should contain AlphaNumeric", function () {
        expect(password("123@Vishal")).toBeTruthy();
    }),
    test ("password should contain Symbol", function () {
        expect(password("12vishal")).toBeTruthy();
    }),
    test ("password should contain Numeric values", function () {
        expect(password("Vishal")).toBeTruthy();
    }),
    test ("password should contain AlphaNumeric", function () {
        expect(password("123@Vi")).toBeTruthy();
    }),
    test ("password should contain AlphaNumeric", function () {
        expect(password("123@Vishal")).toBeTruthy();
    }),
    test ("password should contain Alphabets", function () {
        expect(password("123456789")).toBeTruthy();
    }),
    test ("password should contain AlphaNumeric", function () {
        expect(password("#$%^&&**")).toBeTruthy();
    }),
    test ("password should contain symbol", function () {
        expect(password("123Vishal")).toBeTruthy();
    }),
    test ("password should contain AlphaNumeric", function () {
        expect(password("123hal")).toBeTruthy();
    }),
    test ("password should contain AlphaNumeric", function () {
        expect(password("123@Vishal")).toBeTruthy();
    });
});