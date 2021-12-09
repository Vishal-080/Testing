var timer = require("./timer");

describe("Check Timer Converter", () => {
  test("Convert your Time", () => {
    expect(timer(5200)).toBe("5 seconds");
  });
  test("Convet your Time", () => {
    expect(timer(60000)).toBe("1 minute");
  });
  test("Convet your Time", () => {
    expect(timer(180000)).toBe("3 minutes");
  });
  test("Convet your Time", () => {
    expect(timer(200000)).toBe("3 minutes 20 seconds");
  });
});
