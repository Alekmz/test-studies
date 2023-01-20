import { queryString, parse } from "./queryString";

describe("Trasform object to query string", () => {
  it("should create a valid query string from object", () => {
    const obj = {
      name: "Alex",
      profession: "Frontend",
    };

    expect(queryString(obj)).toBe("name=Alex&profession=Frontend");
  });
  it("should create a valid query string from object with array values in object property", () => {
    const obj = {
      name: "Alex",
      abilities: ["React", "JS"],
    };

    expect(queryString(obj)).toBe("name=Alex&abilities=React,JS");
  });
  it("should return an error message when the object property value is an object", () => {
    const obj = {
      name: "Alex",
      abilities: {
        first: "React",
        second: "TDD",
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe("Transform query string to object", () => {
  it("should convert a query string to object", () => {
    const Qstring = "name=Alex&profession=Frontend";
    expect(parse(Qstring)).toEqual({
      name: "Alex",
      profession: "Frontend",
    });
  });

  it("should convert a query string into an object by transforming values ​​with a comma into arrays", () => {
    const Qstring = "name=Alex&abilities=React,JS";
    expect(parse(Qstring)).toEqual({
      name: "Alex",
      abilities: ["React", "JS"],
    });
  });
});
