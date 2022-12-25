const { sum } = require("./calculator");

it("should sum 2 and 2", () => {
  expect(sum(2, 2)).toBe(4);
});
