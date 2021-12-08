var sum = require("./index.js");

describe("Testing", function () {
  test("It should return sum", function () {
    expect(sum([1, 2, 3, 4, 5])).toEqual(15);
  });

  test("It should return sum", function () {
    expect(sum([2, 4, 6, 8, 10])).toEqual(30);
  });

  test("It should return sum", function () {
    expect(sum([1, 3, 5, 7, 9])).toEqual(25);
  });

  test("It should return sum", function () {
    expect(sum([1, 2, 3])).toBe(6);
  });
});
