import { sum } from "./calculator";

it("should sum 2 and 2", () => {
  expect(sum(2, 2)).toBe(4);
});

it("should sum 2 and 2 in string format and the result equals 4", () => {
  expect(sum("2", "2")).toBe(4);
});

it("should return an error message on invalid inputs", () => {
  expect(() => {
    sum("", 2);
  }).toThrowError();

  expect(() => {
    sum([]);
  }).toThrowError();

  expect(() => {
    sum({});
  }).toThrowError();

  expect(() => {
    sum();
  }).toThrowError();
});
